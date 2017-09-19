var paths = {
	backbone: '../lib/backbone',
    jquery:'../lib/jquery-1.9.1.min',
	underscore: '../lib/underscore-min',
	handlebars: '../lib/handlebars.runtime',
	helpers: 'util/helpers'
}

var shim = {
	handlebars: {
		exports: 'Handlebars'
	},
	Backbone: {
		deps: ['underscore', 'jquery'],
		exports: 'Backbone'
	},
	underscore: {
		exports: '_'
	}
}

// set up require.js 
require.config({
    baseUrl: './src/js/',
    paths: paths,
    shim: shim
});

require(["app_mks"],function(App_mks){
	// initialize our application
	App_mks.initialize_mks();
});