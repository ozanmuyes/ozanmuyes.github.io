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
  image?: Image;
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
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Tags",
      href: "/tags",
    },
  ],
  footerNavLinks: [
    {
      text: "About",
      href: "/about",
    },
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
    title: "Hi There & Welcome to My Corner of the Web!",
    text: "I'm **Ozan Müyesseroğlu**, a web developer at Amazing Studio, dedicated to the realms of collaboration and artificial intelligence. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
    image: image.high,
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
