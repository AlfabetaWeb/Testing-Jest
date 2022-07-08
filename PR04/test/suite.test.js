const tiers = require('./test01.js');

	test('Tier with N: 0', function () {
		var expected = "";
		var result = tiers();
		expect(result).toBe(expected);
	});

	test('Tier with N: 1', function () {
		var expected = "*\n";
		var result = tiers(1);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 5', function () {
		var expected = "    *\n   **\n  ***\n ****\n*****\n";
		var result = tiers(5);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 20', function () {
		var expected = "                   *\n                  **\n                 ***\n                ****\n               *****\n              ******\n             *******\n            ********\n           *********\n          **********\n         ***********\n        ************\n       *************\n      **************\n     ***************\n    ****************\n   *****************\n  ******************\n *******************\n********************\n";
		var result = tiers(20);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 30', function () {
		var expected = "                             *\n                            **\n                           ***\n                          ****\n                         *****\n                        ******\n                       *******\n                      ********\n                     *********\n                    **********\n                   ***********\n                  ************\n                 *************\n                **************\n               ***************\n              ****************\n             *****************\n            ******************\n           *******************\n          ********************\n         *********************\n        **********************\n       ***********************\n      ************************\n     *************************\n    **************************\n   ***************************\n  ****************************\n *****************************\n******************************\n";
		var result = tiers(30);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 50', function () {
		var expected = "                                                 *\n                                                **\n                                               ***\n                                              ****\n                                             *****\n                                            ******\n                                           *******\n                                          ********\n                                         *********\n                                        **********\n                                       ***********\n                                      ************\n                                     *************\n                                    **************\n                                   ***************\n                                  ****************\n                                 *****************\n                                ******************\n                               *******************\n                              ********************\n                             *********************\n                            **********************\n                           ***********************\n                          ************************\n                         *************************\n                        **************************\n                       ***************************\n                      ****************************\n                     *****************************\n                    ******************************\n                   *******************************\n                  ********************************\n                 *********************************\n                **********************************\n               ***********************************\n              ************************************\n             *************************************\n            **************************************\n           ***************************************\n          ****************************************\n         *****************************************\n        ******************************************\n       *******************************************\n      ********************************************\n     *********************************************\n    **********************************************\n   ***********************************************\n  ************************************************\n *************************************************\n**************************************************\n";
		var result = tiers(50);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 100', function () {
		var expected = "                                                                                                   *\n                                                                                                  **\n                                                                                                 ***\n                                                                                                ****\n                                                                                               *****\n                                                                                              ******\n                                                                                             *******\n                                                                                            ********\n                                                                                           *********\n                                                                                          **********\n                                                                                         ***********\n                                                                                        ************\n                                                                                       *************\n                                                                                      **************\n                                                                                     ***************\n                                                                                    ****************\n                                                                                   *****************\n                                                                                  ******************\n                                                                                 *******************\n                                                                                ********************\n                                                                               *********************\n                                                                              **********************\n                                                                             ***********************\n                                                                            ************************\n                                                                           *************************\n                                                                          **************************\n                                                                         ***************************\n                                                                        ****************************\n                                                                       *****************************\n                                                                      ******************************\n                                                                     *******************************\n                                                                    ********************************\n                                                                   *********************************\n                                                                  **********************************\n                                                                 ***********************************\n                                                                ************************************\n                                                               *************************************\n                                                              **************************************\n                                                             ***************************************\n                                                            ****************************************\n                                                           *****************************************\n                                                          ******************************************\n                                                         *******************************************\n                                                        ********************************************\n                                                       *********************************************\n                                                      **********************************************\n                                                     ***********************************************\n                                                    ************************************************\n                                                   *************************************************\n                                                  **************************************************\n                                                 ***************************************************\n                                                ****************************************************\n                                               *****************************************************\n                                              ******************************************************\n                                             *******************************************************\n                                            ********************************************************\n                                           *********************************************************\n                                          **********************************************************\n                                         ***********************************************************\n                                        ************************************************************\n                                       *************************************************************\n                                      **************************************************************\n                                     ***************************************************************\n                                    ****************************************************************\n                                   *****************************************************************\n                                  ******************************************************************\n                                 *******************************************************************\n                                ********************************************************************\n                               *********************************************************************\n                              **********************************************************************\n                             ***********************************************************************\n                            ************************************************************************\n                           *************************************************************************\n                          **************************************************************************\n                         ***************************************************************************\n                        ****************************************************************************\n                       *****************************************************************************\n                      ******************************************************************************\n                     *******************************************************************************\n                    ********************************************************************************\n                   *********************************************************************************\n                  **********************************************************************************\n                 ***********************************************************************************\n                ************************************************************************************\n               *************************************************************************************\n              **************************************************************************************\n             ***************************************************************************************\n            ****************************************************************************************\n           *****************************************************************************************\n          ******************************************************************************************\n         *******************************************************************************************\n        ********************************************************************************************\n       *********************************************************************************************\n      **********************************************************************************************\n     ***********************************************************************************************\n    ************************************************************************************************\n   *************************************************************************************************\n  **************************************************************************************************\n ***************************************************************************************************\n****************************************************************************************************\n";
		var result = tiers(100);
		expect(result).toBe(expected);
	});
	

