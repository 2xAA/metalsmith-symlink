var Metalsmith = require('metalsmith');
var msSymlink = require('../index.js');

new Metalsmith(__dirname)
	.source('./src')
	.destination('./build')
	.use(msSymlink({
		paths: [
			{	// You can link either files
				src: './assets/videos/huge-video-file.js', // relative to the directory the script was executed from
				dest: 'assets/videos/really-big-file.js' // relative to the destination directory given to Metalsmith above ('./build' in our case)
			},
			{	// or directories
				src: './assets/videos', // relative to the directory the script was executed from
				dest: 'big-assets/videos' // relative to the destination directory given to Metalsmith above ('./build' in our case)
			}
		]
	}))
	.build(function(err) {
		if(err) throw err;
	});