"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[925],{925:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a,r,s,i=n(678),o=n(641),c=n(791),l=n(218),d=n(689),h=n(28),m=n(168),u=n(87),g=n(444);const p=g.ZP.div(a||(a=(0,m.Z)(["\n  max-width: 95%;\n  padding-bottom: ",";\n  margin-bottom: ",";\n  display: flex;\n  gap: ",";\n  border-bottom: 1px solid ","; \n"])),(e=>e.theme.spasing(4)),(e=>e.theme.spasing(4)),(e=>e.theme.spasing(4)),(e=>e.theme.colors.MediumBlue)),v=g.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(e=>e.theme.spasing(2))),x=(0,g.ZP)(u.OL)(s||(s=(0,m.Z)(["\n  color: ","; \n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus,\n  &.active {\n    color: ","; \n  }\n"])),(e=>e.theme.colors.MediumBlue),(e=>e.theme.colors.Orange));var j=n(184);const w=e=>{let{description:{title:t,vote_average:n,genres:a,overview:r,poster_path:s,runtime:i}}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(p,{children:[(0,j.jsx)("img",{src:s?"https://image.tmdb.org/t/p/original/"+"".concat(s):"https://image.tmdb.org/t/p/original//nQvoM7BMswq1raENOkOjCBt94gk.jpg",width:200,alt:t}),(0,j.jsxs)(v,{children:[(0,j.jsx)("h1",{children:t}),(0,j.jsxs)("p",{children:["Rating: ",Math.round(n)]}),(0,j.jsxs)("p",{children:["Duration: ",i," min."]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:r}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("ul",{children:null===a||void 0===a?void 0:a.map((e=>(0,j.jsx)("li",{children:e.name},e.id)))})]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(x,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(x,{to:"reviews",children:"Reviews"})})]})]})]})};var y;const f=(0,g.ZP)(u.OL)(y||(y=(0,m.Z)(["\n  color: ","; \n  margin-bottom: ",";\n  display: flex;\n  gap: ",";\n  align-items: center;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: ","; \n  }\n"])),(e=>e.theme.colors.MediumBlue),(e=>e.theme.spasing(4)),(e=>e.theme.spasing(1)),(e=>e.theme.colors.Orange));function b(){var e,t;const[n,a]=(0,c.useState)(null),{movieId:r}=(0,d.UO)(),[s,m]=(0,c.useState)(!1),[u,g]=(0,c.useState)(null),p=(0,d.TH)(),v=(0,c.useRef)(null!==(e=null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,c.useEffect)((()=>{if(!r)return;m(!0),g(!1);(async()=>{try{const e=await(0,o.Y5)(r);a(e)}catch(u){g(!0)}finally{m(!1)}})()}),[r]),(0,j.jsxs)("div",{children:[(0,j.jsxs)(f,{to:v.current,children:[(0,j.jsx)(h.hPZ,{}),"Go back"]}),s&&(0,j.jsx)(i.a,{}),u&&l.ZP.error("Oops! Something went wrong. Please try again later"),n&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{description:n}),(0,j.jsx)(c.Suspense,{fallback:(0,j.jsx)(i.a,{}),children:(0,j.jsx)(d.j3,{})})]})]})}},641:(e,t,n)=>{n.d(t,{Hx:()=>l,Y5:()=>o,uV:()=>c,vw:()=>i,wr:()=>s});var a=n(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3";const r="da8b391557d6a67d7aa1304dede81c1a",s=async()=>{try{const e={api_key:r,language:"en-US"},{data:t}=await a.Z.get("/trending/movie/day",{params:e});return t.results}catch(e){throw e}},i=async e=>{try{const t={api_key:r,query:e,include_adult:!1,language:"en-US",page:1},{data:n}=await a.Z.get("/search/movie",{params:t});return n.results}catch(t){throw t}},o=async e=>{try{const t={api_key:r,language:"en-US"},{data:n}=await a.Z.get("/movie/".concat(e),{params:t});return n}catch(t){throw t}},c=async e=>{try{const t={api_key:r,language:"en-US"},{data:n}=await a.Z.get("/movie/".concat(e,"/credits"),{params:t});return n.cast}catch(t){throw t}},l=async e=>{try{const t={api_key:r,language:"en-US",page:1},{data:n}=await a.Z.get("/movie/".concat(e,"/reviews"),{params:t});return n.results}catch(t){throw t}}}}]);
//# sourceMappingURL=925.6f633b58.chunk.js.map