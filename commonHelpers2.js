import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},r=document.querySelector(".feedback-form"),o="feedback-form-state";window.addEventListener("load",function(){const e=JSON.parse(this.localStorage.getItem(o));e&&Array.from(r.elements).forEach(function(a){a.name&&e[a.name]&&(a.value=e[a.name],t[a.name]=e[a.name])})});r.addEventListener("input",function(e){(e.target.name==="email"||e.target.name==="message")&&(t[e.target.name]=e.target.value,localStorage.setItem(o,JSON.stringify(t)))});r.addEventListener("submit",function(e){e.preventDefault();let a=!0;Array.from(r.elements).forEach(function(i){if(i.name&&i.value.trim()===""){a=!1,alert("Fill please all fields");return}}),a&&(console.log(t),localStorage.removeItem(o),r.reset(),t.email="",t.message="")});
//# sourceMappingURL=commonHelpers2.js.map
