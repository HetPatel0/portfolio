type FloatingControlsProps = {
  dayMode: boolean;
  soundEnabled: boolean;
  onToggleDayMode: () => void;
  onToggleSound: () => void;
};

export function FloatingControls({
  dayMode,
  soundEnabled,
  onToggleDayMode,
  onToggleSound
}: FloatingControlsProps) {
  return (
    <div className="floating-controls">
      <button type="button" className="slot-button" onClick={onToggleDayMode}>
        {dayMode ? "Night" : "Day"}
      </button>
      <button type="button" className="slot-button" onClick={onToggleSound}>
        SFX {soundEnabled ? "On" : "Off"}
      </button>
    </div>
  );
}
