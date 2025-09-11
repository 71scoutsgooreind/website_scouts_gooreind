import truienImage from "./images/algemeen/scouts gooreind truien.avif";
import tshirtsImage from "./images/algemeen/scouts gooreind t-shirts.avif";

export const uniformData = {
  intro: [
    "Zoals de meeste mensen wel weten hebben Scouts en Gidsen een uniform. Uiteraard is dit niet verplicht! Je kiest zelf of je een volledig uniform draagt, enkel een hemd of… Toch hebben we hieronder een aantal ‘richtlijnen’ gezet voor wie dit interesseert. Sjaaltjes/dassen zijn te koop voor en na activiteiten op de scouts en kosten €5, spreek de leiding gerust aan!",
  ],
  groups: [
    {
      name: "Kapoenen",
      text: "De kapoenen hebben nog niet echt een uniform nodig, ze groeien er namelijk ook snel weer uit (zie evt. 2dehands hier onder)! Wel vragen we iedereen om een sjaaltje/das te dragen, zo kan de leiding de leden gemakkelijker herkennen op drukke plaatsen (bijvoorbeeld op daguitstap).",
    },
    {
      name: "Welka’s",
      text: "Voor de welka’s geldt hetzelfde als voor de kapoenen; een uniform is niet essentieel maar een sjaaltje/das is dat wel! Zo vinden we elkaar gemakkelijk terug.",
    },
    {
      name: "Wolven",
      text: "Bij de wolven hebben we al iets serieuzere activiteiten: de belofte, eendaagse… Een hemd is hierbij wel leuk. Het maakt ons herkenbaar, versterkt het groepsgevoel en onderscheidt ons al iets meer van de jongste takken.",
    },
    {
      name: "Jonggivers",
      text: "De jonggivers krijgen hun totem en gaan op tweedaagse. Bij deze activiteiten is een hemd al meer aangeraden om te hebben want het maakt alles nog net iets ‘officiëler’. Er geldt eigenlijk hetzelfde als bij de wolven, het hemd maakt ons herkenbaar en toont dat we langzaamaan ook andere dingen doen naast ravotten.",
    },
    {
      name: "Givers",
      text: "Als giver verwachten we zeker een volledig uniform, het staat voor eenheid binnen de groep en toont aan iedereen dat we ondertussen doorwinterde scouts en gidsen zijn; en vooral een toffe groep vrienden! En geef toe, wie wilt er nu niet zijn totem op zijn/haar hemd kunnen tekenen/naaien/… zoals de leiding!",
    },
    {
      name: "Jins",
      text: "In principe geldt voor de jins hetzelfde als voor de leiding en de givers: je hebt een volledig uniform dat je op belangrijke evenementen, kampen, … draagt. Vooral het hemd is belangrijk.",
    },
  ],
  hopper: {
    title: "Waar vind je het uniform?",
    text: "Het uniform is te koop op de website van de Hopper.",
    website: "https://www.hopper.be/nl/kleding/uniform",
  },
  merchandise: {
    title: "Onze eigen kleding",
    intro: "Sinds kort verkopen wij ook zelf truien en t-shirts.",
    items: [
      {
        name: "Truien",
        description: "Onze blitse truien van het merk Kariban komen in een mooi donkergroen en met een toffe print van ons Jefke.",
        image: truienImage,
        prices: [
          { type: "Volwassen", price: "€39,99", sizes: "XS, S, M, L, XL" },
          { type: "Kind", price: "€34,99", sizes: "4/6 jaar, 6/8 jaar, 8/10 jaar, 10/12 jaar" },
        ],
      },
      {
        name: "T-shirts",
        description: "Ook onze hippe t-shirts van Kariban zijn mooi donkergroen en bedrukt met het Jefke.",
        image: tshirtsImage,
        prices: [
          { type: "Volwassen", price: "€19.99", sizes: "S, M, L, XL" },
          { type: "Kind", price: "€14,99", sizes: "4/6 jaar, 6/8 jaar, 8/10 jaar, 10/12 jaar" },
        ],
      },
    ],
    ordering: {
      title: "Bestellen",
      text: "Bestellen kan door het invullen van",
      formLink: "https://forms.gle/gLYUoA9H1JjJ8xYC6",
      paymentInfo: "Als je dit indient staat je bestelling alvast geregistreerd bij ons. Om ze dan volledig af te werken schrijf je het juiste bedrag over naar BE95 7010 1242 9258 met in de mededeling ‘naam lid + merchandise’. (of je eigen naam als je niet voor een lid koopt). Je nieuwe scoutskleding kan dan afgehaald worden voor of na een activiteit bij ons op de scouts.",
    },
  },
  secondHand: {
    title: "Scoutsuniform 2dehands",
    intro: "U bent op zoek naar een scoutsuniform?",
    text: "Informeer zeker even in onze tweedehands shop wat er in voorraad is. Voor een kleine prijs vind je misschien wel wat je nodig hebt. De opbrengst gaat volledig naar onze scouts.",
    contact: {
      title: "Voor meer info kan u terecht bij:",
      name: "Sandy Bellens",
      address: "Theo Verellenlaan 41 – 2990 Gooreind",
      phone: "0496/50.44.68",
      email: "Sandy.bellens@telenet.be",
    },
  },
};
