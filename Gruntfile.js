path = require("path");

module.exports = function (grunt) {
    grunt.registerTask("build", [
        "less",
        "copy"
    ]);

    grunt.registerTask("start", [
        "shell:start"
    ]);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ["src/less"]
                },
                files: {
                    "build/style.css": "src/less/main.less"
                }
            }
        },
        copy: {
            src: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/**.js'],
                    dest: 'build/'
                }]
            },
            views: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/views/**.html'],
                    dest: 'build/views'
                }]
            }
        },
        shell: {
            start: {
                command: 'npm run start'
            }
        }
    });

    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
};