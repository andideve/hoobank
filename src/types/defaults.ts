export interface Menu {
  label: string;
  to: string;
}
export interface MenuGroup {
  category: string;
  items: Menu[];
}

export interface SiteMetadata {
  title: string;
  description: string;
}
