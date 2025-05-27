import React from 'react';
import './Dashboard.css';

const Physiotherapists = () => {
  return (
    <div className="content">
      <h2>إدارة المعالجين الفيزيائيين</h2>
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>التخصص</th>
            <th>رقم التواصل</th>
            <th>الإجراء</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>د. ليلى حسن</td>
            <td>شلل نصفي</td>
            <td>0912345678</td>
            <td><button>تعديل</button> <button>حذف</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Physiotherapists;