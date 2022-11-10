import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

function Navbar({ title }) {
  return (
    <nav className="navbar bg-neutral text-primary-content mb-12">
      <div className="container mx-auto">
        <div className="flex-none ">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link className="text-lg font-bold align-middle" to="/">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link className="btn btn-ghost btn-sm btn rounded-btn" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost btn-sm btn rounded-btn" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github',
};

Navbar.propTypes = {
  title: PropType.string,
};

export default Navbar;
