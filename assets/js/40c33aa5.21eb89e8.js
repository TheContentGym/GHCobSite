"use strict";(self.webpackChunkcoblt_website=self.webpackChunkcoblt_website||[]).push([[96696],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){return function(n){var t=m(n.components);return r.createElement(e,o({},n,{components:t}))}},m=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(t),u=a,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},25036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={title:"Relay v15.0",author:"The Relay Team",hide_table_of_contents:!1},s=void 0,d={permalink:"/blog/2023/03/30/relay-15",source:"@site/blog/2023-03-30-relay-15.mdx",title:"Relay v15.0",description:"The Relay team is happy to announce the release of Relay v15. While this release is a major version bump and includes a couple of breaking changes, we expect that most users will be unaffected and will experience a seamless upgrade. You can find the full list of changes in the v15 Release Notes.",date:"2023-03-30T00:00:00.000Z",formattedDate:"March 30, 2023",tags:[],readingTime:3.315,hasTruncateMarker:!1,authors:[{name:"The Relay Team"}],frontMatter:{title:"Relay v15.0",author:"The Relay Team",hide_table_of_contents:!1},nextItem:{title:"Resilient Relay Applications",permalink:"/blog/2023/01/03/resilient-relay-apps"}},p={authorsImageUrls:[void 0]},m=[{value:"What&#39;s new in Relay 15?",id:"whats-new-in-relay-15",level:2},{value:"Support for <code>@refetchable</code> on interfaces",id:"support-for-refetchable-on-interfaces",level:3},{value:"Persisted query improvements",id:"persisted-query-improvements",level:3},{value:"Typesafe updates now support missing field handlers",id:"typesafe-updates-now-support-missing-field-handlers",level:3},{value:"Flow type improvements",id:"flow-type-improvements",level:3},{value:"Relay Resolver improvements",id:"relay-resolver-improvements",level:3},{value:"Terser docblock tags",id:"terser-docblock-tags",level:4},{value:"Define multiple resolvers per file",id:"define-multiple-resolvers-per-file",level:4}],u={toc:m};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Relay team is happy to announce the release of Relay v15. While this release is a major version bump and includes a couple of breaking changes, we expect that most users will be unaffected and will experience a seamless upgrade. You can find the full list of changes in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/releases/tag/v15.0.0"},"v15 Release Notes"),"."),(0,o.mdx)("h2",{id:"whats-new-in-relay-15"},"What's new in Relay 15?"),(0,o.mdx)("h3",{id:"support-for-refetchable-on-interfaces"},"Support for ",(0,o.mdx)("inlineCode",{parentName:"h3"},"@refetchable")," on interfaces"),(0,o.mdx)("p",null,"Previously it wasn't possible to add the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@refetchable")," directive on fragment definitions on server interface types."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'// schema.graphql\n\ninterface RefetchableInterfaceFoo @fetchable(field_name: "id") {\n    id: ID!\n}\n\nextend type Query {\n  fetch__RefetchableInterfaceFoo(id: ID!): RefetchableInterfaceFoo\n}\n\n// fragment\n\nfragment RefetchableFragmentFoo on RefetchableInterfaceFoo\n  @refetchable(queryName: "RefetchableFragmentFooQuery") {\n  id\n}\n')),(0,o.mdx)("h3",{id:"persisted-query-improvements"},"Persisted query improvements"),(0,o.mdx)("p",null,"If you use URL-based persisted queries, you can now specify custom headers to send with the request that persists the query. For example, this can be used to send auth headers to your query persistence URL endpoint."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"persistConfig: {\n  url: 'example.com/persist',\n  headers: {\n    Authorization: 'bearer TOKEN'\n  }\n}\n")),(0,o.mdx)("p",null,"For file-based persisted queries, we added a new feature flag, ",(0,o.mdx)("inlineCode",{parentName:"p"},"compact_query_text"),", that removes all whitespace from the persisted query text. This can make the file more than 60% smaller. This new feature flag can be enabled within your Relay config file."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"persistConfig: {\n  file: 'path/to/file.json',\n  algorithm: 'SHA256'\n},\nfeatureFlags: {\n  compact_query_text: true\n}\n")),(0,o.mdx)("h3",{id:"typesafe-updates-now-support-missing-field-handlers"},"Typesafe updates now support missing field handlers"),(0,o.mdx)("p",null,"Typesafe updaters now support missing field handlers. Previously, if you selected ",(0,o.mdx)("inlineCode",{parentName:"p"},"node(id: 4) { ... on User { name, __typename } }")," in a typesafe updater, but that user was fetched in a different way (e.g. with ",(0,o.mdx)("inlineCode",{parentName:"p"},"best_friend { name }"),"), you would not be able to access and mutate that user using the typesafe updater."),(0,o.mdx)("p",null,"In this release, we add support for missing field handlers in typesafe updaters, meaning that if a missing field handler is set up for node (as in ",(0,o.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/next/guided-tour/reusing-cached-data/filling-in-missing-data/#internaldocs-banner"},"this example"),"), you will be able to update the user's name with this missing field handler."),(0,o.mdx)("p",null,"In order to support this, the signature of ",(0,o.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guided-tour/reusing-cached-data/filling-in-missing-data"},"missing field handlers")," has been changed. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"record")," argument to the handler used to recieve a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Record")," type (which is an untyped grab-bag of data). It now receives a ",(0,o.mdx)("inlineCode",{parentName:"p"},"ReadOnlyRecordProxy"),". Furthermore, the field argument of type ",(0,o.mdx)("inlineCode",{parentName:"p"},"NormalizationLinkedField")," is now ",(0,o.mdx)("inlineCode",{parentName:"p"},"CommonLinkedField"),", which is a type containing the properties found in both ",(0,o.mdx)("inlineCode",{parentName:"p"},"ReaderLinkedField")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"NormalizationLinkedField"),"."),(0,o.mdx)("h3",{id:"flow-type-improvements"},"Flow type improvements"),(0,o.mdx)("p",null,"Flow users will now get types inferred from ",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql")," literals with more Relay APIs. No longer do Flow users need to explicitly type the return value of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"useQueryLoader"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"useRefetchableFragment"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"useBlockingPaginationFragment")," API methods."),(0,o.mdx)("h3",{id:"relay-resolver-improvements"},"Relay Resolver improvements"),(0,o.mdx)("p",null,"A significant portion of our development effort since our last release has gone into improving ",(0,o.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guides/relay-resolvers"},"Relay Resolvers")," (a mechanism for exposing derived data in the graph). It is worth noting that Relay Resolvers are still experimental and API changes might occur in the future."),(0,o.mdx)("h4",{id:"terser-docblock-tags"},"Terser docblock tags"),(0,o.mdx)("p",null,"The annotation for Relay Resolver functions has been simplified. In many scenarios you can now use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ParentType.field_name: ReturnType")," syntax to define what new field your Relay Resolver exposes."),(0,o.mdx)("p",null,"Before:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * @RelayResolver\n * @onType User\n * @fieldName favorite_page\n * @rootFragment myRootFragment\n */\n")),(0,o.mdx)("p",null,"After:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * @RelayResolver User.favorite_page: Page\n * @rootFragment myRootFragment\n */\n")),(0,o.mdx)("p",null,"In the above example, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Page")," type is a schema type. If your Relay Resolver doesn't return a schema type, you can use fixed ",(0,o.mdx)("inlineCode",{parentName:"p"},"RelayResolverValue")," value as your return type"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * @RelayResolver User.best_friend: RelayResolverValue\n * @rootFragment myRootFragment\n */\n")),(0,o.mdx)("h4",{id:"define-multiple-resolvers-per-file"},"Define multiple resolvers per file"),(0,o.mdx)("p",null,"Prior to this release we only allowed a single Relay Resolver per file and required the Relay Resolver function to be the default export. In Relay 15 you're now able to define multiple Relay Resolvers per file and use named exports."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * @RelayResolver User.favorite_page: Page\n * @rootFragment favoritePageFragment\n */\nfunction usersFavoritePage(){\n  ...\n}\n\n/**\n * @RelayResolver User.best_friend: RelayResolverValue\n * @rootFragment bestFriendFragment\n */\nfunction usersBestFriend(){\n  ...\n}\n\nmodule.exports = {\n  usersFavoritePage,\n  usersBestFriend\n}\n")),(0,o.mdx)("p",null,"Happy Querying!"))}c.isMDXComponent=!0}}]);