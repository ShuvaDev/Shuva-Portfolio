interface SocialLink {
  name: string;
  url: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  about: string;
  details: string[];
  socialLinks: SocialLink[];
  resumeUrl: string;
  profileImage: string;
}

export const personalInfo: PersonalInfo = {
  name: "S.R. Shuva Dev",
  title: "Student | Full Stack ASP.Net Developer | Software Architecture | Sytem Design",
  email: "s.r.shuvadeb@gmail.com",
  location: "Bangladesh",
  about: "Hi, I’m a CSE student at DUET, currently diving into asp dot net core, design patterns, software architecture, and system design. I love building things that work well and make sense under the hood.",
  details: [
    "👨‍💻 CSE student at DUET, exploring ASP.NET Core, system design, and clean architecture.",
    "🧠 Love learning and applying design patterns and software architecture concepts.",
    "✍️ Enjoy writing technical blogs to share what I learn along the way."
  ],
  socialLinks: [
    { name: "YouTube", url: "https://www.youtube.com/@s.r.shuvadev9159" },
    { name: "Facebook", url: "https://web.facebook.com/shuvadev0/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shuva-dev/" },
    { name: "GitHub", url: "https://github.com/ShuvaDev" },
    { name: "Medium", url: "https://medium.com/@s.r.shuvadeb" }
  ],
  resumeUrl: "/assets/resume.pdf",
  profileImage: "/assets/profile.png"
};
