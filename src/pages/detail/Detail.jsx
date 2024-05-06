import NavBar from "../../components/NavBar/NavBar"; // import Component
import EmailForm from "../../components/EmailForm/EmailForm"; // import Component
import Footer from "../../components/Footer/Footer"; // import Component
import DetailLayout from "../../layouts/DetailLayout"; // import Component

const Detail = () => {
  return (
    <div>
      {/* Trả về các component */}
      <NavBar />
      <DetailLayout />
      <EmailForm />
      <Footer />
    </div>
  );
};

export default Detail;
