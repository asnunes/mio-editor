(this["webpackJsonpmio-editor"]=this["webpackJsonpmio-editor"]||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},21:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(9),c=n.n(a),i=(n(21),n(0)),u=n(1),l=n(7),s=n(15),f=n(11),d=function(e){return o.a.createElement("span",Object.assign({},e.attributes,{style:m(e.leaf)}),e.children)},m=function(e){return Object(f.a)({fontWeight:e.bold?"bold":"normal",fontStyle:e.italic?"italic":"normal",fontFamily:e.code?"monospace":"normal",textDecoration:h(e)},g(e))},h=function(e){var t=[];return e.underline&&t.push("underline"),e.strikethrough&&t.push("line-through"),0===t.length?"none":t.join(" ")},g=function(e){return e.code?{fontFamily:e.code?"monospace":"normal",backgroundColor:"#eee",padding:"3px"}:{}},p=function(e){return o.a.createElement(d,e)},b=function(e){return o.a.createElement("pre",e.attributes,o.a.createElement("code",null,e.children))},v=function(e){return o.a.createElement("h2",e.attributes,e.children)},y=function(e){var t=e.attributes,n=e.element,r=e.children,a=Object(l.d)(),c=Object(l.c)();return o.a.createElement("div",t,o.a.createElement("div",{contentEditable:!1},o.a.createElement("img",{src:n.base64,style:E(a,c)})),r)},E=function(e,t){return{display:"block",maxWidth:"100%",maxHeight:"20em",boxShadow:"".concat(e&&t?"0 0 0 3px #B4D5FF":"none")}},j=function(e){return o.a.createElement("p",e.attributes,e.children)},k=function(e){switch(e.element.type){case"header":return o.a.createElement(v,e);case"code":return o.a.createElement(b,e);case"image":return o.a.createElement(y,e);default:return o.a.createElement(j,e)}},O=n(5),w=n(8),x=n.n(w),A={isMarkActive:function(e,t){var n=u.a.nodes(e,{match:function(e){return!0===e[t]},universal:!0});return!!Object(i.a)(n,1)[0]},isLineEmpty:function(e){var t=u.a.nodes(e,{match:function(e){return""===e.text}});return!!Object(i.a)(t,1)[0]},isBlockActive:function(e,t){var n=u.a.nodes(e,{match:function(e){return e.type===t}});return!!Object(i.a)(n,1)[0]},toggleMark:function(e,t){var n=A.isMarkActive(e,t);u.h.setNodes(e,Object(O.a)({},t,!n||null),{match:function(e){return u.g.isText(e)},split:!0})},toggleBlock:function(e,t){var n=A.isBlockActive(e,t);u.h.setNodes(e,{type:n?null:t})},insertImage:function(e,t){u.h.setNodes(e,{type:"image",base64:t})},onKeyDown:function(e,t){Object.keys(B).some((function(n){if(x()(n,e))return B[n](e,t),!0}))}},B={"mod+h":function(e,t){return D(e,t,"header")},"mod+c":function(e,t){return S(e,t,"code")},"mod+b":function(e,t){return S(e,t,"bold")},"mod+s":function(e,t){return S(e,t,"strikethrough")},"mod+i":function(e,t){return S(e,t,"italic")},"mod+u":function(e,t){return S(e,t,"underline")}},D=function(e,t,n){C(e,A.toggleBlock,t,n)},S=function(e,t,n){C(e,A.toggleMark,t,n)},C=function(e,t){e.preventDefault();for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];t.apply(void 0,r)},F=function(e){var t=new FileReader;return new Promise((function(n,r){t.onload=function(){return n(t.result)},t.onerror=function(){return r(t.error)},t.readAsDataURL(e)}))},I=(n(26),[{type:"paragraph",children:[{text:"A line of a paragraph..."}]}]),M=function(){var e=Object(r.useMemo)((function(){return function(e){var t=e.isVoid;return e.isVoid=function(e){return"image"===e.type||t(e)},e}(function(e){return e.isInline=function(e){return["code"].includes(e.type)},e}(Object(s.a)(Object(l.e)(Object(u.i)()))))}),[]),t=Object(r.useRef)(null),n=Object(r.useState)(JSON.parse(localStorage.getItem("content"))||I),a=Object(i.a)(n,2),c=a[0],f=a[1],d=function(e){var t=JSON.stringify(e);localStorage.setItem("content",t),console.log(t)};return o.a.createElement(l.b,{editor:e,value:c,onChange:function(e){f(e),d(e)}},o.a.createElement("input",{id:"file-upload",type:"file",accept:"image/png, image/jpeg",ref:t,onChange:function(t){if(0!==t.target.files.length){var n=t.target.files[0];F(n).then((function(t){return A.insertImage(e,t)}),(function(e){return console.log(e)}))}}}),o.a.createElement(l.a,{renderLeaf:Object(r.useCallback)(p),renderElement:Object(r.useCallback)(k),onKeyDown:function(t){return A.onKeyDown(t,e)},autoFocus:!0,spellCheck:!0}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.a1389a4c.chunk.js.map