module.exports = function(grunt) {
  grunt.initConfig({
    'gh-pages': {
      options: {
        base: 'examples'
      },
      src: '**/*'
    }
  });
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.registerTask('default', ['gh-pages']);
};