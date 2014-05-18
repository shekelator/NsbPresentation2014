var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
	gulp.src("./public/css/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./public/css"));
});

var watcher = gulp.watch("./public/css/*.scss", ["sass"]);