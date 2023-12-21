import {Routes,Route} from 'react-router-dom'
import { Sidebar, MainContent, Header } from "./components/index";
import { Wrapper } from "./components/style";
import { DataProvider } from "./context/Context";
import { Home } from './pages';
import "./index.css";
function App() {
  return (
    <DataProvider>
      <Wrapper>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Wrapper>
    </DataProvider>
  );
}

export default App;
