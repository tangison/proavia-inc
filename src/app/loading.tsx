export default function Loading() {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-[2px] bg-canvas-warm overflow-hidden rounded-full">
          <div className="h-full w-full bg-gold rounded-full proavia-loading-bar" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/30 select-none">Loading</span>
      </div>
    </div>
  );
}
