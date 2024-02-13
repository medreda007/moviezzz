
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/about/about';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/about/:movie" element={<AboutPage />} />
          </Routes>
  );
}
export default App;
