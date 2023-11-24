import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BasicExample from '../Sidebar';


const Layout = () => {

  return <>
    {/* <Sidebar /> */}
    <div className="App">
      <BasicExample />
      <Container fluid className="p-0">
        <Outlet />
      </Container>
    </div>
  </>
}

export default Layout;