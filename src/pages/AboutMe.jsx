import { Contacts } from "../components/TreeMenu/Contacts.jsx";
import { TreeMenu } from "../components/TreeMenu/TreeMenu.jsx";

export const AboutMe = () => {
  const aboutMe = ["bio", "interests", "skills", "education"];

  return (
    <section>
      <div>
        <TreeMenu title={"aboutMe"} data={aboutMe} />
        <Contacts title={"contacts"} />
      </div>
      <div></div>
      <div></div>
    </section>
  );
};
