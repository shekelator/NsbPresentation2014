require.config({
	paths: {
		impress: "//cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.min"
	},
	shim: {
		"impress": {
			exports: "impress"
		}
	}
});

require(["impress"], function(impress) {
	impress().init();
});