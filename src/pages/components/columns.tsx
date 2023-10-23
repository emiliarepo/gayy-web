import React from 'react';
import { useTranslation } from 'next-i18next';

export default function Columns() {
  const { t } = useTranslation('common');

  const boardData = t('board.positions', { returnObjects: true });
  const boardMembers = Array.isArray(boardData)
    ? boardData.map((member) => (
        <div className="px-4 py-0 flex items-center" key={member.tg}>
          <div className="flex flex-wrap">
            <div className="flex-shrink-0">{member.title}</div>
            <StyledLink link={"https://t.me/" + member.tg} text={"@" + member.tg} />
          </div>
        </div>
      ))
    : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-2xl">
      <div>
        <div className="px-4 py-1">{t('description.0')}</div>
        <div className="px-4 py-1">{t('description.1')}</div>
      </div>
      <div>
        <div className="text-xl px-4 pt-1">{t('signup.join.title')}</div>
        <StyledLink link="https://kide.app/memberships/1d60afe9-70be-4081-a0dc-cdf126bbea25" text={t('signup.join.text')} />
        <div className="text-xl px-4 pt-1">{t('signup.contact.title')}</div>
        <StyledLink link="https://t.me/gayyinfo" text={t('signup.contact.telegram')} />
        <StyledLink link="https://instagram.com/gayyaalto" text={t('signup.contact.instagram')} />
      </div>
      <div>
        <div className="text-xl px-4 pt-1">{t('board.title')}</div>
        {boardMembers}
      </div>
    </div>
  );
}

function StyledLink({ link, text }: { link: string; text: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 text-white flex items-center"
    >
      <div className="mr-1 text-white text">❥</div>
      <div className="text-pink-500 underline">{text}</div>
    </a>
  );
}
