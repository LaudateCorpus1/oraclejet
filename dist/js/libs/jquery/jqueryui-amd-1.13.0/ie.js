( function( factory ) {
	"use strict";

	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery", "./version" ], factory );
	} else if (typeof module === 'object' && module.exports) {
		require("./version");
		module.exports = factory(require("jquery"));
	} else {

		// Browser globals
		factory( jQuery );
	}
} )( function( $ ) {
"use strict";

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} );
