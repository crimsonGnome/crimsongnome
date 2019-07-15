import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Router from 'next/router';
import Error from './ErrorMessage';

const SINGLE_PROJECT_QUERY = gql`
  query SINGLE_PROJECT_QUERY($id: ID!) {
    project(where: { id: $id }) {
      id
      title
      paragraphs
      techStack
      liveLink
      githubLink
      isSecret
    }
  }
`;

const UPDATE_PROJECT_MUTATION = gql`
  mutation UPDATE_PROJECT_MUTATION(
    $id: ID!
    $title: String
    $paragraphs: [String]
    $liveLink: String
    $githubLink: String
    $techStack: [String]
    $isSecret: Boolean
  ) {
    updateProject(
      id: $id
      title: $title
      paragraphs: $paragraphs
      liveLink: $liveLink
      githubLink: $githubLink
      techStack: $techStack
      isSecret: $isSecret
    ) {
      id
    }
  }
`;

class UpdateProject extends Component {
  state = {};
  handleChange = e => {
    e.preventDefault();
    let { name, type, value } = e.target;
    if (type === 'checkbox') {
      value = !this.state.isSecret;
    }
    this.setState({ [name]: value });
  };
  handleParagraph = (e, data) => {
    e.preventDefault();
    //Get Element
    const a = document.getElementById('newParagraph');
    const { name } = e.target;
    let paragraphs = [...data];
    const b = document.getElementById(name);

    //Get the value
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

  uploadTechStack = (e, data) => {
    e.preventDefault();
    //Get Element
    const a = document.getElementById('newTechStack');
    const { name } = e.target;
    const b = document.getElementById(name);
    let techStack = [...data];
    //Get the value
    if (name === '') {
      techStack.push(a.value);
      a.value = '';
    } else {
      for (let i = 0; i < techStack.length; i++) {
        if (name === techStack[i]) {
          //if key matches paragraph
          techStack[i] = b.value;
          break;
        }
      }
    }
    this.setState({ techStack: techStack });
  };
  updateProject = async (e, updateProjectMutation) => {
    e.preventDefault();
    const res = await updateProjectMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });

    Router.push({
      pathname: '/product',
      query: { id: res.data.updateProject.id }
    });
  };

  render() {
    return (
      <Query
        query={SINGLE_PROJECT_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.project) return <p>No Item Found for ID {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_PROJECT_MUTATION} variables={this.state}>
              {(updateProject, { loading, error }) => (
                <Form onSubmit={e => this.updateProject(e, updateProject)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor=" title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="title"
                        required
                        onChange={this.handleChange}
                        defaultValue={data.project.title}
                      />
                    </label>

                    <label htmlFor="paragraphs">
                      paragraphs
                      {data.project.paragraphs.map(paragraph => (
                        <div>
                          <textarea
                            type="text"
                            key={paragraph}
                            id={paragraph}
                            placeholder="paragraphs"
                            required
                            defaultValue={paragraph}
                          />
                          <button
                            name={paragraph}
                            onClick={e =>
                              this.handleParagraph(e, data.project.paragraphs)
                            }
                          >
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
                        <button onClick={this.handleParagraph}>
                          Add Paragraph
                        </button>
                      </div>
                    </label>

                    <label htmlFor="techStack">
                      techStack
                      {data.project.techStack.map(tech => (
                        <div>
                          <input
                            id="newTechStack"
                            key={tech}
                            id={tech}
                            name="newtechStack"
                            placeholder="New Tech"
                            defaultValue={tech}
                          />
                          <button
                            name={tech}
                            onClick={e =>
                              this.uploadTechStack(e, data.project.techStack)
                            }
                          >
                            Edit Tech
                          </button>
                        </div>
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
                        onChange={this.handleChange}
                        defaultValue={data.project.liveLink}
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
                        onChange={this.handleChange}
                        defaultValue={data.project.githubLink}
                      />
                    </label>
                    <label htmlFor="recurringItem">
                      Is Secret
                      <input
                        name="isSecret"
                        type="checkbox"
                        checked={this.state.recurringItem}
                        onChange={this.handleChange}
                        defaultChecked={data.project.isSecret}
                      />
                    </label>

                    <button type="submit">
                      Sav{loading ? 'ing' : 'e'} Changes
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateProject;
