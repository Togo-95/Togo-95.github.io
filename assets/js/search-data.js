// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "My academic articles sorted in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-started-my-3-year-esprit-project-ergodic-theory-in-categorical-probability-funded-by-fwf",
          title: 'I started my 3-year ESPRIT project, Ergodic Theory in Categorical Probability, funded by...',
          description: "",
          section: "News",},{id: "news-my-first-personal-website-is-launched",
          title: 'My first personal website is launched!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/welcome/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HWE8eckAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1531-0058", "_blank");
        },
      },{
        id: 'social-arxiv',
        title: 'arXiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/a/gonda_t_1.html", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Togo-95", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/102432395", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/276/7573.html", "_blank");
        },
      },{
        id: 'social-ridewithgps',
        title: 'Ridewithgps',
        section: 'Socials',
        handler: () => {
          window.open("https://ridewithgps.com/users/62162/", "_blank");
        },
      },{
        id: 'social-strava',
        title: 'Strava',
        section: 'Socials',
        handler: () => {
          window.open("https://www.strava.com/athletes/189381", "_blank");
        },
      },{
        id: 'social-sonemic',
        title: 'Sonemic',
        section: 'Socials',
        handler: () => {
          window.open("https://rateyourmusic.com/~Togo", "_blank");
        },
      },{
        id: 'social-lastfm',
        title: 'Last FM',
        section: 'Socials',
        handler: () => {
          window.open("https://www.last.fm/user/togo95", "_blank");
        },
      },{
        id: 'social-steepster',
        title: 'Steepster',
        section: 'Socials',
        handler: () => {
          window.open("https://steepster.com/Togo", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
