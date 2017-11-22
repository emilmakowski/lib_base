
"use strict";

if (window.se == undefined) window.se = {};
if (window.se.emilmakowski == undefined) window.se.emilmakowski = {};
if (window.se.emilmakowski.package == undefined) window.se.emilmakowski.LIB_NAME = {};

//--------------------------------------------------------------------------
// Public static class
//--------------------------------------------------------------------------

/**
 *  System package structure.
 *
 *  @author     Emil Makowski <emilmakowskii@gmail.com>
 *  @copyright  Copyright (c) 2016-2017
 *  @license    MIT
 *  @since      Nov 20, 2017
 *  @version    1.0.0
 */
se.emilmakowski.LIB_NAME = (function () {

	//----------------------------------------------------------------------
  // Strict mode
  //----------------------------------------------------------------------

	"use strict";

	//----------------------------------------------------------------------
	// Private properties
	//----------------------------------------------------------------------

	/**
	 *  Object literal to append package information and create the
	 *  package structure.
	 *
	 *  @type {Object}
	 */
	var m_that = {};

	//----------------------------------------------------------------------
	// Meta data
	//----------------------------------------------------------------------

	/**
	 *   System package id.
	 *
	 *   @type {String}
	 */
	m_that.id = "se.emilmakowski.LIB_NAME";

	/**
	 *   System package name.
	 *
	 *   @type {String}
	 */
	m_that.name = "LIB_NAME";

	/**
	 *   System package version.
	 *
	 *   @type {String}
	 */
	m_that.version = "0.0.0";


	//----------------------------------------------------------------------
	// Package structure
	//----------------------------------------------------------------------

	/**
	 *   System scope object.
	 *
	 *   @type {Object}
	 */
	m_that.scope = {};

	/**
	 *   System main object.
	 *
	 *   @type {Object}
	 */
	m_that.system = {};

	/**
	 *   Returns the system package information.
	 */
	return m_that;

})();

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 *  System package main class.
 *
 *  @author     Emil Makowski <emilmakowskii@gmail.com>
 *  @copyright  Copyright (c) 2016-2017
 *  @license    MIT
 *  @since      Nov 20, 2017
 *  @version    1.0.0
 */
se.emilmakowski.LIB_NAME.system.Main = (function () {

	//--------------------------------------------------------------------------
	// Strict mode
	//--------------------------------------------------------------------------

	"use strict";

	//--------------------------------------------------------------------------
	// Inheritance
	//--------------------------------------------------------------------------

	/**
	 *	The library system inherits from the Request class.
	 *
	 */
	// se.emilmakowski.LIB_NAMESPACE.Class.call(this);

	//--------------------------------------------------------------------------
	// Private method
	//--------------------------------------------------------------------------

	/**
	 *
	 *  @return {Object} - Returns the library main class.
	 */
	function initAjax () {
		// return new se.emilmakowski.ajax.net.Request();
	}

	//--------------------------------------------------------------------------
	// Bootstrap
	//--------------------------------------------------------------------------

	/**
	 *  @return {Object} - Returns public method from library.
	 */
	// return initAjax();

});

//--------------------------------------------------------------------------
// Prototype inheritance
//--------------------------------------------------------------------------

// se.emilmakowski.LIB_NAME.system.Main.prototype = Object.create(se.emilmakowski.LIB_NAME.NAMESPACE.Class.prototype);
// se.emilmakowski.LIB_NAME.system.Main.constructor.prototype = se.emilmakowski.LIB_NAME.system.Main;

//--------------------------------------------------------------------------
// Public static class
//--------------------------------------------------------------------------

/**
 *  System package alias.
 *
 *  @author     Emil Makowski <emilmakowskii@gmail.com>
 *  @copyright  Copyright (c) 2016-2017
 *  @license    MIT
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
	window.Ajax = new se.emilmakowski.LIB_NAME.system.Main();

})();
