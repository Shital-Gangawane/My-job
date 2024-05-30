import React, { useState } from "react";
import { changePassword } from "../../../api/candidate/axios";
import { useUserContext } from "../../../context/userContext";
import { CgSpinner } from "react-icons/cg";

function Changepassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      if (newPass !== confirmPass) {
        setError("New passwords don't match.");
        return;
      } else {
        setIsLoading(true);
        const res = await changePassword(oldPass, newPass, token);

        if (res?.data?.success) {
          setIsLoading(false);
          setOldPass("");
          setNewPass("");
          setConfirmPass("");
          setSuccess(res.data.message);
        } else {
          setIsLoading(false);
          setError(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("Error while changing password. Try again later.");
    }
  };

  return (
    <div className="relative w-full h-auto lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className="text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Change Password
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg w-full flex items-center justify-start flex-col p-10 gap-8"
      >
        <div className="w-full">
          <label className="block text-sm mb-1">
            Old password <span className="text-red-600">*</span>
          </label>
          <input
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
            type="password"
            className="w-2/3 bg-[#f0f5f7] rounded-lg p-4 focus:outline-none"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-sm mb-1">
            New password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            required
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            className="w-2/3 bg-[#f0f5f7] rounded-lg p-4 focus:outline-none"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm mb-1">
            Retype password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            required
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className={`w-2/3 bg-[#f0f5f7] ${
              newPass === confirmPass ? "border-green-500" : "border-red-500"
            } rounded-lg p-4 focus:outline-none`}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#6ad61d] flex items-center justify-center text-white px-3 py-3 rounded-lg self-start"
        >
          <CgSpinner className={`${isLoading ? " animate-spin" : " hidden"}`} />
          Change Password
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </div>
  );
}

export default Changepassword;
