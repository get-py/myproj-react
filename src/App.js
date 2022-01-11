import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ReviewList from 'pages/reviews/ReviewList';
import Login from 'pages/accounts/Login';
import Profile from 'pages/accounts/Profile';
import TopNav from 'components/TopNav';
import Components from 'pages/examples/Components';
import ReviewForm from 'pages/reviews/ReviewForm';
import PageBlogList from 'pages/blog/PageBlogList';
import PageBlogDetail from 'pages/blog/PageBlogDetail';
import PageBlogForm from 'pages/blog/PageBlogForm';
import Clock from 'pages/examples/Clock';
import CssModule from 'pages/examples/CssModule';
import CssInJs from 'pages/examples/CssInJs';
import ContextApiSample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2';

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-purple-800 text-xl text-center text-bold py-2">
          ▼ Welcome to Yerin's React Router ▼
        </h1>
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/reviews/" />} />
          <Route path="/accounts/login/" element={<Login />} />
          <Route path="/accounts/profile/" element={<Profile />} />

          <Route path="/blog/posts/" element={<PageBlogList />} />
          <Route path="/blog/posts/new/" element={<PageBlogForm />} />
          <Route path="/blog/posts/:postId/" element={<PageBlogDetail />} />
          <Route path="/blog/posts/:postId/edit/" element={<PageBlogForm />} />

          <Route path="/examples/clock/" element={<Clock />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/examples/css-module/" element={<CssModule />} />
          <Route path="/examples/cssinjs/" element={<CssInJs />} />
          <Route
            path="/examples/contextapisample/"
            element={<ContextApiSample />}
          />
          <Route
            path="/examples/context-api-sample2/"
            element={<ContextApiSample2 />}
          />

          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<ReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
