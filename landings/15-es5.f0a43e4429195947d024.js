!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+tcz":function(e,i,a){"use strict";a.d(i,"a",(function(){return p})),a.d(i,"b",(function(){return u}));var s,c,o=a("fXoL"),r=function(){return(r=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}).apply(this,arguments)},l=function(){function n(n,e,t){var i=this;this.target=n,this.endVal=e,this.options=t,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(n){i.startTime||(i.startTime=n);var e=n-i.startTime;i.remaining=i.duration-e,i.frameVal=i.useEasing?i.countDown?i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.startVal-e/i.duration*(i.startVal-i.endVal):i.startVal+e/i.duration*(i.endVal-i.startVal),i.frameVal=i.countDown?i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Math.round(i.frameVal*i.decimalMult)/i.decimalMult,i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(n){var e,t,a,s,c,o=n<0?"-":"";if(e=Math.abs(n).toFixed(i.options.decimalPlaces),a=(t=(e+="").split("."))[0],s=t.length>1?i.options.decimal+t[1]:"",i.options.useGrouping){c="";for(var r=0,l=a.length;r<l;++r)0!==r&&r%3==0&&(c=i.options.separator+c),c=a[l-r-1]+c;a=c}return i.options.numerals&&i.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(n){return i.options.numerals[+n]})),s=s.replace(/[0-9]/g,(function(n){return i.options.numerals[+n]}))),o+i.options.prefix+a+s+i.options.suffix},this.easeOutExpo=function(n,e,t,i){return t*(1-Math.pow(2,-10*n/i))*1024/1023+e},this.options=r({},this.defaults,t),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof n?document.getElementById(n):n,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return n.prototype.determineDirectionAndSmartEasing=function(){var n=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>n,Math.abs(n-this.startVal)>this.options.smartEasingThreshold?(this.finalEndVal=n,this.endVal=n+(this.countDown?1:-1)*this.options.smartEasingAmount,this.duration=this.duration/2):(this.endVal=n,this.finalEndVal=null),this.useEasing=!this.finalEndVal&&this.options.useEasing},n.prototype.start=function(n){this.error||(this.callback=n,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},n.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},n.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},n.prototype.update=function(n){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(n),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},n.prototype.printValue=function(n){var e=this.formattingFn(n);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},n.prototype.ensureNumber=function(n){return"number"==typeof n&&!isNaN(n)},n.prototype.validateValue=function(n){var e=Number(n);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+n,null)},n.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},n}(),d=a("ofXK"),u=((c=function(){function e(t,i,a){n(this,e),this.el=t,this.zone=i,this.platformId=a,this.options={},this.reanimateOnClick=!0,this.complete=new o.n}return t(e,[{key:"onClick",value:function(){this.reanimateOnClick&&this.animate()}},{key:"ngOnChanges",value:function(n){Object(d.v)(this.platformId)&&n.endVal&&void 0!==n.endVal.currentValue&&(void 0!==this.previousEndVal&&(this.options=Object.assign({},this.options,{startVal:this.previousEndVal})),this.countUp=new l(this.el.nativeElement,this.endVal,this.options),this.animate(),this.previousEndVal=this.endVal)}},{key:"animate",value:function(){var n=this;this.zone.runOutsideAngular((function(){n.countUp.reset(),n.countUp.start((function(){n.zone.run((function(){n.complete.emit()}))}))}))}}]),e}()).\u0275fac=function(n){return new(n||c)(o.Lb(o.l),o.Lb(o.z),o.Lb(o.B))},c.\u0275dir=o.Gb({type:c,selectors:[["","countUp",""]],hostBindings:function(n,e){1&n&&o.bc("click",(function(){return e.onClick()}))},inputs:{options:"options",reanimateOnClick:"reanimateOnClick",endVal:["countUp","endVal"]},outputs:{complete:"complete"},features:[o.vb]}),c),p=((s=function e(){n(this,e)}).\u0275mod=o.Jb({type:s}),s.\u0275inj=o.Ib({factory:function(n){return new(n||s)},imports:[[]]}),s)},"2d4A":function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var a=i("nhfI"),s=i("6NWb"),c=i("M0ag"),o=i("sYmb"),r=i("fXoL"),l=function(){var e=function e(){n(this,e)};return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(n){return new(n||e)},imports:[[a.c,s.b,c.a,o.a.forChild()]]}),e}()},KNmM:function(e,i,a){"use strict";a.r(i),a.d(i,"AppLandingModule",(function(){return on}));var s,c,o=a("M0ag"),r=a("V6j0"),l=a("2d4A"),d=a("pu65"),u=a("nhfI"),p=a("sYmb"),b=a("fXoL"),m=((s=function e(){n(this,e)}).\u0275mod=b.Jb({type:s}),s.\u0275inj=b.Ib({factory:function(n){return new(n||s)},imports:[[u.c,p.a.forChild()]]}),s),h=a("M0Rk"),f=a("tyNb"),F=a("ey9i"),g=((c=function(){function e(t){n(this,e),this.translate=t}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(n){return new(n||c)(b.Lb(p.c))},c.\u0275cmp=b.Fb({type:c,selectors:[["dc-app-landing-heading"]],decls:66,vars:15,consts:[[1,"section","header","text-contrast","app-landing-header"],[1,"shape-wrapper"],[1,"shape","shape-background","shape-main","gradient","gradient-purple-navy"],[1,"shape","shape-background","shape-top","gradient","gradient-navy-purple"],[1,"container","overflow-hidden"],[1,"row","gap-y","align-items-center"],[1,"col-md-6","col-lg-6"],[1,"lead","d-flex","align-items-center","my-0"],[1,"fas","fa-award","font-md","mr-3"],[1,"bold","text-contrast","display-lg-5","font-lg","mb-5"],[1,"d-block","light","font-md"],[1,"lead"],[1,"nav","mt-5","align-items-center"],["href","https://everythink.ai/app/#/sessions/signup",1,"btn","btn-rounded","btn-lg","btn-info","shadow","mr-3","px-4","text-capitalize"],[1,"col-md-6","col-lg-4","ml-lg-auto"],["data-aos","fade-le2ft"],[1,"mobile-dev2ice","ipho1ne-x"],[1,"scre2en"],["src","https://everythink.sfo2.digitaloceanspaces.com/avatars/amy/00.gif","alt","","width","90%","data-aos-delay","1000","data-aos","zoom-in"],[1,"notch"],[1,"absolute","screen-highlight","center-x","w-100"]],template:function(n,e){1&n&&(b.Fc(0,"\n"),b.Qb(1,"header",0),b.Fc(2,"\n  "),b.Qb(3,"div",1),b.Fc(4,"\n    "),b.Mb(5,"div",2),b.Fc(6,"\n    "),b.Mb(7,"div",3),b.Fc(8,"\n  "),b.Pb(),b.Fc(9,"\n\n  "),b.Qb(10,"div",4),b.Fc(11,"\n    "),b.Qb(12,"div",5),b.Fc(13,"\n      "),b.Qb(14,"div",6),b.Fc(15,"\n        "),b.Qb(16,"p",7),b.Fc(17,"\n          "),b.Mb(18,"i",8),b.Fc(19),b.gc(20,"translate"),b.Pb(),b.Fc(21,"\n        "),b.Qb(22,"h1",9),b.Fc(23),b.gc(24,"translate"),b.Qb(25,"span",10),b.Fc(26),b.gc(27,"translate"),b.Pb(),b.Fc(28,"\n        "),b.Pb(),b.Fc(29,"\n        "),b.Qb(30,"p",11),b.Fc(31),b.gc(32,"translate"),b.Pb(),b.Fc(33,"\n\n        "),b.Qb(34,"div",12),b.Fc(35,"\n          "),b.Qb(36,"a",13),b.Fc(37),b.gc(38,"translate"),b.Pb(),b.Fc(39,"\n        "),b.Pb(),b.Fc(40,"\n      "),b.Pb(),b.Fc(41,"\n\n      "),b.Qb(42,"div",14),b.Fc(43,"\n        "),b.Qb(44,"div",15),b.Fc(45,"\n          "),b.Qb(46,"div",16),b.Fc(47,"\n            "),b.Qb(48,"div",17),b.Fc(49,"\n              "),b.Fc(50,"\n              "),b.Mb(51,"img",18),b.Fc(52,"\n            "),b.Pb(),b.Fc(53,"\n            "),b.Mb(54,"div",19),b.Fc(55,"\n          "),b.Pb(),b.Fc(56,"\n\n          "),b.Qb(57,"div",20),b.Fc(58,"\n            "),b.Fc(59,"\n          "),b.Pb(),b.Fc(60,"\n        "),b.Pb(),b.Fc(61,"\n      "),b.Pb(),b.Fc(62,"\n    "),b.Pb(),b.Fc(63,"\n  "),b.Pb(),b.Fc(64,"\n"),b.Pb(),b.Fc(65,"\n")),2&n&&(b.xb(19),b.Hc("",b.hc(20,5,"HOME.APP_LANDING_HEADING.HEADING.AWARDED"),"\n        "),b.xb(4),b.Hc("\n          ",b.hc(24,7,"HOME.APP_LANDING_HEADING.HEADING.HR_CONSULTIN"),"\n          "),b.xb(3),b.Hc("\n            ",b.hc(27,9,"HOME.APP_LANDING_HEADING.HEADING.CONSULTANT"),"\n          "),b.xb(5),b.Hc("\n          ",b.hc(32,11,"HOME.APP_LANDING_HEADING.HEADING.IAS"),"\n        "),b.xb(6),b.Hc("\n            ",b.hc(38,13,"HOME.APP_LANDING_HEADING.HEADING.GERSTARTED"),"\n          "))},pipes:[p.b],styles:[""]}),c),P=a("aaX3"),v=a("ofXK"),A=a("AL06");function E(n,e){if(1&n&&(b.Qb(0,"h5",3),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n          ",t.title.es,"\n        ")}}function D(n,e){if(1&n&&(b.Qb(0,"h5",3),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n          ",t.title.en,"\n        ")}}function I(n,e){if(1&n&&(b.Qb(0,"p"),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n          ",t.description.es,"\n        ")}}function T(n,e){if(1&n&&(b.Qb(0,"p"),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n          ",t.description.en,"\n        ")}}function O(n,e){if(1&n&&(b.Qb(0,"div",7),b.Fc(1,"\n        "),b.Mb(2,"dc-feather",8),b.Fc(3,"\n        "),b.Dc(4,E,2,1,"h5",9),b.Fc(5,"\n        "),b.Dc(6,D,2,1,"h5",9),b.Fc(7,"\n        "),b.Dc(8,I,2,1,"p",10),b.Fc(9,"\n        "),b.Dc(10,T,2,1,"p",10),b.Fc(11,"\n      "),b.Pb()),2&n){var t=e.$implicit,i=b.fc();b.xb(2),b.kc("name",t.icon)("iconClass","stroke-primary mb-3"),b.xb(2),b.kc("ngIf","es"===i.translate.currentLang),b.xb(2),b.kc("ngIf","en-US"===i.translate.currentLang),b.xb(2),b.kc("ngIf","es"===i.translate.currentLang),b.xb(2),b.kc("ngIf","en-US"===i.translate.currentLang)}}var y,x=((y=function(){function e(t){n(this,e),this.translate=t,this.elements=[{icon:"briefcase",title:{en:"Employees",es:"Empleados"},description:{en:"Locate And Vet Talented Candidates In Real-Time. Automate Processes Such As Following Up Candidates And Employee Referrals, Detecting Deficiencies For Smarter Hiring Decisions, And Improving The Onboarding Process For Better Employee Performances.",es:"Localice Y Examine Candidatos Talentosos En Tiempo Real. Automatice Procesos Como El Seguimiento De Candidatos Y Referencias De Empleados, La Detecci\xf3n De Deficiencias Para Tomar Decisiones Inteligentes Y La Mejora De Procesos Para Obtener Un Mejor Desempe\xf1o De Sus Empleados."}},{icon:"users",title:{en:"Candidates",es:"Candidatos"},description:{en:"Override Inherent Human Bias For Better Candidates\u2019 Skill And Personality Tests. Leverage Our Best-Of-The-Breed Software As A Service AI Solution For Application Follow-Ups, Post-Acquisition Follow-Ups, Identifying New Open Roles, And More.",es:"Anule El Sesgo Humano Inherente Para Mejorar Las Pruebas De Habilidad Y Personalidad De Los Candidatos. Aproveche Nuestro Software Como Soluci\xf3n De Inteligencia Artificial De Servicio Para Seguimientos De Aplicaciones, Seguimientos Posteriores A La Adquisici\xf3n, Identificaci\xf3n De Nuevos Roles Abiertos Y Mucho M\xe1s."}},{icon:"dollar-sign",title:{en:"Customers",es:"Clientes"},description:{en:"Provide Real-Time Solution To Your Customer\u2019s Staffing Needs Based On Their Unique Needs. Automate Hiring Processes To Save Time And Money, Improve Hiring Efficiency And Productivity, And Ultimately, Customer Experience.",es:"Brinde Soluci\xf3n En Tiempo Real A Las Necesidades De Sus Clientes. Automatice Los Procesos De Contrataci\xf3n Para Ahorrar Tiempo Y Dinero, Mejorar La Eficiencia Y La Productividad De La Contrataci\xf3n Y, En Consecuencia, La Experiencia De Sus Clientes."}}]}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(n){return new(n||y)(b.Lb(p.c))},y.\u0275cmp=b.Fb({type:y,selectors:[["dc-app-landing-feature-cards"]],decls:22,vars:7,consts:[["id","features",1,"section","features"],[1,"container"],[1,"section-heading","text-center"],[1,"bold"],[1,"lead","text-secondary"],[1,"row","gap-y","text-center","text-md-left"],["class","col-md-4 py-4 rounded shadow-hover",4,"ngFor","ngForOf"],[1,"col-md-4","py-4","rounded","shadow-hover"],[1,"",3,"name","iconClass"],["class","bold",4,"ngIf"],[4,"ngIf"]],template:function(n,e){1&n&&(b.Qb(0,"section",0),b.Fc(1,"\n  "),b.Qb(2,"div",1),b.Fc(3,"\n    "),b.Qb(4,"div",2),b.Fc(5,"\n      "),b.Qb(6,"h2",3),b.Fc(7),b.gc(8,"translate"),b.Pb(),b.Fc(9,"\n      "),b.Qb(10,"p",4),b.Fc(11),b.gc(12,"translate"),b.Pb(),b.Fc(13,"\n    "),b.Pb(),b.Fc(14,"\n\n    "),b.Qb(15,"div",5),b.Fc(16,"\n      "),b.Dc(17,O,12,6,"div",6),b.Fc(18,"\n    "),b.Pb(),b.Fc(19,"\n  "),b.Pb(),b.Fc(20,"\n"),b.Pb(),b.Fc(21,"\n")),2&n&&(b.xb(7),b.Hc("\n        ",b.hc(8,3,"HOME.APP_LANDING_HEADING.FEATURE_CARDS.WHAT_YOU_GET"),"\n      "),b.xb(4),b.Hc("\n        ",b.hc(12,5,"HOME.APP_LANDING_HEADING.FEATURE_CARDS.WITH_A_SINGLE_TOOL"),"\n      "),b.xb(6),b.kc("ngForOf",e.elements))},directives:[v.j,A.a,v.k],pipes:[p.b],styles:[""]}),y);function N(n,e){if(1&n&&(b.Qb(0,"h5",29),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n                  ",t.title.es,"\n                ")}}function L(n,e){if(1&n&&(b.Qb(0,"h5",29),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n                  ",t.title.en,"\n                ")}}function S(n,e){if(1&n&&(b.Qb(0,"p",30),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n                  ",t.description.es,"\n                ")}}function H(n,e){if(1&n&&(b.Qb(0,"p",30),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n                  ",t.description.en,"\n                ")}}function Q(n,e){if(1&n&&(b.Qb(0,"div",23),b.Fc(1,"\n            "),b.Qb(2,"div",24),b.Fc(3,"\n              "),b.Mb(4,"dc-feather",25),b.Fc(5,"\n              "),b.Qb(6,"div",26),b.Fc(7,"\n                "),b.Dc(8,N,2,1,"h5",27),b.Fc(9,"\n                "),b.Dc(10,L,2,1,"h5",27),b.Fc(11,"\n                "),b.Dc(12,S,2,1,"p",28),b.Fc(13,"\n                "),b.Dc(14,H,2,1,"p",28),b.Fc(15,"\n              "),b.Pb(),b.Fc(16,"\n            "),b.Pb(),b.Fc(17,"\n          "),b.Pb()),2&n){var t=e.$implicit,i=b.fc();b.xb(4),b.kc("name",t.icon)("iconClass","stroke-primary"),b.xb(4),b.kc("ngIf","es"===i.translate.currentLang),b.xb(2),b.kc("ngIf","en-US"===i.translate.currentLang),b.xb(2),b.kc("ngIf","es"===i.translate.currentLang),b.xb(2),b.kc("ngIf","en-US"===i.translate.currentLang)}}var w,M=((w=function(){function e(t){n(this,e),this.translate=t,this.boxes=[{icon:"activity",title:{en:"Elevate Employee Experience",es:"Mejora La Experiencia De Los Empleados"},description:{en:"Investment In IAs Takes The Stress Out Of Recruiting By Automating Repetitive Tasks For Improved Employees\u2019 Experience, Productivity, And ROI.",es:"Los AIs Eliminan El Estr\xe9s De La Contrataci\xf3n Mediante La Automatizaci\xf3n De Tareas Repetitivas Mejorando La Experiencia, La Productividad Y El ROI De Tus Empleados."}},{icon:"eye",title:{en:"Tracking And Management",es:"Seguimiento Y Gesti\xf3n"},description:{en:"EveryThink AIaaS Platform Has An Intuitive And Easy-To-Use Dashboard To Make It Easy To Track And Analyze All Your User Key Operations.",es:"La Plataforma AIaaS De EveryThink Tiene Un Panel De Control Intuitivo Y F\xe1cil De Usar Para Facilitar El Seguimiento Y El An\xe1lisis De Todas Las Operaciones Clave De Tus Usuarios."}},{icon:"bar-chart",title:{en:"Superior Customer Experience",es:"Experiencia De Cliente Superior"},description:{en:"EveryThink Augments Your Human Capital To Deliver Cutting Edge Services For Clients With Incredibly Optimized Workflows. This Results In More Efficient Outcomes And Vastly Improved Customer Experiences.",es:"EveryThink Aumenta Tu Capital Humano Para Brindar Servicios De Danguardia Para Todos Tus Clientes Con Flujos De Trabajo Incre\xedblemente Optimizados. Obteniendo Resultados M\xe1s Eficientes Y Experiencias De Clientes \xdanicas."}},{icon:"dollar-sign",title:{en:"Save Time And Money",es:"Ahorre Tiempo Y Dinero"},description:{en:"Our Low-Code Platform Helps You Systemize The Predictable, Effectively Giving HR Teams More Time To Focus And Achieve Exceptional Results With Unique Tasks That Require Critical Thinking Skills. All While Being Cost-Effective.",es:"Nuestra Plataforma De Bajo C\xf3digo Ayuda A Sistematizar Lo Predecible, Dando A Tus Empleados M\xe1s Tiempo Para Concentrarse Y Lograr Resultados Excepcionales Con Tareas \xdanicas Que Requieren Habilidades De Pensamiento Cr\xedtico."}}]}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(n){return new(n||w)(b.Lb(p.c))},w.\u0275cmp=b.Fb({type:w,selectors:[["dc-app-landing-twin-phone-right-list"]],decls:68,vars:7,consts:[[1,"section","overflow-hidden"],[1,"container","bring-to-front"],[1,"row","gap-y","align-items-center"],[1,"col-md-6","col-lg-5","mr-lg-auto"],[1,"center-xy","op-1"],["data-aos","zoom-in",1,"shape","shape-background","rounded-circle","shadow-lg","bg-info",2,"width","600px","height","600px"],[1,"device-twin","align-items-center"],["data-aos","fade-left",1,"mockup","absolute"],[1,"screen"],["width","100%","autoplay","autoplay","controls",""],["src","assets/images/app-landing/screens/app/hr_manager_phone_01.mp4","type","video/mp4"],[1,"button"],[1,"iphone-x","front","mr-0"],[1,"screen","shadow-box"],["width","100%","autoplay","autoplay","controls","",2,"margin-top","50px","margin-bottom","20px"],["src","assets/images/app-landing/screens/app/hr_manager_phone_02.mp4","type","video/mp4"],[1,"notch"],[1,"col-md-6","text-center","text-md-left"],[1,"section-heading"],[1,"far","fa-check-circle","fa-2x","text-danger","mb-3"],[1,"bold","font-md"],[1,"row","gap-y"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"media","flex-column","flex-lg-row","align-items-center","align-items-md-start"],[1,"mx-auto","ml-md-0","mr-md-3",3,"name","iconClass"],[1,"media-body","mt-3","mt-md-0"],["class","bold mt-0 mb-1",4,"ngIf"],["class","m-0 d-md-none d-lg-block",4,"ngIf"],[1,"bold","mt-0","mb-1"],[1,"m-0","d-md-none","d-lg-block"]],template:function(n,e){1&n&&(b.Fc(0,"\n"),b.Qb(1,"section",0),b.Fc(2,"\n  "),b.Qb(3,"div",1),b.Fc(4,"\n    "),b.Qb(5,"div",2),b.Fc(6,"\n      "),b.Qb(7,"div",3),b.Fc(8,"\n        "),b.Qb(9,"div",4),b.Fc(10,"\n          "),b.Mb(11,"div",5),b.Fc(12,"\n        "),b.Pb(),b.Fc(13,"\n\n        "),b.Qb(14,"div",6),b.Fc(15,"\n          "),b.Qb(16,"div",7),b.Fc(17,"\n            "),b.Qb(18,"div",8),b.Fc(19,"\n              "),b.Qb(20,"video",9),b.Fc(21,"\n                "),b.Mb(22,"source",10),b.Fc(23,"\n              "),b.Pb(),b.Fc(24,"\n            "),b.Pb(),b.Fc(25,"\n            "),b.Mb(26,"span",11),b.Fc(27,"\n          "),b.Pb(),b.Fc(28,"\n\n          "),b.Qb(29,"div",12),b.Fc(30,"\n            "),b.Qb(31,"div",13),b.Fc(32,"\n              "),b.Qb(33,"video",14),b.Fc(34,"\n                "),b.Mb(35,"source",15),b.Fc(36,"\n              "),b.Pb(),b.Fc(37,"\n            "),b.Pb(),b.Fc(38,"\n            "),b.Mb(39,"div",16),b.Fc(40,"\n          "),b.Pb(),b.Fc(41,"\n        "),b.Pb(),b.Fc(42,"\n      "),b.Pb(),b.Fc(43,"\n\n      "),b.Qb(44,"div",17),b.Fc(45,"\n        "),b.Qb(46,"div",18),b.Fc(47,"\n          "),b.Mb(48,"i",19),b.Fc(49,"\n          "),b.Qb(50,"h2",20),b.Fc(51),b.gc(52,"translate"),b.Pb(),b.Fc(53,"\n          "),b.Qb(54,"p"),b.Fc(55),b.gc(56,"translate"),b.Pb(),b.Fc(57,"\n        "),b.Pb(),b.Fc(58,"\n\n        "),b.Qb(59,"div",21),b.Fc(60,"\n          "),b.Dc(61,Q,18,6,"div",22),b.Fc(62,"\n        "),b.Pb(),b.Fc(63,"\n      "),b.Pb(),b.Fc(64,"\n    "),b.Pb(),b.Fc(65,"\n  "),b.Pb(),b.Fc(66,"\n"),b.Pb(),b.Fc(67,"\n")),2&n&&(b.xb(51),b.Hc("\n            ",b.hc(52,3,"HOME.APP_LANDING_HEADING.TWIN_PHONE_LEFT_RIGHT.WE_HAVE_A_TON_OF_BENEFITSS"),"\n          "),b.xb(4),b.Hc("\n            ",b.hc(56,5,"HOME.APP_LANDING_HEADING.TWIN_PHONE_LEFT_RIGHT.EVERYTHINK_DOES_ALL_OF"),"\n          "),b.xb(6),b.kc("ngForOf",e.boxes))},directives:[v.j,A.a,v.k],pipes:[p.b],styles:[""]}),w);function _(n,e){if(1&n&&(b.Qb(0,"h5",28),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n                ",t.title.es,"\n              ")}}function V(n,e){if(1&n&&(b.Qb(0,"h5",28),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n                ",t.title.en,"\n              ")}}function C(n,e){if(1&n&&(b.Qb(0,"p",29),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n                ",t.description.es,"\n              ")}}function k(n,e){if(1&n&&(b.Qb(0,"p",29),b.Fc(1),b.Pb()),2&n){var t=b.fc().$implicit;b.xb(1),b.Hc("\n                ",t.description.en,"\n              ")}}function G(n,e){if(1&n&&(b.Qb(0,"li",23),b.Fc(1,"\n            "),b.Fc(2,"\n            "),b.Mb(3,"dc-feather",24),b.Fc(4,"\n            "),b.Qb(5,"div",25),b.Fc(6,"\n              "),b.Dc(7,_,2,1,"h5",26),b.Fc(8,"\n              "),b.Dc(9,V,2,1,"h5",26),b.Fc(10,"\n              "),b.Dc(11,C,2,1,"p",27),b.Fc(12,"\n              "),b.Dc(13,k,2,1,"p",27),b.Fc(14,"\n            "),b.Pb(),b.Fc(15,"\n          "),b.Pb()),2&n){var t=e.$implicit,i=b.fc();b.xb(3),b.kc("name",t.icon)("iconClass","stroke-primary"),b.xb(4),b.kc("ngIf","es"===i.translate.currentLang),b.xb(2),b.kc("ngIf","en-US"===i.translate.currentLang),b.xb(2),b.kc("ngIf","es"===i.translate.currentLang),b.xb(2),b.kc("ngIf","en-US"===i.translate.currentLang)}}var R,U=((R=function(){function e(t){n(this,e),this.translate=t,this.elements=[{icon:"database",title:{en:"DATAFLOW AUTOMATION",es:"AUTOMATIZACI\xd3N DEL FLUJO DE DATOS"},description:{en:"Get Big Data Capabilities With Our Low-Code Platform. Be Able To Predict The Data Flow That You Need, Based On The Experience Obtained From All The Interactions Of Your Users.",es:"Obtenga Capacidades De Big Data Con Nuestra Plataforma De C\xf3digo Bajo. Sea Capaz De Predecir El Flujo De Datos Que Va A Necesitar, Bas\xe1ndose En La Experiencia Obtenida De Todas Las Interacciones De Tus Usuarios."}},{icon:"codesandbox",title:{en:"PROCESS AUTOMATION",es:"AUTOMATIZACI\xd3N DE PROCESOS"},description:{en:"Systematize The Predictable With Our AIaaS Platform. Be Able To Predict The Automation Process You Need, Based On The Experience Gained From IAs When Interacting With Your Users.",es:"Sistematice Lo Predecible Con Nuestra Plataforma AIaaS. Sea Capaz De Predecir El Proceso De Automatizacion Que Necesita, Bas\xe1ndose En La Experiencia Adquirida De Los AIs Al Interactuar Con Tus Usuarios."}},{icon:"shopping-bag",title:{en:"WHITE-LABEL SOLUTION",es:"SOLUCI\xd3N DE ETIQUETA BLANCA"},description:{en:"Get Ready-To-Use, Fully Customized, And Easy-To-Implement Solutions. Get Your Own Branded Product In Less Than 24 Hours On Android, iOS And Web.",es:"OObtenga Soluciones Listas Para Usar, Totalmente Personalizadas Y De F\xe1cil Implementaci\xf3n. Obtenga Su Producto Con Su Propia Marca En Menos De 24 Horas En Android, iOS Y Web."}}]}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(n){return new(n||R)(b.Lb(p.c))},R.\u0275cmp=b.Fb({type:R,selectors:[["dc-app-landing-twin-phone-left-list"]],decls:64,vars:4,consts:[[1,"section","path-success"],[1,"shape-wrapper"],["data-aos","fade-up",1,"shape-ring","absolute","right","top"],[1,"container","bring-to-front"],[1,"row","gap-y","align-items-center","text-center","text-lg-left"],[1,"col-md-6","col-lg-5","ml-lg-auto","order-md-2"],[1,"device-twin","align-items-center"],["data-aos","fade-right",1,"mockup","absolute","right"],[1,"screen"],["width","100%","autoplay","autoplay","controls",""],["src","assets/images/app-landing/screens/app/hr_web_phone_03.mp4","type","video/mp4"],[1,"button"],[1,"iphone-x","front","ml-0"],[1,"screen","shadow-box"],["width","100%","autoplay","autoplay","controls","",2,"margin-top","50px","margin-bottom","20px"],["src","assets/images/app-landing/screens/app/hr-web_phone_01.mp4","type","video/mp4"],[1,"notch"],[1,"col-md-6","text-center","text-md-left"],[1,"section-heading"],[1,"fas","fa-trophy","fa-2x","text-danger","mb-3"],[1,"bold","font-md"],[1,"list-unstyled"],["class","media flex-column flex-md-row",4,"ngFor","ngForOf"],[1,"media","flex-column","flex-md-row"],[1,"mx-auto","mr-md-3",3,"name","iconClass"],[1,"media-body","mt-3","mt-md-0"],["class","bold mt-0 mb-1",4,"ngIf"],["class","m-0 d-md-none d-lg-block",4,"ngIf"],[1,"bold","mt-0","mb-1"],[1,"m-0","d-md-none","d-lg-block"]],template:function(n,e){1&n&&(b.Fc(0,"\n"),b.Qb(1,"section",0),b.Fc(2,"\n  "),b.Qb(3,"div",1),b.Fc(4,"\n    "),b.Mb(5,"div",2),b.Fc(6,"\n  "),b.Pb(),b.Fc(7,"\n\n  "),b.Qb(8,"div",3),b.Fc(9,"\n    "),b.Qb(10,"div",4),b.Fc(11,"\n      "),b.Qb(12,"div",5),b.Fc(13,"\n        "),b.Qb(14,"div",6),b.Fc(15,"\n          "),b.Qb(16,"div",7),b.Fc(17,"\n            "),b.Qb(18,"div",8),b.Fc(19,"\n              "),b.Qb(20,"video",9),b.Fc(21,"\n                "),b.Mb(22,"source",10),b.Fc(23,"\n              "),b.Pb(),b.Fc(24,"\n            "),b.Pb(),b.Fc(25,"\n            "),b.Mb(26,"span",11),b.Fc(27,"\n          "),b.Pb(),b.Fc(28,"\n\n          "),b.Qb(29,"div",12),b.Fc(30,"\n            "),b.Qb(31,"div",13),b.Fc(32,"\n              "),b.Qb(33,"video",14),b.Fc(34,"\n                "),b.Mb(35,"source",15),b.Fc(36,"\n              "),b.Pb(),b.Fc(37,"\n            "),b.Pb(),b.Fc(38,"\n            "),b.Mb(39,"div",16),b.Fc(40,"\n          "),b.Pb(),b.Fc(41,"\n        "),b.Pb(),b.Fc(42,"\n      "),b.Pb(),b.Fc(43,"\n\n      "),b.Qb(44,"div",17),b.Fc(45,"\n        "),b.Qb(46,"div",18),b.Fc(47,"\n          "),b.Mb(48,"i",19),b.Fc(49,"\n          "),b.Qb(50,"h2",20),b.Fc(51),b.gc(52,"translate"),b.Pb(),b.Fc(53,"\n        "),b.Pb(),b.Fc(54,"\n\n        "),b.Qb(55,"ul",21),b.Fc(56,"\n          "),b.Dc(57,G,16,6,"li",22),b.Fc(58,"\n        "),b.Pb(),b.Fc(59,"\n      "),b.Pb(),b.Fc(60,"\n    "),b.Pb(),b.Fc(61,"\n  "),b.Pb(),b.Fc(62,"\n"),b.Pb(),b.Fc(63,"\n")),2&n&&(b.xb(51),b.Hc("\n            ",b.hc(52,2,"HOME.APP_LANDING_HEADING.TWIN_PHONE_LEFT_LIST.WE_ARE_YOUR_PATH_TO_SUCCESS"),"\n          "),b.xb(6),b.kc("ngForOf",e.elements))},directives:[v.j,A.a,v.k],pipes:[p.b],styles:[""]}),R);function Y(n,e){if(1&n&&(b.Qb(0,"div",7),b.Fc(1,"\n        "),b.Mb(2,"img",8),b.Fc(3,"\n      "),b.Pb()),2&n){var t=e.$implicit;b.xb(2),b.mc("src","assets/images/app-landing/screens/app/",t,".png",b.yc)}}var W,j,B,z,$,q,J=function(){return[1,2,3,4,5,6,7,8,9,10]},K=((W=function(){function e(t){n(this,e),this.translate=t,this.config={slidesPerView:5,spaceBetween:20,autoplay:{delay:2500,disableOnInteraction:!1},centeredSlides:!0,navigation:!1,pagination:!0,breakpoints:{1200:{slidesPerView:5,spaceBetween:0},992:{slidesPerView:3,spaceBetween:0},576:{slidesPerView:2,spaceBetween:0}}}}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(n){return new(n||W)(b.Lb(p.c))},W.\u0275cmp=b.Fb({type:W,selectors:[["dc-screenshots-app"]],decls:23,vars:9,consts:[[1,"screenshots","coverflow"],[1,"container"],[1,"section-heading","text-center"],[1,"bold","display-4"],[1,"text-secondary"],[1,"swiper-container",3,"config"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-slide"],["alt","...",1,"img-responsive",3,"src"]],template:function(n,e){1&n&&(b.Fc(0,"\n"),b.Qb(1,"section",0),b.Fc(2,"\n  "),b.Qb(3,"div",1),b.Fc(4,"\n    "),b.Qb(5,"div",2),b.Fc(6,"\n      "),b.Qb(7,"h2",3),b.Fc(8),b.gc(9,"translate"),b.Pb(),b.Fc(10,"\n      "),b.Qb(11,"p",4),b.Fc(12),b.gc(13,"translate"),b.Pb(),b.Fc(14,"\n    "),b.Pb(),b.Fc(15,"\n\n    "),b.Qb(16,"swiper",5),b.Fc(17,"\n      "),b.Dc(18,Y,4,1,"div",6),b.Fc(19,"\n    "),b.Pb(),b.Fc(20,"\n  "),b.Pb(),b.Fc(21,"\n"),b.Pb(),b.Fc(22,"\n")),2&n&&(b.xb(8),b.Hc("\n        ",b.hc(9,4,"SCREENSHOTS.APP.APP_SCREENSHOTS"),"\n      "),b.xb(4),b.Hc("\n        ",b.hc(13,6,"SCREENSHOTS.APP.A_PICTURE_IS_WORTH_A_THOUSAND_WORDS"),"\n      "),b.xb(4),b.kc("config",e.config),b.xb(2),b.kc("ngForOf",b.nc(8,J)))},directives:[u.a,v.j],pipes:[p.b],styles:[""]}),W),X=a("wHSu"),Z=a("6NWb"),nn=a("XRRd"),en=((B=function(){function e(t){n(this,e),this.translate=t,this.faQuoteRight=X.r,this.config={slidesPerView:1,centeredSlides:!0,autoplay:!1,navigation:!0,pagination:!1}}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(n){return new(n||B)(b.Lb(p.c))},B.\u0275cmp=b.Fb({type:B,selectors:[["dc-testimonial-simple-slider"]],decls:17,vars:4,consts:[[1,"section","bg-light","edge","bottom-right"],[1,"container"],[1,"section-heading","text-center"],["size","3x",1,"mb-3",3,"icon"],[1,"bold","display-4"]],template:function(n,e){1&n&&(b.Qb(0,"section",0),b.Fc(1,"\n  "),b.Qb(2,"div",1),b.Fc(3,"\n    "),b.Qb(4,"div",2),b.Fc(5,"\n      "),b.Mb(6,"fa-icon",3),b.Fc(7,"\n      "),b.Qb(8,"h2",4),b.Fc(9),b.gc(10,"translate"),b.Pb(),b.Fc(11,"\n    "),b.Pb(),b.Fc(12,"\n\n    "),b.Mb(13,"dc-testimonials-slider"),b.Fc(14,"\n  "),b.Pb(),b.Fc(15,"\n"),b.Pb(),b.Fc(16,"\n")),2&n&&(b.xb(6),b.kc("icon",e.faQuoteRight),b.xb(3),b.Hc("\n        ",b.hc(10,2,"TESTIMONIALS.TESTIMONIAL_SIMPLE_SLIDER.TESTIMONIALS"),"\n      "))},directives:[Z.a,nn.a],pipes:[p.b],styles:[""]}),B),tn=((j=function(){function e(t){n(this,e),this.translate=t}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(n){return new(n||j)(b.Lb(p.c))},j.\u0275cmp=b.Fb({type:j,selectors:[["dc-app-landing-download"]],decls:59,vars:21,consts:[[1,"section","app-download"],[1,"container","bring-to-front"],[1,"shadow-lg","bg-contrast","p-5","rounded"],[1,"section-heading","text-center"],[1,"text-primary","regular"],[1,"text-secondary"],[1,"nav","flex-column","flex-md-row","justify-content-center","align-items-center","mt-5"],["href","https://apps.apple.com/us/app/id1513474218",1,"nav-link","py-3","px-4","btn","btn-rounded","btn-download","btn-dark","text-contrast","mr-0","mr-md-4","mb-4","mb-md-0"],["src","assets/images/app-landing/svg/apple.svg","alt","...",1,"icon","icon-md"],[1,"ml-2"],[1,"small","bold"],[1,"d-block","bold","text-contrast"],["href","https://play.google.com/store/apps/details?id=ai.everythink.community",1,"nav-link","py-3","px-4","btn","btn-rounded","btn-download","btn-light","text-darker"],["src","assets/images/app-landing/svg/google-play.svg","alt","EVERYTHINK DIRECTORY SMART ASSISTANTS",1,"icon","icon-md"],[1,"d-block","bold","text-darker"]],template:function(n,e){1&n&&(b.Qb(0,"section",0),b.Fc(1,"\n  "),b.Qb(2,"div",1),b.Fc(3,"\n    "),b.Qb(4,"div",2),b.Fc(5,"\n      "),b.Qb(6,"div",3),b.Fc(7,"\n        "),b.Qb(8,"p",4),b.Fc(9),b.gc(10,"translate"),b.Pb(),b.Fc(11,"\n        "),b.Qb(12,"h2"),b.Fc(13),b.gc(14,"translate"),b.Pb(),b.Fc(15,"\n        "),b.Qb(16,"p",5),b.Fc(17),b.gc(18,"translate"),b.Pb(),b.Fc(19,"\n      "),b.Pb(),b.Fc(20,"\n\n      "),b.Qb(21,"nav",6),b.Fc(22,"\n        "),b.Qb(23,"a",7),b.Fc(24,"\n          "),b.Mb(25,"img",8),b.Fc(26,"\n          "),b.Qb(27,"p",9),b.Fc(28,"\n            "),b.Qb(29,"span",10),b.Fc(30),b.gc(31,"translate"),b.Pb(),b.Fc(32,"\n            "),b.Qb(33,"span",11),b.Fc(34),b.gc(35,"translate"),b.Pb(),b.Fc(36,"\n          "),b.Pb(),b.Fc(37,"\n        "),b.Pb(),b.Fc(38,"\n\n        "),b.Qb(39,"a",12),b.Fc(40,"\n          "),b.Mb(41,"img",13),b.Fc(42,"\n          "),b.Qb(43,"p",9),b.Fc(44,"\n            "),b.Qb(45,"span",10),b.Fc(46),b.gc(47,"translate"),b.Pb(),b.Fc(48,"\n            "),b.Qb(49,"span",14),b.Fc(50),b.gc(51,"translate"),b.Pb(),b.Fc(52,"\n          "),b.Pb(),b.Fc(53,"\n        "),b.Pb(),b.Fc(54,"\n      "),b.Pb(),b.Fc(55,"\n    "),b.Pb(),b.Fc(56,"\n  "),b.Pb(),b.Fc(57,"\n"),b.Pb(),b.Fc(58,"\n")),2&n&&(b.xb(9),b.Hc("\n          ",b.hc(10,7,"HOME.APP_LANDING_HEADING.DOWNLOAD.START_TODAY"),"\n        "),b.xb(4),b.Hc("\n          ",b.hc(14,9,"HOME.APP_LANDING_HEADING.DOWNLOAD.DOWNLOAD_THE_APP"),"\n        "),b.xb(4),b.Hc("\n          ",b.hc(18,11,"HOME.APP_LANDING_HEADING.DOWNLOAD.DOWNLOAD_EVERYTHING"),"\n        "),b.xb(13),b.Gc(b.hc(31,13,"HOME.APP_LANDING_HEADING.DOWNLOAD.GET_IT_ON_THE")),b.xb(4),b.Gc(b.hc(35,15,"HOME.APP_LANDING_HEADING.DOWNLOAD.APP_STORE")),b.xb(12),b.Gc(b.hc(47,17,"HOME.APP_LANDING_HEADING.DOWNLOAD.DOWNLOAD_ON")),b.xb(4),b.Gc(b.hc(51,19,"HOME.APP_LANDING_HEADING.DOWNLOAD.GOOGLE_PLAY")))},pipes:[p.b],styles:[""]}),j),an=a("iLZQ"),sn=[{path:"",component:(z=function(){function e(t){n(this,e),this.i18nService=t,this.updateSeoTags()}return t(e,[{key:"ngOnInit",value:function(){this.updateSeoTags()}},{key:"updateSeoTags",value:function(){this.i18nService.updateSeoTags("HOME.NETWORK_SEARCH_META.TITLE","HOME.NETWORK_SEARCH_META.KEYWORDS")}}]),e}(),z.\u0275fac=function(n){return new(n||z)(b.Lb(F.a))},z.\u0275cmp=b.Fb({type:z,selectors:[["dc-app-landing"]],decls:19,vars:0,template:function(n,e){1&n&&(b.Mb(0,"dc-app-landing-heading"),b.Fc(1,"\n"),b.Mb(2,"dc-slider-icons"),b.Fc(3,"\n"),b.Mb(4,"dc-app-landing-feature-cards"),b.Fc(5,"\n\n"),b.Mb(6,"dc-app-landing-twin-phone-right-list"),b.Fc(7,"\n"),b.Mb(8,"dc-app-landing-twin-phone-left-list"),b.Fc(9,"\n"),b.Fc(10,"\n"),b.Mb(11,"dc-screenshots-app"),b.Fc(12,"\n"),b.Mb(13,"dc-testimonial-simple-slider"),b.Fc(14,"\n"),b.Mb(15,"dc-app-landing-download"),b.Fc(16,"\n\n"),b.Mb(17,"dc-footer2"),b.Fc(18,"\n"))},directives:[g,P.a,x,M,U,K,en,tn,an.a],styles:[""]}),z),data:{title:Object(F.c)("EveryThink HR Consulting")}}],cn=((q=function e(){n(this,e)}).\u0275mod=b.Jb({type:q}),q.\u0275inj=b.Ib({factory:function(n){return new(n||q)},imports:[[f.g.forChild(sn)]]}),q),on=(($=function e(){n(this,e)}).\u0275mod=b.Jb({type:$}),$.\u0275inj=b.Ib({factory:function(n){return new(n||$)},imports:[[o.a,h.a,r.a,l.a,d.a,m,cn,p.a.forChild()]]}),$)},V6j0:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i("M0ag"),s=i("+tcz"),c=i("sYmb"),o=i("fXoL"),r=function(){var e=function e(){n(this,e)};return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(n){return new(n||e)},imports:[[a.a,s.a,c.a.forChild()]]}),e}()},pu65:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i("nhfI"),s=i("M0ag"),c=i("sYmb"),o=i("fXoL"),r=function(){var e=function e(){n(this,e)};return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(n){return new(n||e)},imports:[[a.c,s.a,c.a.forChild()]]}),e}()}}])}();