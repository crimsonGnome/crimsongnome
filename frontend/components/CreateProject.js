import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Router from 'next/router';
import Error from './ErrorMessage';
import FeltStyles from './styles/FeltStyles';
const CREATE_PROJECT_MUTATION = gql`
  mutation CREATE_PROJECT_MUTATION(
    $title: String!
    $logo: String!
    $logoLarge: String!
    $paragraphs: [String!]!
    $pictures: [String]
    $largePictures: [String]
    $phonePictures: [String]
    $phonePicturesLarge: [String]
    $liveLink: String!
    $githubLink: String!
    $techStack: [String!]!
    $isSecret: Boolean!
  ) {
    createProject(
      title: $title
      logo: $logo
      logoLarge: $logoLarge
      paragraphs: $paragraphs
      pictures: $pictures
      largePictures: $largePictures
      phonePictures: $phonePictures
      phonePicturesLarge: $phonePicturesLarge
      liveLink: $liveLink
      githubLink: $githubLink
      techStack: $techStack
      isSecret: $isSecret
    ) {
      id
    }
  }
`;

class CreateProject extends Component {
  state = {
    title: '',
    logo: '',
    logoLarge: '',
    paragraphs: [],
    pictures: [],
    largePictures: [],
    phonePictures: [],
    phonePicturesLarge: [],
    liveLink: '',
    githubLink: '',
    techStack: [],
    isSecret: false
  };
  handleChange = e => {
    let { name, type, value } = e.target;
    if (type === 'checkbox') {
      value = !this.state.isSecret;
    }
    this.setState({ [name]: value });
  };
  handleParagraph = e => {
    //Get Element
    const a = document.getElementById('newParagraph');
    const { name } = e.target;
    const b = document.getElementById(name);

    //Get the value
    let paragraphs = [...this.state.paragraphs];
    if (name === '') {
      paragraphs.push(a.value);
      a.value = '';
    } else {
      for (let i = 0; i < paragraphs.length; i++) {
        if (name === paragraphs[i]) {
          //if key matches paragraph
          paragraphs[i] = b.value;
          break;
        }
      }
    }
    //set state
    this.setState({ paragraphs: paragraphs });
    //copy the existing state and push value
  };

  uploadPictures = async e => {
    const { name } = e.target;
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'crimsonGnome');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dpnkdclyo/image/upload',
      {
        method: 'POST',
        body: data
      }
    );
    const file = await res.json();

    if (name === 'phonePictures') {
      let phonePictures = [...this.state.phonePictures];
      let phonePicturesLarge = [...this.state.phonePicturesLarge];
      phonePictures.push(file.eager[1].secure_url);
      phonePicturesLarge.push(file.secure_url);

      this.setState({
        phonePictures: phonePictures,
        phonePicturesLarge: phonePicturesLarge
      });
    }
    if (name === 'pictures') {
      let pictures = [...this.state.pictures];
      let largePictures = [...this.state.largePictures];
      pictures.push(file.eager[0].secure_url);
      largePictures.push(file.secure_url);

      this.setState({
        pictures: pictures,
        largePictures: largePictures
      });
    }
    if (name === 'logo') {
      let logo = file.eager[0].secure_url;
      let logoLarge = file.secure_url;
      this.setState({
        logo: logo,
        logoLarge: logoLarge
      });
    }
  };

  uploadTechStack = e => {
    //Get Element
    const a = document.getElementById('newTechStack');
    //Get the value

    const { value } = a;
    //copy the existing state and push value
    let techStack = [...this.state.techStack];
    techStack.push(value);
    //set Attribut to blank
    a.value = '';
    this.setState({ techStack: techStack });
  };

  render() {
    return (
      <Mutation mutation={CREATE_PROJECT_MUTATION} variables={this.state}>
        {(createProject, { loading, error }) => (
          <Form
            data-test="form"
            onSubmit={async e => {
              //Stop the form from submiting
              e.preventDefault();
              //call The mutation
              const res = await createProject();
              //Change them to single item page
              Router.push({
                pathname: '/project',
                query: { id: res.data.project.id }
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor=" pictures">
                Desktop Pictures
                <input
                  type="file"
                  name="pictures"
                  placeholder="Upload portfolio pictures"
                  required
                  onChange={this.uploadPictures}
                />
                <FeltStyles>
                  <div className="images">
                    {this.state.pictures.map(item => (
                      <img key={item} src={item} alt="item preview" />
                    ))}
                  </div>
                </FeltStyles>
              </label>
              <label htmlFor=" phonePictures">
                Phone Pictures
                <input
                  type="file"
                  name="phonePictures"
                  placeholder="Upload portfolio phonePictures"
                  onChange={this.uploadPictures}
                />
                <FeltStyles>
                  <div className="images">
                    {this.state.phonePictures.map(item => (
                      <img key={item} src={item} alt="item preview" />
                    ))}
                  </div>
                </FeltStyles>
              </label>
              <label htmlFor=" title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="logo">
                logo
                <input
                  id="logo"
                  name="logo"
                  type="file"
                  placeholder="upload a logo"
                  onChange={this.uploadPictures}
                />
              </label>
              <label htmlFor="paragraphs">
                paragraphs
                {this.state.paragraphs.map(paragraph => (
                  <div>
                    <textarea
                      type="text"
                      key={paragraph}
                      id={paragraph}
                      placeholder="paragraphs"
                      required
                      defaultValue={paragraph}
                    />
                    <button name={paragraph} onClick={this.handleParagraph}>
                      Edit Paragraph
                    </button>
                  </div>
                ))}
                <div>
                  <textarea
                    id="newParagraph"
                    type="text"
                    name="newParagraph"
                    placeholder="New Paragraph"
                  />
                  <button onClick={this.handleParagraph}>Add Paragraph</button>
                </div>
              </label>

              <label htmlFor="techStack">
                techStack
                {this.state.techStack.map(tech => (
                  <ul>
                    <li key={tech}>{tech}</li>
                  </ul>
                ))}
                <div>
                  <input
                    id="newTechStack"
                    type="text"
                    name="newtechStack"
                    placeholder="New Tech"
                  />
                  <button onClick={this.uploadTechStack}>Add Tech</button>
                </div>
              </label>

              <label htmlFor="liveLink">
                liveLink
                <input
                  type="text"
                  id="liveLink"
                  name="liveLink"
                  placeholder="liveLink"
                  required
                  value={this.state.liveLink}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="githubLink">
                githubLink
                <input
                  type="text"
                  id="githubLink"
                  name="githubLink"
                  placeholder="githubLink"
                  required
                  value={this.state.githubLink}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="recurringItem">
                Is Secret
                <input
                  name="isSecret"
                  type="checkbox"
                  checked={this.state.recurringItem}
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateProject;
