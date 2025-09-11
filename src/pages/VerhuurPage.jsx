import React from "react";
import { verhuurData } from "../assets/verhuur";
import { FaMapMarkerAlt, FaEnvelope, FaEuroSign } from "react-icons/fa";

// A reusable Section component
const Section = ({ title, children, className = "" }) => (
  <section
    className={`my-12 bg-green-50 p-8 rounded-xl shadow-lg ${className}`}
  >
    <h2 className="text-green-900 text-3xl font-bold text-center mb-8">
      {title}
    </h2>
    {children}
  </section>
);

// A reusable InfoCard component
const InfoCard = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="text-green-700 text-2xl mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-green-800">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  </div>
);

export default function VerhuurPage() {
  const {
    title,
    address,
    contact,
    price,
    info,
    directions,
    calendar,
    form,
    images,
  } = verhuurData;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Verhuur aanvraag: ${subject}`
    )}&body=${encodeURIComponent(
      `Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <style>{`
        .horizontal-scroll-gallery::-webkit-scrollbar {
          height: 8px;
        }
        .horizontal-scroll-gallery::-webkit-scrollbar-track {
          background: #f0fdf4; /* bg-green-50 */
        }
        .horizontal-scroll-gallery::-webkit-scrollbar-thumb {
          background-color: #166534; /* text-green-800 */
          border-radius: 6px;
        }
        .horizontal-scroll-gallery {
          scrollbar-width: thin;
          scrollbar-color: #166534 #f0fdf4;
        }
      `}</style>
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-900 mb-12">
        <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-50 tracking-tight sm:text-5xl md:text-6xl">
          Verhuur
        </h1>
      </div>
      </h1>

      {/* General Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1 bg-green-50 p-6 rounded-xl shadow-lg space-y-6">
          <InfoCard icon={<FaMapMarkerAlt />} title={address.title}>
            <p>{address.street}</p>
            <p>{address.city}</p>
          </InfoCard>
          <InfoCard icon={<FaEnvelope />} title={contact.title}>
            <a
              href={`mailto:${contact.email}`}
              className="text-green-700 hover:underline"
            >
              {contact.email}
            </a>
          </InfoCard>
          <InfoCard icon={<FaEuroSign />} title={price.title}>
            <p>{price.description}</p>
          </InfoCard>
        </div>
        <div className="md:col-span-2 bg-green-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            {info.title}
          </h3>
          <div className="space-y-4 text-gray-700">
            {info.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <Section title="Foto's">
        <div className="horizontal-scroll-gallery flex space-x-4 overflow-x-auto pb-4">
          {images.map((image, index) => (
            <div key={index} className="h-64 w-96 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs italic text-gray-500">
          Scroll naar rechts voor meer foto's
        </p>
      </Section>

      {/* Calendar Section */}
      <Section title={calendar.title}>
        <div className="relative h-0 pb-[60%]">
          {" "}
          {/* Aspect ratio container */}
          <iframe
            src={calendar.embedUrl}
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-md"
            allowFullScreen
            title="Verhuur Kalender"
          ></iframe>
        </div>
      </Section>

      {/* Directions Section */}
      <Section title={directions.title}>
        <div className="max-w-4xl mx-auto space-y-6">
          {directions.sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-green-800 mb-2">
                {section.title}
              </h4>
              <p className="text-gray-700">{section.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
    </>
  );
}