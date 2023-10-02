import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://cdn.sanity.io/images/kts928pd/production/259e53d9e7c42a6a4987470a1ffa3d55639da403-731x731.png"
            alt=""
          />
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
