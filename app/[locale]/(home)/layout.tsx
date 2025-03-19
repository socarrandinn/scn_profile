import React from 'react'
import i18nConfig from '@/next-i18next.config';
import initTranslations from '@/app/i18n';
import { notFound } from 'next/navigation';
import { PageProps } from '@/definitions/page-types';
import TranslationsProvider from '@/app/contexts/translation-provider';
import NeonCursor from '@/components/utils/neon-cursor';

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['common', 'about-me', 'resumen'];



const HomeLayout = async ({ params, children }: PageProps) => {
  const { locale } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <NeonCursor />
      {children}
    </TranslationsProvider>

  )
}

export default HomeLayout