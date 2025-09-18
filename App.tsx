
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
