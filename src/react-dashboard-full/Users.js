import React from 'react';
import './Dashboard.css';

const Users = () => {
  return (
    <div className="content">
      <h2>إدارة المستخدمين</h2>
      <table>
        <thead>
          <tr>
            <th>اسم المستخدم</th>
            <th>البريد الإلكتروني</th>
            <th>الحالة</th>
            <th>الإجراء</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>سارة محمد</td>
            <td>sara@example.com</td>
            <td>نشط</td>
            <td><button>حظر</button> <button>حذف</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;