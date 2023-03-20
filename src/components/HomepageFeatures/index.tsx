import React from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  SvgLight: React.ComponentType<React.ComponentProps<"svg">>;
  SvgDark: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Versek",
    SvgLight: require("@site/static/img/svg/cat.svg").default,
    SvgDark: require("@site/static/img/svg/cat-dark.svg").default,
    description: <></>,
  },
  {
    title: "Képek",
    SvgLight: require("@site/static/img/svg/moose.svg").default,
    SvgDark: require("@site/static/img/svg/moose-dark.svg").default,
    description: <></>,
  },
  {
    title: "Pillanatok",
    SvgLight: require("@site/static/img/svg/flying.svg").default,
    SvgDark: require("@site/static/img/svg/flying-dark.svg").default,
    description: <></>,
  },
];

function Feature({ title, SvgLight, SvgDark, description, colorMode }) {
  console.log("colorMode: " + colorMode);
  let svgItem;
  if (colorMode === "light") {
    console.log("l");
    svgItem = <SvgLight className={styles.featureSvg} role="img" />;
  }
  if (colorMode === "dark") {
    console.log("d");
    svgItem = <SvgDark className={styles.featureSvg} role="img" />;
  }

  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">{svgItem}</div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );

  // return (
  //   <div className={clsx("col col--4")}>
  //     <div className="text--center">
  //       {colorMode === "dark" ? (
  //         <SvgDark className={styles.featureSvg} role="img" />
  //       ) : (
  //         <Svg className={styles.featureSvg} role="img" />
  //       )}
  //     </div>
  //     <div className="text--center padding-horiz--md">
  //       <h3>{title}</h3>
  //       <p>{description}</p>
  //     </div>
  //   </div>
  // );
}

export default function HomepageFeatures(): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} colorMode={colorMode} />
          ))}
        </div>
      </div>
    </section>
  );
}
