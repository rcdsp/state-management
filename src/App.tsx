import { FC } from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import startMockApi from './mocks/api';

// Pages
import HomePage from './routes/HomePage';
import PostsPage from './routes/PostsPage';
import CounterPage from './routes/CounterPage';

const App: FC = () => {
  startMockApi();

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/posts">
          <PostsPage />
        </Route>
        <Route path="/counter">
          <CounterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
