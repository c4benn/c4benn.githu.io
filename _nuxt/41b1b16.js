(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{348:function(t,e,r){var content=r(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("80512780",content,!0,{sourceMap:!1})},422:function(t,e,r){"use strict";r(348)},423:function(t,e,r){var o=r(42)(!1);o.push([t.i,".root[data-dio]{padding:1.5rem 1.25rem 2.5rem;margin-bottom:2rem;position:relative;display:grid}.root[data-dio]:before{border-bottom:var(--ui-divide)}.header[data-dio]{display:flex;align-items:center;opacity:var(--t-title)}.v-msg[data-dio]{display:inline-block;font-size:.9rem;color:var(--v-msg-color);margin-left:.5rem}.v-msg[data-dio]>span{opacity:var(--t-body)}.alert[data-dio]{margin:1.75rem 0 2.25rem;padding:1.25rem 1rem;position:relative;isolation:isolate;--alert-color:var(--info);border-left:.5rem solid var(--alert-color);line-height:1.4;font-size:.95rem;background-color:inherit}.alert[data-dio]>p{opacity:var(--t-body)}.alert[data-dio]>p:first-of-type{margin-bottom:.5rem}.alert[data-dio]:before{background-color:var(--alert-color);z-index:-1;opacity:.2}.alert[data-dio]:after{background-color:var(--theme-surface);z-index:-1}.dark-theme .alert[data-dio]:after{background-color:var(--theme-banner);box-shadow:none}.action-wrapper[data-dio]{display:grid;grid-template-columns:repeat(auto-fill,minmax(max(224px,45vw),1fr));grid-gap:1.5rem 1rem;gap:1.5rem 1rem;margin-bottom:.5rem}.action[data-dio]{width:100%;background-color:var(--info);color:#fff;max-width:max(85vw,285px);justify-self:center}.action-2[data-dio]:before{background-color:var(--info)!important}.action-2[data-dio]{background-color:inherit!important;color:var(--info)}.wrapper[data-dio]{display:grid;grid-row-gap:.25rem;row-gap:.25rem;background-color:var(--theme-banner);padding:1rem 0 1rem 1rem;margin:2rem 0 2.5rem;border-radius:var(--rounded)}.light-theme .wrapper[data-dio]{box-shadow:var(--raise-light)}.edit-action[data-dio]{text-decoration:underline!important;min-width:128px;margin:0 auto}.edit-action[data-dis]:before{opacity:.05}.item[data-dio]{display:grid;grid-template-columns:auto 1fr;grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;align-items:center;font-weight:400;font-size:.975rem;letter-spacing:.4px;line-height:1.5;padding:0 1rem .25rem 0;position:relative;opacity:var(--t-body);min-height:3rem}.item[data-dio]:before{border-bottom:1.5px dotted;opacity:.35}.desc[data-dio]{font-weight:500;font-size:1rem;text-align:right}",""]),t.exports=o},559:function(t,e,r){"use strict";r.r(e);r(16),r(11),r(12),r(17),r(10),r(18);var o=r(6),main=(r(36),r(32),r(33),r(37),r(0));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"DeliveryInfo",props:{validation:{type:Object,required:!0}},computed:{deliveryInfo:function(){return this.$store.state.savedDeliveryInfo},user:function(){return this.$store.state.user}},mounted:function(){this.$store.commit("FETCHED",{value:"deliveryInfo",path:"components"})},render:function(t){var e,r,o=this,n={"data-dio":""},div=function(e,r){return t("div",e,r)},span=function(e,r){return t("span",e,r)},p=function(e,r){return t("p",e,r)},l=function(e,r){return t("ui-btn",e,r)},c=function(t){var template=t.template;o.$router.push({query:{dialog:template}})},m="We will need a valid address to deliver your order.",f=this.deliveryInfo?null:[div({attrs:d({},n),staticClass:"alert rounded-right fill-before-after"},[this.user.session?[p(m),p("Enter your delivery info to be saved for next time. 😉")]:[p(["".concat(m," You may choose to order as anonymous (without creating an account), or sign in to save your delivery info for next time.")]),!this.user.session&&p(["However, anonymous orders can only be shipped to residents in Lagos."])]]),div({attrs:d({},n),staticClass:"action-wrapper"},[this.user.session?l({props:{color:"primary",flat:!0,simpleButton:!0,actionButton:!0},attrs:d({},n),staticClass:"action action-1",on:{"!click":function(){c({template:"delivery-info"})}}},["Add Delivery Info"]):["Sign in","Anonymous order"].map((function(t,e){return l({key:e,props:{color:1==e?"primary":void 0,background:0==e?"primary":void 0,flat:!0,simpleButton:!0,actionButton:!0,text:1==e,tag:"nuxt-link",to:"".concat(o.$route.path,"?dialog=").concat(t.toLowerCase().replace(/\s+/g,"-"))},attrs:d(d({},n),{},{title:t}),staticClass:"action action-".concat(e+1),on:{}},[t])}))])],v=this.deliveryInfo?[div({attrs:d({},n),staticClass:"wrapper fill-before"},[["name","tel","address"].map((function(e,r){var l,c,title="tel"==e?"Phone":Object(main.capitalize)(e),path="address"==e?"street-address":e,content=o.deliveryInfo[path];return p({key:r,attrs:d({},n),staticClass:"item __".concat(title.toLowerCase()),class:[{"fill-before":2!=r}]},["".concat(title,":"),p({attrs:d({},n),staticClass:"desc"},2==r?["".concat(o.deliveryInfo["address-level1"],", ").concat(o.deliveryInfo["address-level2"],","),(l={attrs:d({},n)},t("br",l,c)),"".concat(content,".")]:"tel"==e?"".concat(content).replace(/\)/,") ").replace(/\+/,""):"".concat(content))])}))]),l({props:{color:"info",flat:!0,simpleButton:!0,filledText:!0,shape:"pill"},attrs:d({},n),staticClass:"edit-action",on:{"!click":function(){return c({template:"delivery-info"})}}},"Edit")]:null;return div({attrs:d({},n),staticClass:"root fill-before"},[function(e,r){return t("h2",e,r)}({attrs:d({},n),staticClass:"header"},[(e={props:{name:"axisArrowInfo"},attrs:d({},n),staticClass:"title-deco"},t("ui-icon",e,r)),"Delivery info",function(e,r){return t("ui-transition",e,r)}({props:{transition:"slide-y(-4px)",ease:"ease"},scopedSlots:{default:function(t){return o.validation.text?div({key:o.validation.timeStamp,attrs:d({},n),staticClass:"v-msg",class:[{vibrate:/afterEnter/i.test(t)}]},[span(o.validation.text)]):null}}})]),f,v])}},c=(r(422),r(9)),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);