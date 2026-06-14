import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-6">404</span>
        <h1 className="editorial-headline text-5xl md:text-7xl text-ink mb-4">
          Page not <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>found</span>
        </h1>
        <p className="text-ink/50 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-4 bg-gold text-ink rounded-full font-bold tracking-widest uppercase text-sm btn-magnetic"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </Link>
      </div>
    </div>
  );
}
