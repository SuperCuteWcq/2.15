var gulp=require('gulp');
var sass=require('gulp-sass');
var server=require('gulp-webserver');
var clean=require('gulp-clean-css')
gulp.task('scss',function(){
    return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
})
gulp.task('server',function(){
    return gulp.src('./src')
    .pipe(server({
        port:9090
    }))
})
gulp.task('watch',function(){
    return gulp.watch('./src/scss/.scss',gulp.series('scss'))
})
gulp.task('dev',gulp.series('scss','server','watch'))