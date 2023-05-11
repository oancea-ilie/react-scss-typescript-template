export function classes(...cssClasses: string[]) {
  return cssClasses.filter(Boolean).join(' ');
}
