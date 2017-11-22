
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
