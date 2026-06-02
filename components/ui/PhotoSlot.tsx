import { ImageIcon } from 'lucide-react';

// Platzhalter fuer echte Kundenfotos. Klar gekennzeichnet, damit die Demo
// bewusst gestaltet wirkt und Fotos spaeter 1:1 eingesetzt werden koennen.
// TODO: durch <Image> mit echtem, lizenziertem Kundenfoto ersetzen.
export function PhotoSlot({
  label,
  className = '',
  ratio = 'aspect-[4/3]',
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative ${ratio} overflow-hidden rounded-xl border border-anthracite-700 bg-anthracite-800 ${className}`}
      role="img"
      aria-label={`Platzhalter: ${label}`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #FACC15 0, #FACC15 1px, transparent 1px, transparent 14px)',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon className="h-7 w-7 text-anthracite-500" aria-hidden />
        <span className="text-xs font-medium uppercase tracking-wide text-anthracite-400">Platzhalter</span>
        <span className="max-w-[16rem] text-sm text-anthracite-300">{label}</span>
      </div>
    </div>
  );
}
