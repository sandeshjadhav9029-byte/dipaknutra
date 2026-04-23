import Link from 'next/link';
import { Leaf } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
  href?: string;
  inverse?: boolean;
  compact?: boolean;
}

export default function BrandLogo({
  className = '',
  href = '/',
  inverse = false,
  compact = false,
}: BrandLogoProps) {
  const forest = inverse ? '#F7F3EB' : '#1B3D2F';
  const gold = '#C89B3C';
  const line = inverse ? 'rgba(247, 243, 235, 0.55)' : 'rgba(200, 155, 60, 0.45)';
  const tagline = inverse ? 'rgba(247, 243, 235, 0.78)' : 'rgba(27, 61, 47, 0.72)';

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
      aria-label="Dipak Nutra home"
    >
      <span className="relative flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-[1.4rem] border border-[rgba(200,155,60,0.35)] bg-[linear-gradient(145deg,rgba(247,243,235,0.96),rgba(247,243,235,0.76))] shadow-[0_14px_30px_rgba(27,61,47,0.12)]">
        <svg
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          aria-hidden="true"
        >
          <path
            d="M20 18v50h20c18 0 28-11 28-25S58 18 40 18H20Zm10 10h8c10 0 18 5 18 15s-8 15-18 15h-8V28Z"
            fill={forest}
          />
          <path
            d="M48 18v50h10V38l16 30h10V18H74v30L58 18H48Z"
            fill={gold}
          />
        </svg>
        <span className="absolute -right-1 top-0 rounded-full border border-[rgba(27,61,47,0.14)] bg-[rgba(247,243,235,0.94)] p-1 text-[#1B3D2F] shadow-sm">
          <Leaf className="h-3.5 w-3.5" strokeWidth={2.25} />
        </span>
      </span>

      <span className="flex flex-col">
        <span
          className="text-[1.25rem] font-semibold uppercase tracking-[0.22em] sm:text-[1.45rem]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          <span style={{ color: forest }}>Dipak</span>{' '}
          <span style={{ color: gold }}>Nutra</span>
        </span>

        {!compact && (
          <>
            <span className="my-1 flex items-center gap-2" aria-hidden="true">
              <span className="h-px w-8" style={{ backgroundColor: line }} />
              <Leaf className="h-3.5 w-3.5" color={gold} strokeWidth={1.75} />
              <span className="h-px w-8" style={{ backgroundColor: line }} />
            </span>
            <span
              className="text-[0.58rem] uppercase tracking-[0.32em] sm:text-[0.62rem]"
              style={{
                color: tagline,
                fontFamily: "'Libre Baskerville', Georgia, serif",
              }}
            >
              Nature&apos;s Goodness, Your Wellness
            </span>
          </>
        )}
      </span>
    </Link>
  );
}
