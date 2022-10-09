import React, { useState, useMemo } from 'react';
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
const codeStack = [
  'HTML',
  'CSS- using Styled componets to make custom design',
  'React',
  'Graphql',
  'Prisma',
  'Graphql Yoga',
  'Apollo Client'
];

const LoopData = (small, big) => {
  let array = [];
  for (let i = 0; i < small.length; i++) {
    array.push([small[i], big[i]]);
  }
  return array;
};

const Project = props => {
  const [isToggled, setToggle] = useState(false);
  let number = 0;
  const { id } = props;
  //runs the skew function 30 times to get 30 random skews
  const arrayOfSkewed = () => {
    let tempArray = Array(30);
    for (let i = 0; i < 30; i++) {
      tempArray[i] = skew();
    }

    return tempArray;
  };
  //function to return a number on through 30 in order------
  const seeminglyRandom = () => {
    let temp = number % 30;
    console.log(temp);
    number++;
    return temp;
  };
  //sets the array of 30 random objects and meomizes so it doenst re run with state
  const setSkew = useMemo(() => arrayOfSkewed(), []);
  console.log(setSkew);
  return (
    <Query
      query={SINGLE_PROJECT_QUERY}
      variables={{
        id: id
      }}
    >
      {({ error, loading, data }) => {
        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
        if (!data.project) return <p>No Item found for {id}</p>;
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
                  <div style={setSkew[seeminglyRandom()]}>
                    <Notecard>
                      <div className="paperNotecardDisplay">
                        {/* <PaperButton className="NotecardButton">
                          <a href={project.liveLink} target="_blank">
                            Live Link <i className="fas fa-arrow-right arrow" />
                          </a>
                        </PaperButton>
                        <hr className="project" /> */}
                        <PaperButton className="NotecardButton">
                          <a href={project.githubLink} target="_blank">
                            Code <i className="fas fa-arrow-right arrow" />
                          </a>
                        </PaperButton>
                        <hr className="project" />
                        <PaperButton
                          className="NotecardButton"
                          onClick={() => setToggle(!isToggled)}
                        >
                          View {isToggled ? 'Description' : 'Code Stack'}
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
                          skew={setSkew[seeminglyRandom()]}
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
                        skew={setSkew[seeminglyRandom()]}
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
                      backgroundImage: `radial-gradient(ellipse closest-side, transparent, white), url(${project.logoLarge})`,
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
                      backgroundImage: `radial-gradient(ellipse closest-side, transparent, transparent, white), url(${project.logoLarge})`,
                      skewX: '(-15deg)',
                      backgroundPositionX: 'center',
                      backgroundPositionY: 'center',
                      opacity: 0.3
                    }}
                  />
                  <br className="margin-grande" />
                  <h3 className="crimson">{project.title}</h3>
                  {!isToggled ? (
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
};

export default Project;
export { skew };
