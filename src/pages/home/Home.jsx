import NavBar from "../../components/NavBar/NavBar"; // import Component
import Header from "../../components/Header/Header"; // import Component
import HomeLayout from "../../layouts/HomeLayout"; // import Component
import EmailForm from "../../components/EmailForm/EmailForm"; // import Component
import Footer from "../../components/Footer/Footer"; // import Component

const Home = () => {
  return (
    <div>
      {/* Trả về các component */}
      <NavBar />
      <Header />
      <HomeLayout />
      <EmailForm />
      <Footer />
    </div>
  );
};

// Trả về
export default Home;
