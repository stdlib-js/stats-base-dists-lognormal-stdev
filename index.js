// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t=Math.sqrt,r=Math.floor,e=Math.ceil;function o(n){return n<0?e(n):r(n)}var i=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY;function u(n){return n===f||n===i}var a,c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),y=Object.prototype.toString,l=Object.prototype.hasOwnProperty,p="function"==typeof Symbol?Symbol.toStringTag:"",v=c&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,e,o,i;if(null==n)return y.call(n);r=n[p],i=p,t=null!=(o=n)&&l.call(o,i);try{n[p]=void 0}catch(t){return y.call(n)}return e=y.call(n),t?n[p]=r:delete n[p],e}:function(n){return y.call(n)},A="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var n,t,r;if("function"!=typeof b)return!1;try{t=new b(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(A&&r instanceof Uint32Array||"[object Uint32Array]"===v(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var w,U=a,m="function"==typeof Float64Array,h="function"==typeof Float64Array?Float64Array:null,s="function"==typeof Float64Array?Float64Array:void 0;w=function(){var n,t,r;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,NaN]),r=t,n=(m&&r instanceof Float64Array||"[object Float64Array]"===v(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var I,N=w,g="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,S="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,256,257]),r=t,n=(g&&r instanceof Uint8Array||"[object Uint8Array]"===v(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var H,O=I,T="function"==typeof Uint16Array,j="function"==typeof Uint16Array?Uint16Array:null,E="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var n,t,r;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,65536,65537]),r=t,n=(T&&r instanceof Uint16Array||"[object Uint16Array]"===v(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?E:function(){throw new Error("not implemented")};var G,L={uint16:H,uint8:O};(G=new L.uint16(1))[0]=4660;var M,W,x=52===new L.uint8(G.buffer)[0];!0===x?(M=1,W=0):(M=0,W=1);var P={HIGH:M,LOW:W},V=new N(1),Y=new U(V.buffer),_=P.HIGH,q=P.LOW;function k(n,t){return V[0]=t,n[0]=Y[_],n[1]=Y[q],n}function z(n,t){return 1===arguments.length?k([0,0],n):k(n,t)}var B,C,D=!0===x?1:0,J=new N(1),K=new U(J.buffer);function Q(n){return J[0]=n,K[D]}!0===x?(B=1,C=0):(B=0,C=1);var R={HIGH:B,LOW:C},X=new N(1),Z=new U(X.buffer),$=R.HIGH,nn=R.LOW;function tn(n,t){return Z[$]=n,Z[nn]=t,X[0]}var rn=[0,0];function en(t,r){return n(r)||u(r)?(t[0]=r,t[1]=0,t):0!==r&&function(n){return Math.abs(n)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var on=[0,0],fn=[0,0];function un(t,r){var e,o,a,c,y;return 0===r||0===t||n(t)||u(t)?t:(function(n,t){1===arguments.length?en([0,0],n):en(n,t)}(on,t),r+=on[1],r+=function(n){var t=Q(n);return(t=(2146435072&t)>>>20)-1023|0}(t=on[0]),r<-1074?(a=t,z(rn,0),c=rn[0],c&=2147483647,y=Q(a),tn(c|=y&=2147483648,rn[1])):r>1023?t<0?i:f:(r<=-1023?(r+=52,o=2220446049250313e-31):o=1,z(fn,t),e=fn[0],e&=2148532223,o*tn(e|=r+1023<<20,fn[1])))}var an=1.4426950408889634,cn=1/(1<<28);function yn(t){var r;return n(t)||t===f?t:t===i?0:t>709.782712893384?f:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<cn?1+t:function(n,t,r){var e,o,i,f;return un(1-(t-(e=n-t)*(i=e-(o=e*e)*(0===(f=o)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-n),r)}(t-.6931471803691238*(r=o(t<0?an*t-.5:an*t+.5)),1.9082149292705877e-10*r,r)}return function(r,e){var o;return n(r)||n(e)||e<=0?NaN:t((yn(o=e*e)-1)*yn(2*r+o))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).stdev=t();
//# sourceMappingURL=index.js.map
