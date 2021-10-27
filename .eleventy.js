const sass = require('sass');
const fs = require('fs-extra');
const marked = require('marked');
const { DateTime } = require('luxon');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    'src/css': 'css',
    'src/images': 'images',
  });

  // Markdown filter
  eleventyConfig.addFilter('marked', (str) => marked(str));
  // Date filter
  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromISO(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // where do things live?
  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: '_data',
    },
  };
};
