# MetalSmith Symlink

Symlink plugin for MetalSmith, for symlinking to large files or directories containing many files

## Install

```
npm install metalsmith-symlink
```

## Getting Started

```js
var msSymlink = require('metalsmith-symlink');
var Metalsmith = require('metalsmith');

Metalsmith
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
```

You may run ```build.js``` inside the example directory to see metalsmith-symlink in action.


## Using the CLI

**TODO**

## License

The MIT License (MIT)

Copyright (c) 2017 Sam Wray

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
