import{s as E,f as b,l as _,a as S,g as f,h as d,m as g,d as p,c as x,i as l,u as h,n as v,M as $,B as q}from"../chunks/scheduler.a001ff14.js";import{S as y,i as B}from"../chunks/index.7bf062dc.js";import{s as C}from"../chunks/singletons.e04d8650.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},M={subscribe(s){return H().page.subscribe(s)}};function P(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=b("h1"),o=_(r),n=S(),i=b("p"),u=_(c)},l(e){t=f(e,"H1",{});var a=d(t);o=g(a,r),a.forEach(p),n=x(e),i=f(e,"P",{});var m=d(i);u=g(m,c),m.forEach(p)},m(e,a){l(e,t,a),h(t,o),l(e,n,a),l(e,i,a),h(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&v(o,r),a&1&&c!==(c=e[0].error?.message+"")&&v(u,c)},i:$,o:$,d(e){e&&(p(t),p(n),p(i))}}}function j(s,t,r){let o;return q(s,M,n=>r(0,o=n)),[o]}let A=class extends y{constructor(t){super(),B(this,t,j,P,E,{})}};export{A as component};