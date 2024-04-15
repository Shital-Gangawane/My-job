import React from "react";
import Card from "../../components/Admin/Card";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import { useAdminContext } from "../../context/adminContext";

export default function Dashboard() {
  const { adminData, allAdmins, jobs } = useAdminContext();
  return (
    <div className="w-full flex flex-col h-screen bg-gray-400">
      <div className="w-full bg-gray-800 text-white p-6 flex justify-between">
        <p className="text-lg font-semibold">Dashboard</p>
        <p>Hi, {adminData?.name.split(" ")[0]}!</p>
      </div>
      <div className="overflow-auto flex flex-wrap justify-evenly mt-6 gap-2 p-6">
        <Card
          title="Candidates"
          count="2500"
          icon={<BsPerson size={70} color="orange" />}
        />
        <Card
          title="Employers"
          count="1400"
          icon={<BiShoppingBag size={70} color="blue" />}
        />
        <Card
          title="Jobs"
          count={jobs?.length}
          icon={<GrCertificate size={60} color="green" />}
        />
        {adminData?.isSuperAdmin && (
          <Card
            title="Admins"
            count={allAdmins?.length - 1}
            icon={<RiAdminFill size={70} color="purple" />}
          />
        )}
      </div>
    </div>
  );
}
