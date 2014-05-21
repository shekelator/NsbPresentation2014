var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
	gulp.src("./public/css/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./public/css"));
});

gulp.task("default", ["sass"], function(){});

var watcher = gulp.watch("./public/css/*.scss", ["sass"]);