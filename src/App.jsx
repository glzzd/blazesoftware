import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { PrivateRoute, PublicRoute } from './components/ProtectedRoute';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ForgotPassword from './pages/auth/ForgotPassword';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>

              <Route path="/" element={<Navigate to="/home" replace />} />
                <Route 
                path="/forgot-password" 
                element={
                  <PublicRoute>
                    <ForgotPassword />
                  </PublicRoute>
                } 
              />
              <Route 
                path="/login" 
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                } 
              />
              
              <Route 
                path="/home" 
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                } 
              />
            
               <Route 
                  path="*" 
                  element={<NotFound />}
                />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
