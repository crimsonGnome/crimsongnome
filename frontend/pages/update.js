import UpdateProject from '../components/UpdateProject';
import AdminSignIn from '../components/AdminSignIn';

const Update = ({ query }) => (
  <AdminSignIn>
    <UpdateProject id={query.id} />
  </AdminSignIn>
);
export default Update;
