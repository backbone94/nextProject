(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{81302:function(t,e,r){"use strict";r.d(e,{Z:function(){return x}});var n=r(87462),i=r(97685),o=r(67294),s=r(94184),u=r.n(s),f=r(21770),a=r(21640),h=r(15105),l=r(63386),c=r(71577),p=r(46449),y=r(23715),g=r(67630),v=r(61975),d=r(81643),w=r(96159),m=r(33603);function b(){var t=o.useRef(!0);return o.useEffect((function(){return function(){t.current=!1}}),[]),function(){return!t.current}}function E(t){return!(!t||!t.then)}var A=function(t){var e=o.useRef(!1),r=o.useRef(),s=b(),u=o.useState(!1),f=(0,i.Z)(u,2),a=f[0],h=f[1];o.useEffect((function(){var e;if(t.autoFocus){var n=r.current;e=setTimeout((function(){return n.focus()}))}return function(){e&&clearTimeout(e)}}),[]);var l=t.type,y=t.children,g=t.prefixCls,v=t.buttonProps;return o.createElement(c.Z,(0,n.Z)({},(0,p.n)(l),{onClick:function(r){var n=t.actionFn,i=t.close;if(!e.current)if(e.current=!0,n){var o;if(t.emitEvent){if(o=n(r),t.quitOnNullishReturnValue&&!E(o))return e.current=!1,void i(r)}else if(n.length)o=n(i),e.current=!1;else if(!(o=n()))return void i();!function(r){var n=t.close;E(r)&&(h(!0),r.then((function(){s()||h(!1),n.apply(void 0,arguments),e.current=!1}),(function(t){console.error(t),s()||h(!1),e.current=!1})))}(o)}else i()},loading:a,prefixCls:g},v,{ref:r}),y)},C=void 0,L=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r},B=o.forwardRef((function(t,e){var r=o.useContext(v.E_).getPrefixCls,s=(0,f.Z)(!1,{value:t.visible,defaultValue:t.defaultVisible}),a=(0,i.Z)(s,2),E=a[0],B=a[1],x=b(),T=function(e,r){var n;x()||B(e),null===(n=t.onVisibleChange)||void 0===n||n.call(t,e,r)},N=function(t){T(!1,t)},O=function(e){var r;return null===(r=t.onConfirm)||void 0===r?void 0:r.call(C,e)},S=function(e){var r;T(!1,e),null===(r=t.onCancel)||void 0===r||r.call(C,e)},U=t.prefixCls,_=t.placement,R=t.children,I=t.overlayClassName,P=L(t,["prefixCls","placement","children","overlayClassName"]),k=r("popover",U),M=r("popconfirm",U),j=u()(M,I),Z=o.createElement(y.Z,{componentName:"Popconfirm",defaultLocale:g.Z.Popconfirm},(function(e){return function(e,i){var s=t.okButtonProps,u=t.cancelButtonProps,f=t.title,a=t.cancelText,h=t.okText,l=t.okType,y=t.icon,g=t.showCancel,v=void 0===g||g;return o.createElement("div",{className:"".concat(e,"-inner-content")},o.createElement("div",{className:"".concat(e,"-message")},y,o.createElement("div",{className:"".concat(e,"-message-title")},(0,d.Z)(f))),o.createElement("div",{className:"".concat(e,"-buttons")},v&&o.createElement(c.Z,(0,n.Z)({onClick:S,size:"small"},u),a||i.cancelText),o.createElement(A,{buttonProps:(0,n.Z)((0,n.Z)({size:"small"},(0,p.n)(l)),s),actionFn:O,close:N,prefixCls:r("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},h||i.okText)))}(k,e)})),F=r();return o.createElement(l.Z,(0,n.Z)({},P,{prefixCls:k,placement:_,onVisibleChange:function(e){t.disabled||T(e)},visible:E,overlay:Z,overlayClassName:j,ref:e,transitionName:(0,m.m)(F,"zoom-big",t.transitionName)}),(0,w.Tm)(R,{onKeyDown:function(t){var e,r;o.isValidElement(R)&&(null===(r=null===R||void 0===R?void 0:(e=R.props).onKeyDown)||void 0===r||r.call(e,t)),function(t){t.keyCode===h.Z.ESC&&E&&T(!1,t)}(t)}}))}));B.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:o.createElement(a.Z,null),disabled:!1};var x=B},21876:function(t){!function(){var e={991:function(t,e){"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,o=f(t),s=o[0],u=o[1],a=new i(function(t,e,r){return 3*(e+r)/4-r}(0,s,u)),h=0,l=u>0?s-4:s;for(r=0;r<l;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],a[h++]=e>>16&255,a[h++]=e>>8&255,a[h++]=255&e;2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,a[h++]=255&e);1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,a[h++]=e>>8&255,a[h++]=255&e);return a},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],s=16383,u=0,f=n-i;u<f;u+=s)o.push(h(t,u,u+s>f?f:u+s));1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return o.join("")};for(var r=[],n=[],i="undefined"!==typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,u=o.length;s<u;++s)r[s]=o[s],n[o.charCodeAt(s)]=s;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function a(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function h(t,e,r){for(var n,i=[],o=e;o<r;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(a(n));return i.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},293:function(t,e,r){"use strict";var n=r(991),i=r(759),o="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=f,e.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},e.INSPECT_MAX_BYTES=50;var s=2147483647;function u(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,f.prototype),e}function f(t,e,r){if("number"===typeof t){if("string"===typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return l(t)}return a(t,e,r)}function a(t,e,r){if("string"===typeof t)return function(t,e){"string"===typeof e&&""!==e||(e="utf8");if(!f.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=0|g(t,e),n=u(r),i=n.write(t,e);i!==r&&(n=n.slice(0,i));return n}(t,e);if(ArrayBuffer.isView(t))return c(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(D(t,ArrayBuffer)||t&&D(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!==typeof SharedArrayBuffer&&(D(t,SharedArrayBuffer)||t&&D(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return f.from(n,e,r);var i=function(t){if(f.isBuffer(t)){var e=0|y(t.length),r=u(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!==typeof t.length||V(t.length)?u(0):c(t);if("Buffer"===t.type&&Array.isArray(t.data))return c(t.data)}(t);if(i)return i;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof t[Symbol.toPrimitive])return f.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!==typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function l(t){return h(t),u(t<0?0:0|y(t))}function c(t){for(var e=t.length<0?0:0|y(t.length),r=u(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,f.prototype),n}function y(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function g(t,e){if(f.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||D(t,ArrayBuffer))return t.byteLength;if("string"!==typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(t).length;default:if(i)return n?-1:Z(t).length;e=(""+e).toLowerCase(),i=!0}}function v(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return O(this,e,r);case"latin1":case"binary":return S(this,e,r);case"base64":return x(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function d(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,i){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),V(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"===typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,i);if("number"===typeof e)return e&=255,"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,i){var o,s=1,u=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,u/=2,f/=2,r/=2}function a(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var h=-1;for(o=r;o<u;o++)if(a(t,o)===a(e,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(r+f>u&&(r=u-f),o=r;o>=0;o--){for(var l=!0,c=0;c<f;c++)if(a(t,o+c)!==a(e,c)){l=!1;break}if(l)return o}return-1}function b(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;n>o/2&&(n=o/2);for(var s=0;s<n;++s){var u=parseInt(e.substr(2*s,2),16);if(V(u))return s;t[r+s]=u}return s}function E(t,e,r,n){return z(Z(e,t.length-r),t,r,n)}function A(t,e,r,n){return z(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function C(t,e,r,n){return A(t,e,r,n)}function L(t,e,r,n){return z(F(e),t,r,n)}function B(t,e,r,n){return z(function(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)n=(r=t.charCodeAt(s))>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function x(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,s,u,f,a=t[i],h=null,l=a>239?4:a>223?3:a>191?2:1;if(i+l<=r)switch(l){case 1:a<128&&(h=a);break;case 2:128===(192&(o=t[i+1]))&&(f=(31&a)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],s=t[i+2],128===(192&o)&&128===(192&s)&&(f=(15&a)<<12|(63&o)<<6|63&s)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],s=t[i+2],u=t[i+3],128===(192&o)&&128===(192&s)&&128===(192&u)&&(f=(15&a)<<18|(63&o)<<12|(63&s)<<6|63&u)>65535&&f<1114112&&(h=f)}null===h?(h=65533,l=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=l}return N(n)}e.kMaxLength=s,f.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(t,e,r){return a(t,e,r)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(t,e,r){return function(t,e,r){return h(t),t<=0?u(t):void 0!==e?"string"===typeof r?u(t).fill(e,r):u(t).fill(e):u(t)}(t,e,r)},f.allocUnsafe=function(t){return l(t)},f.allocUnsafeSlow=function(t){return l(t)},f.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==f.prototype},f.compare=function(t,e){if(D(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),D(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=f.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var o=t[r];if(D(o,Uint8Array)&&(o=f.from(o)),!f.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},f.byteLength=g,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)d(this,e,e+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)d(this,e,e+3),d(this,e+1,e+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)d(this,e,e+7),d(this,e+1,e+6),d(this,e+2,e+5),d(this,e+3,e+4);return this},f.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?T(this,0,t):v.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},o&&(f.prototype[o]=f.prototype.inspect),f.prototype.compare=function(t,e,r,n,i){if(D(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),u=Math.min(o,s),a=this.slice(n,i),h=t.slice(e,r),l=0;l<u;++l)if(a[l]!==h[l]){o=a[l],s=h[l];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return E(this,t,e,r);case"ascii":return A(this,t,e,r);case"latin1":case"binary":return C(this,t,e,r);case"base64":return L(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function N(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}function O(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function S(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function U(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=Y[t[o]];return i}function _(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function R(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function I(t,e,r,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function P(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function k(t,e,r,n,o){return e=+e,r>>>=0,o||P(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function M(t,e,r,n,o){return e=+e,r>>>=0,o||P(t,0,r,8),i.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return Object.setPrototypeOf(n,f.prototype),n},f.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},f.prototype.readUInt8=function(t,e){return t>>>=0,e||R(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,e){return t>>>=0,e||R(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,e){return t>>>=0,e||R(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,e){return t>>>=0,e||R(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,e){return t>>>=0,e||R(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},f.prototype.readInt8=function(t,e){return t>>>=0,e||R(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){t>>>=0,e||R(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){t>>>=0,e||R(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return t>>>=0,e||R(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return t>>>=0,e||R(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,e){return t>>>=0,e||R(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return t>>>=0,e||R(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return t>>>=0,e||R(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return t>>>=0,e||R(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||I(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||I(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,1,255,0),this[e]=255&t,e+1},f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var i=Math.pow(2,8*r-1);I(this,t,e,r,i-1,-i)}var o=0,s=1,u=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&0===u&&0!==this[e+o-1]&&(u=1),this[e+o]=(t/s>>0)-u&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var i=Math.pow(2,8*r-1);I(this,t,e,r,i-1,-i)}var o=r-1,s=1,u=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===u&&0!==this[e+o+1]&&(u=1),this[e+o]=(t/s>>0)-u&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||I(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeFloatLE=function(t,e,r){return k(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return k(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return M(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return M(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(!f.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i=n-r;if(this===t&&"function"===typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,n);else if(this===t&&r<e&&e<n)for(var o=i-1;o>=0;--o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,n),e);return i},f.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"===typeof t?t&=255:"boolean"===typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=f.isBuffer(t)?t:f.from(t,n),u=s.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=s[o%u]}return this};var j=/[^+/0-9A-Za-z-_]/g;function Z(t,e){var r;e=e||1/0;for(var n=t.length,i=null,o=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function F(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(j,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function z(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function D(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function V(t){return t!==t}var Y=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)e[n+i]=t[r]+t[i];return e}()},759:function(t,e){e.read=function(t,e,r,n,i){var o,s,u=8*i-n-1,f=(1<<u)-1,a=f>>1,h=-7,l=r?i-1:0,c=r?-1:1,p=t[e+l];for(l+=c,o=p&(1<<-h)-1,p>>=-h,h+=u;h>0;o=256*o+t[e+l],l+=c,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+t[e+l],l+=c,h-=8);if(0===o)o=1-a;else{if(o===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=a}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,u,f,a=8*o-i-1,h=(1<<a)-1,l=h>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),(e+=s+l>=1?c/f:c*Math.pow(2,1-l))*f>=2&&(s++,f/=2),s+l>=h?(u=0,s=h):s+l>=1?(u=(e*f-1)*Math.pow(2,i),s+=l):(u=e*Math.pow(2,l-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&u,p+=y,u/=256,i-=8);for(s=s<<i|u,a+=i;a>0;t[r+p]=255&s,p+=y,s/=256,a-=8);t[r+p-y]|=128*g}}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={exports:{}},s=!0;try{e[t](o,o.exports,n),s=!1}finally{s&&delete r[t]}return o.exports}n.ab="//";var i=n(293);t.exports=i}()},25293:function(t){!function(){"use strict";var e={182:function(t){var e,r="object"===typeof Reflect?Reflect:null,n=r&&"function"===typeof r.apply?r.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};e=r&&"function"===typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var i=Number.isNaN||function(t){return t!==t};function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise((function(r,n){function i(r){t.removeListener(e,o),n(r)}function o(){"function"===typeof t.removeListener&&t.removeListener("error",i),r([].slice.call(arguments))}g(t,e,o,{once:!0}),"error"!==e&&function(t,e,r){"function"===typeof t.on&&g(t,"error",e,r)}(t,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function u(t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function f(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function a(t,e,r,n){var i,o,s;if(u(r),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),s=o[e]),void 0===s)s=o[e]=r,++t._eventsCount;else if("function"===typeof s?s=o[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(i=f(t))>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=s.length,function(t){console&&console.warn&&console.warn(t)}(a)}return t}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=h.bind(n);return i.listener=r,n.wrapFn=i,i}function c(t,e,r){var n=t._events;if(void 0===n)return[];var i=n[e];return void 0===i?[]:"function"===typeof i?r?[i.listener||i]:[i]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(i):y(i,i.length)}function p(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"===typeof r)return 1;if(void 0!==r)return r.length}return 0}function y(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function g(t,e,r,n){if("function"===typeof t.on)n.once?t.once(e,r):t.on(e,r);else{if("function"!==typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function i(o){n.once&&t.removeEventListener(e,i),r(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(t){if("number"!==typeof t||t<0||i(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");s=t}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!==typeof t||t<0||i(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return f(this)},o.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var i="error"===t,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var f=o[t];if(void 0===f)return!1;if("function"===typeof f)n(f,this,e);else{var a=f.length,h=y(f,a);for(r=0;r<a;++r)n(h[r],this,e)}return!0},o.prototype.addListener=function(t,e){return a(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return a(this,t,e,!0)},o.prototype.once=function(t,e){return u(e),this.on(t,l(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return u(e),this.prependListener(t,l(this,t,e)),this},o.prototype.removeListener=function(t,e){var r,n,i,o,s;if(u(e),void 0===(n=this._events))return this;if(void 0===(r=n[t]))return this;if(r===e||r.listener===e)0===--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!==typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===e||r[o].listener===e){s=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,i),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,s||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0===--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},o.prototype.listeners=function(t){return c(this,t,!0)},o.prototype.rawListeners=function(t){return c(this,t,!1)},o.listenerCount=function(t,e){return"function"===typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={exports:{}},s=!0;try{e[t](o,o.exports,n),s=!1}finally{s&&delete r[t]}return o.exports}n.ab="//";var i=n(182);t.exports=i}()},32553:function(t,e,r){"use strict";var n=r(40396).Buffer,i=n.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function o(t){var e;switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!==typeof e&&(n.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=f,this.end=a,e=4;break;case"utf8":this.fillLast=u,e=4;break;case"base64":this.text=h,this.end=l,e=3;break;default:return this.write=c,void(this.end=p)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(e)}function s(t){return t<=127?0:t>>5===6?2:t>>4===14?3:t>>3===30?4:t>>6===2?-1:-2}function u(t){var e=this.lastTotal-this.lastNeed,r=function(t,e,r){if(128!==(192&e[0]))return t.lastNeed=0,"\ufffd";if(t.lastNeed>1&&e.length>1){if(128!==(192&e[1]))return t.lastNeed=1,"\ufffd";if(t.lastNeed>2&&e.length>2&&128!==(192&e[2]))return t.lastNeed=2,"\ufffd"}}(this,t);return void 0!==r?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function f(t,e){if((t.length-e)%2===0){var r=t.toString("utf16le",e);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function a(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function h(t,e){var r=(t.length-e)%3;return 0===r?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function l(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function c(t){return t.toString(this.encoding)}function p(t){return t&&t.length?this.write(t):""}e.StringDecoder=o,o.prototype.write=function(t){if(0===t.length)return"";var e,r;if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"\ufffd":e},o.prototype.text=function(t,e){var r=function(t,e,r){var n=e.length-1;if(n<r)return 0;var i=s(e[n]);if(i>=0)return i>0&&(t.lastNeed=i-1),i;if(--n<r||-2===i)return 0;if((i=s(e[n]))>=0)return i>0&&(t.lastNeed=i-2),i;if(--n<r||-2===i)return 0;if((i=s(e[n]))>=0)return i>0&&(2===i?i=0:t.lastNeed=i-3),i;return 0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var n=t.length-(r-this.lastNeed);return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},40396:function(t,e,r){var n=r(21876),i=n.Buffer;function o(t,e){for(var r in t)e[r]=t[r]}function s(t,e,r){return i(t,e,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=n:(o(n,e),e.Buffer=s),s.prototype=Object.create(i.prototype),o(i,s),s.from=function(t,e,r){if("number"===typeof t)throw new TypeError("Argument must not be a number");return i(t,e,r)},s.alloc=function(t,e,r){if("number"!==typeof t)throw new TypeError("Argument must be a number");var n=i(t);return void 0!==e?"string"===typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},s.allocUnsafe=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return i(t)},s.allocUnsafeSlow=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}}}]);