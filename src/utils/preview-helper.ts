export function getReadingTime(text: string): number {
  const wordsPerMinute = 180;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}

export function formatReadingTime(readingTime: number): string {
  const cakeCount = Math.round(readingTime / 5);
  if (cakeCount > 3) {
    return `${new Array(cakeCount - 3).fill("🍰").join("")}`;
  } else {
    return `${new Array(cakeCount || 1).fill("🧁").join("")}`;
  }
}

export function formatDate(date: string) {
  return new Date(date).toUTCString().slice(5, 16); // slice dd MMM yyyy
}
