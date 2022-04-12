import "@styles/globals.scss";

import { MainLayout } from "@layouts/MainLayout";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

/**
 * Default layout for page component
 */
const DefaultLayout: IComponent = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const [isPreloaded, setPreloaded] = useState(false);

  const getLayout =
    (Component as IPageComponent).getLayout ||
    ((children) => <DefaultLayout>{children}</DefaultLayout>);

  const PageContent = Component as IPageComponent;

  useEffect(() => {
    /**
     * Fix render with React18 cause crash
     */
    setPreloaded(true);
  }, []);

  if (!isPreloaded) {
    return null;
  }

  return (
    <RecoilRoot>
      <MainLayout>{getLayout(<PageContent {...pageProps} />)}</MainLayout>
    </RecoilRoot>
  );
}

export default MyApp;
