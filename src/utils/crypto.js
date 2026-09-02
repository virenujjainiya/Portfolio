// Client-side SHA-256 hash utility using Web Crypto API
export async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Pre-computed SHA-256 hashes for fallback default passwords
// 'admin' -> 8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918
// 'viren123' -> b11f4228c2e6f4e6de73950efc0ffbe4c3be992451be670494cfeb6cb9a7d23d
export const DEFAULT_HASHES = [
  '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
  'b11f4228c2e6f4e6de73950efc0ffbe4c3be992451be670494cfeb6cb9a7d23d'
];
