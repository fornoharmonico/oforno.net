export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  type: 'project' | 'music' | 'video' | 'award' | 'education' | 'personal' | 'career';
  embedType?: 'youtube' | 'soundcloud' | 'website' | 'vimeo' | 'image';
  embedUrl?: string;
  customThumbnail?: string;
  customLinkLabel?: string;
  customEmbedTitle?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  action?: boolean;
}

export type FormType = 'newsletter' | 'servicos' | 'workshop';

export interface FormData {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
  eventType?: string;
}