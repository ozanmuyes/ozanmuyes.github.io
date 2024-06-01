export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const image: { low: Image; high: Image } = {
  low: {
    src: "/hero-low.jpg",
    alt: "Ozan Müyesseroğlu sitting at a desk in front of a computer",
  },
  high: {
    src: "/hero-high.jpg",
    alt: "Ozan Müyesseroğlu sitting at a desk in front of a computer",
  },
};

const siteConfig: SiteConfig = {
  title: "Ozan Müyesseroğlu",
  description: "Personal website and blog of Ozan Müyesseroğlu",
  image: image.low,
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },
    // {
    //   text: "Projects",
    //   href: "/projects",
    // },
    {
      text: "Blog",
      href: "/blog",
    },
    // {
    //   text: "Series",
    //   href: "/series",
    // },
    {
      text: "Tags",
      href: "/tags",
    },
  ],
  footerNavLinks: [
    // {
    //   text: "About",
    //   href: "/about",
    // },
    {
      text: "Contact",
      href: "/contact",
    },
    // {
    //   text: "Terms",
    //   href: "/terms",
    // },
  ],
  socialLinks: [
    {
      text: "GitHub",
      href: "https://github.com/ozanmuyes/",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/ozanmuyes/",
    },
  ],
  hero: {
    title: "Hi there and welcome to my corner of the Web!",
    text: "I'm **Ozan Müyesseroğlu**, a detail-oriented computer engineer with a Bachelor of Science degree. I leverage my skills in software development to drive innovative projects forward. With expertise in back-end development and a growing interest in computer vision and LLMs (Large Language Models, e.g. GPT), I'm excited to apply my knowledge to meaningful impact. As a strong communicator, I excel in verbal communication, with the ability to lead and mentor junior and mid-level team members.<br>I also arbitrarily or occasionally write <a href='/blog'>blog posts</a>.<br>Feel free to explore some of my coding endeavors on <a href='https://github.com/ozanmuyes'>GitHub</a> or follow me on <a href='https://www.linkedin.com/in/ozanmuyes/'>LinkedIn</a>.",
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  postsPerPage: 8,
  projectsPerPage: 2,
};

export default siteConfig;
