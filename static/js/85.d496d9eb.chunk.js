"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[85],{85:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n,r,o,s=a(678),i=a(335),c=a(791),l=a(218),u=a(168),d=a(444);const h=d.ZP.form(n||(n=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  max-width: 600px;\n  gap: ",";\n  overflow: hidden;\n"])),(e=>e.theme.spasing(1))),m=d.ZP.input(r||(r=(0,u.Z)(["\n  padding-bottom: ",";  \n  padding-left: ",";  \n  width: 100%;\n  height: 40px;\n  font-size: 20px;\n  border: 1px solid black;\n  border-radius: ",";\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1); \n  &:hover,\n  &:focus,\n  &:active {\n    border-color: ","; \n  }\n  outline: none; \n  &::placeholder {\n    font-size: 16px;\n    padding-left: ",";  \n   \n  }\n"])),(e=>e.theme.spasing(1)),(e=>e.theme.spasing(2)),(e=>e.theme.radii.sm),(e=>e.theme.colors.MediumBlue),(e=>e.theme.spasing(2))),p=d.ZP.button(o||(o=(0,u.Z)(["\n  padding-bottom: ",";  \n  width: 200px;\n  height: 40px;\n  border: 1px solid black;\n  border-radius: ",";\n  outline: none;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1); \n  &:hover,\n  &:focus {\n    border-color: ","; \n  } \n"])),(e=>e.theme.spasing(1)),(e=>e.theme.radii.sm),(e=>e.theme.colors.MediumBlue));var g=a(184);const y=e=>{let{setSearchParams:t}=e;const[a,n]=(0,c.useState)("");return(0,g.jsxs)(h,{onSubmit:e=>{e.preventDefault(),""!==a.trim()?(t({query:a}),n("")):l.ZP.error("Please fill the field!")},children:[(0,g.jsx)(m,{name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:e=>{n(e.target.value.toLowerCase())}}),(0,g.jsx)(p,{type:"submit",children:"Search"})]})};var f=a(641),v=a(87);function w(){const[e,t]=(0,c.useState)([]),[a,n]=(0,v.lr)(),[r,o]=(0,c.useState)(!1),u=a.get("query");return(0,c.useEffect)((()=>{if(!u)return;(async()=>{o(!0);try{const e=await(0,f.vw)(u);if(0===e.length)return void l.ZP.error("Sorry, there are no movies matching your search query. Please try again..");t(e)}catch(e){l.ZP.error("Oops! Something went wrong. Please try again later.",e)}finally{o(!1)}})()}),[u]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y,{setSearchParams:n}),r&&(0,g.jsx)(s.a,{}),(0,g.jsx)(i.O,{movies:e})]})}},335:(e,t,a)=>{a.d(t,{O:()=>h});var n,r,o=a(689),s=a(168),i=a(87),c=a(444);const l=c.ZP.ul(n||(n=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),u=(0,c.ZP)(i.rU)(r||(r=(0,s.Z)([" \n    color: ","; \n    font-size: 18px;\n   &:hover,\n  :focus {\n    color: ",";     \n  }\n"])),(e=>e.theme.colors.black),(e=>e.theme.colors.MediumBlue));var d=a(184);const h=e=>{let{movies:t}=e;const a=(0,o.TH)();return(0,d.jsx)(l,{children:t.map((e=>{let{id:t,original_title:n}=e;return(0,d.jsx)("li",{children:(0,d.jsx)(u,{to:"/movies/".concat(t),state:{from:a},children:n})},t)}))})}},641:(e,t,a)=>{a.d(t,{Hx:()=>l,Y5:()=>i,uV:()=>c,vw:()=>s,wr:()=>o});var n=a(294);n.Z.defaults.baseURL="https://api.themoviedb.org/3";const r="da8b391557d6a67d7aa1304dede81c1a",o=async()=>{try{const e={api_key:r,language:"en-US"},{data:t}=await n.Z.get("/trending/all/day",{params:e});return t.results}catch(e){throw e}},s=async e=>{try{const t={api_key:r,query:e,include_adult:!1,language:"en-US",page:1},{data:a}=await n.Z.get("/search/movie",{params:t});return a.results}catch(t){throw t}},i=async e=>{try{const t={api_key:r,language:"en-US"},{data:a}=await n.Z.get("/movie/".concat(e),{params:t});return a}catch(t){throw t}},c=async e=>{try{const t={api_key:r,language:"en-US"},{data:a}=await n.Z.get("/movie/".concat(e,"/credits"),{params:t});return a.cast}catch(t){throw t}},l=async e=>{try{const t={api_key:r,language:"en-US",page:1},{data:a}=await n.Z.get("/movie/".concat(e,"/reviews"),{params:t});return a.results}catch(t){throw t}}}}]);
//# sourceMappingURL=85.d496d9eb.chunk.js.map