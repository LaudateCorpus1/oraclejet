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

// Support: IE8 Only
// IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
// with a string, so we need to find the proper form.
return $.fn._form = function() {
	return typeof this[ 0 ].form === "string" ? this.closest( "form" ) : $( this[ 0 ].form );
};

} );
