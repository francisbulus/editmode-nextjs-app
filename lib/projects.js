const projects = [
  {
    date: 2,
    title: "Insightly",
    github: "https://github.com/LABS-EU3/react_blog_frontend",
    live: "https://getinsightly.com/",
    image: "/public/static/insightly.png",
    tech: ["React", "Node", "Progress"],
    height: 450,
    description:
      "A platform for writers to publish insights and guage readership over a period of time, and for readers to interact with writers.",
  },
  {
    date: 5,
    title: "Francisbulus.com",
    github: "https://github.com/francisbulus/dovah",
    live: "https://www.francisbulus.com",
    image: "/public/static/francis.png",
    tech: ["React", "Gatsby", "GraphQL"],
    height: 500,
    description:
      "Version I of my page built on top of Gatsby (React), with GraphQL for queries and functional design principles applied.",
  },

  {
    date: 4,
    title: "MUDERILICT",
    github: "https://github.com/CSEU3-MUD-BW",
    live: "https://mud-game-client.now.sh/",
    image: "/public/static/dad-jokes.png",
    tech: ["Python, React, Django"],
    height: 450,
    description:
      "A multi-user dungeon game with the simple objective of navigating an abandoned spaceship to find a radio.",
  },
  {
    date: "3",
    title: "MineChore",
    github: "https://github.com/home-chore-tracker-eu",
    live: "m",
    image: "/public/static/minechore.png",
    tech: ["React", "Node", "SQLite"],
    height: 450,
    description:
      "A gamified chore-tracking app built from the ground up with React for homes to effectively manage responsibilities.",
  },
  {
    date: "1",
    title: "DadJokes",
    github: "https://github.com/dad-jokes-webeu",
    live: "https://best-dad-jokes.netlify.com/",
    image: "/public/static/dad-jokes.png",
    tech: ["React", "Node", "Postgres", "Cordova"],
    height: 450,
    description:
      "A single repository of dad jokes for creators and readers alike to easily access, view jokes, create jokes, and like jokes.",
  },
];

export default projects;
