import React, { useEffect, useState, useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../Context/github/GithubContext';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) return <Spinner />;

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserResults;
