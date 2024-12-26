export async function audioContext({ sampleRate }) {
  const context = new (window.AudioContext || window.webkitAudioContext)({ sampleRate });
  await context.resume();
  return context;
}

export function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}