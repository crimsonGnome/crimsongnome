// import React, { Component } from 'react';
// import { Mutation, Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import Form from './styles/Form';
// import Router from 'next/router';
// import Error from './ErrorMessage';

// const SINGLE_PROJECT_QUERY = gql`
//   query SINGLE_PROJECT_QUERY($id: ID!) {
//     project(where: { id: $id }) {
//       id
//       title
//       paragraphs
//       techStack
//       liveLink
//       githubLink
//       isSecret
//     }
//   }
// `;

// const UPDATE_PROJECT_MUTATION = gql`
//   mutation UPDATE_PROJECT_MUTATION(
//     $title: String
//     $paragraphs: [String]
//     $liveLink: String
//     $githubLink: String
//     $techStack: [String]
//     $isSecret: Boolean
//   ) {
//     updateProject(
//       title: $title
//       paragraphs: $paragraphs
//       liveLink: $liveLink
//       githubLink: $githubLink
//       techStack: $techStack
//       isSecret: $isSecret
//     ) {
//       id
//     }
//   }
// `;

// class CreateProject extends Component {
//   state = {};
//   handleChange = e => {
//     let { name, type, value } = e.target;
//     if (type === 'checkbox') {
//       value = !this.state.isSecret;
//     }
//     this.setState({ [name]: value });
//   };
//   handleParagraph = e => {
//     //Get Element
//     const a = document.getElementById('newParagraph');
//     const { name } = e.target;
//     const b = document.getElementById(name);

//     //Get the value
//     let paragraphs = [...this.state.paragraphs];
//     if (name === '') {
//       paragraphs.push(a.value);
//       a.value = '';
//     } else {
//       for (let i = 0; i < paragraphs.length; i++) {
//         if (name === paragraphs[i]) {
//           //if key matches paragraph
//           paragraphs[i] = b.value;
//           break;
//         }
//       }
//     }
//     //set state
//     this.setState({ paragraphs: paragraphs });
//     //copy the existing state and push value
//   };

//   uploadTechStack = e => {
//     //Get Element
//     const a = document.getElementById('newTechStack');
//     //Get the value

//     const { value } = a;
//     //copy the existing state and push value
//     let techStack = [...this.state.techStack];
//     techStack.push(value);
//     //set Attribut to blank
//     a.value = '';
//     this.setState({ techStack: techStack });
//   };
//   updateProject = async (e, updateProjectMutation) => {
//     e.preventDefault();
//     const res = await updateProjectMutation({
//       variables: {
//         id: this.props.id,
//         ...this.state
//       }
//     });

//     Router.push({
//       pathname: '/product',
//       query: { id: res.data.updateProject.id }
//     });
//   };

//   render() {
//     <Query
//       query={SINGLE_PROJECT_QUERY}
//       variables={{
//         id: this.props.id
//       }}
//     >
//       {({ data, loading }) => {
//         if (loading) return <p>Loading...</p>;
//         if (!data.item) return <p>No Item Found for ID {this.props.id}</p>;
//         return (
//           <Mutation mutation={UPDATE_PROJECT_MUTATION} variables={this.state}>
//             {(updateProject, { loading, error }) => (
//               <Form onSubmit={e => this.updateProject(e, updateProject)>
//               <>
//                 <Error error={error} />
//                 <fieldset disabled={loading} aria-busy={loading}>
//                   <label htmlFor=" title">
//                     Title
//                     <input
//                       type="text"
//                       id="title"
//                       name="title"
//                       placeholder="title"
//                       required
//                       onChange={this.handleChange}
//                       defaultValue={data.item.title}
//                     />
//                   </label>

//                   <label htmlFor="paragraphs">
//                     paragraphs
//                     {data.item.paragraphs.map(paragraph => (
//                       <div>
//                         <textarea
//                           type="text"
//                           key={paragraph}
//                           id={paragraph}
//                           placeholder="paragraphs"
//                           required
//                           defaultValue={paragraph}
//                         />
//                         <button name={paragraph} onClick={this.handleParagraph}>
//                           Edit Paragraph
//                         </button>
//                       </div>
//                     ))}
//                     <div>
//                       <textarea
//                         id="newParagraph"
//                         type="text"
//                         name="newParagraph"
//                         placeholder="New Paragraph"
//                       />
//                       <button onClick={this.handleParagraph}>
//                         Add Paragraph
//                       </button>
//                     </div>
//                   </label>

//                   <label htmlFor="techStack">
//                     techStack
//                     {data.item.techStack.map(tech => (
//                       <div>
//                         <input
//                           id="newTechStack"
//                           key={tech}
//                           id={tech}
//                           name="newtechStack"
//                           placeholder="New Tech"
//                           defaultValue={tech}
//                         />
//                         <button name={tech} onClick={this.uploadTechStack}>
//                           Edit Tech
//                         </button>
//                       </div>
//                     ))}
//                     <div>
//                       <input
//                         id="newTechStack"
//                         type="text"
//                         name="newtechStack"
//                         placeholder="New Tech"
//                       />
//                       <button onClick={this.uploadTechStack}>Add Tech</button>
//                     </div>
//                   </label>

//                   <label htmlFor="liveLink">
//                     liveLink
//                     <input
//                       type="text"
//                       id="liveLink"
//                       name="liveLink"
//                       placeholder="liveLink"
//                       required

//                       onChange={this.handleChange}
//                       defaultValue={data.item.liveLink}
//                     />
//                   </label>
//                   <label htmlFor="githubLink">
//                     githubLink
//                     <input
//                       type="text"
//                       id="githubLink"
//                       name="githubLink"
//                       placeholder="githubLink"
//                       required

//                       onChange={this.handleChange}
//                       defaultValue={data.item.githubLink}
//                     />
//                   </label>
//                   <label htmlFor="recurringItem">
//                     Is Secret
//                     <input
//                       name="isSecret"
//                       type="checkbox"
//                       checked={this.state.recurringItem}
//                       onChange={this.handleChange}
//                       defaultChecked={data.item.isSecret}
//                     />
//                   </label>

//                   <button type="submit">
//                       Sav{loading ? 'ing' : 'e'} Changes
//                     </button>
//                 </fieldset>
//                 </>
//               </Form>
//             )}
//           </Mutation>
//         );
//       }}
//     </Query>;
//   }
// }

// export default CreateProject;
