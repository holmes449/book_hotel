import "./HeaderForm.css"; // Css
import { DateRange } from "react-date-range"; // Thư viện React Date Range
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState, useEffect } from "react"; // Khai báo use State để sử dụng cập nhật một giá trị
import { useNavigate } from "react-router-dom";

const HeaderForm = () => {
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
    <div className="header-form">
      {/* Form */}
      <form onSubmit={handleSubmit} className="form">
        {/* Control Input */}
        <div className="form-control">
          <i className="fa-solid fa-bed"></i>
          <input type="text" placeholder="Where are you going?" name="search" />
        </div>
        {/* Control date */}
        <div className="form-control" onClick={handleClick}>
          <i className="fa-solid fa-calendar-days"></i>
          <input
            className="input-date"
            type="text"
            placeholder={
              stringDate(date.startDate) + " to " + stringDate(date.endDate)
            }
            // disabled
          />
          {openDate && (
            <DateRange
              className="input-date-box"
              ranges={[date]}
              onChange={handleChange}
            />
          )}
        </div>
        {/* Control person */}
        <div className="form-control">
          <i className="fa-solid fa-person"></i>
          <p>1 adult</p>
          <i className="fa-solid fa-circle icon--small"></i>
          <p>0 children</p>
          <i className="fa-solid fa-circle icon--small"></i>
          <p>1 room</p>
        </div>
        {/* Button search */}
        <div className="form-control">
          <button className="button-normal button--blue">Search</button>
        </div>
      </form>
    </div>
  );
};

export default HeaderForm;
