import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ReviewList from 'pages/reviews/ReviewList';
import Login from 'pages/accounts/Login';
import Profile from 'pages/accounts/Profile';
import TopNav from 'components/TopNav';
import Components from 'pages/examples/Components';
import ReviewForm from 'pages/reviews/ReviewForm';

function App() {
  return (
    <div className="App">
      <h1 className="text-purple-800 text-xl text-center text-bold py-2">
        ▼ Welcome to Yerin's React Router ▼
      </h1>
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/reviews/" />} />
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile" element={<Profile />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/examples/components/" element={<Components />} />
        <Route path="/reviews/new/" element={<ReviewForm />} />
        <Route path="/reviews/:reviewId/edit" element={<ReviewForm />} />
      </Routes>
    </div>
  );
}

export default App;
