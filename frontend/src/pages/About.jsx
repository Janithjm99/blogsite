import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);

  return (
    <div className="container mx-auto my-12 p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">About Me</h1>
      <div className="space-y-8">
        <section>
          <p className="text-lg leading-relaxed text-gray-800">
            Hello! My name is{" "}
            <strong className="text-blue-700 font-semibold hover:underline">
              {profile?.user?.name || "Janith Madhusanka"}
            </strong>
            . I am currently pursuing a{" "}
            <span className="font-medium text-blue-600">
              BSc (Hons) in Information Technology
            </span>{" "}
            at Horizon Campus. My passion lies in exploring cutting-edge
            technologies and crafting solutions that contribute meaningfully to
            forward-thinking organizations.
          </p>
        </section>

        <section className="bg-gray-100 p-4 rounded-md">
          <h2 className="font-semibold text-blue-700 text-xl mb-3">
            Technical Expertise
          </h2>
          <p className="text-gray-700 leading-relaxed">
            My expertise revolves around full-stack web development using the{" "}
            <span className="font-medium text-blue-600">MERN stack</span>. I have
            recently started exploring Flutter for cross-platform app
            development, expanding my ability to design robust, user-friendly,
            and scalable solutions for diverse needs.
          </p>
        </section>

        <section className="bg-gray-100 p-4 rounded-md">
          <h2 className="font-semibold text-blue-700 text-xl mb-3">
            Professional Highlights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Driven by my strong work ethic and enthusiasm for technology, I am
            eager to collaborate with dynamic teams to deliver innovative
            solutions. My key attributes include honesty, dedication, and an
            unwavering focus on professional growth and excellence in software
            engineering.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
