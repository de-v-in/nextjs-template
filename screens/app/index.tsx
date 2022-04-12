import { DarkmodeAtom } from "@atoms/app";
import { TemplateComponent } from "@components/_template";
import { TEAM_NAME } from "@env";
import { cx } from "@utils/tools";
import Head from "next/head";
import Image from "next/image";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import { useRecoilState } from "recoil";

import styles from "./styles.module.scss";

export const AppScreen: IComponent = ({}) => {
  const { t, lang } = useTranslation("common");
  const [darkMode, setDarkMode] = useRecoilState(DarkmodeAtom);

  return (
    <div className={cx(styles.container, "dark:text-white")}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <TemplateComponent
            text="Welcome to"
            color={darkMode === "dark" ? "white" : "black"}
          />
          <a href="https://nextjs.org">{t("title", { name: TEAM_NAME })}</a>
        </div>

        <button
          onClick={() =>
            setDarkMode((mode) => (mode === "dark" ? "light" : "dark"))
          }
          className="active:scale-75 ease-in-out duration-500 rounded-full bg-blue-400 text-white p-2 mt-3"
        >
          Change Dark Mode
        </button>

        <button
          onClick={() => setLanguage(lang === "vi" ? "en" : "vi")}
          className="active:scale-75 ease-in-out duration-500 rounded-full bg-teal-600 text-white p-2 mt-3"
        >
          Change Language
        </button>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={cx(styles.code, "dark:text-black")}>
            pages/index.tsx
          </code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
