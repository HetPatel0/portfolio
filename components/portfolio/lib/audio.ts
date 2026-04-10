export function playSynth(frequency: number, duration = 0.08) {
  if (typeof window === "undefined") {
    return;
  }

  const AudioContextClass =
    window.AudioContext ||
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

  if (!AudioContextClass) {
    return;
  }

  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "square";
  oscillator.frequency.value = frequency;
  gain.gain.value = 0.03;

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();

  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.stop(context.currentTime + duration);

  window.setTimeout(() => {
    oscillator.disconnect();
    gain.disconnect();
    void context.close();
  }, duration * 1000 + 40);
}
