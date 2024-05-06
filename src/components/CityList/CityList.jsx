import "./CityList.css"; // Css
import DataCity from "../../data/city.json"; // khởi tạo và nhận giá trị data từ Json

// Component danh sách thành phố
const CityList = () => (
  // Section City
  <section className="citys">
    <div className="page-wide">
      <div className="city-list">
        {/* Thực hiện show dữ liệu */}
        {DataCity.map((city, index) => (
          <div className="item" key={index}>
            <img src={city.image} />
            <div className="text">
              <h2>{city.name}</h2>
              <p>{city.subText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Trả về
export default CityList;
