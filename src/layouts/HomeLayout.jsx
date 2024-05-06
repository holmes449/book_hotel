import CityList from "../components/CityList/CityList"; // import component
import HotelType from "../components/HotelType/HotelType"; // import component
import HotelLoves from "../components/HotelLoves/HotelLoves"; // import component

const HomeLayout = () => {
  return (
    <main className="home-layout">
      {/* Trả về các Element từ Component */}
      <CityList />
      <HotelType />
      <HotelLoves />
    </main>
  );
};

// Trả về
export default HomeLayout;
