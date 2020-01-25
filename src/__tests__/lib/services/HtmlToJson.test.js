const { HtmlToJson } = require('../../../lib/services/HtmlToJson');

describe('#HtmlToJson', () => {
  describe('pass an html string containing a p tag', () => {
    test('returns ', () => {
      const input = `<p>This is a text in a paragraph.</p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
             {
                text:"This is a text in a paragraph."
             },
          ]
       },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });
});