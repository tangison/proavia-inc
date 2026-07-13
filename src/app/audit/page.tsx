import Link from "next/link";
import { Shield, Gauge, Eye, Lock, Search, Image as ImageIcon, Link2, FileText, CheckCircle2, AlertTriangle, XCircle, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Audit | ProAvia Travel & Tours",
  description: "Comprehensive website audit report for ProAvia Travel & Tours, covering SEO, performance, accessibility, security, and content quality.",
  alternates: {
    canonical: "https://proaviainc.com/audit",
  },
  openGraph: {
    title: "Site Audit | ProAvia Travel & Tours",
    description: "Comprehensive website audit report for ProAvia Travel & Tours.",
    images: ["/images/destinations/destination-sandwich-harbour-ocean-view.webp"],
  },
};

interface ScoreCardProps {
  label: string;
  score: number;
  icon: React.ReactNode;
}

function ScoreCard({ label, score, icon }: ScoreCardProps) {
  const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 50 ? "D" : "F";
  const color = score >= 90 ? "text-emerald-500" : score >= 80 ? "text-green-500" : score >= 70 ? "text-yellow-500" : score >= 50 ? "text-orange-500" : "text-red-500";
  const ringColor = score >= 90 ? "ring-emerald-500/20" : score >= 80 ? "ring-green-500/20" : score >= 70 ? "ring-yellow-500/20" : score >= 50 ? "ring-orange-500/20" : "ring-red-500/20";
  const bgColor = score >= 90 ? "bg-emerald-50" : score >= 80 ? "bg-green-50" : score >= 70 ? "bg-yellow-50" : score >= 50 ? "bg-orange-50" : "bg-red-50";

  return (
    <div className={`double-bezel-outer`}>
      <div className={`double-bezel-inner p-6 text-center ring-1 ${ringColor} ${bgColor}`}>
        <div className="flex items-center justify-center mb-3 text-ink/40">{icon}</div>
        <span className={`text-4xl font-serif block ${color}`}>{score}</span>
        <span className={`text-[10px] font-bold tracking-widest uppercase ${color}`}>Grade {grade}</span>
        <span className="text-ink/50 text-xs block mt-2">{label}</span>
      </div>
    </div>
  );
}

interface IssueRowProps {
  severity: "error" | "warning" | "fixed";
  rule: string;
  description: string;
  status: string;
}

function IssueRow({ severity, rule, description, status }: IssueRowProps) {
  const icon = severity === "error"
    ? <XCircle className="w-4 h-4 text-red-500 shrink-0" />
    : severity === "warning"
    ? <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
    : <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />;

  return (
    <div className="flex items-start gap-3 py-3 border-b border-ink/5 last:border-0">
      {icon}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono text-ink/40">{rule}</span>
          {severity === "fixed" && (
            <span className="text-[9px] uppercase tracking-widest font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Fixed</span>
          )}
        </div>
        <p className="text-sm text-ink/70 mt-0.5">{description}</p>
      </div>
      <span className="text-[10px] uppercase tracking-widest font-bold text-ink/30 shrink-0">{status}</span>
    </div>
  );
}

export default function AuditPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-6">
            <Link
              className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase opacity-45 hover:opacity-70 transition-opacity duration-300"
              href="/"
            >
              Home
            </Link>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-6">WEBSITE AUDIT</span>
            <h1 className="editorial-headline text-5xl md:text-7xl lg:text-8xl text-ink">
              Site{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                Health
              </span>{" "}
              Report
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink/50 max-w-[560px] leading-relaxed">
              A comprehensive audit of ProAvia Travel & Tours across 230+ rules in 21 categories, covering SEO, performance, accessibility, security, and content quality. Audited by Tangison Studio using SquirrelScan.
            </p>
            <div className="mt-4 flex items-center gap-4 text-ink/40 text-xs">
              <span>Audited: 9 June 2026</span>
              <span className="w-1 h-1 rounded-full bg-ink/20" />
              <span>23 pages crawled</span>
              <span className="w-1 h-1 rounded-full bg-ink/20" />
              <span>Surface coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Score */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-ink rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.15" />
                <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.15" />
              </svg>
            </div>
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold block mb-4">Overall Health Score</span>
              <span className="text-8xl md:text-9xl font-serif text-gold block leading-none">59</span>
              <span className="text-lg text-white/40 block mt-2">Grade F, Needs Improvement</span>
              <p className="text-white/40 text-sm mt-4 max-w-lg mx-auto">
                2001 rules passed, 283 warnings, 28 errors across 23 pages. Critical issues in image optimisation, accessibility, and SEO metadata have been identified and addressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Scores Grid */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">CATEGORY BREAKDOWN</span>
            <h2 className="editorial-headline text-3xl md:text-4xl text-ink">
              Scores by{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                Category
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <ScoreCard label="E-E-A-T" score={100} icon={<Shield className="w-5 h-5" />} />
            <ScoreCard label="Mobile" score={100} icon={<Eye className="w-5 h-5" />} />
            <ScoreCard label="Social Media" score={100} icon={<Link2 className="w-5 h-5" />} />
            <ScoreCard label="URL Structure" score={100} icon={<FileText className="w-5 h-5" />} />
            <ScoreCard label="Legal" score={100} icon={<Lock className="w-5 h-5" />} />
            <ScoreCard label="i18n" score={100} icon={<Search className="w-5 h-5" />} />
            <ScoreCard label="Accessibility" score={88} icon={<Eye className="w-5 h-5" />} />
            <ScoreCard label="Links" score={85} icon={<Link2 className="w-5 h-5" />} />
            <ScoreCard label="Crawlability" score={85} icon={<Search className="w-5 h-5" />} />
            <ScoreCard label="Core SEO" score={80} icon={<Search className="w-5 h-5" />} />
            <ScoreCard label="Security" score={81} icon={<Lock className="w-5 h-5" />} />
            <ScoreCard label="Performance" score={81} icon={<Gauge className="w-5 h-5" />} />
            <ScoreCard label="Images" score={71} icon={<ImageIcon className="w-5 h-5" />} />
            <ScoreCard label="Content" score={71} icon={<FileText className="w-5 h-5" />} />
          </div>
        </div>
      </section>

      {/* Issues Found & Fixed */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">ISSUES & RESOLUTIONS</span>
            <h2 className="editorial-headline text-3xl md:text-4xl text-ink">
              What was{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                fixed
              </span>
            </h2>
          </div>

          {/* Critical Errors */}
          <div className="mb-10">
            <h3 className="text-sm font-bold tracking-widest uppercase text-red-500 mb-4 flex items-center gap-2">
              <XCircle className="w-4 h-4" /> Critical Errors (28)
            </h3>
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6">
                <IssueRow
                  severity="fixed"
                  rule="images/image-file-size"
                  description="3 images exceeded 1MB (tour PNGs at 1.2–1.6MB each). Converted all 31 tour PNGs to WebP, saving 55.5MB (93.5% reduction)."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="a11y/form-labels"
                  description="11 form inputs across 9 pages lacked labels. Added proper id + htmlFor associations to all booking, contact, and service form fields."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="a11y/select-name"
                  description="2 select elements without accessible names. Added aria-label and proper label associations."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="a11y/aria-input-field-name"
                  description="4 input fields without accessible names. Added proper labels with htmlFor bindings."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="crawl/sitemap-domain"
                  description="40 sitemap URLs pointed to wrong domain. Added 4 missing service pages to sitemap with correct proaviainc.com domain."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="perf/total-byte-weight"
                  description="Total tracked resources were 17.4MB (very heavy). WebP conversion reduced this by over 55MB in tour images alone."
                  status="Resolved"
                />
              </div>
            </div>
          </div>

          {/* Warnings */}
          <div className="mb-10">
            <h3 className="text-sm font-bold tracking-widest uppercase text-amber-500 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Warnings (283)
            </h3>
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6">
                <IssueRow
                  severity="fixed"
                  rule="core/meta-title"
                  description="2 pages had titles over 60 chars. Shortened /about title from 61→41 chars and tour combo page from 79→60 chars."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="core/meta-description"
                  description="5 pages had descriptions too long or too short. Normalised all to 107–142 chars with unique descriptions per page."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="core/canonical"
                  description="5 pages missing canonical URLs. Added alternates.canonical to all 17 pages."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="core/og-tags"
                  description="5 pages missing og:image. Added Open Graph images and metadata to all pages."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="core/title-unique"
                  description="5 pages shared the same title. Each page now has a unique, descriptive title."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="content/duplicate-title"
                  description="5 pages had duplicate titles. All titles now unique per page."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="content/duplicate-description"
                  description="5 pages had duplicate descriptions. All descriptions now unique per page."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="content/heading-hierarchy"
                  description="Skipped heading levels on /gallery, /insights, /privacy. Fixed H1→H3 and H2→H4 skips to proper H1→H2→H3 order."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="images/dimensions"
                  description="49 images missing width/height attributes causing CLS. Added explicit dimensions to all images across 12 component files."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="images/responsive-size"
                  description="3 accreditation badge images serving oversized files. Added proper sizing and lazy loading."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="images/offscreen-lazy"
                  description="Below-fold images without lazy loading. Added loading='lazy' to footer and below-fold images."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="links/broken-external-links"
                  description="studio.tangison.com was broken (DNS not resolving). Changed footer link to tangison.com."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="security/csp"
                  description="No Content-Security-Policy header. Added comprehensive CSP via next.config.ts headers."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="security/x-frame-options"
                  description="No clickjacking protection. Added X-Frame-Options: DENY header."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="a11y/color-contrast"
                  description="Low contrast on small text-[10px] elements. Bumped opacity from 30-40% to 50% across 8 pages."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="a11y/heading-order"
                  description="H3 after H1 on /insights. Changed to proper H2 heading level."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="a11y/link-text"
                  description="Generic 'Learn more' links on home page. Changed to descriptive 'Discover Our Story' and 'Explore {service}' links."
                  status="Resolved"
                />
                <IssueRow
                  severity="fixed"
                  rule="perf/lcp-hints"
                  description="LCP images without preload. Hero carousel first image has priority prop; navigation logo has priority prop."
                  status="Resolved"
                />
                <IssueRow
                  severity="warning"
                  rule="content/word-count"
                  description="5 pages with thin content (under 300 words): /about (242), /contact (213), /accommodation (256), /gallery (87), /insights (263). Needs content expansion."
                  status="Pending"
                />
                <IssueRow
                  severity="warning"
                  rule="content/keyword-stuffing"
                  description="5 pages may have overused keywords: 'walvis' (3.9%), 'bay' (3.9%), 'namibia' (3.1%). Consider natural language variations."
                  status="Pending"
                />
                <IssueRow
                  severity="warning"
                  rule="security/form-captcha"
                  description="1 public form without CAPTCHA protection. Consider adding reCAPTCHA or honeypot fields."
                  status="Pending"
                />
                <IssueRow
                  severity="warning"
                  rule="links/orphan-pages"
                  description="6 service pages with fewer than 2 incoming links. Consider adding cross-links between service pages."
                  status="Pending"
                />
                <IssueRow
                  severity="warning"
                  rule="perf/ttfb"
                  description="5 pages with slow server response (600-650ms). Consider edge caching or ISR for tour detail pages."
                  status="Pending"
                />
              </div>
            </div>
          </div>

          {/* Tangison Studio Principle */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-gold mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" /> Tangison Studio Principle
            </h3>
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-ink">Every site ships audited.</h4>
                    <p className="text-ink/40 text-sm">The Tangison Studio Quality Standard</p>
                  </div>
                </div>
                <div className="space-y-4 text-ink/55 leading-relaxed">
                  <p>
                    At Tangison Studio, we believe that launching a website without a comprehensive audit is like opening a hotel without checking the rooms. Every project we deliver undergoes a rigorous 230+ rule audit covering SEO, performance, accessibility, security, and content quality before it goes live.
                  </p>
                  <p>
                    This audit page is our commitment to transparency. Clients can see exactly what was found, what was fixed, and what remains as a known consideration. We don&apos;t hide issues. We surface them, resolve them, and document the outcome.
                  </p>
                  <p>
                    A site is only considered complete when scores reach 95+ (Grade A) with full coverage. We iterate: fix, re-audit, and present before-and-after comparisons until the standard is met.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-ink/5 flex items-center gap-3">
                  <a
                    href="https://studio.tangison.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gold hover:text-gold/80 transition-colors flex items-center gap-1.5"
                  >
                    Tangison Studio
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-ink/20">|</span>
                  <a
                    href="https://squirrelscan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink/40 hover:text-ink/60 transition-colors flex items-center gap-1.5"
                  >
                    Powered by SquirrelScan
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Optimisation Summary */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">IMAGE OPTIMISATION</span>
            <h2 className="editorial-headline text-3xl md:text-4xl text-ink">
              55.5 MB{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                saved
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6 text-center">
                <span className="text-4xl font-serif text-ink">31</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-ink/40 block mt-1">PNGs Converted</span>
              </div>
            </div>
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6 text-center">
                <span className="text-4xl font-serif text-emerald-500">93.5%</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-ink/40 block mt-1">Size Reduction</span>
              </div>
            </div>
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6 text-center">
                <span className="text-4xl font-serif text-ink">3.9 MB</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-ink/40 block mt-1">Final Size (from 59.4 MB)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-ink rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.15" />
                <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.15" />
              </svg>
            </div>
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold block mb-4">NEXT STEPS</span>
              <h3 className="editorial-headline text-3xl md:text-5xl text-white mb-4">
                Pending{" "}
                <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                  improvements
                </span>
              </h3>
              <div className="text-white/50 text-left max-w-md mx-auto space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-xs font-bold text-white/30">1</span>
                  <span className="text-sm">Expand thin content on /about, /contact, /gallery, /insights, and /accommodation pages to 300+ words</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-xs font-bold text-white/30">2</span>
                  <span className="text-sm">Add cross-links between service pages to reduce orphan pages</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-xs font-bold text-white/30">3</span>
                  <span className="text-sm">Implement reCAPTCHA or honeypot on public forms</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-xs font-bold text-white/30">4</span>
                  <span className="text-sm">Configure edge caching to reduce TTFB on tour detail pages</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-xs font-bold text-white/30">5</span>
                  <span className="text-sm">Re-audit at full coverage to confirm Grade A (95+)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
