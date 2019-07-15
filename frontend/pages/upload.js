import CreateProject from '../components/CreateProject';
import AdminSignIn from '../components/AdminSignIn';

const Home = props => (
  <AdminSignIn>
    <CreateProject />
  </AdminSignIn>
);

export default Home;
