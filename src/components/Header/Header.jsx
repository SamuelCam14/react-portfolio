import { useState } from "react";
import { Tabs } from "./Tabs";
import { ContactButton } from "./ContactButton";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("_hello");

  return (
    <header className="border-y-1 border-gray-700 flex items-center justify-between px-5">
      <div className="flex items-center">
        <p className="text-l text-white w-70">Samuel Camargo</p>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="flex items-center border-l-1 border-gray-700 pl-5">
        <ContactButton />
      </div>
    </header>
  );
};
