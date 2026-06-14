"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80dvh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="editorial-headline text-4xl md:text-5xl text-ink mb-4">Something went <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>wrong</span></h2>
        <p className="text-ink/50 mb-8">We encountered an unexpected error. Please try again.</p>
        <button
          onClick={reset}
          className="px-7 py-4 bg-gold text-ink rounded-full font-bold tracking-widest uppercase text-sm btn-magnetic"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
