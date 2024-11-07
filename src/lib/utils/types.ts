export type MenuItem = {
  label: string;
  href: string;
  isExternal?: boolean;
  isButton?: boolean;
  // Optional id to highlight if in the viewport
  viewportHighlightId?: string;
};
