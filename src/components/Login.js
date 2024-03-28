import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Đăng nhập</h2>
      <form>
        <div>
          <label htmlFor="username">Tên đăng nhập:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;