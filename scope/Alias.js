//--------------------------------------------------------------------------
// Public static class
//--------------------------------------------------------------------------

/**
 *  System package alias.
 *
 *  @author     Emil Makowski <emilmakowskii@gmail.com>
 *  @copyright  Copyright (c) 2016-2017
 *  @license    MIT License
 *  @since      Nov 20, 2017
 *  @version    1.0.0
 */
se.emilmakowski.LIB_NAME.scope.Alias = (function () {

	//--------------------------------------------------------------------------
	// Strict mode
	//--------------------------------------------------------------------------

	"use strict";

	//----------------------------------------------------------------------
	// Alias
	//----------------------------------------------------------------------

	/**
	 *  Creates the "LIB_NAME" alias in the window object so its available in
	 *  the global scope.
	 *
	 *  @type {Object}
	 */
	window.LIB_REF_NAME = new se.emilmakowski.LIB_NAME.system.Main();

})();
