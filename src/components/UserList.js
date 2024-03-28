import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const formatAddress = (user) => {
    const { address } = user;
    if (address) {
      const { suite, street, city, zipcode } = address;
      return `${suite} ${street}, ${city}, ${zipcode}`;
    }
    return '-';
  };

  const deleteUser = async (userId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUsers(users.filter(user => user.id !== userId));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <table>
        <thead>
          <tr>
            <th>Mã tài khoản</th>
            <th>Họ Tên</th>
            <th>Tên đăng nhập</th>
            <th>Địa chỉ</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{formatAddress(user)}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;