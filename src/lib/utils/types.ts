export interface MenuItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isButton?: boolean;
  // Show the active state (buttons only)
  isActive?: boolean;
  // Optional id to highlight if in the viewport
  viewportHighlightId?: string;
}

export type Intent = 'light' | 'dark';

export type ButtonIntent = 'filled-dark' | 'filled-light' | 'outlined-light' | 'outlined-dark';
