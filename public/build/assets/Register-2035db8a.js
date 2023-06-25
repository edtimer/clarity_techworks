import{T as _,e as c,b as e,u as o,w as l,F as g,o as f,Z as w,a as r,g as d,f as h,j as v,n as y,i as V}from"./app-ca2d4a65.js";import{A as b}from"./AuthenticationCard-96e39edb.js";import{_ as k}from"./AuthenticationCardLogo-13297c5e.js";import{_ as x}from"./Checkbox-5f3c5524.js";import{_ as u,a as i}from"./TextInput-d48e3b97.js";import{_ as n}from"./InputLabel-7b45aafd.js";import{_ as $}from"./PrimaryButton-6e15333c.js";import"./_plugin-vue_export-helper-c27b6911.js";const P=["onSubmit"],q={class:"mt-4"},C={class:"mt-4"},N={class:"mt-4"},U={key:0,class:"mt-4"},A={class:"flex items-center"},F={class:"ml-2"},T=["href"],j=["href"],B={class:"flex items-center justify-end mt-4"},H={__name:"Register",setup(R){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(m,a)=>(f(),c(g,null,[e(o(w),{title:"Register"}),e(b,null,{logo:l(()=>[e(k)]),default:l(()=>[r("form",{onSubmit:V(p,["prevent"])},[r("div",null,[e(n,{for:"name",value:"Name"}),e(u,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),r("div",q,[e(n,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),r("div",C,[e(n,{for:"password",value:"Password"}),e(u,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),r("div",N,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),m.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(f(),c("div",U,[e(n,{for:"terms"},{default:l(()=>[r("div",A,[e(x,{id:"terms",checked:o(s).terms,"onUpdate:checked":a[4]||(a[4]=t=>o(s).terms=t),name:"terms",required:""},null,8,["checked"]),r("div",F,[d(" I agree to the "),r("a",{target:"_blank",href:m.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,T),d(" and "),r("a",{target:"_blank",href:m.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,j)])]),e(i,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),r("div",B,[e(o(v),{href:m.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:l(()=>[d(" Already registered? ")]),_:1},8,["href"]),e($,{class:y(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:l(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{H as default};
