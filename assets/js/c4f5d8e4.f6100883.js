/*! For license information please see c4f5d8e4.f6100883.js.LICENSE.txt */
(self.webpackChunkcoblt_website=self.webpackChunkcoblt_website||[]).push([[64195],{62579:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(94184),i=n.n(a),l=n(67294),r=function(e){var t,n=i()("container",e.className,{darkBackground:"dark"===e.background,highlightBackground:"highlight"===e.background,lightBackground:"light"===e.background,paddingAll:e.padding.indexOf("all")>=0,paddingBottom:e.padding.indexOf("bottom")>=0,paddingLeft:e.padding.indexOf("left")>=0,paddingRight:e.padding.indexOf("right")>=0,paddingTop:e.padding.indexOf("top")>=0});return t=e.wrapper?l.createElement("div",{className:"wrapper"},e.children):e.children,l.createElement("div",{className:n,id:e.id},t)};r.defaultProps={background:null,padding:[],wrapper:!0};const c=r},29260:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(94578),i=n(94184),l=n.n(i),r=n(67294),c=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.renderBlock=function(e){var t=Object.assign({},{imageAlign:"left"},e),n=l()("blockElement",this.props.className,{alignCenter:"center"===this.props.align,alignRight:"right"===this.props.align,fourByGridBlock:"fourColumn"===this.props.layout,imageAlignSide:t.image&&("left"===t.imageAlign||"right"===t.imageAlign),imageAlignTop:t.image&&"top"===t.imageAlign,imageAlignRight:t.image&&"right"===t.imageAlign,imageAlignBottom:t.image&&"bottom"===t.imageAlign,imageAlignLeft:t.image&&"left"===t.imageAlign,threeByGridBlock:"threeColumn"===this.props.layout,twoByGridBlock:"twoColumn"===this.props.layout}),a=("top"===t.imageAlign||"left"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt),i=("bottom"===t.imageAlign||"right"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt);return r.createElement("div",{className:n,key:t.title},a,r.createElement("div",{className:"blockContent"},this.renderBlockTitle(t.title),t.content),i)},n.renderBlockImage=function(e,t,n){return e?r.createElement("div",{className:"blockImage"},t?r.createElement("a",{href:t},r.createElement("img",{src:e,alt:n})):r.createElement("img",{src:e,alt:n})):null},n.renderBlockTitle=function(e){return e?r.createElement("h2",null,e):null},n.render=function(){return r.createElement("div",{className:"gridBlock"},this.props.contents.map(this.renderBlock,this))},t}(r.Component);c.defaultProps={align:"left",contents:[],layout:"twoColumn"};const o=c},25651:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var a=n(67294);var i=n(62579),l=n(29260),r=(n(39960),n(86668)),c=n(44996),o=n(52263),s=n(9960);function m(){return a.createElement("div",{className:"homeBanner"})}var g=function(){var e=(0,o.default)().siteConfig;return a.createElement("div",null,a.createElement("div",null,a.createElement(m,null)),a.createElement("div",{className:"homeContainer"},a.createElement("div",{className:"homeSplashFade"},a.createElement("div",{className:"logo"},a.createElement("img",{src:(0,c.default)("img/CoFire.jpg")})),a.createElement("div",{className:"wrapper homeWrapper"},a.createElement("h2",{className:"projectTitle"},e.title,a.createElement("small",null,e.tagline),a.createElement("small",null,e.subtagline)),a.createElement("div",{className:"try-it"},a.createElement("h3",null,a.createElement("a",{className:"button",href:"https://webapp.coblt.io",target:"_blank"},"Coblt Webapp >")))))))},u=function(){var e=(0,o.default)().siteConfig,t=(0,c.useBaseUrlUtils)().withBaseUrl;(0,r.L)().isDarkTheme,e.customFields.users.filter((function(e){return e.pinned})).map((function(e,n){return a.createElement("a",{href:e.infoLink,key:n},a.createElement("img",{src:t(e.image),title:e.caption}),a.createElement("div",null,a.createElement("h6",null,e.caption),a.createElement("p",null,e.description)))}));return a.createElement("div",null,a.createElement(g,null),a.createElement("div",{className:"homePage mainContainer"},a.createElement(i.Z,{className:"textSection",background:"light"},a.createElement("h2",null,"Built by Technical Writers for Technical Writers"),a.createElement("p",null,"Coblt: AI-powered precision, clarity, and insights for technical writing: structure, audience, and health checks. Reshaping the future, with AI-powered finesse."),a.createElement(l.Z,{layout:"threeColumn",contents:[{title:"Rapid iterations",content:a.createElement("span",null,a.createElement("img",{src:"/img/RapidIterations.jpg",alt:"Image 1"}),a.createElement("p",null,"Coblt accelerates iteration by keeping you always in complete control of your content. Seamless content-quality automation enhances precision and data accuracy."))},{title:"Agile content creation ",content:a.createElement("span",null,a.createElement("img",{src:"/img/AgileContentCreation.jpg",alt:"Image 1"}),a.createElement("p",null,"Coblt integrates seamlessly with your authoring and production infra embodying agility. Its automated checks maintain precision and speed, adapting to changes without disruption. Coblt ensures your content remains dynamic, enhancing agility in a fast-paced business environment."))},{title:"AI-Infused Co-Writer",content:a.createElement("span",null,a.createElement("img",{src:"/img/WritingCompanion.jpg",alt:"Image 1"}),a.createElement("p",null,"Coblt, your AI ally,  infuses precision, handles quality checks seamlessly and adapts swiftly to revisions, mirroring evolving business landscape. AI-driven finesse upholds narrative brilliance, making content creation impactful."))}]}))))};const d=function(e){return a.createElement(s.Z,null,a.createElement(u,e))}},94184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var r=i.apply(null,n);r&&e.push(r)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);