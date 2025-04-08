import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaAdjust, FaSync } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light-mode':
        return <FaMoon />;
      case 'dark-mode':
        return <FaSun />;
      case 'dim-mode':
        return <FaAdjust />;
      case 'auto':
        return <FaSync />;
      default:
        return <FaMoon />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light-mode':
        return 'Switch to dark mode';
      case 'dark-mode':
        return 'Switch to dim mode';
      case 'dim-mode':
        return 'Switch to auto mode';
      case 'auto':
        return 'Switch to light mode';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={getLabel()}
      aria-pressed={theme !== 'auto'}
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle; 