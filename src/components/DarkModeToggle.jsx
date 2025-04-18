import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  return (
    <div className="text-end p-3">
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={() => setDark(!dark)}
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
