import Image from "next/image";
import type { CSSProperties } from "react";
import type { NavItem, SectionId } from "@/components/portfolio/types";

type HotbarNavProps = {
  items: NavItem[];
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
};

export function HotbarNav({ items, activeSection, onNavigate }: HotbarNavProps) {
  const slotCount = 9;
  const statusCount = 10;
  const slots = Array.from({ length: slotCount }, (_, index) => items[index] ?? null);
  const activeSlot = slots.findIndex((slot) => slot?.id === activeSection);

  return (
    <nav className="mc-hud" aria-label="Primary navigation">
      <div className="mc-status-row" aria-hidden="true">
        <div className="mc-hearts">
          {Array.from({ length: statusCount }, (_, index) => (
            <Image key={`heart-${index}`} src="/minecraft/hud/heart/full.png" alt="" width={9} height={9} className="mc-status-icon" />
          ))}
        </div>
        <div className="mc-armor">
          {Array.from({ length: statusCount }, (_, index) => (
            <Image key={`armor-${index}`} src="/minecraft/hud/armor_full.png" alt="" width={9} height={9} className="mc-status-icon" />
          ))}
        </div>
      </div>

      <div className="mc-hotbar">
        <Image src="/minecraft/hud/hotbar.png" alt="" width={182} height={22} className="mc-hotbar-base" aria-hidden />
        {activeSlot >= 0 ? (
          <Image
            src="/minecraft/hud/hotbar_selection.png"
            alt=""
            width={24}
            height={23}
            className="mc-hotbar-selection"
            style={{ "--slot-index": activeSlot } as CSSProperties}
            aria-hidden
          />
        ) : null}

        <div className="mc-hotbar-grid">
          {slots.map((item, index) => (
            <button
              key={item?.id ?? `empty-${index}`}
              type="button"
              className={`mc-slot ${item ? "filled" : "empty"} ${item?.id === activeSection ? "active" : ""}`}
              onClick={() => {
                if (item) {
                  onNavigate(item.id);
                }
              }}
              disabled={!item}
              aria-label={item?.label ?? `Empty slot ${index + 1}`}
              title={item?.label}
            >
              {item ? <span className="mc-slot-dot" aria-hidden /> : null}
              <span className="sr-only">{item?.label ?? `Empty slot ${index + 1}`}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
