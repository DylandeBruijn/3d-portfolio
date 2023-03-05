import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Service 1,
    icon: web
  },
  {
    title: "Service 2",
    icon: mobile
  },
  {
    title: "Service 3",
    icon: backend
  },
  {
    title: "Service 4",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML5",
    icon: html
  },
  {
    name: "CSS3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "ReactJS",
    icon: reactjs
  },
  {
    name: "Redux",
    icon: redux
  },
  {
    name: "TailwindCSS",
    icon: tailwind
  },
  {
    name: "NodeJS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "ThreeJS",
    icon: threejs
  },
  {
    name: "GIT",
    icon: git
  },
  {
    name: "Figma",
    icon: figma
  },
  {
    name: "Docker",
    icon: docker
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Bending the Rules",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Vue.js Developer",
    company_name: "Bending the Rules",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Angular Developer",
    company_name: "Bending the Rules",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Front-end Developer",
    company_name: "Bending the Rules",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dylan proved me wrong.",
    name: "Jasper Heidinga",
    designation: "CEO",
    company: "Bending the Rules",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dylan does.",
    name: "Mehmet Göhnen",
    designation: "Front-end Developer",
    company: "Bending the Rules",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    testimonial:
      "After Dylan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Joeri Akkerman",
    designation: "Full-stack Developer",
    company: "Bending the Rules",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/"
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "scss",
        color: "pink-text-gradient"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "supabase",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/"
  }
];

export { services, technologies, experiences, testimonials, projects };
