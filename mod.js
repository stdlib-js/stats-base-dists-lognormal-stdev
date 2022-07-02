// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Math.sqrt,t=Math.floor,o=Math.ceil,e=t,a=o;var u=function(r){return r<0?a(r):e(r)},i=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,c=f,y=i;var v=function(r){return r===c||r===y};var l=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var p=function(){return l&&"symbol"==typeof Symbol.toStringTag},A=Object.prototype.toString,w=A;var U=function(r){return w.call(r)},b=Object.prototype.hasOwnProperty;var m=function(r,n){return null!=r&&b.call(r,n)},h="function"==typeof Symbol?Symbol.toStringTag:"",I=m,d=h,N=A;var s=U,F=function(r){var n,t,o;if(null==r)return N.call(r);t=r[d],n=I(r,d);try{r[d]=void 0}catch(n){return N.call(r)}return o=N.call(r),n?r[d]=t:delete r[d],o},S=p()?F:s,H=S,O="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null,E=function(r){return O&&r instanceof Uint32Array||"[object Uint32Array]"===H(r)},j=g;var T=function(){var r,n;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,4294967296,4294967297]),r=E(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var G="function"==typeof Uint32Array?Uint32Array:void 0,L=function(){throw new Error("not implemented")},M=T()?G:L,W=S,P="function"==typeof Float64Array;var V="function"==typeof Float64Array?Float64Array:null,Y=function(r){return P&&r instanceof Float64Array||"[object Float64Array]"===W(r)},_=V;var q=function(){var r,n;if("function"!=typeof _)return!1;try{n=new _([1,3.14,-3.14,NaN]),r=Y(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var x="function"==typeof Float64Array?Float64Array:void 0,k=function(){throw new Error("not implemented")},z=q()?x:k,B=S,C="function"==typeof Uint8Array;var D="function"==typeof Uint8Array?Uint8Array:null,J=function(r){return C&&r instanceof Uint8Array||"[object Uint8Array]"===B(r)},K=D;var Q=function(){var r,n;if("function"!=typeof K)return!1;try{n=new K(n=[1,3.14,-3.14,256,257]),r=J(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var R="function"==typeof Uint8Array?Uint8Array:void 0,X=function(){throw new Error("not implemented")},Z=Q()?R:X,$=S,rr="function"==typeof Uint16Array;var nr="function"==typeof Uint16Array?Uint16Array:null,tr=function(r){return rr&&r instanceof Uint16Array||"[object Uint16Array]"===$(r)},or=nr;var er=function(){var r,n;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,65536,65537]),r=tr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var ar,ur="function"==typeof Uint16Array?Uint16Array:void 0,ir=function(){throw new Error("not implemented")},fr={uint16:er()?ur:ir,uint8:Z};(ar=new fr.uint16(1))[0]=4660;var cr,yr,vr=52===new fr.uint8(ar.buffer)[0];!0===vr?(cr=1,yr=0):(cr=0,yr=1);var lr=M,pr={HIGH:cr,LOW:yr},Ar=new z(1),wr=new lr(Ar.buffer),Ur=pr.HIGH,br=pr.LOW;var mr=function(r,n){return Ar[0]=n,r[0]=wr[Ur],r[1]=wr[br],r};var hr=function(r,n){return 1===arguments.length?mr([0,0],r):mr(r,n)},Ir=M,dr=!0===vr?1:0,Nr=new z(1),sr=new Ir(Nr.buffer);var Fr,Sr,Hr=function(r){return Nr[0]=r,sr[dr]};!0===vr?(Fr=1,Sr=0):(Fr=0,Sr=1);var Or=M,gr={HIGH:Fr,LOW:Sr},Er=new z(1),jr=new Or(Er.buffer),Tr=gr.HIGH,Gr=gr.LOW;var Lr=function(r,n){return jr[Tr]=r,jr[Gr]=n,Er[0]},Mr=hr,Wr=Hr,Pr=Lr,Vr=[0,0];var Yr=v,_r=r,qr=function(r){return Math.abs(r)};var xr=function(r,n){return _r(n)||Yr(n)?(r[0]=n,r[1]=0,r):0!==n&&qr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var kr=Hr;var zr=function(r){var n=kr(r);return(n=(2146435072&n)>>>20)-1023|0},Br=f,Cr=i,Dr=r,Jr=v,Kr=function(r,n){var t,o;return Mr(Vr,r),t=Vr[0],t&=2147483647,o=Wr(n),Pr(t|=o&=2147483648,Vr[1])},Qr=function(r,n){return 1===arguments.length?xr([0,0],r):xr(r,n)},Rr=zr,Xr=hr,Zr=Lr,$r=[0,0],rn=[0,0];var nn=function(r,n){var t,o;return 0===n||0===r||Dr(r)||Jr(r)?r:(Qr($r,r),n+=$r[1],(n+=Rr(r=$r[0]))<-1074?Kr(0,r):n>1023?r<0?Cr:Br:(n<=-1023?(n+=52,o=2220446049250313e-31):o=1,Xr(rn,r),t=rn[0],t&=2148532223,o*Zr(t|=n+1023<<20,rn[1])))};var tn=nn,on=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var en=r,an=u,un=i,fn=f,cn=function(r,n,t){var o,e,a;return a=(o=r-n)-(e=o*o)*on(e),tn(1-(n-o*a/(2-a)-r),t)};var yn=function(r){var n;return en(r)||r===fn?r:r===un?0:r>709.782712893384?fn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=an(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),cn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};function vn(t,o){var e;return r(t)||r(o)||o<=0?NaN:n((yn(e=o*o)-1)*yn(2*t+e))}export{vn as default};
//# sourceMappingURL=mod.js.map
