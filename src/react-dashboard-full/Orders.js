import React from 'react';
import './Dashboard.css';

const Orders = () => {
  return (
    <div className="content">
      <h2>إدارة الطلبات</h2>
      <table>
        <thead>
          <tr>
            <th>اسم المستخدم</th>
            <th>الطلب</th>
            <th>التاريخ</th>
            <th>الحالة</th>
            <th>الإجراء</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>أحمد علي</td>
            <td>كرسي متحرك</td>
            <td>2025-04-28</td>
            <td>قيد المعالجة</td>
            <td><button>تأكيد</button> <button>رفض</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;