"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=s(function(B,f){
var x=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(e,r,i,d){var n,u,a,t;if(e<=0)return NaN;if(e===1||i===0)return v(r[d]);for(u=d,n=v(r[u]),t=1;t<e;t++){if(u+=i,a=v(r[u]),x(a))return a;a<n&&(n=a)}return n}f.exports=l
});var c=s(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=q();function E(e,r,i){return _(e,r,i,R(e,i))}m.exports=E
});var y=s(function(D,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=c(),g=q();O(b,"ndarray",g);p.exports=b
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),o,j=k(h(__dirname,"./native.js"));w(j)?o=z:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
