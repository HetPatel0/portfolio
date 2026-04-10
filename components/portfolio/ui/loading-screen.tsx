export function LoadingScreen() {
  return (
    <div className="loading-screen" aria-live="polite">
      <div className="loading-panel">
        <span>Generating World...</span>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </div>
  );
}
