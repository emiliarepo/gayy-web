"use client"

import React from 'react';
import { useTranslation } from 'next-i18next'

export default function Columns() {
  const { t } = useTranslation('common')

  return (
    <div className="px-4 pt-15">{t('footer')}</div>
  );
}
