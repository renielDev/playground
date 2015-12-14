module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['js/**/*.js'],
      tasks: ['concat']
    },
    concat: {
        src: ['js/**/*.js'],
        dest: ['js/entry.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};