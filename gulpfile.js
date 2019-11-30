// SITE GENERATOR GULP TASK INDEX
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve_mock', function() {
	let mockUpSource = './src/mock_ups/next';
	browserSync.init({
		server: mockUpSource
	});

	gulp.watch(mockUpSource).on('change', browserSync.reload);
});
