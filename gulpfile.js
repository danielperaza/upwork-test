var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('serve', function(){
    gulp.src('src')
        .pipe(server({
            livereload: true,
            open: "/",
            path: "/"
        }))
});