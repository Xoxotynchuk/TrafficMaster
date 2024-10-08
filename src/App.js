import { GlobalProvider } from './components/store/GlobalContext'
import Container from './components/Container'
import "./styles/variables.css";
import './styles/skeleton.css';
import './styles/header.css';
import './styles/home.css';
import './styles/createTask.css';

import "./styles/modal.css";
import "./styles/alert.css";

function App() {
  return (
    <GlobalProvider>
        <Container/>
    </GlobalProvider>
);
}

export default App;
