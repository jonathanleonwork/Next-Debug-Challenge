(()=>{var e={};e.id=167,e.ids=[167],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4962:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),s(4),s(7764),s(5866);var r=s(3191),n=s(8716),a=s(7922),i=s.n(a),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["test",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4)),"D:\\DEBUG-CHALLENGE\\app\\test\\[id]\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7764)),"D:\\DEBUG-CHALLENGE\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\DEBUG-CHALLENGE\\app\\test\\[id]\\page.js"],u="/test/[id]/page",p={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/test/[id]/page",pathname:"/test/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3697:(e,t,s)=>{Promise.resolve().then(s.bind(s,2571))},2823:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},4923:()=>{},2571:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var r=s(326),n=s(7577);function a(){let[e,t]=(0,n.useState)(!1),[s,a]=(0,n.useState)(!1);return r.jsx("button",{className:`rounded  px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-white/20 mt-10 ${e?"bg-green-500/90":"bg-red-500/90"}`,onClick:()=>{fetch("http://localhost:3000//api/ping",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:"ping"})}).then(e=>e.json()).then(e=>{e&&"success"===e.status?(t(!0),alert("Success")):(t(!1),alert("Error"))})},children:s?"Click here":"Click me"})}},7764:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>i});var r=s(9510),n=s(2002),a=s.n(n);s(7272);let i={title:"No Title"};function o({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:a().className,children:e})})}},4:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,generateMetadata:()=>d});var r=s(9510),n=s(8570);let a=(0,n.createProxy)(String.raw`D:\DEBUG-CHALLENGE\components\Text.js`),{__esModule:i,$$typeof:o}=a;a.default;let l=(0,n.createProxy)(String.raw`D:\DEBUG-CHALLENGE\components\Text.js#default`);async function d({params:e}){return{title:`Test Page - ${e.id}`}}function c({params:e}){let{id:t}=e;return(0,r.jsxs)("main",{className:"flex min-h-screen flex-col items-center p-24 font-mono bg-black",children:[r.jsx("span",{className:"text-green-500",children:"Test Page"}),r.jsx("span",{className:"text-start w-full text-white items-center font-bold mt-10",children:"Instructions:"}),(0,r.jsxs)("div",{className:"max-w-5xl w-full items-start justify-between text-sm flex-col flex mt-2 text-white",children:[(0,r.jsxs)("ul",{className:"mt-4 list-disc space-y-4",children:[r.jsx("li",{children:"Design should be similar to the provided design."}),r.jsx("li",{children:"Clickable button should work. It should make a network request to the API endpoint and display a success message and turn from red to green."}),r.jsx("li",{children:"There shouldn't be any errors anywhere in the browser console or in the terminal when the project is running. (except for dependency deprecation warnings)"}),(0,r.jsxs)("li",{children:["Page Slug ID should be displayed correctly: ",t,r.jsx("br",{}),r.jsx("span",{className:"text-gray-300",children:"For example, if the current path is /test/123, the page slug ID should be 123 and the above text should display 123."})]}),(0,r.jsxs)("li",{children:["Metadata (title) should be set to 'Test Page - Slug ID'",r.jsx("br",{}),(0,r.jsxs)("span",{className:"text-gray-300",children:["For example, if the current path is /test/35, the page title should be 'Test Page - 35'."," "]})]}),r.jsx("li",{children:"Project should build successfully (`npm run build`)."})]}),r.jsx("span",{className:"text-blue-400 mt-10",children:"Please create a ZIP file of the project and send it to us through email when this page is ready."})]}),r.jsx(l,{})]})}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,950,621],()=>s(4962));module.exports=r})();