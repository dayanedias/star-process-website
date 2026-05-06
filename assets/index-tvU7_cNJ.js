var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=ee,D=function(){ne.postMessage(null)}}else D=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Q(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Q(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Ud(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=ce)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function j(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(Cu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,`passive`,{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var M=gn&&`TextEvent`in window&&!er,tr=gn&&(!$n||er&&8<er&&11>=er),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!$n&&ir(e,t)?(e=Sn(),xn=bn=yn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=kd(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,N=null;function pr(e){Sd(e,0)}function mr(e){if(Ht(Tt(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(gn){var _r;if(gn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){fr&&(fr.detachEvent(`onpropertychange`,xr),N=fr=null)}function xr(e){if(e.propertyName===`value`&&mr(N)){var t=[];dr(t,N,e,ln(e)),mn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),fr=t,N=n,fr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(N)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=gn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Ut(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=kd(Ir,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};gn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),At(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<mu)throw mu=0,hu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=pi(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=pi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=pi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Ge(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Y(`cancel`,t),Y(`close`,t);break;case`iframe`:case`object`:case`embed`:Y(`load`,t);break;case`video`:case`audio`:for(n=0;n<bd.length;n++)Y(bd[n],t);break;case`source`:Y(`error`,t);break;case`img`:case`image`:case`link`:Y(`error`,t),Y(`load`,t);break;case`details`:Y(`toggle`,t);break;case`input`:Y(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Y(`invalid`,t);break;case`textarea`:Y(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Fd(t.textContent,n)?(r.popover!=null&&(Y(`beforetoggle`,t),Y(`toggle`,t)),r.onScroll!=null&&Y(`scroll`,t),r.onScrollEnd!=null&&Y(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Ri=Ri.return}}function Gi(e){if(e!==Ri)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Ki(){P=Ri=null,F=!1}function qi(){var e=zi;return e!==null&&(eu===null?eu=e:eu.push.apply(eu,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var I=de(null),Yi=null,L=null;function Xi(e,t,n){A(I,t._currentValue),t._currentValue=n}function R(e){e._currentValue=I.current,fe(I)}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Zi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Zi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function $i(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Qi(t,e,n,r),t.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){Yi=e,L=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return ia(Yi,e)}function ra(e,t){return Yi===null&&ta(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},L===null){if(e===null)throw Error(i(308));L=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else L=L.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,ca={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new aa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var da=null,fa=0,pa=0,ma=null;function ha(e,t){if(da===null){var n=da=[];fa=0,pa=md(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ga,ga),t}function ga(){if(--fa===0&&da!==null){ma!==null&&(ma.status=`fulfilled`);var e=da;da=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=O.S;O.S=function(e,t){ru=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=de(null);function ba(){var e=ya.current;return e===null?W.pooledCache:e}function xa(e,t){t===null?A(ya,ya.current):A(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:ca._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=W,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case D:return t=ka(t),f(e,t,n)}if(se(t)||ie(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===C)return f(e,ra(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=ka(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===C)return p(e,t,ra(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=ka(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===C)return m(e,t,n,ra(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=ka(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===C)return b(e,r,ra(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ja=!1;function Ya(){if(Ja){var e=ma;if(e!==null)throw e}}function Xa(e,t,n,r){Ja=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(K&f)===f:(r&f)===f){f!==0&&f===pa&&(Ja=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Va=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Jl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=de(null),eo=de(0);function to(e,t){e=Kl,A(eo,e),A($a,t),Kl=e|t.baseLanes}function no(){A(eo,Kl),A($a,$a.current)}function ro(){Kl=eo.current,fe($a),fe(eo)}var io=de(null),ao=null;function oo(e){var t=e.alternate;A(fo,fo.current&1),A(io,e),ao===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){A(fo,fo.current),A(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(A(fo,fo.current),A(io,e),ao===null&&(ao=e)):lo(e)}function lo(){A(fo,fo.current),A(io,io.current)}function uo(e){fe(io),ao===e&&(ao=null),fe(fo)}var fo=de(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,V=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function So(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Bs:Vs,_o=!1,a=n(r,i),_o=!1,go&&(a=H(t,n,r,i)),To(e),a}function To(e){O.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,V=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ea(e)&&(ic=!0))}function H(e,t,n,r){z=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Hs,o=t(n,r)}while(go);return o}function Eo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(V){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}V=!1}mo=0,ho=B=z=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function jo(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=Oa(bo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return na(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(K&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((mo&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Jl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Jl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(ic=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=jo(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),W===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Go(e){var t=ci(e,2);t!==null&&vu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(F){var n=W.formState;if(n!==null){a:{var r=z;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=B;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(U&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),_o){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(K&261930)?e.memoizedState=t:(e.memoizedState=n,e=_u(),z.lanes|=e,Jl|=e,n)}function Ss(e,t,n,r){return Dr(n,t)?n:$a.current===null?!(mo&42)||mo&1073741824&&!(K&261930)?(ic=!0,e.memoizedState=n):(e=_u(),z.lanes|=e,Jl|=e,t):(e=xs(e,n,r),Dr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Fs(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,_a(c,r),gu(e)):Ps(e,t,r,gu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},gu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ce,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},gu())}function Os(){return na(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gu();e=Wa(n);var r=Ga(t,e,n);r!==null&&(vu(r,t,n),Ka(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=gu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=si(e,t,n,r),n!==null&&(vu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,gu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),W===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return vu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:md(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&vu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){go=V=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var zs={readContext:na,use:Po,useCallback:So,useContext:So,useEffect:So,useImperativeHandle:So,useLayoutEffect:So,useInsertionEffect:So,useMemo:So,useReducer:So,useRef:So,useState:So,useDebugValue:So,useDeferredValue:So,useTransition:So,useSyncExternalStore:So,useId:So,useHostTransitionStatus:So,useFormState:So,useActionState:So,useOptimistic:So,useMemoCache:So,useCacheRefresh:So};zs.useEffectEvent=So;var Bs={readContext:na,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=Ao();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),W===null)throw Error(i(349));K&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=W.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(vu(t,e,r),Ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(vu(t,e,r),Ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=Ga(e,r,n),t!==null&&(vu(t,e,n),Ka(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ti(e)}function Ys(e){console.error(e)}function Xs(e){ti(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Wa(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ou===null?ou=new Set([this]):ou.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&$i(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Au():n.alternate===null&&ql===0&&(ql=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(i(435,n.tag))}return Ju(e,r,a),Au(),!1}if(F)return t=io.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=$s(e.stateNode,r,a),qa(e,a),ql!==4&&(ql=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),$l===null?$l=[o]:$l.push(o),ql!==4&&(ql=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ou===null||!ou.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),qa(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ta(t),r=wo(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(F&&s&&Fi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?no():to(t,a),co(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),no(),lo(t)):(xa(t,a.cachePool),to(t,a),lo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:ca._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),no(),co(t),e!==null&&$i(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return za(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(so(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||$i(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=W,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),vu(r,e,s),rc;Au(),t=pc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=fc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ta(t),n=wo(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(F&&r&&Fi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ta(t),t.updateQueue=null,n=H(t,r,n,i),To(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(F&&r&&Fi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ta(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?na(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Va||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Va||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ki(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Sa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Zl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(fo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(F){if(a?oo(t):lo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(oo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||$i(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=W,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),vu(s,e,r),rc;af(c)||Au(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Sa():(l=ca._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return za(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=fo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(fo,o),ac(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ea(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Xi(t,ca,e.memoizedState.cache),Ki();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=($i(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(fo,fo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,ca,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,ca,r),r!==o.cache&&Qi(t,[ca],n,!0),Ya(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Ji(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,zi=null,Bi=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Hd(he.current).createElement(n),r[mt]=t,r[ht]=e,Ld(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Ri=t,Bi=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Hi(t)),null;case 13:return Cc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ta(t),a=na(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ta(t),r=na(ca),e===null?(a=ba(),a===null&&(a=W,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),Xi(t,ca,a)):((e.lanes&n)!==0&&(Ua(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,ca,r),r!==a.cache&&Qi(t,[ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,ca,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Du())e.flags|=8192;else throw Aa=Ea,wa}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Du())e.flags|=8192;else throw Aa=Ea,wa}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Ql|=t)}function Rc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function zc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zc(t),null;case 1:return zc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),R(ca),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),zc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(zc(t),Fc(t,a,null,r,n)):(zc(t),Ic(t,o))):o?o===e.memoizedState?(zc(t),t.flags&=-16777217):(Pc(t),zc(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),zc(t),Fc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}e=pe.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return zc(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}if(o=pe.current,Gi(t))Ui(t,o);else{var s=Hd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Ld(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return zc(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Fd(e.nodeValue,n)),e||Hi(t,!0)}else e=Hd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return zc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return zc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),zc(t),null);case 4:return ve(),e===null&&Td(t.stateNode.containerInfo),zc(t),null;case 10:return R(t.type),zc(t),null;case 19:if(fe(fo),r=t.memoizedState,r===null)return zc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(ql!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return A(fo,fo.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>iu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return zc(t),null}else 2*Ne()-r.renderingStartTime>iu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(zc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=fo.current,A(fo,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(zc(t),t.subtreeFlags&6&&(t.flags|=8192)):zc(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),R(ca),zc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return R(ca),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(fo),null;case 4:return ve(),null;case 10:return R(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&fe(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return R(ca),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ii(t),t.tag){case 3:R(ca),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:fe(fo);break;case 10:R(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&fe(ya);break;case 24:R(ca)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){J(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){J(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){J(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){J(e,e.return,t)}}}function Kc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){J(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){J(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){J(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){J(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Rd(r,e.type,n,t),r[ht]=t}catch(t){J(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ld(t,r,n),t[mt]=e,t[ht]=n}catch(t){J(e,e.return,t)}}var nl=!1,rl=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Z=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Vd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){J(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Uc(5,n);break;case 1:if(Cl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){J(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){J(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){J(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&ml(e,n);break;case 13:Cl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||rl,i=nl;var a=rl;nl=r,(rl=t)&&!a?Tl(e,n,(n.subtreeFlags&8772)!=0):Cl(e,n),nl=i,rl=a}break;case 30:break;default:Cl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ul=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:rl||Jc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rl||Jc(n,t);var r=ul,i=dl;Zd(n.type)&&(ul=n.stateNode,dl=!1),fl(e,t,n),pf(n.stateNode),ul=r,dl=i;break;case 5:rl||Jc(n,t);case 6:if(r=ul,i=dl,ul=null,fl(e,t,n),ul=r,dl=i,ul!==null)if(dl)try{(ul.nodeType===9?ul.body:ul.nodeName===`HTML`?ul.ownerDocument.body:ul).removeChild(n.stateNode)}catch(e){J(n,t,e)}else try{ul.removeChild(n.stateNode)}catch(e){J(n,t,e)}break;case 18:ul!==null&&(dl?(e=ul,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,fl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),rl||Wc(4,n,t),fl(e,t,n);break;case 1:rl||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:rl=(r=rl)||n.memoizedState!==null,fl(e,t,n),rl=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){J(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){J(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function _l(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qu.bind(null,e,t);t.then(r,r)}})}function vl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){ul=c.stateNode,dl=!1;break a}break;case 5:ul=c.stateNode,dl=!1;break a;case 3:case 4:ul=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(ul===null)throw Error(i(160));pl(o,s,a),ul=null,dl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e),t=t.sibling}var yl=null;function bl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vl(t,e),xl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=yl;if(vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Ld(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){J(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(vl(t,e),xl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){J(e,e.return,t)}}break;case 3:if(Bf=null,a=yl,yl=gf(t.containerInfo),vl(t,e),yl=a,xl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){J(e,e.return,t)}il&&(il=!1,Sl(e));break;case 4:r=yl,yl=gf(e.stateNode.containerInfo),vl(t,e),xl(e),yl=r;break;case 12:vl(t,e),xl(e);break;case 31:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 13:vl(t,e),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(nu=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=rl;if(nl=u||a,rl=d||l,vl(t,e),rl=d,nl=u,xl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||rl||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){J(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){J(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){J(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_l(e,n))));break;case 19:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 30:break;case 21:break;default:vl(t,e),xl(e)}}function xl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){J(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),wl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),wl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Uc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){J(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){J(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&ml(i,a);break;case 13:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),qc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Uc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){J(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&Gf(n,yl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=yl;yl=gf(e.stateNode.containerInfo),Nl(e,t,n),yl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,zl(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):Il(e);break;default:Il(e)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,zl(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function zl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var Bl={getCacheForType:function(e){var t=na(ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return na(ca).controller.signal}},Vl=typeof WeakMap==`function`?WeakMap:Map,U=0,W=null,G=null,K=0,q=0,Hl=null,Ul=!1,Wl=!1,Gl=!1,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=null,eu=null,tu=!1,nu=0,ru=0,iu=1/0,au=null,ou=null,su=0,cu=null,lu=null,uu=0,du=0,fu=null,pu=null,mu=0,hu=null;function gu(){return U&2&&K!==0?K&-K:O.T===null?dt():md()}function _u(){if(Zl===0)if(!(K&536870912)||F){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Zl=e}else Zl=536870912;return e=io.current,e!==null&&(e.flags|=32),Zl}function vu(e,t,n){(e===W&&(q===2||q===9)||e.cancelPendingCommit!==null)&&(Tu(e,0),Su(e,K,Zl,!1)),it(e,n),(!(U&2)||e!==W)&&(e===W&&(!(U&2)&&(Yl|=n),ql===4&&Su(e,K,Zl,!1)),od(e))}function yu(e,t,n){if(U&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Nu(e,t):ju(e,t,!0),o=r;do{if(a===0){Wl&&!r&&Su(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!xu(n)){a=ju(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=$l;var l=c.current.memoizedState.isDehydrated;if(l&&(Tu(c,s).flags|=256),s=ju(c,s,!1),s!==2){if(Gl&&!l){c.errorRecoveryDisabledLanes|=o,Yl|=o,a=4;break a}o=eu,eu=a,o!==null&&(eu===null?eu=o:eu.push.apply(eu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Tu(e,0),Su(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Su(r,t,Zl,!Ul);break a;case 2:eu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=nu+300-Ne(),10<a)){if(Su(r,t,Zl,!Ul),$e(r,0,!0)!==0)break a;uu=t,r.timeoutHandle=Kd(bu.bind(null,r,n,eu,au,tu,t,Zl,Yl,Ql,Ul,o,`Throttled`,-0,0),a);break a}bu(r,n,eu,au,tu,t,Zl,Yl,Ql,Ul,o,null,-0,0)}}break}while(1);od(e)}function bu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Pl(t,a,d);var m=(a&62914560)===a?nu-Ne():(a&4194048)===a?ru-Ne():0;if(m=qf(d,m),m!==null){uu=a,e.cancelPendingCommit=m(Bu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Su(e,a,o,!l);return}}Bu(e,t,a,n,r,i,o,s,c)}function xu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Su(e,t,n,r){t&=~Xl,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function Cu(){return U&6?!0:(sd(0,!1),!1)}function wu(){if(G!==null){if(q===0)var e=G.return;else e=G,L=Yi=null,ko(e),Na=null,Pa=0,e=G;for(;e!==null;)Hc(e.alternate,e),e=e.return;G=null}}function Tu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),uu=0,wu(),W=e,G=n=hi(e.current,null),K=t,q=0,Hl=null,Ul=!1,Wl=et(e,t),Gl=!1,Ql=Zl=Xl=Yl=Jl=ql=0,eu=$l=null,tu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Kl=t,ai(),n}function Eu(e,t){z=null,O.H=zs,t===Ca||t===Ta?(t=ja(),q=3):t===wa?(t=ja(),q=4):q=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Hl=t,G===null&&(ql=1,Zs(e,Ci(t,e.current)))}function Du(){var e=io.current;return e===null?!0:(K&4194048)===K?ao===null:(K&62914560)===K||K&536870912?e===ao:!1}function Ou(){var e=O.H;return O.H=zs,e===null?zs:e}function ku(){var e=O.A;return O.A=Bl,e}function Au(){ql=4,Ul||(K&4194048)!==K&&io.current!==null||(Wl=!0),!(Jl&134217727)&&!(Yl&134217727)||W===null||Su(W,K,Zl,!1)}function ju(e,t,n){var r=U;U|=2;var i=Ou(),a=ku();(W!==e||K!==t)&&(au=null,Tu(e,t)),t=!1;var o=ql;a:do try{if(q!==0&&G!==null){var s=G,c=Hl;switch(q){case 8:wu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=q;if(q=0,Hl=null,Lu(e,s,c,l),n&&Wl){o=0;break a}break;default:l=q,q=0,Hl=null,Lu(e,s,c,l)}}Mu(),o=ql;break}catch(t){Eu(e,t)}while(1);return t&&e.shellSuspendCounter++,L=Yi=null,U=r,O.H=i,O.A=a,G===null&&(W=null,K=0,ai()),o}function Mu(){for(;G!==null;)Fu(G)}function Nu(e,t){var n=U;U|=2;var r=Ou(),a=ku();W!==e||K!==t?(au=null,iu=Ne()+500,Tu(e,t)):Wl=et(e,t);a:do try{if(q!==0&&G!==null){t=G;var o=Hl;b:switch(q){case 1:q=0,Hl=null,Lu(e,t,o,1);break;case 2:case 9:if(Da(o)){q=0,Hl=null,Iu(t);break}t=function(){q!==2&&q!==9||W!==e||(q=7),od(e)},o.then(t,t);break a;case 3:q=7;break a;case 4:q=5;break a;case 7:Da(o)?(q=0,Hl=null,Iu(t)):(q=0,Hl=null,Lu(e,t,o,7));break;case 5:var s=null;switch(G.tag){case 26:s=G.memoizedState;case 5:case 27:var c=G;if(s?Wf(s):c.stateNode.complete){q=0,Hl=null;var l=c.sibling;if(l!==null)G=l;else{var u=c.return;u===null?G=null:(G=u,Ru(u))}break b}}q=0,Hl=null,Lu(e,t,o,5);break;case 6:q=0,Hl=null,Lu(e,t,o,6);break;case 8:wu(),ql=6;break a;default:throw Error(i(462))}}Pu();break}catch(t){Eu(e,t)}while(1);return L=Yi=null,O.H=r,O.A=a,U=n,G===null?(W=null,K=0,ai(),ql):0}function Pu(){for(;G!==null&&!je();)Fu(G)}function Fu(e){var t=Nc(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,t===null?Ru(e):G=t}function Iu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,K);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:ko(t);default:Hc(n,t),t=G=gi(t,Kl),t=Nc(n,t,Kl)}e.memoizedProps=e.pendingProps,t===null?Ru(e):G=t}function Lu(e,t,n,r){L=Yi=null,ko(t),Na=null,Pa=0;var i=t.return;try{if(nc(e,i,t,n,K)){ql=1,Zs(e,Ci(n,e.current)),G=null;return}}catch(t){if(i!==null)throw G=i,t;ql=1,Zs(e,Ci(n,e.current)),G=null;return}t.flags&32768?(F||r===1?e=!0:Wl||K&536870912?e=!1:(Ul=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),zu(t,e)):Ru(t)}function Ru(e){var t=e;do{if(t.flags&32768){zu(t,Ul);return}e=t.return;var n=Bc(t.alternate,t,Kl);if(n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);ql===0&&(ql=5)}function zu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,G=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=n}while(e!==null);ql=6,G=null}function Bu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Gu();while(su!==0);if(U&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,at(e,n,o,s,c,l),e===W&&(G=W=null,K=0),lu=t,cu=e,uu=n,du=o,fu=a,pu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,$u(Le,function(){return Ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=U,U|=4;try{sl(e,t,n)}finally{U=s,k.p=a,O.T=r}}su=1,Vu(),Hu(),Uu()}}function Vu(){if(su===1){su=0;var e=cu,t=lu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=U;U|=4;try{bl(t,e);var a=Vd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Z,Vd=Z=null}finally{U=i,k.p=r,O.T=n}}e.current=t,su=2}}function Hu(){if(su===2){su=0;var e=cu,t=lu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=U;U|=4;try{cl(e,t.alternate,t)}finally{U=i,k.p=r,O.T=n}}su=3}}function Uu(){if(su===4||su===3){su=0,Me();var e=cu,t=lu,n=uu,r=pu;t.subtreeFlags&10256||t.flags&10256?su=5:(su=0,lu=cu=null,Wu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ou=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}uu&3&&Gu(),od(e),i=e.pendingLanes,n&261930&&i&42?e===hu?mu++:(mu=0,hu=e):mu=0,sd(0,!1)}}function Wu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function Gu(){return Vu(),Hu(),Uu(),Ku()}function Ku(){if(su!==5)return!1;var e=cu,t=du;du=0;var n=ut(uu),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=fu,fu=null;var o=cu,s=uu;if(su=0,lu=cu=null,uu=0,U&6)throw Error(i(331));var c=U;if(U|=4,Ll(o.current),kl(o,o.current,s,n),U=c,sd(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{k.p=a,O.T=r,Wu(e,t)}}function qu(e,t,n){t=Ci(n,t),t=$s(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(it(e,2),od(e))}function J(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ou===null||!ou.has(r))){e=Ci(n,e),n=ec(2),r=Ga(t,n,2),r!==null&&(tc(n,r,t,e),it(r,2),od(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Gl=!0,i.add(n),e=Yu.bind(null,e,t,n),t.then(e,e))}function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,W===e&&(K&n)===n&&(ql===4||ql===3&&(K&62914560)===K&&300>Ne()-nu?!(U&2)&&Tu(e,0):Xl|=n,Ql===K&&(Ql=0)),od(e)}function Xu(e,t){t===0&&(t=nt()),e=ci(e,t),e!==null&&(it(e,t),od(e))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Xu(e,n)}function $u(e,t){return ke(e,t)}var ed=null,td=null,nd=!1,rd=!1,id=!1,ad=0;function od(e){e!==td&&e.next===null&&(td===null?ed=td=e:td=td.next=e),rd=!0,nd||(nd=!0,pd())}function sd(e,t){if(!id&&rd){id=!0;do for(var n=!1,r=ed;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,fd(r,a))}else a=K,a=$e(r,r===W?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,fd(r,a));r=r.next}while(n);id=!1}}function cd(){ld()}function ld(){rd=nd=!1;var e=0;ad!==0&&Gd()&&(e=ad);for(var t=Ne(),n=null,r=ed;r!==null;){var i=r.next,a=ud(r,t);a===0?(r.next=null,n===null?ed=i:n.next=i,i===null&&(td=n)):(n=r,(e!==0||a&3)&&(rd=!0)),r=i}su!==0&&su!==5||sd(e,!1),ad!==0&&(ad=0)}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=W,n=K,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(q===2||q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=dd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function dd(e,t){if(su!==0&&su!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gu()&&e.callbackNode!==n)return null;var r=K;return r=$e(e,e===W?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(yu(e,r,t),ud(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?dd.bind(null,e):null)}function fd(e,t){if(Gu())return null;yu(e,t,!0)}function pd(){Yd(function(){U&6?ke(Fe,cd):ld()})}function md(){if(ad===0){var e=pa;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),ad=e}return ad}function hd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function gd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function _d(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=hd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?hd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ad!==0){var e=o?gd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?gd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var vd=0;vd<$r.length;vd++){var yd=$r[vd];ei(yd.toLowerCase(),`on`+(yd[0].toUpperCase()+yd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var bd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),xd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(bd));function Sd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Y(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Ed(t,e,2,!1),n.add(r))}function Cd(e,t,n){var r=0;t&&(r|=4),Ed(n,e,r,t)}var wd=`_reactListening`+Math.random().toString(36).slice(2);function Td(e){if(!e[wd]){e[wd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(xd.has(t)||Cd(t,!1,e),Cd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wd]||(t[wd]=!0,Cd(`selectionchange`,!1,t))}}function Ed(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Dd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Gr:case Kr:case qr:l=Rn;break;case Zr:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Od(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ad,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&jd(s,c,l,d,!1),u!==null&&f!==null&&jd(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(ur(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,or=!0)),y=kd(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=M?sr(e,n):cr(e,n))&&(x=kd(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),_d(s,e,r,n,i)}Sd(s,t)})}function Od(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Od(e,i,a)),i=hn(e,t),i!=null&&r.push(Od(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ad(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Od(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Od(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Md=/\r\n?/g,Nd=/\u0000|\uFFFD/g;function Pd(e){return(typeof e==`string`?e:``+e).replace(Md,`
`).replace(Nd,``)}function Fd(e,t){return t=Pd(t),Pd(e)===t}function X(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&X(e,t,`name`,a.name,a,null),X(e,t,`formEncType`,a.formEncType,a,null),X(e,t,`formMethod`,a.formMethod,a,null),X(e,t,`formTarget`,a.formTarget,a,null)):(X(e,t,`encType`,a.encType,a,null),X(e,t,`method`,a.method,a,null),X(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Y(`beforetoggle`,e),Y(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:j(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:j(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:j(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:j(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:j(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:j(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:j(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:j(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:j(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,It(e,n,r))}}function Id(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Ld(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Y(`error`,e),Y(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,o,s,n,null)}}a&&X(e,t,`srcSet`,n.srcSet,n,null),r&&X(e,t,`src`,n.src,n,null);return;case`input`:Y(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:X(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Y(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:X(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Y(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:X(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:X(e,t,l,r,n,null)}return;case`dialog`:Y(`beforetoggle`,e),Y(`toggle`,e),Y(`cancel`,e),Y(`close`,e);break;case`iframe`:case`object`:Y(`load`,e);break;case`video`:case`audio`:for(r=0;r<bd.length;r++)Y(bd[r],e);break;case`image`:Y(`error`,e),Y(`load`,e);break;case`details`:Y(`toggle`,e);break;case`embed`:case`source`:case`link`:Y(`error`,e),Y(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Id(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&X(e,t,c,r,n,null))}function Rd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||X(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&X(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||X(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&X(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:X(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&X(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:X(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:X(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&X(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:X(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Id(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Id(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&X(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||X(e,t,f,p,r,m)}function zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Bd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Z=null,Vd=null;function Hd(e){return e.nodeType===9?e:e.ownerDocument}function Q(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===$?!1:($=e,!0):($=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Hd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=Cu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Ld(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Ld(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Ld(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Ld(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Ld(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Ld(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Ld(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Ld(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Ld(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Bd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ga(e,r,t),n!==null&&(vu(n,e,t),Ka(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&vu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=gu();t=lt(t);var n=ci(e,t);n!==null&&vu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Dd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}od(a),!(U&6)&&(iu=Ne()+500,sd(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&vu(s,a,2),Cu(),ip(a,2)}if(a=dp(r),a===null&&Dd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Dd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,gu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),Cu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Td(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/star-process-website/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),S=`popstate`;function C(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function w(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return te(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ne(t)}return ie(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function D(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function te(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?re(t):t,state:n,key:t&&t.key||r||ee(),unstable_mask:i}}function ne({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function re(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=C(e)?e:te(h.location,e,t);n&&n(r,e),l=u()+1;let d=D(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=C(e)?e:te(h.location,e,t);n&&n(r,e),l=u();let i=D(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ne(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function oe(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r){let i=Se((typeof t==`string`?re(t):t).pathname||`/`,n);if(i==null)return null;let a=k(e);le(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=xe(i);o=ve(a[e],t,r)}return o}function O(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function k(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=je([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),k(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ge(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ce(e.path))a(e,t,!0,n)}),t}function ce(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ce(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function le(e){e.sort((e,t)=>e.score===t.score?_e(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ue=/^:[\w-]+$/,de=3,fe=2,A=1,pe=10,me=-2,he=e=>e===`*`;function ge(e,t){let n=e.split(`/`),r=n.length;return n.some(he)&&(r+=me),t&&(r+=fe),n.filter(e=>!he(e)).reduce((e,t)=>e+(ue.test(t)?de:t===``?A:pe),r)}function _e(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ve(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ye({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ye({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:je([a,u.pathname]),pathnameBase:Ne(je([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=je([a,u.pathnameBase]))}return o}function ye(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=be(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function be(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function xe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Se(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function we(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?re(e):e,a;return n?(n=Ae(n),a=n.startsWith(`/`)?Te(n.substring(1),`/`):Te(n,t)):a=t,{pathname:a,search:Pe(r),hash:Fe(i)}}function Te(e,t){let n=Me(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ee(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function De(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Oe(e){let t=De(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function ke(e,t,n,r=!1){let i;typeof e==`string`?i=re(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Ee(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Ee(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Ee(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=we(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ae=e=>e.replace(/\/\/+/g,`/`),je=e=>Ae(e.join(`/`)),Me=e=>e.replace(/\/+$/,``),Ne=e=>Me(e).replace(/^\/*/,`/`),Pe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Fe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ie=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Le(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Re(e){return je(e.map(e=>e.route.path).filter(Boolean))||`/`}var ze=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Be(e,t){let n=e;if(typeof n!=`string`||!Ce.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(ze)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Se(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ve=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ve);var He=[`GET`,...Ve];new Set(He);var Ue=x.createContext(null);Ue.displayName=`DataRouter`;var We=x.createContext(null);We.displayName=`DataRouterState`;var Ge=x.createContext(!1);function Ke(){return x.useContext(Ge)}var qe=x.createContext({isTransitioning:!1});qe.displayName=`ViewTransition`;var Je=x.createContext(new Map);Je.displayName=`Fetchers`;var Ye=x.createContext(null);Ye.displayName=`Await`;var Xe=x.createContext(null);Xe.displayName=`Navigation`;var Ze=x.createContext(null);Ze.displayName=`Location`;var Qe=x.createContext({outlet:null,matches:[],isDataRoute:!1});Qe.displayName=`Route`;var $e=x.createContext(null);$e.displayName=`RouteError`;var et=`REACT_ROUTER_ERROR`,tt=`REDIRECT`,nt=`ROUTE_ERROR_RESPONSE`;function rt(e){if(e.startsWith(`${et}:${tt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function it(e){if(e.startsWith(`${et}:${nt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ie(t.status,t.statusText,t.data)}catch{}}function at(e,{relative:t}={}){T(ot(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(Xe),{hash:i,pathname:a,search:o}=mt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:je([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ot(){return x.useContext(Ze)!=null}function st(){return T(ot(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(Ze).location}var ct=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function lt(e){x.useContext(Xe).static||x.useLayoutEffect(e)}function ut(){let{isDataRoute:e}=x.useContext(Qe);return e?Nt():dt()}function dt(){T(ot(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ue),{basename:t,navigator:n}=x.useContext(Xe),{matches:r}=x.useContext(Qe),{pathname:i}=st(),a=JSON.stringify(Oe(r)),o=x.useRef(!1);return lt(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(E(o.current,ct),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=ke(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:je([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var ft=x.createContext(null);function pt(e){let t=x.useContext(Qe).outlet;return x.useMemo(()=>t&&x.createElement(ft.Provider,{value:e},t),[t,e])}function mt(e,{relative:t}={}){let{matches:n}=x.useContext(Qe),{pathname:r}=st(),i=JSON.stringify(Oe(n));return x.useMemo(()=>ke(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ht(e,t){return gt(e,t)}function gt(e,t,n){T(ot(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(Xe),{matches:i}=x.useContext(Qe),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ft(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=st(),d;if(t){let e=typeof t==`string`?re(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=oe(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ct(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:je([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:je([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(Ze.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function _t(){let e=Mt(),t=Le(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var vt=x.createElement(_t,null),yt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=it(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(Qe.Provider,{value:this.props.routeContext},x.createElement($e.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(xt,{error:e},t):t}};yt.contextType=Ge;var bt=new WeakMap;function xt({children:e,error:t}){let{basename:n}=x.useContext(Xe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=rt(t.digest);if(e){let r=bt.get(t);if(r)throw r;let i=Be(e.location,n);if(ze&&!bt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw bt.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function St({routeContext:e,match:t,children:n}){let r=x.useContext(Ue);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Qe.Provider,{value:e},n)}function Ct(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Re(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||vt,o&&(s<0&&c===0?(Ft(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(St,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(yt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tt(e){let t=x.useContext(Ue);return T(t,wt(e)),t}function Et(e){let t=x.useContext(We);return T(t,wt(e)),t}function Dt(e){let t=x.useContext(Qe);return T(t,wt(e)),t}function Ot(e){let t=Dt(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function kt(){return Ot(`useRouteId`)}function At(){return Et(`useNavigation`).navigation}function jt(){let{matches:e,loaderData:t}=Et(`useMatches`);return x.useMemo(()=>e.map(e=>O(e,t)),[e,t])}function Mt(){let e=x.useContext($e),t=Et(`useRouteError`),n=Ot(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Nt(){let{router:e}=Tt(`useNavigate`),t=Ot(`useNavigate`),n=x.useRef(!1);return lt(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{E(n.current,ct),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Pt={};function Ft(e,t,n){!t&&!Pt[e]&&(Pt[e]=!0,E(!1,n))}x.useOptimistic,x.memo(It);function It({routes:e,future:t,state:n,isStatic:r,onError:i}){return gt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Lt(e){return pt(e.context)}function j(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Rt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){T(!ot(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=re(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=x.useMemo(()=>{let e=Se(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(Xe.Provider,{value:c},x.createElement(Ze.Provider,{children:t,value:h}))}function zt({children:e,location:t}){return ht(Bt(e),t)}x.Component;function Bt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Bt(e.props.children,i));return}T(e.type===j,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Bt(e.props.children,i)),n.push(a)}),n}var Vt=`get`,Ht=`application/x-www-form-urlencoded`;function Ut(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Wt(e){return Ut(e)&&e.tagName.toLowerCase()===`button`}function Gt(e){return Ut(e)&&e.tagName.toLowerCase()===`form`}function Kt(e){return Ut(e)&&e.tagName.toLowerCase()===`input`}function qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jt(e,t){return e.button===0&&(!t||t===`_self`)&&!qt(e)}var Yt=null;function Xt(){if(Yt===null)try{new FormData(document.createElement(`form`),0),Yt=!1}catch{Yt=!0}return Yt}var Zt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Qt(e){return e!=null&&!Zt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ht}"`),null):e}function $t(e,t){let n,r,i,a,o;if(Gt(e)){let o=e.getAttribute(`action`);r=o?Se(o,t):null,n=e.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`enctype`))||Ht,a=new FormData(e)}else if(Wt(e)||Kt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Se(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`formenctype`))||Qt(o.getAttribute(`enctype`))||Ht,a=new FormData(o,e),!Xt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Ut(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Vt,r=null,i=Ht,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var en={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},tn=/[&><\u2028\u2029]/g;function nn(e){return e.replace(tn,e=>en[e])}function rn(e,t){if(e===!1||e==null)throw Error(t)}function an(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Se(i.pathname,t)===`/`?i.pathname=`${Me(t)}/_root.${r}`:i.pathname=`${Me(i.pathname)}.${r}`,i}async function on(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sn(e){return e!=null&&typeof e.page==`string`}function cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function ln(e,t,n){return mn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await on(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function un(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function dn(e,t,{includeHydrateFallback:n}={}){return fn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function fn(e){return[...new Set(e)]}function pn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function mn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(pn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function hn(){let e=x.useContext(Ue);return rn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function gn(){let e=x.useContext(We);return rn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var _n=x.createContext(void 0);_n.displayName=`FrameworkContext`;function vn(){let e=x.useContext(_n);return rn(e,`You must render this element inside a <HydratedRouter> element`),e}function yn(e,t){let n=x.useContext(_n),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:bn(s,p),onBlur:bn(c,m),onMouseEnter:bn(l,p),onMouseLeave:bn(u,m),onTouchStart:bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xn({page:e,...t}){let n=Ke(),{router:r}=hn(),i=x.useMemo(()=>oe(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?x.createElement(Cn,{page:e,matches:i,...t}):x.createElement(wn,{page:e,matches:i,...t}):null}function Sn(e){let{manifest:t,routeModules:n}=vn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Cn({page:e,matches:t,...n}){let r=st(),{future:i}=vn(),{basename:a}=hn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=an(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function wn({page:e,matches:t,...n}){let r=st(),{future:i,manifest:a,routeModules:o}=vn(),{basename:s}=hn(),{loaderData:c,matches:l}=gn(),u=x.useMemo(()=>un(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>un(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=an(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>dn(d,a),[d,a]),m=Sn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.14.1`)}catch{}function Dn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=x.useRef();i.current??=w({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Rt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function On({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Rt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}On.displayName=`unstable_HistoryRouter`;var kn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,An=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=x.useContext(Xe),v=typeof l==`string`&&kn.test(l),y=Be(l,h);l=y.to;let b=at(l,{relative:r}),S=st(),C=null;if(o){let e=ke(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:je([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=yn(n,p),ee=Ln(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||ee(t)}let te=!(y.isExternal||i),ne=x.createElement(`a`,{...p,...E,href:(te?C:void 0)||y.absoluteURL||b,onClick:te?D:e,ref:Tn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?x.createElement(x.Fragment,null,ne,x.createElement(xn,{page:b})):ne});An.displayName=`Link`;var jn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=mt(a,{relative:c.relative}),d=st(),f=x.useContext(We),{navigator:p,basename:m}=x.useContext(Xe),h=f!=null&&qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Se(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return x.createElement(An,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});jn.displayName=`NavLink`;var Mn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Vt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=x.useContext(Xe),g=Bn(),_=Vn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&kn.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=x.useContext(_n),{basename:i}=x.useContext(Xe),a=st(),o=jt();Gn({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Wn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${nn(JSON.stringify(t||Hn))}, ${nn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=x.useContext(Ue);return T(t,Pn(e)),t}function In(e){let t=x.useContext(We);return T(t,Pn(e)),t}function Ln(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=ut(),d=st(),f=mt(e,{relative:o});return x.useCallback(p=>{if(Jt(p,t)){p.preventDefault();let t=n===void 0?ne(d)===ne(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=x.useContext(Xe),n=kt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=$t(e,t);a.navigate===!1?await r(a.fetcherKey||zn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=x.useContext(Xe),r=x.useContext(Qe);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...mt(e||`.`,{relative:t})},o=st();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:je([n,a.pathname])),ne(a)}var Hn=`react-router-scroll-positions`,Un={};function Wn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Se(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Gn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=x.useContext(Xe),o=st(),s=jt(),c=At();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Kn(x.useCallback(()=>{if(c.state===`idle`){let t=Wn(o,s,a,e);Un[t]=window.scrollY}try{sessionStorage.setItem(t||Hn,JSON.stringify(Un))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Hn);e&&(Un=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Un,()=>window.scrollY,e?(t,n)=>Wn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Kn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function qn(e,{relative:t}={}){let n=x.useContext(qe);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=mt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Se(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Se(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ye(i.pathname,o)!=null||ye(i.pathname,a)!=null}var Jn=c(g(),1),Yn=!1;function Xn(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Zn(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var Qn=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!Yn:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(Zn(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=Xn(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),$n=`-ms-`,er=`-moz-`,M=`-webkit-`,tr=`comm`,nr=`rule`,rr=`decl`,ir=`@import`,ar=`@keyframes`,or=`@layer`,sr=Math.abs,cr=String.fromCharCode,lr=Object.assign;function ur(e,t){return mr(e,0)^45?(((t<<2^mr(e,0))<<2^mr(e,1))<<2^mr(e,2))<<2^mr(e,3):0}function dr(e){return e.trim()}function fr(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function pr(e,t){return e.indexOf(t)}function mr(e,t){return e.charCodeAt(t)|0}function hr(e,t,n){return e.slice(t,n)}function gr(e){return e.length}function _r(e){return e.length}function vr(e,t){return t.push(e),e}function yr(e,t){return e.map(t).join(``)}var br=1,xr=1,Sr=0,Cr=0,wr=0,Tr=``;function Er(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:br,column:xr,length:o,return:``}}function Dr(e,t){return lr(Er(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Or(){return wr}function kr(){return wr=Cr>0?mr(Tr,--Cr):0,xr--,wr===10&&(xr=1,br--),wr}function Ar(){return wr=Cr<Sr?mr(Tr,Cr++):0,xr++,wr===10&&(xr=1,br++),wr}function jr(){return mr(Tr,Cr)}function Mr(){return Cr}function Nr(e,t){return hr(Tr,e,t)}function Pr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fr(e){return br=xr=1,Sr=gr(Tr=e),Cr=0,[]}function Ir(e){return Tr=``,e}function Lr(e){return dr(Nr(Cr-1,Br(e===91?e+2:e===40?e+1:e)))}function Rr(e){for(;(wr=jr())&&wr<33;)Ar();return Pr(e)>2||Pr(wr)>3?``:` `}function zr(e,t){for(;--t&&Ar()&&!(wr<48||wr>102||wr>57&&wr<65||wr>70&&wr<97););return Nr(e,Mr()+(t<6&&jr()==32&&Ar()==32))}function Br(e){for(;Ar();)switch(wr){case e:return Cr;case 34:case 39:e!==34&&e!==39&&Br(wr);break;case 40:e===41&&Br(e);break;case 92:Ar();break}return Cr}function Vr(e,t){for(;Ar()&&e+wr!==57&&!(e+wr===84&&jr()===47););return`/*`+Nr(t,Cr-1)+`*`+cr(e===47?e:Ar())}function Hr(e){for(;!Pr(jr());)Ar();return Nr(e,Cr)}function Ur(e){return Ir(Wr(``,null,null,null,[``],e=Fr(e),0,[0],e))}function Wr(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Ar()){case 40:if(m!=108&&mr(C,d-1)==58){pr(C+=N(Lr(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Lr(v);break;case 9:case 10:case 13:case 32:C+=Rr(m);break;case 92:C+=zr(Mr()-1,7);continue;case 47:switch(jr()){case 42:case 47:vr(Kr(Vr(Ar(),Mr()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=gr(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=N(C,/\f/g,``)),p>0&&gr(C)-d&&vr(p>32?qr(C+`;`,r,n,d-1):qr(N(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(vr(S=Gr(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)Wr(C,t,S,S,b,a,d,s,x);else switch(f===99&&mr(C,3)===110?100:f){case 100:case 108:case 109:case 115:Wr(e,S,S,r&&vr(Gr(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:Wr(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+gr(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&kr()==125)continue}switch(C+=cr(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(gr(C)-1)*_,_=1;break;case 64:jr()===45&&(C+=Lr(Ar())),f=jr(),u=d=gr(y=C+=Hr(Mr())),v++;break;case 45:m===45&&gr(C)==2&&(h=0)}}return a}function Gr(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=_r(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=hr(e,d+1,d=sr(h=o[m])),y=e;_<p;++_)(y=dr(h>0?f[_]+` `+v:N(v,/&\f/g,f[_])))&&(c[g++]=y);return Er(e,t,n,i===0?nr:s,c,l,u)}function Kr(e,t,n){return Er(e,t,n,tr,cr(Or()),hr(e,2,-2),0)}function qr(e,t,n,r){return Er(e,t,n,rr,hr(e,0,r),hr(e,r+1,-1),r)}function Jr(e,t){for(var n=``,r=_r(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function Yr(e,t,n,r){switch(e.type){case or:if(e.children.length)break;case ir:case rr:return e.return=e.return||e.value;case tr:return``;case ar:return e.return=e.value+`{`+Jr(e.children,r)+`}`;case nr:e.value=e.props.join(`,`)}return gr(n=Jr(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Xr(e){var t=_r(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Zr(e){return function(t){t.root||(t=t.return)&&e(t)}}var Qr=function(e){var t=new WeakMap;return function(n){if(t.has(n))return t.get(n);var r=e(n);return t.set(n,r),r}};function $r(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ei=function(e,t,n){for(var r=0,i=0;r=i,i=jr(),r===38&&i===12&&(t[n]=1),!Pr(i);)Ar();return Nr(e,Cr)},ti=function(e,t){var n=-1,r=44;do switch(Pr(r)){case 0:r===38&&jr()===12&&(t[n]=1),e[n]+=ei(Cr-1,t,n);break;case 2:e[n]+=Lr(r);break;case 4:if(r===44){e[++n]=jr()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=cr(r)}while(r=Ar());return e},ni=function(e,t){return Ir(ti(Fr(e),t))},ri=new WeakMap,ii=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!ri.get(n))&&!r){ri.set(e,!0);for(var i=[],a=ni(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},ai=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function oi(e,t){switch(ur(e,t)){case 5103:return M+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+er+e+$n+e+e;case 6828:case 4268:return M+e+$n+e+e;case 6165:return M+e+$n+`flex-`+e+e;case 5187:return M+e+N(e,/(\w+).+(:[^]+)/,M+`box-$1$2`+$n+`flex-$1$2`)+e;case 5443:return M+e+$n+`flex-item-`+N(e,/flex-|-self/,``)+e;case 4675:return M+e+$n+`flex-line-pack`+N(e,/align-content|flex-|-self/,``)+e;case 5548:return M+e+$n+N(e,`shrink`,`negative`)+e;case 5292:return M+e+$n+N(e,`basis`,`preferred-size`)+e;case 6060:return M+`box-`+N(e,`-grow`,``)+M+e+$n+N(e,`grow`,`positive`)+e;case 4554:return M+N(e,/([^-])(transform)/g,`$1`+M+`$2`)+e;case 6187:return N(N(N(e,/(zoom-|grab)/,M+`$1`),/(image-set)/,M+`$1`),e,``)+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,M+`box-pack:$3`+$n+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+M+e+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,M+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gr(e)-1-t>6)switch(mr(e,t+1)){case 109:if(mr(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,`$1`+M+`$2-$3$1`+er+(mr(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~pr(e,`stretch`)?oi(N(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(mr(e,t+1)!==115)break;case 6444:switch(mr(e,gr(e)-3-(~pr(e,`!important`)&&10))){case 107:return N(e,`:`,`:`+M)+e;case 101:return N(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+M+(mr(e,14)===45?`inline-`:``)+`box$3$1`+M+`$2$3$1`+$n+`$2box$3`)+e}break;case 5936:switch(mr(e,t+11)){case 114:return M+e+$n+N(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return M+e+$n+N(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return M+e+$n+N(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return M+e+$n+e+e}return e}var si=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rr:e.return=oi(e.value,e.length);break;case ar:return Jr([Dr(e,{value:N(e.value,`@`,`@`+M)})],r);case nr:if(e.length)return yr(e.props,function(t){switch(fr(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return Jr([Dr(e,{props:[N(t,/:(read-\w+)/,`:`+er+`$1`)]})],r);case`::placeholder`:return Jr([Dr(e,{props:[N(t,/:(plac\w+)/,`:`+M+`input-$1`)]}),Dr(e,{props:[N(t,/:(plac\w+)/,`:`+er+`$1`)]}),Dr(e,{props:[N(t,/:(plac\w+)/,$n+`input-$1`)]})],r)}return``})}}],ci=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||si,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[ii,ai],l,u=[Yr,Zr(function(e){l.insert(e)})],d=Xr(c.concat(r,u)),f=function(e){return Jr(Ur(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new Qn({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p};function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(null,arguments)}var ui=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),di=o(((e,t)=>{t.exports=ui()})),fi=o(((e,t)=>{var n=di(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h})),pi=!0;function mi(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var hi=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||pi===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},gi=function(e,t,n){hi(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function _i(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var vi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yi=!1,bi=/[A-Z]|^ms/g,xi=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Si=function(e){return e.charCodeAt(1)===45},Ci=function(e){return e!=null&&typeof e!=`boolean`},wi=$r(function(e){return Si(e)?e:e.replace(bi,`-$&`).toLowerCase()}),Ti=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(xi,function(e,t,n){return Ai={name:t,styles:n,next:Ai},t})}return vi[e]!==1&&!Si(e)&&typeof t==`number`&&t!==0?t+`px`:t},Ei=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Di(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Ai={name:i.name,styles:i.styles,next:Ai},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Ai={name:o.name,styles:o.styles,next:Ai},o=o.next;return a.styles+`;`}return Oi(e,t,n);case`function`:if(e!==void 0){var s=Ai,c=n(e);return Ai=s,Di(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Oi(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Di(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Ci(s)&&(r+=wi(a)+`:`+Ti(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&yi)throw Error(Ei);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Ci(o[c])&&(r+=wi(a)+`:`+Ti(a,o[c])+`;`);else{var l=Di(e,t,o);switch(a){case`animation`:case`animationName`:r+=wi(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var ki=/label:\s*([^\s;{]+)\s*(;|$)/g,Ai;function ji(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Ai=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Di(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Di(n,t,e[o]),r&&(i+=a[o]);ki.lastIndex=0;for(var s=``,c;(c=ki.exec(i))!==null;)s+=`-`+c[1];return{name:_i(i)+s,styles:i,next:Ai}}var Mi=function(e){return e()},Ni=x.useInsertionEffect?x.useInsertionEffect:!1,Pi=Ni||Mi,Fi=Ni||x.useLayoutEffect,Ii=x.createContext(typeof HTMLElement<`u`?ci({key:`css`}):null);Ii.Provider;var Li=function(e){return(0,x.forwardRef)(function(t,n){return e(t,(0,x.useContext)(Ii),n)})},Ri=x.createContext({}),P=function(e,t){return typeof t==`function`?t(e):li({},e,t)},F=Qr(function(e){return Qr(function(t){return P(e,t)})}),zi=function(e){var t=x.useContext(Ri);return e.theme!==t&&(t=F(t)(e.theme)),x.createElement(Ri.Provider,{value:t},e.children)},Bi={}.hasOwnProperty,Vi=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,Hi=function(e,t){var n={};for(var r in t)Bi.call(t,r)&&(n[r]=t[r]);return n[Vi]=e,n},Ui=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return hi(t,n,r),Pi(function(){return gi(t,n,r)}),null},Wi=Li(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Vi],a=[r],o=``;typeof e.className==`string`?o=mi(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=ji(a,void 0,x.useContext(Ri));o+=t.key+`-`+s.name;var c={};for(var l in e)Bi.call(e,l)&&l!==`css`&&l!==Vi&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),x.createElement(x.Fragment,null,x.createElement(Ui,{cache:t,serialized:s,isStringTag:typeof i==`string`}),x.createElement(i,c))});fi();var Gi=function(e,t){var n=arguments;if(t==null||!Bi.call(t,`css`))return x.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=Wi,i[1]=Hi(e,t);for(var a=2;a<r;a++)i[a]=n[a];return x.createElement.apply(null,i)};(function(e){var t;(function(e){})(t||=e.JSX||={})})(Gi||={});var Ki=Li(function(e,t){var n=e.styles,r=ji([n],void 0,x.useContext(Ri)),i=x.useRef();return Fi(function(){var e=t.key+`-global`,n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,o=document.querySelector(`style[data-emotion="`+e+` `+r.name+`"]`);return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),o!==null&&(a=!0,o.setAttribute(`data-emotion`,e),n.hydrate([o])),i.current=[n,a],function(){n.flush()}},[t]),Fi(function(){var e=i.current,n=e[0];if(e[1]){e[1]=!1;return}r.next!==void 0&&gi(t,r.next,!0),n.tags.length&&(n.before=n.tags[n.tags.length-1].nextElementSibling,n.flush()),t.insert(``,r,n,!1)},[t,r.name]),null});function qi(){return ji([...arguments])}function Ji(){var e=qi.apply(void 0,arguments),t=`animation-`+e.name;return{name:t,styles:`@keyframes `+t+`{`+e.styles+`}`,anim:1,toString:function(){return`_EMO_`+this.name+`_`+this.styles+`_EMO_`}}}var I={colors:{primary:`#735c00`,"primary-container":`#FFDD00`,"on-primary":`#ffffff`,"on-primary-container":`#6f5800`,surface:`#f9f9fc`,"surface-container":`#eeeef0`,"surface-container-low":`#f3f3f6`,"surface-container-lowest":`#ffffff`,"surface-container-high":`#e8e8ea`,"surface-container-highest":`#e2e2e5`,"on-surface":`#1a1c1e`,"on-surface-variant":`#4e4632`,"outline-variant":`#d1c5ab`,error:`#ba1a1a`,"error-container":`#ffdad6`,"on-error":`#ffffff`,secondary:`#888B8D`,"secondary-container":`#e2e2e2`,tertiary:`#5d5f5f`,"tertiary-container":`#d3d3d3`,background:`#f9f9fc`,"on-background":`#1a1c1e`,inverse:`#2f3133`,"footer-bg":`#000000`,"footer-bottom":`#5e6166`,"footer-text-muted":`#999999`,"footer-divider":`#444444`},fonts:{headline:`'Titillium Web', 'Public Sans', sans-serif`,body:`'Titillium Web', 'Public Sans', sans-serif`,label:`'Public Sans', sans-serif`},breakpoints:{mobile:`640px`,tablet:`768px`,desktop:`1024px`,wide:`1280px`}},Yi=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),L=o(((e,t)=>{t.exports=Yi()}))(),Xi=()=>(0,L.jsx)(Ki,{styles:qi`
      /* Reset CSS moderno */
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: ${I.fonts.body};
        background-color: ${I.colors.background};
        color: ${I.colors[`on-background`]};
        overflow-x: hidden;
        line-height: 1.5;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: ${I.fonts.headline};
        font-weight: 800;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      button, input, textarea {
        font-family: ${I.fonts.body};
      }

      img {
        max-width: 100%;
        display: block;
      }

      /* Remove default list styles */
      ul, ol {
        list-style: none;
      }

      /* Acessibilidade */
      :focus-visible {
        outline: 2px solid #735c00;
        outline-offset: 2px;
      }
    `}),R=e=>typeof e==`string`,Zi=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},Qi=e=>e==null?``:String(e),$i=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},ea=/###/g,ta=e=>e&&e.includes(`###`)?e.replace(ea,`.`):e,na=e=>!e||R(e),ra=(e,t,n)=>{let r=R(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(na(e))return{};let t=ta(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return na(e)?{}:{obj:e,k:ta(r[i])}},ia=(e,t,n)=>{let{obj:r,k:i}=ra(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=ra(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=ra(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},aa=(e,t,n,r)=>{let{obj:i,k:a}=ra(e,t,Object);i[a]=i[a]||[],i[a].push(n)},oa=(e,t)=>{let{obj:n,k:r}=ra(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},sa=(e,t,n)=>{let r=oa(e,n);return r===void 0?oa(t,n):r},ca=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(r in e?R(e[r])||e[r]instanceof String||R(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):ca(e[r],t[r],n):e[r]=t[r]);return e},la=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),ua={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},da=e=>R(e)?e.replace(/[&<>"'\/]/g,e=>ua[e]):e,fa=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},pa=[` `,`,`,`?`,`!`,`;`],ma=new fa(20),ha=(e,t,n)=>{t||=``,n||=``;let r=pa.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=ma.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},ga=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},_a=e=>e?.replace(/_/g,`-`),va={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},ya=new class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||va,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(R(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},ba=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},xa=class extends ba{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):R(n)&&i?o.push(...n.split(i)):o.push(n)));let s=oa(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!R(n)?s:ga(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),ia(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(R(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=oa(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?ca(s,n,i):s={...s,...n},ia(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},Sa={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},Ca=Symbol(`i18next/PATH_KEY`);function wa(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===Ca?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function Ta(e,t){let{[Ca]:n}=e(wa()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`;if(n.length>1&&i){let e=t?.ns,a=Array.isArray(e)?e:null;if(a&&a.length>1&&a.slice(1).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var Ea=e=>!R(e)&&typeof e!=`boolean`&&typeof e!=`number`,Da=class e extends ba{constructor(e,t={}){super(),$i([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=ya.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=Ea(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!ha(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:R(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:R(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=Ta(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?Ta(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!R(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let ee=Ea(E),D=Object.prototype.toString.apply(E);if(y&&E&&ee&&!_.includes(D)&&!(R(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:Ea(T)?T[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&R(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=R(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!R(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=R(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=Sa.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return R(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?Ta(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!R(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(R(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!R(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},Oa=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ya.create(`languageUtils`)}getScriptPartFromCode(e){if(e=_a(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=_a(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(R(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),R(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return R(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&i(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&i(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&i(this.getLanguagePartFromCode(e))):R(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.includes(e)||i(this.formatLanguageCode(e))}),r}},ka={zero:0,one:1,two:2,few:3,many:4,other:5},Aa={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},ja=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=ya.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=_a(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),Aa;if(!e.match(/-|_/))return Aa;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>ka[e]-ka[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},Ma=(e,t,n,r=`.`,i=!0)=>{let a=sa(e,t,n);return!a&&i&&R(n)&&(a=ga(e,n,r),a===void 0&&(a=ga(t,n,r))),a},Na=e=>e.replace(/\$/g,`$$$$`),Pa=class{constructor(e={}){this.logger=ya.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?da:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?la(i):a||`{{`,this.suffix=o?la(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u||`-`,this.unescapeSuffix=this.unescapePrefix?``:l||``,this.nestingPrefix=d?la(d):f||la(`$t(`),this.nestingSuffix=p?la(p):m||la(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_===void 0?!1:_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=Ma(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(Ma(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp();let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>Na(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?Na(this.escape(e)):Na(e)}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=R(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !R(a)&&!this.useRawValueToEscape&&(a=Qi(a));let s=t.safeValue(a);if(e=e.replace(i[0],s),u?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${la(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!R(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!R(i))return i;R(i)||(i=Qi(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],i),this.regexp.lastIndex=0}return e}},Fa=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},Ia=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(_a(r),i),t[o]=s),s(n)}},La=e=>(t,n,r)=>e(_a(n),r)(t),Ra=class{constructor(e={}){this.logger=ya.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?Ia:La;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ia(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator);if(i.length>1&&i[0].indexOf(`(`)>1&&!i[0].includes(`)`)&&i.find(e=>e.includes(`)`))){let e=i.findIndex(e=>e.includes(`)`));i[0]=[i[0],...i.splice(1,e)].join(this.formatSeparator)}return i.reduce((e,t)=>{let{formatName:i,formatOptions:a}=Fa(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},za=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},Ba=class extends ba{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=ya.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{aa(n.loaded,[i],a),za(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();R(e)&&(e=this.languageUtils.toResolveHierarchy(e)),R(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},Va=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),R(e[1])&&(t.defaultValue=e[1]),R(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Ha=e=>(R(e.ns)&&(e.ns=[e.ns]),R(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),R(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),Ua=()=>{},Wa=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},Ga=class e extends ba{constructor(e={},t){if(super(),this.options=Ha(e),this.services={},this.logger=ya,this.modules={external:[]},Wa(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(R(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=Va();this.options={...n,...this.options,...Ha(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?ya.init(r(this.modules.logger),this.options):ya.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:Ra;let t=new Oa(this.options);this.store=new xa(this.options.resources,this.options);let n=this.services;n.logger=ya,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new ja(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new Pa(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new Ba(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new Da(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=Ua,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=Zi(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if(this.languages&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=Ua){let n=t,r=R(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=Zi();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=Ua,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&Sa.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=Zi();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=R(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(R(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n){let r=(e,t,...i)=>{let a;a=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(i)),a.lng=a.lng||r.lng,a.lngs=a.lngs||r.lngs,a.ns=a.ns||r.ns,a.keyPrefix!==``&&(a.keyPrefix=a.keyPrefix||n||r.keyPrefix);let o={...this.options,...a};typeof a.keyPrefix==`function`&&(a.keyPrefix=Ta(a.keyPrefix,o));let s=this.options.keySeparator||`.`,c;return a.keyPrefix&&Array.isArray(e)?c=e.map(e=>(typeof e==`function`&&(e=Ta(e,o)),`${a.keyPrefix}${s}${e}`)):(typeof e==`function`&&(e=Ta(e,o)),c=a.keyPrefix?`${a.keyPrefix}${s}${e}`:e),this.t(c,a)};return R(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=n,r}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=Zi();return this.options.ns?(R(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=Zi();R(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new Oa(Va());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=Ua){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new xa(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...Va().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new Pa(n)}return a.translator=new Da(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}.createInstance();Ga.createInstance,Ga.dir,Ga.init,Ga.loadResources,Ga.reloadResources,Ga.use,Ga.changeLanguage,Ga.getFixedT,Ga.t,Ga.exists,Ga.setDefaultNamespace,Ga.hasLoadedNamespace,Ga.loadNamespaces,Ga.loadLanguages;var Ka=(e,t,n,r)=>{let i=[n,{code:t,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(i,`warn`,`react-i18next::`,!0);$a(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...i):console?.warn&&console.warn(...i)},qa={},Ja=(e,t,n,r)=>{$a(n)&&qa[n]||($a(n)&&(qa[n]=new Date),Ka(e,t,n,r))},Ya=(e,t)=>()=>{if(e.isInitialized)t();else{let n=()=>{setTimeout(()=>{e.off(`initialized`,n)},0),t()};e.on(`initialized`,n)}},Xa=(e,t,n)=>{e.loadNamespaces(t,Ya(e,n))},Za=(e,t,n,r)=>{if($a(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Xa(e,n,r);n.forEach(t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)}),e.loadLanguages(t,Ya(e,r))},Qa=(e,t,n={})=>!t.languages||!t.languages.length?(Ja(t,`NO_LANGUAGES`,`i18n.languages were undefined or empty`,{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n&&n.bindI18n.indexOf(`languageChanging`)>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}),$a=e=>typeof e==`string`,eo=e=>typeof e==`object`&&!!e,to=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,no={"&amp;":`&`,"&#38;":`&`,"&lt;":`<`,"&#60;":`<`,"&gt;":`>`,"&#62;":`>`,"&apos;":`'`,"&#39;":`'`,"&quot;":`"`,"&#34;":`"`,"&nbsp;":` `,"&#160;":` `,"&copy;":`©`,"&#169;":`©`,"&reg;":`®`,"&#174;":`®`,"&hellip;":`…`,"&#8230;":`…`,"&#x2F;":`/`,"&#47;":`/`},ro=e=>no[e],io={bindI18n:`languageChanged`,bindI18nStore:``,transEmptyNodeValue:``,transSupportBasicHtmlNodes:!0,transWrapTextNodes:``,transKeepBasicHtmlNodesFor:[`br`,`strong`,`i`,`p`],useSuspense:!0,unescape:e=>e.replace(to,ro),transDefaultProps:void 0},ao=(e={})=>{io={...io,...e}},oo=()=>io,so,co=e=>{so=e},lo=()=>so,uo={type:`3rdParty`,init(e){ao(e.options.react),co(e)}},fo=(0,x.createContext)(),po=class{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}},mo=o((e=>{var t=u();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,s=t.useDebugValue;function c(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return o(function(){c.value=n,c.getSnapshot=t,l(c)&&u({inst:c})},[e,n,t]),a(function(){return l(c)&&u({inst:c}),e(function(){l(c)&&u({inst:c})})},[e]),s(n),n}function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:c;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),z=o(((e,t)=>{t.exports=mo()}))(),B={t:(e,t)=>{if($a(t))return t;if(eo(t)&&$a(t.defaultValue))return t.defaultValue;if(typeof e==`function`)return``;if(Array.isArray(e)){let t=e[e.length-1];return typeof t==`function`?``:t}return e},ready:!1},ho=()=>()=>{},V=(e,t={})=>{let{i18n:n}=t,{i18n:r,defaultNS:i}=(0,x.useContext)(fo)||{},a=n||r||lo();a&&!a.reportNamespaces&&(a.reportNamespaces=new po),a||Ja(a,`NO_I18NEXT_INSTANCE`,`useTranslation: You will need to pass in an i18next instance by using initReactI18next`);let o=(0,x.useMemo)(()=>({...oo(),...a?.options?.react,...t}),[a,t]),{useSuspense:s,keyPrefix:c}=o,l=e||i||a?.options?.defaultNS,u=$a(l)?[l]:l||[`translation`],d=(0,x.useMemo)(()=>u,u);a?.reportNamespaces?.addUsedNamespaces?.(d);let f=(0,x.useRef)(0),p=(0,x.useCallback)(e=>{if(!a)return ho;let{bindI18n:t,bindI18nStore:n}=o,r=()=>{f.current+=1,e()};return t&&a.on(t,r),n&&a.store.on(n,r),()=>{t&&t.split(` `).forEach(e=>a.off(e,r)),n&&n.split(` `).forEach(e=>a.store.off(e,r))}},[a,o]),m=(0,x.useRef)(),h=(0,x.useCallback)(()=>{if(!a)return B;let e=!!(a.isInitialized||a.initializedStoreOnce)&&d.every(e=>Qa(e,a,o)),n=t.lng||a.language,r=f.current,i=m.current;if(i&&i.ready===e&&i.lng===n&&i.keyPrefix===c&&i.revision===r)return i;let s={t:a.getFixedT(n,o.nsMode===`fallback`?d:d[0],c),ready:e,lng:n,keyPrefix:c,revision:r};return m.current=s,s},[a,d,c,o,t.lng]),[g,_]=(0,x.useState)(0),{t:v,ready:y}=(0,z.useSyncExternalStore)(p,h,h);(0,x.useEffect)(()=>{if(a&&!y&&!s){let e=()=>_(e=>e+1);t.lng?Za(a,t.lng,d,e):Xa(a,d,e)}},[a,t.lng,d,y,s,g]);let b=a||{},S=(0,x.useRef)(null),C=(0,x.useRef)(),w=e=>{let t=Object.getOwnPropertyDescriptors(e);t.__original&&delete t.__original;let n=Object.create(Object.getPrototypeOf(e),t);if(!Object.prototype.hasOwnProperty.call(n,`__original`))try{Object.defineProperty(n,`__original`,{value:e,writable:!1,enumerable:!1,configurable:!1})}catch{}return n},T=(0,x.useMemo)(()=>{let e=b,t=e?.language,n=e;e&&(S.current&&S.current.__original===e&&C.current===t?n=S.current:(n=w(e),S.current=n,C.current=t));let r=!y&&!s?(...e)=>(Ja(a,`USE_T_BEFORE_READY`,`useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.`),v(...e)):v,i=[r,n,y];return i.t=r,i.i18n=n,i.ready=y,i},[v,b,y,b.resolvedLanguage,b.language,b.languages]);if(a&&s&&!y)throw new Promise(e=>{let n=()=>e();t.lng?Za(a,t.lng,d,n):Xa(a,d,n)});return T},go=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_o=$r(function(e){return go.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),vo=!1,yo=_o,bo=function(e){return e!==`theme`},xo=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?yo:bo},So=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Co=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return hi(t,n,r),Pi(function(){return gi(t,n,r)}),null},wo=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=So(t,n,r),c=s||xo(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Li(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=x.useContext(Ri)}typeof e.className==`string`?a=mi(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=ji(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?xo(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),x.createElement(x.Fragment,null,x.createElement(Co,{cache:t,serialized:m,isStringTag:typeof r==`string`}),x.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&vo?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,li({},n,r,{shouldForwardProp:So(h,r,!0)})).apply(void 0,d)},h}},To=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),H=wo.bind(null);To.forEach(function(e){H[e]=H(e)});var Eo=`/star-process-website/assets/logo-D_xq07Ok.png`,Do=H.nav`
  position: fixed; 
  top: 0;
  width: 100%;
  z-index: 100;
  background: ${I.colors.secondary};
  padding: 0.5rem 2rem 0.8rem;
  
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  /* Mantém visível se estiver subindo OU se o menu mobile estiver aberto */
  transform: ${({$visible:e,$isOpen:t})=>e||t?`translateY(0)`:`translateY(-100%)`};

  @media (max-width: ${I.breakpoints.tablet}) {
    padding: 0.5rem 1rem;
  }
`,Oo=H.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`,ko=H.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.3rem;
  
  @media (max-width: ${I.breakpoints.tablet}) {
    padding-right: 0.5rem;
  }
`,Ao=H.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
  justify-content: space-between;

  @media (max-width: ${I.breakpoints.tablet}) {
    margin-top: -5px;
  }
`,jo=H(An)`
  display: flex;
  align-items: center;
  height: 4rem;
  cursor: pointer;

  @media (max-width: ${I.breakpoints.tablet}) {
    height: 3.2rem;
  }
`,Mo=H.img`
  padding-left: 8rem;
  position: absolute;
  top: 0;
  height: 100%;
  width: auto;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding-left: 0;
    top: 0;
  }
`,No=H.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`,Po=H.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: ${I.breakpoints.tablet}) {
    display: none;
  }
`,Fo=H(An)`
  font-family: ${I.fonts.headline};
  min-width: 8.5rem;
  font-weight: 400;
  font-size: 0.85rem;
  color: #ffffff;
  text-decoration: none;
  padding-top: 0.3rem;
  border-top: 1px solid ${({active:e})=>e?`#ffffff`:`rgba(255,255,255,0.3)`};
  transition: all 0.2s;
  text-align: left;

  &:hover { opacity: 0.7; border-top-color: #ffffff; }
`,Io=H.div`
  display: flex;
  gap: 0.5rem;
`,Lo=H.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid ${({active:e})=>e?`#ffffff`:`rgba(255,255,255,0.5)`};
  color: #ffffff;
  font-size: 0.65rem;
  cursor: pointer;
  
  @media (max-width: ${I.breakpoints.tablet}) {
    width: 24px;
    height: 24px;
    font-size: 0.6rem;
  }
`,Ro=H.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 110;

  @media (max-width: ${I.breakpoints.tablet}) {
    display: flex;
  }

  span {
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s;
  }

  ${({isOpen:e})=>e&&`
    span:nth-of-type(1) { transform: rotate(45deg) translate(5px, 5px); }
    span:nth-of-type(2) { opacity: 0; }
    span:nth-of-type(3) { transform: rotate(-45deg) translate(7px, -7px); }
  `}
`,zo=H.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh; /* Evita cortes no mobile */
  background: ${I.colors.secondary};
  z-index: 105;
  display: flex;
  flex-direction: column;
  padding: 7rem 2rem 2rem;
  transition: all 0.3s ease-in-out;
  
  opacity: ${({isOpen:e})=>e?`1`:`0`};
  pointer-events: ${({isOpen:e})=>e?`all`:`none`};
  transform: ${({isOpen:e})=>e?`translateX(0)`:`translateX(100%)`};
  
  overflow-y: auto;
`,Bo=H.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,Vo=H(An)`
  font-family: ${I.fonts.headline};
  font-size: 1.2rem;
  color: #ffffff;
  text-decoration: none;
  padding: 1.2rem 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &.active {
    font-weight: 700;
    border-bottom-color: #ffffff;
  }
`;function Ho(){let{t:e,i18n:t}=V(),n=st(),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(0),[s,c]=(0,x.useState)(!0),l=e=>{t.changeLanguage(e),i(!1)},u=e=>n.pathname===e;(0,x.useEffect)(()=>{let e=()=>{let e=window.pageYOffset;r||(c(a>e||e<10),o(e))};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[a,r]),(0,x.useEffect)(()=>{document.body.style.overflow=r?`hidden`:`unset`},[r]);let d=()=>i(!1);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Do,{$visible:s,$isOpen:r,children:(0,L.jsxs)(Oo,{children:[(0,L.jsx)(ko,{children:(0,L.jsxs)(Io,{children:[(0,L.jsx)(Lo,{active:t.language===`pt`,onClick:()=>l(`pt`),children:`PT`}),(0,L.jsx)(Lo,{active:t.language===`es`,onClick:()=>l(`es`),children:`ES`}),(0,L.jsx)(Lo,{active:t.language===`en`,onClick:()=>l(`en`),children:`EN`})]})}),(0,L.jsxs)(Ao,{children:[(0,L.jsx)(jo,{to:`/`,onClick:d,children:(0,L.jsx)(Mo,{src:Eo,alt:`STAR Process Logo`})}),(0,L.jsxs)(No,{children:[(0,L.jsxs)(Po,{children:[(0,L.jsx)(Fo,{to:`/`,active:u(`/`),children:e(`nav.home`)}),(0,L.jsx)(Fo,{to:`/sobre`,active:u(`/sobre`),children:e(`nav.about`)}),(0,L.jsx)(Fo,{to:`/projetos`,active:u(`/projetos`),children:e(`nav.projects`)}),(0,L.jsx)(Fo,{to:`/industria`,active:u(`/industria`),children:e(`nav.industry`)}),(0,L.jsx)(Fo,{to:`/equipamentos`,active:u(`/equipamentos`),children:e(`nav.equipment`)}),(0,L.jsx)(Fo,{to:`/engenharia`,active:u(`/engenharia`),children:e(`nav.engineering`)}),(0,L.jsx)(Fo,{to:`/contato`,active:u(`/contato`),children:e(`nav.contact`)})]}),(0,L.jsxs)(Ro,{isOpen:r,onClick:()=>i(!r),children:[(0,L.jsx)(`span`,{}),(0,L.jsx)(`span`,{}),(0,L.jsx)(`span`,{})]})]})]})]})}),(0,L.jsx)(zo,{isOpen:r,children:(0,L.jsxs)(Bo,{children:[(0,L.jsx)(Vo,{to:`/`,className:u(`/`)?`active`:``,onClick:d,children:e(`nav.home`)}),(0,L.jsx)(Vo,{to:`/sobre`,className:u(`/sobre`)?`active`:``,onClick:d,children:e(`nav.about`)}),(0,L.jsx)(Vo,{to:`/projetos`,className:u(`/projetos`)?`active`:``,onClick:d,children:e(`nav.projects`)}),(0,L.jsx)(Vo,{to:`/industria`,className:u(`/industria`)?`active`:``,onClick:d,children:e(`nav.industry`)}),(0,L.jsx)(Vo,{to:`/equipamentos`,className:u(`/equipamentos`)?`active`:``,onClick:d,children:e(`nav.equipment`)}),(0,L.jsx)(Vo,{to:`/engenharia`,className:u(`/engenharia`)?`active`:``,onClick:d,children:e(`nav.engineering`)}),(0,L.jsx)(Vo,{to:`/contato`,className:u(`/contato`)?`active`:``,onClick:d,children:e(`nav.contact`)})]})})]})}var Uo={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wo=x.createContext&&x.createContext(Uo),Go=[`attr`,`size`,`title`];function Ko(e,t){if(e==null)return{};var n,r,i=qo(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function qo(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(null,arguments)}function Yo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Xo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Yo(Object(n),!0).forEach(function(t){Zo(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Zo(e,t,n){return(t=Qo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qo(e){var t=$o(e,`string`);return typeof t==`symbol`?t:t+``}function $o(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function es(e){return e&&e.map((e,t)=>x.createElement(e.tag,Xo({key:t},e.attr),es(e.child)))}function ts(e){return t=>x.createElement(ns,Jo({attr:Xo({},e.attr)},t),es(e.child))}function ns(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Ko(e,Go),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),x.createElement(`svg`,Jo({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Xo(Xo({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&x.createElement(`title`,null,i),e.children)};return Wo===void 0?t(Uo):x.createElement(Wo.Consumer,null,e=>t(e))}function rs(e){return ts({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`},child:[]}]})(e)}function is(e){return ts({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z`},child:[]}]})(e)}function as(e){return ts({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function os(e){return ts({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z`},child:[]}]})(e)}function ss(e){return ts({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z`},child:[]}]})(e)}function cs(e){return ts({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z`},child:[]}]})(e)}function ls(e){return ts({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z`},child:[]}]})(e)}var us=`/star-process-website/assets/logoFooter-BaL6Jnge.png`,ds=H.footer`
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  font-family: ${({theme:e})=>e.fonts.body};
`,fs=H.div`
  max-width: ${({theme:e})=>e.breakpoints.wide};
  margin: 0 auto;
  padding: 60px 20px 40px;
`,ps=H.div`
  display: flex;
  gap: 40px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`,ms=H.div`
  flex: 0 0 200px;
  display: flex;
  align-items: flex-start;
  img {
    width: 180px;
    height: auto;
    margin-top: 5px; 
  }
`,hs=H.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,gs=H.div`
  height: 1px;
  background-color: #444;
  width: 100%;
  margin-bottom: 15px;
`,_s=H.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 25px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,vs=H.h4`
  font-family: ${({theme:e})=>e.fonts.label};
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.15rem; /* Compactado */
`,ys=H.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,bs=H(An)`
  color: #999;
  text-decoration: none;
  font-size: 0.85rem;
  line-height: 1.3; /* Mais compacto que o anterior */
  margin-bottom: 2px;
  display: block;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`,xs=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  align-items: start;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: start;
  }
`,Ss=H.span`
  font-family: ${({theme:e})=>e.fonts.headline};
  font-weight: 700;
  font-size: 0.95rem;
`,Cs=H.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Gap levemente menor */
  color: #999;
  font-size: 0.85rem;
  margin-bottom: 4px; /* Mais compacto */

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    justify-content: start;
  }

  /* Estilização direta dos componentes de ícone */
  svg {
    font-size: 1.1rem;
    color: #ffffff;
    flex-shrink: 0;
  }
`,ws=H.div`
  background-color: #5e6166;
  padding: 15px 20px;
  color: #ffffff;
  font-family: ${({theme:e})=>e.fonts.label};
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 40px;
`,Ts=H.div`
  max-width: ${({theme:e})=>e.breakpoints.wide};
  margin: 0 auto;
`;function Es(){let{t:e}=V();return(0,L.jsxs)(ds,{children:[(0,L.jsx)(fs,{children:(0,L.jsxs)(ps,{children:[(0,L.jsx)(ms,{children:(0,L.jsx)(`img`,{src:us,alt:`Star Process Logo`})}),(0,L.jsxs)(hs,{children:[(0,L.jsx)(gs,{}),(0,L.jsxs)(_s,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(vs,{children:e(`footer.about`)}),(0,L.jsxs)(ys,{children:[(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/sobre`,children:e(`footer.history`)})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/sobre`,children:e(`footer.mission`)})})]})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(vs,{children:e(`footer.projects`)}),(0,L.jsxs)(ys,{children:[(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/projetos`,children:e(`footer.recentProjects`)})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/clientes`,children:e(`footer.clients`)})})]})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(vs,{children:e(`footer.services`)}),(0,L.jsxs)(ys,{children:[(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/servicos`,children:e(`footer.turnkey`)})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/servicos`,children:e(`footer.assembly`)})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/servicos`,children:e(`footer.electrical`)})})]})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(vs,{children:e(`footer.contact`)}),(0,L.jsxs)(ys,{children:[(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/contato`,children:e(`footer.form`)})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/contato`,children:e(`footer.phoneWhatsapp`)})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/contato`,children:e(`footer.addressMap`)})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(bs,{to:`/contato`,children:e(`footer.requestBudget`)})})]})]})]}),(0,L.jsx)(gs,{}),(0,L.jsxs)(xs,{children:[(0,L.jsx)(Ss,{children:e(`footer.followUs`)}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(Cs,{children:[(0,L.jsx)(os,{}),` @starprocesssolutions`]}),(0,L.jsxs)(Cs,{children:[(0,L.jsx)(as,{}),` @starprocesssolutions`]}),(0,L.jsxs)(Cs,{children:[(0,L.jsx)(is,{}),` @starprocesssolutions`]})]}),(0,L.jsx)(`div`,{}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(Cs,{children:[(0,L.jsx)(cs,{}),` comercial@starprocesssolutions.com`]}),(0,L.jsxs)(Cs,{children:[(0,L.jsx)(rs,{}),` +55 (12) 98884.5600`]}),(0,L.jsxs)(Cs,{children:[(0,L.jsx)(ls,{}),` `,e(`footer.address`)]})]})]})]})]})}),(0,L.jsx)(ws,{children:(0,L.jsxs)(Ts,{children:[`Copyright © Star Process Solutions `,e(`footer.copyright`)]})})]})}var Ds=H.main`
  min-height: 100vh;
  padding-top: 108px;

    @media (min-width: ${I.breakpoints.tablet}) {
      padding-top: 95px;
    }

    @media (max-width: ${I.breakpoints.tablet}) {
      padding-top: 90px;
    }
`;function Os(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ho,{}),(0,L.jsx)(Ds,{children:(0,L.jsx)(Lt,{})}),(0,L.jsx)(Es,{})]})}var ks=[`/star-process-website/assets/Banner01-6sdrTNFH.png`,`/star-process-website/assets/Banner02-ufcIrJ7r.png`],As=H.header`
  position: static; 
  background-color: ${({theme:e})=>e.colors[`surface-container-low`]};
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${I.breakpoints.mobile}) {
    min-height: 100vh;
    margin-top: -6.6rem;
    padding-top: 5rem;
    justify-content: center; 
    position: relative;
  }
`,js=H.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    /* Alinhamento: Foca no centro-direita para garantir que o 'final' da imagem apareça no mobile */
    object-position: center right;
    
    transition: opacity 0.8s ease-in-out, transform 1.2s ease-out;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }
`,Ms=H.div`
  position: relative;
  z-index: 10;
  padding: 0 4rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1280px) {
    transform: translateY(5%); 
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    padding: 2rem 1.5rem 6rem;
  }
`,Ns=H.h1`
  font-weight: 600;
  font-family: ${I.fonts.body};
  color: white;
  max-width: 650px;
  text-align: center;
  margin: 0 auto 1.2rem;
  letter-spacing: -0.03em;
  line-height: 1.05; 

  @media (min-width: ${I.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${I.breakpoints.desktop}) {
    font-size: 4rem;
  }

  @media (max-width: ${I.breakpoints.mobile}) {
    font-size: 2.2rem;
    line-height: 1.1;
  }
`,Ps=H.p`
  font-size: 1.2rem; 
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  max-width: 450px;
  text-align: center;
  margin: 0 auto 4rem; 
  line-height: 1.4;

  @media (max-width: ${I.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 3rem;
    padding: 0 1rem;
  }
`,Fs=H.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: ${I.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Is=H.div`
  background: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`,Ls=H.div`
  padding: 1.2rem; 
  flex: 1;
`,Rs=H.h3`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: ${I.fonts.headline};
  color: #18181b;
  margin-bottom: 0.5rem;
`,zs=H.p`
  color: #52525b;
  font-size: 0.95rem;
  line-height: 1.3; 
`,Bs=H.div`
  background-color: ${I.colors[`primary-container`]};
  padding: 0.8rem 1.25rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  margin-top: auto;
`,Vs=H.div`


  @media (max-width: ${I.breakpoints.mobile}) {
    bottom: 1.5rem;
      position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.8rem;
    z-index: 20;
    background: rgba(0,0,0,0.2);
    padding: 8px 16px;
    border-radius: 20px;
    backdrop-filter: blur(4px);
  }
`,Hs=H.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({active:e})=>e?`#ffffff`:`rgba(255,255,255,0.3)`};
  border: 1px solid rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: #ffffff;
    transform: scale(1.2);
  }
`,Us=H.div`
  position: absolute;
  right: 2rem;
  top: 45%; 
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 20;

  @media (max-width: ${I.breakpoints.tablet}) {
    display: none;
  }
`,Ws=H.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  &:hover { background: white; }
`;function Gs(){let{t:e}=V(),[t,n]=(0,x.useState)(0);(0,x.useEffect)(()=>{let e=setInterval(()=>{n(e=>(e+1)%ks.length)},3e4);return()=>clearInterval(e)},[]);let r=e=>{n(e)};return(0,L.jsxs)(As,{id:`hero`,children:[(0,L.jsx)(js,{children:(0,L.jsx)(`img`,{src:ks[t],alt:`Background Industrial`},t)}),(0,L.jsxs)(Us,{children:[(0,L.jsx)(Ws,{onClick:()=>r(0),"aria-label":`Banner anterior`,children:(0,L.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_less`})}),(0,L.jsx)(Ws,{onClick:()=>r(1),"aria-label":`Próximo banner`,children:(0,L.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})})]}),(0,L.jsx)(Vs,{children:ks.map((e,n)=>(0,L.jsx)(Hs,{active:t===n,onClick:()=>r(n),"aria-label":`Ir para banner ${n+1}`},n))}),(0,L.jsxs)(Ms,{children:[(0,L.jsx)(Ns,{children:e(`hero.title`)}),(0,L.jsx)(Ps,{children:e(`hero.subtitle`)}),(0,L.jsx)(Fs,{children:[`industry`,`skids`,`engineering`].map(t=>(0,L.jsxs)(Is,{children:[(0,L.jsxs)(Ls,{children:[(0,L.jsx)(Rs,{children:e(`hero.${t}`)}),(0,L.jsx)(zs,{children:e(`hero.${t}Desc`)})]}),(0,L.jsxs)(Bs,{children:[(0,L.jsx)(`span`,{style:{fontSize:`0.9rem`},children:e(`hero.check`)}),(0,L.jsx)(`div`,{style:{width:24,height:24,borderRadius:`50%`,background:I.colors.secondary,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,L.jsx)(`span`,{className:`material-symbols-outlined`,style:{color:`white`,fontSize:14},children:`chevron_right`})})]})]},t))})]})]})}var Ks=`/star-process-website/assets/Banner03-D4s087tA.png`,qs=H.section`
  background-color: ${({theme:e})=>e.colors[`surface-container-low`]};
  padding: 100px 20px;
  overflow: hidden;
`,Js=H.div`
  max-width: ${({theme:e})=>e.breakpoints.wide};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,Ys=H.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Xs=H.span`
  display: inline-block;
  padding: 7px 4rem;
  border: 1px solid #999;
  border-radius: 50px;
  font-family: ${({theme:e})=>e.fonts.label};
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  background-color: #fff;
  margin-bottom: 30px;
`,Zs=H.h2`
  font-family: ${({theme:e})=>e.fonts.headline};
  font-size: 3.2rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors[`on-surface`]};
  line-height: 1.1;
  margin-bottom: 25px;
  letter-spacing: -0.02em;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 2.2rem;
  }
`,Qs=H.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 1rem;
  line-height: 1.5;
  color: #888;
  margin-bottom: 35px;
  max-width: 500px;
`,$s=H.button`
  background-color: ${({theme:e})=>e.colors[`primary-container`]};
  color: #000;
  border: none;
  padding: 6px 0.6rem;
  min-width: 9.3rem;
  border-radius: 50px;
  font-family: ${({theme:e})=>e.fonts.label};
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`,ec=H.div`
  background-color: #888b8d;
  color: #fff;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.5rem !important;
    font-weight: 400 !important;
  }
`,tc=H.div`
  position: relative;
  background: #fff;
  padding: 0.3rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  /* Ajuste: Impede que o zoom da imagem saia da moldura */
  overflow: hidden; 
`,nc=H.img`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  /* Ajuste: Efeito suave de transição */
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.06); /* Zoom suave */
    filter: brightness(1.08); /* Aumento leve de brilho */
  }
`;function rc(){let{t:e}=V();return(0,L.jsx)(qs,{id:`about`,children:(0,L.jsxs)(Js,{children:[(0,L.jsxs)(Ys,{children:[(0,L.jsx)(Xs,{children:e(`about.badge`)}),(0,L.jsx)(Zs,{children:e(`about.title`)}),(0,L.jsx)(Qs,{children:e(`about.text`)}),(0,L.jsxs)($s,{children:[e(`about.button`),(0,L.jsx)(ec,{children:(0,L.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,L.jsx)(tc,{children:(0,L.jsx)(nc,{src:Ks,alt:`Soluções Industriais`})})]})})}var ic=`/star-process-website/assets/icon01-D8r56Kc8.svg`,ac=`/star-process-website/assets/icon02-DbsUBg3t.svg`,oc=`/star-process-website/assets/icon03-fdPf_3q1.svg`,sc=`/star-process-website/assets/icon04-CciRiDi8.svg`,cc=`/star-process-website/assets/icon05-CMGMvLDT.svg`,lc=`/star-process-website/assets/icon06-CEkXSEYV.svg`,uc=`/star-process-website/assets/icon07-BNn6ofWd.svg`,dc=`/star-process-website/assets/icon08-Ds2i5RP0.svg`,fc=H.section`
  background-color: ${({theme:e})=>e.colors[`surface-container`]};
  padding: 100px 20px;
`,pc=H.div`
  max-width: ${({theme:e})=>e.breakpoints.wide};
  margin: 0 auto;
  text-align: center;
`,mc=H.span`
  display: inline-block;
  padding: 8px 45px;
  border: 1px solid #999;
  border-radius: 50px;
  font-family: ${({theme:e})=>e.fonts.label};
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  background-color: #fff;
  margin-bottom: 25px;
`,hc=H.h2`
  font-size: 3rem;
  font-weight: 600;
  font-family: ${({theme:e})=>e.fonts.headline};
  color: ${({theme:e})=>e.colors[`on-surface`]};
  letter-spacing: -0.02em;
  margin-bottom: 15px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 2.2rem;
  }
`,gc=H.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors[`on-surface-variant`]};
  max-width: 600px;
  margin: 0 auto 60px;
  line-height: 1.4;
  font-family: ${({theme:e})=>e.fonts.body};
`,_c=H.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,vc=H.div`
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,yc=H.div`
  background-color: #ffffff;
  min-height: 180px;
  width: 100%;
  height: 100%;
  padding: 0.5rem 3rem;
  text-align: center;
  border-bottom: 1rem solid ${({theme:e})=>e.colors[`primary-container`]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,bc=H.div`
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: contain;
  }
`,xc=H.h3`
  font-size: 1.15rem;
  font-weight: 600;
  font-family: ${({theme:e})=>e.fonts.headline};
  color: ${({theme:e})=>e.colors[`on-surface`]};
  margin-bottom: 0.2rem;
`,Sc=H.p`
  font-size: 0.85rem;
  color: #888;
  line-height: 1.5;
  font-family: ${({theme:e})=>e.fonts.body};
  max-width: 240px;
`;function Cc(){let{t:e}=V(),t=[{icon:ic,titleKey:`food`,descKey:`foodDesc`},{icon:ac,titleKey:`oil`,descKey:`oilDesc`},{icon:oc,titleKey:`steel`,descKey:`steelDesc`},{icon:sc,titleKey:`automotive`,descKey:`automotiveDesc`},{icon:cc,titleKey:`offshore`,descKey:`offshoreDesc`},{icon:lc,titleKey:`chemical`,descKey:`chemicalDesc`},{icon:uc,titleKey:`paper`,descKey:`paperDesc`},{icon:dc,titleKey:`renewable`,descKey:`renewableDesc`}];return(0,L.jsx)(fc,{id:`sectors`,children:(0,L.jsxs)(pc,{children:[(0,L.jsx)(mc,{children:e(`sectors.badge`)}),(0,L.jsx)(hc,{children:e(`sectors.title`)}),(0,L.jsx)(gc,{children:e(`sectors.subtitle`)}),(0,L.jsx)(_c,{children:t.map((t,n)=>(0,L.jsx)(vc,{children:(0,L.jsx)(`div`,{style:{border:`1px solid #a8a8a87e`,height:`100%`},children:(0,L.jsxs)(yc,{children:[(0,L.jsx)(bc,{children:(0,L.jsx)(`img`,{src:t.icon,alt:e(`sectors.${t.titleKey}`)})}),(0,L.jsx)(xc,{children:e(`sectors.${t.titleKey}`)}),(0,L.jsx)(Sc,{children:e(`sectors.${t.descKey}`)})]})})},n))})]})})}var wc=Ji`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Tc=H.section`
  background-color: ${({theme:e})=>e.colors[`surface-container`]};
  padding: 100px 20px;
`,Ec=H.div`
  max-width: ${({theme:e})=>e.breakpoints.wide};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,Dc=H.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    align-items: center;
  }
`,Oc=H.span`
  display: inline-block;
  padding: 8px 45px;
  border: 1px solid #999;
  border-radius: 50px;
  font-family: ${({theme:e})=>e.fonts.label};
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  background-color: #fff;
  margin-bottom: 25px;
`,kc=H.h2`
  font-family: ${({theme:e})=>e.fonts.headline};
  font-size: 3.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors[`on-surface`]};
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`,Ac=H.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,jc=H.div`
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,Mc=H.div`
  background-color: #ffffff;
  min-height: 180px;
  width: 100%;
  height: 100%;
  padding: 1rem 0 0.5rem 0;
  text-align: center;
  border-bottom: 1rem solid ${({theme:e})=>e.colors[`primary-container`]};
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Nc=H.div`
  font-family: ${({theme:e})=>e.fonts.headline};
  font-size: 4rem;
  font-weight: 650;
  color: #1a1c1e;
  line-height: 1;
  margin-bottom: 0.7rem;
  letter-spacing: -0.03em;
  opacity: 0; /* Inicia invisível para a animação disparar */
  
  ${({animate:e})=>e&&qi`
    animation: ${wc} 1s ease-out forwards;
  `}
`,Pc=H.div`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 0.85rem;
  color: #888;
  line-height: 1.4;
  max-width: 180px;
  margin: 0 auto;
`,Fc=({target:e,suffix:t=``,resetTrigger:n,inView:r})=>{let[i,a]=(0,x.useState)(0);return(0,x.useEffect)(()=>{if(!r)return;a(0);let t=0,n=e/(2e3/16),i=setInterval(()=>{t+=n,t>=e?(a(e),clearInterval(i)):a(Math.floor(t))},16);return()=>clearInterval(i)},[e,n,r]),(0,L.jsxs)(L.Fragment,{children:[t,i,t===`K`?`K`:``]})};function Ic(){let{t:e}=V(),[t,n]=(0,x.useState)(0),[r,i]=(0,x.useState)(!1),a=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&(i(!0),n(e=>e+1))},{threshold:.2});return a.current&&e.observe(a.current),()=>e.disconnect()},[]),(0,x.useEffect)(()=>{if(!r)return;let e=setInterval(()=>{n(e=>e+1)},2e4);return()=>clearInterval(e)},[r]),(0,L.jsx)(Tc,{id:`metrics`,ref:a,children:(0,L.jsxs)(Ec,{children:[(0,L.jsxs)(Dc,{children:[(0,L.jsx)(Oc,{children:e(`metrics.badge`)}),(0,L.jsx)(kc,{children:e(`metrics.title`)})]}),(0,L.jsx)(Ac,{children:[{value:15,suffix:`+`,labelKey:`experience`},{value:500,suffix:`+`,labelKey:`projects`},{value:50,suffix:`+`,hasK:!0,labelKey:`steel`},{value:60,suffix:`+`,labelKey:`collaborators`}].map((n,i)=>(0,L.jsx)(jc,{children:(0,L.jsx)(`div`,{style:{border:`1px solid #a8a8a87e`,height:`100%`},children:(0,L.jsxs)(Mc,{children:[(0,L.jsxs)(Nc,{animate:r,children:[(0,L.jsx)(Fc,{target:n.value,suffix:n.hasK?``:n.suffix,resetTrigger:t,inView:r}),n.hasK&&`K`]},t),(0,L.jsx)(Pc,{children:e(`metrics.${n.labelKey}`)})]})})},i))})]})})}var Lc=`/star-process-website/assets/mapSouthAmerica-q_tsS2xX.svg`,Rc=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2043.8%2058.4'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23Gradiente_sem_nome_10);}.cls-2{fill:%23222;stroke:%23f7d952;stroke-miterlimit:10;stroke-width:1.53px;}.cls-3,.cls-4{fill:%23898a8d;}.cls-4{fill-rule:evenodd;}.cls-5{fill:%23f7d952;}%3c/style%3e%3cradialGradient%20id='Gradiente_sem_nome_10'%20cx='22.26'%20cy='21.48'%20r='42.71'%20gradientTransform='translate(0.6%2043.49)%20rotate(-89.33)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fff'/%3e%3cstop%20offset='0.09'%20stop-color='%23d1d1d1'/%3e%3cstop%20offset='0.21'%20stop-color='%239a9a9a'/%3e%3cstop%20offset='0.34'%20stop-color='%236b6b6b'/%3e%3cstop%20offset='0.46'%20stop-color='%23454545'/%3e%3cstop%20offset='0.58'%20stop-color='%23272727'/%3e%3cstop%20offset='0.7'%20stop-color='%23111'/%3e%3cstop%20offset='0.82'%20stop-color='%23040404'/%3e%3cstop%20offset='0.92'/%3e%3cstop%20offset='0.98'/%3e%3c/radialGradient%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3cpath%20class='cls-1'%20d='M38.86,29.3a19,19,0,1,0-36-8,18.83,18.83,0,0,0,2,8c4,9.18,17.66,27.24,17.66,27.24S34.9,38.82,38.86,29.3Z'/%3e%3ccircle%20class='cls-2'%20cx='21.98'%20cy='20.65'%20r='15.24'%20transform='translate(-0.39%200.43)%20rotate(-1.1)'/%3e%3cpolygon%20class='cls-3'%20points='31.02%2017.76%2024%2017.76%2021.83%2011.09%2019.66%2017.76%209.13%2017.76%2010.68%2018.89%2020.48%2018.89%2021.83%2014.74%2023.18%2018.89%2027.55%2018.89%2024.01%2021.45%2025.36%2025.6%2021.83%2023.04%2016.16%2028.56%2021.83%2024.43%2027.51%2028.56%2025.34%2021.89%2031.02%2017.76'/%3e%3cpolygon%20class='cls-4'%20points='20.79%2019.83%2021.83%2018.89%2024.24%2024.05%2021.83%2016.63%2020.79%2019.83'/%3e%3cpath%20class='cls-4'%20d='M25.56,19.84a5.15,5.15,0,0,0-2.07,0l.12.36A6.87,6.87,0,0,1,25.56,19.84Z'/%3e%3cpath%20class='cls-4'%20d='M21.55,20.66a4.86,4.86,0,0,0-2,3.39,6.7,6.7,0,0,1,2.35-3l.27-.18-.22-.46Z'/%3e%3cpolygon%20class='cls-4'%20points='20.97%2020.37%2018.12%2019.83%2019.85%2021.59%2019.48%2020.55%2020.59%2020.68%2020.97%2020.37'/%3e%3cpolygon%20class='cls-5'%20points='29.19%2017.76%2024%2017.76%2024%2017.76%2021.83%2011.09%2019.66%2017.76%209.13%2017.76%209.91%2018.33%2019.66%2018.33%2020.07%2018.33%2020.2%2017.94%2021.83%2012.92%2023.46%2017.93%2023.59%2018.33%2024%2018.33%2029.28%2018.33%2025.01%2021.43%2024.68%2021.67%2024.8%2022.06%2026.43%2027.08%2022.16%2023.97%2021.83%2023.73%2021.5%2023.97%2016.16%2028.56%2021.83%2024.43%2027.51%2028.56%2025.34%2021.89%2029.43%2018.92%2029.43%2018.92%2031.02%2017.76%2029.19%2017.76'/%3e%3c/g%3e%3c/svg%3e`,zc=H.section`
  background-color: ${({theme:e})=>e.colors[`surface-container`]};
  padding: 60px 0;
  text-align: center;
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 80px 0;
  }
`,Bc=H.span`
  display: inline-block;
  padding: 6px 30px;
  border: 1px solid #999;
  border-radius: 50px;
  font-family: ${({theme:e})=>e.fonts.label};
  font-size: 0.75rem;
  font-weight: 600;
  color: #666;
  background-color: #fff;
  margin-bottom: 20px;
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 6px 66px;
    font-size: 0.85rem;
  }
`,Vc=H.h2`
  font-family: ${({theme:e})=>e.fonts.headline};
  font-size: 2rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 30px;
  line-height: 1.1;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-bottom: 40px;
    max-width: 600px;
  }
`,Hc=H.div`
  position: relative;
  max-width: 1200px; /* Definido como solicitado */
  margin: 0 auto;    /* Centraliza na tela */
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  height: auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    height: 650px;
    display: block;
  }
`,Uc=H.div`
  position: relative;
  z-index: 10;
  background: ${({isTransparent:e})=>e?`rgba(255, 255, 255, 0.15)`:`#fff`};
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  order: 2;
  transition: background 0.5s ease;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    border-radius: 50px;
    box-shadow: ${({isTransparent:e})=>e?`none`:`0 4px 15px rgba(0,0,0,0.1)`};
    border: 1px solid ${({isTransparent:e})=>e?`rgba(0, 0, 0, 0.5)`:`#ddd`};
    order: unset;
  }
`,Wc=H.button`
  flex: 1;
  padding: 15px 0;
  background: ${({active:e})=>e?`#f5f5f5`:`transparent`};
  font-family: ${({theme:e})=>e.fonts.label};
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  color: ${({active:e})=>e?`#000`:`#666`};
  transition: all 0.2s;
  border: ${({isTransparent:e,active:t})=>e&&!t?`1px solid rgba(221, 221, 221, 1)`:`none`};

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 12px 60px;
    font-size: 0.9rem;
    border-right: 1px solid #eee;
    &:last-child { border-right: none; }
  }
`,Gc=H.div`
  position: relative;
  width: 100%;
  height: 350px;
  background-color: #d2d2d3;
  order: 1;
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    height: 100%;
  }
`,Kc=H.div`
  width: 100%;
  background-color: #d2d2d3;
`,qc=H.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(100%) brightness(0.95);
  transition: all 0.5s ease;
  user-select: none;
  object-position: center; 
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    margin-left: -12rem;
    width: calc(100% + 12rem);
  }
`,Jc=H.img`
  position: absolute;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -100%);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 8;
  pointer-events: none;
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 45px;
    height: 45px;
  }
`,Yc=H.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 25px 20px;
  text-align: left;
  z-index: 5;
  order: 3;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    width: 460px;
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  }
`,Xc=H.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
  & > div {
    border-bottom: 1px solid #eee;
    padding: 0.8rem 0;
  }
  @media (min-width: 480px) {
    & > div:nth-last-of-type(-n+2) {
      border-bottom: none;
    }
  }
`,Zc=H.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.7; }
`,Qc=H.div`
  width: 8px;
  height: 8px;
  background-color: #ffd700;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
`,$c=H.div`
  font-weight: 600;
  font-size: 0.9rem;
  color: #222;
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 0.95rem;
  }
`,el=H.div`
  font-size: 0.75rem;
  color: #777;
  margin-top: 2px;
`,tl=H.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`,nl=H.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #999;
  transition: all 0.2s;
  &:hover { color: #333; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  &:disabled { opacity: 0.3; cursor: default; }
`,rl=[{id:1,name:`AMBEV`,city:`Jundiaí - SP`,x:49,y:66,mx:68,my:64.2},{id:14,name:`GM DO BRASIL`,city:`S. J. dos Campos - SP`,x:50.8,y:66.2,mx:70.2,my:64.4},{id:2,name:`AMBEV`,city:`Jacareí - SP`,x:50.5,y:66.4,mx:69.8,my:64.6},{id:5,name:`HEINEKEN`,city:`Jacareí - SP`,x:50.5,y:66.6,mx:69.8,my:64.9},{id:15,name:`YAKULT`,city:`Guararema - SP`,x:51.2,y:66.3,mx:71,my:64.5},{id:13,name:`LDC`,city:`Santos - SP`,x:49.5,y:68,mx:68.8,my:67.5},{id:6,name:`HEINEKEN`,city:`Itu - SP`,x:47.8,y:66.3,mx:66.2,my:64.3},{id:3,name:`AMBEV`,city:`Agudos - SP`,x:45.5,y:66.2,mx:62.5,my:64.2},{id:8,name:`LACTALIS`,city:`Araras - SP`,x:48.2,y:64.5,mx:67.2,my:62.2},{id:7,name:`NESTLÉ`,city:`Araçatuba - SP`,x:42.5,y:64,mx:59.5,my:61.5},{id:4,name:`AMBEV`,city:`Uberlândia - MG`,x:48,y:55,mx:68.5,my:55},{id:11,name:`AMBEV`,city:`Aquiraz - CE`,x:62,y:10,mx:86,my:15},{id:12,name:`HEINEKEN`,city:`Pacatuba - CE`,x:63,y:9,mx:85.2,my:14},{id:9,name:`AMBEV`,city:`Santiago - Chile`,x:12,y:82,mx:21.5,my:77},{id:10,name:`CCU`,city:`Santiago - Chile`,x:12.5,y:82.5,mx:22,my:77.5},{id:16,name:`LEHUI`,city:`Santiago - Chile`,x:12,y:82.3,mx:21,my:77.2}];function il(){let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(null),[i,a]=(0,x.useState)(null),[o,s]=(0,x.useState)(!1),{t:c}=V();(0,x.useEffect)(()=>{let e=()=>s(window.innerWidth<768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let l=Math.ceil(rl.length/8);(0,x.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%l)},3e4);return()=>clearInterval(e)},[l]);let u=rl.slice(e*8,(e+1)*8),d=e=>e.toLowerCase().includes(`chile`),f=e=>{a(e),r(null)},p=e=>{r(e),a(null)},m=()=>{e<l-1?t(e=>e+1):t(0)},h=()=>{t(e>0?e=>e-1:l-1)},g=n?.id===11||n?.id===12,_=(e,t)=>t===`x`?o?e.mx:e.x:o?e.my:e.y;return(0,L.jsxs)(zc,{id:`projects`,children:[(0,L.jsx)(Bc,{children:c(`projects.badge`)}),(0,L.jsx)(Vc,{children:c(`projects.title`)}),(0,L.jsx)(Kc,{children:(0,L.jsxs)(Hc,{children:[(0,L.jsxs)(Gc,{children:[(0,L.jsx)(qc,{src:Lc,alt:`Mapa América do Sul`}),n?(0,L.jsx)(Jc,{src:Rc,style:{left:`${_(n,`x`)}%`,top:`${_(n,`y`)}%`}}):i?rl.filter(e=>i===`Chile`?d(e.city):!d(e.city)).map(e=>(0,L.jsx)(Jc,{src:Rc,style:{left:`${_(e,`x`)}%`,top:`${_(e,`y`)}%`,opacity:.7}},e.id)):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Jc,{src:Rc,style:{left:o?`68%`:`49%`,top:o?`64.2%`:`66%`}}),(0,L.jsx)(Jc,{src:Rc,style:{left:o?`21.5%`:`12%`,top:o?`77%`:`82%`}})]})]}),(0,L.jsxs)(Uc,{isTransparent:g,children:[(0,L.jsx)(Wc,{active:i===`Brasil`,isTransparent:g,onClick:()=>f(`Brasil`),children:c(`projects.brazil`)}),(0,L.jsx)(Wc,{active:i===`Chile`,isTransparent:g,onClick:()=>f(`Chile`),children:c(`projects.chile`)})]}),(0,L.jsxs)(Yc,{children:[(0,L.jsx)(Xc,{children:u.map(e=>(0,L.jsxs)(Zc,{onClick:()=>p(e),style:{opacity:n?.id===e.id?1:.8,background:n?.id===e.id?`rgba(0,0,0,0.05)`:`transparent`},children:[(0,L.jsx)(Qc,{}),(0,L.jsxs)(al,{children:[(0,L.jsx)($c,{children:e.name}),(0,L.jsx)(el,{children:e.city})]})]},e.id))}),(0,L.jsxs)(tl,{children:[(0,L.jsx)(nl,{onClick:h,children:(0,L.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),(0,L.jsx)(nl,{onClick:m,children:(0,L.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})})]})}var al=H.div`
  display: flex;
  flex-direction: column;
`,ol=H.section`
  background-color: ${({theme:e})=>e.colors[`surface-container-low`]};
  padding: 10rem 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 2px solid #000;
`,sl=H.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,cl=H.span`
  display: inline-block;
  padding: 8px 60px;
  border: 1px solid #999;
  border-radius: 50px;
  font-family: ${({theme:e})=>e.fonts.label};
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  background-color: #fff;
  margin-bottom: 5px; /* Espaçamento curto para o título logo abaixo */
`,ll=H.h2`
  font-family: ${({theme:e})=>e.fonts.headline};
  font-size: 2.8rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors[`on-surface`]};
  margin: 0;
  letter-spacing: -0.01em;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 2rem;
  }
`,ul=H.p`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 1.1rem;
  line-height: 1.4;
  color: ${({theme:e})=>e.colors[`on-surface-variant`]};
  max-width: 700px;
  margin: 0 auto;
  font-weight: 500;
`,dl=H.button`
  background-color: ${({theme:e})=>e.colors[`primary-container`]};
  color: #000;
  border: none;
  padding: 8px 8px 8px 30px;
  border-radius: 50px;
  font-family: ${({theme:e})=>e.fonts.label};
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`,fl=H.div`
  background-color: #888b8d;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.2rem !important;
  }
`;function pl(){let{t:e}=V(),t=ut();return(0,L.jsx)(ol,{id:`contact`,children:(0,L.jsxs)(sl,{children:[(0,L.jsx)(cl,{children:e(`contact.badge`)}),(0,L.jsx)(ll,{children:e(`contact.title`)}),(0,L.jsx)(ul,{children:e(`contact.text`)}),(0,L.jsxs)(dl,{onClick:()=>{t(`/contato`)},children:[e(`contact.button`),(0,L.jsx)(fl,{children:(0,L.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})})}function ml(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ho,{}),(0,L.jsx)(Gs,{}),(0,L.jsx)(rc,{}),(0,L.jsx)(Cc,{}),(0,L.jsx)(Ic,{}),(0,L.jsx)(il,{}),(0,L.jsx)(pl,{})]})}var hl=`/star-process-website/assets/About-Ckq1fzOw.png`,gl=`/star-process-website/assets/AboutIntro-DouwIQ0B.png`,_l=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2011.25%2011.36'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{clip-path:url(%23clip-path);}.cls-3{fill:%23373737;}%3c/style%3e%3cclipPath%20id='clip-path'%3e%3cpolygon%20class='cls-1'%20points='21.47%20-107.97%2021.47%20-73.1%2021.47%20-72.85%2021.47%20-41.43%20128.72%20-41.43%20128.72%20-72.85%20128.72%20-73.1%20128.72%20-107.97%2021.47%20-107.97'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3cg%20class='cls-2'%3e%3cg%20id='Saa8wA'%3e%3cimage%20id='Saa8wA-2'%20data-name='Saa8wA'%20width='1101'%20height='976'%20transform='translate(9.36%20-110.03)%20scale(0.13)'%20xlink:href='../IMAGENS/Imagem%252007.png'/%3e%3c/g%3e%3c/g%3e%3cg%20id='lMObms'%3e%3cpath%20class='cls-3'%20d='M5.78,2.9l.55.1a2.67,2.67,0,0,1,1.22.72,2.53,2.53,0,0,1,.74,1.39,2.68,2.68,0,0,1-1,2.69.71.71,0,0,1-.09.07c-.11,0-.13.14-.13.26,0,.47,0,.94,0,1.41v.09H6.78c-.06,0-.09,0-.1.08a1.11,1.11,0,0,1-2.17,0s0-.06-.07-.06H4.09V8a.12.12,0,0,0,0-.11A2.65,2.65,0,0,1,2.9,6.19a2.6,2.6,0,0,1,.47-2.14A2.64,2.64,0,0,1,4.81,3C5,3,5.17,3,5.36,2.91Zm.93,5.5V7.91a.15.15,0,0,1,.09-.16,3,3,0,0,0,.42-.31,2.34,2.34,0,0,0,.79-2A2.41,2.41,0,0,0,5.74,3.23a2.28,2.28,0,0,0-1.31.29A2.35,2.35,0,0,0,3.19,5.86,2.23,2.23,0,0,0,4.28,7.67a.37.37,0,0,1,.21.39,1.93,1.93,0,0,0,0,.34Zm0,.33H4.45v.6H6.72Zm-.49.94H5a.61.61,0,0,0,.61.46A.62.62,0,0,0,6.23,9.67Z'/%3e%3cpath%20class='cls-3'%20d='M4.5,4.87l-.24-.23.32-.33.22.24.36-.17a.31.31,0,0,1,.13,0c.06,0,.08,0,.08-.1a1.62,1.62,0,0,1,0-.22s0-.06,0-.06h.35s.06,0,.05,0a2.26,2.26,0,0,0,0,.26.08.08,0,0,0,0,.06,1.28,1.28,0,0,1,.51.22l.23-.25.33.33-.25.23a1.55,1.55,0,0,1,.23.51s0,0,0,0h.26s0,0,0,.05v.35s0,0,0,0H7l0,0a1.38,1.38,0,0,1-.23.51l.25.24L6.62,7l-.23-.25A1.41,1.41,0,0,1,5.86,7s0,0,0,0a1,1,0,0,0,0,.25s0,.06-.06.06H5.42s0,0,0-.06V7a.15.15,0,0,0,0-.06,1.39,1.39,0,0,1-.5-.22L4.59,7l-.33-.33.24-.23a1.32,1.32,0,0,1-.22-.52s0,0-.06,0H4s-.06,0-.06,0V5.48s0-.06.06-.05h.25a.08.08,0,0,0,.06,0A1.52,1.52,0,0,1,4.5,4.87Zm1.09-.18a1,1,0,1,0,1,1A1,1,0,0,0,5.59,4.69Z'/%3e%3cpath%20class='cls-3'%20d='M5.82,5.66a.57.57,0,0,0,0,.13c0,.07,0,.1-.09.09H5.45c-.07,0-.09,0-.08-.09V5.51c0-.07,0-.09.09-.09h.27c.08,0,.1,0,.1.1A.66.66,0,0,0,5.82,5.66Z'/%3e%3c/g%3e%3cpath%20class='cls-3'%20d='M5.82,2.23a.61.61,0,0,0,0,.14c0,.07,0,.1-.09.09H5.45c-.07,0-.09,0-.08-.09V.86c0-.07,0-.09.09-.09a1.22,1.22,0,0,0,.27,0c.08,0,.1,0,.1.1S5.82,2.19,5.82,2.23Z'/%3e%3cpath%20class='cls-3'%20d='M1,5.87H.86c-.07,0-.1,0-.09-.09V5.5c0-.08,0-.09.09-.09H2.37c.07,0,.09,0,.08.09a2.62,2.62,0,0,0,0,.28c0,.08,0,.1-.1.09Z'/%3e%3cpath%20class='cls-3'%20d='M9,5.87H8.89c-.07,0-.1,0-.09-.09V5.5c0-.08,0-.09.08-.09H10.4c.07,0,.09,0,.08.09v.28c0,.08,0,.1-.09.09Z'/%3e%3cpath%20class='cls-3'%20d='M2.51,9.08l-.09.09c0,.06-.08.06-.13,0a1.89,1.89,0,0,0-.2-.2c-.06-.05,0-.08,0-.13L3.16,7.78s.08,0,.12,0l.2.2c.06,0,0,.09,0,.13Z'/%3e%3cpath%20class='cls-3'%20d='M8.19,3.4a.94.94,0,0,0-.1.1S8,3.56,8,3.5a2,2,0,0,0-.21-.2s0-.08,0-.12,1-1,1.07-1.08.08,0,.12,0a1.8,1.8,0,0,0,.2.19c.06.06.05.09,0,.14Z'/%3e%3cpath%20class='cls-3'%20d='M9.06,8.76l.1.09c.05,0,.06.08,0,.13a1.89,1.89,0,0,0-.2.2c-.05.06-.08.05-.12,0L7.77,8.11c-.06,0,0-.08,0-.13A1.7,1.7,0,0,0,8,7.79c.06-.06.09-.06.14,0Z'/%3e%3cpath%20class='cls-3'%20d='M3.38,3.08l.1.09c.06.05.06.08,0,.13l-.2.2c0,.06-.08,0-.12,0s-1-1-1.07-1.07,0-.08,0-.12.14-.13.2-.2.08,0,.13,0Z'/%3e%3c/g%3e%3c/svg%3e`,vl=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2011.25%2011.36'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{clip-path:url(%23clip-path);}.cls-3{fill:%23373737;}%3c/style%3e%3cclipPath%20id='clip-path'%3e%3cpolygon%20class='cls-1'%20points='-9.78%20-107.97%20-9.78%20-73.1%20-9.78%20-72.85%20-9.78%20-41.43%2097.47%20-41.43%2097.47%20-72.85%2097.47%20-73.1%2097.47%20-107.97%20-9.78%20-107.97'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3cg%20class='cls-2'%3e%3cg%20id='Saa8wA'%3e%3cimage%20id='Saa8wA-2'%20data-name='Saa8wA'%20width='1101'%20height='976'%20transform='translate(-21.89%20-110.03)%20scale(0.13)'%20xlink:href='../IMAGENS/Imagem%252007.png'/%3e%3c/g%3e%3c/g%3e%3cg%20id='_28yFiZ'%20data-name='28yFiZ'%3e%3cpath%20class='cls-3'%20d='M3,1.11a.19.19,0,0,1,.08.17q0,1.05,0,2.1a.21.21,0,0,0,0,.13c.12.13.25.26.4.4l.23-.25c.06-.06.13-.07.18,0s.05.11,0,.18l-.23.23L5.16,5.52a.24.24,0,0,0,0-.07,1.69,1.69,0,0,0,.13-.31,2.25,2.25,0,0,1,.62-1c1-1,1.95-1.93,2.91-2.9.13-.13.16-.13.29,0s.31.31.47.47.11.15,0,.26L6.34,5.27a.31.31,0,0,1-.15.1l-.76.31-.12.05a.52.52,0,0,1,.11.07L8.63,9c.09.09.1.15,0,.21s-.2,0-.17,0L8.13,8.9H7.85c-1.55,0-3.1,0-4.65,0H3.07V9c0,.36,0,.71,0,1.06,0,.14,0,.17-.17.17H1.76c-.17,0-.2,0-.2-.19V1.3a.23.23,0,0,1,.07-.19ZM2.84,10V1.35h-1v.18H2c.07,0,.12,0,.12.12A.11.11,0,0,1,2,1.76H1.8v.35H2a.12.12,0,0,1,.13.11c0,.07,0,.11-.13.12H1.8v.34H2c.08,0,.13.06.12.12s0,.11-.12.11H1.8v.35H2c.07,0,.12.05.11.12s0,.1-.12.11H1.8v.35H2c.09,0,.14,0,.14.11s0,.11-.14.11H1.8v.34H2c.08,0,.13,0,.13.12A.12.12,0,0,1,2,4.64H1.8V5H2c.07,0,.12,0,.11.12s0,.1-.12.1H1.8v.36a1,1,0,0,1,.17,0c.07,0,.12,0,.12.1A.11.11,0,0,1,2,5.79H1.8v.35h.14c.1,0,.15,0,.15.11s0,.12-.15.12H1.8v.35H2c.08,0,.14,0,.13.11S2,6.94,2,6.94H1.8V7.3H2a.1.1,0,0,1,.1.11A.1.1,0,0,1,2,7.52H1.8v.35H2c.07,0,.13,0,.13.11s0,.11-.13.12H1.8v.34H2c.07,0,.12,0,.12.11s0,.12-.13.12H1.8V9H2c.07,0,.12.05.11.12s0,.1-.12.11H1.8V9.6H2a.11.11,0,0,1,.12.11c0,.08,0,.11-.12.11H1.8V10ZM8,8.68l-.52-.53-.3.3a.11.11,0,0,1-.19,0,.15.15,0,0,1,0-.12L7.27,8,7,7.74l-.09.1-.21.21a.17.17,0,0,1-.12,0A.13.13,0,0,1,6.53,8a.22.22,0,0,1,0-.11l.28-.27-.25-.26c-.09.09-.19.2-.3.3a.17.17,0,0,1-.12,0s-.07-.06-.07-.09a.17.17,0,0,1,.06-.11l.27-.27-.24-.26L6,7.19c-.09.09-.16.1-.21,0s0-.13,0-.21l.27-.26L5.8,6.52l-.27.28c-.08.07-.15.08-.2,0s0-.12,0-.19.18-.19.28-.28l-.26-.25-.29.3c-.07.07-.15.06-.19,0a.11.11,0,0,1,0-.15L5.24,6,5,5.71,4.69,6c-.06.06-.12.07-.17,0a.11.11,0,0,1,0-.17l.3-.29L4.58,5.3l-.06.07a2.73,2.73,0,0,1-.25.23.12.12,0,0,1-.12,0,.16.16,0,0,1-.07-.09.15.15,0,0,1,.06-.11l.28-.28-.25-.26-.3.3c-.07.07-.18,0-.19,0a.21.21,0,0,1,0-.13c.09-.1.2-.19.28-.28l-.25-.25-.27.27c-.07.07-.14.08-.19,0s0-.12,0-.19l.28-.27-.53-.52V8.68ZM6.21,5.06,9,2.3l-.1-.11L6.11,5ZM8.59,1.9,5.81,4.67l.11.11L8.69,2Zm.8,0L9,1.49l-.24.23.4.4Zm-3.72,3-.22.54L6,5.21Z'/%3e%3cpath%20class='cls-3'%20d='M4.49,3s.07,0,.08.06a.13.13,0,0,1,0,.12c-.12.13-.24.25-.37.37a.15.15,0,0,1-.13,0,.13.13,0,0,1,0-.13c.12-.14.25-.26.38-.39Z'/%3e%3cpath%20class='cls-3'%20d='M9.12,9.82l-.31-.31c-.06-.06-.06-.13,0-.17a.1.1,0,0,1,.16,0,3.43,3.43,0,0,1,.33.33s.05.08,0,.11S9.19,9.87,9.12,9.82Z'/%3e%3cpath%20class='cls-3'%20d='M4.75,2.94s-.07,0-.09-.06a.17.17,0,0,1,0-.12c.12-.12.24-.25.37-.37a.09.09,0,0,1,.14,0,.17.17,0,0,1,0,.14l-.37.37S4.78,2.93,4.75,2.94Z'/%3e%3cpath%20class='cls-3'%20d='M5.73,1.74s.07,0,.08.07,0,.09,0,.12-.23.24-.36.36a.08.08,0,0,1-.14,0,.1.1,0,0,1,0-.15l.36-.35S5.69,1.76,5.73,1.74Z'/%3e%3cpath%20class='cls-3'%20d='M6,1.7a.12.12,0,0,1-.11-.11c0-.07.07-.14.13-.13a.1.1,0,0,1,.11.11C6.13,1.63,6.06,1.7,6,1.7Z'/%3e%3cpath%20class='cls-3'%20d='M9.49,9.92a.12.12,0,0,1,.12.12.1.1,0,0,1-.11.11A.11.11,0,0,1,9.38,10,.12.12,0,0,1,9.49,9.92Z'/%3e%3cpath%20class='cls-3'%20d='M4.93,7.94H4c-.13,0-.16,0-.16-.16,0-.63,0-1.26,0-1.89a.12.12,0,0,1,.07-.15c.06,0,.11,0,.15.06L6,7.71s.09.1.06.17-.09.06-.16.06Zm.67-.23L4.05,6.16V7.71Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,yl=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2011.25%2011.36'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{clip-path:url(%23clip-path);}.cls-3{fill:%23373737;}%3c/style%3e%3cclipPath%20id='clip-path'%3e%3cpolygon%20class='cls-1'%20points='-41.03%20-107.97%20-41.03%20-73.1%20-41.03%20-72.85%20-41.03%20-41.43%2066.22%20-41.43%2066.22%20-72.85%2066.22%20-73.1%2066.22%20-107.97%20-41.03%20-107.97'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3cg%20class='cls-2'%3e%3cg%20id='Saa8wA'%3e%3cimage%20id='Saa8wA-2'%20data-name='Saa8wA'%20width='1101'%20height='976'%20transform='translate(-53.14%20-110.03)%20scale(0.13)'%20xlink:href='../IMAGENS/Imagem%252007.png'/%3e%3c/g%3e%3c/g%3e%3cg%20id='KEQXIN'%3e%3cpath%20class='cls-3'%20d='M8.48,9.06a.61.61,0,0,1-1,.44l0,.08a.58.58,0,0,1-.87.4l-.07,0,0,.08a.58.58,0,0,1-.9.38L5.3,10.2l-.07,0-.07.09a.57.57,0,0,1-.61.25A.56.56,0,0,1,4.08,10s0,0,0,0h0a.62.62,0,0,1-.76-.53.61.61,0,0,1-.75-.52,1.51,1.51,0,0,1-.3,0,.53.53,0,0,1-.43-.43.57.57,0,0,1,.2-.6l.06,0s0,0,0-.08L2,7.81a.14.14,0,0,1-.19.05l-.05,0L1,7.36C.87,7.28.86,7.23.94,7.09L2.35,4.74l.4-.68c.08-.12.13-.13.26-.06l.78.47c.13.08.14.1.11.23s3.27,0,3.44,0h0c0-.11,0-.17.1-.23.27-.15.53-.31.79-.47s.18-.06.26.07l1.72,2.87.1.18c.07.11,0,.16-.06.23l-.49.29-.32.19c-.12.07-.17.06-.25,0l0,0L9,8l.17.13a.59.59,0,0,1,0,.9.57.57,0,0,1-.65.09Zm-3-3.16H5.34A.14.14,0,0,0,5.21,6c-.1.17-.19.33-.3.49a1,1,0,0,1-1.33.36c-.12-.06-.14-.12-.07-.24l.25-.41L4.46,5V5H3.84a.18.18,0,0,0-.18.1c-.44.74-.87,1.47-1.32,2.2a.3.3,0,0,0,0,.36.19.19,0,0,0,.16.11A.52.52,0,0,1,2.91,8l0,.07a.61.61,0,0,1,.54-.19A.6.6,0,0,1,4,8.28.64.64,0,0,1,4.35,8a.59.59,0,0,1,.68.4A.62.62,0,0,1,4.94,9a.64.64,0,0,1,.51.35.61.61,0,0,1-.07.62l.27.19a.57.57,0,0,0,.13.08A.32.32,0,0,0,6.25,10a.34.34,0,0,0-.13-.37l-.5-.35-.07,0A.13.13,0,0,1,5.7,9l.07.05.72.5.24.17a.33.33,0,0,0,.38-.54L7,9.16l-.87-.62-.07,0a.16.16,0,0,1,0-.18.14.14,0,0,1,.17,0l.11.07,1.29.91a.6.6,0,0,0,.11.06A.32.32,0,1,0,8,8.74c-.44-.32-.89-.63-1.34-.94L6.6,7.73a.14.14,0,0,1,0-.16.12.12,0,0,1,.16-.05l.09.06,1.07.75.73.51A.35.35,0,0,0,9,8.9a.31.31,0,0,0,.22-.26A.33.33,0,0,0,9,8.3L7,6.87a.21.21,0,0,0-.13,0H6.54a1,1,0,0,1-1-.78ZM8.82,7.83,9,7.54a.15.15,0,0,0,0-.17L7.58,5.07A.16.16,0,0,0,7.43,5H5.12a.57.57,0,0,0-.52.3L3.85,6.54a.41.41,0,0,0-.05.09.11.11,0,0,0,.07,0,.72.72,0,0,0,.8-.29,1,1,0,0,0,.08-.14l.3-.5a.15.15,0,0,1,.12-.09h.47c.07,0,.1,0,.11.12s0,.07,0,.11a.78.78,0,0,0,.77.68h.39a.31.31,0,0,1,.21.07L8.72,7.77ZM2.94,4.27,1.2,7.17l.66.39c.08-.1,1.71-2.82,1.73-2.9Zm7.11,2.9L8.31,4.27l-.67.4,1.74,2.9ZM4.79,8.6a.31.31,0,0,0-.21-.31.33.33,0,0,0-.38.11l-.56.8a.34.34,0,0,0,.08.46.33.33,0,0,0,.46-.08c.19-.26.37-.53.55-.79A.27.27,0,0,0,4.79,8.6ZM3.4,8.18a.29.29,0,0,0-.24.11c-.1.13-.2.27-.29.41A.31.31,0,0,0,3,9.12a.32.32,0,0,0,.44,0,2.42,2.42,0,0,0,.29-.42A.32.32,0,0,0,3.4,8.18Zm1.28,2.07a.34.34,0,0,0,.24-.13l.28-.39a.33.33,0,0,0-.53-.39,3.52,3.52,0,0,0-.29.42A.33.33,0,0,0,4.68,10.25ZM2.08,8.34a.32.32,0,0,0,.32.32.33.33,0,1,0-.32-.32Z'/%3e%3cpath%20class='cls-3'%20d='M7.37,2.6A1.75,1.75,0,1,1,5.64.85,1.75,1.75,0,0,1,7.37,2.6Zm-.27,0A1.48,1.48,0,1,0,5.62,4.07,1.47,1.47,0,0,0,7.1,2.6Z'/%3e%3cpath%20class='cls-3'%20d='M2.07,7c0,.11-.09.18-.17.14a2.61,2.61,0,0,1-.28-.17.12.12,0,0,1,0-.16.12.12,0,0,1,.14-.06A2.16,2.16,0,0,1,2,6.9S2.06,7,2.07,7Z'/%3e%3cpath%20class='cls-3'%20d='M9.32,7.12A.13.13,0,0,1,9.19,7a.12.12,0,0,1,0-.15l.28-.16a.13.13,0,0,1,.16,0c0,.06,0,.13,0,.16a3,3,0,0,1-.3.18Z'/%3e%3cpath%20class='cls-3'%20d='M5.45,2.41l.09-.09L6,1.84c.09-.09.15-.09.24,0l.29.29c.09.09.09.15,0,.24l-1,1c-.09.09-.15.09-.24,0l-.65-.64a.13.13,0,0,1,0-.22L5,2.17a.14.14,0,0,1,.22,0Zm.94-.17L6.18,2l-.74.7-.32-.33-.23.2.57.56Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,bl=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2011.25%2011.36'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-4,.cls-5{fill:none;}.cls-2{clip-path:url(%23clip-path);}.cls-3{fill:%23373737;}.cls-4,.cls-5{stroke:%23373737;stroke-width:0.35px;}.cls-4{stroke-miterlimit:10;}.cls-5{stroke-linecap:round;stroke-linejoin:round;}%3c/style%3e%3cclipPath%20id='clip-path'%3e%3cpolygon%20class='cls-1'%20points='-72.28%20-107.97%20-72.28%20-73.1%20-72.28%20-72.85%20-72.28%20-41.43%2034.97%20-41.43%2034.97%20-72.85%2034.97%20-73.1%2034.97%20-107.97%20-72.28%20-107.97'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3cg%20class='cls-2'%3e%3cg%20id='Saa8wA'%3e%3cimage%20id='Saa8wA-2'%20data-name='Saa8wA'%20width='1101'%20height='976'%20transform='translate(-84.39%20-110.03)%20scale(0.13)'%20xlink:href='../IMAGENS/Imagem%252007.png'/%3e%3c/g%3e%3c/g%3e%3cpath%20class='cls-3'%20d='M.39,8.84h.72V5.72H.27c-.11,0-.18-.07-.16-.17a.14.14,0,0,1,.14-.12h1a.14.14,0,0,1,.14.15,1.4,1.4,0,0,1,0,.29c0,.08,0,.1.1.1H2.59A.53.53,0,0,1,2.86,6l1.33.88a.37.37,0,0,0,.15,0H6.93a.65.65,0,1,1,0,1.29H4.25c-.11,0-.18-.06-.18-.15S4.14,8,4.25,8H6.93a.36.36,0,1,0,0-.71H4.29a.41.41,0,0,1-.23-.07L2.7,6.29a.18.18,0,0,0-.09,0H1.41V8.31h.37a.43.43,0,0,1,.19,0L4.9,10a.81.81,0,0,0,.85,0c1.85-1,3-1.68,4.82-2.71l.1-.06a.36.36,0,1,0-.33-.63c-.29.15-.57.32-.85.47l-1.36.76a.33.33,0,0,1-.17,0,.19.19,0,0,1-.08-.11A.13.13,0,0,1,8,7.63l.49-.27,1.72-1a.64.64,0,0,1,.89.25.63.63,0,0,1-.26.88c-.94.52-1.14.66-2.08,1.19L5.87,10.3a1.07,1.07,0,0,1-1.08,0L1.88,8.64a.47.47,0,0,0-.17,0h-.3v.34c0,.15,0,.19-.19.19H.28C.16,9.13.11,9.08.11,9V5.61c0-.1.05-.16.14-.16s.14.06.14.17V8.84Z'/%3e%3ccircle%20class='cls-4'%20cx='5.61'%20cy='2.14'%20r='1.23'/%3e%3cpath%20class='cls-5'%20d='M4,6.09V5.6a1.61,1.61,0,1,1,3.22,0v.49'/%3e%3c/g%3e%3c/svg%3e`,xl=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2011.25%2011.36'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-3{fill:none;}.cls-2{clip-path:url(%23clip-path);}.cls-3{stroke:%23373737;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.35px;}%3c/style%3e%3cclipPath%20id='clip-path'%3e%3cpolygon%20class='cls-1'%20points='-103.54%20-107.97%20-103.54%20-73.1%20-103.54%20-72.85%20-103.54%20-41.43%203.71%20-41.43%203.71%20-72.85%203.71%20-73.1%203.71%20-107.97%20-103.54%20-107.97'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3cg%20class='cls-2'%3e%3cg%20id='Saa8wA'%3e%3cimage%20id='Saa8wA-2'%20data-name='Saa8wA'%20width='1101'%20height='976'%20transform='translate(-115.64%20-110.03)%20scale(0.13)'%20xlink:href='../IMAGENS/Imagem%252007.png'/%3e%3c/g%3e%3c/g%3e%3ccircle%20class='cls-3'%20cx='5.62'%20cy='5.72'%20r='2.12'/%3e%3ccircle%20class='cls-3'%20cx='5.62'%20cy='5.72'%20r='3.72'/%3e%3cline%20class='cls-3'%20x1='3.5'%20y1='5.76'%20x2='0.84'%20y2='5.76'/%3e%3cline%20class='cls-3'%20x1='10.42'%20y1='5.76'%20x2='7.75'%20y2='5.76'/%3e%3cline%20class='cls-3'%20x1='6.69'%20y1='5.76'%20x2='4.53'%20y2='5.76'/%3e%3cline%20class='cls-3'%20x1='5.63'%20y1='7.88'%20x2='5.63'%20y2='10.55'/%3e%3cline%20class='cls-3'%20x1='5.63'%20y1='0.81'%20x2='5.63'%20y2='3.48'/%3e%3cline%20class='cls-3'%20x1='5.61'%20y1='4.68'%20x2='5.61'%20y2='6.84'/%3e%3c/g%3e%3c/svg%3e`,Sl=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2011.25%2011.36'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:none;stroke:%23373737;stroke-width:0.35px;}.cls-1{stroke-miterlimit:10;}.cls-2{stroke-linecap:round;stroke-linejoin:round;}%3c/style%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3ccircle%20class='cls-1'%20cx='5.63'%20cy='5.87'%20r='2.44'/%3e%3cellipse%20class='cls-1'%20cx='5.63'%20cy='5.79'%20rx='5.14'%20ry='2.58'/%3e%3cline%20class='cls-2'%20x1='5.63'%20y1='2.01'%20x2='5.63'%20y2='0.89'/%3e%3cline%20class='cls-2'%20x1='3.68'%20y1='2.47'%20x2='3.36'%20y2='1.69'/%3e%3cline%20class='cls-2'%20x1='7.89'%20y1='1.69'%20x2='7.57'%20y2='2.47'/%3e%3cline%20class='cls-2'%20x1='5.63'%20y1='9.5'%20x2='5.63'%20y2='10.47'/%3e%3cline%20class='cls-2'%20x1='7.57'%20y1='9.17'%20x2='7.89'%20y2='9.95'/%3e%3cline%20class='cls-2'%20x1='3.36'%20y1='9.95'%20x2='3.68'%20y2='9.17'/%3e%3cpolyline%20class='cls-2'%20points='3.64%207.01%205.57%205.09%205.57%206.34%207.55%204.35'/%3e%3c/g%3e%3c/svg%3e`,Cl=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2011.25%2011.36'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;stroke:%23373737;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.35px;}%3c/style%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3cpolygon%20class='cls-1'%20points='3.66%203.81%202.75%205.43%205.62%208.29%208.5%205.43%207.58%203.81%203.66%203.81'/%3e%3cline%20class='cls-1'%20x1='2.86'%20y1='5.41'%20x2='8.48'%20y2='5.41'/%3e%3cpolyline%20class='cls-1'%20points='5.62%203.88%204.63%205.19%203.67%203.85'/%3e%3cpolyline%20class='cls-1'%20points='7.58%203.88%206.59%205.19%205.57%203.85'/%3e%3cpolyline%20class='cls-1'%20points='4.64%205.43%205.65%208.07%206.64%205.46'/%3e%3cpolygon%20class='cls-1'%20points='5.63%201.59%206.61%200.97%207.25%201.94%208.42%201.78%208.6%202.92%209.74%203.25%209.43%204.36%2010.36%205.13%209.6%206.01%2010.15%207.1%209.09%207.59%209.16%208.81%207.98%208.83%207.56%209.97%206.46%209.5%205.63%2010.38%204.79%209.5%203.69%209.97%203.27%208.83%202.09%208.81%202.16%207.59%201.1%207.1%201.65%206.01%200.9%205.13%201.82%204.36%201.51%203.25%202.65%202.92%202.83%201.78%204%201.94%204.64%200.97%205.63%201.59'/%3e%3c/g%3e%3c/svg%3e`,wl=H.div`
  background-color: #f4f4f4;
`,Tl=H.div`
  height: 180px;
  background: url(${hl});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,El=H.section`
  background-color: #fff;
  padding: 80px 20px;
`,Dl=H.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,Ol=H.div`
  text-align: left;
  h2 {
    font-size: 2.2rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    margin-bottom: 25px;
    font-family: ${I.fonts.headline};
  }
  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.2;
    max-width: 500px;
  }
`,kl=H.img`
  width: 100%;
  border-radius: 4px;
`,Al=H.div`
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem;
  transition: transform 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`,jl=H.div`
  border: 1px solid #a8a8a87e;
  height: 100%;
  display: flex;
  flex-direction: column;
`,Ml=H.div`
  background-color: #ffffff;
  padding: 0.7rem 1.5rem;
  text-align: left;
  border-bottom: 1rem solid #ffd700;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  position: relative;

  img {
    width: 42px;
    height: 42px;
    margin-bottom: 1rem;
    object-fit: contain;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #1a1c1e;
    margin-bottom: 0.8rem;
    font-family: ${I.fonts.headline};
    line-height: 1.2;
  }

  p {
    font-size: 0.85rem;
    color: #777;
    line-height: 1.5;
    margin: 0;
  }
`,Nl=H.section`
  padding: 50px 20px 30px 20px;
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
  }
  
  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.3;
    max-width: 500px;
    margin: 1rem auto;
  }
`,Pl=H.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: ${I.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${I.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Fl=H.section`
  padding: 0 20px 80px;
  max-width: 1200px;
  margin: 0 auto;
`,Il=H.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;function Ll(){let{t:e}=V(),t=e(`aboutpage.differentials.items`,{returnObjects:!0}),n=[_l,vl,yl,bl],r=t.map((e,t)=>({...e,icon:n[t]})),i=e(`aboutpage.strategic.items`,{returnObjects:!0}),a=[xl,Sl,Cl],o=i.map((e,t)=>({...e,icon:a[t]}));return(0,L.jsxs)(wl,{children:[(0,L.jsx)(Tl,{children:(0,L.jsx)(`h1`,{children:e(`aboutpage.banner.title`)})}),(0,L.jsx)(El,{children:(0,L.jsxs)(Dl,{children:[(0,L.jsxs)(Ol,{children:[(0,L.jsx)(`h2`,{children:e(`aboutpage.intro.title`)}),(0,L.jsx)(`p`,{children:e(`aboutpage.intro.description`)})]}),(0,L.jsx)(kl,{src:gl,alt:e(`aboutpage.banner.title`)})]})}),(0,L.jsxs)(Nl,{children:[(0,L.jsx)(`h2`,{children:e(`aboutpage.differentials.title`)}),(0,L.jsx)(`p`,{children:e(`aboutpage.differentials.subtitle`)}),(0,L.jsx)(Pl,{children:r.map((e,t)=>(0,L.jsx)(Al,{children:(0,L.jsx)(jl,{children:(0,L.jsxs)(Ml,{children:[(0,L.jsx)(`img`,{src:e.icon,alt:e.title}),(0,L.jsx)(`h3`,{children:e.title}),(0,L.jsx)(`p`,{children:e.description})]})})},t))})]}),(0,L.jsx)(Fl,{children:(0,L.jsx)(Il,{children:o.map((e,t)=>(0,L.jsx)(Al,{children:(0,L.jsx)(jl,{children:(0,L.jsxs)(Ml,{children:[(0,L.jsx)(`img`,{src:e.icon,alt:e.title}),(0,L.jsx)(`h3`,{children:e.title}),(0,L.jsx)(`p`,{children:e.description})]})})},t))})}),(0,L.jsx)(pl,{})]})}var Rl=`/star-process-website/assets/Logo%20Projetos_01-CZA53wxq.svg`,zl=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.54%2037.55'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23b1b1b1;%20}%20.cls-2%20{%20fill:%20%23fff;%20stroke:%20%23fff;%20stroke-miterlimit:%2010;%20}%20.cls-3%20{%20fill:%20%231f1f1f;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3crect%20class='cls-2'%20x='.5'%20y='.5'%20width='51.54'%20height='36.55'/%3e%3cg%20id='I2y0HJ'%3e%3cpath%20class='cls-3'%20d='M12.24,16.49h1.25s0,.08,0,.12v1.27c0,.08,0,.12.11.11h.79v-1.5h1.07v3.93h-1.05v-1.68h-.82c-.07,0-.09,0-.09.09v1.59h-1.08v-3.42c0-.13-.04-.25-.14-.33,0,0-.02-.12-.04-.18Z'/%3e%3cpath%20class='cls-3'%20d='M23,18.22v2.11c0,.07,0,.1-.1.1h-.61c-.07,0-.1,0-.1-.09v-3.77s0-.08.05-.08h.64c.16.02.31.12.4.26l.94,1.49.22.34v-2c0-.08,0-.11.11-.11h.72v3.66c0,.22-.07.29-.28.29h-.49c-.05,0-.1-.02-.12-.07l-1.29-2.05-.09-.08Z'/%3e%3cpath%20class='cls-3'%20d='M39.56,18.6v-2.11h1c0,.08,0,.15-.06.2-.07.06-.1.16-.09.25v3.22c0,.19-.08.27-.27.27h-.52c-.05,0-.1-.02-.12-.07l-1.29-2s-.05-.06-.08-.08c0,.08,0,.16,0,.24v1.86c0,.06,0,.09-.08.09h-.65c-.06,0-.08,0-.08-.09v-3.81c0-.06,0-.09.09-.09h.48c.22,0,.42.1.53.29.37.57.73,1.15,1.1,1.73.02.03.03.06.04.1Z'/%3e%3cpath%20class='cls-3'%20d='M33.3,20.43h-.84c-.28.02-.55-.13-.69-.38l-.77-1.29-.08-.1v1.74h-.92c-.13.01-.24-.08-.25-.21,0-.01,0-.03,0-.04v-3.7h1c.08,0,.1,0,.1.11v1.34l.4-.44.65-.75c.13-.15.32-.24.52-.24h.78l-1.4,1.62,1.5,2.34Z'/%3e%3cpath%20class='cls-3'%20d='M17.62,17.21v.79h1.2v.72h-1.2v.79c0,.23.05.2.2.2h1.18q.13,0,.13.14v.34c0,.17-.08.25-.24.25h-1.89c-.22.02-.41-.15-.43-.37,0-.02,0-.04,0-.06v-3.4c0-.09.12-.12.12-.12h2.19c.14,0,.25.1.26.24,0,0,0,.01,0,.02v.35c0,.11,0,.12-.12.12h-1.4Z'/%3e%3cpath%20class='cls-3'%20d='M27.43,18h1.2v.72h-1.21v.78c0,.16,0,.21.21.21h1.2c.09,0,.13,0,.12.12s0,.24,0,.37c.01.12-.08.23-.2.24-.01,0-.03,0-.04,0h-1.93c-.21.02-.4-.14-.42-.36,0-.02,0-.03,0-.05v-3.44c0-.09.11-.11.11-.11h2.21s.25.08.25.25v.36q0,.12-.12.12h-1.38v.79Z'/%3e%3cpath%20class='cls-3'%20d='M21.17,18.46v1.86c0,.09,0,.11-.1.11h-.73c-.13.01-.24-.08-.25-.21,0-.02,0-.04,0-.05v-3.59c0-.08,0-.1.1-.1h.89c.08,0,.09,0,.09.1v1.88Z'/%3e%3c/g%3e%3cpolygon%20class='cls-1'%20points='11.4%2016.29%2011.09%2017.38%2010.14%2018.13%2010.73%2016.21%209.22%2014.94%2011.19%2014.94%2011.8%2013.04%2012.38%2014.97%2014.26%2014.97%2013.41%2015.7%2012.31%2015.7%2011.92%2014.76%2011.65%2015.67%2010.64%2015.67%2011.4%2016.29'/%3e%3cpath%20class='cls-3'%20d='M34.9,18h1.19v.72h-1.2v.78c0,.16,0,.21.21.21h1.2c.09,0,.13,0,.12.12s0,.24,0,.37c.01.12-.08.23-.2.24-.01,0-.03,0-.04,0h-1.93c-.21.02-.4-.14-.42-.36,0-.02,0-.03,0-.05v-3.44c0-.09.11-.11.11-.11h2.21s.25.08.25.25v.36q0,.12-.12.12h-1.38v.79Z'/%3e%3c/g%3e%3c/svg%3e`,Bl=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.54%2037.55'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20stroke:%20%23fff;%20stroke-miterlimit:%2010;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3crect%20class='cls-1'%20x='.5'%20y='.5'%20width='51.54'%20height='36.55'/%3e%3cpath%20d='M27.45,20.58v-1.85h-.71v1.85h-2.27v-4.44h2.26v1.66h.72v-1.66h2.27v4.44h-2.27Z'/%3e%3cpath%20d='M19.4,16.14h3.75c.6-.04,1.12.42,1.15,1.02,0,.08,0,.16-.01.24,0,.2-.06.39-.15.57-.07.16-.21.27-.37.32.21.09.37.27.43.49.12.36.12.74,0,1.1-.13.44-.54.73-1,.71h-3.8v-4.45ZM21.54,17.84h.37c.1.01.2-.04.24-.14.1-.2.1-.43,0-.63-.04-.07-.15-.07-.15-.07-.15,0-.3,0-.45,0v.84ZM21.54,19.59h.37c.1,0,.2-.05.24-.14.09-.19.09-.42,0-.61-.04-.07-.1-.12-.17-.15-.15-.01-.29-.01-.44,0v.9Z'/%3e%3cpath%20d='M37.1,18.53l1.19,2h-2.29c-.06,0-.11-.03-.13-.09-.12-.37-.25-.73-.38-1.09-.01-.05-.04-.09-.07-.12v1.29h-2.08v-4.38h3.54c.47-.01.88.3,1,.75.11.32.11.68,0,1-.1.36-.41.61-.78.64ZM35.39,18.12h.37c.13.01.25-.05.31-.17.14-.26.14-.58,0-.84-.04-.08-.12-.13-.2-.16-.16-.02-.32-.02-.48,0v1.17Z'/%3e%3cpath%20d='M38.31,16.14h3.5c.53-.05,1,.32,1.08.84.1.34.07.7-.08,1.02-.13.3-.42.5-.75.5l1.2,2.07h-2.29c-.09,0-.12,0-.15-.11l-.39-1.12s0-.05,0-.07v1.29h-2.12v-4.42ZM40.31,18.14h.37c.13.01.25-.06.3-.18.14-.26.14-.57,0-.83-.05-.08-.12-.14-.2-.17-.16-.01-.31-.01-.47,0v1.18Z'/%3e%3cpath%20d='M19.18,18.68h-1v.87h1v1h-3.18v-4.41h3.22v.79h-1v.88h1l-.04.87Z'/%3e%3cpath%20d='M33.15,18.68h-1v.87h1v1h-3.22v-4.4h3.22v.78h-1v.87h1v.88Z'/%3e%3cpath%20d='M10.13,16.14h2.31v3.17h1v1.27h-3.31v-4.44Z'/%3e%3cpath%20d='M13.53,16.14h2.18v4.44h-2.18v-4.44Z'/%3e%3c/g%3e%3c/svg%3e`,Vl=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.54%2037.55'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20stroke:%20%23fff;%20stroke-miterlimit:%2010;%20}%20.cls-1,%20.cls-2%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3crect%20class='cls-1'%20x='.5'%20y='.5'%20width='51.54'%20height='36.55'/%3e%3cg%20id='d6j0FK'%3e%3cpath%20d='M21.79,15.24v1c0,.08,0,.11-.1.11h-2.42c-.89-.02-1.69.52-2,1.35-.48,1.11.03,2.39,1.14,2.87.14.06.28.11.43.13.15.01.3.01.45,0h1.92v-1.64h-2.12s0-.06,0-.09l.45-.92.16-.05h14l.1.05.5,1h-2.2c-.07,0-.1,0-.14.09-.42.86-.85,1.72-1.28,2.57v.08h-1.22s0-.07,0-.11l1.26-2.53s0-.06,0-.09h-5.65v1.64h3.8v.09c-.08.15-.15.29-.22.44s-.19.37-.28.56h-4.37v-2.73h-1.66v2.73h-3.1c-.22,0-.43,0-.64-.08-1.27-.31-2.24-1.35-2.45-2.64l-.06-.41v-.25s0-.07,0-.1c0-.21.05-.43.11-.64.33-1.23,1.35-2.16,2.61-2.36h.41l2.57-.07Z'/%3e%3cpath%20d='M34.34,15.24l1.79,3.58,1.43,2.85v.11h-1.12c-.07,0-.14-.03-.16-.1-.92-1.85-1.85-3.69-2.77-5.54-.02-.04-.04-.08-.06-.12-.02.03-.04.06-.06.09l-.61,1.23s-.06.07-.1.07h-1.04s0-.05,0-.08l1-2s0-.06,0-.09h1.7Z'/%3e%3cpath%20d='M28.88,15.24v1c0,.07,0,.1-.09.1h-3.72v1s0,.09-.07.09h-1v-2.19h4.88Z'/%3e%3cpath%20class='cls-2'%20d='M19.21,15.24h-.41c-1.26.2-2.28,1.13-2.61,2.36-.06.21-.07.43-.11.64,0,.03,0,.07,0,.1v-3.1h3.13Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,U=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.54%2037.55'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20stroke:%20%23fff;%20stroke-miterlimit:%2010;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3crect%20class='cls-1'%20x='.5'%20y='.5'%20width='51.54'%20height='36.55'/%3e%3cg%20id='c4T2kt'%3e%3cpath%20d='M25.46,23.41h-1l-.94-.07-.86-.1c-.47-.06-.93-.15-1.39-.25s-1.05-.26-1.56-.43c-.51-.17-1.01-.37-1.49-.6-.47-.23-.92-.49-1.35-.79-.33-.25-.65-.52-.94-.81-.29-.3-.53-.63-.73-1-.14-.28-.23-.58-.28-.89-.06-.42-.03-.85.11-1.25.09-.28.23-.55.4-.8.21-.31.47-.59.75-.83.45-.39.94-.73,1.47-1,.54-.3,1.1-.55,1.68-.75.59-.2,1.19-.37,1.79-.51l1.17-.33.89-.13.85-.09.87-.05h2.61l.52.05h.46l.52.07.65.11c.43.07.85.17,1.27.28.54.14,1.06.3,1.58.5.55.21,1.08.46,1.59.76.37.22.73.46,1.06.74.3.26.58.54.82.86.24.3.43.64.55,1,.08.27.13.55.13.83,0,.39-.1.77-.27,1.12-.15.31-.34.6-.57.86-.26.3-.55.57-.87.8-.42.31-.86.59-1.33.83-.41.2-.82.38-1.25.54-.36.13-.73.26-1.1.37s-1,.28-1.49.38l-1.12.2c-.26.05-.51.08-.77.11l-.6.06-.7.05h-1.13v.16ZM25.56,22.67h1.81l.76-.08.83-.13c.44-.07.87-.17,1.3-.27s1-.27,1.49-.45c.49-.18.8-.3,1.19-.48.43-.2.85-.43,1.24-.69.37-.25.7-.54,1-.86.23-.24.42-.52.55-.83.13-.29.18-.61.15-.93-.03-.33-.14-.65-.32-.94-.16-.28-.36-.54-.6-.77-.26-.25-.54-.47-.84-.67-.35-.28-.73-.53-1.12-.75-.5-.24-1.02-.44-1.55-.6-.47-.15-1-.27-1.43-.38s-.84-.16-1.27-.21l-.85-.1c-.23,0-.46,0-.7-.06h-2.9l-.55.05-.65.07-.92.15-1.12.26c-.58.14-1.15.32-1.71.52-.42.16-.82.34-1.22.54-.39.2-.77.43-1.12.7-.3.22-.57.47-.8.76-.22.26-.38.56-.47.88-.1.31-.11.63-.05.95.08.39.25.75.49,1.07.23.31.51.59.82.83.34.27.69.51,1.07.72.44.24.91.45,1.38.63.38.15.77.28,1.16.38.33.09.67.18,1,.25s.68.13,1,.18.64.09,1,.12c.19.03.37.04.56.05h.73l.66.09Z'/%3e%3cpath%20d='M19.18,19.82h-.78v-3.89h2.28c.34.01.65.18.86.44.18.22.3.49.33.77.03.27,0,.54-.1.79-.1.3-.32.55-.6.7-.14.07-.29.12-.45.13-.33.02-.67.02-1,0h-.46v1l-.08.06ZM19.18,17.99h1.46c.18-.02.32-.15.37-.32.07-.19.07-.41,0-.6-.05-.16-.17-.28-.32-.33-.1,0-.2,0-.3,0h-1.21v1.25Z'/%3e%3cpath%20d='M26,19.83h-.81M25.14,19.83c-.11-.23-.23-.46-.35-.69-.02-.04-.07-.06-.11-.06h-1.68s-.06,0-.08.06l-.32.69h-.83s0-.09.05-.13l.74-1.53c.16-.34.32-.69.49-1l.51-1.17h.44l.31.59.69,1.24.6,1.16c.13.27.27.53.4.79v.05h-.86ZM24.37,18.29l-.56-1.1c-.22.35-.41.72-.56,1.1h1.12Z'/%3e%3cpath%20d='M33.36,19.12v.7h-3.08v-3.89h.8v3.13c0,.07,0,.06.05.06h2.23Z'/%3e%3cpath%20d='M26.7,15.93h.76v3.15h2.07v.61h-2.83v-3.76Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,W=`/star-process-website/assets/Logo%20Projetos_06-Bg_ynH_0.svg`,G=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.54%2037.55'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20stroke:%20%23fff;%20stroke-miterlimit:%2010;%20}%20.cls-1,%20.cls-2%20{%20fill:%20%23fff;%20}%20.cls-3%20{%20fill:%20%23979796;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3crect%20class='cls-1'%20x='.5'%20y='.5'%20width='51.54'%20height='36.55'/%3e%3cpath%20class='cls-2'%20d='M51.89.65v36.25H.65V.65h51.24M52,.5H.5v36.55h51.5V.5Z'/%3e%3cg%20id='rG6X6U'%3e%3cpath%20class='cls-3'%20d='M17,20.28c.19-.3.28-.65.25-1v-1.18l-1.48.3c.21.65.47,1.28.79,1.89h-1.44c-.01-.45-.12-.89-.31-1.29-.04-.12-.08-.24-.13-.36l-.91.3c-.21.08-.42.16-.62.26-.32.12-.55.38-.63.71v.34h-1c.26-.46.46-.95.6-1.45.37-1,.74-2,1.1-3.07.07-.22.11-.45.17-.68h1.13c.08,0,.15.05.17.13.29.82.6,1.64.89,2.47,0,.11.09.13.2.1l1.42-.29c.08,0,.15-.08.14-.16,0,0,0,0,0-.01v-1.37c.02-.28-.06-.56-.21-.8-.06-.02-.1-.06-.13-.12h2.08c.37-.01.73.04,1.08.15.44.07.78.41.84.85.08.38-.06.77-.37,1-.13.1-.28.17-.42.26l-.12.06.38.14c.53.18.88.68.86,1.24.03.59-.33,1.13-.89,1.33-.37.15-.76.22-1.16.22h-2.28v.03ZM18.42,19.63c.33.05.67.05,1,0,.35-.05.62-.32.67-.67.12-.4-.08-.83-.47-1-.18-.09-.38-.16-.59-.18-.17,0-.33.03-.49.08-.09,0-.12.05-.12.14v1.63ZM18.42,17.2c.34-.03.68-.12,1-.26.26-.13.4-.4.37-.68-.03-.28-.24-.49-.52-.52-.25-.04-.51-.05-.77-.05-.07,0-.08,0-.08.1v1.33s.03.05.03.08h-.03ZM14.42,18.04l-.65-1.85h0l-.87,2.51c.48-.32,1.01-.56,1.57-.7l-.05.04Z'/%3e%3cpath%20d='M28.45,15.05h2.16c.34,0,.68.05,1,.16.59.19.91.81.73,1.4-.08.27-.27.5-.53.62l-.3.15.41.17c.49.18.81.66.79,1.19.02.55-.3,1.05-.81,1.26-.41.19-.86.29-1.31.28h-2.12v-.05c.11-.23.17-.48.16-.74v-3.62c.02-.28-.05-.57-.18-.82ZM29.81,19.66h.69c.26,0,.52-.09.72-.26.35-.36.34-.94-.02-1.29-.08-.08-.17-.14-.28-.18-.22-.08-.45-.11-.68-.1h-.43v1.83ZM29.81,17.15h.63c.12,0,.23-.03.34-.08.27-.12.43-.4.38-.69,0-.26-.15-.51-.4-.6-.33-.09-.66-.12-1-.09l.05,1.46Z'/%3e%3cpath%20d='M34.1,18.66c.01.47.37.86.83.91.44.07.89,0,1.29-.18l.13-.06h0l.32.7c-.18.07-.35.16-.53.21-.65.22-1.35.22-2,0-.63-.2-1.08-.75-1.14-1.41-.07-.4-.05-.8.07-1.19.2-.68.81-1.16,1.52-1.19.34-.04.68-.01,1,.08.63.18,1.09.74,1.14,1.4v.51c0,.17,0,.14-.12.15s-.47.06-.71.06h-1.8ZM34.1,18.01h1.58c.05-.45-.28-.84-.72-.89,0,0-.01,0-.02,0-.49-.01-.81.32-.84.88h0Z'/%3e%3cpath%20d='M24.06,20.29c.06-.19.12-.38.17-.57,0-.06,0-.12,0-.18,0-.62,0-1.24,0-1.86.05-.38-.03-.76-.23-1.08h1.26v.4l.37-.24c.36-.23.79-.3,1.21-.22.52.08.89.54.85,1.06v1.74c-.04.33.04.66.21.94h-1.41c.05-.17.12-.34.17-.52.01-.06.01-.11,0-.17v-1.59c0-.06,0-.13,0-.19-.03-.27-.25-.47-.52-.46-.29-.03-.58.08-.79.28-.03.04-.06.08-.06.13v1.9c0,.2.07.39.17.56v.09l-1.4-.02Z'/%3e%3cpath%20d='M40.77,16.6c-.31.46-.55.96-.71,1.48-.21.51-.41,1-.61,1.53-.09.22-.15.45-.23.69h-.9s-.07-.06-.09-.1c-.34-.83-.68-1.65-1-2.48-.11-.28-.24-.55-.37-.82,0-.1-.13-.19-.2-.3h1.43c-.07.27-.03.56.11.8.22.56.43,1.11.65,1.66v.13l.05-.09c.23-.62.46-1.23.68-1.84.1-.21.12-.45.07-.67h1.12Z'/%3e%3cpath%20d='M21.87,15.05h1.68l-.05.1c-.13.24-.2.5-.2.77v3.51c0,.28.07.56.21.8,0,.02,0,.05,0,.07h-1.62c.15-.25.23-.53.24-.82v-3.36c.04-.38-.06-.75-.26-1.07Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,K=`/star-process-website/assets/Logo%20Projetos_08-DkUkdy27.svg`,q=`/star-process-website/assets/Logo%20Projetos_09-BMsN7XTi.svg`,Hl=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.54%2037.55'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20stroke:%20%23fff;%20stroke-miterlimit:%2010;%20}%20.cls-1,%20.cls-2%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3crect%20class='cls-1'%20x='.5'%20y='.5'%20width='51.54'%20height='36.55'/%3e%3cpath%20class='cls-2'%20d='M51.89.65v36.25H.65V.65h51.24M52,.5H.5v36.55h51.5V.5Z'/%3e%3cg%20id='lnGBcc'%3e%3cpath%20d='M15.78,15.2h.07c.06.03.11.07.16.11.05.04.11.1.15.15l2.1,2.1s.07.06.11.09c.04-.01.08-.04.11-.08l1.05-1,1.16-1.16s.1-.09.15-.13c.05-.02.1-.02.15,0,0,.02,0,.05,0,.07,0,.02,0,.05,0,.07v5.54s0,.03.01.04h-1.16s-.01-.09,0-.14v-2.59s0,0-.06,0l-.08.08-1.18,1.16-.09.09s-.08-.04-.11-.08c-.39-.4-.79-.8-1.19-1.19,0,0-.05-.08-.11-.09s0,0,0,0c0,.04,0,.08,0,.12v2.64c-.13,0-.26,0-.39,0h-.79s0-.05,0-.08v-5.55c-.03-.05-.05-.11-.06-.17Z'/%3e%3cpath%20d='M27.38,15.27s.08-.01.12,0h1.75c.19-.01.38-.01.57,0,.33.02.65.13.93.3.42.26.69.69.73,1.18.03.25,0,.51-.08.75-.1.35-.34.65-.66.83h0s-.01.04,0,.06c.34.25.59.6.72,1,.09.23.17.46.25.68s.2.58.29.86c0,.04,0,.07,0,.11h-1.48v-.14c-.09-.44-.21-.88-.38-1.3-.04-.1-.08-.2-.14-.3-.14-.25-.39-.41-.67-.42h-.43s-.09-.01-.13,0v2.12h-1.39s0-.05,0-.07v-5.51s0-.1,0-.15ZM28.74,16.27v1.42s-.01.09,0,.14h.54c.13,0,.27-.04.39-.09.2-.09.35-.26.4-.47.03-.13.03-.26,0-.39-.03-.24-.18-.44-.4-.53-.14-.06-.29-.09-.44-.09h-.51.02Z'/%3e%3cpath%20d='M32.4,20.24l.78-.82.07.06c.1.11.21.22.33.31.21.16.46.26.72.3.17.03.34.03.51,0,.13-.02.25-.07.35-.15.17-.11.25-.31.22-.51-.01-.1-.06-.19-.13-.26-.07-.07-.16-.13-.25-.17-.15-.08-.31-.14-.47-.2l-.81-.3c-.19-.07-.38-.17-.54-.3-.3-.22-.51-.54-.58-.9-.09-.45.01-.92.28-1.3.26-.39.66-.67,1.12-.78.33-.09.67-.11,1-.07.58.04,1.14.27,1.58.66.04.04.08.08.11.12l-.78.81-.1-.09c-.2-.19-.44-.33-.7-.4-.2-.07-.42-.08-.63-.05h-.12c-.24.08-.38.32-.34.57,0,.08.05.16.11.22.07.08.15.14.24.19.11.06.23.11.35.15l.69.25c.21.08.42.17.62.28.17.09.33.21.47.34.25.25.39.57.42.92.03.28-.02.57-.12.83-.14.37-.41.68-.75.87-.23.13-.47.22-.73.27-.33.05-.67.05-1,0-.53-.02-1.05-.2-1.48-.51-.12-.09-.23-.19-.33-.3l-.11-.04Z'/%3e%3cpath%20d='M26.82,21h-1.53c-.05-.14-.11-.29-.17-.44l-.05-.11s-.09-.01-.13,0h-1.77c-.07,0-.1,0-.12.08l-.18.45-.06.13h-1.25v-.12c.13-.31.26-.62.4-.92.64-1.49,1.29-3,1.93-4.46,0-.07.07-.14.1-.22l.06-.09c.05-.06.13-.06.18-.02,0,0,.01.01.02.02.03.03.06.06.07.1l.12.24,2.31,5.34s.05.01.07.02ZM24.64,19.32v-.1l-.18-.45-.3-.72s-.03-.08-.07-.1v.09l-.21.51-.27.67v.11h1.07-.04Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,Ul=`/star-process-website/assets/Logo%20Projetos_11-BFU5WRxJ.svg`,Wl=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.54%2037.55'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20stroke:%20%23fff;%20stroke-miterlimit:%2010;%20}%20.cls-1,%20.cls-2%20{%20fill:%20%23fff;%20}%20.cls-3%20{%20fill:%20%23979796;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Camada_2'%20data-name='Camada%202'%3e%3crect%20class='cls-1'%20x='.5'%20y='.5'%20width='51.54'%20height='36.55'/%3e%3cg%20id='X53RNZ'%3e%3cpath%20d='M26.92,25.18c-1.27,0-2.54-.1-3.79-.3-1.87-.35-3.36-1.77-3.78-3.63-.18-.87-.3-1.75-.35-2.63-.06-.85-.06-1.69,0-2.54,0-1.01.15-2.02.42-3,.53-1.77,2.05-3.06,3.89-3.29,1.29-.21,2.6-.29,3.91-.26,1.2-.02,2.41.1,3.58.37,1.83.41,3.22,1.9,3.51,3.76.34,1.76.44,3.56.29,5.34-.03.81-.13,1.62-.32,2.41-.44,1.81-1.92,3.18-3.75,3.48-1.19.21-2.4.31-3.61.29Z'/%3e%3c/g%3e%3cpath%20class='cls-3'%20d='M30.65,13.87c-.09-1.06-1.03-1.85-2.09-1.75,0,0,0,0,0,0-.6.06-1.18.28-1.66.64-.06.06-.1.05-.17,0-.46-.36-1.02-.58-1.6-.63-1.05-.14-2.01.6-2.14,1.64,0,.08-.02.15-.02.23-.01.68.2,1.34.6,1.89.63.9,1.57,1.54,2.63,1.81.28.1.58.12.87.08,1.01-.18,1.94-.68,2.65-1.42.57-.59.91-1.36.95-2.18,0-.13-.01-.18-.01-.31ZM26.81,13.74c.24.29.39.63.46,1,.06.39-.14.62-.5.61-.22,0-.41-.17-.41-.39,0-.02,0-.03,0-.05.01-.43.17-.84.45-1.17ZM30.02,14.27c-.11.93-.65,1.75-1.45,2.23-.5.31-1.04.54-1.61.67-.09.02-.18.02-.27,0-.92-.16-1.76-.62-2.4-1.3-.42-.44-.67-1.01-.73-1.62-.08-.75.46-1.42,1.2-1.5.18-.02.37,0,.55.05.31.07.61.2.88.38.12.07.14.12.05.24-.3.36-.48.79-.54,1.25-.13.59.23,1.17.82,1.31.22.05.45.03.66-.06.41-.12.69-.49.71-.92.04-.59-.15-1.17-.54-1.62-.08-.11-.07-.16,0-.23.38-.26.83-.41,1.29-.42.72-.06,1.34.48,1.4,1.19,0,.12,0,.23-.02.35Z'/%3e%3cpath%20class='cls-2'%20d='M23.2,19.79c-.11-.01-.23-.01-.34,0h-1.86c-.2,0-.31-.09-.31-.24s.1-.24.31-.24h2.1s.04-.01.06,0h.61c0-.06-.02-.12-.05-.17-.13-.33-.45-.55-.81-.54h-2c-.51,0-.92.42-.91.93,0,0,0,0,0,0,0,.53.32.83.9.83h1.9c.2,0,.3.08.3.24,0,.17-.08.24-.29.24h-2s-.06-.02-.08-.05h-.73s-.05.17.19.46c.17.19.42.29.67.27h1.94c.12.01.24.01.36,0,.4-.12.67-.5.66-.92.04-.39-.23-.75-.62-.81Z'/%3e%3cpolygon%20class='cls-2'%20points='32.41%2018.62%2032.41%2020.53%2030.59%2018.62%2030.22%2018.62%2030.22%2019.2%2032.41%2021.54%2033.11%2021.54%2033.11%2018.62%2032.41%2018.62'/%3e%3cpath%20class='cls-2'%20d='M29.14,18.62h-.69v2.92h.69v-2.92Z'/%3e%3cpolygon%20class='cls-2'%20points='29.5%2020.11%2029.5%2021.54%2030.22%2021.54%2030.22%2019.2%2029.5%2019.92%2029.5%2020.11'/%3e%3cpath%20class='cls-2'%20d='M27.34,18.62h-2.42c-.37-.03-.69.25-.72.62,0,.03,0,.07,0,.1,0,.49,0,.98,0,1.47-.02.37.26.7.64.72.03,0,.07,0,.1,0h2.41c.38.02.69-.27.71-.65,0-.02,0-.05,0-.07v-1.46c.03-.37-.25-.7-.63-.73-.03,0-.06,0-.09,0ZM27.34,20.7c0,.08-.07.15-.15.15h-2.19c-.08,0-.15-.07-.15-.15v-1.26c0-.08.07-.15.15-.16h2.17c.08,0,.15.07.15.15,0,0,0,0,0,.01l.02,1.26Z'/%3e%3c/g%3e%3c/svg%3e`;function Gl(e){return ts({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`rect`,attr:{width:`416`,height:`320`,x:`48`,y:`96`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`,rx:`40`,ry:`40`},child:[]},{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`,d:`m112 160 144 112 144-112`},child:[]}]})(e)}function Kl(e){return ts({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z`},child:[]}]})(e)}function ql(e){return ts({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z`},child:[]}]})(e)}function Jl(e){return ts({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z`},child:[]},{tag:`path`,attr:{d:`M377.33 162.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28zM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112z`},child:[]}]})(e)}function Yl(e){return ts({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z`},child:[]}]})(e)}function Xl(e){return ts({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`,d:`M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z`},child:[]},{tag:`circle`,attr:{cx:`256`,cy:`192`,r:`48`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`},child:[]}]})(e)}function Zl(e){return ts({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`48`,d:`m184 112 144 144-144 144`},child:[]}]})(e)}function Ql(e){return ts({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`48`,d:`M328 112 184 256l144 144`},child:[]}]})(e)}var $l=`/star-process-website/assets/Projects-C1JBcrEu.png`,eu=`/star-process-website/assets/ProjetoIntro-CQDwOyfm.png`,tu=`/star-process-website/assets/Projetos01-DX6mqJoc.png`,nu=`/star-process-website/assets/Projetos02-Bg_wsRCB.png`,ru=Array.from({length:12},(e,t)=>{let n=(t+1).toString().padStart(2,`0`);return new URL(Object.assign({"../assets/icons/Logo Projetos_01.svg":Rl,"../assets/icons/Logo Projetos_02.svg":zl,"../assets/icons/Logo Projetos_03.svg":Bl,"../assets/icons/Logo Projetos_04.svg":Vl,"../assets/icons/Logo Projetos_05.svg":U,"../assets/icons/Logo Projetos_06.svg":W,"../assets/icons/Logo Projetos_07.svg":G,"../assets/icons/Logo Projetos_08.svg":K,"../assets/icons/Logo Projetos_09.svg":q,"../assets/icons/Logo Projetos_10.svg":Hl,"../assets/icons/Logo Projetos_11.svg":Ul,"../assets/icons/Logo Projetos_12.svg":Wl})[`../assets/icons/Logo Projetos_${n}.svg`],import.meta.url).href}),iu=H.div`
  background-color: #f4f4f4;
`,au=H.div`
  height: 180px;
  background: url(${$l});
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,ou=H.section`
  background-color: #fff;
  padding: 80px 50px;
  
  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.3;
    max-width: 500px;
    text-align: left;
  }
`,su=H.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,cu=H.div`
  text-align: left;
  h2 {
    font-size: 2rem;
    max-width: 450px;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    margin-bottom: 18px;
    font-family: ${I.fonts.headline};
  }
`,lu=H.img`
  width: 100%;
`,uu=H.section`
  padding: 80px 20px;
  text-align: center;
`,du=H.div`
  margin-bottom: 60px;
  text-align: center;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
  }
  
  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.3;
    max-width: 500px;
    margin: 1rem auto;
  }
`,fu=H.div`
  max-width: 1100px;
  height: 3px;
  background: #eee;
  margin: 25px auto;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
`,pu=H.div`
  position: absolute;
  height: 100%;
  background: #1a1c1e;
  width: ${e=>100/e.total}%;
  left: 0;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.current*100}%);
`,mu=H.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,hu=H.div`
  background: white;
  padding: 0.3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,gu=H.div`
  border: 1px solid #a8a8a87e;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  img {
    width: calc(100% - 60px);
    height: 250px;
    object-fit: cover;
    margin: 30px 30px 0 30px;
    border: 1px solid #a8a8a87e;
  }

  .content {
    padding: 30px;
    h3 {
      font-size: 1.3rem;
      color: #1a1c1e;
      margin-bottom: 15px;
      font-weight: 700;
    }
    p {
      color: #888;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`,_u=H.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  
  button {
    background: #fff;
    border: none;
    color: #1a1c1e;
    font-size: 1.5rem;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      background: #1a1c1e;
      color: #fff;
    }
    &:disabled { 
      opacity: 0.3; 
      cursor: default; 
    }
  }
`,vu=H.section`
  background-color: #fff;
  padding: 80px 20px;
  text-align: center;

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.3;
    max-width: 400px;
    margin: 20px auto 0;
  }
`,yu=H.div`
  max-width: 1100px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${I.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,bu=H.div`
  background: white;
  padding: 0.3rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`,xu=H.div`
  border: 1px solid #a8a8a87e;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;function Su(){let{t:e}=V(),[t,n]=(0,x.useState)(0),r=e(`projectpage.projects.list`,{returnObjects:!0}),i=[...r,...r,...r],a=Math.ceil(i.length/2),o=i.slice(t*2,t*2+2);return(0,L.jsxs)(iu,{children:[(0,L.jsx)(au,{children:(0,L.jsx)(`h1`,{children:e(`projectpage.banner.title`)})}),(0,L.jsx)(ou,{children:(0,L.jsxs)(su,{children:[(0,L.jsxs)(cu,{children:[(0,L.jsx)(`h2`,{children:e(`projectpage.intro.title`)}),(0,L.jsx)(`p`,{children:e(`projectpage.intro.description`)})]}),(0,L.jsx)(lu,{src:eu,alt:e(`projectpage.intro.title`)})]})}),(0,L.jsxs)(uu,{children:[(0,L.jsxs)(du,{children:[(0,L.jsx)(`h2`,{children:e(`projectpage.projects.title`)}),(0,L.jsx)(`p`,{children:e(`projectpage.projects.subtitle`)}),(0,L.jsx)(fu,{children:(0,L.jsx)(pu,{total:a,current:t})})]}),(0,L.jsx)(mu,{children:o.map((e,t)=>(0,L.jsx)(hu,{children:(0,L.jsxs)(gu,{children:[(0,L.jsx)(`img`,{src:t%2==0?tu:nu,alt:e.title}),(0,L.jsxs)(`div`,{className:`content`,children:[(0,L.jsx)(`h3`,{children:e.title}),(0,L.jsx)(`p`,{children:e.description})]})]})},t))}),(0,L.jsxs)(_u,{children:[(0,L.jsx)(`button`,{disabled:t===0,onClick:()=>n(e=>e-1),children:(0,L.jsx)(Ql,{})}),(0,L.jsx)(`button`,{disabled:t===a-1,onClick:()=>n(e=>e+1),children:(0,L.jsx)(Zl,{})})]})]}),(0,L.jsxs)(vu,{children:[(0,L.jsxs)(du,{children:[(0,L.jsx)(`h2`,{children:e(`projectpage.clients.title`)}),(0,L.jsx)(`p`,{children:e(`projectpage.clients.subtitle`)})]}),(0,L.jsx)(yu,{children:ru.map((t,n)=>(0,L.jsx)(bu,{children:(0,L.jsx)(xu,{children:(0,L.jsx)(`img`,{src:t,alt:`${e(`projectpage.clients.title`)} ${n+1}`})})},n))})]}),(0,L.jsx)(pl,{})]})}var Cu=`/star-process-website/assets/Industry-CSQ06ZJ8.jpg`,wu=`/star-process-website/assets/Subtype01-ClLD6HdP.jpg`,Tu=`/star-process-website/assets/Subtype02-DIDXw9mJ.jpg`,Eu=`/star-process-website/assets/Subtype03-C29fi4V7.jpg`,Du=`/star-process-website/assets/Subtype04-CeFzKHDQ.jpg`,Ou=`/star-process-website/assets/Subtype05-K0lHke-5.jpg`,ku=`/star-process-website/assets/Subtype06-DqbVHfP-.jpg`,Au=`/star-process-website/assets/Subtype07-DBUaFdU2.jpg`,ju=`/star-process-website/assets/Subtype08-C_R74OD4.jpg`,Mu=H.div`
  background-color: #f4f4f4;
  padding-bottom: 80px;
  overflow-x: hidden;
`,Nu=H.div`
  height: 180px;
  background: url(${Cu});
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,Pu=H.section`
  text-align: center;
  padding: 4rem 2rem 2rem;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 2.5rem 1rem 1.5rem;
  }
  
  h2 {
    font-size: 2.3rem;
    color: #1a1c1e;
    margin-bottom: 1rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;

    @media (max-width: ${I.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 0.95rem;
    text-align: center;
    color: #52525b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
    font-weight: 500;
  }
`,Fu=H.div`
  max-width: 1200px;
  margin: 0 auto 30px; 
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,Iu=H.div`
  border: 1px solid #a8a8a87e;
  padding: 10px 40px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,Lu=H.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 60px 0;
  text-align: center;
`,Ru=H.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;

  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #d1d1d1;
  }

  h2 {
    padding: 0 30px;
    font-size: 2.2rem;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    line-height: 1.1;
    text-align: center;

    @media (max-width: ${I.breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }
`,zu=H.p`
  color: #888;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 650px;
  margin: 0 auto;
  padding: 0 20px;
`,Bu=H.div`
  max-width: 1200px;
  margin: 0 auto 40px;
  padding: 0 20px;
`,Vu=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 60px;

  @media (max-width: ${I.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Hu=H(An)`
  text-decoration: none;
  background: white;
  display: flex;
  flex-direction: column;
  border-bottom: 1rem solid #ffd700;

  .img-wrapper {
    height: 140px;
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 20px;
    text-align: left;
    flex: 1;

    h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: #1a1c1e;
      margin-bottom: 8px;
      font-family: ${I.fonts.headline};
    }
    
    p {
      color: #888;
      font-size: 0.85rem;
      line-height: 1.5;
      margin: 0;
    }
  }
`,Uu=H.div`
  text-align: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 10px;
  align-items: center;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #1a1c1e;
    margin: 0;
    font-family: ${I.fonts.headline};
  }
`,Wu=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`,Gu=H.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  height: 100%;
  padding: 1rem 0;
  border-bottom: ${e=>e.isLastRow?`none`:`1px solid #e0e0e0`};

  @media (max-width: ${I.breakpoints.tablet}) {
    border-bottom: 1px solid #e0e0e0;
    
    &:last-child {
      border-bottom: none;
    }
  }
`,Ku=H.div`
  border-radius: 50%;
  border: 1px solid #d1d1d1;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`,qu=H.div`
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem;
  transition: transform 0.3s ease;

   &:hover {
    transform: translateY(-5px);
  }
`,J=H(ss)`
  color: #d1d1d1;
  font-size: 0.9rem;
`,Ju=H.div`
  flex: 1;
  h4 {
    font-size: 1.05rem;
    font-weight: 700;
    color: #1a1c1e;
    margin-bottom: 6px;
    font-family: ${I.fonts.headline};
  }
  p {
    font-size: 0.88rem;
    color: #555;
    line-height: 1.4;
    margin: 0;
  }
`;function Yu(){let{t:e}=V(),t={cold_block:wu,filtration:Tu,yeast_cellar:Eu,water_recovery:Du,cip_station:Ou,utilities:ku,pipe_rack:Au,syrup_room:ju},n=[`cold_block`,`filtration`,`yeast_cellar`,`water_recovery`,`cip_station`,`utilities`,`pipe_rack`,`syrup_room`].map(n=>({title:e(`industry.subtypes.${n}.title`),description:e(`industry.subtypes.${n}.description`),icon:t[n],link:e(`industry.subtypes.${n}.link`)})),r=e(`industry.mechanical.list`,{returnObjects:!0}),i=e(`industry.electrical.list`,{returnObjects:!0}),a=e(`industry.pneumatic.list`,{returnObjects:!0}),o=e=>{let t=[];for(let n=0;n<e.length;n+=2){let r=n+2>=e.length;t.push((0,L.jsxs)(Wu,{children:[(0,L.jsxs)(Gu,{isLastRow:r,children:[(0,L.jsx)(Ku,{children:(0,L.jsx)(J,{})}),(0,L.jsxs)(Ju,{children:[(0,L.jsx)(`h4`,{children:e[n].title}),(0,L.jsx)(`p`,{children:e[n].description})]})]}),e[n+1]?(0,L.jsxs)(Gu,{isLastRow:r,children:[(0,L.jsx)(Ku,{children:(0,L.jsx)(J,{})}),(0,L.jsxs)(Ju,{children:[(0,L.jsx)(`h4`,{children:e[n+1].title}),(0,L.jsx)(`p`,{children:e[n+1].description})]})]}):(0,L.jsx)(`div`,{})]},n))}return t};return(0,L.jsxs)(Mu,{children:[(0,L.jsx)(Nu,{children:(0,L.jsx)(`h1`,{children:e(`industry.banner.title`)})}),(0,L.jsxs)(Pu,{children:[(0,L.jsx)(`h2`,{children:e(`industry.intro.title`)}),(0,L.jsx)(`p`,{children:e(`industry.intro.description`)})]}),(0,L.jsxs)(Lu,{children:[(0,L.jsx)(Ru,{children:(0,L.jsx)(`h2`,{children:e(`industry.turnkey.title`)})}),(0,L.jsx)(zu,{children:e(`industry.turnkey.description`)})]}),(0,L.jsx)(Bu,{children:(0,L.jsx)(Vu,{children:n.map((e,t)=>(0,L.jsx)(qu,{children:(0,L.jsx)(`div`,{style:{border:`1px solid #a8a8a87e`,height:`100%`},children:(0,L.jsxs)(Hu,{to:e.link,children:[(0,L.jsx)(`div`,{className:`img-wrapper`,children:(0,L.jsx)(`img`,{src:e.icon,alt:e.title})}),(0,L.jsxs)(`div`,{className:`content`,children:[(0,L.jsx)(`h3`,{children:e.title}),(0,L.jsx)(`p`,{children:e.description})]})]})})},t))})}),(0,L.jsxs)(Lu,{children:[(0,L.jsx)(Ru,{children:(0,L.jsx)(`h2`,{children:e(`industry.assembly.title`)})}),(0,L.jsx)(zu,{children:e(`industry.assembly.subtitle`)})]}),(0,L.jsx)(Fu,{children:(0,L.jsxs)(Iu,{children:[(0,L.jsx)(Uu,{children:(0,L.jsx)(`h3`,{children:e(`industry.mechanical.title`)})}),o(r)]})}),(0,L.jsx)(Fu,{children:(0,L.jsxs)(Iu,{children:[(0,L.jsx)(Uu,{children:(0,L.jsx)(`h3`,{children:e(`industry.electrical.title`)})}),o(i)]})}),(0,L.jsx)(Fu,{children:(0,L.jsxs)(Iu,{children:[(0,L.jsx)(Uu,{children:(0,L.jsx)(`h3`,{children:e(`industry.pneumatic.title`)})}),o(a)]})})]})}var Xu=`/star-process-website/assets/Equipment-CI4ut_gm.jpg`,Zu=`/star-process-website/assets/EquipmentIntro-BElVA5xh.jpg`,Qu=H.div`
  background-color: #f4f4f4;
  padding-bottom: 80px;
  overflow-x: hidden;
`,$u=H.div`
  height: 180px;
  background: url(${Xu});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,ed=H.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,td=H.div`
  border: 1px solid #a8a8a87e;
  padding: 10px 40px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,nd=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,rd=H.div`
  h2 {
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    margin-bottom: 18px;
    max-width: 500px;
    font-family: ${I.fonts.headline};
  }
  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.1;
    max-width: 500px;
  }
`,id=H.img`
  width: 100%;
  margin-left: 30px !important;
`,ad=H.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 60px 0;
  text-align: center;
`,od=H.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;

  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8a87e;
  }

  h2 {
    padding: 0 30px;
    font-size: 2.2rem;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    line-height: 1.1;
    text-align: center;

    @media (max-width: ${I.breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }
`,sd=H.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.4;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`,cd=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 60px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,ld=H.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
  height: 100%;

  &:last-child {
    border-bottom: none;
  }
`,ud=H.div`
  border-radius: 50%;
  border: 1px solid #a8a8a87e;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`,dd=H(ss)`
  color: #a8a8a87e;
  font-size: 1rem;
`,fd=H.div`
  flex: 1;
  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 0.8;
    color: #1a1c1e;
    margin-bottom: 3px;
    font-family: ${I.fonts.headline};
  }
  p {
    font-size: 0.88rem;
    color: #888;
    line-height: 1.4;
    margin: 0;
    max-width: 450px;
  }
`;function pd(){let{t:e}=V(),t=e(`equipment.equipmentList`,{returnObjects:!0}),n=Math.ceil(t.length/2),r=t.slice(0,n),i=t.slice(n),a=[];for(let e=0;e<n;e++)a.push(r[e]),i[e]&&a.push(i[e]);return(0,L.jsxs)(Qu,{children:[(0,L.jsx)($u,{children:(0,L.jsx)(`h1`,{children:e(`equipment.banner.title`)})}),(0,L.jsx)(ed,{children:(0,L.jsx)(td,{children:(0,L.jsxs)(nd,{children:[(0,L.jsxs)(rd,{children:[(0,L.jsx)(`h2`,{children:e(`equipment.intro.title`)}),(0,L.jsx)(`p`,{children:e(`equipment.intro.description`)})]}),(0,L.jsx)(id,{src:Zu,alt:e(`equipment.intro.title`)})]})})}),(0,L.jsxs)(ad,{children:[(0,L.jsx)(od,{children:(0,L.jsx)(`h2`,{children:e(`equipment.divider.title`)})}),(0,L.jsx)(sd,{children:e(`equipment.divider.subtitle`)})]}),(0,L.jsx)(ed,{children:(0,L.jsx)(td,{children:(0,L.jsx)(cd,{children:a.map((e,t)=>(0,L.jsxs)(ld,{children:[(0,L.jsx)(ud,{children:(0,L.jsx)(dd,{})}),(0,L.jsxs)(fd,{children:[(0,L.jsx)(`h3`,{children:e.title}),(0,L.jsx)(`p`,{children:e.description})]})]},t))})})})]})}var md=`/star-process-website/assets/Engineering-BoQMO5m7.jpg`,hd=`/star-process-website/assets/EngineeringIntro-BMExPSyA.jpg`,gd=H.div`
  background-color: #f4f4f4;
  padding-bottom: 80px;
  overflow-x: hidden;
`,_d=H.div`
  height: 180px;
  background: url(${md});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,vd=H.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,yd=H.div`
  border: 1px solid #a8a8a87e;
  padding: 10px 40px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,bd=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,xd=H.div`
  h2 {
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    margin-bottom: 18px;
    font-family: ${I.fonts.headline};
  }
  p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 500px;
  }
`,Sd=H.img`
  width: 100%;
  margin-left: 30px;
`,Y=H.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 60px 0;
  text-align: center;
`,Cd=H.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;

  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8a87e;
  }

  h2 {
    padding: 0 30px;
    font-size: 2.2rem;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    line-height: 1.1;
  }
`,wd=H.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.4;
  max-width: 550px;
  margin: 0 auto;
  padding: 0 20px;
`,Td=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 60px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Ed=H.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
  height: 100%;

  /* Lógica de remoção de borda para o último da coluna */
  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    &:nth-last-child(-n + 2) {
      border-bottom: 1px solid #e0e0e0;
    }
    &:last-child {
      border-bottom: none;
    }
  }
`,Dd=H.div`
  border-radius: 50%;
  border: 1px solid #a8a8a87e;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`,Od=H(ss)`
  color: #a8a8a87e;
  font-size: 1rem;
`,kd=H.div`
  flex: 1;
  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
    color: #1a1c1e;
    margin-bottom: 3px;
    font-family: ${I.fonts.headline};
  }
  p {
    font-size: 0.88rem;
    color: #888;
    line-height: 1.4;
    margin: 0;
  }
`;function Ad(){let{t:e}=V(),t=e(`engineering.services`,{returnObjects:!0}),n=Math.ceil(t.length/2),r=t.slice(0,n),i=t.slice(n),a=[];for(let e=0;e<n;e++)a.push(r[e]),i[e]&&a.push(i[e]);return(0,L.jsxs)(gd,{children:[(0,L.jsx)(_d,{children:(0,L.jsx)(`h1`,{children:e(`engineering.banner.title`)})}),(0,L.jsx)(vd,{children:(0,L.jsx)(yd,{children:(0,L.jsxs)(bd,{children:[(0,L.jsxs)(xd,{children:[(0,L.jsx)(`h2`,{children:e(`engineering.intro.title`)}),(0,L.jsx)(`p`,{children:e(`engineering.intro.description`)})]}),(0,L.jsx)(Sd,{src:hd,alt:e(`engineering.intro.title`)})]})})}),(0,L.jsxs)(Y,{children:[(0,L.jsx)(Cd,{children:(0,L.jsx)(`h2`,{children:e(`engineering.divider.title`)})}),(0,L.jsx)(wd,{children:e(`engineering.divider.subtitle`)})]}),(0,L.jsx)(vd,{children:(0,L.jsx)(yd,{children:(0,L.jsx)(Td,{children:a.map((e,t)=>(0,L.jsxs)(Ed,{children:[(0,L.jsx)(Dd,{children:(0,L.jsx)(Od,{})}),(0,L.jsxs)(kd,{children:[(0,L.jsx)(`h3`,{children:e.title}),(0,L.jsx)(`p`,{children:e.description})]})]},t))})})})]})}var jd=e=>e.type===`checkbox`,Md=e=>e instanceof Date,Nd=e=>e==null,Pd=e=>typeof e==`object`,Fd=e=>!Nd(e)&&!Array.isArray(e)&&Pd(e)&&!Md(e),X=e=>Fd(e)&&e.target?jd(e.target)?e.target.checked:e.target.value:e,Id=(e,t)=>t.split(`.`).some((t,n,r)=>!isNaN(Number(t))&&e.has(r.slice(0,n).join(`.`))),Ld=e=>{let t=e.constructor&&e.constructor.prototype;return Fd(t)&&t.hasOwnProperty(`isPrototypeOf`)},Rd=typeof window<`u`&&window.HTMLElement!==void 0&&typeof document<`u`;function zd(e){if(e instanceof Date)return new Date(e);let t=typeof FileList<`u`&&e instanceof FileList;if(Rd&&(e instanceof Blob||t))return e;let n=Array.isArray(e);if(!n&&!(Fd(e)&&Ld(e)))return e;let r=n?[]:Object.create(Object.getPrototypeOf(e));for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=zd(e[t]));return r}var Bd=e=>/^\w*$/.test(e),Z=e=>e===void 0,Vd=e=>Array.isArray(e)?e.filter(Boolean):[],Hd=e=>Vd(e.replace(/["|']|\]/g,``).split(/\.|\[/)),Q=(e,t,n)=>{if(!t||!Fd(e))return n;let r=(Bd(t)?[t]:Hd(t)).reduce((e,t)=>Nd(e)?e:e[t],e);return Z(r)||r===e?Z(e[t])?n:e[t]:r},Ud=e=>typeof e==`boolean`,Wd=e=>typeof e==`function`,$=(e,t,n)=>{let r=-1,i=Bd(t)?[t]:Hd(t),a=i.length,o=a-1;for(;++r<a;){let t=i[r],a=n;if(r!==o){let n=e[t];a=Fd(n)||Array.isArray(n)?n:isNaN(+i[r+1])?{}:[]}if(t===`__proto__`||t===`constructor`||t===`prototype`)return;e[t]=a,e=e[t]}},Gd={BLUR:`blur`,FOCUS_OUT:`focusout`,CHANGE:`change`,SUBMIT:`submit`,TRIGGER:`trigger`,VALID:`valid`},Kd={onBlur:`onBlur`,onChange:`onChange`,onSubmit:`onSubmit`,onTouched:`onTouched`,all:`all`},qd={max:`max`,min:`min`,maxLength:`maxLength`,minLength:`minLength`,pattern:`pattern`,required:`required`,validate:`validate`},Jd=`form`,Yd=`root`,Xd=x.createContext(null);Xd.displayName=`HookFormControlContext`;var Zd=(e,t,n,r=!0)=>{let i={defaultValues:t._defaultValues};for(let a in e)Object.defineProperty(i,a,{get:()=>{let i=a;return t._proxyFormState[i]!==Kd.all&&(t._proxyFormState[i]=!r||Kd.all),n&&(n[i]=!0),e[i]}});return i},Qd=typeof window<`u`?x.useLayoutEffect:x.useEffect,$d=e=>typeof e==`string`,ef=(e,t,n,r,i)=>$d(e)?(r&&t.watch.add(e),Q(n,e,i)):Array.isArray(e)?e.map(e=>(r&&t.watch.add(e),Q(n,e))):(r&&(t.watchAll=!0),n),tf=e=>Nd(e)||!Pd(e);function nf(e,t,n=new WeakSet){if(tf(e)||tf(t))return Object.is(e,t);if(Md(e)&&Md(t))return Object.is(e.getTime(),t.getTime());let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(let a of r){let r=e[a];if(!i.includes(a))return!1;if(a!==`ref`){let e=t[a];if(Md(r)&&Md(e)||(Fd(r)||Array.isArray(r))&&(Fd(e)||Array.isArray(e))?!nf(r,e,n):!Object.is(r,e))return!1}}return!0}var rf=x.createContext(null);rf.displayName=`HookFormContext`;var af=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},of=e=>Array.isArray(e)?e:[e],sf=()=>{let e=[];return{get observers(){return e},next:t=>{for(let n of e)n.next&&n.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}};function cf(e,t){let n={};for(let r in e)if(e.hasOwnProperty(r)){let i=e[r],a=t[r];if(i&&Fd(i)&&a){let e=cf(i,a);Fd(e)&&(n[r]=e)}else e[r]&&(n[r]=a)}return n}var lf=e=>Fd(e)&&!Object.keys(e).length,uf=e=>e.type===`file`,df=e=>{if(!Rd)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ff=e=>e.type===`select-multiple`,pf=e=>e.type===`radio`,mf=e=>pf(e)||jd(e),hf=e=>df(e)&&e.isConnected;function gf(e,t){let n=t.slice(0,-1).length,r=0;for(;r<n;)e=Z(e)?r++:e[t[r++]];return e}function _f(e){for(let t in e)if(e.hasOwnProperty(t)&&!Z(e[t]))return!1;return!0}function vf(e,t){let n=Array.isArray(t)?t:Bd(t)?[t]:Hd(t),r=n.length===1?e:gf(e,n),i=n.length-1,a=n[i];return r&&delete r[a],i!==0&&(Fd(r)&&lf(r)||Array.isArray(r)&&_f(r))&&vf(e,n.slice(0,-1)),e}var yf=e=>{for(let t in e)if(Wd(e[t]))return!0;return!1};function bf(e){return Array.isArray(e)||Fd(e)&&!yf(e)}function xf(e,t={}){for(let n in e){let r=e[n];bf(r)?(t[n]=Array.isArray(r)?[]:{},xf(r,t[n])):Z(r)||(t[n]=!0)}return t}function Sf(e,t,n){n||=xf(t);for(let r in e){let i=e[r];if(bf(i))Z(t)||tf(n[r])?n[r]=xf(i,Array.isArray(i)?[]:{}):Sf(i,Nd(t)?{}:t[r],n[r]);else{let e=t[r];n[r]=!nf(i,e)}}return n}var Cf={value:!1,isValid:!1},wf={value:!0,isValid:!0},Tf=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Z(e[0].attributes.value)?Z(e[0].value)||e[0].value===``?wf:{value:e[0].value,isValid:!0}:wf:Cf}return Cf},Ef=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Z(e)?e:t?e===``?NaN:e&&+e:n&&$d(e)?new Date(e):r?r(e):e,Df={isValid:!1,value:null},Of=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,Df):Df;function kf(e){let t=e.ref;return uf(t)?t.files:pf(t)?Of(e.refs).value:ff(t)?[...t.selectedOptions].map(({value:e})=>e):jd(t)?Tf(e.refs).value:Ef(Z(t.value)?e.ref.value:t.value,e)}var Af=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,jf=(e,t,n,r)=>{let i={};for(let n of e){let e=Q(t,n);e&&$(i,n,e._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Mf=e=>e instanceof RegExp,Nf=e=>Z(e)?e:Mf(e)?e.source:Fd(e)?Mf(e.value)?e.value.source:e.value:e,Pf=e=>({isOnSubmit:!e||e===Kd.onSubmit,isOnBlur:e===Kd.onBlur,isOnChange:e===Kd.onChange,isOnAll:e===Kd.all,isOnTouch:e===Kd.onTouched}),Ff=`AsyncFunction`,If=e=>!!e&&!!e.validate&&!!(Wd(e.validate)&&e.validate.constructor.name===Ff||Fd(e.validate)&&Object.values(e.validate).find(e=>e.constructor.name===Ff)),Lf=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Rf=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),zf=(e,t,n,r)=>{for(let i of n||Object.keys(e)){let n=Q(e,i);if(n){let{_f:e,...a}=n;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],i)&&!r||e.ref&&t(e.ref,e.name)&&!r)return!0;if(zf(a,t))break}else if(Fd(a)&&zf(a,t))break}}};function Bf(e,t,n){let r=Q(e,n);if(r||Bd(n))return{error:r,name:n};let i=n.split(`.`);for(;i.length;){let r=i.join(`.`),a=Q(t,r),o=Q(e,r);if(a&&!Array.isArray(a)&&n!==r)return{name:n};if(o&&o.type)return{name:r,error:o};if(o&&o.root&&o.root.type)return{name:`${r}.root`,error:o.root};i.pop()}return{name:n}}var Vf=(e,t,n,r)=>{n(e);let{name:i,...a}=e;return lf(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!r||Kd.all))},Hf=(e,t,n)=>!e||!t||e===t||of(e).some(e=>e&&(n?e===t:e.startsWith(t)||t.startsWith(e))),Uf=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,Wf=(e,t)=>!Vd(Q(e,t)).length&&vf(e,t),Gf=(e,t,n)=>{let r=of(Q(e,n));return $(r,Yd,t[n]),$(e,n,r),e};function Kf(e,t,n=`validate`){if($d(e)||Array.isArray(e)&&e.every($d)||Ud(e)&&!e)return{type:n,message:$d(e)?e:``,ref:t}}var qf=e=>Fd(e)&&!Mf(e)?e:{value:e,message:``},Jf=async(e,t,n,r,i,a)=>{let{ref:o,refs:s,required:c,maxLength:l,minLength:u,min:d,max:f,pattern:p,validate:m,name:h,valueAsNumber:g,mount:_}=e._f,v=Q(n,h);if(!_||t.has(h))return{};let y=s?s[0]:o,b=e=>{i&&y.reportValidity&&(y.setCustomValidity(Ud(e)?``:e||``),y.reportValidity())},x={},S=pf(o),C=jd(o),w=S||C,T=(g||uf(o))&&Z(o.value)&&Z(v)||df(o)&&o.value===``||v===``||Array.isArray(v)&&!v.length,E=af.bind(null,h,r,x),ee=(e,t,n,r=qd.maxLength,i=qd.minLength)=>{let a=e?t:n;x[h]={type:e?r:i,message:a,ref:o,...E(e?r:i,a)}};if(a?!Array.isArray(v)||!v.length:c&&(!w&&(T||Nd(v))||Ud(v)&&!v||C&&!Tf(s).isValid||S&&!Of(s).isValid)){let{value:e,message:t}=$d(c)?{value:!!c,message:c}:qf(c);if(e&&(x[h]={type:qd.required,message:t,ref:y,...E(qd.required,t)},!r))return b(t),x}if(!T&&(!Nd(d)||!Nd(f))){let e,t,n=qf(f),i=qf(d);if(!Nd(v)&&!isNaN(v)){let r=o.valueAsNumber||v&&+v;Nd(n.value)||(e=r>n.value),Nd(i.value)||(t=r<i.value)}else{let r=o.valueAsDate||new Date(v),a=e=>new Date(new Date().toDateString()+` `+e),s=o.type==`time`,c=o.type==`week`;$d(n.value)&&v&&(e=s?a(v)>a(n.value):c?v>n.value:r>new Date(n.value)),$d(i.value)&&v&&(t=s?a(v)<a(i.value):c?v<i.value:r<new Date(i.value))}if((e||t)&&(ee(!!e,n.message,i.message,qd.max,qd.min),!r))return b(x[h].message),x}if((l||u)&&!T&&($d(v)||a&&Array.isArray(v))){let e=qf(l),t=qf(u),n=!Nd(e.value)&&v.length>+e.value,i=!Nd(t.value)&&v.length<+t.value;if((n||i)&&(ee(n,e.message,t.message),!r))return b(x[h].message),x}if(p&&!T&&$d(v)){let{value:e,message:t}=qf(p);if(Mf(e)&&!v.match(e)&&(x[h]={type:qd.pattern,message:t,ref:o,...E(qd.pattern,t)},!r))return b(t),x}if(m){if(Wd(m)){let e=Kf(await m(v,n),y);if(e&&(x[h]={...e,...E(qd.validate,e.message)},!r))return b(e.message),x}else if(Fd(m)){let e={};for(let t in m){if(!lf(e)&&!r)break;let i=Kf(await m[t](v,n),y,t);i&&(e={...i,...E(t,i.message)},b(i.message),r&&(x[h]=e))}if(!lf(e)&&(x[h]={ref:y,...e},!r))return x}}return b(!0),x},Yf={mode:Kd.onSubmit,reValidateMode:Kd.onChange,shouldFocusError:!0};function Xf(e={}){let t={...Yf,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Wd(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},i=(Fd(t.defaultValues)||Fd(t.values))&&zd(t.defaultValues||t.values)||{},a=t.shouldUnregister?{}:zd(i),o={action:!1,mount:!1,watch:!1,keepIsValid:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},c,l=0,u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={...u},f={...d},p={array:sf(),state:sf()},m=t.criteriaMode===Kd.all,h=e=>t=>{clearTimeout(l),l=setTimeout(e,t)},g=async e=>{if(!o.keepIsValid&&!t.disabled&&(d.isValid||f.isValid||e)){let e;t.resolver?(e=lf((await T()).errors),_()):e=await D({fields:r,onlyCheckValid:!0,eventType:Gd.VALID}),e!==n.isValid&&p.state.next({isValid:e})}},_=(e,r)=>{!t.disabled&&(d.isValidating||d.validatingFields||f.isValidating||f.validatingFields)&&((e||Array.from(s.mount)).forEach(e=>{e&&(r?$(n.validatingFields,e,r):vf(n.validatingFields,e))}),p.state.next({validatingFields:n.validatingFields,isValidating:!lf(n.validatingFields)}))},v=e=>{let t=Sf(i,a),r=Af(e);$(n.dirtyFields,r,Q(t,r))},y=(e,i=[],s,c,l=!0,u=!0)=>{if(c&&s&&!t.disabled){if(o.action=!0,u&&Array.isArray(Q(r,e))){let t=s(Q(r,e),c.argA,c.argB);l&&$(r,e,t)}if(u&&Array.isArray(Q(n.errors,e))){let t=s(Q(n.errors,e),c.argA,c.argB);l&&$(n.errors,e,t),Wf(n.errors,e)}if((d.touchedFields||f.touchedFields)&&u&&Array.isArray(Q(n.touchedFields,e))){let t=s(Q(n.touchedFields,e),c.argA,c.argB);l&&$(n.touchedFields,e,t)}(d.dirtyFields||f.dirtyFields)&&v(e),p.state.next({name:e,isDirty:ne(e,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else $(a,e,i)},b=(e,t)=>{$(n.errors,e,t),p.state.next({errors:n.errors})},x=e=>{n.errors=e,p.state.next({errors:n.errors,isValid:!1})},S=(e,t,n,s)=>{let c=Q(r,e);if(c){let r=Q(a,e,Z(n)?Q(i,e):n);Z(r)||s&&s.defaultChecked||t?$(a,e,t?r:kf(c._f)):ae(e,r),o.mount&&!o.action&&g()}},C=(e,r,a,o,s)=>{let c=!1,l=!1,u={name:e};if(!t.disabled){if(!a||o){(d.isDirty||f.isDirty)&&(l=n.isDirty,n.isDirty=u.isDirty=ne(),c=l!==u.isDirty);let t=nf(Q(i,e),r);l=!!Q(n.dirtyFields,e),t?vf(n.dirtyFields,e):$(n.dirtyFields,e,!0),u.dirtyFields=n.dirtyFields,c||=(d.dirtyFields||f.dirtyFields)&&l!==!t}if(a){let t=Q(n.touchedFields,e);t||($(n.touchedFields,e,a),u.touchedFields=n.touchedFields,c||=(d.touchedFields||f.touchedFields)&&t!==a)}c&&s&&p.state.next(u)}return c?u:{}},w=(e,r,i,a)=>{let o=Q(n.errors,e),s=(d.isValid||f.isValid)&&Ud(r)&&n.isValid!==r;if(t.delayError&&i?(c=h(()=>b(e,i)),c(t.delayError)):(clearTimeout(l),c=null,i?$(n.errors,e,i):vf(n.errors,e)),(i?!nf(o,i):o)||!lf(a)||s){let t={...a,...s&&Ud(r)?{isValid:r}:{},errors:n.errors,name:e};n={...n,...t},p.state.next(t)}},T=async e=>(_(e,!0),await t.resolver(a,t.context,jf(e||s.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),E=async e=>{let{errors:t}=await T(e);if(_(e),e)for(let r of e){let e=Q(t,r);e?$(n.errors,r,e):vf(n.errors,r)}else n.errors=t;return t},ee=async({name:t,eventType:r})=>{if(e.validate){let i=await e.validate({formValues:a,formState:n,name:t,eventType:r});if(Fd(i))for(let e in i)i[e]&&fe(`${Jd}.${e}`,{message:$d(i.message)?i.message:``,type:qd.validate});else $d(i)||!i?fe(Jd,{message:i||``,type:qd.validate}):de(Jd);return i}return!0},D=async({fields:r,onlyCheckValid:i,name:o,eventType:c,context:l={valid:!0,runRootValidation:!1}})=>{if(e.validate&&(l.runRootValidation=!0,!await ee({name:o,eventType:c})&&(l.valid=!1,i)))return l.valid;for(let o in r){let u=r[o];if(u){let{_f:r,...f}=u;if(r){let o=s.array.has(r.name),c=u._f&&If(u._f);c&&d.validatingFields&&_([r.name],!0);let f=await Jf(u,s.disabled,a,m,t.shouldUseNativeValidation&&!i,o);if(c&&d.validatingFields&&_([r.name]),f[r.name]&&(l.valid=!1,i)||(!i&&(Q(f,r.name)?o?Gf(n.errors,f,r.name):$(n.errors,r.name,f[r.name]):vf(n.errors,r.name)),e.shouldUseNativeValidation&&f[r.name]))break}!lf(f)&&await D({context:l,onlyCheckValid:i,fields:f,name:o,eventType:c})}}return l.valid},te=()=>{for(let e of s.unMount){let t=Q(r,e);t&&(t._f.refs?t._f.refs.every(e=>!hf(e)):!hf(t._f.ref))&&he(e)}s.unMount=new Set},ne=(e,n)=>!t.disabled&&(e&&n&&$(a,e,n),!nf(le(),i)),re=(e,t,n)=>ef(e,s,{...o.mount?a:Z(t)?i:$d(e)?{[e]:t}:t},n,t),ie=e=>Vd(Q(o.mount?a:i,e,t.shouldUnregister?Q(i,e,[]):[])),ae=(e,t,n={})=>{let i=Q(r,e),o=t;if(i){let n=i._f;n&&(!n.disabled&&$(a,e,Ef(t,n)),o=df(n.ref)&&Nd(t)?``:t,ff(n.ref)?[...n.ref.options].forEach(e=>e.selected=o.includes(e.value)):n.refs?jd(n.ref)?n.refs.forEach(e=>{(!e.defaultChecked||!e.disabled)&&(Array.isArray(o)?e.checked=!!o.find(t=>t===e.value):e.checked=o===e.value||!!o)}):n.refs.forEach(e=>e.checked=e.value===o):uf(n.ref)?n.ref.value=``:(n.ref.value=o,n.ref.type||p.state.next({name:e,values:zd(a)})))}(n.shouldDirty||n.shouldTouch)&&C(e,o,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&ce(e)},oe=(e,t,n)=>{for(let i in t){if(!t.hasOwnProperty(i))return;let a=t[i],o=e+`.`+i,c=Q(r,o);(s.array.has(e)||Fd(a)||c&&!c._f)&&!Md(a)?oe(o,a,n):ae(o,a,n)}},se=(e,t,i={})=>{let c=Q(r,e),l=s.array.has(e),u=zd(t);$(a,e,u),l?(p.array.next({name:e,values:zd(a)}),(d.isDirty||d.dirtyFields||f.isDirty||f.dirtyFields)&&i.shouldDirty&&(v(e),p.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:ne(e,u)}))):c&&!c._f&&!Nd(u)?oe(e,u,i):ae(e,u,i),Rf(e,s)?p.state.next({...n,name:e,values:zd(a)}):p.state.next({name:o.mount?e:void 0,values:zd(a)})},O=async i=>{o.mount=!0;let l=i.target,u=l.name,h=!0,v=Q(r,u),y=e=>{h=Number.isNaN(e)||Md(e)&&isNaN(e.getTime())||nf(e,Q(a,u,e))},b=Pf(t.mode),x=Pf(t.reValidateMode);if(v){let o,S,E=l.type?kf(v._f):X(i),te=i.type===Gd.BLUR||i.type===Gd.FOCUS_OUT,ne=!Lf(v._f)&&!e.validate&&!t.resolver&&!Q(n.errors,u)&&!v._f.deps||Uf(te,Q(n.touchedFields,u),n.isSubmitted,x,b),re=Rf(u,s,te);$(a,u,E),te?(!l||!l.readOnly)&&(v._f.onBlur&&v._f.onBlur(i),c&&c(0)):v._f.onChange&&v._f.onChange(i);let ie=C(u,E,te),ae=!lf(ie)||re;if(!te&&p.state.next({name:u,type:i.type,values:zd(a)}),ne)return(d.isValid||f.isValid)&&(t.mode===`onBlur`?te&&g():te||g()),ae&&p.state.next({name:u,...re?{}:ie});if(!t.resolver&&e.validate&&await ee({name:u,eventType:i.type}),!te&&re&&p.state.next({...n}),t.resolver){let{errors:e}=await T([u]);if(_([u]),y(E),h){let t=Bf(n.errors,r,u),i=Bf(e,r,t.name||u);o=i.error,u=i.name,S=lf(e)}}else _([u],!0),o=(await Jf(v,s.disabled,a,m,t.shouldUseNativeValidation))[u],_([u]),y(E),h&&(o?S=!1:(d.isValid||f.isValid)&&(S=await D({fields:r,onlyCheckValid:!0,name:u,eventType:i.type})));h&&(v._f.deps&&(!Array.isArray(v._f.deps)||v._f.deps.length>0)&&ce(v._f.deps),w(u,S,o,ie))}},k=(e,t)=>{if(Q(n.errors,t)&&e.focus)return e.focus(),1},ce=async(e,i={})=>{let a,o,c=of(e);if(t.resolver){let t=await E(Z(e)?e:c);a=lf(t),o=e?!c.some(e=>Q(t,e)):a}else e?(o=(await Promise.all(c.map(async e=>{let t=Q(r,e);return await D({fields:t&&t._f?{[e]:t}:t,eventType:Gd.TRIGGER})}))).every(Boolean),!(!o&&!n.isValid)&&g()):o=a=await D({fields:r,name:e,eventType:Gd.TRIGGER});return p.state.next({...!$d(e)||(d.isValid||f.isValid)&&a!==n.isValid?{}:{name:e},...t.resolver||!e?{isValid:a}:{},errors:n.errors}),i.shouldFocus&&!o&&zf(r,k,e?c:s.mount),o},le=(e,t)=>{let r={...o.mount?a:i};return t&&(r=cf(t.dirtyFields?n.dirtyFields:n.touchedFields,r)),Z(e)?r:$d(e)?Q(r,e):e.map(e=>Q(r,e))},ue=(e,t)=>({invalid:!!Q((t||n).errors,e),isDirty:!!Q((t||n).dirtyFields,e),error:Q((t||n).errors,e),isValidating:!!Q(n.validatingFields,e),isTouched:!!Q((t||n).touchedFields,e)}),de=e=>{let t=e?of(e):void 0;t?.forEach(e=>vf(n.errors,e)),t?t.forEach(e=>{p.state.next({name:e,errors:n.errors})}):p.state.next({errors:{}})},fe=(e,t,i)=>{let a=(Q(r,e,{_f:{}})._f||{}).ref,{ref:o,message:s,type:c,...l}=Q(n.errors,e)||{};$(n.errors,e,{...l,...t,ref:a}),p.state.next({name:e,errors:n.errors,isValid:!1}),i&&i.shouldFocus&&a&&a.focus&&a.focus()},A=(e,t)=>Wd(e)?p.state.subscribe({next:n=>`values`in n&&e(re(void 0,t),n)}):re(e,t,!0),pe=e=>p.state.subscribe({next:t=>{Hf(e.name,t.name,e.exact)&&Vf(t,e.formState||d,Te,e.reRenderRoot)&&e.callback({values:{...a},...n,...t,defaultValues:i})}}).unsubscribe,me=e=>(o.mount=!0,f={...f,...e.formState},pe({...e,formState:{...u,...e.formState}})),he=(e,o={})=>{for(let c of e?of(e):s.mount)s.mount.delete(c),s.array.delete(c),o.keepValue||(vf(r,c),vf(a,c)),!o.keepError&&vf(n.errors,c),!o.keepDirty&&vf(n.dirtyFields,c),!o.keepTouched&&vf(n.touchedFields,c),!o.keepIsValidating&&vf(n.validatingFields,c),!t.shouldUnregister&&!o.keepDefaultValue&&vf(i,c);p.state.next({values:zd(a)}),p.state.next({...n,...o.keepDirty?{isDirty:ne()}:{}}),!o.keepIsValid&&g()},ge=({disabled:e,name:t})=>{if(Ud(e)&&o.mount||e||s.disabled.has(t)){let n=s.disabled.has(t)!==!!e;e?s.disabled.add(t):s.disabled.delete(t),n&&o.mount&&!o.action&&g()}},_e=(e,n={})=>{let a=Q(r,e),c=Ud(n.disabled)||Ud(t.disabled),l=!s.registerName.has(e)&&a&&!a._f.mount;return $(r,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...n}}),s.mount.add(e),a&&!l?ge({disabled:Ud(n.disabled)?n.disabled:t.disabled,name:e}):S(e,!0,n.value),{...c?{disabled:n.disabled||t.disabled}:{},...t.progressive?{required:!!n.required,min:Nf(n.min),max:Nf(n.max),minLength:Nf(n.minLength),maxLength:Nf(n.maxLength),pattern:Nf(n.pattern)}:{},name:e,onChange:O,onBlur:O,ref:c=>{if(c){s.registerName.add(e),_e(e,n),s.registerName.delete(e),a=Q(r,e);let t=Z(c.value)&&c.querySelectorAll&&c.querySelectorAll(`input,select,textarea`)[0]||c,o=mf(t),l=a._f.refs||[];if(o?l.find(e=>e===t):t===a._f.ref)return;$(r,e,{_f:{...a._f,...o?{refs:[...l.filter(hf),t,...Array.isArray(Q(i,e))?[{}]:[]],ref:{type:t.type,name:e}}:{ref:t}}}),S(e,!1,void 0,t)}else a=Q(r,e,{}),a._f&&(a._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(Id(s.array,e)&&o.action)&&s.unMount.add(e)}}},ve=()=>t.shouldFocusError&&zf(r,k,s.mount),ye=e=>{Ud(e)&&(p.state.next({disabled:e}),zf(r,(t,n)=>{let i=Q(r,n);i&&(t.disabled=i._f.disabled||e,Array.isArray(i._f.refs)&&i._f.refs.forEach(t=>{t.disabled=i._f.disabled||e}))},0,!1))},be=(e,i)=>async o=>{let c;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let l=zd(a);if(p.state.next({isSubmitting:!0}),t.resolver){let{errors:e,values:t}=await T();_(),n.errors=e,l=zd(t)}else await D({fields:r,eventType:Gd.SUBMIT});if(s.disabled.size)for(let e of s.disabled)vf(l,e);if(vf(n.errors,Yd),lf(n.errors)){p.state.next({errors:{}});try{await e(l,o)}catch(e){c=e}}else i&&await i({...n.errors},o),ve(),setTimeout(ve);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:lf(n.errors)&&!c,submitCount:n.submitCount+1,errors:n.errors}),c)throw c},xe=(e,t={})=>{Q(r,e)&&(Z(t.defaultValue)?se(e,zd(Q(i,e))):(se(e,t.defaultValue),$(i,e,zd(t.defaultValue))),t.keepTouched||vf(n.touchedFields,e),t.keepDirty||(vf(n.dirtyFields,e),n.isDirty=t.defaultValue?ne(e,zd(Q(i,e))):ne()),t.keepError||(vf(n.errors,e),d.isValid&&g()),p.state.next({...n}))},Se=(e,c={})=>{let l=e?zd(e):i,u=zd(l),f=lf(e),m=f?i:u;if(c.keepDefaultValues||(i=l),!c.keepValues){if(c.keepDirtyValues){let e=new Set([...s.mount,...Object.keys(Sf(i,a))]);for(let t of Array.from(e)){let e=Q(n.dirtyFields,t),r=Q(a,t),i=Q(m,t);e&&!Z(r)?$(m,t,r):!e&&!Z(i)&&se(t,i)}}else{if(Rd&&Z(e))for(let e of s.mount){let t=Q(r,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(df(e)){let t=e.closest(`form`);if(t){t.reset();break}}}}if(c.keepFieldsRef)for(let e of s.mount)se(e,Q(m,e));else r={}}a=t.shouldUnregister?c.keepDefaultValues?zd(i):{}:zd(m),p.array.next({values:{...m}}),p.state.next({values:{...m}})}s={mount:c.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:``},o.mount=!d.isValid||!!c.keepIsValid||!!c.keepDirtyValues||!t.shouldUnregister&&!lf(m),o.watch=!!t.shouldUnregister,o.keepIsValid=!!c.keepIsValid,o.action=!1,c.keepErrors||(n.errors={}),p.state.next({submitCount:c.keepSubmitCount?n.submitCount:0,isDirty:f?!1:c.keepDirty?n.isDirty:!!(c.keepDefaultValues&&!nf(e,i)),isSubmitted:c.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:f?{}:c.keepDirtyValues?c.keepDefaultValues&&a?Sf(i,a):n.dirtyFields:c.keepDefaultValues&&e?Sf(i,e):c.keepDirty?n.dirtyFields:{},touchedFields:c.keepTouched?n.touchedFields:{},errors:c.keepErrors?n.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},Ce=(e,n)=>Se(Wd(e)?e(a):e,{...t.resetOptions,...n}),we=(e,t={})=>{let n=Q(r,e),i=n&&n._f;if(i){let e=i.refs?i.refs[0]:i.ref;e.focus&&setTimeout(()=>{e.focus(),t.shouldSelect&&Wd(e.select)&&e.select()})}},Te=e=>{n={...n,...e}},Ee={control:{register:_e,unregister:he,getFieldState:ue,handleSubmit:be,setError:fe,_subscribe:pe,_runSchema:T,_updateIsValidating:_,_focusError:ve,_getWatch:re,_getDirty:ne,_setValid:g,_setFieldArray:y,_setDisabledField:ge,_setErrors:x,_getFieldArray:ie,_reset:Se,_resetDefaultValues:()=>Wd(t.defaultValues)&&t.defaultValues().then(e=>{Ce(e,t.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:te,_disableForm:ye,_subjects:p,_proxyFormState:d,get _fields(){return r},get _formValues(){return a},get _state(){return o},set _state(e){o=e},get _defaultValues(){return i},get _names(){return s},set _names(e){s=e},get _formState(){return n},get _options(){return t},set _options(e){t={...t,...e}}},subscribe:me,trigger:ce,register:_e,handleSubmit:be,watch:A,setValue:se,getValues:le,reset:Ce,resetField:xe,clearErrors:de,unregister:he,setError:fe,setFocus:we,getFieldState:ue};return{...Ee,formControl:Ee}}function Zf(e={}){let t=x.useRef(void 0),n=x.useRef(void 0),[r,i]=x.useState({isDirty:!1,isValidating:!1,isLoading:Wd(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Wd(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!Wd(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{let{formControl:n,...i}=Xf(e);t.current={...i,formState:r}}let a=t.current.control;return a._options=e,Qd(()=>{let e=a._subscribe({formState:a._proxyFormState,callback:()=>i({...a._formState}),reRenderRoot:!0});return i(e=>({...e,isReady:!0})),a._formState.isReady=!0,e},[a]),x.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),x.useEffect(()=>{e.mode&&(a._options.mode=e.mode),e.reValidateMode&&(a._options.reValidateMode=e.reValidateMode)},[a,e.mode,e.reValidateMode]),x.useEffect(()=>{e.errors&&(a._setErrors(e.errors),a._focusError())},[a,e.errors]),x.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]),x.useEffect(()=>{if(a._proxyFormState.isDirty){let e=a._getDirty();e!==r.isDirty&&a._subjects.state.next({isDirty:e})}},[a,r.isDirty]),x.useEffect(()=>{e.values&&!nf(e.values,n.current)?(a._reset(e.values,{keepFieldsRef:!0,...a._options.resetOptions}),a._options.resetOptions?.keepIsValid||a._setValid(),n.current=e.values,i(e=>({...e}))):a._resetDefaultValues()},[a,e.values]),x.useEffect(()=>{a._state.mount||(a._setValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),t.current.formState=x.useMemo(()=>Zd(r,a),[a,r]),t.current}var Qf=`/star-process-website/assets/Contact-Dexu8tKF.png`,$f=H.div`
  background-color: #f4f4f4;
  min-height: 100vh;
`,ep=H.div`
  height: 180px;
  background: url(${Qf});
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  
  h3 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 650;
    text-align: center;

    @media (max-width: ${I.breakpoints.mobile}) {
      font-size: 1.5rem;
    }
  }
`,tp=H.section`
  text-align: center;
  padding: 4rem 2rem 2rem;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 2.5rem 1rem 1.5rem;
  }
  
  h2 {
    font-size: 2.3rem;
    color: #1a1c1e;
    margin-bottom: 1rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;

    @media (max-width: ${I.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
  p {
    color: #52525b;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.5;
    font-weight: 500;

    @media (max-width: ${I.breakpoints.mobile}) {
      font-size: 0.95rem;
    }
  }
`,np=H.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  padding: 2rem;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr; /* Corrigido: empilha no tablet para evitar aperto */
    gap: 60px;
  }

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 1rem;
  }
`,rp=H.form`
  display: flex;
  flex-direction: column;
  font-family: ${I.fonts.headline};
`,ip=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`,ap=H.div`
  border-bottom: 1.5px solid #1a1c1e;
  margin-bottom: 0.5rem;
`,op=H.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  background: transparent;
  outline: none;
  font-family: ${I.fonts.body};
  font-size: 0.95rem;
`,sp=H.textarea`
  width: 100%;
  padding: 10px 0;
  border: none;
  background: transparent;
  outline: none;
  min-height: 70px;
  resize: none;
  font-family: ${I.fonts.body};
`,cp=H.button`
  align-self: flex-start;
  background-color: #ffd700;
  color: #000;
  border: none;
  padding: 5px 5px 5px 35px;
  border-radius: 50px;
  font-family: ${I.fonts.body};
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 25px;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }

  @media (max-width: ${I.breakpoints.mobile}) {
    width: 100%;
    justify-content: space-between;
    padding: 8px 8px 8px 25px;
  }
`,lp=H.div`
  background-color: #888b8d;
  color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,up=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(190px, 1fr);
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,dp=H.div`
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem;
  transition: transform 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`,fp=H.div`
  border: 1px solid #a8a8a87e;
  height: 100%;
  display: flex;
  flex-direction: column;
`,pp=H.div`
  background-color: #ffffff;
  padding: 1.5rem;
  text-align: left;
  border-bottom: 1rem solid ${I.colors[`primary-container`]};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  h4 {
    font-size: 1.15rem;
    font-weight: 600;
    font-family: ${I.fonts.headline};
    color: #1a1c1e;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    color: #888;
    line-height: 1.5;
    font-family: ${I.fonts.body};
    margin: 0;
  }

  .icon-indicator {
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-size: 2rem;
    color: #333;
  }

  .social-icons-wrapper {
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    gap: 8px;
    font-size: 1.4rem;
    color: #333;
  }
`,mp=H.div`
  max-width: 1200px;
  margin: 0 auto 5rem;
  padding: 0 2rem;
  position: relative;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }
  
  iframe {
    width: 100%;
    height: 300px;
    border: 1px solid #1a1c1e;

    @media (max-width: ${I.breakpoints.mobile}) {
      height: 250px;
    }
  }
`,hp=H.img`
  position: absolute;
  top: 48%; 
  left: 50.2%;
  width: 45px;
  transform: translate(-50%, -100%);
  z-index: 10;

  @media (max-width: ${I.breakpoints.mobile}) {
    width: 35px;
  }
`;function gp(){let{t:e}=V(),{register:t,handleSubmit:n}=Zf();return(0,L.jsxs)($f,{children:[(0,L.jsx)(ep,{children:(0,L.jsx)(`h3`,{children:e(`nav.contact`)})}),(0,L.jsxs)(tp,{children:[(0,L.jsx)(`h2`,{children:e(`contactpage.introTitle`)}),(0,L.jsx)(`p`,{children:e(`contactpage.introText`)})]}),(0,L.jsxs)(np,{children:[(0,L.jsxs)(rp,{onSubmit:n(e=>{let t=encodeURIComponent(`Contato: ${e.nome}`),n=encodeURIComponent(`Empresa: ${e.empresa}\nE-mail: ${e.email}\nMensagem: ${e.mensagem}`);window.location.href=`mailto:comercial@starprocesssolutions.com?subject=${t}&body=${n}`}),children:[(0,L.jsx)(`p`,{style:{fontSize:`1.2rem`,fontWeight:600,marginBottom:`1rem`},children:e(`contactpage.formTitle`)}),(0,L.jsx)(ap,{children:(0,L.jsx)(op,{placeholder:e(`contactpage.placeholders.company`),...t(`empresa`)})}),(0,L.jsx)(ap,{children:(0,L.jsx)(op,{placeholder:e(`contactpage.placeholders.address`),...t(`endereco`)})}),(0,L.jsx)(ap,{children:(0,L.jsx)(op,{placeholder:e(`contactpage.placeholders.fullName`),...t(`nome`)})}),(0,L.jsxs)(ip,{children:[(0,L.jsx)(ap,{children:(0,L.jsx)(op,{placeholder:e(`contactpage.placeholders.role`),...t(`cargo`)})}),(0,L.jsx)(ap,{children:(0,L.jsx)(op,{placeholder:e(`contactpage.placeholders.department`),...t(`departamento`)})})]}),(0,L.jsxs)(ip,{children:[(0,L.jsx)(ap,{children:(0,L.jsx)(op,{placeholder:e(`contactpage.placeholders.email`),type:`email`,...t(`email`)})}),(0,L.jsx)(ap,{children:(0,L.jsx)(op,{placeholder:e(`contactpage.placeholders.phone`),...t(`telefone`)})})]}),(0,L.jsx)(ap,{children:(0,L.jsx)(sp,{placeholder:e(`contactpage.placeholders.message`),...t(`mensagem`)})}),(0,L.jsxs)(cp,{type:`submit`,children:[e(`contactpage.submit`),(0,L.jsx)(lp,{children:(0,L.jsx)(Zl,{})})]})]}),(0,L.jsxs)(up,{children:[(0,L.jsx)(dp,{children:(0,L.jsx)(fp,{children:(0,L.jsxs)(pp,{children:[(0,L.jsx)(`h4`,{children:e(`contactpage.cards.email`)}),(0,L.jsx)(`p`,{children:`comercial@starprocesssolutions.com`}),(0,L.jsx)(Gl,{className:`icon-indicator`})]})})}),(0,L.jsx)(dp,{children:(0,L.jsx)(fp,{children:(0,L.jsxs)(pp,{children:[(0,L.jsx)(`h4`,{children:e(`contactpage.cards.phone`)}),(0,L.jsx)(`p`,{children:`(12) 98278-2122`}),(0,L.jsx)(Kl,{className:`icon-indicator`})]})})}),(0,L.jsx)(dp,{children:(0,L.jsx)(fp,{children:(0,L.jsxs)(pp,{children:[(0,L.jsx)(`h4`,{children:e(`contactpage.cards.social`)}),(0,L.jsx)(`p`,{children:`@starprocesssolutions.com`}),(0,L.jsxs)(`div`,{className:`social-icons-wrapper`,children:[(0,L.jsx)(Yl,{}),(0,L.jsx)(Jl,{}),(0,L.jsx)(ql,{})]})]})})}),(0,L.jsx)(dp,{children:(0,L.jsx)(fp,{children:(0,L.jsxs)(pp,{children:[(0,L.jsx)(`h4`,{children:e(`contactpage.cards.address`)}),(0,L.jsx)(`p`,{children:`Av. Sta. Maria, 146, Jd. Sta. Maria, Jacareí-SP. CEP 12328-320`}),(0,L.jsx)(Xl,{className:`icon-indicator`})]})})})]})]}),(0,L.jsxs)(mp,{children:[(0,L.jsx)(hp,{src:Rc,alt:`Star Pin`}),(0,L.jsx)(`iframe`,{title:e(`contactpage.cards.address`),src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.673836166548!2d-45.96147672378943!3d-23.309062352125697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4ac660d3d52d%3A0x6b47c0b5349e5d63!2sAv.%20Santa%20Maria%2C%20146%20-%20Vila%20Santa%20Maria%2C%20Jacare%C3%AD%20-%20SP%2C%2012328-320!5e0!3m2!1spt-BR!2sbr!4v1714900000000!5m2!1spt-BR!2sbr`,allowFullScreen:``,loading:`lazy`})]})]})}var _p=`/star-process-website/assets/ColdBlock-C3avTsfO.jpg`,vp=`/star-process-website/assets/ColdBlockProcess-CIAAokAU.jpg`,yp=`/star-process-website/assets/ColdBlockEfficiency-D-Wb9CQM.jpg`,bp=H.div`
  background-color: #f4f4f4;
  overflow-x: hidden;
`,xp=H.div`
  height: 180px;
  background: url(${_p});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,Sp=H.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,Cp=H.div`
  border: 1px solid #a8a8a87e;
  padding: 60px 50px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,wp=H.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    max-width: 600px;
    margin: 0 auto;
  }
`,Tp=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  line-height: 0.9;
  margin-bottom: 30px;

  p {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.2;
    text-align: justify;
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Ep=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Dp=H.div`
  border: 1px solid #d1d1d1;
  padding: 15px;
  display: flex;
  flex-direction: column;

  img {
    padding: 0.2rem;
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.2;
    text-align: left;
  }
`;function Op(){let{t:e}=V();return(0,L.jsxs)(bp,{children:[(0,L.jsx)(xp,{children:(0,L.jsx)(`h1`,{children:e(`coldblock.banner.title`)})}),(0,L.jsx)(Sp,{children:(0,L.jsxs)(Cp,{children:[(0,L.jsx)(wp,{children:(0,L.jsx)(`h2`,{children:e(`coldblock.intro.title`)})}),(0,L.jsxs)(Tp,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`coldblock.intro.paragraph1`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`coldblock.intro.paragraph2`)})]}),(0,L.jsx)(`div`,{children:(0,L.jsx)(`p`,{children:e(`coldblock.intro.paragraph3`)})})]}),(0,L.jsxs)(Ep,{children:[(0,L.jsxs)(Dp,{children:[(0,L.jsx)(`img`,{style:{border:`1px solid #a8a8a87e`},src:vp,alt:e(`coldblock.cards.automation.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`coldblock.cards.automation.description`)})]}),(0,L.jsxs)(Dp,{children:[(0,L.jsx)(`img`,{style:{border:`1px solid #a8a8a87e`},src:yp,alt:e(`coldblock.cards.thermal_efficiency.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`coldblock.cards.thermal_efficiency.description`)})]})]})]})}),(0,L.jsx)(pl,{})]})}function kp(){let{pathname:e}=st();return(0,x.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`smooth`})},[e]),null}var Ap=`/star-process-website/assets/CipBanner-BGIwvVof.jpg`,jp=`/star-process-website/assets/CipModules-D7mo24zJ.jpg`,Mp=`/star-process-website/assets/CipRecovery-C-B7rlhz.jpg`,Np=H.div`
  background-color: #f4f4f4;
  overflow-x: hidden;
`,Pp=H.div`
  height: 180px;
  background: url(${Ap});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,Fp=H.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,Ip=H.div`
  border: 1px solid #a8a8a87e;
  padding: 60px 50px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,Lp=H.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    max-width: 600px;
    margin: 0 auto;
  }
`,Rp=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;

  p {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.4;
    text-align: justify;
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,zp=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Bp=H.div`
  border: 1px solid #d1d1d1;
  padding: 15px;
  display: flex;
  flex-direction: column;

  img {
    padding: 0.2rem;
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 20px;
    border: 1px solid #a8a8a87e;
  }

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.3;
    text-align: left;
  }
`;function Vp(){let{t:e}=V();return(0,L.jsxs)(Np,{children:[(0,L.jsx)(Pp,{children:(0,L.jsx)(`h1`,{children:e(`cip.banner.title`)})}),(0,L.jsx)(Fp,{children:(0,L.jsxs)(Ip,{children:[(0,L.jsx)(Lp,{children:(0,L.jsx)(`h2`,{children:e(`cip.intro.title`)})}),(0,L.jsxs)(Rp,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`cip.intro.paragraph1`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`cip.intro.paragraph2`)})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`cip.intro.paragraph3`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`cip.intro.paragraph4`)})]})]}),(0,L.jsxs)(zp,{children:[(0,L.jsxs)(Bp,{children:[(0,L.jsx)(`img`,{src:jp,alt:e(`cip.cards.modules.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`cip.cards.modules.description`)})]}),(0,L.jsxs)(Bp,{children:[(0,L.jsx)(`img`,{src:Mp,alt:e(`cip.cards.recovery.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`cip.cards.recovery.description`)})]})]})]})}),(0,L.jsx)(pl,{})]})}var Hp=`/star-process-website/assets/FiltrationBanner-BtI_kdgx.jpg`,Up=`/star-process-website/assets/FiltrationPolish-CRwkPbIx.jpg`,Wp=`/star-process-website/assets/FiltrationMembrane-9fwLAKFG.jpg`,Gp=H.div`
  background-color: #f4f4f4;
  overflow-x: hidden;
`,Kp=H.div`
  height: 180px;
  background: url(${Hp});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,qp=H.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,Jp=H.div`
  border: 1px solid #a8a8a87e;
  padding: 60px 50px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,Yp=H.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    max-width: 500px;
    margin: 0 auto;
  }
`,Xp=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;

  p {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.4;
    text-align: justify;
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Zp=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Qp=H.div`
  border: 1px solid #d1d1d1;
  padding: 15px;
  display: flex;
  flex-direction: column;

  img {
    padding: 0.2rem;
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 20px;
    border: 1px solid #a8a8a87e;
  }

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.3;
    text-align: left;
  }
`;function $p(){let{t:e}=V();return(0,L.jsxs)(Gp,{children:[(0,L.jsx)(Kp,{children:(0,L.jsx)(`h1`,{children:e(`filtration.banner.title`)})}),(0,L.jsx)(qp,{children:(0,L.jsxs)(Jp,{children:[(0,L.jsx)(Yp,{children:(0,L.jsx)(`h2`,{children:e(`filtration.intro.title`)})}),(0,L.jsxs)(Xp,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`filtration.intro.paragraph1`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`filtration.intro.paragraph2`)})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`filtration.intro.paragraph3`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`filtration.intro.paragraph4`)})]})]}),(0,L.jsxs)(Zp,{children:[(0,L.jsxs)(Qp,{children:[(0,L.jsx)(`img`,{src:Up,alt:e(`filtration.cards.polish.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`filtration.cards.polish.description`)})]}),(0,L.jsxs)(Qp,{children:[(0,L.jsx)(`img`,{src:Wp,alt:e(`filtration.cards.membrane.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`filtration.cards.membrane.description`)})]})]})]})}),(0,L.jsx)(pl,{})]})}var em=`/star-process-website/assets/PipeRackBanner-Dtdy3QBG.jpg`,tm=`/star-process-website/assets/PipeRackStructure-Clt1Yt0t.jpg`,nm=`/star-process-website/assets/PipeRackModular-BAyReZQI.jpg`,rm=H.div`
  background-color: #f4f4f4;
  overflow-x: hidden;
`,im=H.div`
  height: 180px;
  background: url(${em});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,am=H.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,om=H.div`
  border: 1px solid #a8a8a87e;
  padding: 60px 50px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,sm=H.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    max-width: 500px;
    margin: 0 auto;
  }
`,cm=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;

  p {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.4;
    text-align: justify;
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,lm=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,um=H.div`
  border: 1px solid #d1d1d1;
  padding: 15px;
  display: flex;
  flex-direction: column;

  img {
    padding: 0.2rem;
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 20px;
    border: 1px solid #a8a8a87e;
  }

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.3;
    text-align: left;
  }
`;function dm(){let{t:e}=V();return(0,L.jsxs)(rm,{children:[(0,L.jsx)(im,{children:(0,L.jsx)(`h1`,{children:e(`piperack.banner.title`)})}),(0,L.jsx)(am,{children:(0,L.jsxs)(om,{children:[(0,L.jsx)(sm,{children:(0,L.jsx)(`h2`,{children:e(`piperack.intro.title`)})}),(0,L.jsxs)(cm,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`piperack.intro.paragraph1`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`piperack.intro.paragraph2`)})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`piperack.intro.paragraph3`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`piperack.intro.paragraph4`)})]})]}),(0,L.jsxs)(lm,{children:[(0,L.jsxs)(um,{children:[(0,L.jsx)(`img`,{src:tm,alt:e(`piperack.cards.structure.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`piperack.cards.structure.description`)})]}),(0,L.jsxs)(um,{children:[(0,L.jsx)(`img`,{src:nm,alt:e(`piperack.cards.modular.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`piperack.cards.modular.description`)})]})]})]})}),(0,L.jsx)(pl,{})]})}var fm=`/star-process-website/assets/WaterRecoveryBanner-DY4BOIzf.jpg`,pm=`/star-process-website/assets/WaterTreatment-CrhDzbWD.jpg`,mm=`/star-process-website/assets/WaterModularSkid-DnaL4EYR.jpg`,hm=H.div`
  background-color: #f4f4f4;
  overflow-x: hidden;
`,gm=H.div`
  height: 180px;
  background: url(${fm});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,_m=H.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,vm=H.div`
  border: 1px solid #a8a8a87e;
  padding: 60px 50px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,ym=H.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    max-width: 600px;
    margin: 0 auto;
  }
`,bm=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;

  p {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.4;
    text-align: justify;
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,xm=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Sm=H.div`
  border: 1px solid #d1d1d1;
  padding: 15px;
  display: flex;
  flex-direction: column;

  img {
    padding: 0.2rem;
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 20px;
    border: 1px solid #a8a8a87e;
  }

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.3;
    text-align: left;
  }
`;function Cm(){let{t:e}=V();return(0,L.jsxs)(hm,{children:[(0,L.jsx)(gm,{children:(0,L.jsx)(`h1`,{children:e(`waterrecovery.banner.title`)})}),(0,L.jsx)(_m,{children:(0,L.jsxs)(vm,{children:[(0,L.jsx)(ym,{children:(0,L.jsx)(`h2`,{children:e(`waterrecovery.intro.title`)})}),(0,L.jsxs)(bm,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`waterrecovery.intro.paragraph1`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`waterrecovery.intro.paragraph2`)})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`waterrecovery.intro.paragraph3`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`waterrecovery.intro.paragraph4`)})]})]}),(0,L.jsxs)(xm,{children:[(0,L.jsxs)(Sm,{children:[(0,L.jsx)(`img`,{src:pm,alt:e(`waterrecovery.cards.treatment.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`waterrecovery.cards.treatment.description`)})]}),(0,L.jsxs)(Sm,{children:[(0,L.jsx)(`img`,{src:mm,alt:e(`waterrecovery.cards.skid.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`waterrecovery.cards.skid.description`)})]})]})]})}),(0,L.jsx)(pl,{})]})}var wm=`/star-process-website/assets/YeastCellarBanner-D0ae-xXx.jpg`,Tm=`/star-process-website/assets/YeastPropagation-D_bRVWor.jpg`,Em=`/star-process-website/assets/YeastSkids-DSJNEPON.jpg`,Dm=H.div`
  background-color: #f4f4f4;
  overflow-x: hidden;
`,Om=H.div`
  height: 180px;
  background: url(${wm});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,km=H.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,Am=H.div`
  border: 1px solid #a8a8a87e;
  padding: 60px 50px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,jm=H.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    max-width: 600px;
    margin: 0 auto;
  }
`,Mm=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;

  p {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.4;
    text-align: justify;
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Nm=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Pm=H.div`
  border: 1px solid #d1d1d1;
  padding: 15px;
  display: flex;
  flex-direction: column;

  img {
    padding: 0.2rem;
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 20px;
    border: 1px solid #a8a8a87e;
  }

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.3;
    text-align: left;
  }
`;function Fm(){let{t:e}=V();return(0,L.jsxs)(Dm,{children:[(0,L.jsx)(Om,{children:(0,L.jsx)(`h1`,{children:e(`yeastcellar.banner.title`)})}),(0,L.jsx)(km,{children:(0,L.jsxs)(Am,{children:[(0,L.jsx)(jm,{children:(0,L.jsx)(`h2`,{children:e(`yeastcellar.intro.title`)})}),(0,L.jsxs)(Mm,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`yeastcellar.intro.paragraph1`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`yeastcellar.intro.paragraph2`)})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`yeastcellar.intro.paragraph3`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`yeastcellar.intro.paragraph4`)})]})]}),(0,L.jsxs)(Nm,{children:[(0,L.jsxs)(Pm,{children:[(0,L.jsx)(`img`,{src:Tm,alt:e(`yeastcellar.cards.tanks.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`yeastcellar.cards.tanks.description`)})]}),(0,L.jsxs)(Pm,{children:[(0,L.jsx)(`img`,{src:Em,alt:e(`yeastcellar.cards.skids.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`yeastcellar.cards.skids.description`)})]})]})]})}),(0,L.jsx)(pl,{})]})}var Im=`/star-process-website/assets/UtilitiesBanner-GI3D29Um.jpg`,Lm=`/star-process-website/assets/ThermalCentral-VR6jhhAR.jpg`,Rm=`/star-process-website/assets/CompressedAir-D8T0Ln-H.jpg`,zm=H.div`
  background-color: #f4f4f4;
  overflow-x: hidden;
`,Bm=H.div`
  height: 180px;
  background: url(${Im});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,Vm=H.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,Hm=H.div`
  border: 1px solid #a8a8a87e;
  padding: 60px 50px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,Um=H.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    max-width: 600px;
    margin: 0 auto;
  }
`,Wm=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;

  p {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.4;
    text-align: justify;
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Gm=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Km=H.div`
  border: 1px solid #d1d1d1;
  padding: 15px;
  display: flex;
  flex-direction: column;

  img {
    padding: 0.2rem;
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 20px;
    border: 1px solid #a8a8a87e;
  }

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.3;
    text-align: left;
  }
`;function qm(){let{t:e}=V();return(0,L.jsxs)(zm,{children:[(0,L.jsx)(Bm,{children:(0,L.jsx)(`h1`,{children:e(`utilities.banner.title`)})}),(0,L.jsx)(Vm,{children:(0,L.jsxs)(Hm,{children:[(0,L.jsx)(Um,{children:(0,L.jsx)(`h2`,{children:e(`utilities.intro.title`)})}),(0,L.jsxs)(Wm,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`utilities.intro.paragraph1`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`utilities.intro.paragraph2`)})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`utilities.intro.paragraph3`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`utilities.intro.paragraph4`)})]})]}),(0,L.jsxs)(Gm,{children:[(0,L.jsxs)(Km,{children:[(0,L.jsx)(`img`,{src:Lm,alt:e(`utilities.cards.thermal.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`utilities.cards.thermal.description`)})]}),(0,L.jsxs)(Km,{children:[(0,L.jsx)(`img`,{src:Rm,alt:e(`utilities.cards.air.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`utilities.cards.air.description`)})]})]})]})}),(0,L.jsx)(pl,{})]})}var Jm=`/star-process-website/assets/SyrupRoomBanner-ChO-8liN.jpg`,Ym=`/star-process-website/assets/SyrupMixing-Cs5VCFHy.jpg`,Xm=`/star-process-website/assets/SyrupControl-DAl8RCSY.jpg`,Zm=H.div`
  background-color: #f4f4f4;
  overflow-x: hidden;
`,Qm=H.div`
  height: 180px;
  background: url(${Jm});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: ${I.fonts.headline};
    font-weight: 700;
  }
`,$m=H.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 0.3rem; 
`,eh=H.div`
  border: 1px solid #a8a8a87e;
  padding: 60px 50px;

  @media (max-width: ${I.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`,th=H.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 700;
    color: #1a1c1e;
    font-family: ${I.fonts.headline};
    max-width: 600px;
    margin: 0 auto;
  }
`,nh=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;

  p {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.4;
    text-align: justify;
  }

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,rh=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${I.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,ih=H.div`
  border: 1px solid #d1d1d1;
  padding: 15px;
  display: flex;
  flex-direction: column;

  img {
    padding: 0.2rem;
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 20px;
    border: 1px solid #a8a8a87e;
  }

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.3;
    text-align: left;
  }
`;function ah(){let{t:e}=V();return(0,L.jsxs)(Zm,{children:[(0,L.jsx)(Qm,{children:(0,L.jsx)(`h1`,{children:e(`syruproom.banner.title`)})}),(0,L.jsx)($m,{children:(0,L.jsxs)(eh,{children:[(0,L.jsx)(th,{children:(0,L.jsx)(`h2`,{children:e(`syruproom.intro.title`)})}),(0,L.jsxs)(nh,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`syruproom.intro.paragraph1`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`syruproom.intro.paragraph2`)})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:e(`syruproom.intro.paragraph3`)}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`p`,{children:e(`syruproom.intro.paragraph4`)})]})]}),(0,L.jsxs)(rh,{children:[(0,L.jsxs)(ih,{children:[(0,L.jsx)(`img`,{src:Ym,alt:e(`syruproom.cards.mixing.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`syruproom.cards.mixing.description`)})]}),(0,L.jsxs)(ih,{children:[(0,L.jsx)(`img`,{src:Xm,alt:e(`syruproom.cards.control.imageAlt`)}),(0,L.jsx)(`p`,{children:e(`syruproom.cards.control.description`)})]})]})]})}),(0,L.jsx)(pl,{})]})}var oh=`/star-process-website/`;function sh(){return(0,L.jsxs)(zi,{theme:I,children:[(0,L.jsx)(Xi,{}),(0,L.jsxs)(Dn,{basename:oh,children:[(0,L.jsx)(kp,{}),(0,L.jsx)(zt,{children:(0,L.jsxs)(j,{path:`/`,element:(0,L.jsx)(Os,{}),children:[(0,L.jsx)(j,{index:!0,element:(0,L.jsx)(ml,{})}),(0,L.jsx)(j,{path:`sobre`,element:(0,L.jsx)(Ll,{})}),(0,L.jsx)(j,{path:`projetos`,element:(0,L.jsx)(Su,{})}),(0,L.jsx)(j,{path:`industria`,element:(0,L.jsx)(Yu,{})}),(0,L.jsx)(j,{path:`equipamentos`,element:(0,L.jsx)(pd,{})}),(0,L.jsx)(j,{path:`engenharia`,element:(0,L.jsx)(Ad,{})}),(0,L.jsx)(j,{path:`contato`,element:(0,L.jsx)(gp,{})}),(0,L.jsx)(j,{path:`/industry/cold-block`,element:(0,L.jsx)(Op,{})}),(0,L.jsx)(j,{path:`/industry/cip-station`,element:(0,L.jsx)(Vp,{})}),(0,L.jsx)(j,{path:`/industry/filtration`,element:(0,L.jsx)($p,{})}),(0,L.jsx)(j,{path:`/industry/pipe-rack`,element:(0,L.jsx)(dm,{})}),(0,L.jsx)(j,{path:`/industry/water-recovery`,element:(0,L.jsx)(Cm,{})}),(0,L.jsx)(j,{path:`/industry/yeast-cellar`,element:(0,L.jsx)(Fm,{})}),(0,L.jsx)(j,{path:`/industry/utilities`,element:(0,L.jsx)(qm,{})}),(0,L.jsx)(j,{path:`/industry/syrup-room`,element:(0,L.jsx)(ah,{})})]})})]})]})}Ga.use(uo).init({resources:{pt:{translation:{nav:{home:`Home`,about:`Sobre Nós`,projects:`Projetos`,industry:`Indústria`,equipment:`Equipamentos Skids`,engineering:`Engenharia`,contact:`Contato`},hero:{title:`Engenharia Industrial de Alta Performance`,subtitle:`Soluções Turn-Key integradas: do projeto 3D à execução final, com precisão técnica, segurança e presença internacional.`,industry:`Indústria`,industryDesc:`Projetos (EPC) sob medida, com precisão técnica, processos rigorosos e eficiência produtiva.`,skids:`Equipamentos Skids`,skidsDesc:`Industrializando soluções com capacidade de desenvolvimento e nacionalização.`,engineering:`Engenharia`,engineeringDesc:`Inteligência em automação de ponta com soluções que conectam sua planta ao futuro.`,check:`Confira +`},about:{badge:`Empresa`,title:`Soluções industriais que transformam sua produção`,text:`Mais de 15 anos de experiência entregando soluções Turn-Key de alta complexidade no Brasil e na América Latina. Garanta eficiência operacional para o seu negócio.`,button:`Ver mais`},sectors:{badge:`Setores Atendidos`,title:`Setores Estratégicos`,subtitle:`Entregamos soluções de engenharia de alta complexidade para os mercados mais exigentes da indústria global.`,food:`Alimentos & Bebidas`,foodDesc:`Infraestrutura de fabricação, preparo e rigor sanitário.`,oil:`Óleo, Gás & Energia`,oilDesc:`Integridade de ativos e eficiência em ambientes críticos.`,steel:`Siderurgia & Mineração`,steelDesc:`Otimização de processos pesados e continuidade operacional.`,automotive:`Automotiva`,automotiveDesc:`Manufatura avançada e integração de sistemas robóticos.`,offshore:`Offshore & Naval`,offshoreDesc:`Engenharia de alta complexidade para ambientes salinos e remotos.`,chemical:`Química & Petroquímica`,chemicalDesc:`Controle de processos químicos e segurança funcional.`,paper:`Papel & Celulose`,paperDesc:`Sustentabilidade hídrica e automação de processos contínuos.`,renewable:`Energias Renováveis`,renewableDesc:`Transição energética, infraestrutura eólica e solar.`},metrics:{badge:`Nossos números`,title:`Temos orgulho dos nossos números`,experience:`Anos de experiência`,projects:`Projetos entregues em todo o Brasil e América Latina`,steel:`Metros de aço processados com precisão e engenharia avançada`,collaborators:`Colaboradores entre técnicos, engenheiros e especialistas`},projects:{badge:`Atuação`,title:`Projetos Prospectados & Executados`,partners:`Parceiros & Projetos`,brazil:`Brasil`,chile:`Chile`},contact:{badge:`Contato`,title:`Entre em Contato`,text:`Saiba mais sobre nossas soluções personalizadas e como podemos ajudar sua empresa a crescer e prosperar com nossas soluções com processos precisos e tecnologia de ponta.`,button:`Clique Aqui`},footer:{about:`Sobre Nós`,history:`História`,mission:`Missão, Visão e Valores`,projects:`Projetos`,recentProjects:`Projetos Recentes`,clients:`Clientes Atendidos`,services:`Serviços`,turnkey:`Projeto Turn Key`,assembly:`Montagem Industrial`,electrical:`Elétrica`,contact:`Contato`,form:`Formulário`,phoneWhatsapp:`Telefones / WhatsApp`,addressMap:`Endereço & Mapa`,requestBudget:`Solicitar Orçamento`,followUs:`Siga-nos nas redes sociais:`,copyright:`– Todos direitos reservados.`,privacy:`Privacidade`,terms:`Termos`,address:`Av. Santa Maria, 146. Jd. Santa Maria, Jacareí / SP - CEP 12328-320`},engineering:{banner:{title:`Engenharia`},intro:{title:`Engenharia Consultiva e Inteligência de Projetos`,description:`Desenvolvemos soluções de engenharia multidisciplinar que integram tecnologia de ponta e viabilidade técnica. Nossa abordagem foca na mitigação de riscos e na otimização de recursos, garantindo que cada projeto seja planejado para oferecer a máxima performance operacional desde a concepção.`},divider:{title:`Projeto/ Engenharia`,subtitle:`Metodologia avançada e documentação técnica completa para o planejamento, execução e controle de projetos industriais de alta complexidade.`},services:[{title:`Fluxograma de Processo/ P&ID`,description:`Diagramas detalhados com a lógica de funcionamento e interconexão de todos os componentes do sistema.`},{title:`Cronograma com "Curva S"`,description:`Gestão visual do progresso do projeto, permitindo o acompanhamento físico-financeiro em tempo real.`},{title:`Arquitetura de Rede`,description:`Estruturação lógica e física dos sistemas de comunicação e controle para integração total da planta.`},{title:`Lista I/O`,description:`Mapeamento completo de entradas e saídas de sinais para automação e controle preciso de dispositivos.`},{title:`Projeto 3D`,description:`Modelagem tridimensional detalhada para visualização espacial, evitando interferências e otimizando a montagem.`},{title:`Isométricos`,description:`Desenhos técnicos detalhados para fabricação e montagem precisa de tubulações e componentes mecânicos.`},{title:`As Built`,description:`Documentação técnica final que reflete exatamente como a obra foi executada para futuras manutenções.`},{title:`Comissionamento`,description:`Testes rigorosos e validação de sistemas para garantir que a entrega esteja em conformidade com o projeto.`},{title:`Esquema Elétrico`,description:`Projetos detalhados de circuitos, proteção e distribuição de energia seguindo as normas vigentes.`},{title:`Suprimentos`,description:`Gestão estratégica de compras e logística de materiais críticos para garantir o fluxo contínuo do projeto.`}]},equipment:{banner:{title:`Equipamentos Skids`},intro:{title:`Engenharia Modular e Skids de Alta Performance`,description:`Projetamos e fabricamos unidades modulares customizadas que garantem agilidade na instalação e máxima eficiência operacional. Nossas soluções em Skids são entregues prontas para integração, otimizando o espaço físico e reduzindo o tempo de setup na sua planta.`},divider:{title:`Equipamentos/ Skids/ Projetos Personalizados`,subtitle:`Desenvolvimento de equipamentos personalizados com tecnologia de ponta para processos críticos e demandas específicas da indústria.`},equipmentList:[{title:`Estações Moveis CIP`,description:`Sistemas de limpeza automatizados e transportáveis para máxima higiene industrial.`},{title:`Estação Vapor + Purgobomba`,description:`Gestão térmica eficiente com recuperação de condensado e controle de pressão.`},{title:`Carrinho Recolha Levedura`,description:`Equipamento ergonômico para manejo e coleta segura de leveduras em processos.`},{title:`Carboblender`,description:`Sistema de precisão para carbonatação e mistura de bebidas em linha.`},{title:`Monifolds`,description:`Conjuntos de válvulas e tubulações para distribuição e controle otimizado de fluxo.`},{title:`Passivação Movel`,description:`Unidade dedicada ao tratamento de superfícies para garantir resistência à corrosão.`},{title:`Inativação de Levedura`,description:`Processamento térmico ou químico para controle biológico em descartes ou subprodutos.`},{title:`Skid Dosagem em Geral`,description:`Módulos de precisão para injeção controlada de aditivos e ingredientes.`},{title:`Projetos com Pig`,description:`Sistemas de limpeza e recuperação de produtos em tubulações via raspadores.`},{title:`Pasteurizador`,description:`Unidades térmicas modulares para estabilização microbiológica de produtos líquidos.`},{title:`Skid de Produtos Químicos`,description:`Armazenamento e dosagem segura de reagentes sob rigorosos padrões técnicos.`},{title:`Filtro Trap/Polidor`,description:`Estações de filtragem final para retenção de partículas e polimento de fluidos.`},{title:`Skid de Ar Comprimido`,description:`Unidades completas de tratamento, secagem e distribuição de ar industrial.`},{title:`Osmose`,description:`Sistemas de purificação de água por membranas para processos de alta pureza.`},{title:`Skid Co2`,description:`Módulos para recepção, estocagem e vaporização de dióxido de carbono.`},{title:`Ultrafiltração`,description:`Tecnologia de separação por membranas para clarificação e remoção de macromoléculas.`},{title:`Skid de Nitrogenio`,description:`Central de controle e distribuição para inertização e processos industriais.`}]},aboutpage:{banner:{title:`Sobre Nós`},intro:{title:`Engenharia de Precisão em Cada Estrutura`,description:`Com uma trajetória consolidada de mais de 15 anos no mercado, a Star Process Solutions nasceu para transformar a complexidade dos projetos industriais em resultados eficientes. Evoluímos de uma forte base técnica para nos tornarmos referência em soluções eletromecânicas e mecânicas para grandes players no Brasil e na América Latina.`},differentials:{title:`Nossos Diferenciais`,subtitle:`A Star Process Solutions vai além da fabricação de equipamentos. Atuamos como parceiros estratégicos, oferecendo soluções sob medida, engenharia aplicada e acompanhamento próximo em todas as etapas do processo produtivo.`,items:[{title:`Engenharia própria e especializada`,description:`Contamos com um corpo técnico experiente e 100% próprio. Garantimos o cumprimento rigoroso das normas de segurança (NRs) e a aplicação das melhores práticas de engenharia em cada etapa do seu projeto.`},{title:`Projetos sob medida para sua linha`,description:`Desenvolvemos soluções personalizadas que se adaptam exatamente às necessidades da sua planta industrial. Do detalhamento em 3D à fabricação, focamos na otimização de performance e integração total.`},{title:`Compromisso com prazos e entrega`,description:`A gestão no modelo Turn-Key nos permite um controle rigoroso do cronograma. Entregamos eficiência e pontualidade, garantindo que sua operação retorne às atividades com o máximo de previsibilidade e segurança.`},{title:`Atendimento próximo e consultivo`,description:`Mais do que prestadores de serviço, somos parceiros estratégicos. Oferecemos suporte técnico contínuo e diagnósticos precisos, mantendo um canal de comunicação transparente e direto com nossos clientes.`}]},strategic:{items:[{title:`Missão`,description:`Oferecer produtos e serviços de montagem eletromecânica e manutenção industrial de qualidade, com tecnologia, segurança e prazo, proporcionando a satisfação e excelência na entrega.`},{title:`Visão`,description:`Ser referência no mercado nacional e internacional de fabricação/fornecimento de equipamentos e montagem eletromecânica.`},{title:`Valores`,description:`Confiabilidade, transparência e comprometimento com clientes, fornecedores e colaboradores.`}]}},contactpage:{introTitle:`Fale com um Especialista`,introText:`Entre em contato com nossos especialistas e agende uma visita da nossa equipe à sua unidade operacional.`,formTitle:`Vamos conversar`,placeholders:{company:`Empresa`,address:`Endereço`,fullName:`Nome completo`,role:`Cargo`,department:`Departamento`,email:`E-mail`,phone:`Telefone / WhatsApp`,message:`Mensagem`},submit:`Enviar`,cards:{email:`E-mail`,phone:`Telefone / WhatsApp`,social:`Redes sociais`,address:`Endereço`}},projectpage:{banner:{title:`Projetos`},intro:{title:`Soluções sob medida para desafios operacionais complexos`,description:`Desenvolvemos soluções personalizadas que atendem aos mais rigorosos padrões de qualidade e segurança. Do diagnóstico à execução, entregamos a confiabilidade que sua planta exige.`},projects:{title:`Nossos Projetos`,subtitle:`Engenharia de alta complexidade entregue com precisão, segurança e conformidade técnica em diversos segmentos industriais.`,list:[{title:`Montagem de Linha de Processo Unidade Industrial`,description:`Execução completa no modelo Turn-Key, integrando a instalação de tubulações, suportação e pipe-racks. Projeto focado na otimização do fluxo produtivo e conformidade total com as normas de segurança.`},{title:`Fabricação e Instalação de Skids e Tanques`,description:`Desenvolvimento de equipamentos sob medida em aço inox e carbono, atendendo rigorosos padrões sanitários e de pressão. Soluções personalizadas para o armazenamento e processamento de fluidos.`}]},clients:{title:`Clientes Atendidos`,subtitle:`Empresas que confiam na nossa engenharia e inteligência operacional.`}},industry:{banner:{title:`Indústria`},intro:{title:`Soluções de Engenharia que Otimizam Processos Industriais`,description:`A Star Process Solutions desenvolve soluções que impulsionam a performance e a evolução dos processos industriais. Especializada em projetos, fabricação e montagem eletromecânicas, nossa engenharia transforma desafios complexos em infraestruturas completas para implantação, modernização e otimização de plantas produtivas.`},turnkey:{title:`Projeto Turn Key`,description:`Desenvolvemos projetos industriais sob medida, integrando engenharia, fabricação e montagem. Atuamos da concepção do projeto ao start-up da planta, garantindo eficiência operacional, segurança e alto padrão técnico.`},subtypes:{cold_block:{title:`Cold Block`,description:`Etapas de tratamento e estabilização após o resfriamento para envase.`,link:`/industry/cold-block`},filtration:{title:`Filtração`,description:`Sistemas avançados para purificação e separação de fluidos.`,link:`/industry/filtration`},yeast_cellar:{title:`Adega de Levedura`,description:`Tecnologia especializada para propagação e manejo de leveduras.`,link:`/industry/yeast-cellar`},water_recovery:{title:`Recuperação de Água`,description:`Soluções sustentáveis para reuso e eficiência hídrica industrial.`,link:`/industry/water-recovery`},cip_station:{title:`Estação CIPa`,description:`Sistemas de limpeza automática (Clean-In-Place) para máxima higiene.`,link:`/industry/cip-station`},utilities:{title:`Utilidades`,description:`Infraestrutura completa: vapor, ar comprimido e sistemas térmicos.`,link:`/industry/utilities`},pipe_rack:{title:`Pipe Rack`,description:`Engenharia de estruturas para suporte e organização de tubulações.`,link:`/industry/pipe-rack`},syrup_room:{title:`Xaroparia`,description:`Processamento e dosagem precisa para a indústria de bebidas.`,link:`/industry/syrup-room`}},assembly:{title:`Montagem Industrial`,subtitle:`Soluções integradas com rigor técnico e conformidade normativa. Unimos engenharia mecânica, elétrica e pneumática para garantir montagens precisas e infraestruturas operacionais de alta performance.`},mechanical:{title:`Mecânica`,list:[{title:`Manutenção Industrial`,description:`Intervenções preventivas e corretivas para garantir a disponibilidade e a vida útil dos ativos.`},{title:`Fabricação de Plataformas`,description:`Estruturas metálicas projetadas sob medida, com foco em ergonomia e segurança operacional.`},{title:`Fabricação e Instalação de Tubulações`,description:`Execução de redes de fluidos em aço inox ou carbono, com soldagem qualificada e testes de estanqueidade.`},{title:`Fabricação de Placas de Manobra`,description:`Desenvolvimento de painéis de distribuição de fluxos para otimização de processos sanitários e industriais.`},{title:`Fabricação e Instalação Pipe Rack`,description:`Engenharia de estruturas para suporte e organização eficiente de redes de tubulações aéreas.`},{title:`Taqueamento`,description:`Identificação técnica e mapeamento de ativos para gestão de manutenção e controle de inventário.`},{title:`Sistema de Recuperação de Água`,description:`Implementação de tecnologias para reuso e redução do impacto hídrico na unidade produtiva.`}]},electrical:{title:`Elétrica`,list:[{title:`Automação`,description:`Integração de sistemas inteligentes para controle de processos, redução de falhas e ganho de produtividade.`},{title:`Xaroparia`,description:`Sistemas elétricos e de controle específicos para processos de dosagem e mistura na indústria de bebidas.`},{title:`Montagem de Infraestrutura`,description:`Instalação de leitos, eletrocalhas e passagens de cabos para sistemas de potência e controle.`},{title:`Montagem de Painéis Elétricos`,description:`Montagem e instalação de quadros de comando e força conforme as normas NR-10 e NBR-5410.`},{title:`Utilidades`,description:`Infraestrutura elétrica completa para sistemas de suporte como compressores, caldeiras e chillers.`}]},pneumatic:{title:`Pneumática`,list:[{title:`Montagem Eletro-pneumática`,description:`Integração de componentes pneumáticos e comandos elétricos para acionamento preciso de válvulas e atuadores.`},{title:`Manutenção em Válvulas`,description:`Revisão, calibração e reparo de válvulas de controle e segurança para garantir a vedação e o fluxo correto.`}]}},coldblock:{banner:{title:`Cold Block`},intro:{title:`Eficácia Térmica e Controle de Processos em Cold Block`,paragraph1:`O Cold Block compreende todas as etapas do processo cervejeiro realizadas após o resfriamento do mosto. Essa área inclui as operações de fermentação, maturação, clarificação, filtração, carbonatação e armazenamento da cerveja, até o envio para a linha de envase.`,paragraph2:`Nessa etapa, o mosto resfriado proveniente da sala de brassagem (brewhouse) é transferido para os tanques de fermentação, onde ocorre a conversão dos açúcares em álcool e CO₂ pela ação das leveduras.`,paragraph3:`Após a fermentação, a cerveja passa por processos de maturação e estabilização, podendo incluir filtração, centrifugação, ajuste de CO₂ e controle de qualidade, antes de ser enviada aos tanques de cerveja filtrada (BBT - Bright Beer Tanks) e posteriormente ao envase.`},cards:{automation:{title:`Automação Integrada`,description:`Implementação de adegas e sistemas de tanques com automação integrada, garantindo o monitoramento preciso de cada lote e a integridade do processo de resfriamento.`,imageAlt:`Tanques de Fermentação com Sistema de Automação`},thermal_efficiency:{title:`Eficiência Térmica`,description:`Projetos de tubulações isoladas e centrais de refrigeração dimensionadas para máxima performance, reduzindo perdas térmicas e otimizando o custo operacional.`,imageAlt:`Tubulações Isoladas Termicamente`}}},cip:{banner:{title:`Estação CIP`},intro:{title:`Sistemas de Higienização Automatizada (CIP)`,paragraph1:`A Star Process Solutions projeta e instala Estações CIP customizadas para garantir a máxima assepsia em tanques, tubulações e envasadoras. Nossos sistemas automatizados permitem uma higienização rigorosa e repetível, essencial para manter os padrões de qualidade e segurança em indústrias de processos críticos.`,paragraph2:`Com foco na eficiência operacional, nossas soluções reduzem a necessidade de intervenção manual, diminuindo drasticamente o risco de contaminação e garantindo a integridade biológica de cada lote produzido.`,paragraph3:`Nossa engenharia prioriza o controle preciso de variáveis como temperatura, tempo, concentração de detergentes e vazão. Através de algoritmos avançados, otimizamos o consumo de água e produtos químicos, gerando uma operação mais sustentável e econômica.`,paragraph4:`Entregues em formato de Skids compactos e prontos para integração, nossas Estações CIP oferecem total rastreabilidade dos ciclos de limpeza, atendendo às normas sanitárias mais exigentes dos setores alimentício, de bebidas e farmacêutico.`},cards:{modules:{imageAlt:`Módulos CIP Inteligentes`,description:`Módulos CIP inteligentes com interface intuitiva, permitindo a programação de receitas de limpeza específicas para cada tipo de produto ou linha de produção.`},recovery:{imageAlt:`Sistemas de Recuperação`,description:`Sistemas de recuperação de soluções e monitoramento de condutividade, garantindo o reuso seguro de insumos e a redução do impacto ambiental da planta.`}}},filtration:{banner:{title:`Filtração`},intro:{title:`Tecnologia em Filtração e Separação de Fluidos`,paragraph1:`A Star Process Solutions oferece sistemas de filtração de alta eficiência, projetados para garantir a máxima pureza e a remoção precisa de partículas em processos industriais críticos. Nossa engenharia foca na seleção das melhores tecnologias de separação para cada aplicação específica.`,paragraph2:`Atuamos desde a filtração grosseira até o processos final, assegurando que o fluido atinja os padrões de qualidade exigidos pelos setores mais rigorosos, como o farmacêutico e o alimentício.`,paragraph3:`Desenvolvemos soluções que aliam alta performance à sustentabilidade, otimizando a recuperação de produtos e reduzindo o desperdício em linha. Nossos sistemas são projetados para facilitar a manutenção e garantir a longevidade dos elementos filtrantes.`,paragraph4:`Com foco em automação e controle, entregamos estações de filtração completas (Skids) que monitoram diferenciais de pressão e fluxo, garantindo uma operação contínua, segura e em total conformidade técnica.`},cards:{polish:{imageAlt:`Filtros Polidores`,description:`Implementação de filtros polidores e sistemas de retenção de segurança, essenciais para a proteção da integridade final do produto antes do envase ou armazenamento.`},membrane:{imageAlt:`Filtração por Membranas`,description:`Sistemas avançados de filtração por membranas e ultrafiltração, permitindo separações moleculares precisas e clarificação de fluidos com alto valor agregado.`}}},piperack:{banner:{title:`Pipe Rack`},intro:{title:`Estruturas de Suporte e Gestão de Redes (Pipe Rack)`,paragraph1:`A Star Process Solutions projeta e executa sistemas de Pipe Rack sob medida, servindo como a estrutura central para a sustentação e organização de tubulações, bandejamentos elétricos e linhas de utilidades. Nossa engenharia foca no aproveitamento inteligente da área aérea da planta.`,paragraph2:`Desenvolvemos estruturas metálicas robustas, calculadas para suportar as cargas estáticas e dinâmicas dos fluidos, garantindo a integridade das conexões e facilitando o acesso para futuras expansões ou intervenções de manutenção.`,paragraph3:`Nossas soluções de Pipe Rack são integradas ao layout industrial para evitar interferências e otimizar o fluxo logístico no nível do solo. Utilizamos materiais com tratamentos anticorrosivos de alta durabilidade, adequados para ambientes industriais agressivos.`,paragraph4:`Da análise de carga ao detalhamento dos suportes, entregamos infraestruturas que organizam a complexidade de redes da unidade produtiva, assegurando uma distribuição de fluidos limpa, segura e em total conformidade com as normas de engenharia estrutural.`},cards:{structure:{imageAlt:`Engenharia de Estruturas Metálicas`,description:`Engenharia de detalhamento e montagem de estruturas metálicas de grande porte, projetadas para garantir estabilidade e segurança na condução de múltiplas redes de tubulação.`},modular:{imageAlt:`Sistemas Modulares de Suporte`,description:`Sistemas modulares de suporte que permitem a organização eficiente de linhas de processo e utilidades, prevendo esperas técnicas para o crescimento escalonável da sua indústria.`}}},waterrecovery:{banner:{title:`Recuperação de Água`},intro:{title:`Sustentabilidade e Eficiência em Recuperação Hídrica`,paragraph1:`A Star Process Solutions desenvolve sistemas avançados para a recuperação e o reuso de água em processos industriais, permitindo que as empresas reduzam significativamente o consumo de recursos naturais. Nossas soluções são projetadas para integrar a gestão hídrica diretamente ao fluxo produtivo.`,paragraph2:`Atuamos na implementação de tecnologias de tratamento e recirculação que garantem que a água recuperada atenda aos padrões de qualidade necessários para diversas aplicações, desde utilidades até processos de limpeza industrial.`,paragraph3:`Nossa engenharia foca na otimização do balanço hídrico da planta, identificando pontos críticos de desperdício e transformando efluentes em ativos valiosos. Desenvolvemos estações de tratamento compactas e eficientes, totalmente automatizadas para facilitar a operação.`,paragraph4:`Com foco no ESG e na economia circular, entregamos infraestruturas que não apenas protegem o meio ambiente, mas também geram uma redução direta nos custos operacionais, fortalecendo a competitividade e a imagem sustentável da sua marca.`},cards:{treatment:{imageAlt:`Sistemas de Filtragem e Tratamento`,description:`Implementação de sistemas de filtragem e tratamento para o reuso de água proveniente de torres de resfriamento, condensados e processos de lavagem, maximizando o aproveitamento hídrico.`},skid:{imageAlt:`Estações de Tratamento Modulares`,description:`Estações de tratamento modulares (Skids) projetadas para a remoção de impurezas e desinfecção, garantindo uma água de reuso segura, sustentável e em total conformidade normativa.`}}},yeastcellar:{banner:{title:`Adega de Levedura`},intro:{title:`Tecnologia em Propagação e Gestão de Leveduras`,paragraph1:`A Star Process Solutions desenvolve sistemas completos para o manejo de leveduras, garantindo as condições ideais para a propagação, dosagem e recuperação. Nossos projetos focam na manutenção da viabilidade celular, essencial para a consistência sensorial e eficiência fermentativa do produto final.`,paragraph2:`Projetamos adegas integradas com tecnologia de controle de temperatura e oxigenação precisa, assegurando que o microrganismo se desenvolva em um ambiente estéril e livre de contaminações cruzadas.`,paragraph3:`Nossas soluções contemplam desde tanques de propagação (propagadores) até sistemas automatizados de coleta e estocagem. Utilizamos acabamentos sanitários de alto padrão e válvulas de tecnologia avançada para facilitar os processos de limpeza e esterilização.`,paragraph4:`Com foco na otimização da planta, entregamos adegas que permitem um controle rigoroso sobre os ciclos de reaproveitamento, reduzindo custos operacionais e garantindo o padrão de qualidade exigido pelo mercado.`},cards:{tanks:{imageAlt:`Tanques de Propagação e Estocagem`,description:`Implementação de tanques de propagação e estocagem com sistemas de agitação e controle térmico individualizado, garantindo o vigor da levedura em todas as etapas.`},skids:{imageAlt:`Skids de Dosagem e Transferência`,description:`Skids de dosagem e transferência projetados para um manuseio delicado e asséptico, minimizando o estresse celular e garantindo a máxima performance fermentativa.`}}},utilities:{banner:{title:`Utilidades`},intro:{title:`Sistemas de Utilidades e Infraestrutura Industrial`,paragraph1:`A Star Process Solutions projeta e implementa sistemas de utilidades de alta performance, essenciais para garantir o fornecimento ininterrupto de energia e fluidos térmicos para a sua planta. Nossa engenharia foca na integração inteligente de sistemas de vapor, ar comprimido e água gelada.`,paragraph2:`Desenvolvemos infraestruturas robustas que priorizam a segurança operacional e a facilidade de manutenção, assegurando que as utilidades da fábrica operem com máxima disponibilidade e mínima perda de carga em todo o percurso.`,paragraph3:`Nossas soluções de utilidades são dimensionadas para suportar as demandas mais críticas de produção, focando na otimização do consumo de combustível e energia elétrica. Atuamos com tecnologia de ponta em isolamento e controle de fluxo para evitar desperdícios térmicos.`,paragraph4:`Do projeto básico à montagem eletromecânica final, entregamos centrais de utilidades completas que permitem um gerenciamento centralizado, garantindo a estabilidade necessária para que sua produção nunca pare por falhas de suporte.`},cards:{thermal:{imageAlt:`Centrais Térmicas e Redes de Vapor`,description:`Montagem de centrais térmicas e redes de distribuição de vapor com foco em eficiência de troca calórica e recuperação de condensado para redução de custos.`},air:{imageAlt:`Sistemas de Ar Comprimido e Gases`,description:`Implantação de sistemas de geração e tratamento de ar comprimido e gases industriais, garantindo pureza, pressão constante e estabilidade para os atuadores da planta.`}}},syruproom:{banner:{title:`Xaroparia`},intro:{title:`Sistemas de Preparo e Dosagem (Xaroparia)`,paragraph1:`A Star Process Solutions desenvolve soluções completas para Xaroparias, focando na precisão da mistura e na integridade dos ingredientes. Projetamos sistemas que automatizam desde a dissolução do açúcar até a dosagem final de concentrados, garantindo um produto final homogêneo e de alta qualidade.`,paragraph2:`Nossa engenharia foca na redução de perdas de matéria-prima e na eliminação de falhas humanas através de controles rigorosos de vazão, temperatura e brix, essenciais para a padronização do sabor e a redução de custos operacionais.`,paragraph3:`Priorizamos a segurança sanitária em cada projeto, utilizando acabamentos em aço inox de grau alimentício e válvulas de alta tecnologia para processos assépticos. Nossas Xaroparias são integradas a sistemas CIP, permitindo higienizações rápidas e eficientes entre trocas de produtos.`,paragraph4:`Com foco em escalonabilidade e eficiência, entregamos plantas modulares que facilitam a operação e o monitoramento em tempo real, atendendo às demandas mais exigentes da indústria de refrigerantes, sucos e bebidas em geral.`},cards:{mixing:{imageAlt:`Tanques de Mistura e Dissolvidores`,description:`Implementação de dissolvidores e tanques de mistura com sistemas de agitação de alto cisalhamento, garantindo a perfeita homogeneização dos componentes do xarope.`},control:{imageAlt:`Controle de Brix e Dosagem`,description:`Sistemas de controle de Brix e dosagem em linha, monitorados por sensores de alta precisão que asseguram a padronização contínua e a qualidade do produto final.`}}}}},es:{translation:{nav:{home:`Inicio`,about:`Sobre Nosotros`,projects:`Proyectos`,industry:`Industria`,equipment:`Equipos Skids`,engineering:`Ingeniería`,contact:`Contacto`},hero:{title:`Ingeniería Industrial de Alto Rendimiento`,subtitle:`Soluciones Turn-Key integradas: desde el diseño 3D hasta la ejecución final, con precisión técnica, seguridad y presencia internacional.`,industry:`Industria`,industryDesc:`Proyectos (EPC) a medida, con precisión técnica, procesos rigurosos y eficiencia productiva.`,skids:`Equipos Skids`,skidsDesc:`Industrializando soluciones con capacidad de desarrollo y nacionalización.`,engineering:`Ingeniería`,engineeringDesc:`Inteligencia en automatización de vanguardia con soluciones que conectan su planta al futuro.`,check:`Ver +`},about:{badge:`Empresa`,title:`Soluciones industriales que transforman su producción`,text:`Más de 15 años de experiencia entregando soluciones Turn-Key de alta complejidad en Brasil y América Latina. Garantice eficiencia operativa para su negocio.`,button:`Ver más`},sectors:{badge:`Sectores Atendidos`,title:`Sectores Estratégicos`,subtitle:`Ofrecemos soluciones de ingeniería de alta complejidad para los mercados más exigentes de la industria global.`,food:`Alimentos y Bebidas`,foodDesc:`Infraestructura de fabricación, preparación y estrictos estándares sanitarios.`,oil:`Petróleo, Gas y Energía`,oilDesc:`Integridad de activos y eficiencia en entornos críticos.`,steel:`Siderurgia y Minería`,steelDesc:`Optimización de procesos pesados y continuidad operativa.`,automotive:`Automotriz`,automotiveDesc:`Manufactura avanzada e integración de sistemas robóticos.`,offshore:`Offshore y Naval`,offshoreDesc:`Ingeniería de alta complejidad para entornos salinos y remotos.`,chemical:`Química y Petroquímica`,chemicalDesc:`Control de procesos químicos y seguridad funcional.`,paper:`Papel y Celulosa`,paperDesc:`Sostenibilidad hídrica y automatización de procesos continuos.`,renewable:`Energías Renovables`,renewableDesc:`Transición energética, infraestructura eólica y solar.`},metrics:{badge:`Nuestros números`,title:`Estamos orgullosos de nuestros números`,experience:`Años de experiencia`,projects:`Proyectos entregados en todo Brasil y América Latina`,steel:`Metros de acero procesados con precisión e ingeniería avanzada`,collaborators:`Colaboradores entre técnicos, ingenieros y especialistas`},projects:{badge:`Actuación`,title:`Proyectos Prospectados y Ejecutados`,partners:`Socios y Proyectos`,brazil:`Brasil`,chile:`Chile`},contact:{badge:`Contacto`,title:`Contáctenos`,text:`Conozca más sobre nuestras soluciones personalizadas y cómo podemos ayudar a su empresa a crecer y prosperar con procesos precisos y tecnología de punta.`,button:`Haga clic aquí`},footer:{about:`Sobre Nosotros`,history:`Historia`,mission:`Misión, Visión y Valores`,projects:`Proyectos`,recentProjects:`Proyectos Recientes`,clients:`Clientes Atendidos`,services:`Servicios`,turnkey:`Proyecto Turn Key`,assembly:`Montaje Industrial`,electrical:`Eléctrica`,contact:`Contacto`,form:`Formulario`,phoneWhatsapp:`Teléfonos / WhatsApp`,addressMap:`Dirección y Mapa`,requestBudget:`Solicitar Presupuesto`,followUs:`Síguenos en redes sociales:`,copyright:`– Todos los derechos reservados.`,privacy:`Privacidad`,terms:`Términos`,address:`Av. Santa Maria, 146. Jd. Santa Maria, Jacareí / SP - CP 12328-320`},engineering:{banner:{title:`Ingeniería`},intro:{title:`Ingeniería Consultiva e Inteligencia de Proyectos`,description:`Desarrollamos soluciones de ingeniería multidisciplinaria que integran tecnología de punta y viabilidad técnica. Nuestro enfoque se centra en la mitigación de riesgos y la optimización de recursos, garantizando que cada proyecto esté planificado para ofrecer el máximo rendimiento operacional desde su concepción.`},divider:{title:`Proyecto/ Ingeniería`,subtitle:`Metodología avanzada y documentación técnica completa para la planificación, ejecución y control de proyectos industriales de alta complejidad.`},services:[{title:`Diagrama de Proceso/ P&ID`,description:`Diagramas detallados con la lógica de funcionamiento e interconexión de todos los componentes del sistema.`},{title:`Cronograma con "Curva S"`,description:`Gestión visual del progreso del proyecto, permitiendo el seguimiento físico-financiero en tiempo real.`},{title:`Arquitectura de Red`,description:`Estructuración lógica y física de los sistemas de comunicación y control para la integración total de la planta.`},{title:`Lista I/O`,description:`Mapeo completo de entradas y salidas de señales para automatización y control preciso de dispositivos.`},{title:`Proyecto 3D`,description:`Modelado tridimensional detallado para visualización espacial, evitando interferencias y optimizando el montaje.`},{title:`Isométricos`,description:`Dibujos técnicos detallados para la fabricación y montaje preciso de tuberías y componentes mecánicos.`},{title:`As Built`,description:`Documentación técnica final que refleja exactamente cómo se ejecutó la obra para futuros mantenimientos.`},{title:`Puesta en Marcha`,description:`Pruebas rigurosas y validación de sistemas para garantizar que la entrega cumpla con las especificaciones del proyecto.`},{title:`Esquema Eléctrico`,description:`Proyectos detallados de circuitos, protección y distribución de energía siguiendo las normas vigentes.`},{title:`Suministros`,description:`Gestión estratégica de compras y logística de materiales críticos para garantizar el flujo continuo del proyecto.`}]},equipment:{banner:{title:`Equipos Skids`},intro:{title:`Ingeniería Modular y Skids de Alto Rendimiento`,description:`Diseñamos y fabricamos unidades modulares personalizadas que garantizan agilidad en la instalación y máxima eficiencia operacional. Nuestras soluciones en Skids se entregan listas para integración, optimizando el espacio físico y reduciendo el tiempo de configuración en su planta.`},divider:{title:`Equipos/ Skids/ Proyectos Personalizados`,subtitle:`Desarrollo de equipos personalizados con tecnología de vanguardia para procesos críticos y demandas específicas de la industria.`},equipmentList:[{title:`Estaciones Móviles CIP`,description:`Sistemas de limpieza automatizados y transportables para máxima higiene industrial.`},{title:`Estación Vapor + Bomba de Condensados`,description:`Gestión térmica eficiente con recuperación de condensados y control de presión.`},{title:`Carro Recolección de Levadura`,description:`Equipo ergonómico para manejo y recolección segura de levaduras en procesos.`},{title:`Carboblender`,description:`Sistema de precisión para carbonatación y mezcla de bebidas en línea.`},{title:`Múltiples`,description:`Conjuntos de válvulas y tuberías para distribución y control optimizado de flujo.`},{title:`Pasivación Móvil`,description:`Unidad dedicada al tratamiento de superficies para garantizar resistencia a la corrosión.`},{title:`Inactivación de Levadura`,description:`Procesamiento térmico o químico para control biológico en desechos o subproductos.`},{title:`Skid de Dosificación en General`,description:`Módulos de precisión para inyección controlada de aditivos e ingredientes.`},{title:`Proyectos con Pig`,description:`Sistemas de limpieza y recuperación de productos en tuberías mediante raspadores.`},{title:`Pasteurizador`,description:`Unidades térmicas modulares para estabilización microbiológica de productos líquidos.`},{title:`Skid de Productos Químicos`,description:`Almacenamiento y dosificación segura de reactivos bajo rigurosos estándares técnicos.`},{title:`Filtro Trampa/Pulidor`,description:`Estaciones de filtración final para retención de partículas y pulido de fluidos.`},{title:`Skid de Aire Comprimido`,description:`Unidades completas de tratamiento, secado y distribución de aire industrial.`},{title:`Ósmosis`,description:`Sistemas de purificación de agua por membranas para procesos de alta pureza.`},{title:`Skid CO2`,description:`Módulos para recepción, almacenamiento y vaporización de dióxido de carbono.`},{title:`Ultrafiltración`,description:`Tecnología de separación por membranas para clarificación y eliminación de macromoléculas.`},{title:`Skid de Nitrógeno`,description:`Central de control y distribución para inertización y procesos industriales.`}]},aboutpage:{banner:{title:`Sobre Nosotros`},intro:{title:`Ingeniería de Precisión en Cada Estructura`,description:`Con una trayectoria consolidada de más de 15 años en el mercado, Star Process Solutions nació para transformar la complejidad de los proyectos industriales en resultados eficientes. Hemos evolucionado desde una sólida base técnica para convertirnos en referencia en soluciones electromecánicas y mecánicas para grandes actores en Brasil y América Latina.`},differentials:{title:`Nuestros Diferenciales`,subtitle:`Star Process Solutions va más allá de la fabricación de equipos. Actuamos como socios estratégicos, ofreciendo soluciones a medida, ingeniería aplicada y acompañamiento cercano en todas las etapas del proceso productivo.`,items:[{title:`Ingeniería propia y especializada`,description:`Contamos con un cuerpo técnico experimentado y 100% propio. Garantizamos el cumplimiento riguroso de las normas de seguridad (NRs) y la aplicación de las mejores prácticas de ingeniería en cada etapa de su proyecto.`},{title:`Proyectos a medida para su línea`,description:`Desarrollamos soluciones personalizadas que se adaptan exactamente a las necesidades de su planta industrial. Desde el detallado en 3D hasta la fabricación, nos enfocamos en la optimización del rendimiento y la integración total.`},{title:`Compromiso con plazos y entrega`,description:`La gestión en modelo Llave en Mano nos permite un control riguroso del cronograma. Entregamos eficiencia y puntualidad, garantizando que su operación regrese a las actividades con máxima previsibilidad y seguridad.`},{title:`Atención cercana y consultiva`,description:`Más que proveedores de servicios, somos socios estratégicos. Ofrecemos soporte técnico continuo y diagnósticos precisos, manteniendo un canal de comunicación transparente y directo con nuestros clientes.`}]},strategic:{items:[{title:`Misión`,description:`Ofrecer productos y servicios de montaje electromecánico y mantenimiento industrial de calidad, con tecnología, seguridad y plazo, proporcionando satisfacción y excelencia en la entrega.`},{title:`Visión`,description:`Ser referencia en el mercado nacional e internacional de fabricación/suministro de equipos y montaje electromecánico.`},{title:`Valores`,description:`Confiabilidad, transparencia y compromiso con clientes, proveedores y colaboradores.`}]}},contactpage:{introTitle:`Hable con un Especialista`,introText:`Póngase en contacto con nuestros expertos y programe una visita de nuestro equipo a su unidad operativa.`,formTitle:`Hablemos`,placeholders:{company:`Empresa`,address:`Dirección`,fullName:`Nombre completo`,role:`Cargo`,department:`Departamento`,email:`E-mail`,phone:`Teléfono / WhatsApp`,message:`Mensaje`},submit:`Enviar`,cards:{email:`E-mail`,phone:`Teléfono / WhatsApp`,social:`Redes sociales`,address:`Dirección`}},projectpage:{banner:{title:`Proyectos`},intro:{title:`Soluciones a medida para desafíos operativos complejos`,description:`Desarrollamos soluciones personalizadas que cumplen con los más rigurosos estándares de calidad y seguridad. Desde el diagnóstico hasta la ejecución, entregamos la confiabilidad que su planta exige.`},projects:{title:`Nuestros Proyectos`,subtitle:`Ingeniería de alta complejidad entregada con precisión, seguridad y cumplimiento técnico en diversos segmentos industriales.`,list:[{title:`Montaje de Línea de Proceso Unidad Industrial`,description:`Ejecución completa en modelo Llave en Mano, integrando la instalación de tuberías, soportes y pipe-racks. Proyecto enfocado en la optimización del flujo productivo y cumplimiento total con las normas de seguridad.`},{title:`Fabricación e Instalación de Skids y Tanques`,description:`Desarrollo de equipos a medida en acero inoxidable y carbono, cumpliendo rigurosos estándares sanitarios y de presión. Soluciones personalizadas para el almacenamiento y procesamiento de fluidos.`}]},clients:{title:`Clientes Atendidos`,subtitle:`Empresas que confían en nuestra ingeniería e inteligencia operacional.`}},industry:{banner:{title:`Industria`},intro:{title:`Soluciones de Ingeniería que Optimizan Procesos Industriales`,description:`Star Process Solutions desarrolla soluciones que impulsan el rendimiento y la evolución de los procesos industriales. Especializada en proyectos, fabricación y montaje electromecánico, nuestra ingeniería transforma desafíos complejos en infraestructuras completas para implementación, modernización y optimización de plantas productivas.`},turnkey:{title:`Proyecto Llave en Mano`,description:`Desarrollamos proyectos industriales a medida, integrando ingeniería, fabricación y montaje. Actuamos desde la concepción del proyecto hasta el start-up de la planta, garantizando eficiencia operacional, seguridad y alto estándar técnico.`},subtypes:{cold_block:{title:`Cold Block`,description:`Etapas de tratamiento y estabilización después del enfriamiento para envasado.`,link:`/industry/cold-block`},filtration:{title:`Filtración`,description:`Sistemas avanzados para purificación y separación de fluidos.`,link:`/industry/filtration`},yeast_cellar:{title:`Cava de Levadura`,description:`Tecnología especializada para propagación y manejo de levaduras.`,link:`/industry/yeast-cellar`},water_recovery:{title:`Recuperación de Agua`,description:`Soluciones sostenibles para reutilización y eficiencia hídrica industrial.`,link:`/industry/water-recovery`},cip_station:{title:`Estación CIP`,description:`Sistemas de limpieza automática (Clean-In-Place) para máxima higiene.`,link:`/industry/cip-station`},utilities:{title:`Utilidades`,description:`Infraestructura completa: vapor, aire comprimido y sistemas térmicos.`,link:`/industry/utilities`},pipe_rack:{title:`Pipe Rack`,description:`Ingeniería de estructuras para soporte y organización de tuberías.`,link:`/industry/pipe-rack`},syrup_room:{title:`Jaropería`,description:`Procesamiento y dosificación precisa para la industria de bebidas.`,link:`/industry/syrup-room`}},assembly:{title:`Montaje Industrial`,subtitle:`Soluciones integradas con rigor técnico y conformidad normativa. Unimos ingeniería mecánica, eléctrica y neumática para garantizar montajes precisos e infraestructuras operacionales de alto rendimiento.`},mechanical:{title:`Mecánica`,list:[{title:`Mantenimiento Industrial`,description:`Intervenciones preventivas y correctivas para garantizar la disponibilidad y vida útil de los activos.`},{title:`Fabricación de Plataformas`,description:`Estructuras metálicas diseñadas a medida, con enfoque en ergonomía y seguridad operacional.`},{title:`Fabricación e Instalación de Tuberías`,description:`Ejecución de redes de fluidos en acero inoxidable o carbono, con soldadura calificada y pruebas de estanqueidad.`},{title:`Fabricación de Placas de Maniobra`,description:`Desarrollo de paneles de distribución de flujos para optimización de procesos sanitarios e industriales.`},{title:`Fabricación e Instalación de Pipe Rack`,description:`Ingeniería de estructuras para soporte y organización eficiente de redes de tuberías aéreas.`},{title:`Etiquetado`,description:`Identificación técnica y mapeo de activos para gestión de mantenimiento y control de inventario.`},{title:`Sistema de Recuperación de Agua`,description:`Implementación de tecnologías para reutilización y reducción del impacto hídrico en la unidad productiva.`}]},electrical:{title:`Eléctrica`,list:[{title:`Automatización`,description:`Integración de sistemas inteligentes para control de procesos, reducción de fallas y ganancia de productividad.`},{title:`Jaropería`,description:`Sistemas eléctricos y de control específicos para procesos de dosificación y mezcla en la industria de bebidas.`},{title:`Montaje de Infraestructura`,description:`Instalación de bandejas, electrocanales y pasos de cables para sistemas de potencia y control.`},{title:`Montaje de Paneles Eléctricos`,description:`Montaje e instalación de cuadros de mando y fuerza según normas NR-10 y NBR-5410.`},{title:`Utilidades`,description:`Infraestructura eléctrica completa para sistemas de soporte como compresores, calderas y enfriadores.`}]},pneumatic:{title:`Neumática`,list:[{title:`Montaje Electroneumático`,description:`Integración de componentes neumáticos y comandos eléctricos para accionamiento preciso de válvulas y actuadores.`},{title:`Mantenimiento de Válvulas`,description:`Revisión, calibración y reparación de válvulas de control y seguridad para garantizar el sellado y el flujo correcto.`}]}},coldblock:{banner:{title:`Cold Block`},intro:{title:`Eficacia Térmica y Control de Procesos en Cold Block`,paragraph1:`El Cold Block comprende todas las etapas del proceso cervecero realizadas después del enfriamiento del mosto. Esta área incluye las operaciones de fermentación, maduración, clarificación, filtración, carbonatación y almacenamiento de la cerveza, hasta el envío a la línea de envasado.`,paragraph2:`En esta etapa, el mosto enfriado proveniente de la sala de cocción (brewhouse) se transfiere a los tanques de fermentación, donde ocurre la conversión de los azúcares en alcohol y CO₂ por acción de las levaduras.`,paragraph3:`Después de la fermentación, la cerveza pasa por procesos de maduración y estabilización, pudiendo incluir filtración, centrifugación, ajuste de CO₂ y control de calidad, antes de ser enviada a los tanques de cerveza filtrada (BBT - Bright Beer Tanks) y posteriormente al envasado.`},cards:{automation:{title:`Automatización Integrada`,description:`Implementación de salas de tanques con automatización integrada, garantizando el monitoreo preciso de cada lote y la integridad del proceso de enfriamiento.`,imageAlt:`Tanques de Fermentación con Sistema de Automatización`},thermal_efficiency:{title:`Eficiencia Térmica`,description:`Proyectos de tuberías aisladas y centrales de refrigeración dimensionadas para máxima performance, reduciendo pérdidas térmicas y optimizando el costo operacional.`,imageAlt:`Tuberías Aisladas Térmicamente`}}},cip:{banner:{title:`Estación CIP`},intro:{title:`Sistemas de Limpieza Automatizada (CIP)`,paragraph1:`Star Process Solutions diseña e instala estaciones CIP personalizadas para garantizar la máxima asepsia en tanques, tuberías y llenadoras. Nuestros sistemas automatizados permiten una limpieza rigurosa y repetible, esencial para mantener los estándares de calidad y seguridad en industrias de procesos críticos.`,paragraph2:`Con enfoque en la eficiencia operativa, nuestras soluciones reducen la necesidad de intervención manual, disminuyendo drásticamente el riesgo de contaminación y garantizando la integridad biológica de cada lote producido.`,paragraph3:`Nuestra ingeniería prioriza el control preciso de variables como temperatura, tiempo, concentración de detergentes y caudal. A través de algoritmos avanzados, optimizamos el consumo de agua y productos químicos, generando una operación más sostenible y económica.`,paragraph4:`Entregadas en formato de Skids compactos y listos para integración, nuestras estaciones CIP ofrecen total trazabilidad de los ciclos de limpieza, cumpliendo con las normas sanitarias más exigentes de los sectores alimentario, de bebidas y farmacéutico.`},cards:{modules:{imageAlt:`Módulos CIP Inteligentes`,description:`Módulos CIP inteligentes con interfaz intuitiva, que permiten la programación de recetas de limpieza específicas para cada tipo de producto o línea de producción.`},recovery:{imageAlt:`Sistemas de Recuperación`,description:`Sistemas de recuperación de soluciones y monitoreo de conductividad, garantizando la reutilización segura de insumos y la reducción del impacto ambiental de la planta.`}}},filtration:{banner:{title:`Filtración`},intro:{title:`Tecnología en Filtración y Separación de Fluidos`,paragraph1:`Star Process Solutions ofrece sistemas de filtración de alta eficiencia, diseñados para garantizar la máxima pureza y la eliminación precisa de partículas en procesos industriales críticos. Nuestra ingeniería se enfoca en la selección de las mejores tecnologías de separación para cada aplicación específica.`,paragraph2:`Actuamos desde la filtración gruesa hasta el procesamiento final, asegurando que el fluido alcance los estándares de calidad exigidos por los sectores más rigurosos, como el farmacéutico y el alimentario.`,paragraph3:`Desarrollamos soluciones que combinan alto rendimiento con sostenibilidad, optimizando la recuperación de productos y reduciendo el desperdicio en línea. Nuestros sistemas están diseñados para facilitar el mantenimiento y garantizar la longevidad de los elementos filtrantes.`,paragraph4:`Con enfoque en automatización y control, entregamos estaciones de filtración completas (Skids) que monitorean diferenciales de presión y flujo, garantizando una operación continua, segura y en total conformidad técnica.`},cards:{polish:{imageAlt:`Filtros Pulidores`,description:`Implementación de filtros pulidores y sistemas de retención de seguridad, esenciales para proteger la integridad final del producto antes del envasado o almacenamiento.`},membrane:{imageAlt:`Filtración por Membranas`,description:`Sistemas avanzados de filtración por membranas y ultrafiltración, que permiten separaciones moleculares precisas y la clarificación de fluidos de alto valor agregado.`}}},piperack:{banner:{title:`Pipe Rack`},intro:{title:`Estructuras de Soporte y Gestión de Redes (Pipe Rack)`,paragraph1:`Star Process Solutions diseña y ejecuta sistemas de Pipe Rack a medida, sirviendo como la estructura central para el soporte y organización de tuberías, bandejas eléctricas y líneas de servicios. Nuestra ingeniería se enfoca en el aprovechamiento inteligente del espacio aéreo de la planta.`,paragraph2:`Desarrollamos estructuras metálicas robustas, calculadas para soportar las cargas estáticas y dinámicas de los fluidos, garantizando la integridad de las conexiones y facilitando el acceso para futuras expansiones o intervenciones de mantenimiento.`,paragraph3:`Nuestras soluciones de Pipe Rack se integran al layout industrial para evitar interferencias y optimizar el flujo logístico a nivel del suelo. Utilizamos materiales con tratamientos anticorrosivos de alta durabilidad, adecuados para ambientes industriales agresivos.`,paragraph4:`Desde el análisis de carga hasta el detallado de soportes, entregamos infraestructuras que organizan la complejidad de las redes de la unidad productiva, asegurando una distribución de fluidos limpia, segura y en total conformidad con las normas de ingeniería estructural.`},cards:{structure:{imageAlt:`Ingeniería de Estructuras Metálicas`,description:`Ingeniería de detalle y montaje de estructuras metálicas de gran escala, diseñadas para garantizar estabilidad y seguridad en la conducción de múltiples redes de tuberías.`},modular:{imageAlt:`Sistemas Modulares de Soporte`,description:`Sistemas modulares de soporte que permiten la organización eficiente de líneas de proceso y servicios, previendo expansiones técnicas para el crecimiento escalable de la industria.`}}},waterrecovery:{banner:{title:`Recuperación de Agua`},intro:{title:`Sostenibilidad y Eficiencia en la Recuperación Hídrica`,paragraph1:`Star Process Solutions desarrolla sistemas avanzados para la recuperación y reutilización de agua en procesos industriales, permitiendo a las empresas reducir significativamente el consumo de recursos naturales.`,paragraph2:`Implementamos tecnologías de tratamiento y recirculación que garantizan que el agua recuperada cumpla con los estándares de calidad necesarios para diversas aplicaciones.`,paragraph3:`Nuestra ingeniería se enfoca en optimizar el balance hídrico de la planta, transformando efluentes en activos valiosos.`,paragraph4:`Con enfoque en ESG y economía circular, entregamos infraestructuras que reducen costos operativos y fortalecen la sostenibilidad.`},cards:{treatment:{imageAlt:`Sistemas de Filtración y Tratamiento`,description:`Implementación de sistemas de filtración y tratamiento para la reutilización de agua de torres de enfriamiento, condensados y procesos de lavado.`},skid:{imageAlt:`Estaciones de Tratamiento Modulares`,description:`Estaciones modulares (Skids) diseñadas para eliminación de impurezas y desinfección.`}}},yeastcellar:{banner:{title:`Bodega de Levadura`},intro:{title:`Tecnología en Propagación y Gestión de Levaduras`,paragraph1:`Sistemas completos para el manejo de levaduras, garantizando condiciones ideales para propagación y recuperación.`,paragraph2:`Control de temperatura y oxigenación precisa.`,paragraph3:`Tanques y sistemas automatizados.`,paragraph4:`Optimización de ciclos y reducción de costos.`},cards:{tanks:{imageAlt:`Tanques de Propagación`,description:`Tanques con control térmico y agitación.`},skids:{imageAlt:`Skids de Dosificación`,description:`Sistemas de transferencia aséptica.`}}},utilities:{banner:{title:`Utilidades`},intro:{title:`Sistemas de Utilidades e Infraestructura Industrial`,paragraph1:`Sistemas de alto rendimiento para energía y fluidos térmicos.`,paragraph2:`Infraestructura robusta y segura.`,paragraph3:`Optimización energética.`,paragraph4:`Gestión centralizada.`},cards:{thermal:{imageAlt:`Plantas Térmicas`,description:`Redes de vapor eficientes.`},air:{imageAlt:`Aire Comprimido`,description:`Sistemas industriales de aire y gases.`}}},syruproom:{banner:{title:`Sala de Jarabes`},intro:{title:`Sistemas de Preparación y Dosificación`,paragraph1:`Soluciones completas para preparación de jarabes.`,paragraph2:`Automatización y reducción de pérdidas.`,paragraph3:`Seguridad sanitaria.`,paragraph4:`Plantas modulares escalables.`},cards:{mixing:{imageAlt:`Tanques de Mezcla`,description:`Sistemas de mezcla de alto rendimiento.`},control:{imageAlt:`Control de Brix`,description:`Monitoreo en línea.`}}}}},en:{translation:{nav:{home:`Home`,about:`About Us`,projects:`Projects`,industry:`Industry`,equipment:`Skid Equipment`,engineering:`Engineering`,contact:`Contact`},hero:{title:`High-Performance Industrial Engineering`,subtitle:`Integrated Turn-Key solutions: from 3D design to final execution, with technical precision, safety, and international presence.`,industry:`Industry`,industryDesc:`Tailor-made (EPC) projects with technical precision, rigorous processes, and productive efficiency.`,skids:`Skid Equipment`,skidsDesc:`Industrializing solutions with development and localization capabilities.`,engineering:`Engineering`,engineeringDesc:`Cutting-edge automation intelligence with solutions that connect your plant to the future.`,check:`Check +`},about:{badge:`Company`,title:`Industrial solutions that transform your production`,text:`Over 15 years of experience delivering high-complexity Turn-Key solutions in Brazil and Latin America. Ensure operational efficiency for your business.`,button:`See more`},sectors:{badge:`Sectors Served`,title:`Strategic Sectors`,subtitle:`We deliver high-complexity engineering solutions for the most demanding global industry markets.`,food:`Food & Beverage`,foodDesc:`Manufacturing infrastructure, preparation, and strict sanitary standards.`,oil:`Oil, Gas & Energy`,oilDesc:`Asset integrity and efficiency in critical environments.`,steel:`Steel & Mining`,steelDesc:`Optimization of heavy processes and operational continuity.`,automotive:`Automotive`,automotiveDesc:`Advanced manufacturing and robotic systems integration.`,offshore:`Offshore & Naval`,offshoreDesc:`High-complexity engineering for saline and remote environments.`,chemical:`Chemical & Petrochemical`,chemicalDesc:`Chemical process control and functional safety.`,paper:`Pulp & Paper`,paperDesc:`Water sustainability and continuous process automation.`,renewable:`Renewable Energy`,renewableDesc:`Energy transition, wind and solar infrastructure.`},metrics:{badge:`Our numbers`,title:`We are proud of our numbers`,experience:`Years of experience`,projects:`Projects delivered across Brazil and Latin America`,steel:`Meters of steel processed with precision and advanced engineering`,collaborators:`Professionals including technicians, engineers, and specialists`},projects:{badge:`Operations`,title:`Prospected & Executed Projects`,partners:`Partners & Projects`,brazil:`Brazil`,chile:`Chile`},contact:{badge:`Contact`,title:`Get in Touch`,text:`Learn more about our customized solutions and how we can help your company grow and thrive with precise processes and cutting-edge technology.`,button:`Click Here`},footer:{about:`About Us`,history:`History`,mission:`Mission, Vision and Values`,projects:`Projects`,recentProjects:`Recent Projects`,clients:`Clients Served`,services:`Services`,turnkey:`Turn Key Project`,assembly:`Industrial Assembly`,electrical:`Electrical`,contact:`Contact`,form:`Form`,phoneWhatsapp:`Phones / WhatsApp`,addressMap:`Address & Map`,requestBudget:`Request a Quote`,followUs:`Follow us on social media:`,copyright:`– All rights reserved.`,privacy:`Privacy`,terms:`Terms`,address:`Av. Santa Maria, 146. Jd. Santa Maria, Jacareí / SP - ZIP 12328-320`},engineering:{banner:{title:`Engineering`},intro:{title:`Consulting Engineering and Project Intelligence`,description:`We develop multidisciplinary engineering solutions that integrate cutting-edge technology and technical feasibility. Our approach focuses on risk mitigation and resource optimization, ensuring that each project is planned to deliver maximum operational performance from conception.`},divider:{title:`Project/ Engineering`,subtitle:`Advanced methodology and complete technical documentation for planning, execution and control of highly complex industrial projects.`},services:[{title:`Process Flowchart/ P&ID`,description:`Detailed diagrams with the logic of operation and interconnection of all system components.`},{title:`Schedule with "S Curve"`,description:`Visual management of project progress, allowing physical-financial monitoring in real time.`},{title:`Network Architecture`,description:`Logical and physical structuring of communication and control systems for complete plant integration.`},{title:`I/O List`,description:`Complete mapping of signal inputs and outputs for automation and precise device control.`},{title:`3D Project`,description:`Detailed three-dimensional modeling for spatial visualization, avoiding interference and optimizing assembly.`},{title:`Isometrics`,description:`Detailed technical drawings for precise manufacturing and assembly of piping and mechanical components.`},{title:`As Built`,description:`Final technical documentation that accurately reflects how the work was executed for future maintenance.`},{title:`Commissioning`,description:`Rigorous testing and system validation to ensure delivery complies with the project specifications.`},{title:`Electrical Scheme`,description:`Detailed circuit, protection and power distribution projects following current standards.`},{title:`Supplies`,description:`Strategic purchasing management and logistics of critical materials to ensure continuous project flow.`}]},equipment:{banner:{title:`Equipment Skids`},intro:{title:`Modular Engineering and High Performance Skids`,description:`We design and manufacture customized modular units that guarantee installation agility and maximum operational efficiency. Our Skid solutions are delivered ready for integration, optimizing physical space and reducing setup time in your plant.`},divider:{title:`Equipment/ Skids/ Custom Projects`,subtitle:`Development of customized equipment with cutting-edge technology for critical processes and specific industry demands.`},equipmentList:[{title:`Mobile CIP Stations`,description:`Automated and transportable cleaning systems for maximum industrial hygiene.`},{title:`Steam Station + Condensate Pump`,description:`Efficient thermal management with condensate recovery and pressure control.`},{title:`Yeast Collection Trolley`,description:`Ergonomic equipment for handling and safe collection of yeasts in processes.`},{title:`Carboblender`,description:`Precision system for in-line carbonation and beverage mixing.`},{title:`Manifolds`,description:`Valve and piping assemblies for optimized flow distribution and control.`},{title:`Mobile Passivation`,description:`Dedicated unit for surface treatment to ensure corrosion resistance.`},{title:`Yeast Inactivation`,description:`Thermal or chemical processing for biological control in waste or by-products.`},{title:`General Dosing Skid`,description:`Precision modules for controlled injection of additives and ingredients.`},{title:`Pig Projects`,description:`Cleaning and product recovery systems in pipelines via scrapers.`},{title:`Pasteurizer`,description:`Modular thermal units for microbiological stabilization of liquid products.`},{title:`Chemical Products Skid`,description:`Safe storage and dosing of reagents under rigorous technical standards.`},{title:`Trap/Polishing Filter`,description:`Final filtration stations for particle retention and fluid polishing.`},{title:`Compressed Air Skid`,description:`Complete treatment, drying and distribution units for industrial air.`},{title:`Osmosis`,description:`Water purification systems using membranes for high purity processes.`},{title:`CO2 Skid`,description:`Modules for receiving, storing and vaporizing carbon dioxide.`},{title:`Ultrafiltration`,description:`Membrane separation technology for clarification and removal of macromolecules.`},{title:`Nitrogen Skid`,description:`Control and distribution center for inertization and industrial processes.`}]},aboutpage:{banner:{title:`About Us`},intro:{title:`Precision Engineering in Every Structure`,description:`With a consolidated track record of over 15 years in the market, Star Process Solutions was born to transform the complexity of industrial projects into efficient results. We have evolved from a strong technical base to become a reference in electromechanical and mechanical solutions for major players in Brazil and Latin America.`},differentials:{title:`Our Differentiators`,subtitle:`Star Process Solutions goes beyond equipment manufacturing. We act as strategic partners, offering tailored solutions, applied engineering, and close follow-up at all stages of the production process.`,items:[{title:`Own and specialized engineering`,description:`We have an experienced and 100% own technical team. We guarantee strict compliance with safety standards (NRs) and the application of best engineering practices at every stage of your project.`},{title:`Custom projects for your line`,description:`We develop customized solutions that adapt exactly to the needs of your industrial plant. From 3D detailing to manufacturing, we focus on performance optimization and total integration.`},{title:`Commitment to deadlines and delivery`,description:`Turn-Key model management allows us to have rigorous schedule control. We deliver efficiency and punctuality, ensuring your operation returns to activities with maximum predictability and safety.`},{title:`Close and consultative service`,description:`More than service providers, we are strategic partners. We offer continuous technical support and precise diagnostics, maintaining a transparent and direct communication channel with our clients.`}]},strategic:{items:[{title:`Mission`,description:`To offer quality electromechanical assembly and industrial maintenance products and services, with technology, safety and deadlines, providing satisfaction and excellence in delivery.`},{title:`Vision`,description:`To be a reference in the national and international market for equipment manufacturing/supply and electromechanical assembly.`},{title:`Values`,description:`Reliability, transparency and commitment to clients, suppliers and employees.`}]}},contactpage:{introTitle:`Speak with a Specialist`,introText:`Get in touch with our experts and schedule a visit from our team to your operational unit.`,formTitle:`Let's talk`,placeholders:{company:`Company`,address:`Address`,fullName:`Full Name`,role:`Role`,department:`Department`,email:`E-mail`,phone:`Phone / WhatsApp`,message:`Message`},submit:`Send`,cards:{email:`E-mail`,phone:`Phone / WhatsApp`,social:`Social Media`,address:`Address`}},projectpage:{banner:{title:`Projects`},intro:{title:`Custom solutions for complex operational challenges`,description:`We develop customized solutions that meet the most rigorous quality and safety standards. From diagnosis to execution, we deliver the reliability your plant demands.`},projects:{title:`Our Projects`,subtitle:`High complexity engineering delivered with precision, safety and technical compliance across various industrial segments.`,list:[{title:`Process Line Assembly Industrial Unit`,description:`Complete Turn-Key execution, integrating the installation of piping, supports and pipe-racks. Project focused on optimizing production flow and full compliance with safety standards.`},{title:`Manufacturing and Installation of Skids and Tanks`,description:`Development of custom equipment in stainless steel and carbon steel, meeting strict sanitary and pressure standards. Customized solutions for fluid storage and processing.`}]},clients:{title:`Clients Served`,subtitle:`Companies that trust our engineering and operational intelligence.`}},industry:{banner:{title:`Industry`},intro:{title:`Engineering Solutions that Optimize Industrial Processes`,description:`Star Process Solutions develops solutions that drive performance and evolution of industrial processes. Specialized in projects, manufacturing and electromechanical assembly, our engineering transforms complex challenges into complete infrastructure for implementation, modernization and optimization of production plants.`},turnkey:{title:`Turn Key Project`,description:`We develop custom industrial projects, integrating engineering, manufacturing and assembly. We work from project conception to plant start-up, ensuring operational efficiency, safety and high technical standards.`},subtypes:{cold_block:{title:`Cold Block`,description:`Treatment and stabilization stages after cooling for bottling.`,link:`/industry/cold-block`},filtration:{title:`Filtration`,description:`Advanced systems for fluid purification and separation.`,link:`/industry/filtration`},yeast_cellar:{title:`Yeast Cellar`,description:`Specialized technology for yeast propagation and management.`,link:`/industry/yeast-cellar`},water_recovery:{title:`Water Recovery`,description:`Sustainable solutions for reuse and industrial water efficiency.`,link:`/industry/water-recovery`},cip_station:{title:`CIP Station`,description:`Clean-In-Place automatic cleaning systems for maximum hygiene.`,link:`/industry/cip-station`},utilities:{title:`Utilities`,description:`Complete infrastructure: steam, compressed air and thermal systems.`,link:`/industry/utilities`},pipe_rack:{title:`Pipe Rack`,description:`Structural engineering for pipe support and organization.`,link:`/industry/pipe-rack`},syrup_room:{title:`Syrup Room`,description:`Precise processing and dosing for the beverage industry.`,link:`/industry/syrup-room`}},assembly:{title:`Industrial Assembly`,subtitle:`Integrated solutions with technical rigor and regulatory compliance. We combine mechanical, electrical and pneumatic engineering to ensure precise assemblies and high-performance operational infrastructure.`},mechanical:{title:`Mechanical`,list:[{title:`Industrial Maintenance`,description:`Preventive and corrective interventions to ensure asset availability and lifespan.`},{title:`Platform Manufacturing`,description:`Custom-designed metal structures focusing on ergonomics and operational safety.`},{title:`Pipe Manufacturing and Installation`,description:`Execution of fluid networks in stainless or carbon steel, with qualified welding and leak testing.`},{title:`Manifold Plate Manufacturing`,description:`Development of flow distribution panels for optimizing sanitary and industrial processes.`},{title:`Pipe Rack Manufacturing and Installation`,description:`Structural engineering for efficient support and organization of overhead piping networks.`},{title:`Tagging`,description:`Technical identification and asset mapping for maintenance management and inventory control.`},{title:`Water Recovery System`,description:`Implementation of technologies for reuse and reduction of water impact in the production unit.`}]},electrical:{title:`Electrical`,list:[{title:`Automation`,description:`Integration of intelligent systems for process control, failure reduction and productivity gains.`},{title:`Syrup Room`,description:`Specific electrical and control systems for dosing and mixing processes in the beverage industry.`},{title:`Infrastructure Assembly`,description:`Installation of cable trays, conduits and cable passages for power and control systems.`},{title:`Electrical Panel Assembly`,description:`Assembly and installation of command and power panels according to NR-10 and NBR-5410 standards.`},{title:`Utilities`,description:`Complete electrical infrastructure for support systems such as compressors, boilers and chillers.`}]},pneumatic:{title:`Pneumatic`,list:[{title:`Electro-pneumatic Assembly`,description:`Integration of pneumatic components and electrical commands for precise activation of valves and actuators.`},{title:`Valve Maintenance`,description:`Inspection, calibration and repair of control and safety valves to ensure sealing and correct flow.`}]}},coldblock:{banner:{title:`Cold Block`},intro:{title:`Thermal Effectiveness and Process Control in Cold Block`,paragraph1:`The Cold Block comprises all stages of the brewing process carried out after wort cooling. This area includes fermentation, maturation, clarification, filtration, carbonation and beer storage operations, up to sending to the filling line.`,paragraph2:`In this stage, the cooled wort from the brewhouse is transferred to fermentation tanks, where sugars are converted into alcohol and CO₂ by yeast action.`,paragraph3:`After fermentation, the beer undergoes maturation and stabilization processes, which may include filtration, centrifugation, CO₂ adjustment and quality control, before being sent to Bright Beer Tanks (BBT) and then to filling.`},cards:{automation:{title:`Integrated Automation`,description:`Implementation of cellars and tank systems with integrated automation, ensuring precise batch monitoring and cooling process integrity.`,imageAlt:`Fermentation Tanks with Automation System`},thermal_efficiency:{title:`Thermal Efficiency`,description:`Insulated piping projects and refrigeration systems sized for maximum performance, reducing thermal losses and optimizing operational costs.`,imageAlt:`Thermally Insulated Piping`}}},cip:{banner:{title:`CIP Station`},intro:{title:`Automated Cleaning Systems (CIP)`,paragraph1:`Star Process Solutions designs and installs customized CIP Stations to ensure maximum asepsis in tanks, pipelines, and filling machines. Our automated systems enable rigorous and repeatable cleaning, essential to maintaining quality and safety standards in critical process industries.`,paragraph2:`Focused on operational efficiency, our solutions reduce the need for manual intervention, drastically minimizing contamination risks and ensuring the biological integrity of each produced batch.`,paragraph3:`Our engineering prioritizes precise control of variables such as temperature, time, detergent concentration, and flow rate. Through advanced algorithms, we optimize water and chemical consumption, resulting in a more sustainable and cost-effective operation.`,paragraph4:`Delivered as compact, ready-to-integrate Skids, our CIP Stations provide full traceability of cleaning cycles, meeting the most stringent sanitary standards in the food, beverage, and pharmaceutical industries.`},cards:{modules:{imageAlt:`Smart CIP Modules`,description:`Smart CIP modules with an intuitive interface, allowing the programming of specific cleaning recipes for each type of product or production line.`},recovery:{imageAlt:`Recovery Systems`,description:`Solution recovery systems and conductivity monitoring, ensuring the safe reuse of inputs and reducing the plant's environmental impact.`}}},filtration:{banner:{title:`Filtration`},intro:{title:`Fluid Filtration and Separation Technology`,paragraph1:`Star Process Solutions provides high-efficiency filtration systems designed to ensure maximum purity and precise particle removal in critical industrial processes. Our engineering focuses on selecting the best separation technologies for each specific application.`,paragraph2:`We operate from coarse filtration to final processing, ensuring that fluids meet the quality standards required by the most demanding sectors, such as pharmaceuticals and food processing.`,paragraph3:`We develop solutions that combine high performance with sustainability, optimizing product recovery and reducing in-line waste. Our systems are designed to facilitate maintenance and ensure the longevity of filtration elements.`,paragraph4:`With a focus on automation and control, we deliver complete filtration stations (Skids) that monitor pressure differentials and flow, ensuring continuous, safe, and fully compliant operation.`},cards:{polish:{imageAlt:`Polishing Filters`,description:`Implementation of polishing filters and safety retention systems, essential for protecting final product integrity before filling or storage.`},membrane:{imageAlt:`Membrane Filtration`,description:`Advanced membrane filtration and ultrafiltration systems, enabling precise molecular separations and clarification of high-value fluids.`}}},piperack:{banner:{title:`Pipe Rack`},intro:{title:`Support Structures and Network Management (Pipe Rack)`,paragraph1:`Star Process Solutions designs and executes custom Pipe Rack systems, serving as the central structure for supporting and organizing pipelines, cable trays, and utility lines. Our engineering focuses on intelligent use of plant overhead space.`,paragraph2:`We develop robust steel structures designed to withstand static and dynamic loads of fluids, ensuring connection integrity and facilitating access for future expansions or maintenance.`,paragraph3:`Our Pipe Rack solutions are integrated into industrial layouts to avoid interference and optimize ground-level logistics. We use highly durable anti-corrosion materials suitable for aggressive industrial environments.`,paragraph4:`From load analysis to support detailing, we deliver infrastructures that organize complex plant networks, ensuring clean, safe fluid distribution in full compliance with structural engineering standards.`},cards:{structure:{imageAlt:`Steel Structure Engineering`,description:`Detailed engineering and assembly of large-scale steel structures designed to ensure stability and safety in multiple pipeline networks.`},modular:{imageAlt:`Modular Support Systems`,description:`Modular support systems that enable efficient organization of process and utility lines, allowing for scalable industrial growth.`}}},waterrecovery:{banner:{title:`Water Recovery`},intro:{title:`Sustainability and Efficiency in Water Recovery`,paragraph1:`Star Process Solutions develops advanced systems for water recovery and reuse in industrial processes, enabling companies to significantly reduce natural resource consumption.`,paragraph2:`We implement treatment and recirculation technologies that ensure recovered water meets quality standards for various applications.`,paragraph3:`Our engineering focuses on optimizing plant water balance, transforming waste streams into valuable assets.`,paragraph4:`With a focus on ESG and circular economy, we deliver infrastructures that reduce operational costs and strengthen sustainability.`},cards:{treatment:{imageAlt:`Filtration and Treatment Systems`,description:`Implementation of filtration and treatment systems for reuse of water from cooling towers, condensates, and washing processes.`},skid:{imageAlt:`Modular Treatment Stations`,description:`Modular treatment stations (Skids) designed for impurity removal and disinfection.`}}},yeastcellar:{banner:{title:`Yeast Cellar`},intro:{title:`Yeast Propagation and Management Technology`,paragraph1:`Complete yeast handling systems ensuring ideal conditions for propagation, dosing, and recovery.`,paragraph2:`Integrated cellars with temperature and oxygenation control.`,paragraph3:`Solutions including propagation tanks and automated systems.`,paragraph4:`Optimization of reuse cycles and operational efficiency.`},cards:{tanks:{imageAlt:`Propagation Tanks`,description:`Propagation and storage tanks with thermal control.`},skids:{imageAlt:`Dosing Skids`,description:`Dosing and transfer skids for aseptic handling.`}}},utilities:{banner:{title:`Utilities`},intro:{title:`Utility Systems and Industrial Infrastructure`,paragraph1:`High-performance utility systems for energy and thermal fluid supply.`,paragraph2:`Robust infrastructure focused on safety and maintenance.`,paragraph3:`Optimized energy consumption solutions.`,paragraph4:`Complete utility centers for centralized management.`},cards:{thermal:{imageAlt:`Thermal Plants`,description:`Steam distribution systems with heat efficiency.`},air:{imageAlt:`Compressed Air Systems`,description:`Industrial gas and compressed air systems.`}}},syruproom:{banner:{title:`Syrup Room`},intro:{title:`Preparation and Dosing Systems`,paragraph1:`Complete syrup preparation solutions with precision mixing.`,paragraph2:`Reduction of raw material losses and automation.`,paragraph3:`Sanitary safety with food-grade materials.`,paragraph4:`Scalable and efficient modular plants.`},cards:{mixing:{imageAlt:`Mixing Tanks`,description:`High-shear mixing systems for homogenization.`},control:{imageAlt:`Brix Control`,description:`Inline Brix monitoring and dosing systems.`}}}}}},lng:`pt`,fallbackLng:`pt`,interpolation:{escapeValue:!1}}),Jn.createRoot(document.getElementById(`root`)).render((0,L.jsx)(x.StrictMode,{children:(0,L.jsx)(sh,{})}));