import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ReviewList from 'pages/reviews/ReviewList';
import Login from 'pages/accounts/Login';
import Profile from 'pages/accounts/Profile';
import TopNav from 'components/TopNav';

function App() {
  return (
    <div className="App">
      <h1 className="text-purple-800">Welcome to Yerin's React Router!</h1>
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/reviews/" />} />
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile" element={<Profile />} />
        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
