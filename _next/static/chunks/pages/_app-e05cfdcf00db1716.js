(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,i=o(n(7294)),u=n(4957),c=n(7995),l=n(647),f=n(1992),s=n(639),d=n(4019),p=n(227),v="undefined"!==typeof i.default.useTransition,h={};function y(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var m=i.default.forwardRef((function(e,t){var n,o=e.href,m=e.as,b=e.children,g=e.prefetch,j=e.passHref,x=e.replace,O=e.soft,w=e.shallow,_=e.scroll,E=e.locale,P=e.onClick,k=e.onMouseEnter,C=e.onTouchStart,S=e.legacyBehavior,M=void 0===S?!0!==Boolean(!1):S,I=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!M||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var R=!1!==g,L=v?i.default.useTransition():[],T=r(L,2)[1],A=i.default.useContext(l.RouterContext),D=i.default.useContext(f.AppRouterContext);D&&(A=D);var U,z=i.default.useMemo((function(){var e=u.resolveHref(A,o,!0),t=r(e,2),n=t[0],a=t[1];return{href:n,as:m?u.resolveHref(A,m):a||n}}),[A,o,m]),N=z.href,B=z.as,Z=i.default.useRef(N),H=i.default.useRef(B);M&&(U=i.default.Children.only(n));var F=M?U&&"object"===typeof U&&U.ref:t,K=s.useIntersection({rootMargin:"200px"}),W=r(K,3),X=W[0],q=W[1],G=W[2],$=i.default.useCallback((function(e){H.current===B&&Z.current===N||(G(),H.current=B,Z.current=N),X(e),F&&("function"===typeof F?F(e):"object"===typeof F&&(F.current=e))}),[B,F,N,G,X]);i.default.useEffect((function(){var e=q&&R&&u.isLocalURL(N),t="undefined"!==typeof E?E:A&&A.locale,n=h[N+"%"+B+(t?"%"+t:"")];e&&!n&&y(A,N,B,{locale:t})}),[B,N,q,E,R,A]);var Q={ref:$,onClick:function(e){M||"function"!==typeof P||P(e),M&&U.props&&"function"===typeof U.props.onClick&&U.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c,l,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c})};f?f(s):s()}}(e,A,N,B,x,O,w,_,E,D?T:void 0)},onMouseEnter:function(e){M||"function"!==typeof k||k(e),M&&U.props&&"function"===typeof U.props.onMouseEnter&&U.props.onMouseEnter(e),u.isLocalURL(N)&&y(A,N,B,{priority:!0})},onTouchStart:function(e){M||"function"!==typeof C||C(e),M&&U.props&&"function"===typeof U.props.onTouchStart&&U.props.onTouchStart(e),u.isLocalURL(N)&&y(A,N,B,{priority:!0})}};if(!M||j||"a"===U.type&&!("href"in U.props)){var V="undefined"!==typeof E?E:A&&A.locale,J=A&&A.isLocaleDomain&&d.getDomainLocale(B,V,A.locales,A.domainLocales);Q.href=J||p.addBasePath(c.addLocale(B,V,A&&A.defaultLocale))}return M?i.default.cloneElement(U,Q):i.default.createElement("a",Object.assign({},I,Q),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!i,f=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],h=o.useState(null),y=r(h,2),m=y[0],b=y[1];o.useEffect((function(){if(i){if(f.current&&(f.current(),f.current=void 0),l||p)return;return m&&m.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},c.push(n),u.set(n,t),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(m,(function(e){return e&&v(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==f.current||f.current(),f.current=void 0}}if(!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,l,n,t,p]);var g=o.useCallback((function(){v(!1)}),[]);return[b,p,g]};var o=n(7294),a=n(6286),i="function"===typeof IntersectionObserver;var u=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var i=r.default.createContext(null);t.GlobalLayoutRouterContext=i},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,a=(0,n(1598).Z)(n(7294)),i=o(n(1585)),u=n(8e3),c=n(5850),l=n(9470);n(9475);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce(s,[]).reverse().concat(f(t.inAmpMode).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=d.length;c<l;c++){var f=d[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(s)?(p.add(s),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=r({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,a.default.cloneElement(e,i)}return a.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=a.useContext(u.AmpStateContext),r=a.useContext(c.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function u(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var c;null==t||null==(c=t.mountedInstances)||c.add(e.children),u()}return a((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),a((function(){return t&&(t._pendingUpdate=u),function(){t&&(t._pendingUpdate=u)}})),i((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var o=!1,a=o?function(){}:r.useLayoutEffect,i=o?function(){}:r.useEffect},1188:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(9499),o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.createContext({}),f=function(e){var t=o.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=f(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=f(n),p=r,v=s["".concat(i,".").concat(p)]||s[p]||d[p]||a;return n?o.createElement(v,u(u({ref:t},l),{},{components:n})):o.createElement(v,u({ref:t},l))}));p.displayName="MDXCreateElement";var v,h=n(9008),y=n.n(h),m=n(1664),b=n.n(m),g=["title","titleId"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O,w,_=function(e){var t=e.title,n=e.titleId,r=x(e,g);return o.createElement("svg",j({width:"1em",height:"1em",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,v||(v=o.createElement("path",{d:"M43.275 29.212A18.765 18.765 0 0 1 20.788 6.725h0a18.752 18.752 0 1 0 22.487 22.488h0Z",fill:"#fff",stroke:"#000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},E=["title","titleId"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C=function(e){var t=e.title,n=e.titleId,r=k(e,E);return o.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 64 64","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,O||(O=o.createElement("path",{d:"M34.4 5.3c-1.1 2.9 0 10.2 1.6 10.2 1.9 0 2.2-10.6.3-11.2-.7-.3-1.6.2-1.9 1zM13 14.3c0 1.6 6.2 7.7 7.8 7.7 2.2 0 1.3-2.6-2.1-5.8-3.5-3.4-5.7-4.1-5.7-1.9z"})),w||(w=o.createElement("path",{d:"M52 17.5 47.5 22l-4-2c-14.4-7.4-31 9.2-23.6 23.5l2.1 3.9-4.5 4.6c-4.5 4.6-5.6 7-3.2 7C15.9 59 59 15.9 59 14.2c0-2.4-2.6-1.2-7 3.3zm-10.5 5.7c1.4.6 2.5 1.4 2.5 1.7 0 1-18.9 19.6-19.3 19-3.2-3.5-3.5-10.1-.7-14.7 3.8-6.2 11.4-8.8 17.5-6zM4.5 35c-1.3 2.1 1.1 3.1 6.1 2.8 3.6-.2 4.9-.7 4.9-1.8 0-1.9-9.9-2.7-11-1z"})))},S=n(5893);function M(){var e=(0,o.useState)(void 0),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e=window.document.documentElement.style.getPropertyValue("--initial-color-mode");n("dark"===e)}),[]),(0,o.useEffect)((function(){void 0!==t&&(t?(document.documentElement.setAttribute("data-theme","dark"),window.localStorage.setItem("theme","dark")):(document.documentElement.removeAttribute("data-theme"),window.localStorage.setItem("theme","light")))}),[t]),(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"0 4rem 0 4rem",flexShrink:0},children:[(0,S.jsx)("div",{className:"shake-it",style:{flex:9},children:(0,S.jsx)(b(),{href:"/",children:(0,S.jsx)("a",{children:(0,S.jsx)("h1",{style:{fontSize:"1.125rem"},children:"Henry"})})})}),(0,S.jsx)("div",{style:{flexShrink:"0",width:"15px"}}),(0,S.jsx)(b(),{href:"/blog",children:(0,S.jsx)("a",{children:(0,S.jsx)("h2",{style:{fontSize:"0.825rem",paddingRight:"5px"},children:"Blog"})})}),(0,S.jsx)("div",{style:{flexShrink:"0",width:"25px"}}),(0,S.jsx)("a",{href:"https://lee-note.notion.site/82a3ac3053a9457b9f1a4e1b3d7baedc?v=2acb0e3dd5c64d4d8582ee28f193acd7",target:"_blank",children:(0,S.jsx)("h2",{style:{fontSize:"0.825rem"},children:"Read"})}),(0,S.jsx)("div",{style:{flexShrink:"0",width:"15px"}}),(0,S.jsx)("div",{style:{flexShrink:"0",width:"15px"}}),t?(0,S.jsxs)("label",{style:{paddingBottom:"2.8px"},children:[(0,S.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){n(!!e.target.checked)}}),(0,S.jsx)(_,{style:{position:"relative",fontSize:"25px",top:"2.5px"}})]}):(0,S.jsxs)("label",{style:{paddingBottom:"2.8px"},children:[(0,S.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){n(!!e.target.checked)}}),(0,S.jsx)(C,{style:{position:"relative",fontSize:"25px",top:"3.465px"}})]})]})})}var I=function(e){var t=e.children,n=e.pageTitle,r=e.description;return(0,S.jsxs)("div",{className:"container",children:[(0,S.jsxs)(y(),{children:[(0,S.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,S.jsx)("meta",{charSet:"utf-8"}),(0,S.jsx)("meta",{name:"Description",content:r}),(0,S.jsx)("title",{children:n})]}),(0,S.jsxs)("main",{children:[(0,S.jsx)(M,{}),(0,S.jsx)("div",{className:"content",children:t})]}),(0,S.jsx)("footer",{style:{fontSize:"0.625rem",fontWeight:"200",flexShrink:0,margin:"4.125rem"},children:"2023 \xa9 Henry"})]})};n(7787),n(8313);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={code:function(e){return(0,S.jsx)("pre",L({},e))},pre:function(e){return(0,S.jsx)("div",L({},e))}};function A(e){var t=e.Component,n=e.pageProps;return(0,S.jsx)(s,{components:T,children:(0,S.jsx)(I,{pageTitle:"Henry's log",description:"Personal Blog",children:(0,S.jsx)(t,L({},n))})})}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1188)}])},8313:function(){},7787:function(){},9008:function(e,t,n){e.exports=n(2717)},1664:function(e,t,n){e.exports=n(7942)},9499:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(9898)}));var n=e.O();_N_E=n}]);