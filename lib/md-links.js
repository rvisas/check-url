// const path = require('path');
const route = require('./main.js');

const validate = require('../src/validate.js');
/* options: Un objeto con las siguientes propiedades:
validate: Booleano que determina si se desea validar los links encontrados. */

const mdLinks = (inputPath, options) => new Promise((resolve) => {
  const routeAbs = route.getAbsolutePath(inputPath);

  if (options.validate === false) {
    resolve(route.saveLinksMds(routeAbs));
  } else {
    // const arrayOfLinks = route.saveLinksMds(routeAbs);
    resolve(validate.validateLink(routeAbs));
  }
});

module.exports = {
  mdLinks,
};
