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
      'assets/js/ie.js',
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
            'bower_components/jquery.lazyload/jquery.lazyload.js',
            'assets/js/_*.js'
          ],
          'assets/js/ie.js': [
            'bower_components/html5shiv/dist/html5shiv.js',
            'bower_components/respond/dest/respond.src.js'
          ]
        }
      }
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['sass', 'uglify']
      },
      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: [
          'assets/js/**/*.js',
          '!assets/js/main.min.js'
        ],
        tasks: ['uglify']
      },
      livereload: {
        files: [
          '**/*.html',
          '**/*.php',
          '!bower_components/**',
          'assets/css/**/*.css',
          'assets/js/main.min.js',
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
