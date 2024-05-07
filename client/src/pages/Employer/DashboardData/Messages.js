import React, { useState } from "react";

function Messages() {
  const [messages, setMessages] = useState([]);
  return (
    <div className=" w-full h-auto  lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Messages
      </h1>

      <p className="  text-sm">
        {messages?.length ? "Message list" : "No message found"}
      </p>
    </div>
  );
}

export default Messages;
