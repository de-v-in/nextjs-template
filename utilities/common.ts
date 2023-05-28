/**
 * Delay current function by given time in ms
 * @param {number} time Time delayed
 */
const delay = (time: number) => new Promise((res) => setTimeout(res, time));

/**
 * Executes a function and ensures that it takes at least a minimum amount of time to run.
 * This is useful for functions that are called in quick succession to ensure that they
 * don't end up running in parallel.
 */
const executeThreshold = async <T = undefined>(fn: () => Promise<T>, minTime = 300): Promise<T> => {
  const output = await fn();
  if (minTime > 0) {
    await delay(minTime);
  }
  return output;
};

/**
 * Remove duplicate item in array
 */
const removeDuplicate = <T>(arr: T[]): T[] => [...new Set(arr)];

/**
 * Convert given string into hex color
 * @param string Given string to be converted
 * @returns Hex color
 */
const stringToColor = (str: string) => {
  const b64 = intoBase64(str);
  let hash = 0;
  let i;
  for (i = 0; i < b64.length; i += 1) {
    hash = b64.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

/**
 * Convert string into base64
 */
const intoBase64 = (str: string) => Buffer.from(str).toString('base64');

export { delay, executeThreshold, intoBase64, removeDuplicate, stringToColor };
