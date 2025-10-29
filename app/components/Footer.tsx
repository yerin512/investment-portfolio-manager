import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/60">
      <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-zinc-600">
        © {new Date().getFullYear()} Investment Portfolio Manager
      </div>
    </footer>
  );
}
