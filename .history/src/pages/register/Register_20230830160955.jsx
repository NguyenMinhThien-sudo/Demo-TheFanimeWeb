import { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://cdn.sanity.io/images/kts928pd/production/259e53d9e7c42a6a4987470a1ffa3d55639da403-731x731.png"
            alt=""
          />
          <button className="loginButton">Đăng Nhập</button>
        </div>
      </div>
      <div className="container">
        <h1>Kho phim và hoạt hình không giới hạn</h1>
        <h2>Mọi lúc mọi nơi - Giải trí thỏa hơi</h2>
        <p>
          Bạn đã sẵn sàng chưa? Nhập email để tạo mới tài khoản hoặc bạn là
          thành viên trở lại
        </p>
        {!email || !password ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Sẵn Sàng
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Bắt Đầu
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
