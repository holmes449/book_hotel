import NavBar from "../../components/NavBar/NavBar"; // import Component
import SearchLayout from "../../layouts/SearchLayout"; // import Component
import EmailForm from "../../components/EmailForm/EmailForm"; // import Component
import Footer from "../../components/Footer/Footer"; // import Component

const Search = () => {
  return (
    <div>
      {/* Trả về các component */}
      <NavBar />
      <SearchLayout />
      <EmailForm />
      <Footer />
    </div>
  );
};

// Trả về
export default Search;
