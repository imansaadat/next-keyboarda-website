import React from "react";
import Image from "next/image";
const ServiceItems = ({ serviceData }) => {
  return (
    <section className="py-10">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex justify-center items-center text-center mb-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49.945"
              height="9.357"
            >
              <path
                data-name="Path 7"
                d="M2.828 2.825l4.429 4.528 4.43-4.529m0 0l4.428 4.528 4.429-4.527m0 0l4.428 4.528 4.433-4.528m0 0l4.428 4.528 4.427-4.528m0 0l4.429 4.528 4.428-4.528"
                fill="none"
                stroke="#324b6b"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
          </div>
          <h2 className="mx-4 text-2xl font-bold text-black">خدمات کیبوردا</h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49.945"
              height="9.357"
            >
              <path
                data-name="Path 7"
                d="M2.828 2.825l4.429 4.528 4.43-4.529m0 0l4.428 4.528 4.429-4.527m0 0l4.428 4.528 4.433-4.528m0 0l4.428 4.528 4.427-4.528m0 0l4.429 4.528 4.428-4.528"
                fill="none"
                stroke="#324b6b"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
        <div className="text-center md:w-2/3 mx-auto mb-6">
          <p className="text-base md:text-lg text-dark md:leading-8 text-center">
            تیم برنامه نویسی کیبوردا با ارائه خدمات نوین و بروز در زمینه طراحی
            سایت، پیاده سازی، توسعه، آزمون و رفع خطاهای برنامه در حوزه وب و
            اپلیکیشن فعالیت می کند و ضمانت ارائه خدمات را در بهترین سطح به شما
            ارائه می دهد.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceData.map(({ id, img, title, desc }) => (
            <div
              className={`shadow-lg p-8 text-center rounded-md ${
                id === 6 || id === 7 ? "bg-baseColor text-white" : "text-black"
              }`}
              key={id}
            >
              <Image src={img} className="h-14 mx-auto" alt={title} />
              <h3
                className={`text-black text-lg font-medium py-3 ${
                  id === 6 || id === 7
                    ? "bg-baseColor text-white"
                    : "text-black"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-dark leading-7 ${
                  id === 6 || id === 7
                    ? "bg-baseColor text-white"
                    : "text-black"
                }`}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
