webpackJsonp([1],{164:function(t,e,n){"use strict";function a(){this.body=Object(o.c)(),this.isDead=!1,this.direction="up"}function s(t,e,n){var a=t;switch(t){case"left":a=e+"-"+(n-1);break;case"right":a=e+"-"+(n+1);break;case"up":a=e-1+"-"+n;break;case"down":a=e+1+"-"+n}return a}function r(t,e,n){if("wall"===t||"snake"===t)return e.isDead=!0,void l();i(n,e),"frog"===t?(Object(c.c)(e),Object(o.a)(e)):u(e)}e.a=a,e.c=s,e.b=r;var c=(n(38),n(60)),o=n(165),i=function(t,e){e.body.unshift(t);var n=document.querySelector(".cell-"+t);n.classList.add("snake"),n.classList.remove("frog")},u=function(t){var e=t.body.pop();document.querySelector(".cell-"+e).classList.remove("snake")},l=function(){var t=document.querySelector(".backdrop");t.classList.add("game-over"),document.querySelector(".game-over button").addEventListener("click",function(e){t.classList.remove("game-over"),d()})},d=function(){window.location.reload(!1)}},165:function(t,e,n){"use strict";function a(t){t.innerHTML="";for(var e=0;e<i;e++)for(var n=0;n<u;n++){var a=document.createElement("div");a.classList.add("cell","cell-"+(e+1)+"-"+(n+1)),t.appendChild(a)}}function s(){for(var t=[],e=Math.floor(i/2),n=0;n<l;n++)t[n]=e+n+"-"+e;return t}function r(t){t.body.forEach(function(t){document.querySelector(".cell-"+t).classList.add("snake")})}function c(t){for(var e=t.body.length,n=Math.floor(Math.random()*(d-e)),a=0;a<i;a++)for(var s=0;s<u;s++){var r=document.querySelector(".cell-"+(a+1)+"-"+(s+1));r.classList.contains("snake")||0!=--n||r.classList.add("frog")}}e.b=a,e.c=s,e.d=r,e.a=c;var o=n(38),i=o.b,u=o.a,l=o.e,d=o.b*o.a},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(61),s=n(62),r=n.n(s),c=n(462),o=n.n(c),i=n(463),u=n(480);a.a.config.productionTip=!1,a.a.use(o.a,r.a),new a.a({el:"#app",router:u.a,template:"<App/>",components:{App:i.a}})},38:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s}),n.d(e,"e",function(){return r}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return o});var a=40,s=40,r=6,c=12,o=2},463:function(t,e,n){"use strict";function a(t){n(464)}var s=n(466),r=n(479),c=n(15),o=a,i=c(s.a,r.a,!1,o,null,null);e.a=i.exports},464:function(t,e){},466:function(t,e,n){"use strict";var a=n(467),s=n(471),r=n(475);e.a={name:"sr-app",components:{SrHeader:a.a,SrContact:s.a,SrLinks:r.a},data:function(){return{classObject:{home:"hello"==this.$route.name,top:!1,right:!1,bottom:!1,left:!1}}},methods:{handleHover:function(t){"mouseleave"==t.type?(this.classObject.top=!1,this.classObject.right=!1,this.classObject.bottom=!1,this.classObject.left=!1):(this.classObject.top="aside-top"==t.target.className,this.classObject.right="aside-right"==t.target.className,this.classObject.bottom="aside-bottom"==t.target.className,this.classObject.left="aside-left"==t.target.className)}},updated:function(){this.classObject.home="hello"==this.$route.name}}},467:function(t,e,n){"use strict";function a(t){n(468)}var s=n(469),r=n(470),c=n(15),o=a,i=c(s.a,r.a,!1,o,"data-v-2d6d5829",null);e.a=i.exports},468:function(t,e){},469:function(t,e,n){"use strict";e.a={name:"sr-header"}},470:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("svg",{attrs:{viewBox:"160.051 227.168 193.541 74.766"}},[n("path",{attrs:{d:"M210.295,278.487c-8.678,7.917-18.575,15.073-27.253,19.031c-5.633,2.741-14.007,4.416-18.423,4.416\n    c-0.457,0-1.065-0.457-1.675-0.761c-1.37-0.914-2.588-2.284-2.893-3.502c0-0.457,0.305-1.066,0.761-1.218\n    c24.665-12.028,46.894-39.281,50.7-49.33c-1.827-3.806-8.069-9.439-10.658-13.398c0.152-3.045,4.263-7.46,7.765-6.395\n    c6.547,1.827,24.513,8.678,26.34,14.007c0.609,3.045-1.371,8.07-3.045,11.267c-2.74,5.024-6.851,10.658-11.875,16.291\n    c9.592,6.546,27.558,12.941,37.454,17.965c1.522,0.762,4.111,4.568,4.111,6.699c0,3.807-12.789,7.004-16.596,5.786\n    c-8.983-2.284-25.73-11.571-34.561-20.858L210.295,278.487L210.295,278.487z M319.866,256.258c1.37-3.806,1.521-9.135,0.913-12.941\n    c-6.09,0-18.422,0.761-25.73,2.741c-3.35,1.065-5.481,1.218-8.222-0.761c-2.436-1.827-8.526-7.004-9.44-9.288\n    c-0.913-1.675-0.304-3.045,2.132-3.045c3.654,0,6.851,0.304,10.962,0.304c10.201,0,22.686-1.522,34.866-3.958\n    c3.653-0.457,12.638,7.46,12.638,11.115c0,2.284-3.808,11.571-6.699,15.529c2.436-0.304,3.653-0.304,5.023,1.979\n    c0.762,1.37,1.676,3.197,2.133,5.481c0.912,3.35-0.152,5.024-3.808,5.633c-7.765,1.066-24.97,1.675-41.717,0.457\n    c3.197,4.111,2.893,9.592,2.893,14.159c16.596-0.457,28.318-1.37,41.108-2.893c7.765-0.914,17.661,3.654,16.595,7.308\n    c-0.305,2.284-5.328,4.872-9.135,5.786c-13.398,3.502-44.61,5.481-61.053,4.72c-4.111-0.305-6.242-2.436-6.699-5.786\n    c-0.152-1.675-0.304-3.654-0.152-5.176c0.152-1.675,0.609-1.675,1.37-3.045c2.893-3.806,4.415-13.855,3.045-17.205\n    c-3.806-1.522-6.395-7.612-5.177-9.287c0.152-0.305,1.827-0.609,4.416-0.609c8.069,0,23.751-0.457,37.911-1.218H319.866\n    L319.866,256.258z"}})])])},s=[],r={render:a,staticRenderFns:s};e.a=r},471:function(t,e,n){"use strict";function a(t){n(472)}var s=n(473),r=n(474),c=n(15),o=a,i=c(s.a,r.a,!1,o,"data-v-039ceed0",null);e.a=i.exports},472:function(t,e){},473:function(t,e,n){"use strict";e.a={name:"sr-contact"}},474:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("a",{staticClass:"at",attrs:{href:"#"}},[n("span",[t._v("@")])]),t._v(" "),n("a",{staticClass:"github",attrs:{href:"http://github.com/nogever",target:"_blank"}},[t._v("\n    github.com/nogever\n    ")]),t._v(" "),n("a",{staticClass:"email",attrs:{href:"mailto:nogever@gmail.com"}},[t._v("\n    nogever@gmail.com\n    ")])])}],r={render:a,staticRenderFns:s};e.a=r},475:function(t,e,n){"use strict";function a(t){n(476)}var s=n(477),r=n(478),c=n(15),o=a,i=c(s.a,r.a,!1,o,"data-v-2b64c7e7",null);e.a=i.exports},476:function(t,e){},477:function(t,e,n){"use strict";e.a={name:"sr-links"}},478:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links"},[n("div",{staticClass:"hash"},[n("router-link",{attrs:{to:"/"}},[t._v("#")])],1),t._v(" "),n("div",{staticClass:"snake"},[n("router-link",{attrs:{to:"/games/snake"}},[t._v("\n      Snake\n      ")])],1)])},s=[],r={render:a,staticRenderFns:s};e.a=r},479:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classObject,attrs:{id:"app"}},[n("aside",{staticClass:"aside-top",on:{mouseenter:t.handleHover,mouseleave:t.handleHover}},[n("sr-header")],1),t._v(" "),n("aside",{staticClass:"aside-left",on:{mouseenter:t.handleHover,mouseleave:t.handleHover}}),t._v(" "),n("aside",{staticClass:"aside-right",on:{mouseenter:t.handleHover,mouseleave:t.handleHover}},[n("sr-links")],1),t._v(" "),n("aside",{staticClass:"aside-bottom",on:{mouseenter:t.handleHover,mouseleave:t.handleHover}},[n("sr-contact")],1),t._v(" "),n("main",[n("router-view")],1)])},s=[],r={render:a,staticRenderFns:s};e.a=r},480:function(t,e,n){"use strict";var a=n(61),s=n(481),r=n(482),c=n(490);a.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"hello",component:r.a},{path:"/games/snake",name:"snake",component:c.a}]})},482:function(t,e,n){"use strict";function a(t){n(483)}var s=n(484),r=n(489),c=n(15),o=a,i=c(s.a,r.a,!1,o,"data-v-253cf5cc",null);e.a=i.exports},483:function(t,e){},484:function(t,e,n){"use strict";var a=n(62),s=n.n(a),r=n(485);e.a={name:"sr-hello",components:{SrSnow:r.a},subscriptions:function(){var t=this;return this.mouse$=new s.a.Subject,this.mouseout$=new s.a.Subject,{coor:this.mouse$.throttleTime(1e3).map(function(e){return t.mouseout$.next(null),{x:e.event.clientX,y:e.event.clientY}}),mouseout:this.mouseout$}}}},485:function(t,e,n){"use strict";function a(t){n(486)}var s=n(487),r=n(488),c=n(15),o=a,i=c(s.a,r.a,!1,o,"data-v-7e0e23f6",null);e.a=i.exports},486:function(t,e){},487:function(t,e,n){"use strict";e.a={name:"sr-snow",props:["start"],data:function(){return{width:6}},computed:{randomWidth:function(){return 20*Math.random()+this.width}}}},488:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"snow",style:{width:t.randomWidth+"px",height:t.randomWidth+"px",left:100*Math.random()+"%",marginTop:"-"+100*Math.random()+"px",animationDelay:t.start+"s"}})},s=[],r={render:a,staticRenderFns:s};e.a=r},489:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"stream",rawName:"v-stream:mousemove",value:t.mouse$,expression:"mouse$",arg:"mousemove"},{name:"stream",rawName:"v-stream:mouseout",value:t.mouseout$,expression:"mouseout$",arg:"mouseout"}],staticClass:"hello",style:{background:"hsla("+(t.mouseout?198:t.coor&&t.coor.x+t.coor.y)+", 67.4%, 73.5%, 1)"}},[n("div",{staticClass:"winter"},t._l(100,function(t){return n("sr-snow",{key:t,attrs:{start:t}})}))])},s=[],r={render:a,staticRenderFns:s};e.a=r},490:function(t,e,n){"use strict";function a(t){n(491)}var s=n(492),r=n(494),c=n(15),o=a,i=c(s.a,r.a,!1,o,null,null);e.a=i.exports},491:function(t,e){},492:function(t,e,n){"use strict";var a=n(164),s=n(165),r=n(60),c=n(493);e.a={name:"sr-snake",data:function(){return{snake:new a.a}},methods:{handleKeydown:function(t){32===t.which&&Object(c.a)(this.snake),Object(r.b)(this.snake,t.which)}},mounted:function(){var t=document.querySelector(".board");Object(s.b)(t),Object(s.d)(this.snake),Object(s.a)(this.snake),document.addEventListener("keydown",this.handleKeydown)},destroyed:function(){document.removeEventListener("keydown",this.handleKeydown)}}},493:function(t,e,n){"use strict";function a(t){var e=1e3/s.c,n=null,a=function a(s){if(!t.isDead){n||(n=s),window.requestAnimationFrame(a);var r=s-n;r>e&&(n=s-r%e,o(t))}};window.requestAnimationFrame(a)}e.a=a;var s=n(38),r=n(60),c=n(164),o=function(t){var e=t.body[0],n=Number(e.split("-")[0]),a=Number(e.split("-")[1]),s=Object(c.c)(t.direction,n,a),o=Object(r.a)(s);Object(c.b)(o,t,s)}},494:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-snake"},[n("div",{staticClass:"header"},[n("p",[t._v("Press spacebar to start the game"),n("br"),t._v("Use arrow keys to control the "),n("span",[t._v("snake")])])]),t._v(" "),n("div",{staticClass:"board"}),t._v(" "),n("div",{staticClass:"footer"},[n("p",[t._v("Score: "),n("span",[t._v("0")])])]),t._v(" "),n("div",{staticClass:"backdrop"},[n("h1",[t._v("Game over")]),t._v(" "),n("button",[t._v("Restart")])])])}],r={render:a,staticRenderFns:s};e.a=r},60:function(t,e,n){"use strict";function a(t){var e=t.split("-")[0],n=t.split("-")[1];if(e<1||n<1||e>c.b||n>c.a)return"wall";var a=document.querySelector(".cell-"+e+"-"+n);return a.classList.contains("snake")?"snake":a.classList.contains("frog")?"frog":"going"}function s(t,e){if(t.isDead)return!1;switch(e){case 37:t.direction="left";break;case 38:t.direction="up";break;case 39:t.direction="right";break;case 40:t.direction="down"}}function r(t){var e=document.querySelector(".footer span");e.innerHTML="",setTimeout(function(){e.textContent=t.body.length*c.d-c.e*c.d},200)}e.a=a,e.b=s,e.c=r;var c=n(38)}},[166]);
//# sourceMappingURL=app.b06fc79f9fe769de2c31.js.map