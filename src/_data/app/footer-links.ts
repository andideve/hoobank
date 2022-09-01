import { MenuGroup } from '../../types/defaults';

export const footerLinks: MenuGroup[] = [
  {
    category: 'Usefull Links',
    items: [
      { label: 'Content', to: '#content' },
      { label: 'How it Works', to: '#how-it-works' },
      { label: 'Create', to: '#create' },
      { label: 'Explore', to: '#explore' },
      { label: 'Terms & Services', to: '#terms-services' },
    ],
  },
  {
    category: 'Community',
    items: [
      { label: 'Help Center', to: '#help-center' },
      { label: 'Partners', to: '#partners' },
      { label: 'Suggestions', to: '#suggestions' },
      { label: 'Blog', to: '#blog' },
      { label: 'Newsletters', to: '#newsletters' },
    ],
  },
  {
    category: 'Partner',
    items: [
      { label: 'Our Partner', to: '#our-partner' },
      { label: 'Become a Partner', to: '#become-a-partner' },
    ],
  },
];
