(this["webpackJsonpweb-frontend"]=this["webpackJsonpweb-frontend"]||[]).push([[0],{148:function(e,a,n){},271:function(e,a,n){"use strict";n.r(a);var r=n(0),o=n.n(r),s=n(40),i=n.n(s),t=(n(148),n(47),n(44)),l=n(2);var c=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(t.b,{className:"item",exact:!0,to:"/",children:"Signup"})}),Object(l.jsx)("li",{children:Object(l.jsx)(t.b,{className:"item",to:"/login",children:"Login"})})]})})})},d=n(68),h=n(30),m=n(305),u=n(304),b=n(66),j=n.n(b),p="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"",x=function(e){console.log("values",e),j.a.post("".concat(p,"/api/v1/signup"),{name:e.name,email:e.email,phone:e.phone,password:e.password}).then((function(e){console.log(e.data)}))},v=h.a({email:h.b("Enter your email").email("Enter a valid email").required("Email is required"),name:h.b("Enter your password").min(4,"Name should be of minimum 4 characters length").required("Name is required"),phone:h.b("Enter your phone no.").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").min(11,"Phone should contain 11 digits").max(11,"Phone should contain 11 digits").required("phone number is required"),password:h.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")});var O=function(){var e=Object(d.a)({validationSchema:v,initialValues:{email:"",name:"",phone:"",password:""},onSubmit:x});return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"main",children:Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("h3",{children:" Sign up Form "}),Object(l.jsx)(u.a,{id:"outlined-basic",name:"name",label:"name",className:"box",value:e.values.name,onChange:e.handleChange,error:e.touched.name&&Boolean(e.errors.name),helperText:e.touched.name&&e.errors.name,variant:"outlined"}),Object(l.jsx)(u.a,{id:"outlined-basic",name:"email",label:"email",className:"box",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email,variant:"outlined"}),Object(l.jsx)(u.a,{id:"outlined-basic",name:"phone",label:"phone",className:"box",value:e.values.phone,onChange:e.handleChange,error:e.touched.phone&&Boolean(e.errors.phone),helperText:e.touched.phone&&e.errors.phone,variant:"outlined"}),Object(l.jsx)(u.a,{id:"outlined-basic",name:"password",label:"password",type:"password",className:"box",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password,variant:"outlined"}),Object(l.jsx)(m.a,{id:"btn",variant:"contained",color:"success",type:"submit",children:"Submit"})]})})})})},g=n(18),w=h.a({email:h.b("Enter your email").email("Enter a valid email").required("Email is required"),password:h.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")});var f=function(){var e=Object(g.f)(),a=Object(d.a)({validationSchema:w,initialValues:{email:"",password:""},onSubmit:function(a){console.log("values",a),j.a.post("".concat(p,"/api/v1/login"),{email:a.email,password:a.password}).then((function(a){console.log(a.data),localStorage.setItem("name",a.data.name),a.data.email&&setTimeout((function(){e.push("/dashboard")}),2e3)}))}});return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"main",children:Object(l.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(l.jsx)("h3",{children:" Login Form "}),Object(l.jsx)(u.a,{id:"outlined-basic",name:"email",label:"email",className:"box",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email,variant:"outlined"}),Object(l.jsx)(u.a,{id:"outlined-basic",name:"password",label:"password",type:"password",className:"box",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password,variant:"outlined"}),Object(l.jsx)(m.a,{id:"btn",variant:"contained",color:"success",type:"submit",children:"Submit"})]})})})})};var S=function(){return Object(l.jsxs)("h1",{id:"wlm",children:["Welcome ",Object(l.jsx)("span",{id:"name",children:localStorage.getItem("name")})," "]})};var C=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(t.a,{children:[Object(l.jsx)(c,{}),Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{path:"/dashboard",children:Object(l.jsx)(S,{})}),Object(l.jsx)(g.a,{path:"/login",children:Object(l.jsx)(f,{})}),Object(l.jsx)(g.a,{exact:!0,path:"/",children:Object(l.jsx)(O,{})})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,307)).then((function(a){var n=a.getCLS,r=a.getFID,o=a.getFCP,s=a.getLCP,i=a.getTTFB;n(e),r(e),o(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),N()},47:function(e,a,n){}},[[271,1,2]]]);
//# sourceMappingURL=main.82124f40.chunk.js.map