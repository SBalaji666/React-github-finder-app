import { Link } from 'react-router-dom';
import PropType from 'prop-types';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row card-body items-center space-x-4">
        <div className="avatar">
          <div className="rounded-fill shadow w-14 h-14">
            <img src={avatar_url} alt="profile" />
          </div>
        </div>

        <div className="login">
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/user/${login}`}
            className="text-base-content text-opacity-40"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropType.object.isRequired,
};

export default UserItem;
