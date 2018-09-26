module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ["*.js", "*.css"],
            task: ["updated"]
        },
        uglify: {
            build: {
                src: ['index.js', 'logger.js' ],
                dest: 'dist/bundle.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', () => {
        grunt.log.writeln('Its been updated again');
    });

    grunt.registerTask('updated', () => {
        grunt.log.writeln('Hello world');
    });
// hello
    
};