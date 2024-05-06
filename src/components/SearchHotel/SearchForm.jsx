import "./SearchForm.css";
import { DateRange } from "react-date-range"; // Thư viện React Date Range
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react"; // Khai báo use State để sử dụng cập nhật một giá trị
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn mặc định của form

    // Thay đổi URL
    navigate("/search");
  };

  // Tạo ra một biến Date - State
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  // Tạo một biến trạng thái hiện | ẩn
  const [openDate, setOpenDate] = useState(false);

  function stringDate(date) {
    const daySearch =
      date.getDate() > 9 ? date.getDate() : "0" + date.getDate(); // Ngày
    const monthSearch =
      date.getMonth() > 9
        ? Number(date.getMonth()) + 1
        : "0" + Number(date.getMonth() + 1); // Tháng
    const yearSearch = date.getFullYear(); // Năm

    const dateShow = daySearch + "/" + monthSearch + "/" + yearSearch; // Nối chuổi ngày / tháng / năm

    return dateShow;
  }

  // Tạo ra hàm thực hiện sự kiện on Change
  function handleChange(ranges) {
    setDate(ranges.selection);
    setOpenDate(!openDate);
  }

  // Sự kiện click
  function handleClick() {
    setOpenDate(!openDate);
  }

  return (
    // Article Search Form
    <article className="search-form">
      {/* Header */}
      <h2>Search</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Input */}
        <p className="title">Destination</p>
        <input type="text" name="" placeholder="Whare are you going?" />
        <p className="title">Check-in Date</p>
        <input
          type="text"
          name=""
          placeholder={
            stringDate(date.startDate) + " to " + stringDate(date.endDate)
          }
          onClick={handleClick}
        />
        {openDate && (
          <DateRange
            className="input-date-box"
            ranges={[date]}
            onChange={handleChange}
          />
        )}
        <p className="title">Options</p>
        <div className="control">
          <label htmlFor="">Min price per night</label>
          <input type="text" />
        </div>
        <div className="control">
          <label htmlFor="">Max price per night</label>
          <input type="text" />
        </div>
        <div className="control">
          <label htmlFor="">Adult</label>
          <input type="number" />
        </div>
        <div className="control">
          <label htmlFor="">Children</label>
          <input type="number" />
        </div>
        <div className="control">
          <label htmlFor="">Room</label>
          <input type="number" />
        </div>

        {/* Button */}
        <button className="button-normal button--white">Search</button>
      </form>
    </article>
  );
}

// Trả về
export default SearchForm;
