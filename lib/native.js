/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the standard deviation for a lognormal distribution with location `mu` and scale `sigma`.
*
* @private
* @param {number} mu - location parameter
* @param {PositiveNumber} sigma - scale parameter
* @returns {NonNegativeNumber} standard deviation
*
* @example
* var y = stdev( 0.0, 1.0 );
* // returns ~2.161
*
* @example
* var y = stdev( 5.0, 2.0 );
* // returns ~8028.534
*
* @example
* var y = stdev( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = stdev( 0.0, NaN );
* // returns NaN
*
* @example
* var y = stdev( 0.0, 0.0 );
* // returns NaN
*/
function stdev( mu, sigma ) {
	return addon( mu, sigma );
}


// EXPORTS //

module.exports = stdev;
