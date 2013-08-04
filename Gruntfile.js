/*jshint node:true */
module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['*.js', 'src/*.js']
		},
		watch: {
			files: ['<%= jshint.all %>', '.{jshintrc,jshintignore}'],
			tasks: ['test']
		}
	});

	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('default', ['test']);
};