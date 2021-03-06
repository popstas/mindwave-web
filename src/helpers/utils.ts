import useStore from "@/helpers/useStore";

export function mmss(s: number) {
  const sec = String(s % 60).padStart(2, '0');
  const min = String(Math.floor(s / 60)).padStart(2, ' ');
  return `${min}:${sec}`;
}

// yyyy-mm-dd hh:mm
export function dateTimeFormat(ts: number) {
  if (!ts) return '';
  ts += new Date().getTimezoneOffset() * -60 * 1000;
  return new Date(ts).toISOString().replace('T', ' ').substring(0, 16);
}

// yyyy-mm-dd
export function dayFormat(ts: number) {
  if (!ts) return '';
  ts += new Date().getTimezoneOffset() * -60 * 1000;
  return new Date(ts).toISOString().replace('T', ' ').substring(0, 10);
}

export function percentClass(str: string, type: string) {
  const store = useStore();
  const val = parseInt(str);

  if (type === 'meditation70' || type === 'med70' || type === 'med70avg') {
    if (val >= store.state.settings.meditationFrom) return 'percent-highest';
    if (val >= store.state.medLevels.high) return 'percent-high';
    if (val > store.state.medLevels.low) return 'percent-mid';
    if (val > 0) return 'percent-low';
  }

  if (type === 'meditation' || type === 'med_avg') {
    if (val >= 80) return 'percent-bold-big';
    if (val >= 68) return 'percent-bold';
    // if (val > 60) return 'percent-mid';
    // return 'percent-low';
  }

  return '';
}

export function timePercent(time: number, totalTime: number) {
  const val = Math.round((time / totalTime) * 100);
  return `${val}%`;
}

export function clientWidth() {
  if (import.meta.env.SSR) return 0;
  return window.innerWidth > 0 ? window.innerWidth : screen.width;
}
export function clientHeight() {
  if (import.meta.env.SSR) return 0;
  return window.innerHeight > 0 ? window.innerHeight : screen.height;
}
