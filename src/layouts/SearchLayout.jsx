import "./SearchLayout.css"; // Css
import SearchHotel from "../components/SearchHotel/SearchHotel"; // import component
import SearchForm from "../components/SearchHotel/SearchForm"; // import component

const SearchLayout = () => (
  <main className="search-layout page-wide">
    {/* Trả về các Element từ Component */}
    <SearchForm />
    <SearchHotel />
  </main>
);

// Trả về
export default SearchLayout;
