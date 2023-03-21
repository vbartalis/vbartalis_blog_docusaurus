import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

type HeroImg = {
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const svg: HeroImg = { Svg: require("@site/static/img/birds-2.svg").default };

function ShowSvg({ Svg }) {
  return <Svg className={styles.featureSvg} role="img" />;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroTextContainer}>
        <ShowSvg {...svg}></ShowSvg>
        <div className={styles.heroTextArea}>
          <p className={styles.heroTitle}>{siteConfig.title}</p>
          <p className={styles.heroSubitle}>Üdvözöllek az oldalamon!</p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
