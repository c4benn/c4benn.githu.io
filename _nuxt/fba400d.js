(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{340:function(t,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return l}));r(16),r(11),r(12),r(17),r(10),r(18);var e=r(6);function o(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(n){Object(e.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}function l(){var t=this,n=function(n,r){if(r&&(r.stopPropagation(),r.preventDefault()),!t.isSpringing){var e="up"==t.slideDirection&&t.dragDy<=-65;requestAnimationFrame((function(){e?(t.transitionDuration=200,t.dragDy=-120,t.transform="".concat(t.dragDy,"%"),t.touchActive=!1):(console.log(t.dragDy),!t.isSpringing&&t.worker.postMessage({name:"spring",component:"appNotification_".concat(t._uid),from:"".concat(t.dragDy,"%"),to:"0%",precision:.01,stiffness:t.stiffness*(t.dragDy/75*2),mass:1,damping:15,cssText:"transform: translate3d(-50%, {0}, 0px)"}),t.touchActive=!1),t.transitionDuration=e?200:0,t.currentTouchEvent="touch".concat(n)}))}},r={touchstart:function(n){n.stopPropagation(),n.preventDefault(),t.touchActive=!0,t.mouseY=n.touches[0].clientY,t.currentTouchEvent="touchstart",t.transitionDuration=0},"!touchend":function(t){n("end",t)},"!touchcancel":function(t){n("cancel",t)}};return this.touchActive&&(r=c(c({},r),{},{"&touchmove":function(n){n.stopPropagation(),t.touchActive&&!/touchend|touchcancel/i.test(t.currentTouchEvent)&&requestAnimationFrame((function(){t.currentTouchEvent="touchmove";var r=n.touches[0].clientY;t.dy=r-t.mouseY,t.mouseY>r?t.slideDirection="up":t.slideDirection="down",t.dragDy=t.dragDy+t.dy,t.mouseY=r,t.dragDy>=75?t.dragDy=75:t.transform="".concat(t.dragDy,"%")}))}})),r}},341:function(t,n,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("0a32f4ec",content,!0,{sourceMap:!1})},408:function(t,n,r){"use strict";r(341)},409:function(t,n,r){var e=r(42)(!1);e.push([t.i,".root[data-ann]{position:fixed;width:calc(100% - 2rem);top:1rem;left:50%;z-index:19999;isolation:isolate;display:grid;--extra-height:2rem;touch-action:none;max-width:512px;border-radius:.825rem;transform:translateX(-50%) translateZ(0);transform:translateX(-50%) translate3d(0,var(--y,0),0);box-shadow:0 1px 10px -1px rgba(0,0,0,.3),1px 2px 15px 0 rgba(0,0,0,.051),1px 2px 20px 1px rgba(0,0,0,.092)}.dark-theme .root[data-ann]{background:#636363}.light-theme .root[data-ann]{background:#2b2b2b}.root[data-ann].show-action{--extra-height:calc(3rem + 42px)}.root[data-ann].one-row{height:calc(var(--extra-height) + 32px)}.root[data-ann].two-rows{height:calc(var(--extra-height) + 64px)}.root[data-ann].will-change{will-change:transform}",""]),t.exports=e},551:function(t,n,r){"use strict";r.r(n);r(16),r(11),r(17),r(10),r(18);var e=r(6),o=r(19),c=(r(12),r(340));function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(e.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var h={name:"AppNotification",data:function(){return{touchActive:!1,currentTouchEvent:"",touchStartTimeStamp:null,transform:void 0,mouseY:0,dragDy:0,dy:0,slideDirection:"",transitionDuration:0,worker:null,springAnimationClassName:"",springTimeStamp:null,isSpringing:!1,currentSpring:[]}},computed:{rows:function(){return 1},showAction:function(){return!0},stiffness:function(){var t=200;return this.showAction&&(t-=100),2==this.rows&&(t-=75),t}},methods:{removeCurrentSpringRule:function(){var t=this;this.$store.commit("UPDATE_",{name:"styles",value:Object(o.a)(this.$store.state.styles).filter((function(n){return n.key!=t.springTimeStamp}))})}},render:function(t){var n=this;if(!this.touchActive)return null;var r,e;return r={attrs:f({},{"data-ann":""}),style:{"--y":this.transform,transition:"".concat(this.transitionDuration,"ms transform ease")},on:f(f({},c.default.call(this)),{},{animationstart:function(){n.transform=""},animationcancel:function(t){var r=n.currentSpring.frames/60*1e3,e=1e3*t.elapsedTime+60;e>r&&(e=r);var o=e/1e3*60;n.dragDy=n.currentSpring.positions[Math.floor(o)].value,n.transform="".concat(n.dragDy,"%"),n.springAnimationClassName="",requestAnimationFrame((function(){n.removeCurrentSpringRule(),n.springTimeStamp=null,n.isSpringing=!1}))},animationend:function(){n.transform="",n.dragDy=0,requestAnimationFrame((function(){n.removeCurrentSpringRule(),n.$nextTick((function(){n.springTimeStamp=null,n.springAnimationClassName="",requestAnimationFrame((function(){return n.isSpringing=!1}))}))}))}}),staticClass:"root",class:[{"will-change":this.touchActive||this.isSpringing,"one-row":1==this.rows,"two-rows":2==this.rows,"show-action":this.showAction},this.touchActive?"":this.springAnimationClassName]},t("div",r,e)}},m=(r(408),r(9)),component=Object(m.a)(h,undefined,undefined,!1,null,null,null);n.default=component.exports}}]);