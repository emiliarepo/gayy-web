import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locale: activeLocale } = router;

  return (
    <div className="text-white text-center">
      <LanguageOption language="fi" activeLocale={activeLocale} />
      <span className="mx-2">-</span>
      <LanguageOption language="en" activeLocale={activeLocale} />
      <span className="mx-2">-</span>
      <LanguageOption language="sv" activeLocale={activeLocale} />
    </div>
  );
}

export function LanguageOption({ language, activeLocale }: { language: string; activeLocale: string | undefined }) {
  const isCurrentLanguage = activeLocale === language;
  const buttonClasses = `cursor-pointer ${isCurrentLanguage ? 'underline font-bold' : ''}`;
  const [cookies, setCookie] = useCookies(['NEXT_LOCALE']);

  const { pathname, query, asPath } = useRouter();

  return (
    <Link
      href={{ pathname, query }}
      as={asPath}
      locale={language}
      
      legacyBehavior
    >
      <a onClick={() => setCookie('NEXT_LOCALE', language, { path: '/' })} className={buttonClasses}>{language.toUpperCase()}</a>
    </Link>
  );
}
