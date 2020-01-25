const { HtmlToJson } = require('../../../lib/services/HtmlToJson');

describe('calling function', () => {
    test('returns Hello, tests!', () => {
        const result = HtmlToJson('');
        expect(result).toBe('Hello, tests!');
    });
});