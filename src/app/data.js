/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/
export const aboutData = {
  aboutMe: "About Me",
  aboutMeText: "Hey there! I'm a junior full stack developer who traded swimming lanes and boxing rings for lines of code. When I'm not debugging, you'll find me indulging my inner anime otaku or reminiscing about my days in sales, where I mastered the art of persuasion. From making waves in the pool to crafting epic digital solutions, I'm here to turn your coding dreams into reality with a touch of charm and a sprinkle of anime magic! So, let's dive into your project and make some coding waves together! ",
  atm : "@TM",
  atmText : "@AWS re/Start program && projects",
  exp : "XP",
  expText : "Ex-Student @ CodeForAll_",
}
export const projectsData = [
  {
    id: 1,
    name: "SharK Game",
    description: "Eat your master coders to get score",
    date: "2024-02-10",
    demoLink: "https://fluxmachine.itch.io/sharkgame",
  },
  {
    id: 2,
    name: "Whack-a-Mole",
    description: "Terminal multi player game using tcp chat",
    date: "2024-03-03",
    demoLink: "https://github.com/mikedevmachine/Whack-a-mole",
  },
   
   {
    id: 3,
    name: "Zen Masters",
    description: "JavaScript Single Page Application",
    date: "2024-04-15",
    demoLink: "",
  },
  {
    id: 4,
    name: "3D Portfolio",
    description: "Three.js Next.js TailwindCSS",
    date: "2024-05-15",
    demoLink: "",
  },
   

];

export const BtnList = [
  
  { label: "About",
   link: "/about",
    icon: "about",
     newTab: false },

  { 
    label: "Projects",
   link: "/projects",
    icon: "projects",
     newTab: false 
    },
 
  {
    label: "Github",
    link: "https://github.com/mikedevmachine",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mikedevres/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];



