import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* Correct path for accessing images in the public folder */}
      <img src="/img/header.png" alt="Org" />
    </header>
  );
}

export default Header;