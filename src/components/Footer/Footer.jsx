import "./Footer.css"; // Css
import DataFooter from "../../data/footer.json"; // Lấy dữ liệu từ Json

// Component Footer
const Footer = () => (
  <footer className="footer page-wide">
    <div className="footer-control">
      {/* Xuất dữ liệu ra từ mảng json */}
      {DataFooter.map((footer, index) => (
        <div key={index} className="list">
          {footer.col_values.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ))}
    </div>
  </footer>
);

// Trả về
export default Footer;
