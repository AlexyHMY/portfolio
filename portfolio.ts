// import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Alexy Hemery",
  title: "Salut, Je suis Alexy",
  description: "En tant qu’étudiant de troisième année en BUT Informatique, j’ai acquis beaucoup de connaissances que je n’avais pas ultérieurement. J’ai amélioré mes compétences notamment en termes de communication. Je suis quelqu’un de curieux qui recherche de nouvelles connaissances et d’amélioration de soi. Tout en étant bien évidemment passionné par le numérique et les nouvelles technologies.",
  // resumeLink: "#", // lien
};

export const openSource = {
  githubUserName: "",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:hemery.alexy@yahoo.com",
  linkedin: "https://www.linkedin.com/in/alexy-hemery/",
  // github: "https://github.com/",
  // instagram: "https://www.instagram.com/",
  // facebook: 'https://www.facebook.com/',
  // twitter: 'https://twitter.com/',
};

export const skillsSection: SkillsSectionType = {
  title: "Qu'est ce que je fais ?",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  subTitle: "",
  data: [
    {
      title: "Développement Full Stack",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        // emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        // emoji("⚡ Building responsive static websites using Next.js"),
        // emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Quasar",
          iconifyTag: "vscode-icons:file-type-quasar",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "vscode-icons:file-type-node",
        },
        {
          skillName: "Vuejs",
          iconifyTag: "vscode-icons:file-type-vue",
        },
        {
          skillName: "C",
          iconifyTag: "vscode-icons:file-type-c",
        },
        {
          skillName: "Cpp",
          iconifyTag: "vscode-icons:file-type-cpp",
        },
        {
          skillName: "Csharp",
          iconifyTag: "vscode-icons:file-type-csharp",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "SQL",
          iconifyTag: "vscode-icons:file-type-sql",
        },
        {
          skillName: "MySQL",
          iconifyTag: "vscode-icons:file-type-mysql",
        },
        {
          skillName: "HTML5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "Gitlab",
          iconifyTag: "logos:gitlab",
        },
        /*
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        */
      ],
    },
  ],
};
 
export const SkillBars: SkillBarsType[] = [];
/*
[
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];
*/
export const educationInfo: EducationType[] = [
  {
    schoolName: "Université Paris-Saclay - IUT d'Orsay",
    subHeader: "Bachelors Universitaire de Technologie en Informatique",
    duration: "September 2022 - Present",
    desc: "",
    grade: "BUT Informatique",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  { // actuel
    role: "Développeur",
    company: "ANFSI",
    companyLogo: "/img/icons/common/anfsi.png",
    date: "Jan 2025 - May 2025",
    desc: "Suite du précédent stage, développement de fonctionnalité sur une application web.",
  },
  {
    role: "Développeur",
    company: "ANFSI",
    companyLogo: "/img/icons/common/anfsi.png",
    date: "Apr 2024 - Aug 2024",
    desc: "Développement de foncionnalité sur une application web.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [];
/*
[
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];
*/
 
export const feedbacks: FeedbackType[] = [];
/*
[
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];
*/ 

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Alexy Hemery",
  description: greetings.description,
  author: "Alexy Hemery",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "",
  keywords: [
    "Alexy",
    "Alexy Hemery",
    "Portfolio",
    "Alexy Portfolio ",
    "Alexy Hemery Portfolio",
  ],
};
