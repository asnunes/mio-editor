const { HtmlToJson } = require('../../../lib/services/html-to-json/htmlToJson');

describe('#HtmlToJson', () => {
  describe('pass a html string containing a p tag', () => {
    test('returns a paragraph element', () => {
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
  
      expect(result).toEqual(expected);
    });
  });

  describe('pass a html string containing a p tag with strong tag in the middle', () => {
    test('returns one paragraphs element with bold leaf equals true in the middle child', () => {
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
  
      expect(result).toEqual(expected);
    });
  });

  describe('pass a html string containing a p tag with b tag in the middle', () => {
    test('returns one paragraphs element with bold leaf equals true in the middle child', () => {
      const input = `<p>This is a <b>text</b> in a paragraph</p>`;
  
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
  
      expect(result).toEqual(expected);
    });
  });

  describe('pass a html string containing a p tag with em tag in the end', () => {
    test('returns one paragraph element with italic leaf equals true in last child', () => {
      const input = `<p>This is <em>italic</em></p>`;
  
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
  
      expect(result).toEqual(expected);
    });
  });

  describe('pass a html string containing a p tag with i tag in the end', () => {
    test('returns one paragraph element with italic leaf equals true in last child', () => {
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
  
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing a p tag with u tag inside", () => {
    test('returns one paragraph element with underline leaf equals true in first child', () => {
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
  
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing a strike tag inside", () => {
    test('returns one paragraph element with strike leaf', () => {
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
  
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing a s tag inside", () => {
    test('returns one paragraph element with strike leaf', () => {
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
  
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing nested s and u tags inside'", () => {
    test('returns one paragraph element with strikethrough and underline and leaf', () => {
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

      expect(result).toEqual(expected);
    });
  });
  
  describe("pass a html string containing a code tag", () => {
    test('returns one paragraph element with code leaf', () => {
      const input = `<p>This is: <code>var isCode=true</code></p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is: "
            },
            {
              text: "var isCode=true",
              code: true,
            },
          ]
        },
      ];

      expect(result).toEqual(expected);
    });
  });
  
  describe("pass a html string containing a span tag inside", () => {
    test('returns one paragraph element ignoring span tag', () => {
      const input = `<p>This is a <span>text</span></p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is a text"
            },
          ]
        },
      ];

      expect(result).toEqual(expected);
    });
  });
  
  describe("pass a html string containing a span tag followed by b tag inside", () => {
    test('returns one paragraph element with bold flag for b tag content ignoring span tag', () => {
      const input = `<p>This is <span>a <b>text</b></span></p>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "paragraph",
          children:[
            {
              text: "This is a "
            },
            {
              text: "text",
              bold: true,
            }
          ]
        },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing pre tag with code tag inside", () => {
    test('returns one code element', () => {
      const input = `<pre><code>let isWorking;</code></pre>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "code",
          children:[
            {
              "text": "let isWorking;"
            }
          ]
        },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing pre tag with code tag inside and line breaks", () => {
    test('returns one code element', () => {
      const input = `<pre><code>let isWorking;\nlet isWithLineBreaks;</code></pre>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "code",
          children:[
            {
              "text": "let isWorking;\nlet isWithLineBreaks;"
            }
          ]
        },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing h# tag", () => {
    test('returns one header element', () => {
      const input = `<h1>This is a title</h1>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "header",
          children:[
            {
              "text": "This is a title"
            }
          ]
        },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing h# tag with a span tag inside it", () => {
    test('returns one header element ignoring span tag but getting its content', () => {
      const input = `<h1>This is <span>a title</span></h1>`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "header",
          children:[
            {
              "text": "This is a title"
            }
          ]
        },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing img tag with source", () => {
    test('returns one image element', () => {
      const input = `<img src="data:image/png;base64,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">`;

      const result = HtmlToJson(input);

      const expected = [
        {
          type: "image",
          children:[{ "text": ""}],
          base64: "data:image/png;base64,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"
        },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe("pass a html string containing math tag with math content", () => {
    test('returns one image element', () => {
      const input = `<math><mrow><mn>2</mn><mo>+</mo><mn>2</mn></mrow></math>`;
      
      const result = HtmlToJson(input);

      const expected = [
        {
          type: "math",
          children:[{ "text": "2 + 2"}],
        },
      ];

      expect(result).toEqual(expected);
    });
  });

});