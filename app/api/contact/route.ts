import { NextResponse } from "next/server";

// Simple in-memory sliding window rate limiter
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

const WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS = 5; // 5 requests per minute per IP

function getRateLimitInfo(ip: string): { allowed: boolean; remaining: number; resetTime: number; limit: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up expired entry or create new
  if (!record || now > record.resetTime) {
    const resetTime = now + WINDOW_MS;
    rateLimitMap.set(ip, { count: 1, resetTime });
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetTime, limit: MAX_REQUESTS };
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime, limit: MAX_REQUESTS };
  }

  record.count += 1;
  rateLimitMap.set(ip, record);
  return { allowed: true, remaining: MAX_REQUESTS - record.count, resetTime: record.resetTime, limit: MAX_REQUESTS };
}

// Periodically clean stale IP keys every 5 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export async function POST(req: Request) {
  try {
    // Extract client IP address from headers
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const { allowed, remaining, resetTime, limit } = getRateLimitInfo(ip);
    const resetSeconds = Math.ceil((resetTime - Date.now()) / 1000);

    const rateLimitHeaders = {
      "X-RateLimit-Limit": limit.toString(),
      "X-RateLimit-Remaining": remaining.toString(),
      "X-RateLimit-Reset": Math.ceil(resetTime / 1000).toString(),
    };

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before sending another message." },
        {
          status: 429,
          headers: {
            ...rateLimitHeaders,
            "Retry-After": resetSeconds.toString(),
          },
        }
      );
    }

    const data = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400, headers: rateLimitHeaders }
      );
    }

    // Email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400, headers: rateLimitHeaders }
      );
    }

    // Simulate network delay for realistic feedback
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: "Thank you! Your message has been sent successfully." },
      { status: 200, headers: rateLimitHeaders }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

