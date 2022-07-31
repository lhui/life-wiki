import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '源于实践',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Life wiki 的内容均来源于实践。
      </>
    ),
  },
  {
    title: '聚焦问题',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Life wiki 的内容聚焦在所遇到的问题上。
      </>
    ),
  },
  {
    title: '运用实践解决问题，并更新实践',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        实践与问题相辅相成，从问题中总结实践，并在实践中发现问题。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures() {
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
