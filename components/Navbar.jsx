import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import NotificationBell from './NotificationBell';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">StackIt</Link>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/ask" className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Ask Question
              </Link>
              <NotificationBell />
              <div className="flex items-center space-x-2">
                <img 
                  src={`https://ui-avatars.com/api/?name=${user.username}&background=random`} 
                  alt={user.username} 
                  className="w-8 h-8 rounded-full"
                />
                <button 
                  onClick={logout}
                  className="px-3 py-1 text-gray-600 hover:text-gray-800"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 text-gray-600 hover:text-gray-800">
                Login
              </Link>
              <Link to="/register" className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;