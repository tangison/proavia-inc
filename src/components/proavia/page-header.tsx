import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  label: string;
  title: string;
  italicWord: string;
  description?: string;
}

export default function PageHeader({ label, title, italicWord, description }: PageHeaderProps) {
  const parts = title.split(italicWord);

  return (
    <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-6">
          <Link
            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase opacity-45 hover:opacity-70 transition-opacity duration-300"
            href="/"
          >
            <ArrowLeft className="w-3 h-3" />
            Home
          </Link>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-6">{label}</span>
          <h1 className="editorial-headline text-5xl md:text-7xl lg:text-8xl text-ink">
            {parts[0]}
            {italicWord && (
              <>
                {parts[0] && <br />}
                <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                  {italicWord}
                </span>
              </>
            )}
            {parts[1]}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-ink/50 max-w-[560px] leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
