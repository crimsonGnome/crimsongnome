import { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { MainBody, DualLayout } from './styles/BodyLayout';
import PortPreview from './styles/PortPreviewStyles';
import { BigTitle } from './styles/Title';
import Picture, { Paperclip } from './styles/PortPrePicture';
import randomNumber from '../lib/randomNumber';
import { SixtyFortyCorkBoard } from './styles/BodyLayout';
import { paperclipGen } from './Portfolio';
import CorkBoard, { Notecard } from './styles/CorkBoardStyles';
import { PaperButton } from './styles/buttons';
import ViewImageStyles from './styles/ViewImageStyles';
import ViewImage from './ViewImage';

//shift css function
const skew = () => {
  let shift = randomNumber(2);
  let random = randomNumber(15);
  if (shift === 1) {
    random = { transform: `rotate(${random}deg)` };
  } else {
    random = { transform: `rotate(-${random}deg)` };
  }
  return random;
};

const SINGLE_PROJECT_QUERY = gql`
  query SINGLE_PROJECT_QUERY($id: ID!) {
    project(where: { id: $id }) {
      id
      title
      logoLarge
      pictures
      phonePictures
      phonePicturesLarge
      largePictures
      liveLink
      githubLink
      techStack
      paragraphs
    }
  }
`;

class Project extends Component {
  state = {
    codeView: false,
    skew: false
  };

  render() {
    const codeStack = [
      'HTML',
      'CSS- using Styled componets to make custom design',
      'React',
      'Graphql',
      'Prisma',
      'Graphql Yoga',
      'Apollo Client'
    ];
    const toggleCode = () => {
      let val = !this.state.codeView;
      this.setState({ codeView: val });
    };

    const LoopData = (small, big) => {
      let array = [];
      for (let i = 0; i < small.length; i++) {
        array.push([small[i], big[i]]);
      }
      return array;
    };

    return (
      <Query
        query={SINGLE_PROJECT_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.project) return <p>No Item found for {this.props.id}</p>;
          const project = data.project;
          return (
            <MainBody>
              <PortPreview>
                <Picture src={project.pictures[0]} />
                <Paperclip src={paperclipGen()} />
                <span className="head">
                  <img className="bigGnome" src="/static/Laura4.png" />

                  <BigTitle>Crimson Gnome</BigTitle>
                  <img className="bigGnome" src="/static/Laura4.png" />
                </span>
                <br />
                <SixtyFortyCorkBoard>
                  <CorkBoard className="order2">
                    <div style={skew()}>
                      <Notecard>
                        <div className="paperNotecardDisplay">
                          <PaperButton className="NotecardButton">
                            <a href={project.liveLink} target="_blank">
                              Live Link{' '}
                              <i className="fas fa-arrow-right arrow" />
                            </a>
                          </PaperButton>
                          <hr className="project" />
                          <PaperButton className="NotecardButton">
                            <a href={project.githubLink} target="_blank">
                              Code <i className="fas fa-arrow-right arrow" />
                            </a>
                          </PaperButton>
                          <hr className="project" />
                          <PaperButton
                            className="NotecardButton"
                            onClick={toggleCode}
                          >
                            View{' '}
                            {this.state.codeView ? 'Description' : 'Code Stack'}
                          </PaperButton>
                          <hr className="project" />
                          <PaperButton className="NotecardButton">
                            <span className="filler" disabled>
                              vv
                            </span>
                          </PaperButton>
                          <hr className="project" />
                          <PaperButton>
                            <span className="filler" disabled>
                              vv
                            </span>
                          </PaperButton>
                          <hr className="project" />
                          <PaperButton>
                            <span className="filler" disabled>
                              vv
                            </span>
                          </PaperButton>
                          <hr className="project" />
                        </div>
                      </Notecard>
                      <img className="pin" src="/static/pushPin.png" />
                    </div>

                    {LoopData(project.pictures, project.largePictures).map(
                      picture => (
                        <ViewImageStyles key={picture[0]}>
                          <ViewImage
                            src={picture[0]}
                            overlay={picture[1]}
                            alt="honeyfield Artistry"
                            skew={skew()}
                          />
                        </ViewImageStyles>
                      )
                    )}
                    {LoopData(
                      project.phonePictures,
                      project.phonePicturesLarge
                    ).map(picture => (
                      <ViewImageStyles key={picture[0]}>
                        <ViewImage
                          src={picture[0]}
                          overlay={picture[1]}
                          phone="phone"
                          alt="honeyfield Artistry"
                          skew={skew()}
                        />
                      </ViewImageStyles>
                    ))}
                  </CorkBoard>
                  <div className="order1">
                    <div
                      className="logo computer"
                      style={{
                        content: '',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '60%',
                        height: '100vh',
                        backgroundImage: `radial-gradient(ellipse closest-side, transparent, white), url(${
                          project.logoLarge
                        })`,
                        skewX: '(-15deg)',
                        opacity: 0.6
                      }}
                    />
                    <div
                      className="logo phone"
                      style={{
                        content: '',
                        position: 'absolute',
                        top: ' -10%',
                        left: 0,
                        width: '100%',
                        height: '50%',
                        backgroundRepeat: 'repeat',
                        backgroundImage: `radial-gradient(ellipse closest-side, transparent, transparent, white), url(${
                          project.logoLarge
                        })`,
                        skewX: '(-15deg)',
                        backgroundPositionX: 'center',
                        backgroundPositionY: 'center',
                        opacity: 0.3
                      }}
                    />
                    <br className="margin-grande" />
                    <h3 className="crimson">{project.title}</h3>
                    {!this.state.codeView ? (
                      <>
                        <h5 className="crimson">Description</h5>
                        {project.paragraphs.map(paragraph => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </>
                    ) : (
                      <>
                        <h5 className="crimson">Code Stack</h5>
                        <ul>
                          {project.techStack.map(code => (
                            <li className="code-stack">{code}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </SixtyFortyCorkBoard>
              </PortPreview>
            </MainBody>
          );
        }}
      </Query>
    );
  }
}

export default Project;
export { skew };
