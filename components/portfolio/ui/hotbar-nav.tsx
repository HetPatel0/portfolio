import type { NavItem, SectionId } from "@/components/portfolio/types";

type HotbarNavProps = {
  items: NavItem[];
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
};

export function HotbarNav({ items, activeSection, onNavigate }: HotbarNavProps) {
  return (
    <nav className="hotbar" aria-label="Primary navigation">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`hotbar-slot ${activeSection === item.id ? "active" : ""}`}
          onClick={() => onNavigate(item.id)}
        >
          <span>{item.icon}</span>
          <strong>{item.label}</strong>
        </button>
      ))}
    </nav>
  );
}
