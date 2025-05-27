import React from 'react';
import './Dashboard.css';

const Instructions = () => {
  return (
    <div className="content">
      <h2>إدارة الإرشادات</h2>
      <ul>
        <li>إرشادات استخدام الكرسي المتحرك <button>تعديل</button> <button>حذف</button></li>
        <li>تمارين فيزيائية لمرضى الشلل <button>تعديل</button> <button>حذف</button></li>
      </ul>
      <button>إضافة إرشاد جديد</button>
    </div>
  );
};

export default Instructions;