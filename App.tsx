import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import LoginForm from './components/auth/LoginForm';
import PatientForm from './components/auth/PatientForm';
 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPatientForm, setShowPatientForm] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowPatientForm(true);
  };

  const handlePatientFormSubmit = () => {
    setShowPatientForm(false);
  };

  // Handle login flow
  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  if (showPatientForm) {
    return <PatientForm onSubmit={handlePatientFormSubmit} />;
  }

  // Main application after login and patient form
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          {/* Main application routes */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Products />
                <FAQ />
                <Contact />
              </>
            }
          />
 
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
