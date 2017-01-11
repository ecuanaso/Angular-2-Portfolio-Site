module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
	  uglify: {
	    build: {
	        src: 'app/main.js',
	        dest: 'build/js/scripts.js'
        }
	  }
	});

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['uglify'] );

};