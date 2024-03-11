type Experience = {
  id: number;
  startAt: string;
  finishAt?: string;
  title: string;
  companyName: string;
  companyBrand: string;
  companyImage: string[];
  companyUrl: string;
  description: string;
  location: string;
  workingLocation: "wfa" | "wfo" | "hybrid";
  employmentType: "fulltime" | "parttime";
};

export default [
  {
    id: 6,
    startAt: "2023-12-11",
    finishAt: undefined,
    title: "Senior Frontend Developer",
    companyName: "PT Mari Works Solution",
    companyBrand: "MariWorks | Wappin | TixFly",
    companyImage: ["/img/company-mws.webp"],
    companyUrl: "https://mariworks.id/",
    description: "",
    location: "Jakarta, Indonesia",
    workingLocation: "wfo",
    employmentType: "fulltime",
  },
  {
    id: 5,
    startAt: "2023-11-30",
    finishAt: undefined,
    title: "Web and Mobile Dev Trainer",
    companyName: "PT Purwadhika Kirana Nusantara",
    companyBrand: "Purwadhika",
    companyImage: ["/img/company-purwadhika.webp"],
    companyUrl: "https://purwadhika.com/",
    description: `- Have taught 5 classes on Web and Mobile Development.\n
- Taught programming fundamentals using Vanilla JS, frontend development using jQuery, Bootstrap, React JS, and some Firebase tools, backend development using Express.js, and some database engines such as MongoDB, MySQL, Postgres, and Firebase Realtime DB, as well as mobile development using React Native, and DevOps with Jenkins and agile development methods using Scrum.`,
    location: "Jakarta, Indonesia",
    workingLocation: "hybrid",
    employmentType: "parttime",
  },
  {
    id: 4,
    startAt: "2020-12-01T00:00:00+07:00",
    finishAt: "2023-11-30T00:00:00+07:00",
    title: "Senior Frontend Developer",
    companyName: "PT Digital Maksima Karunia",
    companyBrand: "Digiresto | Pawoon",
    companyImage: ["/img/company-digiresto.webp", "/img/company-pawoon.webp"],
    companyUrl: "https://digiresto.co.id/",
    description: `- Maintain the Digiresto microsite and kiosk app\n
- Develop Digifood driver microsite for managing order deliveries using Vue.js and Express.js\n
- Maintain Digiresto iOS app using Flutter\n
- Join Pawoon POS team and assist in managing Pawoon Order microsite\n
Maintain Pawoon POS iOS app using Flutter\n
- Create Pawoon POS website for desktop platform using React JS`,
    location: "Jakarta, Indonesia",
    workingLocation: "hybrid",
    employmentType: "fulltime",
  },
  {
    id: 3,
    startAt: "2022-10-01T00:00:00+07:00",
    finishAt: "2023-08-30T00:00:00+07:00",
    title: "Web and Mobile Dev Trainer",
    companyName: "PT Generasi Anak Muda Berkarya",
    companyBrand: "HiColleagues",
    companyImage: ["/img/company-hicolleagues.webp"],
    companyUrl: "https://hicolleagues.com/",
    description: `- Have taught 1 webinar for college student and 2 companies in software development\n
- Taught programming using basic javascript, VueJs and Flutter`,
    location: "Jakarta, Indonesia",
    workingLocation: "hybrid",
    employmentType: "parttime",
  },
  {
    id: 2,
    startAt: "2019-05-01T00:00:00+07:00",
    finishAt: "2021-11-30T00:00:00+07:00",
    title: "Web and Mobile Dev Trainer",
    companyName: "PT Purwadhika Kirana Nusantara",
    companyBrand: "Purwadhika",
    companyImage: ["/img/company-purwadhika.webp"],
    companyUrl: "https://purwadhika.com/",
    description: `- Have taught 5 classes on Web and Mobile Development.\n
- Taught programming fundamentals using Vanilla JS, frontend development using jQuery, Bootstrap, React JS, and some Firebase tools, backend development using Express.js, and some database engines such as MongoDB, MySQL, Postgres, and Firebase Realtime DB, as well as mobile development using React Native, and DevOps with Jenkins and agile development methods using Scrum.`,
    location: "Jakarta, Indonesia",
    workingLocation: "hybrid",
    employmentType: "parttime",
  },
  {
    id: 1,
    startAt: "2018-08-01T00:00:00+07:00",
    finishAt: "2021-01-31T00:00:00+07:00",
    title: "Frontend Developer",
    companyName: "PT DAM Korporindo Digital",
    companyBrand: "DAMCorp",
    companyImage: ["/img/company-damcorp.webp"],
    companyUrl: "https://damcorp.id",
    description: `- Initiate a DAMCorp WhatsApp Business dashboard for handling messages, contacts, and scheduling using Vue.js and Express.js (https://panel.damcorp.id).\n
- Conduct IoT research and prototyping for RanchMarket's unmanned store and Centre Park's automatic gate.\n
- Initiate and maintain a Digiresto microsite and kiosk app using Vue.js and Express.js (https://digiresto.co.id).\n
- Assist the team in managing Digiresto order chatbots connected to the WhatsApp Business API.`,
    location: "Jakarta, Indonesia",
    workingLocation: "hybrid",
    employmentType: "fulltime",
  },
  {
    id: 0,
    startAt: "2018-02-01T00:00:00+07:00",
    finishAt: "2018-08-31T00:00:00+07:00",
    title: "Web Developer",
    companyName: "PT Digital Artha Media",
    companyBrand: "PT DAM",
    companyImage: ["/img/company-dam.webp"],
    companyUrl: "https://www.linkedin.com/company/pt-digital-artha-media",
    description: `- Conduct research on Vue.js as a frontend framework and develop a codebase.\n
- Develop an admin dashboard for generating tickets, generating ticketing reports, and printing online tickets at Taman Wisata Candi (TWC) Prambanan.\n
- Create a promo and push notification dashboard for the eCash app.\n
- Conduct research on the WhatsApp Business API.`,
    location: "Jakarta, Indonesia",
    workingLocation: "wfo",
    employmentType: "fulltime",
  },
] as Experience[];
