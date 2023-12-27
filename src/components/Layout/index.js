import './index.scss';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Sidebar from '../Sidebar';
import Home from '../Home';


const Layout = () => {


  return <>
    <div className="App section">
      <Sidebar />
      <Container fluid className="p-0">
        <Home />
        <Outlet />
      </Container>
    </div>
  </>
}

export default Layout;