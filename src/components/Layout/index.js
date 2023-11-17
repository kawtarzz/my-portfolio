import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const Layout = () => {
  return <>
    <div className="App">
      <Sidebar />
      <Container fluid className="p-0">
        <Outlet />
      </Container>
    </div>
  </>
}

export default Layout;