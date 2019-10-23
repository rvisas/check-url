const fetch = require('node-fetch');
const routes = require('../src/main.js');

/* const array = [
  { href: 'https://docs.npmjs.com/about-npm/', text: 'nodeJs', route: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir-test/first.md' },
  { href: 'https://docs.npmjs.com/aboutnpm/', text: 'nodeJs', route: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir-test/first.md' },
  { href: 'https://docsnpmjs.com/aboutnpm/', text: 'nodeJs', route: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir-test/first.md' },
]; */

const validateLink = (route) => {
  const arrayOfLinks = routes.saveLinksMds(route);
  const arrayPromises = arrayOfLinks.map((link) => fetch(link.href).then((response) => {
    if (response.status >= 200 && response.status < 400) {
      return {
        ...link,
        status: response.status,
        statusText: response.statusText,
      };
    }

    return {
      ...link,
      status: response.status,
      statusText: 'FAIL',
    };
  }).catch(() => ({
    ...link,
    status: 'ERR',
    statusText: 'FAIL',
  })));
  return Promise.all(arrayPromises);
};

module.exports = {
  validateLink,
};
