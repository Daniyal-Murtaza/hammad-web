var jh=Object.defineProperty,Vh=Object.defineProperties;var Kh=Object.getOwnPropertyDescriptors;var cl=Object.getOwnPropertySymbols;var qh=Object.prototype.hasOwnProperty,zh=Object.prototype.propertyIsEnumerable;var ul=(t,e,n)=>e in t?jh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,hl=(t,e)=>{for(var n in e||(e={}))qh.call(e,n)&&ul(t,n,e[n]);if(cl)for(var n of cl(e))zh.call(e,n)&&ul(t,n,e[n]);return t},fl=(t,e)=>Vh(t,Kh(e));var ge=(t,e,n)=>new Promise((s,i)=>{var r=a=>{try{l(n.next(a))}catch(c){i(c)}},o=a=>{try{l(n.throw(a))}catch(c){i(c)}},l=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,o);l((n=n.apply(t,e)).next())});const Yh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Yh();function Gr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function vi(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=de(s)?Xh(s):vi(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(de(t))return t;if(ne(t))return t}}const Gh=/;(?![^(]*\))/g,Qh=/:([^]+)/,Jh=new RegExp("\\/\\*.*?\\*\\/","gs");function Xh(t){const e={};return t.replace(Jh,"").split(Gh).forEach(n=>{if(n){const s=n.split(Qh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ct(t){let e="";if(de(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const s=Ct(t[n]);s&&(e+=s+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function dC(t){if(!t)return null;let{class:e,style:n}=t;return e&&!de(e)&&(t.class=Ct(e)),n&&(t.style=vi(n)),t}const Zh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ef=Gr(Zh);function qa(t){return!!t||t===""}function tf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Is(t[s],e[s]);return n}function Is(t,e){if(t===e)return!0;let n=dl(t),s=dl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=rs(t),s=rs(e),n||s)return t===e;if(n=k(t),s=k(e),n||s)return n&&s?tf(t,e):!1;if(n=ne(t),s=ne(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!Is(t[o],e[o]))return!1}}return String(t)===String(e)}function Qr(t,e){return t.findIndex(n=>Is(n,e))}const nf=t=>de(t)?t:t==null?"":k(t)||ne(t)&&(t.toString===Ya||!j(t.toString))?JSON.stringify(t,za,2):String(t),za=(t,e)=>e&&e.__v_isRef?za(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Pn(e)?{[`Set(${e.size})`]:[...e.values()]}:ne(e)&&!k(e)&&!Ga(e)?String(e):e,ce={},fn=[],Je=()=>{},sf=()=>!1,rf=/^on[^a-z]/,Ci=t=>rf.test(t),Jr=t=>t.startsWith("onUpdate:"),Te=Object.assign,Xr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},of=Object.prototype.hasOwnProperty,J=(t,e)=>of.call(t,e),k=Array.isArray,dn=t=>Ts(t)==="[object Map]",Pn=t=>Ts(t)==="[object Set]",dl=t=>Ts(t)==="[object Date]",j=t=>typeof t=="function",de=t=>typeof t=="string",rs=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",Zr=t=>ne(t)&&j(t.then)&&j(t.catch),Ya=Object.prototype.toString,Ts=t=>Ya.call(t),lf=t=>Ts(t).slice(8,-1),Ga=t=>Ts(t)==="[object Object]",eo=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ei=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},af=/-(\w)/g,it=Ei(t=>t.replace(af,(e,n)=>n?n.toUpperCase():"")),cf=/\B([A-Z])/g,kn=Ei(t=>t.replace(cf,"-$1").toLowerCase()),bi=Ei(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vi=Ei(t=>t?`on${bi(t)}`:""),os=(t,e)=>!Object.is(t,e),qs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Gs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qt=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pl;const uf=()=>pl||(pl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Be;class Qa{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!e&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Ja(t){return new Qa(t)}function hf(t,e=Be){e&&e.active&&e.effects.push(t)}function ff(){return Be}function df(t){Be&&Be.cleanups.push(t)}const to=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xa=t=>(t.w&At)>0,Za=t=>(t.n&At)>0,pf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},_f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Xa(i)&&!Za(i)?i.delete(t):e[n++]=i,i.w&=~At,i.n&=~At}e.length=n}},ar=new WeakMap;let Kn=0,At=1;const cr=30;let ze;const Yt=Symbol(""),ur=Symbol("");class no{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hf(this,s)}run(){if(!this.active)return this.fn();let e=ze,n=Et;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ze,ze=this,Et=!0,At=1<<++Kn,Kn<=cr?pf(this):_l(this),this.fn()}finally{Kn<=cr&&_f(this),At=1<<--Kn,ze=this.parent,Et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ze===this?this.deferStop=!0:this.active&&(_l(this),this.onStop&&this.onStop(),this.active=!1)}}function _l(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Et=!0;const ec=[];function Dn(){ec.push(Et),Et=!1}function On(){const t=ec.pop();Et=t===void 0?!0:t}function We(t,e,n){if(Et&&ze){let s=ar.get(t);s||ar.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=to()),tc(i)}}function tc(t,e){let n=!1;Kn<=cr?Za(t)||(t.n|=At,n=!Xa(t)):n=!t.has(ze),n&&(t.add(ze),ze.deps.push(t))}function ct(t,e,n,s,i,r){const o=ar.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&k(t)){const a=Qt(s);o.forEach((c,h)=>{(h==="length"||h>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":k(t)?eo(n)&&l.push(o.get("length")):(l.push(o.get(Yt)),dn(t)&&l.push(o.get(ur)));break;case"delete":k(t)||(l.push(o.get(Yt)),dn(t)&&l.push(o.get(ur)));break;case"set":dn(t)&&l.push(o.get(Yt));break}if(l.length===1)l[0]&&hr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);hr(to(a))}}function hr(t,e){const n=k(t)?t:[...t];for(const s of n)s.computed&&gl(s);for(const s of n)s.computed||gl(s)}function gl(t,e){(t!==ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gf=Gr("__proto__,__v_isRef,__isVue"),nc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rs)),mf=so(),yf=so(!1,!0),vf=so(!0),ml=Cf();function Cf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=X(this);for(let r=0,o=this.length;r<o;r++)We(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(X)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dn();const s=X(this)[e].apply(this,n);return On(),s}}),t}function so(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Ff:lc:e?oc:rc).get(s))return s;const o=k(s);if(!t&&o&&J(ml,i))return Reflect.get(ml,i,r);const l=Reflect.get(s,i,r);return(rs(i)?nc.has(i):gf(i))||(t||We(s,"get",i),e)?l:pe(l)?o&&eo(i)?l:l.value:ne(l)?t?ac(l):Ii(l):l}}const Ef=sc(),bf=sc(!0);function sc(t=!1){return function(n,s,i,r){let o=n[s];if(bn(o)&&pe(o)&&!pe(i))return!1;if(!t&&(!Qs(i)&&!bn(i)&&(o=X(o),i=X(i)),!k(n)&&pe(o)&&!pe(i)))return o.value=i,!0;const l=k(n)&&eo(s)?Number(s)<n.length:J(n,s),a=Reflect.set(n,s,i,r);return n===X(r)&&(l?os(i,o)&&ct(n,"set",s,i):ct(n,"add",s,i)),a}}function wf(t,e){const n=J(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ct(t,"delete",e,void 0),s}function If(t,e){const n=Reflect.has(t,e);return(!rs(e)||!nc.has(e))&&We(t,"has",e),n}function Tf(t){return We(t,"iterate",k(t)?"length":Yt),Reflect.ownKeys(t)}const ic={get:mf,set:Ef,deleteProperty:wf,has:If,ownKeys:Tf},Sf={get:vf,set(t,e){return!0},deleteProperty(t,e){return!0}},Nf=Te({},ic,{get:yf,set:bf}),io=t=>t,wi=t=>Reflect.getPrototypeOf(t);function Fs(t,e,n=!1,s=!1){t=t.__v_raw;const i=X(t),r=X(e);n||(e!==r&&We(i,"get",e),We(i,"get",r));const{has:o}=wi(i),l=s?io:n?lo:ls;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ls(t,e=!1){const n=this.__v_raw,s=X(n),i=X(t);return e||(t!==i&&We(s,"has",t),We(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Bs(t,e=!1){return t=t.__v_raw,!e&&We(X(t),"iterate",Yt),Reflect.get(t,"size",t)}function yl(t){t=X(t);const e=X(this);return wi(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function vl(t,e){e=X(e);const n=X(this),{has:s,get:i}=wi(n);let r=s.call(n,t);r||(t=X(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?os(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function Cl(t){const e=X(this),{has:n,get:s}=wi(e);let i=n.call(e,t);i||(t=X(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ct(e,"delete",t,void 0),r}function El(){const t=X(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function Us(t,e){return function(s,i){const r=this,o=r.__v_raw,l=X(o),a=e?io:t?lo:ls;return!t&&We(l,"iterate",Yt),o.forEach((c,h)=>s.call(i,a(c),a(h),r))}}function Hs(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=dn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),h=n?io:e?lo:ls;return!e&&We(r,"iterate",a?ur:Yt),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:l?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:this}}function xf(){const t={get(r){return Fs(this,r)},get size(){return Bs(this)},has:Ls,add:yl,set:vl,delete:Cl,clear:El,forEach:Us(!1,!1)},e={get(r){return Fs(this,r,!1,!0)},get size(){return Bs(this)},has:Ls,add:yl,set:vl,delete:Cl,clear:El,forEach:Us(!1,!0)},n={get(r){return Fs(this,r,!0)},get size(){return Bs(this,!0)},has(r){return Ls.call(this,r,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Us(!0,!1)},s={get(r){return Fs(this,r,!0,!0)},get size(){return Bs(this,!0)},has(r){return Ls.call(this,r,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Us(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hs(r,!1,!1),n[r]=Hs(r,!0,!1),e[r]=Hs(r,!1,!0),s[r]=Hs(r,!0,!0)}),[t,n,e,s]}const[Af,Rf,Pf,kf]=xf();function ro(t,e){const n=e?t?kf:Pf:t?Rf:Af;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,r)}const Df={get:ro(!1,!1)},Of={get:ro(!1,!0)},Mf={get:ro(!0,!1)},rc=new WeakMap,oc=new WeakMap,lc=new WeakMap,Ff=new WeakMap;function Lf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bf(t){return t.__v_skip||!Object.isExtensible(t)?0:Lf(lf(t))}function Ii(t){return bn(t)?t:oo(t,!1,ic,Df,rc)}function Uf(t){return oo(t,!1,Nf,Of,oc)}function ac(t){return oo(t,!0,Sf,Mf,lc)}function oo(t,e,n,s,i){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Bf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function bt(t){return bn(t)?bt(t.__v_raw):!!(t&&t.__v_isReactive)}function bn(t){return!!(t&&t.__v_isReadonly)}function Qs(t){return!!(t&&t.__v_isShallow)}function cc(t){return bt(t)||bn(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function wn(t){return Gs(t,"__v_skip",!0),t}const ls=t=>ne(t)?Ii(t):t,lo=t=>ne(t)?ac(t):t;function uc(t){Et&&ze&&(t=X(t),tc(t.dep||(t.dep=to())))}function hc(t,e){t=X(t),t.dep&&hr(t.dep)}function pe(t){return!!(t&&t.__v_isRef===!0)}function ao(t){return fc(t,!1)}function pC(t){return fc(t,!0)}function fc(t,e){return pe(t)?t:new Hf(t,e)}class Hf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:ls(e)}get value(){return uc(this),this._value}set value(e){const n=this.__v_isShallow||Qs(e)||bn(e);e=n?e:X(e),os(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ls(e),hc(this))}}function Wf(t){return pe(t)?t.value:t}const $f={get:(t,e,n)=>Wf(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function dc(t){return bt(t)?t:new Proxy(t,$f)}function jf(t){const e=k(t)?new Array(t.length):{};for(const n in t)e[n]=Kf(t,n);return e}class Vf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Kf(t,e,n){const s=t[e];return pe(s)?s:new Vf(t,e,n)}var pc;class qf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[pc]=!1,this._dirty=!0,this.effect=new no(e,()=>{this._dirty||(this._dirty=!0,hc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=X(this);return uc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}pc="__v_isReadonly";function zf(t,e,n=!1){let s,i;const r=j(t);return r?(s=t,i=Je):(s=t.get,i=t.set),new qf(s,i,r||!i,n)}function wt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ss(r,e,n)}return i}function Ve(t,e,n,s){if(j(t)){const r=wt(t,e,n,s);return r&&Zr(r)&&r.catch(o=>{Ss(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ve(t[r],e,n,s));return i}function Ss(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){wt(a,null,10,[t,o,l]);return}}Yf(t,n,i,s)}function Yf(t,e,n,s=!0){console.error(t)}let as=!1,fr=!1;const Ae=[];let nt=0;const pn=[];let ot=null,jt=0;const _c=Promise.resolve();let co=null;function gc(t){const e=co||_c;return t?e.then(this?t.bind(this):t):e}function Gf(t){let e=nt+1,n=Ae.length;for(;e<n;){const s=e+n>>>1;cs(Ae[s])<t?e=s+1:n=s}return e}function uo(t){(!Ae.length||!Ae.includes(t,as&&t.allowRecurse?nt+1:nt))&&(t.id==null?Ae.push(t):Ae.splice(Gf(t.id),0,t),mc())}function mc(){!as&&!fr&&(fr=!0,co=_c.then(Cc))}function Qf(t){const e=Ae.indexOf(t);e>nt&&Ae.splice(e,1)}function yc(t){k(t)?pn.push(...t):(!ot||!ot.includes(t,t.allowRecurse?jt+1:jt))&&pn.push(t),mc()}function bl(t,e=as?nt+1:0){for(;e<Ae.length;e++){const n=Ae[e];n&&n.pre&&(Ae.splice(e,1),e--,n())}}function vc(t){if(pn.length){const e=[...new Set(pn)];if(pn.length=0,ot){ot.push(...e);return}for(ot=e,ot.sort((n,s)=>cs(n)-cs(s)),jt=0;jt<ot.length;jt++)ot[jt]();ot=null,jt=0}}const cs=t=>t.id==null?1/0:t.id,Jf=(t,e)=>{const n=cs(t)-cs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Cc(t){fr=!1,as=!0,Ae.sort(Jf);const e=Je;try{for(nt=0;nt<Ae.length;nt++){const n=Ae[nt];n&&n.active!==!1&&wt(n,null,14)}}finally{nt=0,Ae.length=0,vc(),as=!1,co=null,(Ae.length||pn.length)&&Cc()}}function Xf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:f}=s[h]||ce;f&&(i=n.map(_=>de(_)?_.trim():_)),u&&(i=n.map(Qt))}let l,a=s[l=Vi(e)]||s[l=Vi(it(e))];!a&&r&&(a=s[l=Vi(kn(e))]),a&&Ve(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ve(c,t,6,i)}}function Ec(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!j(t)){const a=c=>{const h=Ec(c,e,!0);h&&(l=!0,Te(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ne(t)&&s.set(t,null),null):(k(r)?r.forEach(a=>o[a]=null):Te(o,r),ne(t)&&s.set(t,o),o)}function Ti(t,e){return!t||!Ci(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,kn(e))||J(t,e))}let Ie=null,Si=null;function Js(t){const e=Ie;return Ie=t,Si=t&&t.type.__scopeId||null,e}function Zf(t){Si=t}function ed(){Si=null}function td(t,e=Ie,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ol(-1);const r=Js(e);let o;try{o=t(...i)}finally{Js(r),s._d&&Ol(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ki(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:u,data:f,setupState:_,ctx:m,inheritAttrs:E}=t;let L,U;const A=Js(t);try{if(n.shapeFlag&4){const $=i||s;L=qe(h.call($,$,u,r,_,f,m)),U=a}else{const $=e;L=qe($.length>1?$(r,{attrs:a,slots:l,emit:c}):$(r,null)),U=e.props?a:sd(a)}}catch($){Jn.length=0,Ss($,t,1),L=Re(Me)}let T=L;if(U&&E!==!1){const $=Object.keys(U),{shapeFlag:M}=T;$.length&&M&7&&(o&&$.some(Jr)&&(U=id(U,o)),T=Rt(T,U))}return n.dirs&&(T=Rt(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),L=T,Js(A),L}function nd(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(hs(s)){if(s.type!==Me||s.children==="v-if"){if(e)return;e=s}}else return}return e}const sd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ci(n))&&((e||(e={}))[n]=t[n]);return e},id=(t,e)=>{const n={};for(const s in t)(!Jr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?wl(s,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==s[f]&&!Ti(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?wl(s,o,c):!0:!!o;return!1}function wl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ti(n,r))return!0}return!1}function ho({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const od=t=>t.__isSuspense,ld={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,l,a,c){t==null?ad(e,n,s,i,r,o,l,a,c):cd(t,e,n,s,i,o,l,a,c)},hydrate:ud,create:fo,normalize:hd},_C=ld;function us(t,e){const n=t.props&&t.props[e];j(n)&&n()}function ad(t,e,n,s,i,r,o,l,a){const{p:c,o:{createElement:h}}=a,u=h("div"),f=t.suspense=fo(t,i,s,e,u,n,r,o,l,a);c(null,f.pendingBranch=t.ssContent,u,null,s,f,r,o),f.deps>0?(us(t,"onPending"),us(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),_n(f,t.ssFallback)):f.resolve()}function cd(t,e,n,s,i,r,o,l,{p:a,um:c,o:{createElement:h}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const f=e.ssContent,_=e.ssFallback,{activeBranch:m,pendingBranch:E,isInFallback:L,isHydrating:U}=u;if(E)u.pendingBranch=f,st(f,E)?(a(E,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0?u.resolve():L&&(a(m,_,n,s,i,null,r,o,l),_n(u,_))):(u.pendingId++,U?(u.isHydrating=!1,u.activeBranch=E):c(E,i,u),u.deps=0,u.effects.length=0,u.hiddenContainer=h("div"),L?(a(null,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0?u.resolve():(a(m,_,n,s,i,null,r,o,l),_n(u,_))):m&&st(f,m)?(a(m,f,n,s,i,u,r,o,l),u.resolve(!0)):(a(null,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0&&u.resolve()));else if(m&&st(f,m))a(m,f,n,s,i,u,r,o,l),_n(u,f);else if(us(e,"onPending"),u.pendingBranch=f,u.pendingId++,a(null,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0)u.resolve();else{const{timeout:A,pendingId:T}=u;A>0?setTimeout(()=>{u.pendingId===T&&u.fallback(_)},A):A===0&&u.fallback(_)}}function fo(t,e,n,s,i,r,o,l,a,c,h=!1){const{p:u,m:f,um:_,n:m,o:{parentNode:E,remove:L}}=c,U=Qt(t.props&&t.props.timeout),A={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof U=="number"?U:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:h,isUnmounted:!1,effects:[],resolve(T=!1){const{vnode:$,activeBranch:M,pendingBranch:Y,pendingId:F,effects:S,parentComponent:H,container:V}=A;if(A.isHydrating)A.isHydrating=!1;else if(!T){const ee=M&&Y.transition&&Y.transition.mode==="out-in";ee&&(M.transition.afterLeave=()=>{F===A.pendingId&&f(Y,V,ue,0)});let{anchor:ue}=A;M&&(ue=m(M),_(M,H,A,!0)),ee||f(Y,V,ue,0)}_n(A,Y),A.pendingBranch=null,A.isInFallback=!1;let G=A.parent,P=!1;for(;G;){if(G.pendingBranch){G.effects.push(...S),P=!0;break}G=G.parent}P||yc(S),A.effects=[],us($,"onResolve")},fallback(T){if(!A.pendingBranch)return;const{vnode:$,activeBranch:M,parentComponent:Y,container:F,isSVG:S}=A;us($,"onFallback");const H=m(M),V=()=>{!A.isInFallback||(u(null,T,F,H,Y,null,S,l,a),_n(A,T))},G=T.transition&&T.transition.mode==="out-in";G&&(M.transition.afterLeave=V),A.isInFallback=!0,_(M,Y,null,!0),G||V()},move(T,$,M){A.activeBranch&&f(A.activeBranch,T,$,M),A.container=T},next(){return A.activeBranch&&m(A.activeBranch)},registerDep(T,$){const M=!!A.pendingBranch;M&&A.deps++;const Y=T.vnode.el;T.asyncDep.catch(F=>{Ss(F,T,0)}).then(F=>{if(T.isUnmounted||A.isUnmounted||A.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:S}=T;Er(T,F,!1),Y&&(S.el=Y);const H=!Y&&T.subTree.el;$(T,S,E(Y||T.subTree.el),Y?null:m(T.subTree),A,o,a),H&&L(H),ho(T,S.el),M&&--A.deps===0&&A.resolve()})},unmount(T,$){A.isUnmounted=!0,A.activeBranch&&_(A.activeBranch,n,T,$),A.pendingBranch&&_(A.pendingBranch,n,T,$)}};return A}function ud(t,e,n,s,i,r,o,l,a){const c=e.suspense=fo(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,l,!0),h=a(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),h}function hd(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Il(s?n.default:n),t.ssFallback=s?Il(n.fallback):Re(Me)}function Il(t){let e;if(j(t)){const n=In&&t._c;n&&(t._d=!1,Ns()),t=t(),n&&(t._d=!0,e=je,Uc())}return k(t)&&(t=nd(t)),t=qe(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function fd(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):yc(t)}function _n(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,ho(s,i))}function dd(t,e){if(be){let n=be.provides;const s=be.parent&&be.parent.provides;s===n&&(n=be.provides=Object.create(s)),n[t]=e}}function qn(t,e,n=!1){const s=be||Ie;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(s.proxy):e}}function pd(t,e){return po(t,null,{flush:"post"})}const Ws={};function zs(t,e,n){return po(t,e,n)}function po(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ce){const l=be;let a,c=!1,h=!1;if(pe(t)?(a=()=>t.value,c=Qs(t)):bt(t)?(a=()=>t,s=!0):k(t)?(h=!0,c=t.some(T=>bt(T)||Qs(T)),a=()=>t.map(T=>{if(pe(T))return T.value;if(bt(T))return qt(T);if(j(T))return wt(T,l,2)})):j(t)?e?a=()=>wt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),Ve(t,l,3,[f])}:a=Je,e&&s){const T=a;a=()=>qt(T())}let u,f=T=>{u=U.onStop=()=>{wt(T,l,4)}},_;if(fs)if(f=Je,e?n&&Ve(e,l,3,[a(),h?[]:void 0,f]):a(),i==="sync"){const T=cp();_=T.__watcherHandles||(T.__watcherHandles=[])}else return Je;let m=h?new Array(t.length).fill(Ws):Ws;const E=()=>{if(!!U.active)if(e){const T=U.run();(s||c||(h?T.some(($,M)=>os($,m[M])):os(T,m)))&&(u&&u(),Ve(e,l,3,[T,m===Ws?void 0:h&&m[0]===Ws?[]:m,f]),m=T)}else U.run()};E.allowRecurse=!!e;let L;i==="sync"?L=E:i==="post"?L=()=>ke(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),L=()=>uo(E));const U=new no(a,L);e?n?E():m=U.run():i==="post"?ke(U.run.bind(U),l&&l.suspense):U.run();const A=()=>{U.stop(),l&&l.scope&&Xr(l.scope.effects,U)};return _&&_.push(A),A}function _d(t,e,n){const s=this.proxy,i=de(t)?t.includes(".")?bc(s,t):()=>s[t]:t.bind(s,s);let r;j(e)?r=e:(r=e.handler,n=e);const o=be;Pt(this);const l=po(i,r.bind(s),n);return o?Pt(o):It(),l}function bc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function qt(t,e){if(!ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))qt(t.value,e);else if(k(t))for(let n=0;n<t.length;n++)qt(t[n],e);else if(Pn(t)||dn(t))t.forEach(n=>{qt(n,e)});else if(Ga(t))for(const n in t)qt(t[n],e);return t}function gd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _o(()=>{t.isMounted=!0}),Nc(()=>{t.isUnmounting=!0}),t}const $e=[Function,Array],md={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},setup(t,{slots:e}){const n=Pi(),s=gd();let i;return()=>{const r=e.default&&Tc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const E of r)if(E.type!==Me){o=E;break}}const l=X(t),{mode:a}=l;if(s.isLeaving)return qi(o);const c=Tl(o);if(!c)return qi(o);const h=dr(c,l,s,n);pr(c,h);const u=n.subTree,f=u&&Tl(u);let _=!1;const{getTransitionKey:m}=c.type;if(m){const E=m();i===void 0?i=E:E!==i&&(i=E,_=!0)}if(f&&f.type!==Me&&(!st(c,f)||_)){const E=dr(f,l,s,n);if(pr(f,E),a==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},qi(o);a==="in-out"&&c.type!==Me&&(E.delayLeave=(L,U,A)=>{const T=Ic(s,f);T[String(f.key)]=f,L._leaveCb=()=>{U(),L._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=A})}return o}}},wc=md;function Ic(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function dr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:f,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:E,onAppear:L,onAfterAppear:U,onAppearCancelled:A}=e,T=String(t.key),$=Ic(n,t),M=(S,H)=>{S&&Ve(S,s,9,H)},Y=(S,H)=>{const V=H[1];M(S,H),k(S)?S.every(G=>G.length<=1)&&V():S.length<=1&&V()},F={mode:r,persisted:o,beforeEnter(S){let H=l;if(!n.isMounted)if(i)H=E||l;else return;S._leaveCb&&S._leaveCb(!0);const V=$[T];V&&st(t,V)&&V.el._leaveCb&&V.el._leaveCb(),M(H,[S])},enter(S){let H=a,V=c,G=h;if(!n.isMounted)if(i)H=L||a,V=U||c,G=A||h;else return;let P=!1;const ee=S._enterCb=ue=>{P||(P=!0,ue?M(G,[S]):M(V,[S]),F.delayedLeave&&F.delayedLeave(),S._enterCb=void 0)};H?Y(H,[S,ee]):ee()},leave(S,H){const V=String(t.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return H();M(u,[S]);let G=!1;const P=S._leaveCb=ee=>{G||(G=!0,H(),ee?M(m,[S]):M(_,[S]),S._leaveCb=void 0,$[V]===t&&delete $[V])};$[V]=t,f?Y(f,[S,P]):P()},clone(S){return dr(S,e,n,s)}};return F}function qi(t){if(Ni(t))return t=Rt(t),t.children=null,t}function Tl(t){return Ni(t)?t.children?t.children[0]:void 0:t}function pr(t,e){t.shapeFlag&6&&t.component?pr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Tc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ue?(o.patchFlag&128&&i++,s=s.concat(Tc(o.children,e,l))):(e||o.type!==Me)&&s.push(l!=null?Rt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function gC(t){return j(t)?{setup:t,name:t.name}:t}const zn=t=>!!t.type.__asyncLoader,Ni=t=>t.type.__isKeepAlive;function yd(t,e){Sc(t,"a",e)}function vd(t,e){Sc(t,"da",e)}function Sc(t,e,n=be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(xi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ni(i.parent.vnode)&&Cd(s,e,n,i),i=i.parent}}function Cd(t,e,n,s){const i=xi(e,t,s,!0);go(()=>{Xr(s[e],i)},n)}function xi(t,e,n=be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dn(),Pt(n);const l=Ve(e,n,t,o);return It(),On(),l});return s?i.unshift(r):i.push(r),r}}const ht=t=>(e,n=be)=>(!fs||t==="sp")&&xi(t,(...s)=>e(...s),n),Ed=ht("bm"),_o=ht("m"),bd=ht("bu"),wd=ht("u"),Nc=ht("bum"),go=ht("um"),Id=ht("sp"),Td=ht("rtg"),Sd=ht("rtc");function Nd(t,e=be){xi("ec",t,e)}function mC(t,e){const n=Ie;if(n===null)return t;const s=ki(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=ce]=e[r];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&qt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ft(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Dn(),Ve(a,n,8,[t.el,l,t,e]),On())}}const mo="components";function yC(t,e){return Ac(mo,t,!0,e)||t}const xc=Symbol();function vC(t){return de(t)?Ac(mo,t,!1)||t:t||xc}function Ac(t,e,n=!0,s=!1){const i=Ie||be;if(i){const r=i.type;if(t===mo){const l=rp(r,!1);if(l&&(l===e||l===it(e)||l===bi(it(e))))return r}const o=Sl(i[t]||r[t],e)||Sl(i.appContext[t],e);return!o&&s?r:o}}function Sl(t,e){return t&&(t[e]||t[it(e)]||t[bi(it(e))])}function CC(t,e,n,s){let i;const r=n&&n[s];if(k(t)||de(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ne(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}function EC(t,e,n={},s,i){if(Ie.isCE||Ie.parent&&zn(Ie.parent)&&Ie.parent.isCE)return e!=="default"&&(n.name=e),Re("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Ns();const o=r&&Rc(r(n)),l=$c(Ue,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Rc(t){return t.some(e=>hs(e)?!(e.type===Me||e.type===Ue&&!Rc(e.children)):!0)?t:null}const _r=t=>t?Vc(t)?ki(t)||t.proxy:_r(t.parent):null,Yn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_r(t.parent),$root:t=>_r(t.root),$emit:t=>t.emit,$options:t=>yo(t),$forceUpdate:t=>t.f||(t.f=()=>uo(t.update)),$nextTick:t=>t.n||(t.n=gc.bind(t.proxy)),$watch:t=>_d.bind(t)}),zi=(t,e)=>t!==ce&&!t.__isScriptSetup&&J(t,e),xd={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(zi(s,e))return o[e]=1,s[e];if(i!==ce&&J(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&J(c,e))return o[e]=3,r[e];if(n!==ce&&J(n,e))return o[e]=4,n[e];gr&&(o[e]=0)}}const h=Yn[e];let u,f;if(h)return e==="$attrs"&&We(t,"get",e),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==ce&&J(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,J(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return zi(i,e)?(i[e]=n,!0):s!==ce&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ce&&J(t,o)||zi(e,o)||(l=r[0])&&J(l,o)||J(s,o)||J(Yn,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let gr=!0;function Ad(t){const e=yo(t),n=t.proxy,s=t.ctx;gr=!1,e.beforeCreate&&Nl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:_,updated:m,activated:E,deactivated:L,beforeDestroy:U,beforeUnmount:A,destroyed:T,unmounted:$,render:M,renderTracked:Y,renderTriggered:F,errorCaptured:S,serverPrefetch:H,expose:V,inheritAttrs:G,components:P,directives:ee,filters:ue}=e;if(c&&Rd(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ie=o[he];j(ie)&&(s[he]=ie.bind(n))}if(i){const he=i.call(n,n);ne(he)&&(t.data=Ii(he))}if(gr=!0,r)for(const he in r){const ie=r[he],Ot=j(ie)?ie.bind(n,n):j(ie.get)?ie.get.bind(n,n):Je,Os=!j(ie)&&j(ie.set)?ie.set.bind(n):Je,Mt=qc({get:Ot,set:Os});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Ze=>Mt.value=Ze})}if(l)for(const he in l)Pc(l[he],s,n,he);if(a){const he=j(a)?a.call(n):a;Reflect.ownKeys(he).forEach(ie=>{dd(ie,he[ie])})}h&&Nl(h,t,"c");function ve(he,ie){k(ie)?ie.forEach(Ot=>he(Ot.bind(n))):ie&&he(ie.bind(n))}if(ve(Ed,u),ve(_o,f),ve(bd,_),ve(wd,m),ve(yd,E),ve(vd,L),ve(Nd,S),ve(Sd,Y),ve(Td,F),ve(Nc,A),ve(go,$),ve(Id,H),k(V))if(V.length){const he=t.exposed||(t.exposed={});V.forEach(ie=>{Object.defineProperty(he,ie,{get:()=>n[ie],set:Ot=>n[ie]=Ot})})}else t.exposed||(t.exposed={});M&&t.render===Je&&(t.render=M),G!=null&&(t.inheritAttrs=G),P&&(t.components=P),ee&&(t.directives=ee)}function Rd(t,e,n=Je,s=!1){k(t)&&(t=mr(t));for(const i in t){const r=t[i];let o;ne(r)?"default"in r?o=qn(r.from||i,r.default,!0):o=qn(r.from||i):o=qn(r),pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Nl(t,e,n){Ve(k(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pc(t,e,n,s){const i=s.includes(".")?bc(n,s):()=>n[s];if(de(t)){const r=e[t];j(r)&&zs(i,r)}else if(j(t))zs(i,t.bind(n));else if(ne(t))if(k(t))t.forEach(r=>Pc(r,e,n,s));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)&&zs(i,r,t)}}function yo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Xs(a,c,o,!0)),Xs(a,e,o)),ne(e)&&r.set(e,a),a}function Xs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Xs(t,r,n,!0),i&&i.forEach(o=>Xs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Pd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Pd={data:xl,props:Ht,emits:Ht,methods:Ht,computed:Ht,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Ht,directives:Ht,watch:Dd,provide:xl,inject:kd};function xl(t,e){return e?t?function(){return Te(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function kd(t,e){return Ht(mr(t),mr(e))}function mr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Ht(t,e){return t?Te(Te(Object.create(null),t),e):e}function Dd(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function Od(t,e,n,s=!1){const i={},r={};Gs(r,Ri,1),t.propsDefaults=Object.create(null),kc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Uf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Md(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Ti(t.emitsOptions,f))continue;const _=e[f];if(a)if(J(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const m=it(f);i[m]=yr(a,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{kc(t,e,i,r)&&(c=!0);let h;for(const u in l)(!e||!J(e,u)&&((h=kn(u))===u||!J(e,h)))&&(a?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=yr(a,l,u,void 0,t,!0)):delete i[u]);if(r!==l)for(const u in r)(!e||!J(e,u)&&!0)&&(delete r[u],c=!0)}c&&ct(t,"set","$attrs")}function kc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Ks(a))continue;const c=e[a];let h;i&&J(i,h=it(a))?!r||!r.includes(h)?n[h]=c:(l||(l={}))[h]=c:Ti(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=X(n),c=l||ce;for(let h=0;h<r.length;h++){const u=r[h];n[u]=yr(i,a,u,c[u],t,!J(c,u))}}return o}function yr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=J(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&j(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Pt(i),s=c[n]=a.call(null,e),It())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===kn(n))&&(s=!0))}return s}function Dc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!j(t)){const h=u=>{a=!0;const[f,_]=Dc(u,e,!0);Te(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!a)return ne(t)&&s.set(t,fn),fn;if(k(r))for(let h=0;h<r.length;h++){const u=it(r[h]);Al(u)&&(o[u]=ce)}else if(r)for(const h in r){const u=it(h);if(Al(u)){const f=r[h],_=o[u]=k(f)||j(f)?{type:f}:Object.assign({},f);if(_){const m=kl(Boolean,_.type),E=kl(String,_.type);_[0]=m>-1,_[1]=E<0||m<E,(m>-1||J(_,"default"))&&l.push(u)}}}const c=[o,l];return ne(t)&&s.set(t,c),c}function Al(t){return t[0]!=="$"}function Rl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Pl(t,e){return Rl(t)===Rl(e)}function kl(t,e){return k(e)?e.findIndex(n=>Pl(n,t)):j(e)&&Pl(e,t)?0:-1}const Oc=t=>t[0]==="_"||t==="$stable",vo=t=>k(t)?t.map(qe):[qe(t)],Fd=(t,e,n)=>{if(e._n)return e;const s=td((...i)=>vo(e(...i)),n);return s._c=!1,s},Mc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Oc(i))continue;const r=t[i];if(j(r))e[i]=Fd(i,r,s);else if(r!=null){const o=vo(r);e[i]=()=>o}}},Fc=(t,e)=>{const n=vo(e);t.slots.default=()=>n},Ld=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),Gs(e,"_",n)):Mc(e,t.slots={})}else t.slots={},e&&Fc(t,e);Gs(t.slots,Ri,1)},Bd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ce;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Te(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Mc(e,i)),o=e}else e&&(Fc(t,e),o={default:1});if(r)for(const l in i)!Oc(l)&&!(l in o)&&delete i[l]};function Lc(){return{app:null,config:{isNativeTag:sf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ud=0;function Hd(t,e){return function(s,i=null){j(s)||(s=Object.assign({},s)),i!=null&&!ne(i)&&(i=null);const r=Lc(),o=new Set;let l=!1;const a=r.app={_uid:Ud++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:up,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(a,...h)):j(c)&&(o.add(c),c(a,...h))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,h){return h?(r.components[c]=h,a):r.components[c]},directive(c,h){return h?(r.directives[c]=h,a):r.directives[c]},mount(c,h,u){if(!l){const f=Re(s,i);return f.appContext=r,h&&e?e(f,c):t(f,c,u),l=!0,a._container=c,c.__vue_app__=a,ki(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return r.provides[c]=h,a}};return a}}function vr(t,e,n,s,i=!1){if(k(t)){t.forEach((f,_)=>vr(f,e&&(k(e)?e[_]:e),n,s,i));return}if(zn(s)&&!i)return;const r=s.shapeFlag&4?ki(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,h=l.refs===ce?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(de(c)?(h[c]=null,J(u,c)&&(u[c]=null)):pe(c)&&(c.value=null)),j(a))wt(a,l,12,[o,h]);else{const f=de(a),_=pe(a);if(f||_){const m=()=>{if(t.f){const E=f?J(u,a)?u[a]:h[a]:a.value;i?k(E)&&Xr(E,r):k(E)?E.includes(r)||E.push(r):f?(h[a]=[r],J(u,a)&&(u[a]=h[a])):(a.value=[r],t.k&&(h[t.k]=a.value))}else f?(h[a]=o,J(u,a)&&(u[a]=o)):_&&(a.value=o,t.k&&(h[t.k]=o))};o?(m.id=-1,ke(m,n)):m()}}}const ke=fd;function Wd(t){return $d(t)}function $d(t,e){const n=uf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:_=Je,insertStaticContent:m}=t,E=(d,p,g,v=null,y=null,I=null,x=!1,w=null,N=!!p.dynamicChildren)=>{if(d===p)return;d&&!st(d,p)&&(v=Ms(d),Ze(d,y,I,!0),d=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:C,ref:D,shapeFlag:R}=p;switch(C){case Ai:L(d,p,g,v);break;case Me:U(d,p,g,v);break;case Qn:d==null&&A(p,g,v,x);break;case Ue:P(d,p,g,v,y,I,x,w,N);break;default:R&1?M(d,p,g,v,y,I,x,w,N):R&6?ee(d,p,g,v,y,I,x,w,N):(R&64||R&128)&&C.process(d,p,g,v,y,I,x,w,N,on)}D!=null&&y&&vr(D,d&&d.ref,I,p||d,!p)},L=(d,p,g,v)=>{if(d==null)s(p.el=l(p.children),g,v);else{const y=p.el=d.el;p.children!==d.children&&c(y,p.children)}},U=(d,p,g,v)=>{d==null?s(p.el=a(p.children||""),g,v):p.el=d.el},A=(d,p,g,v)=>{[d.el,d.anchor]=m(d.children,p,g,v,d.el,d.anchor)},T=({el:d,anchor:p},g,v)=>{let y;for(;d&&d!==p;)y=f(d),s(d,g,v),d=y;s(p,g,v)},$=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},M=(d,p,g,v,y,I,x,w,N)=>{x=x||p.type==="svg",d==null?Y(p,g,v,y,I,x,w,N):H(d,p,y,I,x,w,N)},Y=(d,p,g,v,y,I,x,w)=>{let N,C;const{type:D,props:R,shapeFlag:O,transition:W,dirs:Q}=d;if(N=d.el=o(d.type,I,R&&R.is,R),O&8?h(N,d.children):O&16&&S(d.children,N,null,v,y,I&&D!=="foreignObject",x,w),Q&&Ft(d,null,v,"created"),R){for(const te in R)te!=="value"&&!Ks(te)&&r(N,te,null,R[te],I,d.children,v,y,rt);"value"in R&&r(N,"value",null,R.value),(C=R.onVnodeBeforeMount)&&tt(C,v,d)}F(N,d,d.scopeId,x,v),Q&&Ft(d,null,v,"beforeMount");const re=(!y||y&&!y.pendingBranch)&&W&&!W.persisted;re&&W.beforeEnter(N),s(N,p,g),((C=R&&R.onVnodeMounted)||re||Q)&&ke(()=>{C&&tt(C,v,d),re&&W.enter(N),Q&&Ft(d,null,v,"mounted")},y)},F=(d,p,g,v,y)=>{if(g&&_(d,g),v)for(let I=0;I<v.length;I++)_(d,v[I]);if(y){let I=y.subTree;if(p===I){const x=y.vnode;F(d,x,x.scopeId,x.slotScopeIds,y.parent)}}},S=(d,p,g,v,y,I,x,w,N=0)=>{for(let C=N;C<d.length;C++){const D=d[C]=w?mt(d[C]):qe(d[C]);E(null,D,p,g,v,y,I,x,w)}},H=(d,p,g,v,y,I,x)=>{const w=p.el=d.el;let{patchFlag:N,dynamicChildren:C,dirs:D}=p;N|=d.patchFlag&16;const R=d.props||ce,O=p.props||ce;let W;g&&Lt(g,!1),(W=O.onVnodeBeforeUpdate)&&tt(W,g,p,d),D&&Ft(p,d,g,"beforeUpdate"),g&&Lt(g,!0);const Q=y&&p.type!=="foreignObject";if(C?V(d.dynamicChildren,C,w,g,v,Q,I):x||ie(d,p,w,null,g,v,Q,I,!1),N>0){if(N&16)G(w,p,R,O,g,v,y);else if(N&2&&R.class!==O.class&&r(w,"class",null,O.class,y),N&4&&r(w,"style",R.style,O.style,y),N&8){const re=p.dynamicProps;for(let te=0;te<re.length;te++){const _e=re[te],Ke=R[_e],ln=O[_e];(ln!==Ke||_e==="value")&&r(w,_e,Ke,ln,y,d.children,g,v,rt)}}N&1&&d.children!==p.children&&h(w,p.children)}else!x&&C==null&&G(w,p,R,O,g,v,y);((W=O.onVnodeUpdated)||D)&&ke(()=>{W&&tt(W,g,p,d),D&&Ft(p,d,g,"updated")},v)},V=(d,p,g,v,y,I,x)=>{for(let w=0;w<p.length;w++){const N=d[w],C=p[w],D=N.el&&(N.type===Ue||!st(N,C)||N.shapeFlag&70)?u(N.el):g;E(N,C,D,null,v,y,I,x,!0)}},G=(d,p,g,v,y,I,x)=>{if(g!==v){if(g!==ce)for(const w in g)!Ks(w)&&!(w in v)&&r(d,w,g[w],null,x,p.children,y,I,rt);for(const w in v){if(Ks(w))continue;const N=v[w],C=g[w];N!==C&&w!=="value"&&r(d,w,C,N,x,p.children,y,I,rt)}"value"in v&&r(d,"value",g.value,v.value)}},P=(d,p,g,v,y,I,x,w,N)=>{const C=p.el=d?d.el:l(""),D=p.anchor=d?d.anchor:l("");let{patchFlag:R,dynamicChildren:O,slotScopeIds:W}=p;W&&(w=w?w.concat(W):W),d==null?(s(C,g,v),s(D,g,v),S(p.children,g,D,y,I,x,w,N)):R>0&&R&64&&O&&d.dynamicChildren?(V(d.dynamicChildren,O,g,y,I,x,w),(p.key!=null||y&&p===y.subTree)&&Co(d,p,!0)):ie(d,p,g,D,y,I,x,w,N)},ee=(d,p,g,v,y,I,x,w,N)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?y.ctx.activate(p,g,v,x,N):ue(p,g,v,y,I,x,N):ye(d,p,N)},ue=(d,p,g,v,y,I,x)=>{const w=d.component=ep(d,v,y);if(Ni(d)&&(w.ctx.renderer=on),tp(w),w.asyncDep){if(y&&y.registerDep(w,ve),!d.el){const N=w.subTree=Re(Me);U(null,N,p,g)}return}ve(w,d,p,g,y,I,x)},ye=(d,p,g)=>{const v=p.component=d.component;if(rd(d,p,g))if(v.asyncDep&&!v.asyncResolved){he(v,p,g);return}else v.next=p,Qf(v.update),v.update();else p.el=d.el,v.vnode=p},ve=(d,p,g,v,y,I,x)=>{const w=()=>{if(d.isMounted){let{next:D,bu:R,u:O,parent:W,vnode:Q}=d,re=D,te;Lt(d,!1),D?(D.el=Q.el,he(d,D,x)):D=Q,R&&qs(R),(te=D.props&&D.props.onVnodeBeforeUpdate)&&tt(te,W,D,Q),Lt(d,!0);const _e=Ki(d),Ke=d.subTree;d.subTree=_e,E(Ke,_e,u(Ke.el),Ms(Ke),d,y,I),D.el=_e.el,re===null&&ho(d,_e.el),O&&ke(O,y),(te=D.props&&D.props.onVnodeUpdated)&&ke(()=>tt(te,W,D,Q),y)}else{let D;const{el:R,props:O}=p,{bm:W,m:Q,parent:re}=d,te=zn(p);if(Lt(d,!1),W&&qs(W),!te&&(D=O&&O.onVnodeBeforeMount)&&tt(D,re,p),Lt(d,!0),R&&ji){const _e=()=>{d.subTree=Ki(d),ji(R,d.subTree,d,y,null)};te?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=Ki(d);E(null,_e,g,v,d,y,I),p.el=_e.el}if(Q&&ke(Q,y),!te&&(D=O&&O.onVnodeMounted)){const _e=p;ke(()=>tt(D,re,_e),y)}(p.shapeFlag&256||re&&zn(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&ke(d.a,y),d.isMounted=!0,p=g=v=null}},N=d.effect=new no(w,()=>uo(C),d.scope),C=d.update=()=>N.run();C.id=d.uid,Lt(d,!0),C()},he=(d,p,g)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,Md(d,p.props,v,g),Bd(d,p.children,g),Dn(),bl(),On()},ie=(d,p,g,v,y,I,x,w,N=!1)=>{const C=d&&d.children,D=d?d.shapeFlag:0,R=p.children,{patchFlag:O,shapeFlag:W}=p;if(O>0){if(O&128){Os(C,R,g,v,y,I,x,w,N);return}else if(O&256){Ot(C,R,g,v,y,I,x,w,N);return}}W&8?(D&16&&rt(C,y,I),R!==C&&h(g,R)):D&16?W&16?Os(C,R,g,v,y,I,x,w,N):rt(C,y,I,!0):(D&8&&h(g,""),W&16&&S(R,g,v,y,I,x,w,N))},Ot=(d,p,g,v,y,I,x,w,N)=>{d=d||fn,p=p||fn;const C=d.length,D=p.length,R=Math.min(C,D);let O;for(O=0;O<R;O++){const W=p[O]=N?mt(p[O]):qe(p[O]);E(d[O],W,g,null,y,I,x,w,N)}C>D?rt(d,y,I,!0,!1,R):S(p,g,v,y,I,x,w,N,R)},Os=(d,p,g,v,y,I,x,w,N)=>{let C=0;const D=p.length;let R=d.length-1,O=D-1;for(;C<=R&&C<=O;){const W=d[C],Q=p[C]=N?mt(p[C]):qe(p[C]);if(st(W,Q))E(W,Q,g,null,y,I,x,w,N);else break;C++}for(;C<=R&&C<=O;){const W=d[R],Q=p[O]=N?mt(p[O]):qe(p[O]);if(st(W,Q))E(W,Q,g,null,y,I,x,w,N);else break;R--,O--}if(C>R){if(C<=O){const W=O+1,Q=W<D?p[W].el:v;for(;C<=O;)E(null,p[C]=N?mt(p[C]):qe(p[C]),g,Q,y,I,x,w,N),C++}}else if(C>O)for(;C<=R;)Ze(d[C],y,I,!0),C++;else{const W=C,Q=C,re=new Map;for(C=Q;C<=O;C++){const Le=p[C]=N?mt(p[C]):qe(p[C]);Le.key!=null&&re.set(Le.key,C)}let te,_e=0;const Ke=O-Q+1;let ln=!1,ol=0;const Un=new Array(Ke);for(C=0;C<Ke;C++)Un[C]=0;for(C=W;C<=R;C++){const Le=d[C];if(_e>=Ke){Ze(Le,y,I,!0);continue}let et;if(Le.key!=null)et=re.get(Le.key);else for(te=Q;te<=O;te++)if(Un[te-Q]===0&&st(Le,p[te])){et=te;break}et===void 0?Ze(Le,y,I,!0):(Un[et-Q]=C+1,et>=ol?ol=et:ln=!0,E(Le,p[et],g,null,y,I,x,w,N),_e++)}const ll=ln?jd(Un):fn;for(te=ll.length-1,C=Ke-1;C>=0;C--){const Le=Q+C,et=p[Le],al=Le+1<D?p[Le+1].el:v;Un[C]===0?E(null,et,g,al,y,I,x,w,N):ln&&(te<0||C!==ll[te]?Mt(et,g,al,2):te--)}}},Mt=(d,p,g,v,y=null)=>{const{el:I,type:x,transition:w,children:N,shapeFlag:C}=d;if(C&6){Mt(d.component.subTree,p,g,v);return}if(C&128){d.suspense.move(p,g,v);return}if(C&64){x.move(d,p,g,on);return}if(x===Ue){s(I,p,g);for(let R=0;R<N.length;R++)Mt(N[R],p,g,v);s(d.anchor,p,g);return}if(x===Qn){T(d,p,g);return}if(v!==2&&C&1&&w)if(v===0)w.beforeEnter(I),s(I,p,g),ke(()=>w.enter(I),y);else{const{leave:R,delayLeave:O,afterLeave:W}=w,Q=()=>s(I,p,g),re=()=>{R(I,()=>{Q(),W&&W()})};O?O(I,Q,re):re()}else s(I,p,g)},Ze=(d,p,g,v=!1,y=!1)=>{const{type:I,props:x,ref:w,children:N,dynamicChildren:C,shapeFlag:D,patchFlag:R,dirs:O}=d;if(w!=null&&vr(w,null,g,d,!0),D&256){p.ctx.deactivate(d);return}const W=D&1&&O,Q=!zn(d);let re;if(Q&&(re=x&&x.onVnodeBeforeUnmount)&&tt(re,p,d),D&6)$h(d.component,g,v);else{if(D&128){d.suspense.unmount(g,v);return}W&&Ft(d,null,p,"beforeUnmount"),D&64?d.type.remove(d,p,g,y,on,v):C&&(I!==Ue||R>0&&R&64)?rt(C,p,g,!1,!0):(I===Ue&&R&384||!y&&D&16)&&rt(N,p,g),v&&il(d)}(Q&&(re=x&&x.onVnodeUnmounted)||W)&&ke(()=>{re&&tt(re,p,d),W&&Ft(d,null,p,"unmounted")},g)},il=d=>{const{type:p,el:g,anchor:v,transition:y}=d;if(p===Ue){Wh(g,v);return}if(p===Qn){$(d);return}const I=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:x,delayLeave:w}=y,N=()=>x(g,I);w?w(d.el,I,N):N()}else I()},Wh=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},$h=(d,p,g)=>{const{bum:v,scope:y,update:I,subTree:x,um:w}=d;v&&qs(v),y.stop(),I&&(I.active=!1,Ze(x,d,p,g)),w&&ke(w,p),ke(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},rt=(d,p,g,v=!1,y=!1,I=0)=>{for(let x=I;x<d.length;x++)Ze(d[x],p,g,v,y)},Ms=d=>d.shapeFlag&6?Ms(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),rl=(d,p,g)=>{d==null?p._vnode&&Ze(p._vnode,null,null,!0):E(p._vnode||null,d,p,null,null,null,g),bl(),vc(),p._vnode=d},on={p:E,um:Ze,m:Mt,r:il,mt:ue,mc:S,pc:ie,pbc:V,n:Ms,o:t};let $i,ji;return e&&([$i,ji]=e(on)),{render:rl,hydrate:$i,createApp:Hd(rl,$i)}}function Lt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Co(t,e,n=!1){const s=t.children,i=e.children;if(k(s)&&k(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=mt(i[r]),l.el=o.el),n||Co(o,l)),l.type===Ai&&(l.el=o.el)}}function jd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Vd=t=>t.__isTeleport,Gn=t=>t&&(t.disabled||t.disabled===""),Dl=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Cr=(t,e)=>{const n=t&&t.to;return de(n)?e?e(n):null:n},Kd={__isTeleport:!0,process(t,e,n,s,i,r,o,l,a,c){const{mc:h,pc:u,pbc:f,o:{insert:_,querySelector:m,createText:E,createComment:L}}=c,U=Gn(e.props);let{shapeFlag:A,children:T,dynamicChildren:$}=e;if(t==null){const M=e.el=E(""),Y=e.anchor=E("");_(M,n,s),_(Y,n,s);const F=e.target=Cr(e.props,m),S=e.targetAnchor=E("");F&&(_(S,F),o=o||Dl(F));const H=(V,G)=>{A&16&&h(T,V,G,i,r,o,l,a)};U?H(n,Y):F&&H(F,S)}else{e.el=t.el;const M=e.anchor=t.anchor,Y=e.target=t.target,F=e.targetAnchor=t.targetAnchor,S=Gn(t.props),H=S?n:Y,V=S?M:F;if(o=o||Dl(Y),$?(f(t.dynamicChildren,$,H,i,r,o,l),Co(t,e,!0)):a||u(t,e,H,V,i,r,o,l,!1),U)S||$s(e,n,M,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const G=e.target=Cr(e.props,m);G&&$s(e,G,null,c,0)}else S&&$s(e,Y,F,c,1)}Bc(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:l,children:a,anchor:c,targetAnchor:h,target:u,props:f}=t;if(u&&r(h),(o||!Gn(f))&&(r(c),l&16))for(let _=0;_<a.length;_++){const m=a[_];i(m,e,n,!0,!!m.dynamicChildren)}},move:$s,hydrate:qd};function $s(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:a,children:c,props:h}=t,u=r===2;if(u&&s(o,e,n),(!u||Gn(h))&&a&16)for(let f=0;f<c.length;f++)i(c[f],e,n,2);u&&s(l,e,n)}function qd(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:l,querySelector:a}},c){const h=e.target=Cr(e.props,a);if(h){const u=h._lpa||h.firstChild;if(e.shapeFlag&16)if(Gn(e.props))e.anchor=c(o(t),e,l(t),n,s,i,r),e.targetAnchor=u;else{e.anchor=o(t);let f=u;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(u,e,h,n,s,i,r)}Bc(e)}return e.anchor&&o(e.anchor)}const bC=Kd;function Bc(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ue=Symbol(void 0),Ai=Symbol(void 0),Me=Symbol(void 0),Qn=Symbol(void 0),Jn=[];let je=null;function Ns(t=!1){Jn.push(je=t?null:[])}function Uc(){Jn.pop(),je=Jn[Jn.length-1]||null}let In=1;function Ol(t){In+=t}function Hc(t){return t.dynamicChildren=In>0?je||fn:null,Uc(),In>0&&je&&je.push(t),t}function Wc(t,e,n,s,i,r){return Hc(Se(t,e,n,s,i,r,!0))}function $c(t,e,n,s,i){return Hc(Re(t,e,n,s,i,!0))}function hs(t){return t?t.__v_isVNode===!0:!1}function st(t,e){return t.type===e.type&&t.key===e.key}const Ri="__vInternal",jc=({key:t})=>t!=null?t:null,Ys=({ref:t,ref_key:e,ref_for:n})=>t!=null?de(t)||pe(t)||j(t)?{i:Ie,r:t,k:e,f:!!n}:t:null;function Se(t,e=null,n=null,s=0,i=null,r=t===Ue?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jc(e),ref:e&&Ys(e),scopeId:Si,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ie};return l?(Eo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=de(n)?8:16),In>0&&!o&&je&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&je.push(a),a}const Re=zd;function zd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===xc)&&(t=Me),hs(t)){const l=Rt(t,e,!0);return n&&Eo(l,n),In>0&&!r&&je&&(l.shapeFlag&6?je[je.indexOf(t)]=l:je.push(l)),l.patchFlag|=-2,l}if(op(t)&&(t=t.__vccOpts),e){e=Yd(e);let{class:l,style:a}=e;l&&!de(l)&&(e.class=Ct(l)),ne(a)&&(cc(a)&&!k(a)&&(a=Te({},a)),e.style=vi(a))}const o=de(t)?1:od(t)?128:Vd(t)?64:ne(t)?4:j(t)?2:0;return Se(t,e,n,s,i,o,r,!0)}function Yd(t){return t?cc(t)||Ri in t?Te({},t):t:null}function Rt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Jd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&jc(l),ref:e&&e.ref?n&&i?k(i)?i.concat(Ys(e)):[i,Ys(e)]:Ys(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rt(t.ssContent),ssFallback:t.ssFallback&&Rt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Gd(t=" ",e=0){return Re(Ai,null,t,e)}function wC(t,e){const n=Re(Qn,null,t);return n.staticCount=e,n}function Qd(t="",e=!1){return e?(Ns(),$c(Me,null,t)):Re(Me,null,t)}function qe(t){return t==null||typeof t=="boolean"?Re(Me):k(t)?Re(Ue,null,t.slice()):typeof t=="object"?mt(t):Re(Ai,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rt(t)}function Eo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Eo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ri in e)?e._ctx=Ie:i===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),s&64?(n=16,e=[Gd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ct([e.class,s.class]));else if(i==="style")e.style=vi([e.style,s.style]);else if(Ci(i)){const r=e[i],o=s[i];o&&r!==o&&!(k(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function tt(t,e,n,s=null){Ve(t,e,7,[n,s])}const Xd=Lc();let Zd=0;function ep(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Xd,r={uid:Zd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dc(s,i),emitsOptions:Ec(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Xf.bind(null,r),t.ce&&t.ce(r),r}let be=null;const Pi=()=>be||Ie,Pt=t=>{be=t,t.scope.on()},It=()=>{be&&be.scope.off(),be=null};function Vc(t){return t.vnode.shapeFlag&4}let fs=!1;function tp(t,e=!1){fs=e;const{props:n,children:s}=t.vnode,i=Vc(t);Od(t,n,i,e),Ld(t,s);const r=i?np(t,e):void 0;return fs=!1,r}function np(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wn(new Proxy(t.ctx,xd));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ip(t):null;Pt(t),Dn();const r=wt(s,t,0,[t.props,i]);if(On(),It(),Zr(r)){if(r.then(It,It),e)return r.then(o=>{Er(t,o,e)}).catch(o=>{Ss(o,t,0)});t.asyncDep=r}else Er(t,r,e)}else Kc(t,e)}function Er(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=dc(e)),Kc(t,n)}let Ml;function Kc(t,e,n){const s=t.type;if(!t.render){if(!e&&Ml&&!s.render){const i=s.template||yo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Te(Te({isCustomElement:r,delimiters:l},o),a);s.render=Ml(i,c)}}t.render=s.render||Je}Pt(t),Dn(),Ad(t),On(),It()}function sp(t){return new Proxy(t.attrs,{get(e,n){return We(t,"get","$attrs"),e[n]}})}function ip(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=sp(t))},slots:t.slots,emit:t.emit,expose:e}}function ki(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dc(wn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yn)return Yn[n](t)},has(e,n){return n in e||n in Yn}}))}function rp(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function op(t){return j(t)&&"__vccOpts"in t}const qc=(t,e)=>zf(t,e,fs);function IC(t){const e=Pi();let n=t();return It(),Zr(n)&&(n=n.catch(s=>{throw Pt(e),s})),[n,()=>Pt(e)]}function lp(t,e,n){const s=arguments.length;return s===2?ne(e)&&!k(e)?hs(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&hs(n)&&(n=[n]),Re(t,e,n))}const ap=Symbol(""),cp=()=>qn(ap),up="3.2.45",hp="http://www.w3.org/2000/svg",Vt=typeof document!="undefined"?document:null,Fl=Vt&&Vt.createElement("template"),fp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Vt.createElementNS(hp,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Fl.innerHTML=s?`<svg>${t}</svg>`:t;const l=Fl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function pp(t,e,n){const s=t.style,i=de(n);if(n&&!i){for(const r in n)br(s,r,n[r]);if(e&&!de(e))for(const r in e)n[r]==null&&br(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Ll=/\s*!important$/;function br(t,e,n){if(k(n))n.forEach(s=>br(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_p(t,e);Ll.test(n)?t.setProperty(kn(s),n.replace(Ll,""),"important"):t[s]=n}}const Bl=["Webkit","Moz","ms"],Yi={};function _p(t,e){const n=Yi[e];if(n)return n;let s=it(e);if(s!=="filter"&&s in t)return Yi[e]=s;s=bi(s);for(let i=0;i<Bl.length;i++){const r=Bl[i]+s;if(r in t)return Yi[e]=r}return e}const Ul="http://www.w3.org/1999/xlink";function gp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ul,e.slice(6,e.length)):t.setAttributeNS(Ul,e,n);else{const r=ef(e);n==null||r&&!qa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function mp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=qa(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch(a){}l&&t.removeAttribute(e)}function vt(t,e,n,s){t.addEventListener(e,n,s)}function yp(t,e,n,s){t.removeEventListener(e,n,s)}function vp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Cp(e);if(s){const c=r[e]=wp(s,i);vt(t,l,c,a)}else o&&(yp(t,l,o,a),r[e]=void 0)}}const Hl=/(?:Once|Passive|Capture)$/;function Cp(t){let e;if(Hl.test(t)){e={};let s;for(;s=t.match(Hl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kn(t.slice(2)),e]}let Gi=0;const Ep=Promise.resolve(),bp=()=>Gi||(Ep.then(()=>Gi=0),Gi=Date.now());function wp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ve(Ip(s,n.value),e,5,[s])};return n.value=t,n.attached=bp(),n}function Ip(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Wl=/^on[a-z]/,Tp=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?dp(t,s,i):e==="style"?pp(t,n,s):Ci(e)?Jr(e)||vp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sp(t,e,s,i))?mp(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),gp(t,e,s,i))};function Sp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Wl.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Wl.test(e)&&de(n)?!1:e in t}function TC(t){const e=Pi();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Ir(r,i))},s=()=>{const i=t(e.proxy);wr(e.subTree,i),n(i)};pd(s),_o(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),go(()=>i.disconnect())})}function wr(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{wr(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Ir(t.el,e);else if(t.type===Ue)t.children.forEach(n=>wr(n,e));else if(t.type===Qn){let{el:n,anchor:s}=t;for(;n&&(Ir(n,e),n!==s);)n=n.nextSibling}}function Ir(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const _t="transition",Hn="animation",zc=(t,{slots:e})=>lp(wc,Np(t),e);zc.displayName="Transition";const Yc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};zc.props=Te({},wc.props,Yc);const Bt=(t,e=[])=>{k(t)?t.forEach(n=>n(...e)):t&&t(...e)},$l=t=>t?k(t)?t.some(e=>e.length>1):t.length>1:!1;function Np(t){const e={};for(const P in t)P in Yc||(e[P]=t[P]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:h=l,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,m=xp(i),E=m&&m[0],L=m&&m[1],{onBeforeEnter:U,onEnter:A,onEnterCancelled:T,onLeave:$,onLeaveCancelled:M,onBeforeAppear:Y=U,onAppear:F=A,onAppearCancelled:S=T}=e,H=(P,ee,ue)=>{Ut(P,ee?h:l),Ut(P,ee?c:o),ue&&ue()},V=(P,ee)=>{P._isLeaving=!1,Ut(P,u),Ut(P,_),Ut(P,f),ee&&ee()},G=P=>(ee,ue)=>{const ye=P?F:A,ve=()=>H(ee,P,ue);Bt(ye,[ee,ve]),jl(()=>{Ut(ee,P?a:r),gt(ee,P?h:l),$l(ye)||Vl(ee,s,E,ve)})};return Te(e,{onBeforeEnter(P){Bt(U,[P]),gt(P,r),gt(P,o)},onBeforeAppear(P){Bt(Y,[P]),gt(P,a),gt(P,c)},onEnter:G(!1),onAppear:G(!0),onLeave(P,ee){P._isLeaving=!0;const ue=()=>V(P,ee);gt(P,u),Pp(),gt(P,f),jl(()=>{!P._isLeaving||(Ut(P,u),gt(P,_),$l($)||Vl(P,s,L,ue))}),Bt($,[P,ue])},onEnterCancelled(P){H(P,!1),Bt(T,[P])},onAppearCancelled(P){H(P,!0),Bt(S,[P])},onLeaveCancelled(P){V(P),Bt(M,[P])}})}function xp(t){if(t==null)return null;if(ne(t))return[Qi(t.enter),Qi(t.leave)];{const e=Qi(t);return[e,e]}}function Qi(t){return Qt(t)}function gt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ut(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function jl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ap=0;function Vl(t,e,n,s){const i=t._endId=++Ap,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=Rp(t,e);if(!o)return s();const c=o+"end";let h=0;const u=()=>{t.removeEventListener(c,f),r()},f=_=>{_.target===t&&++h>=a&&u()};setTimeout(()=>{h<a&&u()},l+1),t.addEventListener(c,f)}function Rp(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${_t}Delay`),r=s(`${_t}Duration`),o=Kl(i,r),l=s(`${Hn}Delay`),a=s(`${Hn}Duration`),c=Kl(l,a);let h=null,u=0,f=0;e===_t?o>0&&(h=_t,u=o,f=r.length):e===Hn?c>0&&(h=Hn,u=c,f=a.length):(u=Math.max(o,c),h=u>0?o>c?_t:Hn:null,f=h?h===_t?r.length:a.length:0);const _=h===_t&&/\b(transform|all)(,|$)/.test(s(`${_t}Property`).toString());return{type:h,timeout:u,propCount:f,hasTransform:_}}function Kl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>ql(n)+ql(t[s])))}function ql(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Pp(){return document.body.offsetHeight}const Tn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return k(e)?n=>qs(e,n):e};function kp(t){t.target.composing=!0}function zl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const SC={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Tn(i);const r=s||i.props&&i.props.type==="number";vt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Qt(l)),t._assign(l)}),n&&vt(t,"change",()=>{t.value=t.value.trim()}),e||(vt(t,"compositionstart",kp),vt(t,"compositionend",zl),vt(t,"change",zl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Tn(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Qt(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},NC={deep:!0,created(t,e,n){t._assign=Tn(n),vt(t,"change",()=>{const s=t._modelValue,i=ds(t),r=t.checked,o=t._assign;if(k(s)){const l=Qr(s,i),a=l!==-1;if(r&&!a)o(s.concat(i));else if(!r&&a){const c=[...s];c.splice(l,1),o(c)}}else if(Pn(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(Gc(t,r))})},mounted:Yl,beforeUpdate(t,e,n){t._assign=Tn(n),Yl(t,e,n)}};function Yl(t,{value:e,oldValue:n},s){t._modelValue=e,k(e)?t.checked=Qr(e,s.props.value)>-1:Pn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Is(e,Gc(t,!0)))}const xC={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Pn(e);vt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Qt(ds(o)):ds(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Tn(s)},mounted(t,{value:e}){Gl(t,e)},beforeUpdate(t,e,n){t._assign=Tn(n)},updated(t,{value:e}){Gl(t,e)}};function Gl(t,e){const n=t.multiple;if(!(n&&!k(e)&&!Pn(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=ds(r);if(n)k(e)?r.selected=Qr(e,o)>-1:r.selected=e.has(o);else if(Is(ds(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ds(t){return"_value"in t?t._value:t.value}function Gc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Dp=["ctrl","shift","alt","meta"],Op={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Dp.some(n=>t[`${n}Key`]&&!e.includes(n))},AC=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Op[e[i]];if(r&&r(n,e))return}return t(n,...s)},Mp=Te({patchProp:Tp},fp);let Ql;function Fp(){return Ql||(Ql=Wd(Mp))}const RC=(...t)=>{const e=Fp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Lp(s);if(!i)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Lp(t){return de(t)?document.querySelector(t):t}var Qc=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw Mn(e)},Mn=function(t){return new Error("Firebase Database ("+Jc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[h],n[u],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||u==null)throw new Up;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),u!==64){const m=c<<6&192|u;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Up extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zc=function(t){const e=Xc(t);return bo.encodeByteArray(e,!0)},Zs=function(t){return Zc(t).replace(/\./g,"")},Tr=function(t){try{return bo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){return eu(void 0,t)}function eu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Wp(n)||(t[n]=eu(t[n],e[n]));return t}function Wp(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=()=>$p().__FIREBASE_DEFAULTS__,Vp=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kp=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&Tr(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return jp()||Vp()||Kp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qp=t=>{var e,n;return(n=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nu=t=>{const e=qp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},zp=()=>{var t;return(t=tu())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Zs(JSON.stringify(n)),Zs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function su(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gp())}function Qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iu(){return Jc.NODE_ADMIN===!0}function Jp(){try{return typeof indexedDB=="object"}catch(t){return!1}}function Xp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="FirebaseError";class Fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zp,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ru.prototype.create)}}class ru{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?e_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,l,s)}}function e_(t,e){return t.replace(t_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const t_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ps(Tr(r[0])||""),n=ps(Tr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch(r){}return{header:e,claims:n,data:s,signature:i}},n_=function(t){const e=ou(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},s_=function(t){const e=ou(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Sn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Sr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Xl(r)&&Xl(o)){if(!Sr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Xl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const f=(i<<5|i>>>27)+c+a+h+s[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function lu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Di=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch(i){}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c_(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch(n){}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch(r){}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return ge(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:a_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch(i){}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a_(t){return t===Wt?void 0:t}function c_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new l_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const h_={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},f_=oe.INFO,d_={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},p_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=d_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=f_,this._logHandler=p_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const __=(t,e)=>e.some(n=>t instanceof n);let Zl,ea;function g_(){return Zl||(Zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m_(){return ea||(ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cu=new WeakMap,Nr=new WeakMap,uu=new WeakMap,Ji=new WeakMap,Io=new WeakMap;function y_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cu.set(n,t)}).catch(()=>{}),Io.set(e,t),e}function v_(t){if(Nr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Nr.set(t,e)}let xr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function C_(t){xr=t(xr)}function E_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Xi(this),e,...n);return uu.set(s,e.sort?e.sort():[e]),Tt(s)}:m_().includes(t)?function(...e){return t.apply(Xi(this),e),Tt(cu.get(this))}:function(...e){return Tt(t.apply(Xi(this),e))}}function b_(t){return typeof t=="function"?E_(t):(t instanceof IDBTransaction&&v_(t),__(t,g_())?new Proxy(t,xr):t)}function Tt(t){if(t instanceof IDBRequest)return y_(t);if(Ji.has(t))return Ji.get(t);const e=b_(t);return e!==t&&(Ji.set(t,e),Io.set(e,t)),e}const Xi=t=>Io.get(t);function w_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Tt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Tt(o.result),a.oldVersion,a.newVersion,Tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const I_=["get","getKey","getAll","getAllKeys","count"],T_=["put","add","delete","clear"],Zi=new Map;function ta(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zi.get(e))return Zi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=T_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||I_.includes(n)))return;const r=function(o,...l){return ge(this,null,function*(){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(yield Promise.all([c[n](...l),i&&a.done]))[0]})};return Zi.set(e,r),r}C_(t=>fl(hl({},t),{get:(e,n,s)=>ta(e,n)||t.get(e,n,s),has:(e,n)=>!!ta(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function N_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ar="@firebase/app",na="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new au("@firebase/app"),x_="@firebase/app-compat",A_="@firebase/analytics-compat",R_="@firebase/analytics",P_="@firebase/app-check-compat",k_="@firebase/app-check",D_="@firebase/auth",O_="@firebase/auth-compat",M_="@firebase/database",F_="@firebase/database-compat",L_="@firebase/functions",B_="@firebase/functions-compat",U_="@firebase/installations",H_="@firebase/installations-compat",W_="@firebase/messaging",$_="@firebase/messaging-compat",j_="@firebase/performance",V_="@firebase/performance-compat",K_="@firebase/remote-config",q_="@firebase/remote-config-compat",z_="@firebase/storage",Y_="@firebase/storage-compat",G_="@firebase/firestore",Q_="@firebase/firestore-compat",J_="firebase",X_="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]",Z_={[Ar]:"fire-core",[x_]:"fire-core-compat",[R_]:"fire-analytics",[A_]:"fire-analytics-compat",[k_]:"fire-app-check",[P_]:"fire-app-check-compat",[D_]:"fire-auth",[O_]:"fire-auth-compat",[M_]:"fire-rtdb",[F_]:"fire-rtdb-compat",[L_]:"fire-fn",[B_]:"fire-fn-compat",[U_]:"fire-iid",[H_]:"fire-iid-compat",[W_]:"fire-fcm",[$_]:"fire-fcm-compat",[j_]:"fire-perf",[V_]:"fire-perf-compat",[K_]:"fire-rc",[q_]:"fire-rc-compat",[z_]:"fire-gcs",[Y_]:"fire-gcs-compat",[G_]:"fire-fst",[Q_]:"fire-fst-compat","fire-js":"fire-js",[J_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Map,Pr=new Map;function eg(t,e){try{t.container.addComponent(e)}catch(n){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(Pr.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Pr.set(e,t);for(const n of ti.values())eg(n,t);return!0}function hu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new ru("app","Firebase",tg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=X_;function fu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(n||(n=zp()),!n)throw St.create("no-options");const r=ti.get(i);if(r){if(Sr(n,r.options)&&Sr(s,r.config))return r;throw St.create("duplicate-app",{appName:i})}const o=new u_(i);for(const a of Pr.values())o.addComponent(a);const l=new ng(n,s,o);return ti.set(i,l),l}function du(t=Rr){const e=ti.get(t);if(!e&&t===Rr)return fu();if(!e)throw St.create("no-app",{appName:t});return e}function Nt(t,e,n){var s;let i=(s=Z_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(l.join(" "));return}_s(new Nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="firebase-heartbeat-database",rg=1,gs="firebase-heartbeat-store";let er=null;function pu(){return er||(er=w_(ig,rg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),er}function og(t){return ge(this,null,function*(){try{return(yield pu()).transaction(gs).objectStore(gs).get(_u(t))}catch(e){if(e instanceof Fn)Jt.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(n.message)}}})}function sa(t,e){return ge(this,null,function*(){try{const s=(yield pu()).transaction(gs,"readwrite");return yield s.objectStore(gs).put(e,_u(t)),s.done}catch(n){if(n instanceof Fn)Jt.warn(n.message);else{const s=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(s.message)}}})}function _u(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=1024,ag=30*24*60*60*1e3;class cg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}triggerHeartbeat(){return ge(this,null,function*(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ia();if(this._heartbeatsCache===null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ag}),this._storage.overwrite(this._heartbeatsCache)})}getHeartbeatsHeader(){return ge(this,null,function*(){if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ia(),{heartbeatsToSend:n,unsentEntries:s}=ug(this._heartbeatsCache.heartbeats),i=Zs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i})}}function ia(){return new Date().toISOString().substring(0,10)}function ug(t,e=lg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ra(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ra(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class hg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return ge(this,null,function*(){return Jp()?Xp().then(()=>!0).catch(()=>!1):!1})}read(){return ge(this,null,function*(){return(yield this._canUseIndexedDBPromise)?(yield og(this.app))||{heartbeats:[]}:{heartbeats:[]}})}overwrite(e){return ge(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return sa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return ge(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return sa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function ra(t){return Zs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){_s(new Nn("platform-logger",e=>new S_(e),"PRIVATE")),_s(new Nn("heartbeat",e=>new cg(e),"PRIVATE")),Nt(Ar,na,t),Nt(Ar,na,"esm2017"),Nt("fire-js","")}fg("");var dg="firebase",pg="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(dg,pg,"app");const oa="@firebase/database",la="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu="";function _g(t){gu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gg(e)}}catch(e){}return new mg},zt=mu("localStorage"),kr=mu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new au("@firebase/database"),yg=function(){let t=1;return function(){return t++}}(),yu=function(t){const e=o_(t),n=new r_;n.update(e);const s=n.digest();return bo.encodeByteArray(s)},xs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xs.apply(null,s):typeof s=="object"?e+=we(s):e+=s,e+=" "}return e};let Gt=null,aa=!0;const vg=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(gn.logLevel=oe.VERBOSE,Gt=gn.log.bind(gn),e&&kr.set("logging_enabled",!0)):typeof t=="function"?Gt=t:(Gt=null,kr.remove("logging_enabled"))},Ne=function(...t){if(aa===!0&&(aa=!1,Gt===null&&kr.get("logging_enabled")===!0&&vg(!0)),Gt){const e=xs.apply(null,t);Gt(e)}},As=function(t){return function(...e){Ne(t,...e)}},Dr=function(...t){const e="FIREBASE INTERNAL ERROR: "+xs(...t);gn.error(e)},ut=function(...t){const e=`FIREBASE FATAL ERROR: ${xs(...t)}`;throw gn.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+xs(...t);gn.warn(e)},Cg=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Eg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xn="[MIN_NAME]",Xt="[MAX_NAME]",Ln=function(t,e){if(t===e)return 0;if(t===xn||e===Xt)return-1;if(e===xn||t===Xt)return 1;{const n=ca(t),s=ca(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},bg=function(t,e){return t===e?0:t<e?-1:1},Wn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},To=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=we(e[s]),n+=":",n+=To(t[e[s]]);return n+="}",n},Cu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Eu=function(t){b(!vu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},wg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ig=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Sg=new RegExp("^-?(0*)\\d{1,10}$"),Ng=-2147483648,xg=2147483647,ca=function(t){if(Sg.test(t)){const e=Number(t);if(e>=Ng&&e<=xg)return e}return null},Rs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ag=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class mn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="5",bu="v",wu="s",Iu="r",Tu="f",Su=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nu="ls",xu="p",Or="ac",Au="websocket",Ru="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function kg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ku(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Au)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ru)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kg(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.counters_={}}incrementCounter(e,n=1){ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={},nr={};function No(t){const e=t.toString();return tr[e]||(tr[e]=new Dg),tr[e]}function Og(t,e){const n=t.toString();return nr[n]||(nr[n]=e()),nr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Rs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="start",Fg="close",Lg="pLPCommand",Bg="pRTLPCB",Du="id",Ou="pw",Mu="ser",Ug="cb",Hg="seg",Wg="ts",$g="d",jg="dframe",Fu=1870,Lu=30,Vg=Fu-Lu,Kg=25e3,qg=3e4;class un{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(e),this.stats_=No(n),this.urlFn=a=>(this.appCheckToken&&(a[Or]=this.appCheckToken),ku(n,Ru,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Mg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qg)),Eg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xo((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ua)this.id=l,this.password=a;else if(o===Fg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ua]="t",s[Mu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ug]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bu]=So,this.transportSessionId&&(s[wu]=this.transportSessionId),this.lastSessionId&&(s[Nu]=this.lastSessionId),this.applicationId&&(s[xu]=this.applicationId),this.appCheckToken&&(s[Or]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Su.test(location.hostname)&&(s[Iu]=Tu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){un.forceAllow_=!0}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){return un.forceAllow_?!0:!un.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!wg()&&!Ig()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zc(n),i=Cu(s,Vg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[jg]="t",s[Du]=e,s[Ou]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yg(),window[Lg+this.uniqueCallbackIdentifier]=e,window[Bg+this.uniqueCallbackIdentifier]=n,this.myIFrame=xo.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch(n){const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Du]=this.myID,e[Ou]=this.myPW,e[Mu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lu+s.length<=Fu;){const o=this.pendingSegs.shift();s=s+"&"+Hg+i+"="+o.seg+"&"+Wg+i+"="+o.ts+"&"+$g+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Kg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch(s){}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=16384,Yg=45e3;let ni=null;typeof MozWebSocket!="undefined"?ni=MozWebSocket:typeof WebSocket!="undefined"&&(ni=WebSocket);class Ye{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=No(n),this.connURL=Ye.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[bu]=So,typeof location!="undefined"&&location.hostname&&Su.test(location.hostname)&&(o[Iu]=Tu),n&&(o[wu]=n),s&&(o[Nu]=s),i&&(o[Or]=i),r&&(o[xu]=r),ku(e,Au,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let s;iu(),this.mySock=new ni(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ni!==null&&!Ye.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Cu(n,zg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Yg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[un,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ye&&Ye.isAvailable();let s=n&&!Ye.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const i=this.transports_=[];for(const r of ms.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ms.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=6e4,Qg=5e3,Jg=10*1024,Xg=100*1024,sr="t",ha="d",Zg="s",fa="r",em="e",da="o",pa="a",_a="n",ga="p",tm="h";class nm{constructor(e,n,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Xg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Jg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sr in e){const n=e[sr];n===pa?this.upgradeIfSecondaryHealthy_():n===fa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===da&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ga,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_a,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wn(sr,e);if(ha in e){const s=e[ha];if(n===tm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_a){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zg?this.onConnectionShutdown_(s):n===fa?this.onReset_(s):n===em?Dr("Server Error: "+s):n===da?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),So!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Gg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Qg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ga,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Uu{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!su()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new si}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=32,ya=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new se("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kt(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Hu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Wu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $u(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return De(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ao(t,e){if(kt(t)!==kt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ge(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(kt(t)>kt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class im{constructor(e,n){this.errorPrefix_=n,this.parts_=Wu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Di(this.parts_[s]);ju(this)}}function rm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Di(e),ju(t)}function om(t){const e=t.parts_.pop();t.byteLength_-=Di(e),t.parts_.length>0&&(t.byteLength_-=1)}function ju(t){if(t.byteLength_>ya)throw new Error(t.errorPrefix_+"has a key path longer than "+ya+" bytes ("+t.byteLength_+").");if(t.parts_.length>ma)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ma+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Uu{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ro}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=1e3,lm=60*5*1e3,va=30*1e3,am=1.3,cm=3e4,um="server_kill",Ca=3;class at extends Bu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=at.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$n,this.maxReconnectDelay_=lm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!iu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ro.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&si.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(we(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new wo,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;at.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ft(e,"w")){const s=Sn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||s_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=va)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=n_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Dr("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$n,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$n,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cm&&(this.reconnectDelay_=$n),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*am)}this.onConnectStatus_(!1)}establishConnection_(){return ge(this,null,function*(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+at.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=yield Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,l=new nm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{He(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(um)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&He(u),a())}}})}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jl(this.interruptReasons_)&&(this.reconnectDelay_=$n,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>To(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ca&&(this.reconnectDelay_=va,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ca&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gu.replace(/\./g,"-")]=1,su()?e["framework.cordova"]=1:Qp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=si.getInstance().currentlyOnline();return Jl(this.interruptReasons_)&&e}}at.nextPersistentConnectionId_=0;at.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(xn,e),i=new K(xn,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js;class Vu extends Oi{static get __EMPTY_NODE(){return js}static set __EMPTY_NODE(e){js=e}compare(e,n){return Ln(e.name,n.name)}isDefinedOn(e){throw Mn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Xt,js)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,js)}toString(){return".key"}}const yn=new Vu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Ee.RED,this.left=i!=null?i:Oe.EMPTY_NODE,this.right=r!=null?r:Oe.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class hm{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vs(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new hm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){return Ln(t.name,e.name)}function Po(t,e){return Ln(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;function dm(t){Mr=t}const Ku=function(t){return typeof t=="number"?"number:"+Eu(t):"string:"+t},qu=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ft(e,".sv"),"Priority must be a string or number.")}else b(t===Mr||t.isEmpty(),"priority of unexpected type.");b(t===Mr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qu(this.priorityNode_)}static set __childrenNodeConstructor(e){Ea=e}static get __childrenNodeConstructor(){return Ea}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:q(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||kt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ku(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Eu(this.value_):e+=this.value_,this.lazyHash_=yu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),r=Ce.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu,Yu;function pm(t){zu=t}function _m(t){Yu=t}class gm extends Oi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ln(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Xt,new Ce("[PRIORITY-POST]",Yu))}makePost(e,n){const s=zu(e);return new K(n,new Ce("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new gm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=Math.log(2);class ym{constructor(e){const n=r=>parseInt(Math.log(r)/mm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ii=function(t,e,n,s){t.sort(e);const i=function(a,c){const h=c-a;let u,f;if(h===0)return null;if(h===1)return u=t[a],f=n?n(u):u,new Ee(f,u.node,Ee.BLACK,null,null);{const _=parseInt(h/2,10)+a,m=i(a,_),E=i(_+1,c);return u=t[_],f=n?n(u):u,new Ee(f,u.node,Ee.BLACK,m,E)}},r=function(a){let c=null,h=null,u=t.length;const f=function(m,E){const L=u-m,U=u;u-=m;const A=i(L+1,U),T=t[L],$=n?n(T):T;_(new Ee($,T.node,E,null,A))},_=function(m){c?(c.left=m,c=m):(h=m,c=m)};for(let m=0;m<a.count;++m){const E=a.nextBitIsOne(),L=Math.pow(2,a.count-(m+1));E?f(L,Ee.BLACK):(f(L,Ee.BLACK),f(L,Ee.RED))}return h},o=new ym(t.length),l=r(o);return new Oe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;const an={};class lt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(an&&fe,"ChildrenNode.ts has not been loaded"),ir=ir||new lt({".priority":an},{".priority":fe}),ir}get(e){const n=Sn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return ft(this.indexSet_,e.toString())}addIndex(e,n){b(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ii(s,e.getCompare()):l=an;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new lt(h,c)}addToIndexes(e,n){const s=ei(this.indexes_,(i,r)=>{const o=Sn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===an)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(K.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ii(l,o.getCompare())}else return an;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new K(e.name,l))),a.insert(e,e.node)}});return new lt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ei(this.indexes_,i=>{if(i===an)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new lt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&qu(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return jn||(jn=new B(new Oe(Po),null,lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||jn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?jn:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?jn:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{b(q(e)!==".priority"||kt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ku(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":yu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ps?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vm extends B{constructor(){super(new Oe(Po),B.EMPTY_NODE,lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ps=new vm;Object.defineProperties(K,{MIN:{value:new K(xn,B.EMPTY_NODE)},MAX:{value:new K(Xt,Ps)}});Vu.__EMPTY_NODE=B.EMPTY_NODE;Ce.__childrenNodeConstructor=B;dm(Ps);_m(Ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=!0;function xe(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,xe(e))}if(!(t instanceof Array)&&Cm){const n=[];let s=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=xe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new K(o,a)))}}),n.length===0)return B.EMPTY_NODE;const r=ii(n,fm,o=>o.name,Po);if(s){const o=ii(n,fe.getCompare());return new B(r,xe(e),new lt({".priority":o},{".priority":fe}))}else return new B(r,xe(e),lt.Default)}else{let n=B.EMPTY_NODE;return Fe(t,(s,i)=>{if(ft(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}pm(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends Oi{constructor(e){super(),this.indexPath_=e,b(!z(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ln(e.name,n.name):r}makePost(e,n){const s=xe(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new K(Xt,e)}toString(){return Wu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends Oi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ln(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=xe(e);return new K(n,s)}toString(){return".value"}}const wm=new bm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){return{type:"value",snapshotNode:t}}function An(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ys(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Im(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ys(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(An(n,s)):o.trackChildChange(vs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(ys(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(vs(i,r,o))}else s.trackChildChange(An(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.indexedFilter_=new ko(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Cs.getStartPost_(e),this.endPost_=Cs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,l)=>{r.matches(new K(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Cs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,_)=>u(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new K(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(h&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(vs(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ys(n,u));const E=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(An(f.name,f.node)),E.updateImmediateChild(f.name,f.node)):E}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ys(c.name,c.node)),r.trackChildChange(An(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Do;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sm(t){return t.loadsAllData()?new ko(t.getIndex()):t.hasLimit()?new Tm(t):new Cs(t)}function ba(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===wm?n="$value":t.index_===yn?n="$key":(b(t.index_ instanceof Em,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=we(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+we(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=we(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wa(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Bu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=As("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ri.getListenId_(e,s),l={};this.listens_[o]=l;const a=ba(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Sn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ri.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ba(e._queryParams),s=e._path.toString(),i=new wo;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+i_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ps(l.responseText)}catch(c){He("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){return{value:null,children:new Map}}function Qu(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,oi());const i=t.children.get(s);e=le(e),Qu(i,e,n)}}function Fr(t,e,n){t.value!==null?n(e,t.value):xm(t,(s,i)=>{const r=new se(e.toString()+"/"+s);Fr(i,r,n)})}function xm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=10*1e3,Rm=30*1e3,Pm=5*60*1e3;class km{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Am(e);const s=Ia+(Rm-Ia)*Math.random();Xn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&ft(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qe||(Qe={}));function Ju(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Oo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Qe.ACK_USER_WRITE,this.source=Ju()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new li(Z(),n,this.revert)}}else return b(q(this.path)===e,"operationForChild called for unrelated child."),new li(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.source=e,this.path=n,this.type=Qe.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Es(this.source,Z()):new Es(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Qe.OVERWRITE}operationForChild(e){return z(this.path)?new Zt(this.source,Z(),this.snap.getImmediateChild(e)):new Zt(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Qe.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Zt(this.source,Z(),n.value):new bs(this.source,Z(),n)}else return b(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bs(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Om(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Im(o.childName,o.snapshotNode))}),Vn(t,i,"child_removed",e,s,n),Vn(t,i,"child_added",e,s,n),Vn(t,i,"child_moved",r,s,n),Vn(t,i,"child_changed",e,s,n),Vn(t,i,"value",e,s,n),i}function Vn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Fm(t,l,a)),o.forEach(l=>{const a=Mm(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Mm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Fm(t,e,n){if(e.childName==null||n.childName==null)throw Mn("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e){return{eventCache:t,serverCache:e}}function Zn(t,e,n,s){return Mi(new en(e,n,s),t.serverCache)}function Xu(t,e,n,s){return Mi(t.eventCache,new en(e,n,s))}function Lr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr;const Lm=()=>(rr||(rr=new Oe(bg)),rr);class ae{constructor(e,n=Lm()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return Fe(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(z(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:me(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new ae(null)}}set(e,n){if(z(e))return new ae(n,this.children);{const s=q(e),r=(this.children.get(s)||new ae(null)).set(le(e),n),o=this.children.insert(s,r);return new ae(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ae(null):new ae(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if(z(e))return n;{const s=q(e),r=(this.children.get(s)||new ae(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ae(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(le(e),me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),me(n,i),s):new ae(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new ae(null))}}function es(t,e,n){if(z(e))return new Xe(new ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=De(i,e);return r=r.updateChild(o,n),new Xe(t.writeTree_.set(i,r))}else{const i=new ae(n),r=t.writeTree_.setTree(e,i);return new Xe(r)}}}function Ta(t,e,n){let s=t;return Fe(n,(i,r)=>{s=es(s,me(e,i),r)}),s}function Sa(t,e){if(z(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new Xe(n)}}function Br(t,e){return sn(t,e)!=null}function sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function Na(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function xt(t,e){if(z(e))return t;{const n=sn(t,e);return n!=null?new Xe(new ae(n)):new Xe(t.writeTree_.subtree(e))}}function Ur(t){return t.writeTree_.isEmpty()}function Rn(t,e){return Zu(Z(),t.writeTree_,e)}function Zu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Zu(me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(me(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t,e){return sh(e,t)}function Bm(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=es(t.visibleWrites,e,n)),t.lastWriteId=s}function Um(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Hm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Wm(l,s.path)?i=!1:Ge(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return $m(t),!0;if(s.snap)t.visibleWrites=Sa(t.visibleWrites,s.path);else{const l=s.children;Fe(l,a=>{t.visibleWrites=Sa(t.visibleWrites,me(s.path,a))})}return!0}else return!1}function Wm(t,e){if(t.snap)return Ge(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ge(me(t.path,n),e))return!0;return!1}function $m(t){t.visibleWrites=eh(t.allWrites,jm,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jm(t){return t.visible}function eh(t,e,n){let s=Xe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ge(n,o)?(l=De(n,o),s=es(s,l,r.snap)):Ge(o,n)&&(l=De(o,n),s=es(s,Z(),r.snap.getChild(l)));else if(r.children){if(Ge(n,o))l=De(n,o),s=Ta(s,l,r.children);else if(Ge(o,n))if(l=De(o,n),z(l))s=Ta(s,Z(),r.children);else{const a=Sn(r.children,q(l));if(a){const c=a.getChild(le(l));s=es(s,Z(),c)}}}else throw Mn("WriteRecord should have .snap or .children")}}return s}function th(t,e,n,s,i){if(!s&&!i){const r=sn(t.visibleWrites,e);if(r!=null)return r;{const o=xt(t.visibleWrites,e);if(Ur(o))return n;if(n==null&&!Br(o,Z()))return null;{const l=n||B.EMPTY_NODE;return Rn(o,l)}}}else{const r=xt(t.visibleWrites,e);if(!i&&Ur(r))return n;if(!i&&n==null&&!Br(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ge(c.path,e)||Ge(e,c.path))},l=eh(t.allWrites,o,e),a=n||B.EMPTY_NODE;return Rn(l,a)}}}function Vm(t,e,n){let s=B.EMPTY_NODE;const i=sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=xt(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=Rn(xt(r,new se(o)),l);s=s.updateImmediateChild(o,a)}),Na(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xt(t.visibleWrites,e);return Na(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Km(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=me(e,n);if(Br(t.visibleWrites,r))return null;{const o=xt(t.visibleWrites,r);return Ur(o)?i.getChild(n):Rn(o,i.getChild(n))}}function qm(t,e,n,s){const i=me(e,n),r=sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=xt(t.visibleWrites,i);return Rn(o,s.getNode().getImmediateChild(n))}else return null}function zm(t,e){return sn(t.visibleWrites,e)}function Ym(t,e,n,s,i,r,o){let l;const a=xt(t.visibleWrites,e),c=sn(a,Z());if(c!=null)l=c;else if(n!=null)l=Rn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&h.length<i;)u(_,s)!==0&&h.push(_),_=f.getNext();return h}else return[]}function Gm(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function ai(t,e,n,s){return th(t.writeTree,t.treePath,e,n,s)}function Lo(t,e){return Vm(t.writeTree,t.treePath,e)}function xa(t,e,n,s){return Km(t.writeTree,t.treePath,e,n,s)}function ci(t,e){return zm(t.writeTree,me(t.treePath,e))}function Qm(t,e,n,s,i,r){return Ym(t.writeTree,t.treePath,e,n,s,i,r)}function Bo(t,e,n){return qm(t.writeTree,t.treePath,e,n)}function nh(t,e){return sh(me(t.treePath,e),t.writeTree)}function sh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,vs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ys(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,An(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,vs(s,e.snapshotNode,i.oldSnap));else throw Mn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ih=new Xm;class Uo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new en(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tn(this.viewCache_),r=Qm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){return{filter:t}}function ey(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ty(t,e,n,s,i){const r=new Jm;let o,l;if(n.type===Qe.OVERWRITE){const c=n;c.source.fromUser?o=Hr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=ui(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Qe.MERGE){const c=n;c.source.fromUser?o=sy(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Wr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Qe.ACK_USER_WRITE){const c=n;c.revert?o=oy(t,e,c.path,s,i,r):o=iy(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Qe.LISTEN_COMPLETE)o=ry(t,e,n.path,s,r);else throw Mn("Unknown operation type: "+n.type);const a=r.getChanges();return ny(e,o,a),{viewCache:o,changes:a}}function ny(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Lr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Gu(Lr(e)))}}function rh(t,e,n,s,i,r){const o=e.eventCache;if(ci(s,n)!=null)return e;{let l,a;if(z(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=tn(e),h=c instanceof B?c:B.EMPTY_NODE,u=Lo(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=ai(s,tn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=q(n);if(c===".priority"){b(kt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=xa(s,n,h,a);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=le(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=xa(s,n,o.getNode(),a);f!=null?u=o.getNode().getImmediateChild(c).updateChild(h,f):u=o.getNode().getImmediateChild(c)}else u=Bo(s,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return Zn(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function ui(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=h.updateFullNode(a.getNode(),_,null)}else{const _=q(n);if(!a.isCompleteForPath(n)&&kt(n)>1)return e;const m=le(n),L=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=h.updatePriority(a.getNode(),L):c=h.updateChild(a.getNode(),_,L,m,ih,null)}const u=Xu(e,c,a.isFullyInitialized()||z(n),h.filtersNodes()),f=new Uo(i,u,r);return rh(t,u,n,i,f,l)}function Hr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const h=new Uo(i,e,r);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Zn(e,c,!0,t.filter.filtersNodes());else{const u=q(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Zn(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=le(n),_=l.getNode().getImmediateChild(u);let m;if(z(f))m=s;else{const E=h.getCompleteChild(u);E!=null?Hu(f)===".priority"&&E.getChild($u(f)).isEmpty()?m=E:m=E.updateChild(f,s):m=B.EMPTY_NODE}if(_.equals(m))a=e;else{const E=t.filter.updateChild(l.getNode(),u,m,f,h,o);a=Zn(e,E,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Aa(t,e){return t.eventCache.isCompleteForChild(e)}function sy(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=me(n,a);Aa(e,q(h))&&(l=Hr(t,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=me(n,a);Aa(e,q(h))||(l=Hr(t,l,h,c,i,r,o))}),l}function Ra(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Wr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;z(n)?c=s:c=new ae(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),m=Ra(t,_,f);a=ui(t,a,new se(u),m,i,r,o,l)}}),c.children.inorderTraversal((u,f)=>{const _=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!_){const m=e.serverCache.getNode().getImmediateChild(u),E=Ra(t,m,f);a=ui(t,a,new se(u),E,i,r,o,l)}}),a}function iy(t,e,n,s,i,r,o){if(ci(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ui(t,e,n,a.getNode().getChild(n),i,r,l,o);if(z(n)){let c=new ae(null);return a.getNode().forEachChild(yn,(h,u)=>{c=c.set(new se(h),u)}),Wr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ae(null);return s.foreach((h,u)=>{const f=me(n,h);a.isCompleteForPath(f)&&(c=c.set(h,a.getNode().getChild(f)))}),Wr(t,e,n,c,i,r,l,o)}}function ry(t,e,n,s,i){const r=e.serverCache,o=Xu(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return rh(t,o,n,s,ih,i)}function oy(t,e,n,s,i,r){let o;if(ci(s,n)!=null)return e;{const l=new Uo(s,e,i),a=e.eventCache.getNode();let c;if(z(n)||q(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ai(s,tn(e));else{const u=e.serverCache.getNode();b(u instanceof B,"serverChildren would be complete if leaf node"),h=Lo(s,u)}h=h,c=t.filter.updateFullNode(a,h,r)}else{const h=q(n);let u=Bo(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=t.filter.updateChild(a,h,u,le(n),l,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,B.EMPTY_NODE,le(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ai(s,tn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ci(s,Z())!=null,Zn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ko(s.getIndex()),r=Sm(s);this.processor_=Zm(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),h=new en(a,o.isFullyInitialized(),i.filtersNodes()),u=new en(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Mi(u,h),this.eventGenerator_=new Dm(this.query_)}get query(){return this.query_}}function ay(t){return t.viewCache_.serverCache.getNode()}function cy(t,e){const n=tn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function Pa(t){return t.eventRegistrations_.length===0}function uy(t,e){t.eventRegistrations_.push(e)}function ka(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Da(t,e,n,s){e.type===Qe.MERGE&&e.source.queryId!==null&&(b(tn(t.viewCache_),"We should always have a full cache before handling merges"),b(Lr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=ty(t.processor_,i,e,n,s);return ey(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,oh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function hy(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(An(r,o))}),n.isFullyInitialized()&&s.push(Gu(n.getNode())),oh(t,s,n.getNode(),e)}function oh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Om(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;class fy{constructor(){this.views=new Map}}function dy(t){b(!hi,"__referenceConstructor has already been defined"),hi=t}function py(){return b(hi,"Reference.ts has not been loaded"),hi}function _y(t){return t.views.size===0}function Ho(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Da(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Da(o,e,n,s));return r}}function gy(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ai(n,i?s:null),a=!1;l?a=!0:s instanceof B?(l=Lo(n,s),a=!1):(l=B.EMPTY_NODE,a=!1);const c=Mi(new en(l,a,!1),new en(s,i,!1));return new ly(e,c)}return o}function my(t,e,n,s,i,r){const o=gy(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),uy(o,n),hy(o,n)}function yy(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Dt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ka(c,n,s)),Pa(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ka(a,n,s)),Pa(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Dt(t)&&r.push(new(py())(e._repo,e._path)),{removed:r,events:o}}function lh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const s of t.views.values())n=n||cy(s,e);return n}function ah(t,e){if(e._queryParams.loadsAllData())return Fi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ch(t,e){return ah(t,e)!=null}function Dt(t){return Fi(t)!=null}function Fi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;function vy(t){b(!fi,"__referenceConstructor has already been defined"),fi=t}function Cy(){return b(fi,"Reference.ts has not been loaded"),fi}let Ey=1;class Oa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=Gm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function by(t,e,n,s,i){return Bm(t.pendingWriteTree_,e,n,s,i),i?ks(t,new Zt(Ju(),e,n)):[]}function hn(t,e,n=!1){const s=Um(t.pendingWriteTree_,e);if(Hm(t.pendingWriteTree_,e)){let r=new ae(null);return s.snap!=null?r=r.set(Z(),!0):Fe(s.children,o=>{r=r.set(new se(o),!0)}),ks(t,new li(s.path,r,n))}else return[]}function Li(t,e,n){return ks(t,new Zt(Oo(),e,n))}function wy(t,e,n){const s=ae.fromObject(n);return ks(t,new bs(Oo(),e,s))}function Iy(t,e){return ks(t,new Es(Oo(),e))}function Ty(t,e,n){const s=Wo(t,n);if(s){const i=$o(s),r=i.path,o=i.queryId,l=De(r,e),a=new Es(Mo(o),l);return jo(t,r,a)}else return[]}function $r(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ch(o,e))){const a=yy(o,e,n,s);_y(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(f,_)=>Dt(_));if(h&&!u){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=xy(f);for(let m=0;m<_.length;++m){const E=_[m],L=E.query,U=dh(t,E);t.listenProvider_.startListening(ts(L),di(t,L),U.hashFn,U.onComplete)}}}!u&&c.length>0&&!s&&(h?t.listenProvider_.stopListening(ts(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Bi(f));t.listenProvider_.stopListening(ts(f),_)}))}Ay(t,c)}return l}function Sy(t,e,n,s){const i=Wo(t,s);if(i!=null){const r=$o(i),o=r.path,l=r.queryId,a=De(o,e),c=new Zt(Mo(l),a,n);return jo(t,o,c)}else return[]}function Ny(t,e,n,s){const i=Wo(t,s);if(i){const r=$o(i),o=r.path,l=r.queryId,a=De(o,e),c=ae.fromObject(n),h=new bs(Mo(l),a,c);return jo(t,o,h)}else return[]}function Ma(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const m=De(f,i);r=r||vn(_,m),o=o||Dt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Dt(l),r=r||vn(l,Z())):(l=new fy,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const E=vn(m,Z());E&&(r=r.updateImmediateChild(_,E))}));const c=ch(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Bi(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Ry();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const h=Fo(t.pendingWriteTree_,i);let u=my(l,e,n,h,r,a);if(!c&&!o&&!s){const f=ah(l,e);u=u.concat(Py(t,e,f))}return u}function uh(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=De(o,e),c=vn(l,a);if(c)return c});return th(i,e,r,n,!0)}function ks(t,e){return hh(e,t.syncPointTree_,null,Fo(t.pendingWriteTree_,Z()))}function hh(t,e,n,s){if(z(t.path))return fh(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=vn(i,Z()));let r=[];const o=q(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=nh(s,o);r=r.concat(hh(l,a,c,h))}return i&&(r=r.concat(Ho(i,t,s,n))),r}}function fh(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=vn(i,Z()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=nh(s,o),h=t.operationForChild(o);h&&(r=r.concat(fh(h,l,a,c)))}),i&&(r=r.concat(Ho(i,t,s,n))),r}function dh(t,e){const n=e.query,s=di(t,n);return{hashFn:()=>(ay(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ty(t,n._path,s):Iy(t,n._path);{const r=Tg(i,n);return $r(t,n,null,r)}}}}function di(t,e){const n=Bi(e);return t.queryToTagMap.get(n)}function Bi(t){return t._path.toString()+"$"+t._queryIdentifier}function Wo(t,e){return t.tagToQueryMap.get(e)}function $o(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function jo(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Fo(t.pendingWriteTree_,e);return Ho(s,n,i,null)}function xy(t){return t.fold((e,n,s)=>{if(n&&Dt(n))return[Fi(n)];{let i=[];return n&&(i=lh(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function ts(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Cy())(t._repo,t._path):t}function Ay(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Bi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ry(){return Ey++}function Py(t,e,n){const s=e._path,i=di(t,e),r=dh(t,n),o=t.listenProvider_.startListening(ts(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Dt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!z(c)&&h&&Dt(h))return[Fi(h).query];{let f=[];return h&&(f=f.concat(lh(h).map(_=>_.query))),Fe(u,(_,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(ts(h),di(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vo(n)}node(){return this.node_}}class Ko{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new Ko(this.syncTree_,n)}node(){return uh(this.syncTree_,this.path_)}}const ky=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fa=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Dy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Oy(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Dy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Oy=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},My=function(t,e,n,s){return qo(e,new Ko(n,t),s)},Fy=function(t,e,n){return qo(t,new Vo(e),n)};function qo(t,e,n){const s=t.getPriority().val(),i=Fa(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Fa(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ce(l,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ce(i))),o.forEachChild(fe,(l,a)=>{const c=qo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yo(t,e){let n=e instanceof se?e:new se(e),s=t,i=q(n);for(;i!==null;){const r=Sn(s.node.children,i)||{children:{},childCount:0};s=new zo(i,s,r),n=le(n),i=q(n)}return s}function Bn(t){return t.node.value}function ph(t,e){t.node.value=e,jr(t)}function _h(t){return t.node.childCount>0}function Ly(t){return Bn(t)===void 0&&!_h(t)}function Ui(t,e){Fe(t.node.children,(n,s)=>{e(new zo(n,t,s))})}function gh(t,e,n,s){n&&!s&&e(t),Ui(t,i=>{gh(i,e,!0,s)}),n&&s&&e(t)}function By(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ds(t){return new se(t.parent===null?t.name:Ds(t.parent)+"/"+t.name)}function jr(t){t.parent!==null&&Uy(t.parent,t.name,t)}function Uy(t,e,n){const s=Ly(n),i=ft(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,jr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=/[\[\].#$\/\u0000-\u001F\u007F]/,Wy=/[\[\].#$\u0000-\u001F\u007F]/,or=10*1024*1024,mh=function(t){return typeof t=="string"&&t.length!==0&&!Hy.test(t)},yh=function(t){return typeof t=="string"&&t.length!==0&&!Wy.test(t)},$y=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yh(t)},vh=function(t,e,n){const s=n instanceof se?new im(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(vu(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>or/3&&Di(e)>or)throw new Error(t+"contains a string greater than "+or+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!mh(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rm(s,o),vh(t,l,s),om(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},Ch=function(t,e,n,s){if(!(s&&n===void 0)&&!yh(n))throw new Error(lu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jy=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ch(t,e,n,s)},Vy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$y(n))throw new Error(lu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Eh(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ao(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function bh(t,e,n){Eh(t,n),wh(t,s=>Ao(s,e))}function rn(t,e,n){Eh(t,n),wh(t,s=>Ge(s,e)||Ge(e,s))}function wh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(qy(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Gt&&Ne("event: "+n.toString()),Rs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="repo_interrupt",Yy=25;class Gy{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ky,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=oi(),this.transactionQueueTree_=new zo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qy(t,e,n){if(t.stats_=No(t.repoInfo_),t.forceRestClient_||Ag())t.server_=new ri(t.repoInfo_,(s,i,r,o)=>{La(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ba(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new at(t.repoInfo_,e,(s,i,r,o)=>{La(t,s,i,r,o)},s=>{Ba(t,s)},s=>{Xy(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Og(t.repoInfo_,()=>new km(t.stats_,t.server_)),t.infoData_=new Nm,t.infoSyncTree_=new Oa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Li(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Go(t,"connected",!1),t.serverSyncTree_=new Oa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);rn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Jy(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ih(t){return ky({timestamp:Jy(t)})}function La(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ei(n,c=>xe(c));o=Ny(t.serverSyncTree_,r,a,i)}else{const a=xe(n);o=Sy(t.serverSyncTree_,r,a,i)}else if(s){const a=ei(n,c=>xe(c));o=wy(t.serverSyncTree_,r,a)}else{const a=xe(n);o=Li(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Jo(t,r)),rn(t.eventQueue_,l,o)}function Ba(t,e){Go(t,"connected",e),e===!1&&ev(t)}function Xy(t,e){Fe(e,(n,s)=>{Go(t,n,s)})}function Go(t,e,n){const s=new se("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=Li(t.infoSyncTree_,s,i);rn(t.eventQueue_,s,r)}function Zy(t){return t.nextWriteId_++}function ev(t){Th(t,"onDisconnectEvents");const e=Ih(t),n=oi();Fr(t.onDisconnect_,Z(),(i,r)=>{const o=My(i,r,t.serverSyncTree_,e);Qu(n,i,o)});let s=[];Fr(n,Z(),(i,r)=>{s=s.concat(Li(t.serverSyncTree_,i,r));const o=rv(t,i);Jo(t,o)}),t.onDisconnect_=oi(),rn(t.eventQueue_,Z(),s)}function tv(t,e,n){let s;q(e._path)===".info"?s=Ma(t.infoSyncTree_,e,n):s=Ma(t.serverSyncTree_,e,n),bh(t.eventQueue_,e._path,s)}function Ua(t,e,n){let s;q(e._path)===".info"?s=$r(t.infoSyncTree_,e,n):s=$r(t.serverSyncTree_,e,n),bh(t.eventQueue_,e._path,s)}function nv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zy)}function Th(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function Sh(t,e,n){return uh(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Qo(t,e=t.transactionQueueTree_){if(e||Hi(t,e),Bn(e)){const n=xh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&sv(t,Ds(e),n)}else _h(e)&&Ui(e,n=>{Qo(t,n)})}function sv(t,e,n){const s=n.map(c=>c.currentWriteId),i=Sh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];b(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=De(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Th(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(hn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Hi(t,Yo(t.transactionQueueTree_,e)),Qo(t,t.transactionQueueTree_),rn(t.eventQueue_,e,h);for(let f=0;f<u.length;f++)Rs(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{He("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Jo(t,e)}},o)}function Jo(t,e){const n=Nh(t,e),s=Ds(n),i=xh(t,n);return iv(t,i,s),s}function iv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=De(n,a.path);let h=!1,u;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(hn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Yy)h=!0,u="maxretry",i=i.concat(hn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Sh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){vh("transaction failed: Data returned ",_,a.path);let m=xe(_);typeof _=="object"&&_!=null&&ft(_,".priority")||(m=m.updatePriority(f.getPriority()));const L=a.currentWriteId,U=Ih(t),A=Fy(m,f,U);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=A,a.currentWriteId=Zy(t),o.splice(o.indexOf(L),1),i=i.concat(by(t.serverSyncTree_,a.path,A,a.currentWriteId,a.applyLocally)),i=i.concat(hn(t.serverSyncTree_,L,!0))}else h=!0,u="nodata",i=i.concat(hn(t.serverSyncTree_,a.currentWriteId,!0))}rn(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}Hi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Rs(s[l]);Qo(t,t.transactionQueueTree_)}function Nh(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&Bn(s)===void 0;)s=Yo(s,n),e=le(e),n=q(e);return s}function xh(t,e){const n=[];return Ah(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ah(t,e,n){const s=Bn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ui(e,i=>{Ah(t,i,n)})}function Hi(t,e){const n=Bn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ph(e,n.length>0?n:void 0)}Ui(e,s=>{Hi(t,s)})}function rv(t,e){const n=Ds(Nh(t,e)),s=Yo(t.transactionQueueTree_,e);return By(s,i=>{lr(t,i)}),lr(t,s),gh(s,i=>{lr(t,i)}),n}function lr(t,e){const n=Bn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ph(e,void 0):n.length=r+1,rn(t.eventQueue_,Ds(e),i);for(let o=0;o<s.length;o++)Rs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(r){}e+="/"+i}return e}function lv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ha=function(t,e){const n=av(t),s=n.namespace;n.domain==="firebase.com"&&ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Cg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Pu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},av=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=ov(t.substring(h,u)));const f=lv(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class Ph{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:Hu(this._path)}get ref(){return new dt(this._repo,this._path)}get _queryIdentifier(){const e=wa(this._queryParams),n=To(e);return n==="{}"?"default":n}get _queryObject(){return wa(this._queryParams)}isEqual(e){if(e=nn(e),!(e instanceof Xo))return!1;const n=this._repo===e._repo,s=Ao(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sm(this._path)}}class dt extends Xo{constructor(e,n){super(e,n,new Do,!1)}get parent(){const e=$u(this._path);return e===null?null:new dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ws{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=pi(this.ref,e);return new ws(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ws(i,pi(this.ref,s),fe)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function uv(t,e){return t=nn(t),t._checkNotDeleted("ref"),e!==void 0?pi(t._root,e):t._root}function pi(t,e){return t=nn(t),q(t._path)===null?jy("child","path",e,!1):Ch("child","path",e,!1),new dt(t._repo,me(t._path,e))}class Zo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Rh("value",this,new ws(e.snapshotNode,new dt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ph(this,e,n):null}matches(e){return e instanceof Zo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class el{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ph(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=pi(new dt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Rh(e.type,this,new ws(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof el?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function hv(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(h,u)=>{Ua(t._repo,t,l),a(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new cv(n,r||void 0),l=e==="value"?new Zo(o):new el(e,o);return tv(t._repo,t,l),()=>Ua(t._repo,t,l)}function fv(t,e,n,s){return hv(t,"value",e,n,s)}dy(dt);vy(dt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="FIREBASE_DATABASE_EMULATOR_HOST",Vr={};let pv=!1;function _v(t,e,n,s){t.repoInfo_=new Pu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function gv(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ha(r,i),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[dv]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ha(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new mn(mn.OWNER):new Pg(t.name,t.options,e);Vy("Invalid Firebase Database URL",o),z(o.path)||ut("Database URL must point to the root of a Firebase Database (not including a child path).");const u=yv(l,t,h,new Rg(t.name,n));return new vv(u,t)}function mv(t,e){const n=Vr[e];(!n||n[t.key]!==t)&&ut(`Database ${e}(${t.repoInfo_}) has already been deleted.`),nv(t),delete n[t.key]}function yv(t,e,n,s){let i=Vr[e.name];i||(i={},Vr[e.name]=i);let r=i[t.toURLString()];return r&&ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gy(t,pv,n,s),i[t.toURLString()]=r,r}class vv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ut("Cannot call "+e+" on a deleted database.")}}function Cv(t=du(),e){const n=hu(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=nu("database");s&&Ev(n,...s)}return n}function Ev(t,e,n,s={}){t=nn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ut("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new mn(mn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Yp(s.mockUserToken,t.app.options.projectId);r=new mn(o)}_v(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t){_g(sg),_s(new Nn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gv(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Nt(oa,la,t),Nt(oa,la,"esm2017")}at.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};at.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bv();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="type.googleapis.com/google.protobuf.Int64Value",Iv="type.googleapis.com/google.protobuf.UInt64Value";function kh(t,e){const n={};for(const s in t)t.hasOwnProperty(s)&&(n[s]=e(t[s]));return n}function Kr(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Kr(e));if(typeof t=="function"||typeof t=="object")return kh(t,e=>Kr(e));throw new Error("Data cannot be encoded in JSON: "+t)}function _i(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case wv:case Iv:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>_i(e)):typeof t=="function"||typeof t=="object"?kh(t,e=>_i(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Cn extends Fn{constructor(e,n,s){super(`${tl}/${e}`,n||""),this.details=s}}function Tv(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Sv(t,e){let n=Tv(t),s=n,i;try{const r=e&&e.error;if(r){const o=r.status;if(typeof o=="string"){if(!Wa[o])return new Cn("internal","internal");n=Wa[o],s=o}const l=r.message;typeof l=="string"&&(s=l),i=r.details,i!==void 0&&(i=_i(i))}}catch(r){}return n==="ok"?null:new Cn(n,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s.get().then(i=>this.appCheck=i,()=>{})}getAuthToken(){return ge(this,null,function*(){if(!!this.auth)try{const e=yield this.auth.getToken();return e==null?void 0:e.accessToken}catch(e){return}})}getMessagingToken(){return ge(this,null,function*(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return yield this.messaging.getToken()}catch(e){return}})}getAppCheckToken(){return ge(this,null,function*(){if(this.appCheck){const e=yield this.appCheck.getToken();return e.error?null:e.token}return null})}getContext(){return ge(this,null,function*(){const e=yield this.getAuthToken(),n=yield this.getMessagingToken(),s=yield this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:s}})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="us-central1";function xv(t){let e=null;return{promise:new Promise((n,s)=>{e=setTimeout(()=>{s(new Cn("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Av{constructor(e,n,s,i,r=qr,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Nv(n,s,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(r);this.customDomain=l.origin,this.region=qr}catch(l){this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function Rv(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function Pv(t,e,n){return s=>Dv(t,e,s,n||{})}function kv(t,e,n,s){return ge(this,null,function*(){n["Content-Type"]="application/json";let i;try{i=yield s(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch(o){return{status:0,json:null}}let r=null;try{r=yield i.json()}catch(o){}return{status:i.status,json:r}})}function Dv(t,e,n,s){const i=t._url(e);return Ov(t,i,n,s)}function Ov(t,e,n,s){return ge(this,null,function*(){n=Kr(n);const i={data:n},r={},o=yield t.contextProvider.getContext();o.authToken&&(r.Authorization="Bearer "+o.authToken),o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const l=s.timeout||7e4,a=xv(l),c=yield Promise.race([kv(e,i,r,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!c)throw new Cn("cancelled","Firebase Functions instance was deleted.");const h=Sv(c.status,c.json);if(h)throw h;if(!c.json)throw new Cn("internal","Response is not valid JSON object.");let u=c.json.data;if(typeof u=="undefined"&&(u=c.json.result),typeof u=="undefined")throw new Cn("internal","Response is missing data field.");return{data:_i(u)}})}const $a="@firebase/functions",ja="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="auth-internal",Fv="app-check-internal",Lv="messaging-internal";function Bv(t,e){const n=(s,{instanceIdentifier:i})=>{const r=s.getProvider("app").getImmediate(),o=s.getProvider(Mv),l=s.getProvider(Lv),a=s.getProvider(Fv);return new Av(r,o,l,a,i,t)};_s(new Nn(tl,n,"PUBLIC").setMultipleInstances(!0)),Nt($a,ja,e),Nt($a,ja,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t=du(),e=qr){const s=hu(nn(t),tl).getImmediate({identifier:e}),i=nu("functions");return i&&Hv(s,...i),s}function Hv(t,e,n){Rv(nn(t),e,n)}function Dh(t,e,n){return Pv(nn(t),e,n)}Bv(fetch.bind(self));const Oh=fu({apiKey:"AIzaSyDGUkaO1mraLUBf7yUIKk9IJHjVYAWE2IQ",authDomain:"gomk-195001.firebaseapp.com",databaseURL:"https://license-practice.asia-southeast1.firebasedatabase.app",projectId:"gomk-195001",storageBucket:"gomk-195001.appspot.com",messagingSenderId:"1068020387658",appId:"1:1068020387658:web:70c48d3301baa2394d7bb3"}),Wv=Cv(Oh),Mh=Uv(Oh),PC=t=>{const e=ao(null),n=uv(Wv,t);return fv(n,s=>{e.value=s.val()}),e},kC=Dh(Mh,"license_practice/exam_count");Dh(Mh,"license_practice/driving_schools");const $v=t=>(Zf("data-v-033c1c5e"),t=t(),ed(),t),jv={class:"sub-nav"},Vv={class:"sub-nav-container container-md"},Kv={class:"sub-nav-inner-container"},qv={class:"sub-nav-list"},zv=$v(()=>Se("li",null,[Se("a",{class:"sub-nav-link",href:"https://promotion.gogoro.com/tw/collections/license-practice/",target:"_blank"},"\u65B0\u8CFC\u6307\u5357")],-1)),Yv={__name:"SecondaryNav",setup(t){const e=window.location.pathname.replace("/tw/event/license-practice",""),n=s=>e===s;return(s,i)=>(Ns(),Wc("nav",jv,[Se("div",Vv,[Se("div",Kv,[Se("ul",qv,[Se("li",null,[Se("a",{class:Ct(["sub-nav-link",{active:n("/")}]),href:"/tw/event/license-practice/"},"\u9996\u9801",2)]),Se("li",null,[Se("a",{class:Ct(["sub-nav-link",{active:n("/for-dummies/")||n("/driving-schools/")}]),href:"/tw/event/license-practice/for-dummies/"},"\u99D5\u7167\u61F6\u4EBA\u5305",2)]),Se("li",null,[Se("a",{class:Ct(["sub-nav-link",{active:n("/exam/")}]),href:"/tw/event/license-practice/exam/"},"\u7B46\u8A66\u6A21\u64EC",2)]),Se("li",null,[Se("a",{class:Ct(["sub-nav-link",{active:n("/road-test/")}]),href:"/tw/event/license-practice/road-test/"},"\u8DEF\u8003\u6E96\u5099",2)]),zv])])])]))}};var DC=Qc(Yv,[["__scopeId","data-v-033c1c5e"]]);function Gv(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var nl=!1;if(typeof window!="undefined"){var Va={get passive(){nl=!0}};window.addEventListener("testPassive",null,Va),window.removeEventListener("testPassive",null,Va)}var gi=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),En=[],mi=!1,sl=-1,ns=void 0,Kt=void 0,ss=void 0,Fh=function(e){return En.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},yi=function(e){var n=e||window.event;return Fh(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},Qv=function(e){if(ss===void 0){var n=!!e&&e.reserveScrollBarGap===!0,s=window.innerWidth-document.documentElement.clientWidth;if(n&&s>0){var i=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);ss=document.body.style.paddingRight,document.body.style.paddingRight=i+s+"px"}}ns===void 0&&(ns=document.body.style.overflow,document.body.style.overflow="hidden")},Jv=function(){ss!==void 0&&(document.body.style.paddingRight=ss,ss=void 0),ns!==void 0&&(document.body.style.overflow=ns,ns=void 0)},Xv=function(){return window.requestAnimationFrame(function(){if(Kt===void 0){Kt={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,n=e.scrollY,s=e.scrollX,i=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-s,setTimeout(function(){return window.requestAnimationFrame(function(){var r=i-window.innerHeight;r&&n>=i&&(document.body.style.top=-(n+r))})},300)}})},Zv=function(){if(Kt!==void 0){var e=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=Kt.position,document.body.style.top=Kt.top,document.body.style.left=Kt.left,window.scrollTo(n,e),Kt=void 0}},eC=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},tC=function(e,n){var s=e.targetTouches[0].clientY-sl;return Fh(e.target)?!1:n&&n.scrollTop===0&&s>0||eC(n)&&s<0?yi(e):(e.stopPropagation(),!0)},OC=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!En.some(function(i){return i.targetElement===e})){var s={targetElement:e,options:n||{}};En=[].concat(Gv(En),[s]),gi?Xv():Qv(n),gi&&(e.ontouchstart=function(i){i.targetTouches.length===1&&(sl=i.targetTouches[0].clientY)},e.ontouchmove=function(i){i.targetTouches.length===1&&tC(i,e)},mi||(document.addEventListener("touchmove",yi,nl?{passive:!1}:void 0),mi=!0))}},MC=function(){gi&&(En.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),mi&&(document.removeEventListener("touchmove",yi,nl?{passive:!1}:void 0),mi=!1),sl=-1),gi?Zv():Jv(),En=[]};const nC="https://api.apifly.io/tables/bW6BsHev42idyo8X",sC={data(){return{news:null}},mounted(){return ge(this,null,function*(){const e=yield(yield fetch(nC)).json();this.news=e.result[0]})}},iC=["href"],rC={class:"news-container"};function oC(t,e,n,s,i,r){return i.news?(Ns(),Wc("a",{key:0,class:"news",href:i.news.url,target:"_blank"},[Se("span",rC,nf(i.news.message),1)],8,iC)):Qd("",!0)}var FC=Qc(sC,[["render",oC],["__scopeId","data-v-9b90d120"]]),lC=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Lh;const Wi=t=>Lh=t,Bh=Symbol();function zr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var is;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(is||(is={}));function LC(){const t=Ja(!0),e=t.run(()=>ao({}));let n=[],s=[];const i=wn({install(r){Wi(i),i._a=r,r.provide(Bh,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!lC?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Uh=()=>{};function Ka(t,e,n,s=Uh){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&ff()&&df(i),i}function cn(t,...e){t.slice().forEach(n=>{n(...e)})}function Yr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];zr(i)&&zr(s)&&t.hasOwnProperty(n)&&!pe(s)&&!bt(s)?t[n]=Yr(i,s):t[n]=s}return t}const aC=Symbol();function cC(t){return!zr(t)||!t.hasOwnProperty(aC)}const{assign:yt}=Object;function uC(t){return!!(pe(t)&&t.effect)}function hC(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const h=jf(n.state.value[t]);return yt(h,r,Object.keys(o||{}).reduce((u,f)=>(u[f]=wn(qc(()=>{Wi(n);const _=n._s.get(t);return o[f].call(_,_)})),u),{}))}return a=Hh(t,c,e,n,s,!0),a.$reset=function(){const u=i?i():{};this.$patch(f=>{yt(f,u)})},a}function Hh(t,e,n={},s,i,r){let o;const l=yt({actions:{}},n),a={deep:!0};let c,h,u=wn([]),f=wn([]),_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),ao({});let E;function L(F){let S;c=h=!1,typeof F=="function"?(F(s.state.value[t]),S={type:is.patchFunction,storeId:t,events:_}):(Yr(s.state.value[t],F),S={type:is.patchObject,payload:F,storeId:t,events:_});const H=E=Symbol();gc().then(()=>{E===H&&(c=!0)}),h=!0,cn(u,S,s.state.value[t])}const U=Uh;function A(){o.stop(),u=[],f=[],s._s.delete(t)}function T(F,S){return function(){Wi(s);const H=Array.from(arguments),V=[],G=[];function P(ye){V.push(ye)}function ee(ye){G.push(ye)}cn(f,{args:H,name:F,store:M,after:P,onError:ee});let ue;try{ue=S.apply(this&&this.$id===t?this:M,H)}catch(ye){throw cn(G,ye),ye}return ue instanceof Promise?ue.then(ye=>(cn(V,ye),ye)).catch(ye=>(cn(G,ye),Promise.reject(ye))):(cn(V,ue),ue)}}const $={_p:s,$id:t,$onAction:Ka.bind(null,f),$patch:L,$reset:U,$subscribe(F,S={}){const H=Ka(u,F,S.detached,()=>V()),V=o.run(()=>zs(()=>s.state.value[t],G=>{(S.flush==="sync"?h:c)&&F({storeId:t,type:is.direct,events:_},G)},yt({},a,S)));return H},$dispose:A},M=Ii($);s._s.set(t,M);const Y=s._e.run(()=>(o=Ja(),o.run(()=>e())));for(const F in Y){const S=Y[F];if(pe(S)&&!uC(S)||bt(S))r||(m&&cC(S)&&(pe(S)?S.value=m[F]:Yr(S,m[F])),s.state.value[t][F]=S);else if(typeof S=="function"){const H=T(F,S);Y[F]=H,l.actions[F]=S}}return yt(M,Y),yt(X(M),Y),Object.defineProperty(M,"$state",{get:()=>s.state.value[t],set:F=>{L(S=>{yt(S,F)})}}),s._p.forEach(F=>{yt(M,o.run(()=>F({store:M,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(M.$state,m),c=!0,h=!0,M}function BC(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,a){const c=Pi();return l=l||c&&qn(Bh,null),l&&Wi(l),l=Lh,l._s.has(s)||(r?Hh(s,e,i,l):hC(s,i,l)),l._s.get(s)}return o.$id=s,o}export{vC as $,go as A,MC as B,$c as C,EC as D,Qd as E,Ue as F,dC as G,Yd as H,RC as I,LC as J,jf as K,AC as L,mC as M,FC as N,xC as O,Ct as P,SC as Q,Nc as R,DC as S,bC as T,BC as U,IC as V,Kf as W,pe as X,NC as Y,kC as Z,Qc as _,Ns as a,_C as a0,zc as a1,TC as a2,vi as a3,Se as b,Wc as c,Re as d,qc as e,Ii as f,gC as g,lp as h,qn as i,ao as j,td as k,Zf as l,ed as m,gc as n,_o as o,dd as p,Gd as q,yC as r,pC as s,PC as t,Wf as u,CC as v,zs as w,nf as x,wC as y,OC as z};
