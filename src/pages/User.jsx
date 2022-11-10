import React, { useContext, useEffect } from 'react';
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import RepoList from '../components/repos/RepoList';
import GithubContext from '../Context/github/GithubContext';
import { getUserAndRepos } from '../Context/github/GithubActions';

function User() {
  const { user, dispatch, loading, repos } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: 'GET_USER_AND_REPOS', payLoad: userData });
    };

    getUserData();
  }, []);

  if (!loading) return <Spinner />;

  const {
    name,
    type,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    login,
    avatar_url,
  } = user;

  return (
    <div className="w-100 mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link to="/" className="btn btn-ghost ">
          Back To Search
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 text-primary-content ">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-lg shadow-xl card image-full ">
            <figure>
              <img src={avatar_url} alt="" />
            </figure>
            <div className="card-body justify-end  ">
              <h2 className="card-title mb-0">{name}</h2>
              <p className="flex-grow-0">{login}</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-success">{type}</div>
              {hireable && <div className="badge bage-info mx-1">Hireable</div>}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a
                className="btn btn-outline"
                href={html_url}
                target="_blank"
                rel="noreferrer"
              >
                Visit Gitub Profile
              </a>
            </div>
          </div>

          <div className="w-full rounded-lg shadow-md bg-bass-100 stats ">
            {location && (
              <div className="stat">
                <div className="stat-title text-md">Location</div>
                <div className="stat-value text-lg">{location}</div>
              </div>
            )}
            {blog && (
              <div className="stat">
                <div className="stat-title text-md">Website</div>
                <div className="stat-value text-lg">
                  <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                    {blog}
                  </a>
                </div>
              </div>
            )}
            {twitter_username && (
              <div className="stat">
                <div className="stat-title text-md">Twitter</div>
                <div className="stat-value text-lg">
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full py-50 mb-10 rounded-lg shadow-md bg-base stats">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Followers</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {followers}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Following</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {following}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Repos</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {public_repos}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaStore className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Gists</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {public_gists}
          </div>
        </div>
      </div>

      <RepoList repos={repos} />
    </div>
  );
}

export default User;
