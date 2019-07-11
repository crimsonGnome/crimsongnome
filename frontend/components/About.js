import { Component } from 'react';
import PortPreviewStyles from './styles/PortPreviewStyles';
import { MainBody, DualList, DualLayout } from './styles/BodyLayout';
import Title from './styles/Title';
class About extends Component {
  render() {
    return (
      <MainBody>
        <PortPreviewStyles>
          <span className="head">
            <img className="gnome" src="/static/Laura4.png" />

            <Title>About, Skills, and Interest</Title>
            <img className="gnome" src="/static/Laura4.png" />
          </span>
          <div className="padding_about">
            <DualLayout>
              <div className="about">
                <h3 className="crimson center">Core</h3>
                <hr />
                <DualList>
                  <li>Javascript</li>
                  <li>NodeJS</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>GraphQL</li>
                  <li>MongoDB</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Photoshop</li>
                </DualList>
              </div>
              <div className="about">
                <h3 className="crimson center">Libraries, Framework, JS</h3>
                <hr />
                <DualList>
                  <li>ReactJS</li>
                  <li>NextJS</li>
                  <li>Prisma</li>
                  <li>Express</li>
                  <li>OAuth</li>
                  <li>Google Maps</li>
                </DualList>
              </div>
              <hr />
            </DualLayout>
            <h3 className="crimson">About and Interest</h3>
            <span className="text-align-left">
              <p>
                <span className="bold">tldr:</span> I'm Joseph Eggers, a self
                taught software developer who loves to create projects and write
                code.
              </p>
              <p>
                In college, I studied physics because I wanted to understand the
                mathematics of the nature of our reality. At the culmination of
                my college my experience, I was more entranced by the coding in
                the software than by physics I was studying. I choose to pursue
                programming after college and immersed myself in courses, docs,
                and projects.
              </p>
              <p>
                I remember writing my first lines of code and being amazed with
                how things happened. My first distinct memory of code was being
                blown away by css (designs). I was able to shape my websites in
                ways I never imagined. It was the simple things at first like
                float left, background color, and margin but it blew my mind the
                way in old timey looney toons cartoons when a character’s mind
                explodes. It clicked, and I was hooked.
              </p>
              <p>
                Looking at design, The gap between what I wanted to create, and
                what I created got closer together. Design is something that
                people can recognize easily, but being able to create takes
                practice and dedication. Combining the process of code and
                design to make full stack applications drives to get my own
                designs and visions closer together.
              </p>
              <p>
                To me the most important things when I’m not coding speding time
                my girlfriend Laura, family, and friends. On my off time, I love
                board games, D&D, movies, and coding. As you read this, I’m
                probably typing away coding for fun, with a vintage copy of Risk
                underneath my computer
              </p>
              <p>
                If you ever need a coffee drinking work buddy or a website
                built, Slide into those contact DMS and hit me up.
              </p>
              <p>Stay Classy 🧐</p>
            </span>
          </div>
        </PortPreviewStyles>
      </MainBody>
    );
  }
}

export default About;
