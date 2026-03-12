/*
    Skill icon paths and docs links for resume and project technologies.
    Icons are loaded from Simple Icons CDN (no local files required).
*/

const CDN = 'https://cdn.simpleicons.org';

export const imgPaths = {
  Javascript: {
    path: `${CDN}/javascript`,
    website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  Typescript: {
    path: `${CDN}/typescript`,
    website: 'https://www.typescriptlang.org/',
  },
  Python: {
    path: `${CDN}/python`,
    website: 'https://python.org',
  },
  cpp: {
    path: `${CDN}/cplusplus`,
    website: 'https://cplusplus.com/',
  },
  C: {
    path: `${CDN}/c`,
    website: 'https://www.iso.org/standard/74528.html',
  },
  HTML5: {
    path: `${CDN}/html5`,
    website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  CSS3: {
    path: `${CDN}/css`,
    website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  Sass: {
    path: `${CDN}/sass`,
    website: 'https://sass-lang.com/',
  },
  tailwindcss: {
    path: `${CDN}/tailwindcss`,
    website: 'https://tailwindcss.com/',
  },
  Bootstrap: {
    path: `${CDN}/bootstrap`,
    website: 'https://getbootstrap.com/',
  },
  React: {
    path: `${CDN}/react`,
    website: 'https://reactjs.org/',
  },
  'Next.js': {
    path: `${CDN}/nextdotjs`,
    website: 'https://nextjs.org',
  },
  Redux: {
    path: `${CDN}/redux`,
    website: 'https://redux.js.org/',
  },
  GraphQL: {
    path: `${CDN}/graphql`,
    website: 'https://graphql.org/',
  },
  Apollo: {
    path: `${CDN}/apollographql`,
    website: 'https://www.apollographql.com/',
  },
  jest: {
    path: `${CDN}/jest`,
    website: 'https://jestjs.io/',
  },
  nodejs: {
    path: `${CDN}/nodedotjs`,
    website: 'https://nodejs.org/en/',
  },
  express: {
    path: `${CDN}/express`,
    website: 'https://expressjs.com/',
  },
  'Nest.js': {
    path: `${CDN}/nestjs`,
    website: 'https://nestjs.com/',
  },
  Firebase: {
    path: `${CDN}/firebase`,
    website: 'https://firebase.google.com/',
  },
  postgreSQL: {
    path: `${CDN}/postgresql`,
    website: 'https://www.postgresql.org/',
  },
  mySQL: {
    path: `${CDN}/mysql`,
    website: 'https://www.mysql.com/',
  },
  redis: {
    path: `${CDN}/redis`,
    website: 'https://redis.com',
  },
  MongoDB: {
    path: `${CDN}/mongodb`,
    website: 'https://www.mongodb.com/',
  },
  prisma: {
    path: `${CDN}/prisma`,
    website: 'https://www.prisma.io/',
  },
  typeorm: {
    path: `${CDN}/typeorm`,
    website: 'https://typeorm.io/',
  },
  bash: {
    path: `${CDN}/gnubash`,
    website: 'https://www.gnu.org/software/bash/',
  },
  git: {
    path: `${CDN}/git`,
    website: 'https://git-scm.com/',
  },
  docker: {
    path: `${CDN}/docker`,
    website: 'https://www.docker.com/',
  },
  dockerLogo: {
    path: `${CDN}/docker`,
    website: 'https://www.docker.com/',
  },
  linux: {
    path: `${CDN}/linux`,
    website: 'https://www.linux.org/',
  },
  Solidity: {
    path: `${CDN}/solidity`,
    website: 'https://soliditylang.org/',
  },
  ethereum: {
    path: `${CDN}/ethereum`,
    website: 'https://ethereum.org',
  },
  hardhat: {
    path: `${CDN}/hardhat`,
    website: 'https://hardhat.org/',
  },
  ethers: {
    path: `${CDN}/ethers`,
    website: 'https://docs.ethers.io/v5/',
  },
  web3js: {
    path: `${CDN}/web3dotjs`,
    website: 'https://github.com/web3/web3.js',
  },
  PHP: {
    path: `${CDN}/php`,
    website: 'https://www.php.net/',
  },
  WordPress: {
    path: `${CDN}/wordpress`,
    website: 'https://wordpress.org/',
  },
  Shopify: {
    path: `${CDN}/shopify`,
    website: 'https://www.shopify.com/',
  },
  jQuery: {
    path: `${CDN}/jquery`,
    website: 'https://jquery.com/',
  },
  Vite: {
    path: `${CDN}/vite`,
    website: 'https://vitejs.dev/',
  },
  GitHub: {
    path: `${CDN}/github`,
    website: 'https://github.com/',
  },
  Figma: {
    path: `${CDN}/figma`,
    website: 'https://www.figma.com/',
  },
  API: {
    path: `${CDN}/mdnwebdocs`,
    website: 'https://developer.mozilla.org/en-US/docs/Web/API',
  },
};

/** Map display labels to imgPaths keys (case-sensitive where needed) */
export const skillLabelToKey = {
  'HTML': 'HTML5',
  'CSS': 'CSS3',
  'Tailwind': 'tailwindcss',
  'Bootstrap': 'Bootstrap',
  'Shopify': 'Shopify',
  'SASS': 'Sass',
  'JavaScript': 'Javascript',
  'NodeJS': 'nodejs',
  'ExpressJS': 'express',
  'Express': 'express',
  'PostgreSQL': 'postgreSQL',
  'TypeScript': 'Typescript',
  'C++': 'cpp',
  'Git': 'git',
  'Docker': 'docker',
  'Linux': 'linux',
  'BackEnd': 'MongoDB',
};

/**
 * Get icon path and website for a skill by its display title.
 * @param {string} title - Display name (e.g. "React", "Tailwind CSS")
 * @returns {{ path: string, website?: string } | null}
 */
export function getSkillIcon(title) {
  const key = skillLabelToKey[title] || title;
  const entry = imgPaths[key];

  if (entry) {
    return {
      path: entry.path,
      website: entry.website,
    };
  }

  return null;
}