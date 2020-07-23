module.exports = {
  title: "GZhiDao",
  extraWatchFiles: [
    ".vuepress/config.js", // 使用相对路径
    "guide/README.md", // 使用绝对路径
    "README.md",
  ],
  base: "/library/",
  // dest: "library",
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      {
        text: " FrontEnd",
        link: "/frontEnd/",
        items: [
          {
            text: "JavaScript",
            link: "/frontEnd/javaScript/",
          },
          {
            text: "HTML",
            link: "/frontEnd/html/",
          },
          {
            text: "CSS",
            link: "/frontEnd/css/",
          },
          {
            text: "Vue",
            link: "/frontEnd/vue/",
          },
          {
            text: "React",
            link: "/frontEnd/react/",
          },
          {
            text: "Electron",
            link: "/frontEnd/electron/",
          },

          {
            text: "Flutter",
            link: "/frontEnd/flutter/",
          },
        ],
      },
      {
        text: "BackEnd",
        link: "/backEnd/",
        items: [
          { text: "Node", link: "/backEnd/nodeJs/" },
          {
            text: "Java",
            link: "/backEnd/java/",
          },
          {
            text: "Golang",
            link: "/backEnd/golang/",
          },
        ],
      },
      {
        text: "Server",
        link: "/server/",
        items: [
          {
            text: "Linux",
            link: "/server/linux/",
          },
          {
            text: "Nginx",
            link: "/server/nginx/",
          },
          {
            text: "Docker",
            link: "/server/docker/",
          },
        ],
      },
      {
        text: "Database",
        link: "/database/",
        items: [
          {
            text: "Mysql",
            link: "/database/mysql/",
          },
        ],
      },
      {
        text: "Git",
        link: "/git/",
      },
    ],
    sidebar: {
      "/df-plugins/tools/": ["", "date", "number"],
      "/df-plugins/client/": ["", "API"],
      "/df-plugins/app/": ["", "API"],
      "/df-plugins/drive/": ["", "IDCard", "gateCard"],
    },
  },
};
