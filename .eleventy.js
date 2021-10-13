const sass = require('sass');
const fs = require('fs-extra');
const marked = require('marked');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });

  // Markdown filter
  eleventyConfig.addFilter('marked', (str) => marked(str));

  // where do things live?
  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: '_data',
    },
  };
};
