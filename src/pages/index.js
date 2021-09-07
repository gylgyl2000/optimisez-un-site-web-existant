import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';


const resources = [
  {
    title: 'HTML5',
    imageUrl: '/img/HTML5.svg',
    siteUrl: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/',
  },
  {
    title: 'CSS3',
    imageUrl: '/img/CSS3.svg',
    siteUrl: 'https://babeljs.io/docs/en/',
  },
  {
    title: 'Git',
    imageUrl: '/img/Git.png',
    siteUrl: 'https://docusaurus.io/',
  },
  {
    title: 'VSCodium',
    imageUrl: '/img/vscodium_logo.png',
    siteUrl: 'https://docs.gitlab.com/',
  },
  {
    title: 'GitKraken',
    imageUrl: '/img/gitkraken.png',
    siteUrl: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    title: 'Github',
    imageUrl: '/img/github.png',
    siteUrl: 'https://yarnpkg.com/lang/en/docs/',
  },
  {
    title: 'Firefox',
    imageUrl: '/img/firefox-developer-edition_logo.png',
    siteUrl: '',
  },
  {
    title: 'Chromium',
    imageUrl: '/img/Chromium.png',
    siteUrl: '',
  },
  /* {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  },
  {
    title: '',
    imageUrl: '',
    siteUrl: '',
  }, */
];


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className="hero__img" src="img/OpenClassrooms.png" alt="OpenClassrooms"/>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/mission">
            La mission
          </Link>
        </div>
      </div>
    </header>
  );
}

function Resources({imageUrl, title, siteUrl}) {
  return (
    <div className="col ta-center w-20p">
      <a href={siteUrl} rel="noreferrer" target="_blank" alt={title}>
        <img className="h-50" src={imageUrl} alt={title} />
          <p>{title}</p>
      </a>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="resources uil-ph-20 uil-ff-hind uil-bgc-white uil-pb-48 lg:uil-pb-80 uil-pt-48 lg:uil-pt-80 css-w9ntn5-Section">
          <div className="uil-mh-auto uil-maw-500 uil-pos-relative uil-z-2 md:uil-maw-1200">
            {/* <header className="md:uil-ta-center uil-mb-48 lg:uil-mb-80 uil-mh-auto md:uil-w-70p lg:uil-w-90p uil-ta-center">
              <h2 className="">Ressources</h2>
            </header> */}
            <div className="container jc-between d-flex m-auto fx-wrap">
              {resources.map((props, idx) => (
                <Resources key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
