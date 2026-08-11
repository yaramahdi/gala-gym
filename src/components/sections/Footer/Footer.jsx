import { Container } from '../../ui/Container.jsx';
import { Logo } from '../../ui/Logo.jsx';
import { FacebookIcon, InstagramIcon } from '../../ui/BrandIcons.jsx';
import { SOCIAL_LINKS } from '../../../constants/socialLinks.js';

export function Footer() {
  const instagram = SOCIAL_LINKS.find((link) => link.label === 'Instagram');
  const facebook = SOCIAL_LINKS.find((link) => link.label === 'Facebook');

  return (
    <footer className="border-t border-border bg-surface/60 py-8 sm:py-10">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <Logo />

        <div className="flex flex-wrap items-center justify-center gap-3">
          {instagram && (
            <a
              href={instagram.href}
              target="_blank"
              rel="noreferrer"
              aria-label="تابع Jalaa Gym على إنستغرام"
              className="inline-flex items-center gap-2 rounded-btn border border-border bg-background/60 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="h-5 w-5" />
              <span>إنستغرام</span>
            </a>
          )}
          {facebook && (
            <a
              href={facebook.href}
              target="_blank"
              rel="noreferrer"
              aria-label="تابع Jalaa Gym على فيسبوك"
              className="inline-flex items-center gap-2 rounded-btn border border-border bg-background/60 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="h-5 w-5" />
              <span>فيسبوك</span>
            </a>
          )}
        </div>
      </Container>
    </footer>
  );
}
