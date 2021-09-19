import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Notes from './pages/Notes';
import styled from 'styled-components';

function App() {
  return (
    <Page>
      <Router>
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/notes" component={Notes} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Page>
  );
}

// New
export default App;

const Page = styled.div`
  background: rgb(27, 40, 56);
  background: linear-gradient(
    190deg,
    rgba(27, 40, 56, 1) 7%,
    rgba(17, 17, 17, 1) 45%,
    rgba(17, 17, 17, 1) 54%,
    rgba(27, 40, 56, 1) 96%
  );
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
`;
