import React from "react";
import { uniformData } from "../assets/uniform";

const Section = ({ title, children, id }) => (
  <section id={id} className="bg-green-50 rounded-xl shadow-lg p-8 mb-12">
    <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">{title}</h2>
    {children}
  </section>
);

export default function UniformPage() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-50 tracking-tight sm:text-5xl md:text-6xl">
          Scoutsuniform
        </h1>
      </div>

      {/* General Uniform Info */}
      <Section title="Richtlijnen per tak" id="richtlijnen">
        <div className="text-gray-700 space-y-4 max-w-4xl mx-auto">
          {uniformData.intro.map((p, i) => <p key={i}>{p}</p>)}
          <div className="space-y-6 pt-4">
            {uniformData.groups.map((group) => (
              <div key={group.name}>
                <h3 className="text-xl font-semibold text-green-800">{group.name}</h3>
                <p className="mt-1">{group.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Hopper Store Info */}
      <Section title={uniformData.hopper.title} id="hopper">
        <div className="text-center text-gray-700">
          <p className="mb-4">{uniformData.hopper.text}</p>

          <a
            href={uniformData.hopper.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-green-700 underline hover:text-green-800"
          >
            Bezoek de Hopper website
          </a>
        </div>
      </Section>

      {/* Merchandise */}
      <Section title={uniformData.merchandise.title} id="merchandise">
        <p className="text-center text-gray-700 mb-8">{uniformData.merchandise.intro}</p>
        <div className="space-y-12">
          {uniformData.merchandise.items.map((item) => (
            <div key={item.name} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img src={item.image} alt={item.name} className="rounded-lg shadow-md max-h-96" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">{item.name}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.prices.map((p) => (
                    <div key={p.type} className="flex justify-between border-b pb-1">
                      <span className="text-gray-600">{p.type} (Maten: {p.sizes})</span>
                      <span className="font-semibold text-green-800">{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-green-200">
          <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">{uniformData.merchandise.ordering.title}</h3>
          <div className="text-center text-gray-700 space-y-4 max-w-3xl mx-auto">
            <p>
              {uniformData.merchandise.ordering.text}{" "}
              <a
                href={uniformData.merchandise.ordering.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-green-700 underline hover:text-green-800"
              >
                dit formulier
              </a>.
            </p>
            <p>{uniformData.merchandise.ordering.paymentInfo}</p>
          </div>
        </div>
      </Section>

      {/* Second Hand */}
      <Section title={uniformData.secondHand.title} id="tweedehands">
        <div className="text-center text-gray-700 space-y-4">
          <p>{uniformData.secondHand.intro}</p>
          <p>{uniformData.secondHand.text}</p>
          <div className="mt-6 pt-6 border-t border-green-200">
            <h4 className="font-semibold text-lg mb-2">{uniformData.secondHand.contact.title}</h4>
            <p>{uniformData.secondHand.contact.name}</p>
            <p>{uniformData.secondHand.contact.address}</p>
            <p>
              <a href={`tel:${uniformData.secondHand.contact.phone.replace(/\//g, '')}`} className="text-green-700 hover:underline">
                {uniformData.secondHand.contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${uniformData.secondHand.contact.email}`} className="text-green-700 hover:underline">
                {uniformData.secondHand.contact.email}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
