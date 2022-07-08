const clasificaElementos = require('./test01.js');

test('clasificaElementos with Array [0]', function () {
    var expected = ["0.0000", "0.0000", "1.0000"] ;
    var result = clasificaElementos([0]);
    expect(result).toEqual(expected);
});

test('clasificaElementos with Array [-1]', function () {
    var expected = ["0.0000", "1.0000", "0.0000"] ;
    var result = clasificaElementos([-4]);
    expect(result).toEqual(expected);
});

test('clasificaElementos with Array [6]', function () {
    var expected = ["1.0000", "0.0000", "0.0000"] ;
    var result = clasificaElementos([10]);
    expect(result).toEqual(expected);
});

test('clasificaElementos with Array [-4, 3, -9, 0, 4, 1]', function () {
    var expected = ["0.5000", "0.3333", "0.1667"] ;
    var result = clasificaElementos([-4, 3, -9, 0, 4, 1]);
    expect(result).toEqual(expected);
});

test('clasificaElementos with Array [5, -2, -9, 2, 0, 9]', function () {
    var expected = ["0.5000","0.3333", "0.1667"] ;
    var result = clasificaElementos([5, -2, -9, 2, 0, 9]);
    expect(result).toEqual(expected);
});

test('clasificaElementos with Array [0, 0, 0, 10, 0, -8]', function () {
    var expected = ["0.1667","0.1667", "0.6667"] ;
    var result = clasificaElementos([0, 0, 0, 10, 0, -8]);
    expect(result).toEqual(expected);
});

test('clasificaElementos with Array [-5, -6, -9, -6, 0, 0]', function () {
    var expected = ["0.0000", "0.6667", "0.3333"] ;
    var result = clasificaElementos([-5, -6, -9, -6, 0, 0]);
    expect(result).toEqual(expected);
});

test('clasificaElementos with Array [5, 2, 9, -2, -2, -9]', function () {
    var expected = ["0.5000","0.5000", "0.0000"] ;
    var result = clasificaElementos([5, 2, 9, -2, -2, -9]);
    expect(result).toEqual(expected);
});

test('clasificaElementos with Array [10, 0,-8]', function () {
    var expected = ["0.3333", "0.3333","0.3333"] ;
    var result = clasificaElementos([10, 0, -8]);
    expect(result).toEqual(expected);
});

/**
 PASS  ./suite.test.js
 √ clasificaElementos with Array [0] (3ms)
 √ clasificaElementos with Array [-1] (1ms)
 √ clasificaElementos with Array [6]
 √ clasificaElementos with Array [-4, 3, -9, 0, 4, 1] (6ms)
 √ clasificaElementos with Array [5, -2, -9, 2, 0, 9]
 √ clasificaElementos with Array [0, 0, 0, 10, 0, -8] (1ms)
 √ clasificaElementos with Array [-5, -6, -9, -6, 0, 0] (1ms)
 √ clasificaElementos with Array [5, 2, 9, -2, -2, -9]
 √ clasificaElementos with Array [10, 0,-8] (1ms)

 Test Suites: 1 passed, 1 total
 Tests:       9 passed, 9 total
 Snapshots:   0 total
 Time:        3.829s
 Ran all test suites.
 **/