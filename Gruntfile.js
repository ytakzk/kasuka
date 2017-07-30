module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {                
        }
      }
    },
    connect: {
      site: {
      }
    },

    open: {
      dev: {
        path: 'http://localhost:8000'
      }
    },

    watch: {
      html: {
        files: '*.html'
      },
      scss: {
        files: ['scss/*.scss'],
        tasks: ['compass']
      },
      js: {
        files: ['js/*.js']
      },
      php: {
        files: ['php/*.php']
      },
      options: {
        livereload: true,
        nospawn: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['connect', 'open', 'watch']);
};