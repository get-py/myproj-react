import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopNav from 'components/TopNav';
import Components from 'pages/examples/Components';
import PageBlogList from 'pages/blog/PageBlogList';
import PageBlogDetail from 'pages/blog/PageBlogDetail';
import PageBlogForm from 'pages/blog/PageBlogForm';
import Clock from 'pages/examples/Clock';
import CssModule from 'pages/examples/CssModule';
import CssInJs from 'pages/examples/CssInJs';
import ContextApiSample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2';
import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleDetail from 'pages/news/PageNewsArticleDetail';
import PageNewsArticleForm from 'pages/news/PageNewsArticleForm';
import { Link } from 'react-router-dom';
import PageHotPotatoIndex from 'pages/discussion/PageHotPotatoIndex';
import PageHotPotatoDetail from 'pages/discussion/PageHotPotatoDetail';
import PageHotPotatoForm from 'pages/discussion/PageHotPotatoForm';
import PageLogin from 'pages/accounts/PageLogin';
import PageProfile from 'pages/accounts/PageProfile';
import PageReviewList from 'pages/reviews/PageReviewList';
import PageReviewForm from 'pages/reviews/PageReviewForm';

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-purple-800 text-xl text-center text-bold py-2">
          <Link to="/">▼ Welcome to Yerin's React Router ▼</Link>
        </h1>
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/reviews/" />} />
          <Route path="/accounts/login/" element={<PageLogin />} />
          <Route path="/accounts/profile/" element={<PageProfile />} />

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

          <Route path="/hotpotatos/" element={<PageHotPotatoIndex />} />
          <Route
            path="/hotpotatos/:hotpotatoId/"
            element={<PageHotPotatoDetail />}
          />
          <Route path="/hotpotatos/new/" element={<PageHotPotatoForm />} />
          <Route
            path="/hotpotatos/:hotpotatoId/edit/"
            element={<PageHotPotatoForm />}
          />

          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/:articleId/" element={<PageNewsArticleDetail />} />
          <Route path="/news/new/" element={<PageNewsArticleForm />} />
          <Route
            path="/news/:articleId/edit/"
            element={<PageNewsArticleForm />}
          />

          <Route path="/reviews/" element={<PageReviewList />} />
          <Route path="/reviews/new/" element={<PageReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<PageReviewForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
