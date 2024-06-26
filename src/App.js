import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Authentication/Login';
import Wellcome from './Authentication/wellcome';
import Signup from './Authentication/Signup';
import { useState, useEffect } from 'react';
import { auth } from './Firebase';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Ensure correct return of the JSX element
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path='/' element={user ? <Wellcome /> : <Navigate to="/login" />} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
