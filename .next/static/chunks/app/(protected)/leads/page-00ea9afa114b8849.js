(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{8398:function(e,t,a){Promise.resolve().then(a.bind(a,8707))},8729:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(7437);a(2265);var n=function(e){let{styleClass:t,children:a}=e;return(0,s.jsx)("div",{className:"text-xl font-semibold ".concat(t),children:a})},i=function(e){let{title:t,children:a,topMargin:i,TopSideButtons:d}=e;return(0,s.jsxs)("div",{className:"card w-full p-6 bg-base-100 shadow-xl "+(i||"mt-6"),children:[(0,s.jsxs)(n,{styleClass:d?"inline-block":"",children:[t,d&&(0,s.jsx)("div",{className:"inline-block float-right",children:d})]}),(0,s.jsx)("div",{className:"divider mt-2"}),(0,s.jsx)("div",{className:"h-full w-full pb-6 bg-base-100",children:a})]})}},2253:function(e,t,a){"use strict";a.d(t,{Mr:function(){return i},h7:function(){return n}});let s=(0,a(5972).oM)({name:"modal",initialState:{title:"",isOpen:!1,bodyType:"",size:"",extraObject:{}},reducers:{openModal:(e,t)=>{let{title:a,bodyType:s,extraObject:n,size:i}=t.payload;e.isOpen=!0,e.bodyType=s,e.title=a,e.size=i||"md",e.extraObject=n},closeModal:e=>{e.isOpen=!1,e.bodyType="",e.title="",e.extraObject={}}}}),{openModal:n,closeModal:i}=s.actions;t.ZP=s.reducer},8707:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var s=a(7437),n=a(2151),i=a.n(n),d=a(2265);let r=d.forwardRef(function({title:e,titleId:t,...a},s){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},a),e?d.createElement("title",{id:t},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))});var l=a(6623),c=a(7381),o=a(8729),u=a(6990),h=a(2253);let m=()=>{let e=(0,l.TL)();return(0,s.jsx)("div",{className:"inline-block float-right",children:(0,s.jsx)("button",{className:"btn px-6 btn-sm normal-case btn-primary",onClick:()=>{e((0,h.h7)({title:"Add New Lead",bodyType:c.aq.LEAD_ADD_NEW}))},children:"Add New"})})};var x=function(){let e=(0,l.TL)(),{leads:t}=(0,l.CG)(e=>e.leads);(0,d.useEffect)(()=>{e((0,u.Y8)())},[e]);let a=e=>e%5==0?(0,s.jsx)("div",{className:"badge",children:"Not Interested"}):e%5==1?(0,s.jsx)("div",{className:"badge badge-primary",children:"In Progress"}):e%5==2?(0,s.jsx)("div",{className:"badge badge-secondary",children:"Sold"}):e%5==3?(0,s.jsx)("div",{className:"badge badge-accent",children:"Need Followup"}):(0,s.jsx)("div",{className:"badge badge-ghost",children:"Open"}),n=t=>{e((0,h.h7)({title:"Confirmation",bodyType:c.aq.CONFIRMATION,extraObject:{message:"Are you sure you want to delete this lead?",type:c.A.LEAD_DELETE,index:t}}))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{title:"Current Leads",topMargin:"mt-2",TopSideButtons:(0,s.jsx)(m,{}),children:(0,s.jsx)("div",{className:"overflow-x-auto w-full",children:(0,s.jsxs)("table",{className:"table w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Email Id"}),(0,s.jsx)("th",{children:"Created At"}),(0,s.jsx)("th",{children:"Status"}),(0,s.jsx)("th",{children:"Assigned To"}),(0,s.jsx)("th",{})]})}),(0,s.jsx)("tbody",{children:t.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,s.jsx)("div",{className:"avatar",children:(0,s.jsx)("div",{className:"mask mask-squircle w-12 h-12",children:(0,s.jsx)("img",{src:e.avatar,alt:"Avatar"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-bold",children:e.first_name}),(0,s.jsx)("div",{className:"text-sm opacity-50",children:e.last_name})]})]})}),(0,s.jsx)("td",{children:e.email}),(0,s.jsx)("td",{children:i()(new Date).add(-5*(t+2),"days").format("DD MMM YY")}),(0,s.jsx)("td",{children:a(t)}),(0,s.jsx)("td",{children:e.last_name}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"btn btn-square btn-ghost",onClick:()=>n(t),children:(0,s.jsx)(r,{className:"w-5"})})})]},t))})]})})})})}},6990:function(e,t,a){"use strict";a.d(t,{Y8:function(){return i},Yf:function(){return r},u9:function(){return l}});var s=a(5972),n=a(7908);let i=(0,s.hg)("leads/getLeadsContent",async e=>(await n.Z.get("/api/users?page=2")).data),d=(0,s.oM)({name:"leads",initialState:{isLoading:!1,leads:[]},reducers:{addNewLead:(e,t)=>{e.leads.push(t.payload.newLeadObj)},deleteLead:(e,t)=>{e.leads.splice(t.payload.index,1)}},extraReducers:e=>{e.addCase(i.pending,e=>{e.isLoading=!0}),e.addCase(i.fulfilled,(e,t)=>{e.isLoading=!1,console.log(t.payload.data),e.leads=t.payload.data}),e.addCase(i.rejected,e=>{e.isLoading=!1})}}),{addNewLead:r,deleteLead:l}=d.actions;t.ZP=d.reducer},7381:function(e,t,a){"use strict";a.d(t,{A:function(){return d},Qn:function(){return i},aq:function(){return n},iC:function(){return s}});let s="Test Ali",n=Object.freeze({DEFAULT:"DEFAULT",LEAD_ADD_NEW:"LEAD_ADD_NEW"}),i=Object.freeze({DEFAULT:"DEFAULT",NOTIFICATION:"NOTIFICATION"}),d=Object.freeze({DEFAULT:"DEFAULT"})},6623:function(e,t,a){"use strict";a.d(t,{CG:function(){return i},TL:function(){return n}});var s=a(828);let n=s.I0.withTypes(),i=s.v9.withTypes();s.oR.withTypes()}},function(e){e.O(0,[990,908,181,971,69,744],function(){return e(e.s=8398)}),_N_E=e.O()}]);