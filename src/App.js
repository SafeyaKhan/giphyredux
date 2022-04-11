import { Provider } from 'react-redux';
import './App.css';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;