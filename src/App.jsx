// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BestProperties from './components/BestProperties/BestProperties';
import Elements from './components/Elements/Elements';
import FindProperties from './components/FindProperties/FindProperties';
import HeroNavbar from './components/Navbar/HeroNavbar';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import AddPropertyForm from './pages/Add-property'; 
import './index.css';

// Home page component
function Home() {
  return (
    <>
      <HeroNavbar />
      <Elements />
      <FindProperties />
      <WhyChooseUs />
      <BestProperties />
    </>
  );
}

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-property" element={<AddPropertyForm />} />
      </Routes>
  );
}

export default App;
