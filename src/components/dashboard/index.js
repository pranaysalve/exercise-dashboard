import React, { useState } from "react";
import { mockData } from "../../data/data";
import Table from "../table/";

const Dashboard = () => {
  const [data, setData] = useState(mockData);
  const columns = [
    {
      name: "Name",
      title: "Title",
      company: "Company",
      quickActions: "Quick Actions",
      contactLocation: "Contact Location",

      email: "Email",
    },
  ];

  return (
    <div className="">
      <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
      <div className="bg-white rounded-lg shadow-lg ">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Dashboard;
