module.export = function(eleventyConfig){

  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setTemplateFormats("html,njk");

  return{
    dir:{
      input: "src"
    }
  };
}