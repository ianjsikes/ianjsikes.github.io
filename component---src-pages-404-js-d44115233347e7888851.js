(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(154),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?i.a.createElement("h1",{style:{marginTop:0}},i.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{margin:"3rem auto",maxWidth:800}},i.a.createElement("header",null,t),i.a.createElement("main",null,r))},e}(i.a.Component),l=n(157);n.d(e,"pageQuery",function(){return p});var u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c,{location:this.props.location,title:t},i.a.createElement(l.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"This is not the page you are looking for..."))},e}(i.a.Component),p=(e.default=u,"1097489062")},153:function(t,e,n){var a;t.exports=(a=n(156))&&a.default||a},154:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(33),c=n.n(s);n.d(e,"a",function(){return c.a});n(153),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},156:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(55),c=n(2),l=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},157:function(t,e,n){"use strict";var a=n(158),r=n(0),o=n.n(r),i=n(4),s=n.n(i),c=n(160),l=n.n(c);function u(t){var e=t.description,n=t.lang,r=t.meta,i=t.title,s=a.data.site,c=e||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},e.a=u},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Ian J Sikes",description:"web / mobile / game developer",author:"Ian J Sikes"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d44115233347e7888851.js.map