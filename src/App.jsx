import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
    
  );
};

export default App;
