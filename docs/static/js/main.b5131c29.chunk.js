(this.webpackJsonpclover=this.webpackJsonpclover||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),i=t.n(a),s=t(7),o=t.n(s),r=(t(14),t(8)),l=t(4),u=t(2),d=t.n(u);var j=function(e){var n=e.item,t=e.onCheck;return Object(c.jsxs)("label",{className:"panel-block",children:[Object(c.jsx)("input",{type:"checkbox",checked:n.done,onChange:function(){t(n)}}),Object(c.jsx)("span",{className:d()({"has-text-grey-light":n.done}),children:n.text})]})};var b=function(e){var n=e.onAdd,t=Object(a.useState)(""),i=Object(l.a)(t,2),s=i[0],o=i[1];return Object(c.jsx)("div",{className:"panel-block",children:Object(c.jsx)("input",{className:"input",type:"text",placeholder:"Enter to add",value:s,onChange:function(e){return o(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(n(s),o(""))}})})};var O=function(e){var n=e.value,t=e.onChange,a=function(e,n){n.preventDefault(),t(e)};return Object(c.jsxs)("div",{className:"panel-tabs",children:[Object(c.jsx)("a",{href:"#",onClick:a.bind(null,"ALL"),className:d()({"is-active":"ALL"===n}),children:"All"}),Object(c.jsx)("a",{href:"#",onClick:a.bind(null,"TODO"),className:d()({"is-active":"TODO"===n}),children:"ToDo"}),Object(c.jsx)("a",{href:"#",onClick:a.bind(null,"DONE"),className:d()({"is-active":"DONE"===n}),children:"Done"})]})};var h=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],i=n[1],s=Object(a.useState)("ALL"),o=Object(l.a)(s,2),u=o[0],d=o[1],h=t.filter((function(e){return"ALL"===u||("TODO"===u?!e.done:"DONE"===u?e.done:void 0)})),v=function(e){var n=t.map((function(n){return n.key===e.key&&(n.done=!n.done),n}));i(n)};return Object(c.jsxs)("div",{className:"panel",children:[Object(c.jsx)("div",{className:"panel-heading",children:"\u269b\ufe0f React ToDo"}),Object(c.jsx)(b,{onAdd:function(e){i([].concat(Object(r.a)(t),[{key:Math.random().toString(32).substring(2),text:e,done:!1}]))}}),Object(c.jsx)(O,{onChange:function(e){return d(e)},value:u}),h.map((function(e){return Object(c.jsx)(j,{item:e,onCheck:v},e.key)})),Object(c.jsxs)("div",{className:"panel-block",children:[h.length," items"]})]})};t(15);var v=function(){return Object(c.jsx)("div",{className:"container is-fluid",children:Object(c.jsx)(h,{})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),i(e),s(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.b5131c29.chunk.js.map