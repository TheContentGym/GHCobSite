"use strict";(self.webpackChunkcoblt_website=self.webpackChunkcoblt_website||[]).push([[50483],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),p=function(e){return function(r){var t=s(r.components);return n.createElement(e,o({},r,{components:t}))}},s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=i,v=p["".concat(a,".").concat(u)]||p[u]||m[u]||o;return t?n.createElement(v,d(d({ref:r},c),{},{components:t})):n.createElement(v,d({ref:r},c))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=v;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},83952:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n,i=t(87462),o=t(63366),a=(t(67294),t(3905)),d=["components"],l={id:"declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",slug:"/debugging/declarative-mutation-directives/"},c=void 0,p={unversionedId:"debugging/declarative-mutation-directives",id:"version-v11.0.0/debugging/declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",description:"If you see an error similar to:",source:"@site/versioned_docs/version-v11.0.0/debugging/declarative-mutation-directives.md",sourceDirName:"debugging",slug:"/debugging/declarative-mutation-directives/",permalink:"/docs/v11.0.0/debugging/declarative-mutation-directives/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/debugging/declarative-mutation-directives.md",tags:[],version:"v11.0.0",frontMatter:{id:"declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",slug:"/debugging/declarative-mutation-directives/"},sidebar:"version-v11.0.0/docs",previous:{title:"Inconsistent Typename Error",permalink:"/docs/v11.0.0/debugging/inconsistent-typename-error/"},next:{title:"Thinking in GraphQL",permalink:"/docs/v11.0.0/principles-and-architecture/thinking-in-graphql/"}},s={},u=[],m=(n="FbEnvHandlerExample",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),v={toc:u};function g(e){var r=e.components,t=(0,o.Z)(e,d);return(0,a.mdx)("wrapper",(0,i.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"If you see an error similar to:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"RelayFBHandlerProvider: No handler defined for `deleteRecord`. [Caught in: An uncaught error was thrown inside `RelayObservable`.]\n")),(0,a.mdx)("p",null,"or"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"RelayModernEnvironment: Expected a handler to be provided for handle `deleteRecord`.\n")),(0,a.mdx)("p",null,"This probably means that you are using a Relay environment to which a ",(0,a.mdx)("inlineCode",{parentName:"p"},"handlerProvider")," is passed. However, the handler provider does not know how to accept the handles ",(0,a.mdx)("inlineCode",{parentName:"p"},'"deleteRecord"'),", ",(0,a.mdx)("inlineCode",{parentName:"p"},'"appendEdge"')," or ",(0,a.mdx)("inlineCode",{parentName:"p"},'"prependEdge"'),". If this is the case, you should return ",(0,a.mdx)("inlineCode",{parentName:"p"},"MutationHandlers.DeleteRecordHandler"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"MutationHandlers.AppendEdgeHandler"),", or ",(0,a.mdx)("inlineCode",{parentName:"p"},"MutationHandlers.PrependEdgeHandler")," respectively (these can be imported from ",(0,a.mdx)("inlineCode",{parentName:"p"},"relay-runtime"),")."),(0,a.mdx)(m,{mdxType:"FbEnvHandlerExample"}))}g.isMDXComponent=!0}}]);