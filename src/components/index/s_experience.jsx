import React from "react";

function Role({ title, bullets }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-blue text-sm font-medium">{title}</h4>
      <ul className="flex flex-col gap-2 text-subtext0">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-overlay1 select-none">›</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Employer({ logo, name, period, children }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span
          className="size-11 shrink-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${logo}')` }}
        />
        <div className="flex flex-col">
          <span className="font-semibold text-text">{name}</span>
          <span className="text-subtext0 text-xs">{period}</span>
        </div>
      </div>
      <div className="pl-3 flex flex-col gap-5">
        {children}
      </div>
    </section>
  );
}

export default function Experience() {
  return (
    <div className="flex flex-col gap-8">
      <Employer
        logo="/images/UM_logo_blank.png"
        name="University of Michigan"
        period="Aug 2023 — Present"
      >
        <Role
          title="Unity Game Developer (SURE Program)"
          bullets={[
            "Developed realistic and responsive player movement mechanics in C#.",
            "Designed and implemented custom art including tilesets and animations.",
          ]}
        />
        <Role
          title="Web developer (PSDL)"
          bullets={[
            "Developed a wordpress website for the Precision Systems Design Lab at UofM.",
            "Integrated the salient wordpress theme into the project for faster workflow and modern UI.",
          ]}
        />
        <Role
          title="Multivariable + Vector Calculus Instructor (ECAS)"
          bullets={[
            "Designed practice sets and solution sets for weekly content summary.",
            "Prepared and delivered weekly lectures on various topics related to multivariable and vector calculus.",
          ]}
        />
      </Employer>

      <Employer
        logo="/images/codeNinjas_logo.jpg"
        name="Code Ninjas"
        period="Aug 2023 — Present"
      >
        <Role
          title="Code Sensei"
          bullets={[
            "Developed realistic and responsive player movement mechanics in C#.",
            "Designed and implemented custom art including tilesets and animations.",
          ]}
        />
      </Employer>
    </div>
  );
}
