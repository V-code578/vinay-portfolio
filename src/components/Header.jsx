import { useState, useEffect } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  return (
    <header
      className={`text-center p-5 ${dark ? 'bg-dark text-light' : 'bg-gradient-to-r from-blue-500 to-teal-500 text-dark'}`}
    >
      <h1 className="display-4 mb-3">Vinay H. N</h1>
      <p className="lead mb-4">Full Stack Developer | .NET Core | React JS</p>
      
      <div className="text-end">
        <button
          className="btn btn-light rounded-pill shadow-sm"
          onClick={() => setDark(!dark)}
          style={{ transition: 'all 0.3s ease' }}
        >
          <span className="d-none d-sm-inline">{dark ? '🌞' : '🌙'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
