"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=s(function(B,m){
var x=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function R(e,r,u){var v,i,a,n;if(e<=0)return NaN;if(e===1||u===0)return f(r[0]);for(u<0?i=(1-e)*u:i=0,v=f(r[i]),n=1;n<e;n++){if(i+=u,a=f(r[i]),x(a))return a;a<v&&(v=a)}return v}m.exports=R
});var p=s(function(C,c){
var _=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function E(e,r,u,v){var i,a,n,t;if(e<=0)return NaN;if(e===1||u===0)return q(r[v]);for(a=v,i=q(r[a]),t=1;t<e;t++){if(a+=u,n=q(r[a]),_(n))return n;n<i&&(i=n)}return i}c.exports=E
});var j=s(function(D,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),g=p();O(d,"ndarray",g);y.exports=d
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),o,l=k(h(__dirname,"./native.js"));w(l)?o=z:o=l;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
