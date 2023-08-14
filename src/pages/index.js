import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Read our Docs &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="Gentlent's documentation around APIs and technical infrastructure.">
      <HomepageHeader />
      <main>
        <section>
          <div className="container">
            <p>&nbsp;</p>
            <p>
              The <a href="https://www.gentlent.com">Gentlent</a> documentation is intended for software developers building features on top or with the use of Gentlent's platform. Parts of this site might not be translated correctly or might change in the future.
            </p>
            <h2>Found a bug?</h2>
            <p>Feel free to make changes to this page on <a target="_BLANK" href="https://github.com/gentlent/developers-docs/">our open-source Github repository</a> or <a href="https://www.gentlent.com/contact">report them to us</a>.</p>
            <h2>Not finding what you're looking for?</h2>
            <p>Try visiting <a href="https://www.gentlent.com">our website</a> for more information or <a href="https://www.gentlent.com/contact">contact us</a> and we'll get back to you shortly.</p>
            <p>&nbsp;</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
