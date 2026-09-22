"use client";

import React, { useState } from "react";

interface MessageItem {
  sender: "bot" | "user";
  text: string;
  showWaBtn?: boolean;
  waText?: string;
}

export default function WhatsAppButton() {
  const [showCard, setShowCard] = useState(false);
  const [messages, setMessages] = useState<MessageItem[]>([
    { sender: "bot", text: "👋 Hi there! Welcome to Adyantra Digital. How can we help you scale today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    // Simulate AI / Bot auto-reply with WhatsApp redirect
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for your query! Let's connect directly with our senior strategy team on WhatsApp for instant assistance.",
          showWaBtn: true,
          waText: userMsg
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end pointer-events-auto font-sans">
      {/* Interactive WhatsApp AI Assistant Card */}
      {showCard && (
        <div className="mb-3.5 w-[320px] sm:w-[360px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.25)] border border-slate-200/90 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366] p-4 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-extrabold text-white text-sm border border-white/30">
                  AD
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight leading-none text-white">Adyantra AI Assistant</h4>
                <p className="text-[11px] text-emerald-100 mt-1 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online &bull; Instant Answers
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowCard(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat assistant"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#efeae2]/60 max-h-[320px] overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[88%] shadow-xs border text-[12.5px] ${
                    msg.sender === "user"
                      ? "bg-[#dcf8c6] text-slate-900 rounded-tr-none border-emerald-200"
                      : "bg-white text-slate-800 rounded-tl-none border-slate-100"
                  }`}
                >
                  <p className="font-medium leading-normal">{msg.text}</p>
                  {msg.showWaBtn && (
                    <a
                      href={`https://wa.me/918309275093?text=${encodeURIComponent(
                        "Hi Adyantra Team, I have a query: " + (msg.waText || "")
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-[11.5px] transition-all shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Continue on WhatsApp &rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question or enter query..."
              className="flex-1 bg-slate-100/80 border border-slate-200/80 rounded-full px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-[#25D366] transition-colors"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shrink-0 shadow-md transition-colors cursor-pointer"
              title="Send message"
            >
              <svg className="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating WhatsApp Trigger Button */}
      <div className="relative group">
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 blur-md group-hover:opacity-75 transition-opacity animate-pulse"></span>

        <button
          onClick={() => setShowCard(!showCard)}
          className="relative size-13 sm:size-15 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 cursor-pointer"
          aria-label="Chat with Adyantra Digital Assistant on WhatsApp"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-sm" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="absolute top-0 right-0 size-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
