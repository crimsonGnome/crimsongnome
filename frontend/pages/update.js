import CreateProject from '../components/CreateProject';

const Update = ({ query }) => (
  <div>
    <CreateProject id={query.id} />
  </div>
);
export default Update;
