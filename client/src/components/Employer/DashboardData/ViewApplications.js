import React, { useState, useEffect } from "react";
import { fetchAppliedCandidates } from "../../../api/employer/axios";

export default function ViewApplications({ idArray, setIsViewApplicationOn }) {
  const [allCandidates, setAllCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (idArray) {
        console.log(idArray);
        const ids = idArray.join(",");
        const res = await fetchAppliedCandidates(ids);
        console.log(res);
        if (res?.data?.success) {
          setAllCandidates(res?.data?.allCandidates);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" absolute top-0 left-0 h-full w-full bg-black bg-opacity-65 p-14 flex justify-center">
      <div className=" bg-white h-full w-full rounded-md ">
        {allCandidates ? (
          <div>
            {allCandidates?.map((candidate) => (
              <p>{candidate?.email}</p>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button
          className=" bg-gray-800 text-white p-3 py-6 rounded-lg"
          onClick={() => setIsViewApplicationOn(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
