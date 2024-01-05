import logo from './logo.svg';
import './App.css';
import Broute from './Broute';
import {Provider} from 'react-redux';



import store from './redux/Stor';
import store2 from './ReduxToolkit/Stor';
function App() {
  return (
    <Provider store={store2}>
      <div className="App">
        <Broute/>
      </div>
    </Provider>
  );
}

export default App;
