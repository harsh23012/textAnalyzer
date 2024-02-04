import Container from 'react-bootstrap/Container';
import {Form,Nav,Navbar, Button} from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types'

import { Link} from 'react-router-dom';



function NavbarComp(props) {


  return (
    <>
    <Navbar expand="md" bg={props.mode} data-bs-theme={props.mode} >
      <Container fluid>
        <Navbar.Brand as={Link} to={'/'}>{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
            <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>

            {/* <label htmlFor="theme" className='my-2 mx-2'>Select Theme</label>
            <ButtonToolbar id='theme' className="mb-3" aria-label="Toolbar with Button groups" >
        <ButtonGroup className="me-2" aria-label="First group" >
          <Button variant="secondary" style={{backgroundImage: 'linear-gradient(#05386B,#5CDB95)'}} onClick={props.theme("#05386B","#5CDB95")}>1</Button>{' '}
          <Button variant="secondary" style={{backgroundImage: 'linear-gradient(#242582,#F64C72)'}} onClick={props.theme("#242582","#F64C72")}>2</Button>{' '}
          <Button variant="secondary" style={{backgroundImage: 'linear-gradient(#501B1D,#ADADAD)'}} onClick={props.theme("#501B1D","#ADADAD")}>3</Button>{' '}
          <Button variant="secondary" style={{backgroundImage: 'linear-gradient(#1A1A1D,#6F2232)'}} onClick={props.theme("#1A1A1D","#6F2232")}>4</Button>
        </ButtonGroup>
        </ButtonToolbar> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label={props.mode==='light'?"Enable Dark Mode":"Disable Dark Mode"}
                className = {`text-${props.textMode} mx-3`}
                onClick={props.toggleMode}
            />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              variant = "dark"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>  );
}

export default NavbarComp;
NavbarComp.propTypes = {
    title : PropTypes.string.isRequired
}

NavbarComp.defaultProps = {
    title: 'Empty Now'
}