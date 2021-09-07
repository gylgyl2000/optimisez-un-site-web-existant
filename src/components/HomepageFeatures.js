import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Optimisez un site web existant',
    Svg: require('../../static/img/WEB_DEV_JR.svg').default,
    description: (
      <>
        Faites passer le site web de l'entreprise en<br />
        tête des résultats Google grâce à la mise en<br />
        place de bonnes pratiques de SEO.
      </>
    ),
  },
  {
    title: 'La chouette agence',
    Svg: require('../../static/img/la-chouette-agence.svg').default,
    description: (
      <>
        Une agence de web design qui aide les<br />
        entreprises à devenir attractives et visibles<br />
        sur Internet
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
