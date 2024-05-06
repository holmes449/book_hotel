import "./SearchHotel.css"; // Css
import DataSearch from "../../data/search.json"; // data lấy từ Json

// Component trả về trang search
function SearchHotel() {
  return (
    <section className="search-hotel">
      {/* Show dữ liệu từ mảng */}
      {DataSearch.map((item, index) => (
        <div className="item" key={index}>
          <img src={item.image_url} alt="Image Hotel" className="image" />
          <div className="about">
            <h2>{item.name}</h2>
            <p>{item.distance} from center</p>
            <span>{item.tag}</span>
            <strong>{item.description}</strong>
            <p>{item.type}</p>
            {item.free_cancel ? (
              <div className="free_cancel">
                <strong>Free cancelation</strong>
                <p>You can cancle later, so lock in this great price today!</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="category">
            <div className="rate">
              <strong>
                <p>{item.rate_text}</p>
              </strong>

              <p className="box">{item.rate}</p>
            </div>
            <div className="see-detail">
              <div className="price">${item.price}</div>
              <p>Include tax and fees</p>
              <a href="/detail" className="button-normal button--blue">
                See availability
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

// Trả về
export default SearchHotel;
