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
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <h2 className={styles.heroSubitle}>Üdvözöllek az oldalamon!</h2>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Üdvözöllek a honlapomon. Itt belepillanthatsz néhány gondolatfoszlányomba."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
