import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Stethoscope,
  GraduationCap,
  Building2,
  Store,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";

const industryData: Record<string, any> = {
  healthcare: {
    title: "Healthcare & Life Sciences Digital Solutions",
    subtitle: "HIPAA-compliant, high-intent patient acquisition and AI healthcare workflows",
    icon: Stethoscope,
    badge: "Healthcare & Pharma Vertical",
    stats: [
      { label: "Patient Conversions", value: "+320%" },
      { label: "Cost Per Acquisition", value: "-45%" },
      { label: "Search Visibility", value: "#1 Rank" },
      { label: "HIPAA & Compliance", value: "100%" },
    ],
    challenges: [
      "Strict HIPAA & medical ad policy restrictions on Meta and Google",
      "High cost-per-click for competitive healthcare and specialist keywords",
      "Building patient trust and retaining repeat care visits online",
      "Managing multi-location clinic SEO and Google Business Profiles",
    ],
    solutions: [
      "AI-driven high-intent local medical search optimization (Healthcare SEO)",
      "HIPAA-compliant landing page funnels with direct appointment booking",
      "Targeted Google Search & Remarketing campaigns for specialized treatments",
      "Automated WhatsApp & SMS appointment reminders to reduce no-shows",
    ],
    caseStudy: {
      client: "Apex Health Clinics Network",
      results: "Generated 4,500+ booked appointments in 90 days with a 38% lower cost per lead.",
    },
  },
  education: {
    title: "EdTech & Education Digital Growth",
    subtitle: "Scale student enrollments with precision funnel marketing & AI counseling bots",
    icon: GraduationCap,
    badge: "EdTech & University Vertical",
    stats: [
      { label: "Qualified Leads", value: "+450%" },
      { label: "Admission Conversion", value: "3.4x" },
      { label: "CPL Reduction", value: "-52%" },
      { label: "Bot Engagement", value: "88%" },
    ],
    challenges: [
      "Long inquiry-to-admission decision cycles among prospective students",
      "High lead drop-off rates on standard inquiry forms",
      "Seasonal admission surges requiring instant campaign scaling",
      "Differentiating courses against aggressive EdTech competitors",
    ],
    solutions: [
      "AI Counselor Chatbots providing instant course guidance 24/7",
      "Performance Meta & Google lead ads targeting high-intent students",
      "Automated email & WhatsApp lead nurturing sequences",
      "Interactive tuition calculator & admission funnel landing pages",
    ],
    caseStudy: {
      client: "Global Scholars Institute",
      results: "Increased fall enrollment by 210% while reducing marketing acquisition cost by 52%.",
    },
  },
  "real-estate": {
    title: "Real Estate & Housing Marketing Ecosystems",
    subtitle: "High-value buyer lead generation and immersive 3D project showcases",
    icon: Building2,
    badge: "Real Estate & Commercial Vertical",
    stats: [
      { label: "Site Visit Bookings", value: "1,200+" },
      { label: "Qualified Buyers", value: "+280%" },
      { label: "Cost Per Lead", value: "₹450" },
      { label: "Pipeline Value", value: "₹150 Cr+" },
    ],
    challenges: [
      "Distinguishing genuine high-net-worth buyers from casual window shoppers",
      "Managing location-specific keyword competition on Google Search",
      "Showcasing luxury project amenities virtually before site visits",
      "Long transaction closing cycles requiring multi-touch remarketing",
    ],
    solutions: [
      "Hyper-targeted Meta video ads featuring 3D virtual walkthroughs",
      "Geo-fenced Google Search campaigns for luxury residential buyers",
      "Automated instant WhatsApp brochures & interactive price sheet bots",
      "CRM integration with immediate sales-agent lead routing",
    ],
    caseStudy: {
      client: "Skyline Luxury Builders",
      results: "Sold out 85% of Phase-1 luxury apartments within 60 days of digital launch.",
    },
  },
  ecommerce: {
    title: "E-Commerce & Retail Revenue Engine",
    subtitle: "Scale Shopify & custom storefronts with ROAS-first Meta, Google & TikTok ads",
    icon: Store,
    badge: "E-Commerce & Retail Vertical",
    stats: [
      { label: "Average ROAS", value: "5.8x" },
      { label: "Monthly Revenue", value: "₹2.5 Cr+" },
      { label: "Cart Abandonment", value: "-35%" },
      { label: "Repeat Purchase", value: "42%" },
    ],
    challenges: [
      "Rising CPMs and customer acquisition costs across Meta and TikTok",
      "High shopping cart abandonment rates on mobile devices",
      "Inventory syncing and multi-catalog feed management",
      "Maximizing customer lifetime value (LTV) through retention",
    ],
    solutions: [
      "High-ROAS Meta Advantage+ & Google Performance Max catalog ads",
      "Custom Next.js & Shopify headless storefronts loading in <0.8s",
      "Klaviyo automated email & SMS cart recovery sequences",
      "AI product recommendation engines driving higher Average Order Value (AOV)",
    ],
    caseStudy: {
      client: "UrbanStyle Fashion Brand",
      results: "Scaled monthly online store revenue from ₹15L to ₹1.2 Cr in 8 months at 6.2x ROAS.",
    },
  },
};

export function generateStaticParams() {
  return [
    { industry: "healthcare" },
    { industry: "education" },
    { industry: "real-estate" },
    { industry: "ecommerce" },
  ];
}

export default async function IndustrySinglePage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const data = industryData[industry];

  if (!data) {
    notFound();
  }

  const IconComponent = data.icon;

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* ── Hero Section ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-6 border border-primary/20">
              <IconComponent className="w-4 h-4" />
              <span>{data.badge}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight leading-[1.15] mb-6">
              {data.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8 max-w-2xl">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="shadcn-input-button-solid">
                <span>Request {data.badge} Audit</span>
                <span className="badge-icon">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Performance Metrics ── */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {data.stats.map((stat: any) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Challenges vs Solutions ── */}
      <section className="py-20 bg-surface/50">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Industry Challenges */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  !
                </div>
                <h3 className="text-2xl font-bold text-secondary">Common Industry Bottlenecks</h3>
              </div>
              <ul className="space-y-4">
                {data.challenges.map((c: string) => (
                  <li key={c} className="flex items-start gap-3 text-slate-700 text-sm md:text-base font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Adyantra Engineered Solutions */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Our Engineered Strategy</h3>
              </div>
              <ul className="space-y-4">
                {data.solutions.map((s: string) => (
                  <li key={s} className="flex items-start gap-3 text-slate-700 text-sm md:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Featured Case Study Spotlight ── */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          <div className="bg-gradient-to-r from-secondary to-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest">Verified Case Study Spotlight</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">{data.caseStudy.client}</h3>
              <p className="text-slate-300 text-base md:text-lg mt-3 max-w-xl font-medium">
                &ldquo;{data.caseStudy.results}&rdquo;
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shrink-0 flex items-center gap-2 shadow-lg"
            >
              <span>Read Full Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
