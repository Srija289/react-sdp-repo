import { BrowserRouter} from 'react-router-dom';
import './App.css';
import MainNavBar from './Pages/MainNavBar';

function App() {
  return (
     <BrowserRouter>
         <MainNavBar/>
     </BrowserRouter>
  );
}

export default App;
