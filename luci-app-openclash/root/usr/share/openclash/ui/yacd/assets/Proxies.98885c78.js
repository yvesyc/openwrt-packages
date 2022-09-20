import{r as g,j as r,i as $,c as w,T as xe,b as i,B as b,h as f,U as _e,V as ve,W as ee,X as te,d as C,Y as ge,F as T,Z as be,$ as ne,a0 as M,x as D,a1 as we,a2 as re,a3 as O,a4 as oe,a5 as H,a6 as U,a7 as Ce,a8 as ke,u as q,a9 as Pe,aa as Se,ab as Ne,g as se,C as ae,y as V,ac as $e,m as W,M as Ae,ad as Le,ae as Oe,af as Te,ag as De}from"./index.2addc377.js";import{C as Be}from"./chevron-down.0fe59cac.js";import{F as Ie,p as Fe,A as je,I as Re}from"./Fab.ac4f3b29.js";import{R as ze,a as Me,T as He}from"./TextFitler.3362aec6.js";import{f as Ue}from"./index.47b45d26.js";import{S as qe}from"./Select.ef9dc454.js";import"./debounce.c2d20996.js";function Ee(e,t){if(e==null)return{};var n=Ke(e,t),o,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(n[o]=e[o]))}return n}function Ke(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var E=g.exports.forwardRef(function(e,t){var n=e.color,o=n===void 0?"currentColor":n,s=e.size,a=s===void 0?24:s,l=Ee(e,["color","size"]);return r("svg",{ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:r("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})});E.propTypes={color:$.exports.string,size:$.exports.oneOfType([$.exports.string,$.exports.number])};E.displayName="Zap";const Z=E;function le(e){const t=e.size||24,n=w({[xe.animate]:e.animate});return r("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}const Ve="_FlexCenter_1380a_1",We={FlexCenter:Ve};function Ze({children:e}){return r("div",{className:We.FlexCenter,children:e})}const{useRef:G,useEffect:Ge}=f;function Ye({onClickPrimaryButton:e,onClickSecondaryButton:t}){const n=G(null),o=G(null);return Ge(()=>{n.current.focus()},[]),i("div",{onKeyDown:a=>{a.keyCode===39?o.current.focus():a.keyCode===37&&n.current.focus()},children:[r("h2",{children:"Close Connections?"}),r("p",{children:'Click "Yes" to close those connections that are still using the old selected proxy in this group'}),r("div",{style:{height:30}}),i(Ze,{children:[r(b,{onClick:e,ref:n,children:"Yes"}),r("div",{style:{width:20}}),r(b,{onClick:t,ref:o,children:"No"})]})]})}const Xe="_header_1y9js_1",Je="_arrow_1y9js_8",Qe="_isOpen_1y9js_13",et="_btn_1y9js_20",tt="_qty_1y9js_25",k={header:Xe,arrow:Je,isOpen:Qe,btn:et,qty:tt};function ce({name:e,type:t,toggle:n,isOpen:o,qty:s}){const a=g.exports.useCallback(l=>{l.preventDefault(),(l.key==="Enter"||l.key===" ")&&n()},[n]);return i("div",{className:k.header,onClick:n,style:{cursor:"pointer"},tabIndex:0,onKeyDown:a,role:"button",children:[r("div",{children:r(_e,{name:e,type:t})}),typeof s=="number"?r("span",{className:k.qty,children:s}):null,r(b,{kind:"minimal",onClick:n,className:k.btn,title:"Toggle collapsible section",children:r("span",{className:w(k.arrow,{[k.isOpen]:o}),children:r(Be,{size:20})})})]})}const{useMemo:nt}=f;function rt(e,t){return e.filter(n=>{const o=t[n];return o===void 0?!0:o.number!==0})}const A=(e,t)=>{if(e&&typeof e.number=="number"&&e.number>0)return e.number;const n=t&&t.type;return n&&te.indexOf(n)>-1?-1:999999},ot={Natural:e=>e,LatencyAsc:(e,t,n)=>e.sort((o,s)=>{const a=A(t[o],n&&n[o]),l=A(t[s],n&&n[s]);return a-l}),LatencyDesc:(e,t,n)=>e.sort((o,s)=>{const a=A(t[o],n&&n[o]);return A(t[s],n&&n[s])-a}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,n)=>t>n?-1:t<n?1:0)};function st(e,t){const n=t.toLowerCase().split(" ").map(o=>o.trim()).filter(o=>!!o);return n.length===0?e:e.filter(o=>{let s=0;for(;s<n.length;s++){const a=n[s];if(o.toLowerCase().indexOf(a)>-1)return!0}return!1})}function at(e,t,n,o,s,a){let l=[...e];return n&&(l=rt(e,t)),typeof o=="string"&&o!==""&&(l=st(l,o)),ot[s](l,t,a)}function ie(e,t,n,o,s){const[a]=ve(ee);return nt(()=>at(e,t,n,a,o,s),[e,t,n,a,o,s])}const lt="_header_5pmv2_1",ct="_groupHead_5pmv2_5",it="_action_5pmv2_11",F={header:lt,groupHead:ct,action:it},ut="_proxy_8ev0l_1",dt="_now_8ev0l_25",pt="_error_8ev0l_29",ht="_selectable_8ev0l_32",yt="_proxyType_8ev0l_40",ft="_row_8ev0l_51",mt="_proxyName_8ev0l_57",xt="_proxySmall_8ev0l_66",m={proxy:ut,now:dt,error:pt,selectable:ht,proxyType:yt,row:ft,proxyName:mt,proxySmall:xt},_t="_proxyLatency_hz69v_1",vt={proxyLatency:_t};function gt({number:e,color:t}){return r("span",{className:vt.proxyLatency,style:{color:t},children:typeof e=="number"&&e!==0?e+" ms":" "})}const{useMemo:N}=f,P={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function ue({number:e}={}){return e===0?P.na:e<200?P.good:e<400?P.normal:typeof e=="number"?P.bad:P.na}function bt(e,t){return te.indexOf(t)>-1?{border:"1px dotted #777"}:{background:ue(e)}}function wt({now:e,name:t,proxy:n,latency:o,isSelectable:s,onClick:a}){const l=N(()=>bt(o,n.type),[o,n]),c=N(()=>{let d=t;return o&&typeof o.number=="number"&&(d+=" "+o.number+" ms"),d},[t,o]),u=g.exports.useCallback(()=>{s&&a&&a(t)},[t,a,s]),p=N(()=>w(m.proxySmall,{[m.now]:e,[m.selectable]:s}),[s,e]),h=g.exports.useCallback(d=>{d.key==="Enter"&&u()},[u]);return r("div",{title:c,className:p,style:l,onClick:u,onKeyDown:h,role:s?"menuitem":""})}function Ct(e){return e==="Shadowsocks"?"SS":e}const kt=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function Pt({children:e,label:t,"aria-label":n}){const[o,s]=ge();return i(T,{children:[g.exports.cloneElement(e,o),r(be,{...s,label:t,"aria-label":n,position:kt})]})}function St({now:e,name:t,proxy:n,latency:o,isSelectable:s,onClick:a}){const l=N(()=>ue(o),[o]),c=g.exports.useCallback(()=>{s&&a&&a(t)},[t,a,s]),u=g.exports.useCallback(h=>{h.key==="Enter"&&c()},[c]),p=N(()=>w(m.proxy,{[m.now]:e,[m.selectable]:s}),[s,e]);return i("div",{tabIndex:0,className:p,onClick:c,onKeyDown:u,role:s?"menuitem":"",children:[r("div",{className:m.proxyName,children:r(Pt,{label:t,"aria-label":"proxy name: "+t,children:r("span",{children:t})})}),i("div",{className:m.row,children:[r("span",{className:m.proxyType,style:{opacity:e?.6:.2},children:Ct(n.type)}),r(gt,{number:o==null?void 0:o.number,color:l})]})]})}const de=(e,{name:t})=>{const n=ne(e),o=M(e);return{proxy:n[t]||{name:t,type:"Unknown",history:[]},latency:o[t]}},Nt=C(de)(St),$t=C(de)(wt),At="_list_1oy7w_1",Lt="_listSummaryView_1oy7w_8",pe={list:At,listSummaryView:Lt};function he({all:e,now:t,isSelectable:n,itemOnTapCallback:o}){const s=e;return r("div",{className:pe.list,children:s.map(a=>r(Nt,{onClick:o,isSelectable:n,name:a,now:a===t},a))})}function ye({all:e,now:t,isSelectable:n,itemOnTapCallback:o}){return r("div",{className:pe.listSummaryView,children:e.map(s=>r($t,{onClick:o,isSelectable:n,name:s,now:s===t},s))})}const{createElement:Ot,useCallback:j,useMemo:Tt}=f;function Dt({name:e,all:t,delay:n,hideUnavailableProxies:o,proxySortBy:s,proxies:a,type:l,now:c,isOpen:u,apiConfig:p,dispatch:h}){const d=ie(t,n,o,s,a),_=Tt(()=>l==="Selector",[l]),{app:{updateCollapsibleIsOpen:v},proxies:{requestDelayForProxies:y}}=D(),B=j(()=>{v("proxyGroup",e,!u)},[u,v,e]),I=j(K=>{!_||h(we(p,e,K))},[p,h,e,_]),x=re(!1),me=j(async()=>{if(!x.value){x.set(!0);try{await y(p,d)}catch{}x.set(!1)}},[d,p,y,x]);return i("div",{className:F.group,children:[i("div",{className:F.groupHead,children:[r(ce,{name:e,type:l,toggle:B,qty:d.length,isOpen:u}),r("div",{className:F.action,children:r(O,{label:"Test latency",children:r(b,{kind:"circular",onClick:me,children:r(le,{animate:x.value,size:16})})})})]}),Ot(u?he:ye,{all:d,now:c,isSelectable:_,itemOnTapCallback:I})]})}const Bt=C((e,{name:t,delay:n})=>{const o=ne(e),s=oe(e),a=H(e),l=U(e),c=o[t],{all:u,type:p,now:h}=c;return{all:u,delay:n,hideUnavailableProxies:l,proxySortBy:a,proxies:o,type:p,now:h,isOpen:s[`proxyGroup:${t}`]}})(Dt),{useCallback:fe,useState:It}=f;function Ft({dispatch:e,apiConfig:t,name:n}){return fe(()=>e(Ce(t,n)),[t,e,n])}function jt({dispatch:e,apiConfig:t,names:n}){const[o,s]=It(!1);return[fe(async()=>{if(!o){s(!0);try{await e(ke(t,n))}catch{}s(!1)}},[t,e,n,o]),o]}const{useState:Rt,useCallback:zt}=f;function Mt({isLoading:e}){return e?r(Re,{children:r(Z,{width:16,height:16})}):r(Z,{width:16,height:16})}function Ht({dispatch:e,apiConfig:t}){const[n,o]=Rt(!1);return[zt(()=>{n||(o(!0),e(Pe(t)).then(()=>o(!1),()=>o(!1)))},[t,e,n]),n]}function Ut({dispatch:e,apiConfig:t,proxyProviders:n}){const{t:o}=q(),[s,a]=Ht({dispatch:e,apiConfig:t}),[l,c]=jt({apiConfig:t,dispatch:e,names:n.map(u=>u.name)});return r(Ie,{icon:r(Mt,{isLoading:a}),onClick:s,text:o("Test Latency"),style:Fe,children:n.length>0?r(je,{text:o("update_all_proxy_provider"),onClick:l,children:r(ze,{isRotating:c})}):null})}const qt="_updatedAt_1rx92_1",Et="_main_1rx92_8",Kt="_head_1rx92_17",Vt="_action_1rx92_23",Wt="_refresh_1rx92_31",S={updatedAt:qt,main:Et,head:Kt,action:Vt,refresh:Wt},{useCallback:Y}=f;function Zt({name:e,proxies:t,delay:n,hideUnavailableProxies:o,proxySortBy:s,vehicleType:a,updatedAt:l,isOpen:c,dispatch:u,apiConfig:p}){const h=ie(t,n,o,s),d=re(!1),_=Ft({dispatch:u,apiConfig:p,name:e}),v=Y(()=>{if(d.value)return;d.set(!0);const x=()=>d.set(!1);u(Se(p,e)).then(x,x)},[p,u,e,d]),{app:{updateCollapsibleIsOpen:y}}=D(),B=Y(()=>{y("proxyProvider",e,!c)},[c,y,e]),I=Ue(new Date(l),new Date);return i("div",{className:S.main,children:[i("div",{className:S.head,children:[r(ce,{name:e,toggle:B,type:a,isOpen:c,qty:h.length}),i("div",{className:S.action,children:[r(O,{label:"Update",children:r(b,{kind:"circular",onClick:_,children:r(Xt,{})})}),r(O,{label:"Health Check",children:r(b,{kind:"circular",onClick:v,children:r(le,{animate:d.value,size:16})})})]})]}),r("div",{className:S.updatedAt,children:i("small",{children:["Updated ",I," ago"]})}),c?r(he,{all:h}):r(ye,{all:h})]})}const Gt={rest:{scale:1},pressed:{scale:.95}},Yt={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function Xt(){const t=Ne.read().motion;return r(t.div,{className:S.refresh,variants:Gt,initial:"rest",whileHover:"hover",whileTap:"pressed",children:r(t.div,{className:"flexCenter",variants:Yt,children:r(Me,{size:16})})})}const Jt=(e,{proxies:t,name:n})=>{const o=U(e),s=M(e),a=oe(e),l=se(e),c=H(e);return{apiConfig:l,proxies:t,delay:s,hideUnavailableProxies:o,proxySortBy:c,isOpen:a[`proxyProvider:${n}`]}},Qt=C(Jt)(Zt);function en({items:e}){return e.length===0?null:i(T,{children:[r(ae,{title:"Proxy Provider"}),r("div",{children:e.map(t=>r(Qt,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt},t.name))})]})}const tn="_labeledInput_cmki0_1",R={labeledInput:tn},nn=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:X}=f;function rn({appConfig:e}){const{app:{updateAppConfig:t}}=D(),n=X(a=>{t("proxySortBy",a.target.value)},[t]),o=X(a=>{t("hideUnavailableProxies",a)},[t]),{t:s}=q();return i(T,{children:[i("div",{className:R.labeledInput,children:[r("span",{children:s("sort_in_grp")}),r("div",{children:r(qe,{options:nn.map(a=>[a[0],s(a[1])]),selected:e.proxySortBy,onChange:n})})]}),r("hr",{}),i("div",{className:R.labeledInput,children:[r("span",{children:s("hide_unavail_proxies")}),r("div",{children:r(V,{name:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:o})})]}),i("div",{className:R.labeledInput,children:[r("span",{children:s("auto_close_conns")}),r("div",{children:r(V,{name:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:a=>t("autoCloseOldConns",a)})})]})]})}const on=e=>{const t=H(e),n=U(e),o=$e(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:n,autoCloseOldConns:o}}},sn=C(on)(rn),an="_overlay_uuk3b_1",ln="_cnt_uuk3b_5",cn="_afterOpen_uuk3b_16",z={overlay:an,cnt:ln,afterOpen:cn},{useMemo:un}=f;function J({isOpen:e,onRequestClose:t,children:n}){const o=un(()=>({base:w(W.content,z.cnt),afterOpen:z.afterOpen,beforeClose:""}),[]);return r(Ae,{isOpen:e,onRequestClose:t,className:o,overlayClassName:w(W.overlay,z.overlay),children:n})}function dn({color:e="currentColor",size:t=24}){return i("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r("path",{d:"M2 6h9M18.5 6H22"}),r("circle",{cx:"16",cy:"6",r:"2"}),r("path",{d:"M22 18h-9M6 18H2"}),r("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const pn="_topBar_jgy4z_1",hn="_topBarRight_jgy4z_13",yn="_textFilterContainer_jgy4z_22",fn="_group_jgy4z_29",L={topBar:pn,topBarRight:hn,textFilterContainer:yn,group:fn},{useState:mn,useEffect:xn,useCallback:Q,useRef:_n}=f;function vn({dispatch:e,groupNames:t,delay:n,proxyProviders:o,apiConfig:s,showModalClosePrevConns:a}){const l=_n({}),c=Q(()=>{l.current.startAt=Date.now(),e(Le(s)).then(()=>{l.current.completeAt=Date.now()})},[s,e]);xn(()=>{c();const y=()=>{l.current.startAt&&Date.now()-l.current.startAt>3e4&&c()};return window.addEventListener("focus",y,!1),()=>window.removeEventListener("focus",y,!1)},[c]);const[u,p]=mn(!1),h=Q(()=>{p(!1)},[]),{proxies:{closeModalClosePrevConns:d,closePrevConnsAndTheModal:_}}=D(),{t:v}=q();return i(T,{children:[r(J,{isOpen:u,onRequestClose:h,children:r(sn,{})}),i("div",{className:L.topBar,children:[r(ae,{title:v("Proxies")}),i("div",{className:L.topBarRight,children:[r("div",{className:L.textFilterContainer,children:r(He,{textAtom:ee})}),r(O,{label:v("settings"),children:r(b,{kind:"minimal",onClick:()=>p(!0),children:r(dn,{size:16})})})]})]}),r("div",{children:t.map(y=>r("div",{className:L.group,children:r(Bt,{name:y,delay:n,apiConfig:s,dispatch:e})},y))}),r(en,{items:o}),r("div",{style:{height:60}}),r(Ut,{dispatch:e,apiConfig:s,proxyProviders:o}),r(J,{isOpen:a,onRequestClose:d,children:r(Ye,{onClickPrimaryButton:()=>_(s),onClickSecondaryButton:d})})]})}const gn=e=>({apiConfig:se(e),groupNames:Oe(e),proxyProviders:Te(e),delay:M(e),showModalClosePrevConns:De(e)}),$n=C(gn)(vn);export{$n as default};