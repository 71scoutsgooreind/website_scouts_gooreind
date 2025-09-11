import React from "react";
import { groepenData } from "../assets/groepen";

export default function GroepenPage() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-50 tracking-tight sm:text-5xl md:text-6xl">
          Takken
        </h1>
      </div>

      <div className="space-y-16">
        {groepenData.map((group, index) => (
          <section
            key={group.title}
            id={group.title.toLowerCase().replace(/\s/g, "-")}
            className="bg-green-50 rounded-xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={`flex justify-center ${index % 2 !== 0 ? "md:order-last" : ""}`}>
                <img
                  src={group.image}
                  alt={`Groepsfoto ${group.title}`}
                  className="rounded-lg shadow-md max-h-96 w-full object-cover"
                />
              </div>
              <div className="text-gray-700">
                <h2 className="text-3xl font-bold text-green-900 mb-2">{group.title}</h2>
                <p className="text-md font-semibold text-green-700 mb-4">{group.age}</p>
                <div className="space-y-4">
                  {group.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
