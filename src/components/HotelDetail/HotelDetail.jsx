import "./HotelDetail.css"; // Css
import DataDetail from "../../data/detail.json"; // Data json

// Component hotel chi tiết
const HotelDetail = () => (
  // Hotel Detail
  <section className="hotel-detail">
    {/* Header */}
    <div className="detail-header">
      <div className="about">
        <h1>{DataDetail.name}</h1>
        <p className="address">
          <i className="fa-solid fa-location-dot"></i>
          {DataDetail.address}
        </p>
        <p className="text--blue">{DataDetail.distance}</p>
        <p className="text--green">{DataDetail.price}</p>
      </div>
      <div>
        <a
          href="#"
          className="detail-link button-normal button--blue button--ra-5"
        >
          Reserve or Book Now!
        </a>
      </div>
    </div>

    {/* Image list */}
    <div className="detail-image-list">
      {DataDetail.photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt="Photo Hotel Detail"
          className="detail-image"
        />
      ))}
    </div>

    {/* Content */}
    <div className="detail-content">
      <div className="info">
        <h2>{DataDetail.title}</h2>
        <p>{DataDetail.description}</p>
      </div>

      {/* Box */}
      <aside className="price-box">
        <h3>Rerfect for a 9-night stay!</h3>
        <p>
          Located in the real heart of Krakow this propety has an excellent
          location score of 9.8!
        </p>

        <p className="price">
          <span>${DataDetail.nine_night_price}</span> (9 nights)
        </p>

        {/* Button */}
        <a href="#" className="link button-normal button--blue button--ra-5">
          Reserve or Book Now!
        </a>
      </aside>
    </div>
  </section>
);

// Trả về
export default HotelDetail;
