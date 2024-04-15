import { Outlet, NavLink } from "react-router-dom";

function Hearder(props) {
  return (
    <div>
      <nav className="flex bg-white gap-20 items-center mt-2  px-10 pt-3 pb-3 sticky top-0 z-50">
        <NavLink to="/" className="logo text-xl">
          <img
            src="https://quizizz.com/wf/assets/62fa6419161d3a641f681ceb_Logo.svg"
            alt=""
          />
        </NavLink>
        <ul className="flex gap-20 nav">
          <li>
            <NavLink to="/" style={{ padding: "14px 16px" }}>
              Dành cho trường học
            </NavLink>
          </li>
          <li>
            <NavLink to="/" style={{ padding: "14px 16px" }}>
              Các kế hoạch
            </NavLink>
          </li>
          <li>
            <NavLink to="/" style={{ padding: "14px 16px" }}>
              Các giải pháp
            </NavLink>
          </li>
          <li>
            <NavLink to="/" style={{ padding: "14px 16px" }}>
              Tài nguyên
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-7">
          <NavLink to="dangnhap">
            <button style={{ backgroundColor: "#ede6f6", color: "#5d2057" }}>
              Đăng nhập
            </button>
          </NavLink>
          <NavLink to="dangky">
            <button style={{ backgroundColor: "#9a4292", color: "white" }}>
              Đăng ký
            </button>
          </NavLink>
        </div>
      </nav>
      <div id="detail">
        {/* Sử dụng Outlet để hiển thị nội dung tương ứng của mỗi route */}
        <Outlet />
      </div>
    </div>
  );
}

export default Hearder;
