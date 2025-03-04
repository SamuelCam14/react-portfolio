export const PersonalInfo = () => {
  const personalInfo = {
    email: "mailto:progreso.dev@proton.me",
    githubLink: "https://github.com/SamuelCam14",
    linkedinPage: "https://www.linkedin.com/in/samuel-camargo-dev",
  };

  return (
    <section className="flex flex-col gap-5">
      {Object.entries(personalInfo).map(([key, value]) => (
        <div key={key}>
          <p className="text-gray-500 opacity-70">// My {key}</p>
          <p>
            <span className="text-blue-500">const </span>
            <span className="text-green-500">{key}</span>
            <span className="text-white"> = </span>
            <a href={value} target="_blank" rel="noopener noreferrer">
              <span className="text-orange-500">"{value}"</span>
            </a>
            <span className="text-white">;</span>
          </p>
        </div>
      ))}
    </section>
  );
};
