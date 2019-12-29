LIVE DEMO: [mio-editor](https://asnunes.github.io/mio-editor)

# mio-editor

[![npm version](https://badge.fury.io/js/mio-editor.svg)](https://badge.fury.io/js/mio-editor)

A Slate JS 0.5+ and React based WYSIWYG editor. It's a ready-to-use react component that provides an interface to edit documents and get them as a JSON.

### Implemented Features: 

- Resizable Images
- Math equation
- Code
- Title
- Paragraph:
  - Bold
  - Italic
  - Underline
  - Strikethrough

### Usage

Just import MioEditor. Editor's value is handled by ```value``` and ```onValueChange``` props.

```javascript
import MioEditor from 'mio-editor';

const App = () => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = value => {
    setValue(value);
    // [...]
  };

  return (
    <MioEditor
      value={value}
      onValueChange={onValueChange}
    />
  );
};
```

### Dependencies

React 16.X.X

### Installation

```
npm install mio-editor --save
```
