(this["webpackJsonpmio-editor"]=this["webpackJsonpmio-editor"]||[]).push([[0],{20:function(e,t,n){e.exports=n(41)},25:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(12),i=n.n(o),c=(n(25),n(1)),u=n(0),l=n(4),s=n(19),f=n(8),d=n.n(f),h=n(9),m=function(e){return r.a.createElement("span",Object.assign({},e.attributes,{style:p(e.leaf)}),e.children)},p=function(e){return Object(h.a)({fontWeight:e.bold?"bold":"normal",fontStyle:e.italic?"italic":"normal",fontFamily:e.code?"monospace":"normal",textDecoration:b(e)},g(e))},b=function(e){var t=[];return e.underline&&t.push("underline"),e.strikethrough&&t.push("line-through"),0===t.length?"none":t.join(" ")},g=function(e){return e.code?{fontFamily:e.code?"monospace":"normal",backgroundColor:"#eee",padding:"3px"}:{}},v=function(e){return r.a.createElement(m,e)},j=function(e){return r.a.createElement("pre",e.attributes,r.a.createElement("code",null,e.children))},O=function(e){return r.a.createElement("h2",e.attributes,e.children)},E=n(15),y=(n(35),function(e){var t=e.attributes,n=e.element,o=e.children,i=Object(l.e)(),s=Object(l.d)(),f=Object(l.f)(),d=Object(a.useState)(n.width||200),h=Object(c.a)(d,2),m=h[0],p=h[1],b=Object(a.useState)(n.height||200),g=Object(c.a)(b,2),v=g[0],j=g[1],O=Object(a.useState)(Math.PI/4),y=Object(c.a)(O,2),w=y[0],k=y[1],M=Object(a.useRef)(null),S=30*Math.cos(w),I=30*Math.sin(w),B=500*Math.cos(w),N=500*Math.sin(w);Object(a.useEffect)(C,[]);var A=function(e,t){u.h.setNodes(f,{width:t.width,height:t.height},{at:e})},C=function(){var e=M.current.naturalWidth,t=M.current.naturalHeight,n=Math.atan(t/e),a=355*Math.cos(n),r=355*Math.sin(n);p(Math.min(e,a)),j(Math.min(t,r)),k(n)};return r.a.createElement("div",t,r.a.createElement("div",{contentEditable:!1},r.a.createElement(E.ResizableBox,{className:"box",width:m,height:v,onResizeStop:function(e,t){var a=l.b.findPath(f,n);A(a,t.size)},lockAspectRatio:!0,minConstraints:[S,I],maxConstraints:[B,N]},r.a.createElement("img",{ref:M,src:n.base64,style:x(i,s)}))),o)}),x=function(e,t){return{display:"block",width:"100%",height:"100%",boxShadow:"".concat(e&&t?"0 0 0 3px #B4D5FF":"none")}},w=function(e){var t=e.attributes,n=e.element,o=e.children,i=Object(a.useState)(""),u=Object(c.a)(i,2),s=u[0],f=u[1],d=Object(l.e)(),h=Object(l.d)();return Object(a.useEffect)((function(){return f(n.children[0].text||"")})),r.a.createElement("div",Object.assign({},t,{style:{position:"relative"}}),r.a.createElement("div",{style:M(d,h),contentEditable:!1},r.a.createElement(k,{mathString:s})),r.a.createElement("div",{style:S(d,h)},o))},k=function(e){var t=e.mathString,n=""===t?"color(grey)(text(Type an equation below))":t;return r.a.createElement("div",null,r.a.createElement(d.a.Node,null,n))},M=function(e,t){var n={inlineSize:"fit-content",margin:"auto",padding:"5px",borderRadius:"10px"};return e&&t?Object(h.a)({boxShadow:"0 0 0 2px #80deea"},n):n},S=function(e,t){var n={position:"absolute",left:"50%",bottom:0,transform:"translate(-50%, 120%)",borderRadius:"10px"};return e&&t?Object(h.a)({background:"#80deea",fontSize:"0.8em",padding:"3px",minWidth:"20px"},n):Object(h.a)({opacity:0},n)},I=function(e){var t=e.attributes,n=e.element,a=e.children,o=Object(l.e)(),i=Object(l.d)();return console.log(n.content),r.a.createElement("span",Object.assign({},t,{style:B(o,i),contentEditable:!1}),r.a.createElement(d.a.Node,{inline:!0},n.content),a)},B=function(e,t){return{boxShadow:"".concat(e&&t?"0 0 0 3px #B4D5FF":"none")}},N=function(e){return r.a.createElement("p",e.attributes,e.children)},A=function(e){switch(e.element.type){case"header":return r.a.createElement(O,e);case"code":return r.a.createElement(j,e);case"image":return r.a.createElement(y,e);case"math":return r.a.createElement(w,e);case"mathInline":return r.a.createElement(I,e);default:return r.a.createElement(N,e)}},C=n(6),D=n(10),R=n.n(D),F={isMarkActive:function(e,t){var n=u.a.nodes(e,{match:function(e){return!0===e[t]},universal:!0});return!!Object(c.a)(n,1)[0]},isLineEmpty:function(e){var t=u.a.nodes(e,{match:function(e){return""===e.text}});return!!Object(c.a)(t,1)[0]},isBlockActive:function(e,t){var n=u.a.nodes(e,{match:function(e){return e.type===t}});return!!Object(c.a)(n,1)[0]},toggleMark:function(e,t){var n=F.isMarkActive(e,t);u.h.setNodes(e,Object(C.a)({},t,!n||null),{match:function(e){return u.g.isText(e)},split:!0})},toggleBlock:function(e,t){var n=F.isBlockActive(e,t);u.h.setNodes(e,{type:n?null:t})},insertImage:function(e,t){u.h.setNodes(e,{type:"image",base64:t})},onKeyDown:function(e,t){Object.keys(T).some((function(n){if(R()(n,e))return T[n](e,t),!0}))}},T={"mod+h":function(e,t){return W(e,t,"header")},"mod+c":function(e,t){return L(e,t,"code")},"mod+b":function(e,t){return L(e,t,"bold")},"mod+s":function(e,t){return L(e,t,"strikethrough")},"mod+i":function(e,t){return L(e,t,"italic")},"mod+u":function(e,t){return L(e,t,"underline")},"mod+=":function(e,t){return W(e,t,"math")},"mod+e":function(e,t){return z(e,t)},enter:function(e,t){return J(t)}},z=function(e,t){e.preventDefault(),u.h.insertNodes(t,{type:"mathInline",children:[{text:"\ud83d\ude0e"}]})},J=function(e){F.isBlockActive(e,"math")&&setTimeout((function(){return F.toggleBlock(e,"paragraph")}),0)},W=function(e,t,n){V(e,F.toggleBlock,t,n)},L=function(e,t,n){V(e,F.toggleMark,t,n)},V=function(e,t){e.preventDefault();for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];t.apply(void 0,a)},K=function(e,t){var n=H(e,t);return n&&"mathInline"===n.type},P=function(e,t,n){return u.a.isStart(e,t,n)},$=function(e){return e&&u.f.isCollapsed(e)},G=function(e,t){return-1!==e&&1!==t},q=function(e,t){var n=e.lastIndexOf(t);return-1===n?[-1,-1]:[e.slice(0,n).lastIndexOf(t),n]},H=function(e,t){var n=u.a.previous(e,{at:t});return n&&n[0]},U=function(e,t){var n=u.a.string(e,t);u.h.select(e,t),u.h.delete(e),u.h.insertNodes(e,{type:"mathInline",content:n.slice(1,-1),children:[{text:""}]})},X=function(e){var t=new FileReader;return new Promise((function(n,a){t.onload=function(){return n(t.result)},t.onerror=function(){return a(t.error)},t.readAsDataURL(e)}))},_=(n(40),{jax:["input/ascii","output/SVG"],showMathMenu:!1}),Q=[{type:"paragraph",children:[{text:"A line of a paragraph..."}]}],Y=function(){var e=Object(a.useMemo)((function(){return function(e){var t=e.insertText,n=e.deleteBackward;return e.insertText=function(n){var a=e.selection;if($(a)){var r=a.anchor,o=r.path,i=u.a.start(e,o),l={anchor:r,focus:i},s=u.a.string(e,l),f=-1===s.lastIndexOf(" ")?0:s.lastIndexOf(" "),d=s.slice(f),h=q(d,"$"),m=Object(c.a)(h,2),p=m[0],b=m[1];if(G(p,b)){var g={anchor:r,focus:{path:o,offset:p+f-i.offset}};U(e,g)}}t(n)},e.deleteBackward=function(){var t=e.selection;if($(t)){var a=t.anchor,r=a.path,o=u.a.end(e,r);if(K(e,o)&&P(e,o,r)){var i=H(e,o),c=i.content;n.apply(void 0,arguments),e.insertText("$"+c)}else n.apply(void 0,arguments)}},e}(function(e){var t=e.isVoid;return e.isVoid=function(e){return"image"===e.type||"mathInline"===e.type||t(e)},e}(function(e){var t=e.isInline;return e.isInline=function(e){return!!["code","mathInline"].includes(e.type)||t(e)},e}(Object(s.a)(Object(l.g)(Object(u.i)())))))}),[]),t=Object(a.useRef)(null),n=Object(a.useState)(JSON.parse(localStorage.getItem("content"))||Q),o=Object(c.a)(n,2),i=o[0],f=o[1],h=function(e){var t=JSON.stringify(e);localStorage.setItem("content",t),console.log(t)};return r.a.createElement(l.c,{editor:e,value:i,onChange:function(e){f(e),h(e)}},r.a.createElement("input",{id:"file-upload",type:"file",accept:"image/png, image/jpeg",ref:t,onChange:function(t){if(0!==t.target.files.length){var n=t.target.files[0];X(n).then((function(t){return F.insertImage(e,t)}),(function(e){return console.log(e)}))}}}),r.a.createElement("div",{className:"mio-editor"},r.a.createElement(d.a.Context,{script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_SVG",options:_},r.a.createElement(l.a,{renderLeaf:Object(a.useCallback)(v),renderElement:Object(a.useCallback)(A),onKeyDown:function(t){return F.onKeyDown(t,e)},autoFocus:!0,spellCheck:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.cfdfb5a4.chunk.js.map