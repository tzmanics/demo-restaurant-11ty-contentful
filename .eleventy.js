const sass = require('sass');
const fs = require('fs-extra');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });

  // where do things live?
  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: '_data',
    },
  };
};
