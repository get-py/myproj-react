import useAuth from 'hooks/useAuth';
import { Link } from 'react-router-dom';

function TopNav() {
  const [auth, , , logout] = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="my-3 ">
      <ul className="flex gap-4">
        {!auth.isLoggedIn && (
          <>
            <li>
              <MyLink to="/accounts/login/">Login</MyLink>
            </li>
            <MyLink to="#">회원가입</MyLink>
          </>
        )}

        {auth.isLoggedIn && (
          <>
            <li>
              <MyLink to="/accounts/profile/">Profile</MyLink>
            </li>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        )}

        <li>
          <MyLink to="/reviews/">Review</MyLink>
        </li>
        <li>
          <MyLink to="/blog/posts/">Blog</MyLink>
        </li>

        <li>
          <MyLink to="/examples/components/">components</MyLink>
        </li>
        <li>
          <MyLink to="/examples/clock/">clock</MyLink>
        </li>
        <li>
          <MyLink to="/news/">News</MyLink>
        </li>
        <li>
          <MyLink to="/hotpotatos/">Discussion</MyLink>
        </li>

        {/* <li>
          <MyLink to="/examples/css-module/">CssModule</MyLink>
        </li>
        <li>
          <MyLink to="/examples/cssinjs/">CssInJs</MyLink>
        </li>
        <li>
          <MyLink to="/examples/contextapisample/">ContextApiSample</MyLink>
        </li>
        <li>
          <MyLink to="/examples/context-api-sample2/">ContextApiSample2</MyLink>
        </li> */}
      </ul>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <Link
      to={to}
      className="pb-1 text-gray-500 
      hover:text-purple-300 hover:border-purple-300 border-b-2"
    >
      {children}
    </Link>
  );
}

export default TopNav;
