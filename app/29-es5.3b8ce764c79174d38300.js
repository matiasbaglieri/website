!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{KVVp:function(n,r,o){"use strict";o.r(r),o.d(r,"OthersModule",(function(){return m}));var i,c,u,a=o("ofXK"),s=o("tyNb"),l=o("kmKP"),f=o("fXoL"),d=[{path:"404",component:(i=function(){function n(t,r){e(this,n),this.router=t,this.userService=r}var r,o,i;return r=n,(o=[{key:"ngOnInit",value:function(){var e=this;this.userService.getUser().subscribe((function(t){t&&(e.user=t.data)}))}},{key:"redirectToHome",value:function(){this.user&&this.router.navigateByUrl("editor"===this.user.network?"/dashboard/v1":"/pages/profile")}}])&&t(r.prototype,o),i&&t(r,i),n}(),i.\u0275fac=function(e){return new(e||i)(f["\u0275\u0275directiveInject"](s.h),f["\u0275\u0275directiveInject"](l.a))},i.\u0275cmp=f["\u0275\u0275defineComponent"]({type:i,selectors:[["app-not-found"]],decls:9,vars:0,consts:[[1,"not-found-wrap","text-center"],[1,"text-60"],[1,"text-36","subheading","mb-3"],[1,"mb-5","text-muted","text-18"],[1,"btn","btn-lg","btn-primary","btn-rounded",3,"click"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"div",0),f["\u0275\u0275elementStart"](1,"h1",1),f["\u0275\u0275text"](2," 404 "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"p",2),f["\u0275\u0275text"](4,"Error!"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"p",3),f["\u0275\u0275text"](6,"Sorry! The page you were looking for doesn't exist."),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"button",4),f["\u0275\u0275listener"]("click",(function(){return t.redirectToHome()})),f["\u0275\u0275text"](8,"Go back to home"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]())},styles:[""]}),i)}],p=((u=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:u}),u.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||u)},imports:[[s.l.forChild(d)],s.l]}),u),m=((c=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||c)},imports:[[a.c,s.l,p]]}),c)}}])}();