import "./HotelLoves.css"; // Css
import DataHotelLove from "../../data/hotel_list.json"; // Lấy dữ liệu json

import { NavLink } from "react-router-dom";

// Component trả về danh sách các holtel được yêu thích
function HotelLoves() {
  return (
    <section className="page-wide hotel-loves">
      <h2>Homes guests love</h2>
      <div className="hotel-love-list">
        {/* Return value array */}
        {DataHotelLove.map((hotelLove, index) => (
          <div className="item" key={index}>
            <img src={hotelLove.image_url} alt="Image Hotel Love" />
            <h3>
              <NavLink to="/detail">{hotelLove.name}</NavLink>
            </h3>
            <p>{hotelLove.city}</p>
            <p className="price">Starting from ${hotelLove.price}</p>
            <p className="rate">
              <span className="rate-icon">{hotelLove.rate}</span>
              {hotelLove.type}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Trả về
export default HotelLoves;
