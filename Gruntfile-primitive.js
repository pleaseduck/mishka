module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-browser-sync");

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers:
[
  "last 1 version",
  "last 2 Chrome versions",
  "last 2 Firefox versions",
  "last 2 Opera versions",
  "last 2 Edge versions"
          ]})
        ]
      },
      style: {src: "css/*.css"}
    },
    watch: {
      style: {
        files: ["less/**/*.less"], //less/**/*.less less/style.less
        tasks: ["less", "postcss"]
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: ["*.html", "css/*.css"]
        },
        options: {
          server: "."
        }
      }
    }
  });
  grunt.registerTask("serve",["watch", "browserSync" ]);
  grunt.registerTask("build", [
    "less",
    "postcss"
  ]);
};
