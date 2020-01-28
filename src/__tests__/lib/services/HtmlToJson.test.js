const { HtmlToJson } = require('../../../lib/services/html-to-json/htmlToJson');

describe('#HtmlToJson', () => {
  describe('pass a html string containing a p tag', () => {
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
  
  describe('pass a html string containing a p tag with br tag', () => {
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

  describe('pass a html string containing a p tag with strong tag in the middle', () => {
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

  describe('pass a html string containing a p tag with em tag in the end', () => {
    test('returns one paragraph element with italic mark equals true in last child', () => {
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

  describe('pass a html string containing a p tag with i tag in the end', () => {
    test('returns one paragraph element with italic mark equals true in last child', () => {
      const input = `<p>This is a <i>pudim</i></em>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            { text:"This is a " },
            {
              text:"pudim",
              italic: true,
            },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing a p tag with span tag inside and style with 'text-decoration: underline'\
  tag in the beggining", () => {
    test('returns one paragraph element with underline mark equals true in first child', () => {
      const input = `<p><span style="text-decoration: underline;">This is</span> a text</p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is",
              underline: true,
            },
            { text: " a text" },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing a p tag with u tag inside", () => {
    test('returns one paragraph element with underline mark equals true in first child', () => {
      const input = `<p><u>This is</u> a text</p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is",
              underline: true,
            },
            { text: " a text" },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing a strike tag inside", () => {
    test('returns one paragraph element with strike mark', () => {
      const input = `<p><strike>This is strike</strike></p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is strike",
              strikethrough: true,
            },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing a s tag inside", () => {
    test('returns one paragraph element with strike mark', () => {
      const input = `<p><s>This is strike</s></p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is strike",
              strikethrough: true,
            },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing a span tag inside and style with 'text-decoration: line-through'", () => {
    test('returns one paragraph element with strike mark', () => {
      const input = `<p><span style="text-decoration: line-through;">This is strike</span></p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is strike",
              strikethrough: true,
            },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing nested s and u tags inside'", () => {
    test('returns one paragraph element with strikethrough and underline and mark', () => {
      const input = `<p><s><u>This is strike</u></s></p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is strike",
              strikethrough: true,
              underline: true,
            },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing a span tag inside and style with 'text-decoration: line-through'", () => {
    test('returns one paragraph element with strike mark', () => {
      const input = `<p><span style="text-decoration: line-through;">This is strike</span></p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is strike",
              strikethrough: true,
            },
          ]
        },
      ];

      console.log(JSON.stringify(result));
      expect(result).toEqual(expected);
    });
  });
});