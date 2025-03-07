import { useState } from "react";

export const TreeMenu = ({ title, data }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  // Alternar estado entre true y false
  const toggleItem = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className="border-1 border-gray-700 p-2">
      <button
        className="border-1 border-gray-700 w-75 py-2 text-left indent-4"
        onClick={() => toggleItem()}
      >
        -- {title}
      </button>
      {activeMenu === true && (
        <ul className="flex flex-col gap-2 py-2">
          {data.map((data) => (
            <li key={data}>
              <button className="indent-8">- {data}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
