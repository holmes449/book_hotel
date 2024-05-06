import "./HotelType.css"; // Css
import DataType from "../../data/type.json"; // Data - json

// Component loại hotel
const HotelType = () => (
  <section className="page-wide hotel-type">
    <h2>Browse by propety type</h2>
    <div className="hotel-type-list">
      {/* Trả về dữ liệu từ array */}
      {DataType.map((type, index) => (
        <div className="item" key={index}>
          <img src={type.image} alt="Image Home Type" />
          <h3>{type.name}</h3>
          <p>{type.count} hotels</p>
        </div>
      ))}
    </div>
  </section>
);

// Trả về
export default HotelType;
