const { HtmlToJson } = require('../../../lib/services/html-to-json/htmlToJson');

describe('#HtmlToJson', () => {
  describe('pass an html string containing a p tag', () => {
    test('returns an paragraph element', () => {
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
  
  describe('pass an html string containing a p tag with br tag', () => {
    test('returns an paragraph element with line break', () => {
      const input = `<p>This is a text in a paragraph.</br>And this is a new line</p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text:"This is a text in a paragraph.\nAnd this is a new line"
            },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });

  describe('pass an html string containing a p tag with strong tag in the middle', () => {
    test('returns one paragraphs element with bold mark equals true in the middle child', () => {
      const input = `<p>This is a <strong>text</strong> in a paragraph</p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            { text:"This is a " },
            {
              text:"text",
              bold: true,
            },
            { text:" in a paragraph" },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });

  describe('pass an html string containing a p tag with em tag in the end', () => {
    test('returns two paragraphs elements with italic mark equals true in last child', () => {
      const input = `<p>This is <em>italic</b></em>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            { text:"This is " },
            {
              text:"italic",
              italic: true,
            },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });
});