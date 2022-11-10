import React, { useState, useContext } from 'react';
import GithubContext from '../../Context/github/GithubContext';
import AlertContext from '../../Context/alert/AlertContext';
import { searchUsers } from '../../Context/github/GithubActions';

function UserSearch() {
  const [text, setText] = useState('');
  const { users, dispatch, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!text) {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payLoad: users });

      setText('');
    }
  };

  return (
    <div className="text-primary-content grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="from-control">
            <div className="relative">
              <input
                type="text"
                className="input-lg w-full pr-40 bg-gray-200 text-black input"
                placeholder="Search"
                onChange={handleChange}
                value={text}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
            className="btn btn-ghost btn-lg inline-block"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
