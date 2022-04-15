import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <Router>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                AMAZONX
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:slug' element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>All Rights Reserved</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
