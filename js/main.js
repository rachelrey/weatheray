require.config({

	paths: {
		'jquery': 'vendor/jquery-1.12.0.min',
		'underscore': 'vendor/underscore',
		'backbone': 'vendor/backbone',
		'bootstrap': 'vendor/bootstrap',
		'backbone.localStorage': 'vendor/backbone.localStorage'
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		}
	}

});

require([
	'backbone',
	'app/app'
], function (Backbone, App) {
	'use strict';

	App.initialize();

});







