import '@styles/globals.scss';

import ProgressBarClient from '@components/NavProgressBar';
import { MainLayout } from '@layouts/MainLayout';
import { TransitionLayout } from '@layouts/TransitionLayout';
import { cx } from '@utils/tools';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'vi-VN' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'NextJS 13',
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: TAny;
}) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body className={cx('scroll-smooth w-screen overflow-x-hidden font-alex')}>
        <Suspense>
          <ProgressBarClient />
        </Suspense>
        <MainLayout>
          <TransitionLayout>
            <>{children}</>
          </TransitionLayout>
        </MainLayout>
      </body>
    </html>
  );
}
