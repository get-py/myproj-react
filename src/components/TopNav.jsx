import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className="my-3 ">
      <ul className="flex gap-4">
        <li>
          <MyLink to="/accounts/profile/">Profile</MyLink>
        </li>
        <li>
          <MyLink to="/accounts/login/">Login</MyLink>
        </li>
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
