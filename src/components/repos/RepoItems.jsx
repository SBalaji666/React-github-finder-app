import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';
import PropType from 'prop-types';

function RepoItems({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 card rounded-md bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-3 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="div">
          <div className="badge badge-info badge-lg mr-2">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="badge badge-success badge-lg mr-2">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="badge badge-errir badge-lg mr-2">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="badge badge-warning badge-lg mr-2">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItems.propTypes = {
  repo: PropType.object.isRequired,
};

export default RepoItems;
