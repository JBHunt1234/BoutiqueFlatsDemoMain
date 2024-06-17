const eleventySass = require("eleventy-sass");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/_redirects");


  return {
    templateFormats:["html","hbs"],
    htmlTemplateEngine: 'hbs',
    dir: {
      input: "src",
      output: "dist",
    },
  };
};