const promiseConverter = require('./');

describe('findInText', () => {
    it('finds nothing in empty string', () => {
      expect(promiseConverter.findInText('')).toEqual([]);
    });  

    it('finds nothing in gibberish', () => {
        expect(promiseConverter.findInText('asjdfnasdjkfnasdjnfjsd')).toEqual([]);
    });
    it('finds nothing in not a string', () => {
        expect(promiseConverter.findInText(null)).toEqual([]);
        expect(promiseConverter.findInText(1)).toEqual([]);
        expect(promiseConverter.findInText(undefined)).toEqual([]);
    });

    describe('simple longhand no params empty func', () => {
        it('should fine one', () => {
            expect(promiseConverter.findInText('something().then(function () {});')).toEqual(['something().then(function () {']);
        });
        
        it('should find two', () => {
            const code = `something().then(function () {});
            something().then(function () {});`;
            expect(promiseConverter.findInText(code)).toEqual(['something().then(function () {', 'something().then(function () {']);
        });
    
        it('should find one different name', () => {
            expect(promiseConverter.findInText('bob().then(function () {});')).toEqual(['bob().then(function () {']);
        });

        it('should find one of each', () => {
            const code = `something().then(function () {});
            bob().then(function () {});`;
            expect(promiseConverter.findInText(code)).toEqual(['something().then(function () {', 'bob().then(function () {']);
        });
    });

});