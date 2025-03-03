const tabs = ["_hello", "_aboutMe", "_projects"];

export const Tabs = ({ activeTab, setActiveTab }) => {
  const handleClick = (tab) => () => {
    setActiveTab(tab);
  };

  return (
    <nav>
      <ul className="flex justify-center">
        {tabs.map((tab) => (
          <li key={tab} className="border-x-1 border-gray-700">
            <button
              onClick={handleClick(tab)}
              className={`w-25 h-12 py-1.5 text-l ${
                activeTab === tab ? "border-b-2 border-yellow-500" : ""
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
