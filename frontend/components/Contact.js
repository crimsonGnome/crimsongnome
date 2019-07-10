import { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ContactFormStyle } from './styles/Form';
import Router from 'next/router';
import { SixtyForty } from './styles/BodyLayout';
import Error from './ErrorMessage';
import { Logo, ImgContainer, ContactHeader } from './styles/Title';

const CONTACT_FORM_MUTATION = gql`
  mutation CONTACT_FORM_MUTATION(
    $subject: String!
    $name: String!
    $email: String!
    $body: String!
  ) {
    contactForm(subject: $subject, name: $name, email: $email, body: $body) {
      message
    }
  }
`;

class ConatactForm extends Component {
  state = {
    subject: '',
    name: '',
    email: '',
    body: ''
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Mutation mutation={CONTACT_FORM_MUTATION} variables={this.state}>
        {(contactForm, { loading, error }) => (
          <ContactFormStyle
            onSubmit={async e => {
              e.preventDefault();

              const res = await contactForm();

              Router.push({
                pathname: '/'
              });
            }}
          >
            <ContactHeader>Get in Touch</ContactHeader>

            <SixtyForty>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="name">
                  Your Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="email">
                  Your Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="subject">
                  Subject
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="subject"
                    required
                    value={this.state.subject}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="body">
                  Body
                  <textarea
                    type="number"
                    id="body"
                    name="body"
                    placeholder="body"
                    required
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                </label>

                <button type="submit">Submit</button>
              </fieldset>
              <div className="center">
                <ImgContainer>
                  <Logo src="/static/crimsonGnome.png" />
                </ImgContainer>
              </div>
            </SixtyForty>
          </ContactFormStyle>
        )}
      </Mutation>
    );
  }
}

export default ConatactForm;
