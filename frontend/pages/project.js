import Project from '../components/Project';

const Home = props => (
  <div>
    <Project id={props.query.id} />
  </div>
);

export default Home;
