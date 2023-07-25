(function(){var e={4207:function(e,t,r){"use strict";var n=r(9242),o=r(3396);const l={class:"wrapper"},s={class:"switch mt-10"},a={class:"p-inputgroup flex-1 mt-10"};function i(e,t,r,n,i,u){const c=(0,o.up)("Password"),d=(0,o.up)("InputNumber"),p=(0,o.up)("Slider"),m=(0,o.up)("InputSwitch"),f=(0,o.up)("InputText"),h=(0,o.up)("Button"),y=(0,o.up)("Card"),b=(0,o.up)("Toast");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",l,[(0,o.Wm)(y,{style:{width:"25em"}},{title:(0,o.w5)((()=>[(0,o.Uk)(" Password Generator ")])),subtitle:(0,o.w5)((()=>[(0,o.Uk)(" For the extra lazy. Allows you to make different passwords from one password :D ")])),content:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"password",placeholder:"Password",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),feedback:!1,toggleMask:""},null,8,["modelValue"]),(0,o.Wm)(d,{class:"w-full mt-10",placeholder:"Iterations",min:0,max:100,disabled:0===e.text.length,modelValue:e.numberOfCycles,"onUpdate:modelValue":t[1]||(t[1]=t=>e.numberOfCycles=t),showButtons:"",buttonLayout:"horizontal",step:1},null,8,["disabled","modelValue"]),(0,o.Wm)(p,{class:"w-full mt-10",disabled:0===e.text.length,min:0,max:100,modelValue:e.numberOfCycles,"onUpdate:modelValue":t[2]||(t[2]=t=>e.numberOfCycles=t)},null,8,["disabled","modelValue"]),(0,o._)("div",s,[(0,o.Wm)(m,{modelValue:e.isWildcards,"onUpdate:modelValue":t[3]||(t[3]=t=>e.isWildcards=t)},null,8,["modelValue"]),(0,o.Uk)(" Use special characters ")]),(0,o._)("div",a,[(0,o.Wm)(f,{disabled:0===e.cryptoResult.length,placeholder:"Result",readonly:"",value:e.cryptoResult},null,8,["disabled","value"]),(0,o.Wm)(h,{onClick:t[4]||(t[4]=t=>e.copy(e.cryptoResult)),disabled:0===e.cryptoResult.length,icon:"pi pi-copy"},null,8,["disabled"])])])),footer:(0,o.w5)((()=>[(0,o.Wm)(h,{disabled:0===e.text.length,onClick:e.onGenerate,class:"w-full",label:"Generate password"},null,8,["disabled","onClick"])])),_:1})]),(0,o.Wm)(b)],64)}var u=r(7327),c=r(6520),d=r(8082),p=r.n(d),m=r(423);class f{createFromString(e,t=1,r){let n=e;for(let o=0;o<=t;o++)n=this.createMD5(this.createSHA512(this.createSHA256(n)));return r?this.createWildcards(n,t):n}createMD5(e){return p().MD5(e).toString()}createSHA256(e){return p().SHA256(e).toString()}createSHA512(e){return p().SHA512(e).toString()}createWildcards(e,t){const r=new m.Z(e),n=["#","%","!","_","$"];for(let o=0;o<t;o++){const t=this.getRandomInt(r,1,e.length-1),o=n[this.getRandomInt(r,0,n.length)];e=this.replaceCharacterByIndex(e,t,o)}return e}getRandomInt(e,t,r){return t=Math.ceil(t),r=Math.floor(r),Math.floor(e.next()*(r-t))+t}replaceCharacterByIndex(e,t,r){return e.substring(0,t)+r+e.substring(t+r.length)}}var h=function(e,t,r,n){var o,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(l<3?o(s):l>3?o(t,r,s):o(t,r))||s);return l>3&&s&&Object.defineProperty(t,r,s),s};let y=class extends c.w3{constructor(...e){super(...e),(0,u.Z)(this,"modelValue",{text:"",numberOfCycles:0,isWildcards:!1}),(0,u.Z)(this,"cryptoResult","")}get text(){return this.modelValue.text}set text(e){this.cryptoResult="",this.modelValue.text=e}get numberOfCycles(){return this.modelValue.numberOfCycles}set numberOfCycles(e){this.cryptoResult="",this.modelValue.numberOfCycles=e}get isWildcards(){return this.modelValue.isWildcards}set isWildcards(e){this.cryptoResult="",this.modelValue.isWildcards=e}onGenerate(){this.cryptoResult=(new f).createFromString(this.text,this.numberOfCycles,this.isWildcards)}copy(e){if(document.execCommand){const t=document.createElement("input");return t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy")?this.$toast.add({severity:"success",summary:"Success!",detail:"Saved to clipboard",life:3e3}):this.$toast.add({severity:"error",summary:"Error!",detail:"Failed to save to clipboard",life:3e3}),void document.body.removeChild(t)}navigator.clipboard.writeText(e).then((()=>{this.$toast.add({severity:"success",summary:"Success!",detail:"Saved to clipboard",life:3e3})})).catch((()=>{this.$toast.add({severity:"error",summary:"Error!",detail:"Failed to save to clipboard",life:3e3})}))}};y=h([(0,c.Ei)({})],y);var b=y,v=r(89);const w=(0,v.Z)(b,[["render",i]]);var g=w,x=r(3852),O=r(8707),C=r(6762),S=r(8090),V=r(606),W=r(6709),R=r(898),k=r(2439),Z=r(6343),I=r(2531);(0,n.ri)(g).use(x.ZP).use(I.Z).component("Button",O.Z).component("Password",C.Z).component("Slider",S.Z).component("Card",V.Z).component("InputText",W.Z).component("InputNumber",R.Z).component("InputSwitch",k.Z).component("Toast",Z.Z).mount("#app")},2480:function(){}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,r),l.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,l){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var a=!0,i=0;i<n.length;i++)(!1&l||s>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(a=!1,l<s&&(s=l));if(a){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,s=n[0],a=n[1],i=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(i)var c=i(r)}for(t&&t(n);u<s.length;u++)l=s[u],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},n=self["webpackChunkpassword"]=self["webpackChunkpassword"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4207)}));n=r.O(n)})();
//# sourceMappingURL=app.f39f1b31.js.map