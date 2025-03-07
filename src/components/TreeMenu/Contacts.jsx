import { useState } from "react";

export const Contacts = ({ title }) => {
  const [openItems, setOpenItems] = useState(false);

  const personalInfo = {
    email: "mailto:progreso.dev@proton.me",
    linkedinPage: "https://www.linkedin.com/in/samuel-camargo-dev",
  };

  const toggleItem = () => {
    setOpenItems(!openItems);
  };

  return (
    <div className="border-1 border-gray-700 p-2">
      <button
        className="border-1 border-gray-700 w-75 py-2 text-left indent-4"
        onClick={() => toggleItem()}
      >
        -- {title}
      </button>
      {openItems === true && (
        <ul className="flex flex-col gap-2 py-2">
          {Object.entries(personalInfo).map(([key, value]) => (
            <li key={key} className="indent-8">
              -{" "}
              <a href={value} target="blank">
                {key}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
