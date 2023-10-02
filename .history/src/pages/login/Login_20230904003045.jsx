import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <span className="logo">TheFANIME</span>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Đăng Nhập</h1>
          <input type="email" placeholder="Email hoặc số diện thoại" />
          <input type="password" placeholder="Mật khẩu" />
          <button className="loginButton">Đăng nhập</button>
          <span>
            Bạn mới sử dụng The Fanime? <b>Đăng ký ngay.</b>
          </span>
          <small>
            Được bảo vệ bởi Google reCAPCHA hãy chắc rằng bạn không phải người
            máy. <b>Tìm hiểu thêm</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
