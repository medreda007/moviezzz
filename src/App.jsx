
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/about/about';
function App() {
  return (
    <Routes>
      <Route path="/moviezzz" element={<HomePage/>} />
      <Route path="/moviezzz/about" element={<AboutPage/>}/>
      <Route path="/moviezzz/about/:movie" element={<AboutPage />} />
          </Routes>
  );
}
export default App;
