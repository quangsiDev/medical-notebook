import React from "react";
import imgUser from "../../assets/dad.png";
export default function ItemFather() {
  return (
    <div className="flex space-x-3">
      <img src={imgUser} alt="" className="w-40" />
      <div className="rounded-xl bg-white w-56 h-40">Thông tin cha</div>
    </div>
  );
}
