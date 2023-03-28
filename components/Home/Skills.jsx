import React from "react";

const Skills = ({ skillsData }) => {
  return (
    <section id="skill" className="relative py-20">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="bg-skill bg-cover bg-center text-center shadow-xl rounded-md py-7 px-5">
          <h2 className="text-2xl font-bold text-black my-8 lg:my-0">
            مهارت های تیم کیبوردا
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-5 min-h-[300px]">
            {skillsData.map(({ id, title, percent }) => (
              <div className="text-center" key={id}>
                <div
                  id={`per-${percent}`}
                  className="relative w-[150px] h-[150px] m-[.5rem] rounded-full bg-[#ffcdb2] overflow-hidden"
                >
                  <div className="flex justify-center items-center absolute top-1/2 left-1/2 h-[115px] w-[115px] bg-light rounded-full text-xl font-normal text-black translate-y-[-50%] translate-x-[-50%]">
                    {percent}%
                  </div>
                </div>
                <h4 className="text-lg text-black font-normal mt-4">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
