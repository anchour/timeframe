module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Sass task
    clean: [
      'assets/js/main.min.js',
      'assets/css/styles.min.css'
    ],
    sass: {
      options: {
        // Get the bootstrap path for compiling.
        loadPath: [
          'bower_components/bootstrap-sass-official/vendor/assets/stylesheets',
          'bower_components/bootstrap-grid-sass/assets/scss'
        ],
        quiet: true,
        noCache: true
      },
      dist: {
        options: {
          sourcemap: false,
          style: 'compressed'
        },
        files: {
          'assets/css/styles.min.css' : 'assets/scss/styles.scss'
        },
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/main.min.js': [
            'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js',
            'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['sass']
      },
      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass']
      },
      livereload: {
        files: [
          '**/*.html',
          '**/*.php',
          '!bower_components/**',
          'assets/css/**/*.css',
          'images/**/*.{jpg,gif,svg,jpeg,png}'
        ],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['clean', 'uglify', 'sass']);

};
