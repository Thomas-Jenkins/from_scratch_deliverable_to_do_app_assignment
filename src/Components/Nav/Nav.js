import './Nav.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { singOut } from '../../services/Auth';
// import Auth from '../Auth/Auth';

export default function Nav() {
  const { user, setUser } = useContext(UserContext);

  const handleLogOut = async () => {
    try {
      await singOut();
      setUser(null);
    } catch (e) {
    // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (
    <div className="nav-bar">
      
      <div>
        {!user && (
          <>
            <div>
              <h1>Welcome!</h1>
              <h2> What do you need to do today?</h2>
            </div>
            <Link to="/auth/sign-up">
                      Sign Up
            </Link>
            <Link to="/auth/sign-in">
                          Sign In
            </Link>
          </>
        )}
        {user && ( 
          <>
            <div>
              <h1>Welcome {`${user.email}`}!</h1>
              <button onClick={handleLogOut}>Sign Out</button>
            </div>
            <div>
              <h2> What do you need to do today?</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}