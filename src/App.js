import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TableData from './table';



function App(){
  return(
    <div className='App'>

     <>
     <Navbar >
    <Container>
      <Navbar.Brand >Company logo</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
     
  <Navbar >
    <Container>
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar >
    <Container>
      <Navbar.Brand href="#form">Adopta a pet</Navbar.Brand>
    </Container>
  </Navbar>
  <TableData/>
 


</>
    </div>
  );
}
export default App;