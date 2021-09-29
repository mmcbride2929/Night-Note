import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Notes from './pages/Notes';
import styled from 'styled-components';

function App() {
  return (
    <Page>
      <Router>
        <Nav />
        <Switch>
          <Route path="/notes" component={Notes} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Page>
  );
}

export default App;

const Page = styled.div`
  background-color: #22272e;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;
