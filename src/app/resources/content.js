import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Franc Chiname",
  lastName: "Enemuo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend",
  avatar: "/images/me.jpg",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Igbo", "Yoruba", "Pigin", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, focusing on frontend development with Next.js. I also have a keen interest in sports, religion, and politics.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/coderitec",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/franc-enemuo/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:francenemuo@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend developer, educator, and builder.</>,
  subline: (
    <>
I'm Francis Enemuo, a frontend developer specializing in Next.js. I teach React at Univelcity and enjoy building projects in my free time. <br/> Beyond coding, I have a strong interest in sports, religion, and politics.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
Francis Enemuo is a frontend developer based in Nigeria, passionate about building seamless and efficient web experiences with Next.js. His work focuses on crafting interactive user interfaces, optimizing performance, and bridging technology with user-centric design.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Univelcity",
        timeframe: "2022 - Present",
        role: "Frontend Developer",
        achievements: [
          <>
          I have trained over 160 individuals in web development, equipping them with the skills to build modern, responsive applications using HTML, CSS, JavaScript, React, and Next.js.
          </>,
          <>
            Revamped the UI/UX of a web platform, leading to a 20% boost in user engagement and a 30% reduction in load times.
          </>,
          <>
            Led the integration of AI-driven tools into frontend workflows, enhancing development speed by 50%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/anniversary4.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/team.jpg",
            alt: "Univelcity at 6",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Embtec Konzultz",
        timeframe: "2018 - 2022",
        role: "Software Engineer",
        achievements: [
          <>
            I have trained over 160 individuals in web development, teaching HTML, CSS, JavaScript, React, and Next.js. My hands-on approach helps students build real-world projects and develop strong frontend skills.
          </>,
          <>
            Beyond web development, I have introduced kids and teens to Python, simplifying coding concepts to make learning engaging and fun. I aim to spark curiosity and creativity in young minds.
          </>,
          <>
            I also facilitate Scrabble and Chess sessions, helping students develop critical thinking and strategic skills in a fun, competitive environment.
          </>,
        ],
        images: [
          {
            src: "/images/pic4.jpg",
            alt: "Embtec holiday",
            width: 16,
            height: 9,
          },
          {
            src: "/images/pic15.jpg",
            alt: "Embtec holiday",
            width: 16,
            height: 9,
          },

        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Ahmadu Bello University",
        description: <>Computer Science.</>,
      },
      {
        name: "Udacity",
        description: <>FullStack Professional Certification.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
