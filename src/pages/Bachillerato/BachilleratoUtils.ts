export function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - 60 * minutes);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
