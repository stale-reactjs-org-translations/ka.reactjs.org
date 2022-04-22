/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import React from 'react';
import {sharedStyles} from 'theme';

type Props = {
  location: Location,
};

const PageNotFound = ({location}: Props) => (
  <Layout location={location}>
    <Container>
      <div css={sharedStyles.articleLayout.container}>
        <div css={sharedStyles.articleLayout.content}>
          <Header>გვერდი ვერ მოიძებნა</Header>
          <TitleAndMetaTags title="React - გვერდი ვერ მოიძებნა" />
          <div css={sharedStyles.markdown}>
            <p>ჩვენ ვერ ვიპოვეთ ის, რასაც თქვენ ეძებდით.</p>
            <p>
              გთხოვთ, დაუკავშირდით იმ გვერდის მფლობელს, რომლის ბმულმაც აქ
              მოგიყვანათ და აცნობეთ, რომ მათ მიერ მითითებული ბმული არასწორია.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default PageNotFound;
