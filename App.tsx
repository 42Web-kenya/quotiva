
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import NewQuotation from './components/NewQuotation';
import QuotationsList from './components/QuotationsList';
import Clients from './components/Clients';
import Settings from './components/Settings';
import { AppProvider, useAppContext } from './context/AppContext';

const AppLayout: React.FC = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    }
  }, [isSidebarOpen]);

  return (
    <div className="relative min-h-screen lg:flex font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quotations/new" element={<NewQuotation />} />
            <Route path="/quotations/edit/:id" element={<NewQuotation />} />
            <Route path="/quotations" element={<QuotationsList />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};


const ThemedApp: React.FC = () => {
  const { theme } = useAppContext();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);
  
  return <AppLayout />;
}


const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <ThemedApp />
      </HashRouter>
    </AppProvider>
  );
};

export default App;