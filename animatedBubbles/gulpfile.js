/**
 * Created by Lenovo on 2017/1/5.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass',function () {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'))
})

gulp.task('watch',function () {
    gulp.watch('*.scss',['sass'])
})

gulp.task('default',['sass','watch'])