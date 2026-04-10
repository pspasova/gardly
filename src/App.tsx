import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Family from './pages/Family';
import Tasks from './pages/Tasks';
import Cards from './pages/Cards';

const PAGE_BACKGROUNDS: Record<string, string> = {
  '/tasks': 'bg-white',
};

function AppContent() {
  const { pathname } = useLocation();
  const bg = PAGE_BACKGROUNDS[pathname] ?? 'bg-warm';

  return (
    <div className={`min-h-screen ${bg} font-body text-night antialiased`}>
      <Sidebar />
      <main className="pb-12 px-6 md:ml-64 pt-14">
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/family" element={<Family />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
