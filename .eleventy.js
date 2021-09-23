const sass = require('sass');
const fs = require('fs-extra');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });

  // Compile Sass before a build
  eleventyConfig.on('beforeBuild', () => {
    let result = sass.renderSync({
      file: 'src/scss/main.scss',
      sourceMap: false,
      outputStyle: 'compressed',
    });
    fs.ensureDirSync('dist/css/');
    fs.writeFile('dist/css/main.css', result.css, (err) => {
      if (err) throw err;
      console.log('CSS generated');
    });
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
