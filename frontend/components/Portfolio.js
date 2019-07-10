import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PortPreview from './PortPreview';
import randomNumber from '../lib/randomNumber';

import { MainBody, DualLayout } from './styles/BodyLayout';

const paperclipGen = () => {
  let num = randomNumber(6);
  switch (num) {
    case 1:
      return `/static/paperclip1.png`;
    case 2:
      return `/static/paperclip2.png`;
    case 3:
      return `/static/paperclip3.png`;
    case 4:
      return `/static/paperclip4.png`;
    case 5:
      return `/static/paperclip5.png`;
    case 6:
      return `/static/paperclip6.png`;
  }
};

const ALL_PORT_QUERY = gql`
  query {
    projects(where: { isSecret: false }, orderBy: createdAt_DESC) {
      id
      logo
      title
      pictures
      largePictures
      liveLink
      githubLink
      techStack
      paragraphs
    }
  }
`;

class Portfolio extends Component {
  render() {
    return (
      <MainBody>
        <p>Here is a selection of some recent work 🧐</p>
        <br />

        <Query query={ALL_PORT_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            // if (!data || data.items.length === 0) return <p>no data</p>;
            return (
              <DualLayout>
                {data.projects.map(project => (
                  <PortPreview
                    key={project.id}
                    id={project.id}
                    logo={project.logo}
                    title={project.title}
                    paperclip={paperclipGen()}
                    picture={project.pictures[0]}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                    paragraph={project.paragraphs[0]}
                  />
                ))}
              </DualLayout>
            );
          }}
        </Query>
      </MainBody>
    );
  }
}

export default Portfolio;
export { paperclipGen };
export { randomNumber };
