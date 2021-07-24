import React from "react";
import ReactDOM from "react-dom";

const ชื่อ = "เจษ";
const นามสกุล = "สิทธิฯ";
const มื้อ = 4;

ReactDOM.render(
  <div>
    {/* <h1>อาหารที่ {ชื่อ + " " + นามสกุล} ชอบ</h1> */}
    <h1>อาหารที่ {`${ชื่อ} ${นามสกุล}`} ชอบ</h1>
    <ul>
      <li>มะม่วง</li>
      <li>ทุเรียน</li>
      <li>เงาะ</li>
    </ul>
    <p>
      {ชื่อ}กินวันละ {มื้อ} ครั้ง
      <br />
      เฉลี่ยทานครั้งละ {Math.floor(Math.random() * 100)} บาท
    </p>
  </div>,
  document.getElementById("root")
);
