var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');


gulp.task('default', () => {
    console.log('Hello world');
});
// create html task
gulp.task('html', () => {
    //take index.hbs as source
    return gulp.src('index.hbs')
    //pipe the partials directory and compile the handlebars into it
        .pipe(handlebars({}, {
            batch: ['./partials']
        }))
        // rename to .html
        .pipe(rename({
            extname: '.html'
        }))
        // create a newfile called index.html and save them in the current directory
        .pipe(gulp.dest('./'));
});