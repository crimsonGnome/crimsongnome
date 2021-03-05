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
                mathematics of our reality. At the culmination of my college
                experience, I was more entranced by the coding i`n the software
                than by the physics I was studying. I chose to pursue
                programming after college and immersed myself in courses, docs,
                and projects.
              </p>
              <p>
                I remember writing my first lines of code and being amazed with
                how code can create anything. My first distinct memory of code
                was being blown away by CSS (design). I was able to shape my
                websites in ways I never imagined. At first it was the simple
                things: float left; background color; margin, but the little
                design changes blew my mind`. Like a rainbow trout on a fishing
                line, it was game and I was hooked.
              </p>
              <p>
                Good design is something anybody could recognize, but being able
                to create takes practice and dedication. The void between what I
                wanted to create and what I could create eventually started to
                grow closer together. Combining the process of coding to
                designing to build..., to forge, brings its own satisfaction as
                I get better and better.
              </p>
              <p>
                When I’m not coding, the most important things to me are time
                with my beautiful{' '}
                <d style={{ color: '#e0e0e0' }}>girlfriend </d>
                <d style={{ color: '#e0e0e0' }}>fiance </d>wife Laura, family,
                and friends. On my off time, I love playing board games, casting
                magic missile in D&D, watching movies, and coding. As you read
                this, I’m probably typing away coding for fun, with a vintage
                copy of Risk underneath my computer.
              </p>
              <p>
                If you ever need a coffee-drinking work buddy, slide into those
                contact DMS and hit me up.
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
