import React from "react";
import Card from "../../components/Admin/Card";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import { useAdminContext } from "../../context/adminContext";

export default function Dashboard() {
  const { adminData } = useAdminContext();
  return (
    <div className=" w-full  bg-gray-400">
      <div className=" w-full bg-gray-800 text-white p-6">Dashboard</div>
      <div className=" flex flex-wrap justify-evenly mt-6">
        <Card
          title="candidates"
          count="2500"
          icon={<BsPerson size={70} color="orange" />}
        />
        <Card
          title="employers"
          count="1400"
          icon={<BiShoppingBag size={70} color="blue" />}
        />
        <Card
          title="jobs"
          count="3000"
          icon={<GrCertificate size={60} color="green" />}
        />
        {adminData?.isSuperAdmin && (
          <Card
            title="Admin"
            count="30"
            icon={<RiAdminFill size={70} color="purple" />}
          />
        )}
      </div>
    </div>
  );
}
