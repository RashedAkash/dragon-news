import React, { useContext } from 'react';
import { FirebaseContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(FirebaseContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return <div>
      <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
    </div>
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to='/login' />
  }

};

export default PrivateRoute;