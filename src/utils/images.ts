export const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/onhighmng/Trionica/b993660a9c00196c2d9e246a351545431bc44e71/';

export function getImageUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${GITHUB_RAW_BASE}${cleanPath}`;
}
