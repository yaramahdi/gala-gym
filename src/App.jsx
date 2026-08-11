import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components/layout/index.js';
import { HomePage } from './pages/HomePage.jsx';
import { EquipmentCategoryPage } from './pages/EquipmentCategoryPage.jsx';

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/equipment/:slug" element={<EquipmentCategoryPage />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
