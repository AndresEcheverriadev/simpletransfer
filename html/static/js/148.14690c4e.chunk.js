"use strict";(self.webpackChunkfcr_web=self.webpackChunkfcr_web||[]).push([[148],{3148:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var a=t(4165),r=t(5861),o=t(885),s=t(2791),i=t(1087),l=t(5579),c=t(1699),u=t(6907),d=t(8956),m=t(1413),h=t(6157),p=t(2701),g=t(184);var x=function(e){var n=(0,s.useState)({date:"",nombre:"",segundoNombre:"",paterno:"",materno:"",mesaggesWall:[],lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),t=(0,o.Z)(n,2),i=t[0],l=t[1];function c(e){return l((function(n){return(0,m.Z)((0,m.Z)({},n),e)}))}function u(){return(u=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t=sessionStorage.getItem("token"),r=(0,m.Z)({},i),e.next=5,fetch("".concat("https://www.cristoreyangol.cl:8080/createRecord/add"),{method:"POST",headers:{authorization:"".concat(t),"Content-Type":"application/json"},body:JSON.stringify(r)}).catch((function(e){window.alert("".concat(e.response.status," ").concat(e.response.statusText))}));case 5:l({date:"",nombre:"",segundoNombre:"",paterno:"",materno:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),window.location.reload(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,g.jsxs)(p.Z,(0,m.Z)((0,m.Z)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,g.jsx)(p.Z.Header,{closeButton:!0,children:(0,g.jsx)(p.Z.Title,{id:"contained-modal-title-vcenter",children:"Agregar al obituario"})}),(0,g.jsx)(p.Z.Body,{children:(0,g.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},id:"formAdd",className:"formContainer",children:[(0,g.jsx)("h5",{children:"Datos del fallecido"}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"date",children:"Fecha del fallecimiento:"}),(0,g.jsx)("input",{type:"date",name:"date",id:"date",value:i.date,onChange:function(e){return c({date:e.target.value})}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"nombreDeceso",children:"Nombre del fallecido:"}),(0,g.jsx)("input",{type:"text",name:"nombreDeceso",id:"nombreDeceso",value:i.nombre,onChange:function(e){return c({nombre:e.target.value})}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"segundoNombreDeceso",children:"Segundo Nombre del fallecido:"}),(0,g.jsx)("input",{type:"text",name:"segundoNombreDeceso",id:"segundoNombreDeceso",value:i.segundoNombre,onChange:function(e){return c({segundoNombre:e.target.value})}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"paternoDeceso",children:"Apellido paterno:"}),(0,g.jsx)("input",{type:"text",name:"paternoDeceso",id:"paternoDeceso",value:i.paterno,onChange:function(e){return c({paterno:e.target.value})}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"maternoDeceso",children:"Apellido materno:"}),(0,g.jsx)("input",{type:"text",name:"maternoDeceso",id:"maternoDeceso",value:i.materno,onChange:function(e){return c({materno:e.target.value})}})]}),(0,g.jsx)("h5",{children:"Datos del funeral"}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"lugarVelatorio",children:"lugar velatorio:"}),(0,g.jsx)("input",{type:"text",name:"lugarVelatorio",id:"lugarVelatorio",value:i.lugarVelatorio,onChange:function(e){return c({lugarVelatorio:e.target.value})}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"lugarResponso",children:"lugar responso:"}),(0,g.jsx)("input",{type:"text",name:"lugarResponso",id:"lugarResponso",value:i.lugarResponso,onChange:function(e){return c({lugarResponso:e.target.value})}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"fechaResponso",children:"fecha responso:"}),(0,g.jsx)("input",{type:"date",name:"fechaResponso",id:"fechaResponso",value:i.fechaResponso,onChange:function(e){return c({fechaResponso:e.target.value})}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"lugarCementerio",children:"lugar cementerio:"}),(0,g.jsx)("input",{list:"cementerios",type:"text",name:"lugarCementerio",id:"lugarCementerio",value:i.lugarCementerio,onChange:function(e){return c({lugarCementerio:e.target.value})}}),(0,g.jsxs)("datalist",{id:"cementerios",children:[(0,g.jsx)("option",{value:"Cementerio Parque Angol",children:"Cementerio Parque Angol"}),(0,g.jsx)("option",{value:"Cementerio Parroquial Angol",children:"Cementerio Parroquial Angol"}),(0,g.jsx)("option",{value:"Cementerio municipal Angol",children:"Cementerio Municipal Angol"})]})]})]})}),(0,g.jsxs)(p.Z.Footer,{children:[(0,g.jsx)(h.Z,{onClick:e.onHide,children:"Cerrar"}),(0,g.jsx)(h.Z,{type:"submit",form:"formAdd",className:"btn btn-primary btnAgregar",children:"Agregar"})]})]}))};var f=function(e){(0,s.useEffect)((function(){l(e.data)}),[e.data]);var n=(0,s.useState)({id:"",date:"",nombre:"",segundoNombre:"",paterno:"",materno:""}),t=(0,o.Z)(n,2),i=t[0],l=t[1];function c(){return(c=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t=sessionStorage.getItem("token"),r=i.id,o={id:i.id,date:i.date,nombre:i.nombre,segundoNombre:i.segundoNombre,paterno:i.paterno,materno:i.materno},e.next=6,fetch("".concat("https://www.cristoreyangol.cl:8080/createRecord/updatePersonales","/").concat(r),{method:"POST",headers:{authorization:"".concat(t),"Content-Type":"application/json"},body:JSON.stringify(o)}).catch((function(e){window.alert(e)}));case 6:window.location.reload(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,g.jsxs)(p.Z,(0,m.Z)((0,m.Z)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,g.jsx)(p.Z.Header,{closeButton:!0,children:(0,g.jsx)(p.Z.Title,{id:"contained-modal-title-vcenter",children:"Editar datos personales"})}),(0,g.jsx)(p.Z.Body,{children:(0,g.jsxs)("form",{onSubmit:function(e){return function(e){return c.apply(this,arguments)}(e)},className:"formContainer",id:"formActualizarPersonales",children:[(0,g.jsx)("hr",{}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"date",children:"Fecha del fallecimiento:"}),(0,g.jsx)("input",{type:"date",name:"date",value:i.date,onChange:function(e){return l((0,m.Z)((0,m.Z)({},i),{},{date:e.target.value}))}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"nombreDeceso",children:"Nombre del fallecido:"}),(0,g.jsx)("input",{type:"text",name:"nombreDeceso",value:i.nombre,onChange:function(e){return l((0,m.Z)((0,m.Z)({},i),{},{nombre:e.target.value}))}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"segundoNombreDeceso",children:"Segundo Nombre del fallecido:"}),(0,g.jsx)("input",{type:"text",name:"segundoNombreDeceso",value:i.segundoNombre,onChange:function(e){return l((0,m.Z)((0,m.Z)({},i),{},{segundoNombre:e.target.value}))}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"paternoDeceso",children:"Apellido paterno:"}),(0,g.jsx)("input",{type:"text",name:"paternoDeceso",value:i.paterno,onChange:function(e){return l((0,m.Z)((0,m.Z)({},i),{},{paterno:e.target.value}))}})]}),(0,g.jsxs)("div",{className:"inputContainer",children:[(0,g.jsx)("label",{htmlFor:"maternoDeceso",children:"Apellido materno:"}),(0,g.jsx)("input",{type:"text",name:"maternoDeceso",value:i.materno,onChange:function(e){return l((0,m.Z)((0,m.Z)({},i),{},{materno:e.target.value}))}})]})]})}),(0,g.jsxs)(p.Z.Footer,{children:[(0,g.jsx)(h.Z,{onClick:e.onHide,children:"Cerrar"}),(0,g.jsx)(h.Z,{type:"submit",form:"formActualizarPersonales",className:"btn btn-primary btnAgregar",children:"Actualizar"})]})]}))};var b=function(){var e=(0,s.useContext)(l.O).logOut,n=(0,s.useState)([]),t=(0,o.Z)(n,2),m=t[0],h=t[1],p=(0,s.useState)({data:""}),b=(0,o.Z)(p,2),j=b[0],v=b[1],C=(0,s.useState)({id:"",date:"",nombre:"",segundoNombre:"",paterno:"",materno:""}),Z=(0,o.Z)(C,2),N=Z[0],w=Z[1],y=(0,s.useState)({id:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),D=(0,o.Z)(y,2),A=(D[0],D[1]);function R(){return(R=(0,r.Z)((0,a.Z)().mark((function e(n,t){var r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=sessionStorage.getItem("token"),(o=new FormData).append("imgDeceso",j.data),e.next=6,fetch("".concat("https://www.cristoreyangol.cl:8080/createRecord/addImage","/").concat(n),{method:"POST",headers:{authorization:"".concat(r)},body:o}).catch((function(e){window.alert(e)}));case 6:e.sent&&(v({data:""}),window.location.reload(!1));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,s.useEffect)((function(){function e(){return e=(0,r.Z)((0,a.Z)().mark((function e(){var n,t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.cristoreyangol.cl:8080/record"));case 2:if((n=e.sent).ok){e.next=7;break}return t="An error occurred: ".concat(n.statusText),window.alert(t),e.abrupt("return");case 7:return e.next=9,n.json();case 9:r=e.sent,h(r.data);case 11:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m.length]);var S=function(e){var n={data:e.target.files[0]};v(n)};function k(){return(k=(0,r.Z)((0,a.Z)().mark((function e(n,t,r,o,s,i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),A({id:t,lugarVelatorio:r,lugarResponso:o,fechaResponso:s,lugarCementerio:i});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=(0,r.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=sessionStorage.getItem("token"),e.next=3,fetch("".concat("https://www.cristoreyangol.cl:8080/createRecord","/").concat(n),{method:"DELETE",headers:{authorization:"".concat(t),"Content-Type":"application/json"}}).catch((function(e){window.alert(e)}));case 3:window.location.reload(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=(0,g.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16",children:(0,g.jsx)("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})}),P=(0,s.useState)(!1),E=(0,o.Z)(P,2),T=E[0],z=E[1],V=(0,s.useState)(!1),I=(0,o.Z)(V,2),_=I[0],H=I[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(u.B6,{children:[(0,g.jsx)(u.ql,{children:(0,g.jsx)("meta",{name:"robots",content:"noindex, nofollow"})}),(0,g.jsx)("title",{children:"Servicios Funerarios Cristo Rey Angol"})]}),(0,g.jsxs)("div",{className:"mnanagerPageMainWrapper",children:[(0,g.jsx)("header",{className:"managerHeaderContainer",children:(0,g.jsx)(c.Z,{})}),(0,g.jsx)(x,{show:T,onHide:function(){return z(!1)}}),(0,g.jsx)(f,{show:_,onHide:function(){return H(!1)},data:N}),(0,g.jsxs)("main",{className:"managerPageMainContainer",children:[(0,g.jsx)("h1",{children:"Manager de Obituario"}),(0,g.jsx)("button",{type:"submit",className:"btnLogoutObituario",onClick:function(){return e()},children:"Salir"}),(0,g.jsx)("div",{className:"addObituarioContainer",children:(0,g.jsxs)("button",{className:"btnAddObituario","data-bs-toggle":"modal","data-bs-target":"#modalAgregarObituario",onClick:function(){return z(!0)},children:["Agregar al obituario",O]})}),(0,g.jsx)("div",{className:"managerCardsContainer",children:m.map((function(e){return(0,g.jsxs)("div",{className:"managerDecesoCard",children:[(0,g.jsxs)(i.OL,{to:"/obituario/".concat(e._id),className:"managerDecesoPersona",children:[(0,g.jsx)("div",{className:"managerDecesoImagen",children:(0,g.jsx)("img",{src:e.img,alt:""})}),(0,g.jsxs)("h5",{className:"managerDecesoNombre",children:[e.nombre," ",e.paterno]}),(0,g.jsx)("p",{className:"managerDecesoFecha",children:e.date})]}),(0,g.jsxs)("div",{className:"controlsWrapper",children:[(0,g.jsxs)("div",{className:"managerDecesoControls",children:[(0,g.jsx)("button",{className:"btnCtrlObituario",onClick:function(n){return function(e,n,t,a,r,o,s){e.preventDefault(),w({id:n,date:t,nombre:a,segundoNombre:r,paterno:o,materno:s}),H(!0)}(n,e._id,e.date,e.nombre,e.segundoNombre,e.paterno,e.materno)},children:"Editar datos personales"}),(0,g.jsx)("button",{className:"btnCtrlObituario","data-bs-toggle":"modal","data-bs-target":"#modalActualizarFuneral",onClick:function(n){return function(e,n,t,a,r,o){return k.apply(this,arguments)}(n,e._id,e.lugarVelatorio,e.lugarResponso,e.fechaResponso,e.lugarCementerio)},children:"Editar datos funeral"})]}),(0,g.jsxs)("form",{className:"formImg",id:"formImg",onSubmit:function(n){return function(e,n){return R.apply(this,arguments)}(e._id,n)},enctype:"multipart/form-data",children:[(0,g.jsx)("input",{type:"file",name:"imgDeceso",id:"imgDeceso",accept:"image/*",filename:j.data,onChange:S}),(0,g.jsx)("button",{type:"submit",class:"btnCtrlObituario",children:"Agregar imagen"})]}),(0,g.jsx)(d.Z,{class:"accordion",id:"accordionExample",children:(0,g.jsxs)(d.Z.Item,{eventKey:"0",class:"accordion-item",children:[(0,g.jsx)(d.Z.Header,{class:"accordion-header",id:"headingOne",children:"Eliminar"}),(0,g.jsx)(d.Z.Body,{class:"accordion-body",children:(0,g.jsx)("button",{id:"btnDelete".concat(e._id),className:"btnDeleteObituario",onClick:function(){return function(e){return F.apply(this,arguments)}(e._id)},children:"Eliminar del obituario"})})]})})]})]},e._id)}))})]})]})]})}}}]);
//# sourceMappingURL=148.14690c4e.chunk.js.map