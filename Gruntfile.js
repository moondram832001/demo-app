module.exports = function(grunt) {

  grunt.initConfig({
    html2js: {
      dist: {
        options: {
          module: null, // no bundle module for all the html2js templates
          base: 'src/app/angular-ui-bootstrap/',
          rename: function(moduleName) {
            return `uib/${moduleName}`;
          }
        },
        files: [{
          expand: true,
          src: ['src/app/angular-ui-bootstrap/template/**/*.html'],
          ext: '.html.js'
        }]
      }
    }
  });

 // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('default', ['html2js']);

};