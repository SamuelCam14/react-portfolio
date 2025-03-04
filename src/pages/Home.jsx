import React from "react";
import { PersonalInfo } from "../components/PersonalInfo";

export const Home = () => {
  return (
    <div className="flex flex-col gap-15">
      {/* My name section */}
      <section className="flex flex-col gap-2">
        <p>Hello everyone! I am</p>
        <h1 className="text-5xl">Samuel Camargo</h1>
        <h2 className="text-blue-500">&gt; Front-end developer</h2>
      </section>
      {/* My info section */}
      <PersonalInfo />
    </div>
  );
};
