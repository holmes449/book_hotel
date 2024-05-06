import "./Header.css"; // Css
import HeaderForm from "./HeaderForm"; // Import form tìm kiếm nằm trong header

// Component Header
const Header = () => (
  <header className="header">
    <div className="page-wide">
      <h1>A lifetime of discounts? It's Genius.</h1>
      <p className="title">
        Get reward for your travels - unlock instant saving of 10% or more with
        a free account
      </p>
      <button className="button-normal button--blue">Sign In | Register</button>
      {/* Trả về Form Search nằm trong Header */}
      <HeaderForm />
    </div>
  </header>
);

// Trả về
export default Header;
