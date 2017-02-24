var debug = require('debug')('metalsmith-symlink');
var Promise = require('bluebird');
var fs = require('fs');
var path = require('path');
var link = require('fs-symlink');

module.exports = function msSymlink(opts) {
	var paths = opts.paths || [];

	return function (files, metalsmith, done) {

		var promises = [];

		paths.forEach(function(pathOpts) {

			var relativeSource = pathOpts.src || 'public';
			var relativeDestination = pathOpts.dest || 'public';

			var src = path.join(metalsmith.directory(), relativeSource);
			var dst = path.join(metalsmith.destination(), relativeDestination);

			var type = 'file';
			if(fs.lstatSync(src).isDirectory()) type = 'dir';

			promises.push(link(src, dst, type));
		});

		Promise.all(promises).then(function() {
			debug('All symlinks created successfully');
			done();
		}).catch(function(err) {
			debug('A symlink or symlinks did not complete successfully %s', err);
			return done(err);
		});
	};
};