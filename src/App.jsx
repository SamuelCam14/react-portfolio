import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Display } from "./components/Display/Display";

export const App = () => {
  const [activeTab, setActiveTab] = useState("_hello");

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Display activeTab={activeTab} />
    </div>
  );
};
