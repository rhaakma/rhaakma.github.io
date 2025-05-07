// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rhaakma', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['rhaakma/MicrobiomeReport', 'rhaakma/Microbiome-Analysis'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Species Assessement Report on the California Newt',
          description:
            'The Species Assessment Report provides an in-depth analysis of the California Newt species.  It provides information about the ecoloy, life history, population trends, and threats that all contribute to its vulnerable status. ',
          imageUrl:
            'https://github.com/rhaakma/rhaakma.github.io/raw/main/CAnewt.png',
          link: 'https://github.com/rhaakma/rhaakma.github.io/raw/main/SAA%20Presentation.pdf',
        },
        {
          title: 'Classification of the Boraginaceae Family',
          description:
            'This project describes the taxonomic history, polygenetics, interpretations of phylogenies, major identifying characteristics, and the distribution of species in the Boraginaceae family.',
          imageUrl:
            'https://github.com/rhaakma/rhaakma.github.io/raw/main/BoragFamily.png',
          link: 'https://github.com/rhaakma/rhaakma.github.io/raw/main/Boraginaceae.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Rachel Haakma Website',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'rhaakma7@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/rhaakma/rhaakma.github.io/raw/main/OnepageCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR',
    'Bioinformatics',
    'Sterile Techniques',
    'Soil Sampling',
  ],
  experiences: [
    {
      company: 'Chicken Ranch Casino and Resort',
      position: 'Lead Server',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://chickenranchcasinoresort.com/',
    },
    {
      company: '50s Roadhouse and Restaurant',
      position: 'Waitress',
      from: 'May 2019',
      to: 'present',
      companyLink: 'https://50sroadhouse.shop/',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'CSU, Stanislaus',
      degree: 'B.S. in Biological Sciences',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Columbia College, Sonora',
      degree: 'A.S.T of Biology',
      from: '2021',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'Draft genome sequence Chryseobacterium treverense isolated from human clinical sources',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Analisa Coppens, Isabella Fregoso, Rachel Haakma, Kiberly Habon, Grace Rodrigues, Tricia Van Laar',
      link: 'https://github.com/rhaakma/rhaakma.github.io/raw/main/MRAPaper.pdf',
      description:
        'This is a manusript in submission. This study reports that the draft genome sequence of Chryseobacterium treverense is isolated from human clinical sources.  The genome is 2,379,279 base pairs and contains genes enhancing bacterium survival and evasion of the host’s immune system, therefore amplifying broad antibiotic resistance.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
