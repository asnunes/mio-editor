(this["webpackJsonpmio-editor"]=this["webpackJsonpmio-editor"]||[]).push([[0],{24:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(14),o=n.n(i),c=(n(29),n(2)),u=n(1),l=n(4),s=n(23),f=n(11),d=n.n(f),h=n(9),m=n(7),p=n(10),g=n(12),b=n.n(g),v={isMarkActive:function(e,t){var n=u.a.nodes(e,{match:function(e){return!0===e[t]},universal:!0});return!!Object(c.a)(n,1)[0]},isLineEmpty:function(e){var t=u.a.nodes(e,{match:function(e){return""===e.text}});return!!Object(c.a)(t,1)[0]},isBlockActive:function(e,t){var n=u.a.nodes(e,{match:function(e){return e.type===t}});return!!Object(c.a)(n,1)[0]},clearMarks:function(e){u.h.setNodes(e,y.reduce((function(e,t){return Object(p.a)(Object(m.a)({},t,null),e)}),{}),{match:function(e){return u.g.isText(e)},split:!0})},toggleMark:function(e,t){if(v.isBlockActive(e,"paragraph")){var n=v.isMarkActive(e,t);u.h.setNodes(e,Object(m.a)({},t,!n||null),{match:function(e){return u.g.isText(e)},split:!0})}},toggleBlock:function(e,t){var n=v.isBlockActive(e,t);if(n||v.clearMarks(e),"math"===t&&!v.isLineEmpty(e))return u.a.insertText(e,"$");u.h.setNodes(e,{type:n?"paragraph":t})},insertImage:function(e,t){u.h.setNodes(e,{type:"image",base64:t})},onKeyDown:function(e,t){Object.keys(x).some((function(n){return!!b()(n,e)&&(x[n](e,t),!0)}))}},y=["bold","italic","strikethrough","underline","code"],x={"mod+h":function(e,t){return M(e,t,"header")},"mod+;":function(e,t){return E(e,t)},"mod+b":function(e,t){return B(e,t,"bold")},"mod+s":function(e,t){return B(e,t,"strikethrough")},"mod+i":function(e,t){return B(e,t,"italic")},"mod+u":function(e,t){return B(e,t,"underline")},"mod+=":function(e,t){return M(e,t,"math")},"mod+e":function(e,t){return k(e,t)},enter:function(e,t){return w(e,t)},"shift+enter":function(e,t){return j(e,t)},tab:function(e,t){return O(e,t)}},k=function(e,t){e.preventDefault(),u.h.insertNodes(t,{type:"inlineMath",children:[{text:""}]})},E=function(e,t){var n=v.isLineEmpty(t)?v.toggleBlock:v.toggleMark;return S(e,n,t,"code")},j=function(e,t){e.preventDefault(),(v.isBlockActive(t,"code")||v.isBlockActive(t,"image"))&&A(t)},O=function(e,t){v.isBlockActive(t,"math")||v.isBlockActive(t,"image")||S(e,t.insertTabSpace)},w=function(e,t){v.isBlockActive(t,"math")&&setTimeout((function(){return v.toggleBlock(t,"paragraph")}),0),v.isBlockActive(t,"image")&&A(t)},M=function(e,t,n){S(e,v.toggleBlock,t,n)},B=function(e,t,n){S(e,v.toggleMark,t,n)},S=function(e,t){e.preventDefault();for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];t.apply(void 0,r)},A=function(e){u.h.insertNodes(e,{type:"paragraph",children:[{text:""}]})},C=function(){var e=Object(l.f)(),t=v.isLineEmpty(e);return a.a.createElement(T,{type:t?"block":"mark",format:"code",icon:h.b})},I=n(15),D={getBase64FromFile:function(e){var t=new FileReader;return new Promise((function(n,r){t.onload=function(){return n(t.result)},t.onerror=function(){return r(t.error)},t.readAsDataURL(e)}))}},F=function(){var e=Object(l.f)(),t=Object(r.useRef)(null),n=v.isBlockActive(e,"paragraph");return a.a.createElement("div",{onMouseDown:function(e){n&&(e.preventDefault(),t.current.value=null,t.current.click(e))},style:N(n)},a.a.createElement(I.a,{icon:h.d,style:R(n)}),a.a.createElement("input",{id:"file-upload",type:"file",accept:"image/png, image/jpeg",ref:t,onChange:function(t){if(0!==t.target.files.length){var n=t.target.files[0];D.getBase64FromFile(n).then((function(t){return v.insertImage(e,t)}),(function(e){return console.log(e)}))}},style:{display:"none"}}))},N=function(e){return{cursor:e?"pointer":"arrow",padding:"0 10px"}},R=function(e){return{opacity:e?"1":"0.5",width:"20px",height:"20px"}},T=function(e){var t=e.type,n=e.format,r=e.icon,i=Object(l.f)(),o=v.isBlockActive(i,"paragraph"),c=J(i,t,n);return a.a.createElement("div",{onMouseDown:function(e){return W(o,c)?function(e){e.preventDefault(),H(i,t,n),l.b.focus(i)}(e):null},style:V(o,c)},a.a.createElement(I.a,{icon:r,style:z(o,c)}))},V=function(e,t){return{cursor:W(e,t)?"pointer":"arrow",padding:"0 10px"}},z=function(e,t){return Object(p.a)({},L(e,t),{width:"20px",height:"20px"})},L=function(e,t){return t?{color:"rgba(81, 203, 238, 0.8)",filter:"drop-shadow(0 3px 3px rgba(81, 203, 238, 0.4))"}:e?{}:{opacity:"0.5"}},W=function(e,t){return e||t},J=function(e,t,n){return P(t,v.isBlockActive,v.isMarkActive)(e,n)},H=function(e,t,n){return P(t,v.toggleBlock,v.toggleMark)(e,n)},P=function(e,t,n){return"block"===e?t:n},$=function(){return a.a.createElement("div",{style:G()},a.a.createElement(K,null,a.a.createElement(T,{type:"block",format:"header",icon:h.c})),a.a.createElement(K,null,a.a.createElement(T,{type:"mark",format:"bold",icon:h.a}),a.a.createElement(T,{type:"mark",format:"italic",icon:h.e}),a.a.createElement(T,{type:"mark",format:"underline",icon:h.h}),a.a.createElement(T,{type:"mark",format:"strikethrough",icon:h.g}),a.a.createElement(C,null)),a.a.createElement(K,null,a.a.createElement(F,null),a.a.createElement(T,{type:"block",format:"math",icon:h.f})))},G=function(){return{display:"flex",padding:"5px 0",borderBottom:"1px solid rgb(218, 220, 224)",zIndex:110,background:"white"}},K=function(e){var t=e.children;return a.a.createElement("div",{style:q()},t)},q=function(){return{display:"flex",borderRight:"1px solid rgb(218, 220, 224)",margin:"10px 0"}},U=function(e){return a.a.createElement("span",Object.assign({},e.attributes,{style:X(e.leaf)}),e.children)},X=function(e){return Object(p.a)({fontWeight:e.bold?"bold":"normal",fontStyle:e.italic?"italic":"normal",fontFamily:e.code?"monospace":"normal",textDecoration:_(e)},Q(e))},_=function(e){var t=[];return e.underline&&t.push("underline"),e.strikethrough&&t.push("line-through"),0===t.length?"none":t.join(" ")},Q=function(e){return e.code?{fontFamily:e.code?"monospace":"normal",backgroundColor:"#eee",padding:"3px"}:{}},Y=function(e){return a.a.createElement(U,e)},Z=function(e){var t=e.attributes,n=e.children;return a.a.createElement("pre",{style:ee()},a.a.createElement("code",t,n))},ee=function(){return{backgroundColor:"#f4f4f4",border:"1px solid #ddd",borderLeft:"3px solid black",color:"#666",pageBreakInside:"avoid",padding:".5em 1em",marginBottom:"1.6em",borderRadius:"5px",fontFamily:"Courier New Courier monospace",overflow:"auto",wordWrap:"break-word"}},te=function(e){var t=e.attributes,n=e.children;return a.a.createElement("h2",t,n)},ne=n(22),re=function(e){var t=e.attributes,n=e.element,i=e.children,o=Object(l.e)(),s=Object(l.d)(),f=Object(l.f)(),d=Object(r.useState)(n.width||200),h=Object(c.a)(d,2),m=h[0],p=h[1],g=Object(r.useState)(n.height||200),b=Object(c.a)(g,2),v=b[0],y=b[1],x=Object(r.useState)(Math.PI/4),k=Object(c.a)(x,2),E=k[0],j=k[1],O=Object(r.useRef)(null);function w(){return l.b.findPath(f,n)}return a.a.createElement("div",t,a.a.createElement("div",{contentEditable:!1,style:ce()},a.a.createElement(ne.Resizable,{size:{width:m,height:v},onResizeStart:function(e,t,n,r){l.b.focus(f),u.h.select(f,w())},onResizeStop:function(e,t,n,r){var a,i;a=r.width,i=r.height,u.h.setNodes(f,{width:m+a,height:i+v},{at:w()}),p(m+r.width),y(v+r.height)},lockAspectRatio:!0,minWidth:ae*Math.cos(E),minHeight:ae*Math.sin(E),maxWidth:ie*Math.cos(E),maxHeight:ie*Math.sin(E)},a.a.createElement("img",{ref:O,src:n.base64,alt:"mio editor custom",style:ue(o,s),onLoad:function(){var e=n.width||O.current.naturalWidth,t=n.height||O.current.naturalHeight,r=Math.atan(t/e),a=ae*Math.cos(r),i=ae*Math.sin(r),o=Math.sqrt(Math.pow(e,2)+Math.pow(t,2));p(oe(o)?a:e),y(oe(o)?i:t),j(r)}}))),i)},ae=100,ie=700,oe=function(e){return e<ae},ce=function(){return{display:"flex",alignItems:"center",justifyContent:"center"}},ue=function(e,t){return{display:"block",width:"100%",height:"100%",boxShadow:"".concat(e&&t?"0 0 0 3px #B4D5FF":"none")}},le=function(e){var t=e.attributes,n=e.element,i=e.children,o=Object(r.useState)(""),s=Object(c.a)(o,2),f=s[0],d=s[1],h=Object(l.e)(),m=Object(l.d)(),p=Object(l.f)();function g(e){l.b.focus(p),u.h.select(p,l.b.findPath(p,n))}return Object(r.useEffect)((function(){return d(n.children[0].text||"")}),[n.children]),a.a.createElement("div",Object.assign({},t,{style:{position:"relative"}}),a.a.createElement("div",{style:fe(h,m),contentEditable:!1,onClick:function(e){return g()}},a.a.createElement(se,{mathString:f})),a.a.createElement("div",{style:de(h,m)},i))},se=function(e){var t=e.mathString,n=""===t?"color(grey)(text(Type an equation below))":t;return a.a.createElement("div",null,a.a.createElement(d.a.Node,null,n))},fe=function(e,t){var n={inlineSize:"fit-content",margin:"auto",padding:"5px",borderRadius:"10px"};return e&&t?Object(p.a)({boxShadow:"0 0 0 2px #80deea"},n):n},de=function(e,t){var n={position:"absolute",left:"50%",bottom:0,transform:"translate(-50%, 120%)",borderRadius:"10px",zIndex:100};return e&&t?Object(p.a)({background:"#80deea",fontSize:"0.8em",padding:"3px",minWidth:"20px"},n):Object(p.a)({opacity:0},n)},he=function(e){var t=e.attributes,n=e.element,r=e.children,i=Object(l.e)(),o=Object(l.d)();return console.log(n.content),a.a.createElement("span",Object.assign({},t,{style:me(i,o),contentEditable:!1}),a.a.createElement(d.a.Node,{inline:!0},n.content),r)},me=function(e,t){return{boxShadow:"".concat(e&&t?"0 0 0 3px #B4D5FF":"none")}},pe=function(e){return a.a.createElement("p",e.attributes,e.children)},ge=function(e){switch(e.element.type){case"header":return a.a.createElement(te,e);case"code":return a.a.createElement(Z,e);case"image":return a.a.createElement(re,e);case"math":return a.a.createElement(le,e);case"inlineMath":return a.a.createElement(he,e);default:return a.a.createElement(pe,e)}},be=function(e){var t=e.isVoid;return e.isVoid=function(e){return"image"===e.type||t(e)},e},ve=function(e){var t=e.insertText,n=e.deleteBackward,r=e.isInline,a=e.isVoid;return e.insertText=function(n){var r=e.selection;if(ke(r)){var a=r.anchor,i=a.path,o=u.a.start(e,i),l={anchor:a,focus:o},s=u.a.string(e,l),f=-1===s.lastIndexOf(" ")?0:s.lastIndexOf(" "),d=s.slice(f),h=je(d,"$"),m=Object(c.a)(h,2),p=m[0],g=m[1];if(Ee(p,g)){var b={anchor:a,focus:{path:i,offset:p+f-o.offset}};we(e,b)}}t(n)},e.deleteBackward=function(){var t=e.selection;if(ke(t)){var r=t.anchor,a=r.path,i=u.a.end(e,a);if(ye(e,i)&&xe(e,i,a)){var o=Oe(e,i),c=o.content;n.apply(void 0,arguments),e.insertText("$"+c)}else n.apply(void 0,arguments)}},e.isInline=function(e){return"inlineMath"===e.type||r(e)},e.isVoid=function(e){return"inlineMath"===e.type||a(e)},e},ye=function(e,t){var n=Oe(e,t);return n&&"inlineMath"===n.type},xe=function(e,t,n){return u.a.isStart(e,t,n)},ke=function(e){return e&&u.f.isCollapsed(e)},Ee=function(e,t){return-1!==e&&1!==t},je=function(e,t){var n=e.lastIndexOf(t);return-1===n?[-1,-1]:[e.slice(0,n).lastIndexOf(t),n]},Oe=function(e,t){var n=u.a.previous(e,{at:t});return n&&n[0]},we=function(e,t){var n=u.a.string(e,t);u.h.select(e,t),u.h.delete(e),u.h.insertNodes(e,{type:"inlineMath",content:n.slice(1,-1),children:[{text:""}]})},Me=function(e){var t=e.insertBreak;return e.insertBreak=function(){var n=u.a.nodes(e,{match:function(e){return"code"===e.type}});Object(c.a)(n,1)[0]?u.h.insertText(e,"\n"):t()},e},Be=function(e){return e.insertTabSpace=function(){u.h.insertText(e,"    ")},e},Se=function(e){var t=Object(r.useMemo)((function(){return function(e){return[Me,be,ve,Be].forEach((function(t){"function"==typeof t&&t(e)})),e}(Object(s.a)(Object(l.g)(Object(u.i)())))}),[]),n=Object(r.useState)(e.value||Ce),i=Object(c.a)(n,2),o=i[0],f=i[1];return a.a.createElement(l.c,{editor:t,value:o,onChange:function(t){f(t),e.onValueChange&&e.onValueChange(t)}},a.a.createElement($,null),a.a.createElement("div",{style:Ie},a.a.createElement(d.a.Context,{script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_SVG",options:Ae},a.a.createElement(l.a,{renderLeaf:Object(r.useCallback)(Y),renderElement:Object(r.useCallback)(ge),onKeyDown:function(e){return v.onKeyDown(e,t)},autoFocus:!0,spellCheck:!0}))))},Ae={jax:["input/ascii","input/tex","output/SVG"],SVG:{linebreaks:{automatic:!0,width:"container"}},showMathMenu:!1},Ce=[{type:"paragraph",children:[{text:"A line of a paragraph..."}]}],Ie={width:"21cm",minHeight:"29.7cm",margin:"30mm auto 27mm auto",boxShadow:"0px 2px 5px #888888",borderRadius:"3px",border:"15px 0 auto 0",fontSize:"14pt",padding:"3cm 2cm 2cm 3cm"},De=[{type:"paragraph",children:[{text:"A line of a paragraph..."}]}],Fe=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("content"))||De),t=Object(c.a)(e,2),n=t[0],i=t[1],o=function(e){var t=JSON.stringify(e);localStorage.setItem("content",t),console.log(t)};return a.a.createElement(Se,{value:n,onValueChange:function(e){i(e),o(e)}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.4d35964c.chunk.js.map