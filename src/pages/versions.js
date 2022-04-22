/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Layout from 'components/Layout';
import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import React from 'react';
import {urlRoot} from 'site-constants';
import {sharedStyles} from 'theme';

// $FlowFixMe This is a valid path
import versions from '../../content/versions.yml';

type Props = {
  location: Location,
};

const Versions = ({location}: Props) => (
  <Layout location={location}>
    <Container>
      <div css={sharedStyles.articleLayout.container}>
        <div css={sharedStyles.articleLayout.content}>
          <Header>React-ის ვერსიები</Header>
          <TitleAndMetaTags
            canonicalUrl={`${urlRoot}/versions/`}
            title="React - ვერსიები"
          />
          <div css={sharedStyles.markdown}>
            <p>
              React-ის ვერსიების სრული ისტორია ხელმისაწვდომია{' '}
              <a
                href="https://github.com/facebook/react/releases"
                target="_blank"
                rel="noopener">
                GitHub-ზე
              </a>
              .<br />
              უახლესი ვერსიების დოკუმენტაცია ასევე შეგიძლიათ იხილოთ ქვემოთ.
            </p>
            <p>
              იხილეთ FAQ (ხშირად დასმული შეკითხვები) სექცია, რათა შეიტყოთ მეტი{' '}
              <a href="/docs/faq-versioning.html">
                ჩვენი ვერსიირებისა და სტაბილურობის მეთოდიკის შესახებ
              </a>
              .
            </p>
            {versions.map(version => (
              <div key={version.title}>
                <h3>{version.title}</h3>
                <ul>
                  <li>
                    <a href={version.changelog} target="_blank" rel="noopener">
                      ცვლილებების ჩამონათვალი
                    </a>
                  </li>
                  {version.path && (
                    <li>
                      <a href={version.path} rel="nofollow">
                        დოკუმენტაცია
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default Versions;
