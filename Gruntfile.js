module.exports = function(grunt) {
  // Combine all javascript files in js/
  grunt.initConfig({
    uglify: {
      pkg: grunt.file.readJSON('package.json'),
      all_src : {
        files: {
          'js/app.min.js': [
            '_js/application.js', '_js/jquery.min.js', '_js/turbolinks.js'
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
