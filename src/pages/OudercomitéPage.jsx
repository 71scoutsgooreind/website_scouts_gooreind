import React from "react";

const Section = ({ title, children, id }) => (
  <section id={id} className="bg-green-50 rounded-xl shadow-lg p-8 mb-12 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">{title}</h2>
    {children}
  </section>
);

export default function OudercomitePage() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-50 tracking-tight sm:text-5xl md:text-6xl">
          Oudercomité
        </h1>
      </div>

      <Section title="Word lid van het Oudercomité" id="oudercomite">

        <div className="text-gray-700 space-y-6">

          <p>
            Ben jij een enthousiaste ouder, oud-leider of vriend van onze scoutsgroep? 
            Heb je zin om de handen uit de mouwen te steken en onze scoutswerking mee te ondersteunen? 
            Dan is het <strong>oudercomité van Scouts Gooreind</strong> misschien wel helemaal jouw ding!
          </p>

          <p>
            We zijn een groep geëngageerde ouders en sympathisanten die regelmatig samenkomen om 
            de scouts op allerlei manieren te ondersteunen — achter de schermen, maar met grote impact. 
            In overleg met de groepsleiding werken we aan praktische hulp én financiële acties.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Wat doen we zoal?
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Mee de schouders zetten onder de <strong>openscoutsdag</strong>, de <strong>breugelavond</strong> en de <strong>jaarlijkse BBQ</strong>.</li>
              <li><strong>Herstellingen</strong> uitvoeren en de <strong>lokalen onderhouden</strong> en <strong>verhuren</strong>.</li>
              <li>Klankbord zijn of <strong>inspelen op noden van de groep</strong> wanneer de groepsleiding dat vraagt.</li>
              <li><strong>Administratie</strong> en wettelijke verplichtingen die horen bij een <strong>vzw-werking</strong>.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              We zoeken nieuwe enthousiastelingen om ons team te versterken
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>We <strong>vergaderen </strong>ongeveer 5 keer per jaar samen met (een delegatie van) de groepsleiding.</li>
              <li>We <strong>helpen</strong> bij de voorbereiding en organisatie van de <strong>openscoutsdag (september)</strong>, 
              <strong> breugelavond (november)</strong> en de <strong>BBQ (juni)</strong>.</li>
              <li>We organiseren één of twee keer per jaar een <strong>klusdag of poetsdag</strong> in de lokalen.</li>
              <li>Het <strong>klusteam</strong> kan altijd extra helpende handen gebruiken.</li>
              <li>We zoeken versterking om de <strong>verhuur van de lokalen</strong> mee in goede banen te leiden.</li>
              <li>We zoeken ook een nieuwe <strong>penningmeester</strong>. Zijn cijfers en Excel jouw ding? 
              Dan ben jij misschien wel de persoon die we zoeken.</li>
            </ul>
          </div>

          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              Interesse?
            </h3>

            <p className="mb-3">
              Ben jij klaar om mee het verschil te maken voor onze scoutsgroep? 
              Laat het ons weten! De groepsleiding, de leiding én je eigen kind(eren) 
              zullen je super dankbaar zijn.
            </p>

            <p>
              Of wil je gewoon wat meer info? Stuur je gegevens naar  
              <strong> konings.veerle@icloud.com </strong>  
              en dan nodigen we jou uit voor de eerstvolgende vergadering 
              zodat je kan ontdekken of het iets voor jou is.
            </p>

            <p className="mt-3 font-medium text-green-900">
              Een stevige linker van het huidige oudercomité en graag tot binnenkort!
            </p>
          </div>

        </div>

      </Section>
    </div>
  );
}
