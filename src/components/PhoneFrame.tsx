import type { ReactNode } from 'react';

/** A plain iPhone outline for the app screens shown on the site. */
export default function PhoneFrame({ label, children, showCaption = true }: { label: string; children: ReactNode; showCaption?: boolean }) {
  return (
    <figure className="phone" aria-label={label}>
      <div className="phone-screen">
        <div className="phone-status" aria-hidden>
          <span>9:41</span>
          <span className="phone-island" />
          <span className="phone-status-icons">●●●</span>
        </div>
        {children}
      </div>
      {showCaption && <figcaption className="phone-caption">{label}</figcaption>}
    </figure>
  );
}
