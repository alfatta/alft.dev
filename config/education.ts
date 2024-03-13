type Education = {
  id: number;
  startAt: string;
  finishAt?: string;
  college: string;
  title: string;
  image: string;
};

export default [
  {
    id: 2,
    startAt: "2013",
    finishAt: "2017",
    college: "UIN Jakarta",
    title: "Information Technology",
    image: "/img/edu-uin.webp",
  },
  {
    id: 1,
    startAt: "2010",
    finishAt: "2013",
    college: "SMA Negeri 87 Jakarta",
    title: "Science",
    image: "/img/edu-87.webp",
  },
] as Education[];
