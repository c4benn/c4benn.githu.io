(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{353:function(r,e,t){var content=t(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,t(43).default)("596ee4a0",content,!0,{sourceMap:!1})},433:function(r,e,t){"use strict";t(353)},434:function(r,e,t){var n=t(42)(!1);n.push([r.i,'.root[data-lbr]{--color-duration:1.5s;position:fixed;top:0;left:0;width:100%;height:.1875rem;background:currentColor;background:var(--background,currentColor);border-top-right-radius:2px;border-bottom-right-radius:2px;pointer-events:none;transition:transform .2s linear,opacity .2s,background-color var(--color-duration) linear;overflow:hidden;z-index:20000;isolation:isolate;--x:-100%;transform:translate3d(var(--x),0,0);opacity:.9}.root[data-lbr].__hidden{display:none;transition:0s}.root[data-lbr].will-change{will-change:transform,opacity}.root[data-lbr].opacity-0{opacity:0}@-webkit-keyframes animating-loading-bar{0%{transform:translateX(-225%) translateZ(0)}to{transform:translateX(125%) translateZ(0)}}@keyframes animating-loading-bar{0%{transform:translateX(-225%) translateZ(0)}to{transform:translateX(125%) translateZ(0)}}.root[data-lbr].__animate:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;transform:translateX(-225%) translateZ(0);background-image:linear-gradient(90deg,hsla(0,0%,78.4%,0),hsla(0,0%,100%,.75),hsla(0,0%,78.4%,0));-webkit-animation:animating-loading-bar 2s infinite cubic-bezier(0,.55,.45,1) calc(var(--color-duration)*0.5);animation:animating-loading-bar 2s infinite cubic-bezier(0,.55,.45,1) calc(var(--color-duration)*0.5)}',""]),r.exports=n},565:function(r,e,t){"use strict";t.r(e);var n=t(1),main=(t(29),t(53),t(54),t(0)),o={name:"LoadingBar",data:function(){return{transform:-0,elapsedTime:0,hideLoader:!1,addAnimation:!1,renderBar:!1,background:void 0}},watch:{background:function(r){this.$store.commit("UPDATE_",{path:"loadingBarColor",value:r})},"$route.path":function(){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.background=void 0,!r.$fetched.pages.includes(r.$route.fullPath)){e.next=3;break}return e.abrupt("return");case 3:return r.renderBar=!1,r.$store.commit("V_MODEL",{path:"loadingBar",value:!0}),e.next=7,main.sleep.call(r,16);case 7:r.renderBar=!0,r.hideLoader=!1,r.addAnimation=!1,r.transform=-10,r.elapsedTime=0,r.startLoading();case 13:case"end":return e.stop()}}),e)})))()},"$store.state.vmodel.loadingBar":function(){this.$store.state.vmodel.loadingBar?(this.renderBar=!0,this.hideLoader=!1,this.addAnimation=!1,this.transform=-10,this.elapsedTime=0,this.startLoading()):this.stopLoading()}},methods:{startLoading:function(){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.background="",r.$store.state.vmodel.loadingBar){e.next=3;break}return e.abrupt("return");case 3:if(!(r.transform<=85)){e.next=11;break}return r.transform+=4,e.next=7,main.sleep.call(r,10*r.elapsedTime);case 7:r.elapsedTime+=5,requestAnimationFrame(r.startLoading),e.next=27;break;case 11:return r.background="var(--warning)",e.next=14,main.sleep.call(r,350,!0);case 14:return r.addAnimation=!0,e.next=17,main.sleep.call(r,15e3,!0);case 17:if(r.addAnimation){e.next=19;break}return e.abrupt("return");case 19:return r.background="var(--error)",e.next=22,main.sleep.call(r,350,!0);case 22:return r.stopLoading(),e.next=25,main.sleep.call(r,100);case 25:r.$nuxt.error({message:"Opps! This page took too long to respond",statusCode:504}),r.$nextTick((function(){return r.$store.commit("UPDATE_",{path:"showPageLoading",value:!1})}));case 27:case"end":return e.stop()}}),e)})))()},stopLoading:function(){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.addAnimation=!1,e.next=3,main.sleep.call(r,16,!0);case 3:return r.elapsedTime=100,r.transform=100,e.next=7,main.sleep.call(r,450);case 7:return r.hideLoader=!0,e.next=10,main.sleep.call(r,220);case 10:r.transform=0,r.elapsedTime=0,r.renderBar=!1,r.background="";case 14:case"end":return e.stop()}}),e)})))()}},render:function(r){var e,t;return e={key:this.$route.path,attrs:{"data-lbr":"",role:this.renderBar?"presentation":void 0,"aria-hidden":this.renderBar?void 0:"true"},staticClass:"root",class:[{__animate:this.addAnimation,__hidden:!this.renderBar,"will-change":this.renderBar&&!this.addAnimation,"opacity-0":this.hideLoader}],style:{"--x":"".concat(this.transform-100,"%"),"--background":this.background?this.background:void 0,"--color-duration":"var(--error)"==this.background?"0.5s":void 0}},r("div",e,t)}},d=(t(433),t(9)),component=Object(d.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);