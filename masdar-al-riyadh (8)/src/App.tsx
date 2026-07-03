import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { CustomerShop } from './components/CustomerShop';
import { OrderTracker } from './components/OrderTracker';
import { CartDrawer } from './components/CartDrawer';
import { AdminPanel } from './components/AdminPanel';

function AppContent() {
  const { currentTab } = useStore();

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-brand-gray-light">
      {/* Navigation Header */}
      {currentTab !== 'admin' && <Navbar />}

      {/* Main Screen Layout Container */}
      <main className="flex-grow">
        {currentTab === 'home' && <Homepage />}
        {currentTab === 'shop' && <CustomerShop />}
        {currentTab === 'order-tracker' && <OrderTracker />}
        {(currentTab === 'admin' || currentTab === 'admin-login') && <AdminPanel />}
      </main>

      {/* Footer Area */}
      {currentTab !== 'admin' && <Footer />}

      {/* Slide-out Cart Drawer */}
      <CartDrawer />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

