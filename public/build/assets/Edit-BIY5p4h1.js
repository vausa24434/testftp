import{q as u,W as x,j as e,a as g}from"./app-qJ5eKJqO.js";import{C as f,I as h,a as b}from"./IconUsersPlus-ATW6PJ_c.js";import{_ as j,A as v}from"./AppLayout-D_aW46Zk.js";import{I as i}from"./Input-CvexOrWT.js";import{B as w}from"./Button-B0BmMhUK.js";import{C as y}from"./Checkbox-D2Z3pwwY.js";import"./transition-CaRCNoCM.js";import"./keyboard-BDdip_99.js";function N(){const{roles:n,user:d}=u().props,{data:r,setData:l,post:m,errors:t}=x({name:d.name,email:d.email,password:"",password_confirmation:"",selectedRoles:d.roles.map(a=>a.name),_method:"PUT"}),c=a=>{let s=r.selectedRoles;s.some(o=>o===a.target.value)?s=s.filter(o=>o!==a.target.value):s.push(a.target.value),l("selectedRoles",s)},p=async a=>{a.preventDefault(),m(route("apps.users.update",d.id),{onSuccess:()=>{j("Data berhasil disimpan",{icon:"👏",style:{borderRadius:"10px",background:"#1C1F29",color:"#fff"}})}})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Ubah Data Pengguna"}),e.jsxs(f,{title:"Ubah Data Pengguna",icon:e.jsx(h,{size:20,strokeWidth:1.5}),footer:e.jsx(w,{type:"submit",label:"Simpan",icon:e.jsx(b,{size:20,strokeWidth:1.5}),variant:"gray"}),form:p,children:[e.jsxs("div",{className:"mb-4 flex flex-col md:flex-row justify-between gap-4",children:[e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(i,{type:"text",label:"Nama Pengguna",value:r.name,onChange:a=>l("name",a.target.value),errors:t.name})}),e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(i,{type:"email",label:"Email Pengguna",value:r.email,onChange:a=>l("email",a.target.value),errors:t.email,disabled:!0})})]}),e.jsxs("div",{className:"mb-4 flex flex-col md:flex-row gap-4",children:[e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(i,{type:"password",label:"Kata Sandi",value:r.password,onChange:a=>l("password",a.target.value),errors:t.password})}),e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(i,{type:"password",label:"Konfirmasi Kata Sandi",value:r.password_confirmation,onChange:a=>l("password_confirmation",a.target.value),errors:t.password_confirmation})})]}),e.jsx("div",{className:"p-4 rounded-t-lg border bg-white dark:bg-gray-950 dark:border-gray-900",children:e.jsx("div",{className:"flex items-center gap-2 font-semibold text-sm text-gray-700 dark:text-gray-400",children:"Akses Group"})}),e.jsxs("div",{className:"p-4 rounded-b-lg border border-t-0 bg-gray-100 dark:bg-gray-900 dark:border-gray-900",children:[e.jsx("div",{className:"flex flex-row flex-wrap gap-4",children:n.map((a,s)=>e.jsx(y,{label:a.name,value:a.name,onChange:c,defaultChecked:r.selectedRoles.some(o=>o===a.name)},s))}),t.selectedRoles&&e.jsx("div",{className:"text-xs text-red-500 mt-4",children:t.selectedRoles})]})]})]})}N.layout=n=>e.jsx(v,{children:n});export{N as default};
