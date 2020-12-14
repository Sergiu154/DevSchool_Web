/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function e(e){return e=e||[],Array.isArray(e)?e:[e]}function t(e){return`[Vaadin.Router] ${e}`}const n="module",r="nomodule",i=[n,r];function s(e){if(!e.match(/.+\.[m]?js$/))throw new Error(t(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function a(e){if(!e||!h(e.path))throw new Error(t('Expected route config to be an object with a "path" string property, or an array of such objects'));const n=e.bundle,r=["component","redirect","bundle"];if(!(d(e.action)||Array.isArray(e.children)||d(e.children)||u(n)||r.some((t=>h(e[t])))))throw new Error(t(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(n)if(h(n))s(n);else{if(!i.some((e=>e in n)))throw new Error(t('Expected route bundle to include either "nomodule" or "module" keys, or both'));i.forEach((e=>e in n&&s(n[e])))}e.redirect&&["bundle","component"].forEach((n=>{n in e&&console.warn(t(`Route config "${e.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))}))}function o(t){e(t).forEach((e=>a(e)))}function l(e,t){let i=document.head.querySelector('script[src="'+e+'"][async]');return i||(i=document.createElement("script"),i.setAttribute("src",e),t===n?i.setAttribute("type",n):t===r&&i.setAttribute(r,""),i.async=!0),new Promise(((e,t)=>{i.onreadystatechange=i.onload=t=>{i.__dynamicImportLoaded=!0,e(t)},i.onerror=e=>{i.parentNode&&i.parentNode.removeChild(i),t(e)},null===i.parentNode?document.head.appendChild(i):i.__dynamicImportLoaded&&e()}))}function c(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function u(e){return"object"==typeof e&&!!e}function d(e){return"function"==typeof e}function h(e){return"string"==typeof e}function p(e){const n=new Error(t(`Page not found (${e.pathname})`));return n.context=e,n.code=404,n}const m=new class{};function f(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:r,search:i,hash:s}=t;c("go",{pathname:r,search:i,hash:s})&&e.preventDefault()}const g={activate(){window.document.addEventListener("click",f)},inactivate(){window.document.removeEventListener("click",f)}};function _(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;c("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!d(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const v={activate(){window.addEventListener("popstate",_)},inactivate(){window.removeEventListener("popstate",_)}};var y=function e(t,n,r){return t instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(t,n):Array.isArray(t)?function(t,n,r){for(var i=[],s=0;s<t.length;s++)i.push(e(t[s],n,r).source);return new RegExp("(?:"+i.join("|")+")",T(r))}(t,n,r):function(e,t,n){return N(C(e,n),t,n)}(t,n,r)},b=C,w=E,x=N,S=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function C(e,t){for(var n,r=[],i=0,s=0,a="",o=t&&t.delimiter||"/",l=t&&t.delimiters||"./",c=!1;null!==(n=S.exec(e));){var u=n[0],d=n[1],h=n.index;if(a+=e.slice(s,h),s=h+u.length,d)a+=d[1],c=!0;else{var p="",m=e[s],f=n[2],g=n[3],_=n[4],v=n[5];if(!c&&a.length){var y=a.length-1;l.indexOf(a[y])>-1&&(p=a[y],a=a.slice(0,y))}a&&(r.push(a),a="",c=!1);var b=""!==p&&void 0!==m&&m!==p,w="+"===v||"*"===v,x="?"===v||"*"===v,C=p||o,E=g||_;r.push({name:f||i++,prefix:p,delimiter:C,optional:x,repeat:w,partial:b,pattern:E?P(E):"[^"+A(C)+"]+?"})}}return(a||s<e.length)&&r.push(a+e.substr(s)),r}function E(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var i="",s=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var o=e[a];if("string"!=typeof o){var l,c=n?n[o.name]:void 0;if(Array.isArray(c)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but got array');if(0===c.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(l=s(c[u],o),!t[a].test(l))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'"');i+=(0===u?o.prefix:o.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!o.optional)throw new TypeError('Expected "'+o.name+'" to be '+(o.repeat?"an array":"a string"));o.partial&&(i+=o.prefix)}else{if(l=s(String(c),o),!t[a].test(l))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+l+'"');i+=o.prefix+l}}else i+=o}return i}}function A(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function P(e){return e.replace(/([=!:$/()])/g,"\\$1")}function T(e){return e&&e.sensitive?"":"i"}function N(e,t,n){for(var r=(n=n||{}).strict,i=!1!==n.start,s=!1!==n.end,a=A(n.delimiter||"/"),o=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(A).concat("$").join("|"),c=i?"^":"",u=0===e.length,d=0;d<e.length;d++){var h=e[d];if("string"==typeof h)c+=A(h),u=d===e.length-1&&o.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+A(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?c+=A(h.prefix)+"("+p+")?":c+="(?:"+A(h.prefix)+"("+p+"))?":c+=A(h.prefix)+"("+p+")"}}return s?(r||(c+="(?:"+a+")?"),c+="$"===l?"$":"(?="+l+")"):(r||(c+="(?:"+a+"(?="+l+"))?"),u||(c+="(?="+a+"|"+l+")")),new RegExp(c,T(n))}y.parse=b,y.compile=function(e,t){return E(C(e,t))},y.tokensToFunction=w,y.tokensToRegExp=x;const{hasOwnProperty:R}=Object.prototype,k=new Map;function O(e){try{return decodeURIComponent(e)}catch(t){return e}}function j(e,t,n,r,i){let s,a,o=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const u=e.__children=e.__children||e.children;if(!s&&(s=function(e,t,n,r,i){const s=`${e}|${n=!!n}`;let a=k.get(s);if(!a){const t=[];a={keys:t,pattern:y(e,t,{end:n,strict:""===e})},k.set(s,a)}const o=a.pattern.exec(t);if(!o)return null;const l=Object.assign({},i);for(let e=1;e<o.length;e++){const t=a.keys[e-1],n=t.name,r=o[e];void 0===r&&R.call(l,n)||(t.repeat?l[n]=r?r.split(t.delimiter).map(O):[]:l[n]=r?O(r):r)}return{path:o[0],keys:(r||[]).concat(a.keys),params:l}}(l,t,!u,r,i),s))return{done:!1,value:{route:e,keys:s.keys,params:s.params,path:s.path}};if(s&&u)for(;o<u.length;){if(!a){const r=u[o];r.parent=e;let i=s.path.length;i>0&&"/"===t.charAt(i)&&(i+=1),a=j(r,t.substr(i),n,s.keys,s.params)}const r=a.next(c);if(!r.done)return{done:!1,value:r.value};a=null,o++}return{done:!0}}}}function $(e){if(d(e.route.action))return e.route.action(e)}k.set("|false",{keys:[],pattern:/(?:)/});class q{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||$,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){o(t);const n=[...e(t)];this.root.__children=n}addRoutes(t){return o(t),this.root.__children.push(...e(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,h(e)?{pathname:e}:e),n=j(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let i=null,s=null,a=t;function o(e,l=i.value.route,c){const u=null===c&&i.value.route;return i=s||n.next(u),s=null,e||!i.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(l,i.value.route)?i.done?Promise.reject(p(t)):(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},t,i.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(a,i.value),Promise.resolve(r(a)).then((t=>null!=t&&t!==m?(a.result=t.result||t,a):o(e,l,t)))):(s=i,Promise.resolve(m))}return t.next=o,Promise.resolve().then((()=>o(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(a);if(e?console.warn(t):e=new Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}q.pathToRegexp=y;const{pathToRegexp:I}=q,U=new Map;function V(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let r=0;r<n.length;r++){const i=n[r];i.parent=t,V(e,i,i.__children||i.children)}}function L(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function M(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function B(e,t={}){if(!(e instanceof q))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,i)=>{let s=L(n,r);if(!s&&(n.clear(),V(n,e.root,e.root.__children),s=L(n,r),!s))throw new Error(`Route "${r}" not found`);let a=U.get(s.fullPath);if(!a){let e=M(s),t=s.parent;for(;t;){const n=M(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=I.parse(e),r=I.tokensToFunction(n),i=Object.create(null);for(let e=0;e<n.length;e++)h(n[e])||(i[n[e].name]=!0);a={toPath:r,keys:i},U.set(e,a),s.fullPath=e}let o=a.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const e={},n=Object.keys(i);for(let t=0;t<n.length;t++){const r=n[t];a.keys[r]||(e[r]=i[r])}const r=t.stringifyQueryParams(e);r&&(o+="?"===r.charAt(0)?r:`?${r}`)}return o}}let F=[];function D(e){F.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),F=e}function H(e,t){return e.classList.add(t),new Promise((n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${i}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function z(e){return null!=e}function W({pathname:e="",search:t="",hash:n="",chain:r=[],params:i={},redirectFrom:s,resolver:a},o){const l=r.map((e=>e.route));return{baseUrl:a&&a.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:o||l.length&&l[l.length-1]||null,params:i,redirectFrom:s,getUrl:(e={})=>X(Q.pathToRegexp.compile(Z(l))(Object.assign({},i,e)),a)}}function J(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function K(e,t,n){if(d(e))return e.apply(n,t)}function G(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?K(n[e],t,n):void 0}function Y(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function X(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function Z(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class Q extends q{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&q.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const i=Q.NavigationTrigger;Q.setTriggers.apply(Q,Object.keys(i).map((e=>i[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=W({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(n){const r=n.route;let s=Promise.resolve();d(r.children)&&(s=s.then((()=>r.children(function(e){const t=Object.assign({},e);return delete t.next,t}(n)))).then((n=>{z(n)||d(r.children)||(n=r.children),function(n,r){if(!Array.isArray(n)&&!u(n))throw new Error(t(`Incorrect "children" value for the route ${r.path}: expected array or object, but got ${n}`));r.__children=[];const i=e(n);for(let e=0;e<i.length;e++)a(i[e]),r.__children.push(i[e])}(n,r)})));const o={redirect:e=>J(n,e),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return s.then((()=>{if(this.__isLatestRender(n))return K(r.action,[n,o],r)})).then((e=>{return z(e)&&(e instanceof HTMLElement||e.redirect||e===m)?e:h(r.redirect)?o.redirect(r.redirect):r.bundle?(n=r.bundle,h(n)?l(n):Promise.race(i.filter((e=>e in n)).map((e=>l(n[e],e))))).then((()=>{}),(()=>{throw new Error(t(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>z(e)?e:h(r.component)?o.component(r.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},h(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=W(e),t&&this.__updateBrowserHistory(e,1===n),c("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const i=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),i.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Y(this.__outlet&&this.__outlet.children),this.location=W(Object.assign(r,{resolver:this})),c("error",Object.assign({router:this,error:e},r)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const r=n!==t?n:e,i=X(Z(n.chain),n.resolver)===n.pathname,s=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===m?i?e:null!==t.parent?s(e,t.parent,n):n:n));return s(n).then((e=>{if(null===e||e===m)throw p(r);return e&&e!==m&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const n=e.result;return n instanceof HTMLElement?(function(e,t){t.location=W(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,n),Promise.resolve(e)):n.redirect?this.__redirect(n.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):n instanceof Error?Promise.reject(n):Promise.reject(new Error(t(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(n)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),a=t=>J(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element);t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},n[t]);for(let t=0;t<r.length;t++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:a},r[t]),n[t].element.location=W(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=W(e,n[t].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:a},r[t]),r[t].element&&(r[t].element.location=W(e,r[t].route)));return i.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,r){const i=W(t);return e.then((e=>{if(this.__isLatestRender(t))return G("onBeforeLeave",[i,n,this],r.element)(e)})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,r){const i=W(t,r.route);return e.then((e=>{if(this.__isLatestRender(t))return G("onBeforeEnter",[i,n,this],r.element)(e)}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,n,r){if(n>256)throw new Error(t(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(n||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(t(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const i=r?"replaceState":"pushState";window.history[i](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const i=t&&t.chain[r].element;if(i){if(i.parentNode!==n)break;e.chain[r].element=i,n=i}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const i=e.chain[t].element;i&&(r.appendChild(i),this.__addedByRouter.set(i,!0),r===n&&this.__appearingContent.push(i),r=i)}}__removeDisappearingContent(){this.__disappearingContent&&Y(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Y(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=W(e);K(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Y(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=W(e,e.chain[t].route);K(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],i=e.chain;let s;for(let e=i.length;e>0;e--)if(i[e-1].route.animate){s=i[e-1].route.animate;break}if(t&&n&&s){const e=u(s)&&s.leave||"leaving",i=u(s)&&s.enter||"entering";r.push(H(t,e)),r.push(H(n,i))}return Promise.all(r).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;h(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){D(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=B(this)),X(this.__urlForName(e,t),this)}urlForPath(e,t){return X(Q.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=h(e)?this.__createUrl(e,"http://a"):e;return c("go",{pathname:t,search:n,hash:r})}}const ee=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,te=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ne(e,t){if("function"!=typeof e)return;const n=ee.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(te?!(te&&Object.keys(te).map((e=>te[e])).filter((e=>e.productionMode)).length>0):!ne((function(){return!0})))}catch(e){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.2"}),function(e,t){if(window.Vaadin.developmentMode)ne(e,t)}((function(){})),Q.NavigationTrigger={POPSTATE:v,CLICK:g};const re="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,ie=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},se=`{{lit-${String(Math.random()).slice(2)}}}`,ae=`\x3c!--${se}--\x3e`,oe=new RegExp(`${se}|${ae}`),le="$lit$";class ce{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let s=0,a=-1,o=0;const{strings:l,values:{length:c}}=e;for(;o<c;){const e=i.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)ue(t[e].name,le)&&r++;for(;r-- >0;){const t=l[o],n=pe.exec(t)[2],r=n.toLowerCase()+le,i=e.getAttribute(r);e.removeAttribute(r);const s=i.split(oe);this.parts.push({type:"attribute",index:a,name:n,strings:s}),o+=s.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(se)>=0){const r=e.parentNode,i=t.split(oe),s=i.length-1;for(let t=0;t<s;t++){let n,s=i[t];if(""===s)n=he();else{const e=pe.exec(s);null!==e&&ue(e[2],le)&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-le.length)+e[3]),n=document.createTextNode(s)}r.insertBefore(n,e),this.parts.push({type:"node",index:++a})}""===i[s]?(r.insertBefore(he(),e),n.push(e)):e.data=i[s],o+=s}}else if(8===e.nodeType)if(e.data===se){const t=e.parentNode;null!==e.previousSibling&&a!==s||(a++,t.insertBefore(he(),e)),s=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(n.push(e),a--),o++}else{let t=-1;for(;-1!==(t=e.data.indexOf(se,t+1));)this.parts.push({type:"node",index:-1}),o++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const ue=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},de=e=>-1!==e.index,he=()=>document.createComment(""),pe=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function me(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,133,null,!1);let s=ge(r),a=r[s],o=-1,l=0;const c=[];let u=null;for(;i.nextNode();){o++;const e=i.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(c.push(e),null===u&&(u=e)),null!==u&&l++;void 0!==a&&a.index===o;)a.index=null!==u?-1:a.index-l,s=ge(r,s),a=r[s]}c.forEach((e=>e.parentNode.removeChild(e)))}const fe=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},ge=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(de(t))return n}return-1},_e=new WeakMap,ve=e=>"function"==typeof e&&_e.has(e),ye={},be={};class we{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=re?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,o=r.nextNode();for(;s<n.length;)if(i=n[s],de(i)){for(;a<i.index;)a++,"TEMPLATE"===o.nodeName&&(t.push(o),r.currentNode=o.content),null===(o=r.nextNode())&&(r.currentNode=t.pop(),o=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(o,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return re&&(document.adoptNode(e),customElements.upgrade(e)),e}}const xe=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),Se=` ${se} `;class Ce{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const s=pe.exec(e);t+=null===s?e+(n?Se:ae):e.substr(0,s.index)+s[1]+s[2]+le+s[3]+se}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==xe&&(t=xe.createHTML(t)),e.innerHTML=t,e}}const Ee=e=>null===e||!("object"==typeof e||"function"==typeof e),Ae=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Pe{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Te(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!Ae(e))return e}let r="";for(let i=0;i<t;i++){r+=e[i];const t=n[i];if(void 0!==t){const e=t.value;if(Ee(e)||!Ae(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Te{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===ye||Ee(e)&&e===this.value||(this.value=e,ve(e)||(this.committer.dirty=!0))}commit(){for(;ve(this.value);){const e=this.value;this.value=ye,e(this)}this.value!==ye&&this.committer.commit()}}class Ne{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(he()),this.endNode=e.appendChild(he())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=he()),e.__insert(this.endNode=he())}insertAfterPart(e){e.__insert(this.startNode=he()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;ve(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ye,e(this)}const e=this.__pendingValue;e!==ye&&(Ee(e)?e!==this.value&&this.__commitText(e):e instanceof Ce?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Ae(e)?this.__commitIterable(e):e===be?(this.value=be,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof we&&this.value.template===t)this.value.update(e.values);else{const n=new we(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)n=t[r],void 0===n&&(n=new Ne(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){ie(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Re{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;ve(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ye,e(this)}if(this.__pendingValue===ye)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=ye}}class ke extends Pe{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Oe(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Oe extends Te{}let je=!1;(()=>{try{const e={get capture(){return je=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class $e{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;ve(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ye,e(this)}if(this.__pendingValue===ye)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=qe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=ye}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const qe=e=>e&&(je?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function Ie(e){let t=Ue.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Ue.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(se);return n=t.keyString.get(r),void 0===n&&(n=new ce(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const Ue=new Map,Ve=new WeakMap,Le=new class{handleAttributeExpressions(e,t,n,r){const i=t[0];return"."===i?new ke(e,t.slice(1),n).parts:"@"===i?[new $e(e,t.slice(1),r.eventContext)]:"?"===i?[new Re(e,t.slice(1),n)]:new Pe(e,t,n).parts}handleTextExpression(e){return new Ne(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const Me=(e,...t)=>new Ce(e,t,"html",Le),Be=(e,t)=>`${e}--${t}`;let Fe=!0;void 0===window.ShadyCSS?Fe=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Fe=!1);const De=e=>t=>{const n=Be(t.type,e);let r=Ue.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Ue.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(se);if(i=r.keyString.get(s),void 0===i){const n=t.getTemplateElement();Fe&&window.ShadyCSS.prepareTemplateDom(n,e),i=new ce(t,n),r.keyString.set(s,i)}return r.stringsArray.set(t.strings,i),i},He=["html","svg"],ze=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const We={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Je=(e,t)=>t!==e&&(t==t||e==e),Ke={attribute:!0,type:String,converter:We,reflect:!1,hasChanged:Je};class Ge extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=Ke){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this.requestUpdateInternal(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Ke}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Je){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||We,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||We.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Ke){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const i=this.constructor;n=n||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Ge.finalized=!0;const Ye=Element.prototype;Ye.msMatchesSelector||Ye.webkitMatchesSelector;const Xe=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol();class Qe{constructor(e,t){if(t!==Ze)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Xe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(e,...t)=>{const n=t.reduce(((t,n,r)=>t+(e=>{if(e instanceof Qe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]);return new Qe(n,Ze)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const tt={};class nt extends Ge{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight(((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e)),n),n=t(e,new Set),r=[];n.forEach((e=>r.unshift(e))),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!Xe){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new Qe(String(t),Ze)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Xe?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==tt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return tt}}nt.finalized=!0,nt.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=Ve.has(t),s=Fe&&11===t.nodeType&&!!t.host,a=s&&!ze.has(r),o=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=Ve.get(t);void 0===r&&(ie(t,t.firstChild),Ve.set(t,r=new Ne(Object.assign({templateFactory:Ie},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,o,Object.assign({templateFactory:De(r)},n)),a){const e=Ve.get(o);Ve.delete(o);((e,t,n)=>{ze.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:s}=i;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,e);const a=document.createElement("style");for(let e=0;e<s;e++){const t=i[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{He.forEach((t=>{const n=Ue.get(Be(t,e));void 0!==n&&n.keyString.forEach((e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{n.add(e)})),me(e,n)}))}))})(e);const o=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const s=document.createTreeWalker(r,133,null,!1);let a=ge(i),o=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===n&&(o=fe(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===l;){if(o>0){for(;-1!==a;)i[a].index+=o,a=ge(i,a);return}a=ge(i,a)}}(n,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){o.insertBefore(a,o.firstChild);const e=new Set;e.add(a),me(n,e)}})(r,o,e.value instanceof we?e.value.template:void 0),ie(t,t.firstChild),t.appendChild(o),Ve.set(t,e)}!i&&s&&window.ShadyCSS.styleElement(t.host)},customElements.define("article-destination",class extends nt{static get styles(){return et`
        section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        margin: 5vh 13vw;
    }

        article {
        display: flex;
        height: 25vh;
        margin-bottom: 20px;
        justify-content: space-between;
    }

    .asideText {
        padding: 25px;
        background-color: #f5f5f5;
        overflow: hidden;
    }

        img {
        object-fit: fill;
    }


    .destinationTitle {
        text-align: center;
        margin: 70px 0;
        color: #5850b3;
    }

        article a {
        color: black;
    }

        article a:hover {
        color: #5850b3;
    }

        img:hover {
        z-index: 2;
        box-shadow: 0 3px 5px 5px grey;
    } `}static get properties(){return{asideText:{type:Object},sursa:{type:String}}}render(){return console.log(this.asideText),console.log(this.sursa),Me` 
         <article>
               <img src="${this.sursa}"
                        alt="salut"/>
            
            <div class="${this.asideText.clasa}">
                <h2>${this.asideText.title}</h2> <br/>
                <p>
                   ${this.asideText.text}
s
                </p>

                Find more info <a href="https://crouton.net/">here</a> <br/><br/> <br/>

            </div>
            </article>
        `}}),customElements.define("destinations-posts",class extends nt{static get styles(){return et`;`}static get properties(){return{articles:{type:Array}}}connectedCallback(){super.connectedCallback(),Promise.all(this.ids.map((e=>fetch("https://devschool-2020.firebaseio.com/talmacel-sergiu/destinations/"+e+".json").then((e=>e.json())).then((e=>this.articles.push(e))))))}constructor(){super(),this.ids=["-MOBz-Ks2hwXb-ldEzla","-MOBz-SUC4-YdZjDv-IF","-MOBz-_-B6G6cXtPRBLa","-MOBz-glyxK1XYgUrRsw","-MOBz-oaykkqqWSa3QFs","-MOBz-wLhL4nJ2-GHHrG"],this.articles=[]}render(){return console.log(this.articles),Me`
         ${this.articles.map((e=>Me`
             <article-destination .asideText ="${e.asideText}" .sursa="${e.sursa}"></article-destination>
             `))}
        `}}),customElements.define("article-post",class extends nt{static get properties(){return{articleClass:{type:String},asideText:{type:Object},imageObj:{type:Object}}}constructor(){super()}static get styles(){return et`
        
        * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

        
        .img_div {
    grid-area: img;
        }
        
        .img_div:hover {
            z-index: 2;
            box-shadow: 0 3px 5px 5px grey;
        }
        
        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        
        }
        
        
        .asideText {
            grid-area: asideText;
            overflow: hidden;
            background-color: #f5f5f5;
            text-align: center;
            padding: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        article {
            display: grid;
            grid-template-areas: "img asideText";
            grid-template-columns: 53% 47%;
            grid-template-rows: 500px;
        
        }
        
        .reverseArticle {
            grid-template-areas: "asideText img ";
            grid-template-columns: 47% 53%;
        
        
        }
        
        .articleContainer {
            display: grid;
            grid-template-areas: "article" "article" "article";
        }
        
                
                `}render(){return console.log(this.articleClass),console.log(this.imageObj),Me` 
         <article class="${this.articleClass}">
                <div class="${this.imageObj.clasa} "><img
                        src="${this.imageObj.sursa}"
                        alt="salut"/></div>

                <div class="${this.asideText.clasa}">
                    <h2>${this.asideText.title}</h2> <br/>
                    <h4>${this.asideText.subtitle}</h4> <br/>
                    <p>
                       ${this.asideText.text}

                    </p>

                </div>

            </article>
        `}}),customElements.define("index-posts",class extends nt{static get style(){return et`;`}static get properties(){return{articles:{type:Array}}}connectedCallback(){super.connectedCallback(),fetch("https://devschool-2020.firebaseio.com/talmacel-sergiu/articles.json").then((e=>e.json())).then((e=>{this.articles=e,console.log(e)}))}constructor(){super(),this.articles=[]}render(){return Me`
         ${this.articles.map((e=>Me`
             <article-post .articleClass="${e.articleClass}" .asideText = "${e.asideText}" .imageObj="${e.imageObj}"></article-post>
             `))}
        `}}),customElements.define("app-header",class extends nt{static get properties(){return{navElems:{type:Array},ttl:{type:Object},containerClass:{type:String}}}constructor(){super(),this.containerClass="hcontainer",this.ttl={text:"Traveloo",cls:"title"},this.navElems=[{name:"Home",link:"/index"},{name:"Destinations",link:"/destinations"},{name:"Language",link:"#"}]}render(){return Me` 
<header>
     <div class=${this.containerClass}>

        <nav>
            <ul>
    
    
            ${this.navElems.map((e=>Me`
                
                <li><a href="${e.link}">${e.name}</a></li>
                
                `))}               
            </ul>
        </nav>


        <div class="${this.ttl.cls}"><h1>${this.ttl.text}</h1></div>

    </div>
</header>`}static get styles(){return et`
         *{
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
        
        
        nav ul {
            display: flex;
            list-style-type: none;
            flex-direction: row;
            justify-content: center;
        }
        
        a {
            text-decoration: none;
            color: white;
            margin-right: 15px;
        }
        
        a:hover {
            color: #ffd884;
        
        }
        
        nav ul li {
            margin: 2%;
            font-family: sans-serif;
            font-size: 1.3em;
        }
        
        div h1 {
            color: white;
        
        }
        
        li a {
            border: 1px solid white;
            padding: 10px;
        }
        
        nav {
            width: 80%;
        
            /*background-color: red;*/
            margin: 30px auto;
            /*background: yellow;*/
            min-width: 300px;
        
        }
        header {
            background-color: #5850b3;
        
            min-width: 700px;
        }
        
        .hcontainer {
        
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            min-width: 700px;
            height: 45vh;
            align-items: center;
        
        }
        
        .hcontainer div h1 {
            margin-right: 50px;
            margin-top: 80px;
            /*background: red;*/
        }
                        `}}),customElements.define("app-footer",class extends nt{static get styles(){return et`
        
        footer {
    height: 10vh;
    text-align: center;
    line-height: 10vh;
    margin-top: 50px;
    color: whitesmoke;
    background-color: #5850b3;
    
    .copywrite
    {
    font-family: Arial;
}
        `}static get properites(){return{footerText:{type:String}}}constructor(){super(),this.footerText=" 2020 Travel website - All rights reserved"}render(){return Me`
        <footer>
        <span class="copywrite">&copy;</span>
            ${this.footerText}            
        </footer>
        `}}),customElements.define("main-component",class extends nt{render(){return Me`
        
        <app-header></app-header>
<div class="line"></div>

<main>


    <section class="introSection">
        <h2> Plan your next trip with Traveloo!</h2> <br/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim velit, maximus eget lorem ultrices,
            hendrerit porta nunc. Sed venenatis eget massa sit amet commodo. Vivamus dapibus mattis aliquam. Maecenas
            consectetur magna quis lectus elementum porta. Aliquam fermentum, lorem sed ultrices tincidunt, lacus diam
            commodo metus, nec volutpat mauris sapien eget ex. Donec pulvinar volutpat nisl eget auctor. Mauris
            tristique tortor at eros euismod, aliquam vestibulum lorem vestibulum.


        </p>
    </section>

    <section>
        <div class="articleContainer">

            <article>
                <div class="img_div"><img
                        src="https://i.picsum.photos/id/608/1200/900.jpg?hmac=4L3lIqP3LkdecrcxKL95gVjwKZJUNca9yCaIoz6-KUY"
                        alt="salut"/></div>

                <div class="asideText">
                    <h2>Article 1</h2> <br/>
                    <h4>Subtitle article 1</h4> <br/>
                    <p>
                        Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam
                        pharetra
                        erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum
                        molestie
                        interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo
                        lacus
                        aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget
                        convallis
                        nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies
                        facilisis
                        magna eleifend aliquam.


                    </p>

                </div>

            </article>

            <article class="reverseArticle">

                <div class="img_div"><img
                        src="https://i.picsum.photos/id/295/1200/900.jpg?hmac=iKGvGlmnukR7LzynJfJ9Z7HnsVr9ZjDHllo8AGIE7po"
                        alt="ocean"/></div>


                <div class="asideText">
                    <h2>Article 2</h2> <br/>
                    <h4>Subtitle article 2</h4> <br/>
                    <p>
                        Fusce feugiat dui sit amet enim rutrum vulputate. In nec dolor id arcu sagittis rhoncus et sit
                        amet
                        magna. Phasellus ac purus ut lectus aliquam condimentum a et est. Vestibulum a tempor dolor.
                        Praesent
                        nulla arcu, egestas ac laoreet nec, iaculis pretium mi. Donec vitae libero lorem. Cras
                        tincidunt, felis
                        ac egestas lobortis, libero tellus mattis leo, vitae dapibus libero ante sit amet ex.
                        Suspendisse ut
                        placerat tellus, consectetur hendrerit dui. In ultricies eros ut ante malesuada ultrices. Nullam
                        ipsum
                        mauris, egestas non magna sed, blandit venenatis lacus.


                    </p>

                </div>

            </article>

            <article>
                <div class="img_div"><img
                        src="https://i.picsum.photos/id/323/1200/900.jpg?hmac=TYBz_ypTHr_a9pp9ZF7nnXROO9WyR-9GCPjy_HK6R9w"
                        alt="girl"/></div>

                <div class="asideText">
                    <h>Article 3</h>
                    <br/>
                    <h4>Subtitle article 3</h4> <br/>
                    <p>
                        Phasellus elit eros, fringilla dignissim ligula id, finibus vulputate elit. Suspendisse purus
                        elit,
                        convallis ac sodales in, vehicula eu odio. Maecenas id leo eu urna elementum facilisis id sed
                        ante.
                        Morbi sagittis tortor ac ligula molestie hendrerit. Cras at mi semper, euismod lorem nec,
                        interdum nisl.
                        In hac habitasse platea dictumst. In fermentum neque id maximus viverra. Nulla sed arcu
                        malesuada, porta
                        justo at, hendrerit tellus.

                    </p>
                </div>
            </article>

            <index-posts></index-posts>


        </div>



    </section>

</main>


<app-footer></app-footer>

<!--<script type="module" src="../src/app-header.js"></script>-->
<!--<script type="module" src="../src/app-footer.js"></script>-->
<!--<script type="module" src="../src/index-posts.js"></script>-->



        
        `}}),customElements.define("destinations-component",class extends nt{render(){return Me`
        <app-header></app-header>


<div class="line"></div>

<main>

    <h2 class="destinationTitle">Destinations</h2>

    <section>
        <article>
            <img src="https://i.picsum.photos/id/562/200/200.jpg?hmac=F4ylYRNFPH6rDzYo48_NUieJXXI2yaMl9ElwGeFQHZo"
                 alt="salut"/>

            <div class="asideText">
                <h2>Destination 1</h2> <br/>
                <p>
                    Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra
                    erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum molestie
                    interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus
                    aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis
                    nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis
                    magna eleifend aliquam.

                </p>
                <br/>
                Find more info <a href="https://crouton.net/">here</a>
            </div>

        </article>

        <article>
            <img src="https://i.picsum.photos/id/103/200/200.jpg?hmac=iAYeZbg7h6KXJzEJuemMnhxfHUPDu6OkgQ_TfAMWlRM"
                 alt="salut"/>

            <div class="asideText">

                <h2>Destination 2</h2> <br/>
                <p>
                    Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra
                    erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum molestie
                    interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus
                    aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis
                    nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis
                    magna eleifend aliquam.


                </p>
                <br/>
                Find more info <a href="https://crouton.net/">here</a>

            </div>
        </article>

        <article>
            <img src="https://i.picsum.photos/id/863/200/200.jpg?hmac=b2PqP--PkLWi3zKCrto-MSpLXkrtt4kYpKbUkZa2Yjo"
                 alt="salut"/>

            <div class="asideText">

                <h2>Destination 3</h2> <br/>
                <p>
                    Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra
                    erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum molestie
                    interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus
                    aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis
                    nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis
                    magna eleifend aliquam.


                </p>
                <br/>
                Find more info <a href="https://crouton.net/">here</a> <br/><br/><br/>
            </div>

        </article>


        <article>
            <img src="https://i.picsum.photos/id/1054/200/200.jpg?hmac=7qtHUdgOyKxMVpcUELySqbknGm7xI76LbA9CE0uag_o"
                 alt="salut"/>


            <div class="asideText">

                <h2>Destination 4</h2> <br/>
                <p>
                    Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra
                    erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum molestie
                    interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus
                    aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis
                    nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis
                    magna eleifend aliquam.


                </p>
                <br/>
                Find more info <a href="https://crouton.net/">here</a> <br/><br/> <br/>
            </div>

        </article>

        <article>

            <img src="https://i.picsum.photos/id/984/200/200.jpg?hmac=ffnu-AL0Ppy1NASA-nJXcj_BHBepOjLaPhPjYWDq1T4"
                 alt="salut"/>


            <div class="asideText">

                <h2>Destination 5</h2> <br/>
                <p>
                    Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra
                    erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum molestie
                    interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus
                    aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis
                    nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis
                    magna eleifend aliquam.

                </p>
                <br/>
                Find more info <a href="https://crouton.net/">here</a> <br/><br/> <br/>
            </div>

        </article>

        <article>
            <img src="https://i.picsum.photos/id/114/200/200.jpg?hmac=quI2SDil5gvhyJiPY4KNxdaMtGBybPSvAS7R02lF1vo"
                 alt="salut"/>


            <div class="asideText">

                <h2>Destination 6</h2> <br/>
                <p>
                    Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra
                    erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum molestie
                    interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus
                    aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis
                    nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis
                    magna eleifend aliquam.



                </p>
                <br/>
                Find more info <a href="https://crouton.net/">here</a> <br/><br/> <br/>
            </div>

        </article>


        <article>
            <img src="https://i.picsum.photos/id/964/200/200.jpg?hmac=Xpyys0fUK6t9mTJx-ZmJH2T9G2Hp7bfieNlb-dHqBek"
                 alt="salut"/>

            <div class="asideText">

                <h2>Destination 7</h2> <br/>
                <p>
                    Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra
                    erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum molestie
                    interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus
                    aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis
                    nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis
                    magna eleifend aliquam.


                </p>
                <br/>
                Find more info <a href="https://crouton.net/">here</a> <br/><br/> <br/>
            </div>

        </article>

        <article-destination></article-destination>
        <destinations-posts></destinations-posts>



    </section>



</main>


<app-footer></app-footer>
        `}}),customElements.define("main-destination",class extends nt{render(){return Me`

<main>
        
        <h2>Dst</h2>
        
        </main>
        
        `}});const rt=document.getElementById("outlet");new Q(rt).setRoutes([{path:"/",component:"main-component"},{path:"/destinations",component:"destinations-component"}]),console.log(rt)})();