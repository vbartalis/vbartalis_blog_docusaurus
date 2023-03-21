import React from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Versek",
    Svg: require("@site/static/img/svg/cat.svg").default,
    description: <></>,
  },
  {
    title: "Képek",
    Svg: require("@site/static/img/svg/moose.svg").default,
    description: <></>,
  },
  {
    title: "Pillanatok",
    Svg: require("@site/static/img/svg/flying.svg").default,
    description: <></>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  // console.log("colorMode: " + colorMode);
  const { colorMode } = useColorMode();

  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
