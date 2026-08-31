// Lightweight Web Audio API Synthesizer for Stark Industries HUD Audio FX
class SoundFX {
  constructor() {
    this.ctx = null;
    this.chargeOsc = null;
    this.chargeGain = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  startCharge() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      this.stopCharge();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, this.ctx.currentTime);
      // Pitch sweeps up over 2 seconds
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 2.0);

      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 1.5);

      // Lowpass filter to give it a deep sci-fi energy hum
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, this.ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(2000, this.ctx.currentTime + 2.0);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      this.chargeOsc = osc;
      this.chargeGain = gain;
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  stopCharge() {
    if (this.chargeOsc) {
      try {
        if (this.chargeGain && this.ctx) {
          this.chargeGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
        }
        setTimeout(() => {
          if (this.chargeOsc) {
            this.chargeOsc.stop();
            this.chargeOsc.disconnect();
            this.chargeOsc = null;
          }
        }, 120);
      } catch (e) {
        this.chargeOsc = null;
      }
    }
  }

  playBlast() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      this.stopCharge();
      const now = this.ctx.currentTime;

      // Deep sub-bass pulse
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.8);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.8);

      // High-tech shimmer
      const highOsc = this.ctx.createOscillator();
      const highGain = this.ctx.createGain();
      highOsc.type = 'triangle';
      highOsc.frequency.setValueAtTime(1200, now);
      highOsc.frequency.exponentialRampToValueAtTime(400, now + 0.4);

      highGain.gain.setValueAtTime(0.15, now);
      highGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      highOsc.connect(highGain);
      highGain.connect(this.ctx.destination);
      highOsc.start(now);
      highOsc.stop(now + 0.4);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playBeep(freq = 600, duration = 0.08) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  }
}

export const sound = new SoundFX();
