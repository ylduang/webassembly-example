
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=performance.now(),k={},m;for(m in g)g.hasOwnProperty(m)&&(k[m]=g[m]);var ba="./this.program",ca="object"===typeof window,u="function"===typeof importScripts,da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,x="",ea,y,A,B,C;
if(da)x=u?require("path").dirname(x)+"/":__dirname+"/",ea=function(a,b){B||(B=require("fs"));C||(C=require("path"));a=C.normalize(a);return B.readFileSync(a,b?null:"utf8")},A=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||E("Assertion failed: undefined");return a},y=function(a,b,c){B||(B=require("fs"));C||(C=require("path"));a=C.normalize(a);B.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),"undefined"!==
typeof module&&(module.exports=g),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",function(a){throw a;}),g.inspect=function(){return"[Emscripten Module object]"};else if(ca||u)u?x=self.location.href:"undefined"!==typeof document&&document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&
(A=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),y=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var fa=g.print||console.log.bind(console),F=g.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(g[m]=k[m]);k=null;g.thisProgram&&(ba=g.thisProgram);var G;
g.wasmBinary&&(G=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!==typeof WebAssembly&&E("no native wasm support detected");var ha,ia=!1;function ja(a){var b=g["_"+a];b||E("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function ka(a,b,c,d){var e={string:function(n){var r=0;if(null!==n&&void 0!==n&&0!==n){var v=(n.length<<2)+1;r=la(v);ma(n,H,r,v)}return r},array:function(n){var r=la(n.length);I.set(n,r);return r}};a=ja(a);var h=[],l=0;if(d)for(var q=0;q<d.length;q++){var w=e[c[q]];w?(0===l&&(l=na()),h[q]=w(d[q])):h[q]=d[q]}c=a.apply(null,h);return c=function(n){0!==l&&oa(l);return"string"===b?pa(n):"boolean"===b?!!n:n}(c)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function J(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function pa(a){return a?J(H,a,void 0):""}
function ma(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var q=a.charCodeAt(++h);l=65536+((l&1023)<<10)|q&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}var ra,I,H,sa,K,ta,ua,va,wa=[],xa=[],ya=[];
function za(){var a=g.preRun.shift();wa.unshift(a)}var L=0,Aa=null,M=null;g.preloadedImages={};g.preloadedAudios={};function E(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";F(a);ia=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ba(){return N.startsWith("data:application/octet-stream;base64,")}var N;N="index.wasm";if(!Ba()){var Ca=N;N=g.locateFile?g.locateFile(Ca,x):x+Ca}
function Da(){var a=N;try{if(a==N&&G)return new Uint8Array(G);if(A)return A(a);throw"both async and sync fetching of the wasm failed";}catch(b){E(b)}}
function Ea(){if(!G&&(ca||u)){if("function"===typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Da()});if(y)return new Promise(function(a,b){y(N,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Da()})}var O,Fa;
function Ga(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.qa;"number"===typeof c?void 0===b.S?va.get(c)():va.get(c)(b.S):c(void 0===b.S?null:b.S)}}}var Ha={};
function Ia(){if(!Ja){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ba||"./this.program"},b;for(b in Ha)void 0===Ha[b]?delete a[b]:a[b]=Ha[b];var c=[];for(b in a)c.push(b+"="+a[b]);Ja=c}return Ja}var Ja;
function Ka(a,b){for(var c=0,d=a.length-1;0<=d;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function P(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Ka(a.split("/").filter(function(d){return!!d}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function La(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function Ma(a){if("/"===a)return"/";a=P(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}
function Na(){if("object"===typeof crypto&&"function"===typeof crypto.getRandomValues){var a=new Uint8Array(1);return function(){crypto.getRandomValues(a);return a[0]}}if(da)try{var b=require("crypto");return function(){return b.randomBytes(1)[0]}}catch(c){}return function(){E("randomDevice")}}
function Q(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Ka(a.split("/").filter(function(d){return!!d}),!b).join("/");return(b?"/":"")+a||"."}var Oa=[];function Pa(a,b){Oa[a]={input:[],output:[],I:b};Qa(a,Ra)}
var Ra={open:function(a){var b=Oa[a.node.rdev];if(!b)throw new R(43);a.tty=b;a.seekable=!1},close:function(a){a.tty.I.flush(a.tty)},flush:function(a){a.tty.I.flush(a.tty)},read:function(a,b,c,d){if(!a.tty||!a.tty.I.aa)throw new R(60);for(var e=0,h=0;h<d;h++){try{var l=a.tty.I.aa(a.tty)}catch(q){throw new R(29);}if(void 0===l&&0===e)throw new R(6);if(null===l||void 0===l)break;e++;b[c+h]=l}e&&(a.node.timestamp=Date.now());return e},write:function(a,b,c,d){if(!a.tty||!a.tty.I.U)throw new R(60);try{for(var e=
0;e<d;e++)a.tty.I.U(a.tty,b[c+e])}catch(h){throw new R(29);}d&&(a.node.timestamp=Date.now());return e}},Ta={aa:function(a){if(!a.input.length){var b=null;if(da){var c=Buffer.alloc(256),d=0;try{d=B.readSync(process.stdin.fd,c,0,256,null)}catch(e){if(e.toString().includes("EOF"))d=0;else throw e;}0<d?b=c.slice(0,d).toString("utf-8"):b=null}else"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==
b&&(b+="\n"));if(!b)return null;a.input=Sa(b,!0)}return a.input.shift()},U:function(a,b){null===b||10===b?(fa(J(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(fa(J(a.output,0)),a.output=[])}},Ua={U:function(a,b){null===b||10===b?(F(J(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(F(J(a.output,0)),a.output=[])}},S={C:null,F:function(){return S.createNode(null,"/",16895,0)},createNode:function(a,b,
c,d){if(24576===(c&61440)||4096===(c&61440))throw new R(63);S.C||(S.C={dir:{node:{G:S.u.G,D:S.u.D,lookup:S.u.lookup,M:S.u.M,rename:S.u.rename,unlink:S.u.unlink,rmdir:S.u.rmdir,readdir:S.u.readdir,symlink:S.u.symlink},stream:{H:S.v.H}},file:{node:{G:S.u.G,D:S.u.D},stream:{H:S.v.H,read:S.v.read,write:S.v.write,W:S.v.W,ba:S.v.ba,ea:S.v.ea}},link:{node:{G:S.u.G,D:S.u.D,readlink:S.u.readlink},stream:{}},X:{node:{G:S.u.G,D:S.u.D},stream:Va}});c=Wa(a,b,c,d);16384===(c.mode&61440)?(c.u=S.C.dir.node,c.v=S.C.dir.stream,
c.s={}):32768===(c.mode&61440)?(c.u=S.C.file.node,c.v=S.C.file.stream,c.A=0,c.s=null):40960===(c.mode&61440)?(c.u=S.C.link.node,c.v=S.C.link.stream):8192===(c.mode&61440)&&(c.u=S.C.X.node,c.v=S.C.X.stream);c.timestamp=Date.now();a&&(a.s[b]=c,a.timestamp=c.timestamp);return c},ra:function(a){return a.s?a.s.subarray?a.s.subarray(0,a.A):new Uint8Array(a.s):new Uint8Array(0)},Y:function(a,b){var c=a.s?a.s.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,256)),c=a.s,a.s=new Uint8Array(b),
0<a.A&&a.s.set(c.subarray(0,a.A),0))},ia:function(a,b){if(a.A!=b)if(0==b)a.s=null,a.A=0;else{var c=a.s;a.s=new Uint8Array(b);c&&a.s.set(c.subarray(0,Math.min(b,a.A)));a.A=b}},u:{G:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;16384===(a.mode&61440)?b.size=4096:32768===(a.mode&61440)?b.size=a.A:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);
b.fa=4096;b.blocks=Math.ceil(b.size/b.fa);return b},D:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&S.ia(a,b.size)},lookup:function(){throw Xa[44];},M:function(a,b,c,d){return S.createNode(a,b,c,d)},rename:function(a,b,c){if(16384===(a.mode&61440)){try{var d=T(b,c)}catch(h){}if(d)for(var e in d.s)throw new R(55);}delete a.parent.s[a.name];a.parent.timestamp=Date.now();a.name=c;b.s[c]=a;b.timestamp=a.parent.timestamp;a.parent=b},unlink:function(a,
b){delete a.s[b];a.timestamp=Date.now()},rmdir:function(a,b){var c=T(a,b),d;for(d in c.s)throw new R(55);delete a.s[b];a.timestamp=Date.now()},readdir:function(a){var b=[".",".."],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=S.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new R(28);return a.link}},v:{read:function(a,b,c,d,e){var h=a.node.s;if(e>=a.node.A)return 0;a=Math.min(a.node.A-e,d);if(8<a&&h.subarray)b.set(h.subarray(e,
e+a),c);else for(d=0;d<a;d++)b[c+d]=h[e+d];return a},write:function(a,b,c,d,e,h){if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.s||a.s.subarray)){if(h)return a.s=b.subarray(c,c+d),a.A=d;if(0===a.A&&0===e)return a.s=b.slice(c,c+d),a.A=d;if(e+d<=a.A)return a.s.set(b.subarray(c,c+d),e),d}S.Y(a,e+d);if(a.s.subarray&&b.subarray)a.s.set(b.subarray(c,c+d),e);else for(h=0;h<d;h++)a.s[e+h]=b[c+h];a.A=Math.max(a.A,e+d);return d},H:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&
61440)&&(b+=a.node.A);if(0>b)throw new R(28);return b},W:function(a,b,c){S.Y(a.node,b+c);a.node.A=Math.max(a.node.A,b+c)},ba:function(a,b,c,d,e,h){if(0!==b)throw new R(28);if(32768!==(a.node.mode&61440))throw new R(43);a=a.node.s;if(h&2||a.buffer!==ra){if(0<d||d+c<a.length)a.subarray?a=a.subarray(d,d+c):a=Array.prototype.slice.call(a,d,d+c);d=!0;E();c=void 0;if(!c)throw new R(48);I.set(a,c)}else d=!1,c=a.byteOffset;return{ta:c,pa:d}},ea:function(a,b,c,d,e){if(32768!==(a.node.mode&61440))throw new R(43);
if(e&2)return 0;S.v.write(a,b,0,d,c,!1);return 0}}},Ya=null,Za={},U=[],$a=1,V=null,ab=!0,R=null,Xa={};
function W(a,b){a=Q("/",a);b=b||{};if(!a)return{path:"",node:null};var c={$:!0,V:0},d;for(d in c)void 0===b[d]&&(b[d]=c[d]);if(8<b.V)throw new R(32);a=Ka(a.split("/").filter(function(l){return!!l}),!1);var e=Ya;c="/";for(d=0;d<a.length;d++){var h=d===a.length-1;if(h&&b.parent)break;e=T(e,a[d]);c=P(c+"/"+a[d]);e.N&&(!h||h&&b.$)&&(e=e.N.root);if(!h||b.Z)for(h=0;40960===(e.mode&61440);)if(e=bb(c),c=Q(La(c),e),e=W(c,{V:b.V}).node,40<h++)throw new R(32);}return{path:c,node:e}}
function cb(a){for(var b;;){if(a===a.parent)return a=a.F.da,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function db(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%V.length}function T(a,b){var c;if(c=(c=X(a,"x"))?c:a.u.lookup?0:2)throw new R(c,a);for(c=V[db(a.id,b)];c;c=c.ha){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.u.lookup(a,b)}function Wa(a,b,c,d){a=new eb(a,b,c,d);b=db(a.parent.id,a.name);a.ha=V[b];return V[b]=a}
var fb={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090};function gb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function X(a,b){if(ab)return 0;if(!b.includes("r")||a.mode&292){if(b.includes("w")&&!(a.mode&146)||b.includes("x")&&!(a.mode&73))return 2}else return 2;return 0}function hb(a,b){try{return T(a,b),20}catch(c){}return X(a,"wx")}function ib(){var a=4096;for(var b=0;b<=a;b++)if(!U[b])return b;throw new R(33);}
function jb(a){kb||(kb=function(){},kb.prototype={});var b=new kb,c;for(c in a)b[c]=a[c];a=b;b=ib();a.fd=b;return U[b]=a}var Va={open:function(a){a.v=Za[a.node.rdev].v;a.v.open&&a.v.open(a)},H:function(){throw new R(70);}};function Qa(a,b){Za[a]={v:b}}
function lb(a,b){var c="/"===b,d=!b;if(c&&Ya)throw new R(10);if(!c&&!d){var e=W(b,{$:!1});b=e.path;e=e.node;if(e.N)throw new R(10);if(16384!==(e.mode&61440))throw new R(54);}b={type:a,sa:{},da:b,ga:[]};a=a.F(b);a.F=b;b.root=a;c?Ya=a:e&&(e.N=b,e.F&&e.F.ga.push(b))}function mb(a,b,c){var d=W(a,{parent:!0}).node;a=Ma(a);if(!a||"."===a||".."===a)throw new R(28);var e=hb(d,a);if(e)throw new R(e);if(!d.u.M)throw new R(63);return d.u.M(d,a,b,c)}function Y(a){return mb(a,16895,0)}
function nb(a,b,c){"undefined"===typeof c&&(c=b,b=438);mb(a,b|8192,c)}function ob(a,b){if(!Q(a))throw new R(44);var c=W(b,{parent:!0}).node;if(!c)throw new R(44);b=Ma(b);var d=hb(c,b);if(d)throw new R(d);if(!c.u.symlink)throw new R(63);c.u.symlink(c,b,a)}function bb(a){a=W(a).node;if(!a)throw new R(44);if(!a.u.readlink)throw new R(28);return Q(cb(a.parent),a.u.readlink(a))}
function qb(a,b){if(""===a)throw new R(44);if("string"===typeof b){var c=fb[b];if("undefined"===typeof c)throw Error("Unknown file open mode: "+b);b=c}var d=b&64?("undefined"===typeof d?438:d)&4095|32768:0;if("object"===typeof a)var e=a;else{a=P(a);try{e=W(a,{Z:!(b&131072)}).node}catch(h){}}c=!1;if(b&64)if(e){if(b&128)throw new R(20);}else e=mb(a,d,0),c=!0;if(!e)throw new R(44);8192===(e.mode&61440)&&(b&=-513);if(b&65536&&16384!==(e.mode&61440))throw new R(54);if(!c&&(d=e?40960===(e.mode&61440)?32:
16384===(e.mode&61440)&&("r"!==gb(b)||b&512)?31:X(e,gb(b)):44))throw new R(d);if(b&512){d=e;d="string"===typeof d?W(d,{Z:!0}).node:d;if(!d.u.D)throw new R(63);if(16384===(d.mode&61440))throw new R(31);if(32768!==(d.mode&61440))throw new R(28);if(c=X(d,"w"))throw new R(c);d.u.D(d,{size:0,timestamp:Date.now()})}b&=-131713;e=jb({node:e,path:cb(e),flags:b,seekable:!0,position:0,v:e.v,oa:[],error:!1});e.v.open&&e.v.open(e);!g.logReadFiles||b&1||(rb||(rb={}),a in rb||(rb[a]=1))}
function sb(a,b,c){if(null===a.fd)throw new R(8);if(!a.seekable||!a.v.H)throw new R(70);if(0!=c&&1!=c&&2!=c)throw new R(28);a.position=a.v.H(a,b,c);a.oa=[]}function tb(){R||(R=function(a,b){this.node=b;this.ja=function(c){this.L=c};this.ja(a);this.message="FS error"},R.prototype=Error(),R.prototype.constructor=R,[44].forEach(function(a){Xa[a]=new R(a);Xa[a].stack="<generic error, no stack>"}))}var ub;function vb(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Z(a,b,c){a=P("/dev/"+a);var d=vb(!!b,!!c);wb||(wb=64);var e=wb++<<8|0;Qa(e,{open:function(h){h.seekable=!1},close:function(){c&&c.buffer&&c.buffer.length&&c(10)},read:function(h,l,q,w){for(var n=0,r=0;r<w;r++){try{var v=b()}catch(D){throw new R(29);}if(void 0===v&&0===n)throw new R(6);if(null===v||void 0===v)break;n++;l[q+r]=v}n&&(h.node.timestamp=Date.now());return n},write:function(h,l,q,w){for(var n=0;n<w;n++)try{c(l[q+n])}catch(r){throw new R(29);}w&&(h.node.timestamp=Date.now());return n}});
nb(a,d,e)}var wb,xb={},kb,rb;function yb(a){a=U[a];if(!a)throw new R(8);return a}function zb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Ab(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var Bb=[31,29,31,30,31,30,31,31,30,31,30,31],Cb=[31,28,31,30,31,30,31,31,30,31,30,31];
function Db(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(zb(a.getFullYear())?Bb:Cb)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Eb(a,b,c,d){function e(f,p,t){for(f="number"===typeof f?f.toString():f||"";f.length<p;)f=t[0]+f;return f}function h(f,p){return e(f,p,"0")}function l(f,p){function t(pb){return 0>pb?-1:0<pb?1:0}var z;0===(z=t(f.getFullYear()-p.getFullYear()))&&0===(z=t(f.getMonth()-p.getMonth()))&&(z=t(f.getDate()-p.getDate()));return z}function q(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),
0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function w(f){f=Db(new Date(f.B+1900,0,1),f.R);var p=new Date(f.getFullYear()+1,0,4),t=q(new Date(f.getFullYear(),0,4));p=q(p);return 0>=l(t,f)?0>=l(p,f)?f.getFullYear()+1:f.getFullYear():f.getFullYear()-1}var n=K[d+40>>2];d={ma:K[d>>2],la:K[d+4>>2],O:K[d+8>>2],K:K[d+12>>2],J:K[d+16>>2],B:K[d+20>>2],P:K[d+24>>2],R:K[d+28>>2],ua:K[d+32>>2],ka:K[d+36>>2],
na:n?pa(n):""};c=pa(c);n={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in n)c=c.replace(new RegExp(r,"g"),n[r]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
D="January February March April May June July August September October November December".split(" ");n={"%a":function(f){return v[f.P].substring(0,3)},"%A":function(f){return v[f.P]},"%b":function(f){return D[f.J].substring(0,3)},"%B":function(f){return D[f.J]},"%C":function(f){return h((f.B+1900)/100|0,2)},"%d":function(f){return h(f.K,2)},"%e":function(f){return e(f.K,2," ")},"%g":function(f){return w(f).toString().substring(2)},"%G":function(f){return w(f)},"%H":function(f){return h(f.O,2)},"%I":function(f){f=
f.O;0==f?f=12:12<f&&(f-=12);return h(f,2)},"%j":function(f){return h(f.K+Ab(zb(f.B+1900)?Bb:Cb,f.J-1),3)},"%m":function(f){return h(f.J+1,2)},"%M":function(f){return h(f.la,2)},"%n":function(){return"\n"},"%p":function(f){return 0<=f.O&&12>f.O?"AM":"PM"},"%S":function(f){return h(f.ma,2)},"%t":function(){return"\t"},"%u":function(f){return f.P||7},"%U":function(f){var p=new Date(f.B+1900,0,1),t=0===p.getDay()?p:Db(p,7-p.getDay());f=new Date(f.B+1900,f.J,f.K);return 0>l(t,f)?h(Math.ceil((31-t.getDate()+
(Ab(zb(f.getFullYear())?Bb:Cb,f.getMonth()-1)-31)+f.getDate())/7),2):0===l(t,p)?"01":"00"},"%V":function(f){var p=new Date(f.B+1901,0,4),t=q(new Date(f.B+1900,0,4));p=q(p);var z=Db(new Date(f.B+1900,0,1),f.R);return 0>l(z,t)?"53":0>=l(p,z)?"01":h(Math.ceil((t.getFullYear()<f.B+1900?f.R+32-t.getDate():f.R+1-t.getDate())/7),2)},"%w":function(f){return f.P},"%W":function(f){var p=new Date(f.B,0,1),t=1===p.getDay()?p:Db(p,0===p.getDay()?1:7-p.getDay()+1);f=new Date(f.B+1900,f.J,f.K);return 0>l(t,f)?h(Math.ceil((31-
t.getDate()+(Ab(zb(f.getFullYear())?Bb:Cb,f.getMonth()-1)-31)+f.getDate())/7),2):0===l(t,p)?"01":"00"},"%y":function(f){return(f.B+1900).toString().substring(2)},"%Y":function(f){return f.B+1900},"%z":function(f){f=f.ka;var p=0<=f;f=Math.abs(f)/60;return(p?"+":"-")+String("0000"+(f/60*100+f%60)).slice(-4)},"%Z":function(f){return f.na},"%%":function(){return"%"}};for(r in n)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),n[r](d)));r=Sa(c,!1);if(r.length>b)return 0;I.set(r,a);return r.length-1}
function eb(a,b,c,d){a||(a=this);this.parent=a;this.F=a.F;this.N=null;this.id=$a++;this.name=b;this.mode=c;this.u={};this.v={};this.rdev=d}Object.defineProperties(eb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}}});tb();V=Array(4096);lb(S,"/");Y("/tmp");Y("/home");Y("/home/web_user");
(function(){Y("/dev");Qa(259,{read:function(){return 0},write:function(b,c,d,e){return e}});nb("/dev/null",259);Pa(1280,Ta);Pa(1536,Ua);nb("/dev/tty",1280);nb("/dev/tty1",1536);var a=Na();Z("random",a);Z("urandom",a);Y("/dev/shm");Y("/dev/shm/tmp")})();
(function(){Y("/proc");var a=Y("/proc/self");Y("/proc/self/fd");lb({F:function(){var b=Wa(a,"fd",16895,73);b.u={lookup:function(c,d){var e=U[+d];if(!e)throw new R(8);c={parent:null,F:{da:"fake"},u:{readlink:function(){return e.path}}};return c.parent=c}};return b}},"/proc/self/fd")})();
function Sa(a,b){for(var c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++c:c=2047>=e?c+2:65535>=e?c+3:c+4}c=Array(c+1);a=ma(a,c,0,c.length);b&&(c.length=a);return c}
var Fb={b:function(){E("")},c:function(a,b,c){H.copyWithin(a,b,b+c)},d:function(){E("OOM")},h:function(a,b){var c=0;Ia().forEach(function(d,e){var h=b+c;e=K[a+4*e>>2]=h;for(h=0;h<d.length;++h)I[e++>>0]=d.charCodeAt(h);I[e>>0]=0;c+=d.length+1});return 0},j:function(a,b){var c=Ia();K[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});K[b>>2]=d;return 0},e:function(a){try{var b=yb(a);if(null===b.fd)throw new R(8);b.T&&(b.T=null);try{b.v.close&&b.v.close(b)}catch(c){throw c;}finally{U[b.fd]=
null}b.fd=null;return 0}catch(c){return"undefined"!==typeof xb&&c instanceof R||E(c),c.L}},f:function(a,b,c,d){try{a:{for(var e=yb(a),h=a=0;h<c;h++){var l=K[b+(8*h+4)>>2],q=e,w=K[b+8*h>>2],n=l,r=void 0,v=I;if(0>n||0>r)throw new R(28);if(null===q.fd)throw new R(8);if(1===(q.flags&2097155))throw new R(8);if(16384===(q.node.mode&61440))throw new R(31);if(!q.v.read)throw new R(28);var D="undefined"!==typeof r;if(!D)r=q.position;else if(!q.seekable)throw new R(70);var f=q.v.read(q,v,w,n,r);D||(q.position+=
f);var p=f;if(0>p){var t=-1;break a}a+=p;if(p<l)break}t=a}K[d>>2]=t;return 0}catch(z){return"undefined"!==typeof xb&&z instanceof R||E(z),z.L}},i:function(a,b,c,d,e){try{var h=yb(a);a=4294967296*c+(b>>>0);if(-9007199254740992>=a||9007199254740992<=a)return-61;sb(h,a,d);Fa=[h.position>>>0,(O=h.position,1<=+Math.abs(O)?0<O?(Math.min(+Math.floor(O/4294967296),4294967295)|0)>>>0:~~+Math.ceil((O-+(~~O>>>0))/4294967296)>>>0:0)];K[e>>2]=Fa[0];K[e+4>>2]=Fa[1];h.T&&0===a&&0===d&&(h.T=null);return 0}catch(l){return"undefined"!==
typeof xb&&l instanceof R||E(l),l.L}},a:function(a,b,c,d){try{a:{for(var e=yb(a),h=a=0;h<c;h++){var l=e,q=K[b+8*h>>2],w=K[b+(8*h+4)>>2],n=void 0,r=I;if(0>w||0>n)throw new R(28);if(null===l.fd)throw new R(8);if(0===(l.flags&2097155))throw new R(8);if(16384===(l.node.mode&61440))throw new R(31);if(!l.v.write)throw new R(28);l.seekable&&l.flags&1024&&sb(l,0,2);var v="undefined"!==typeof n;if(!v)n=l.position;else if(!l.seekable)throw new R(70);var D=l.v.write(l,r,q,w,n,void 0);v||(l.position+=D);var f=
D;if(0>f){var p=-1;break a}a+=f}p=a}K[d>>2]=p;return 0}catch(t){return"undefined"!==typeof xb&&t instanceof R||E(t),t.L}},g:function(a,b,c,d){return Eb(a,b,c,d)}};
(function(){function a(e){g.asm=e.exports;ha=g.asm.k;ra=e=ha.buffer;g.HEAP8=I=new Int8Array(e);g.HEAP16=sa=new Int16Array(e);g.HEAP32=K=new Int32Array(e);g.HEAPU8=H=new Uint8Array(e);g.HEAPU16=new Uint16Array(e);g.HEAPU32=new Uint32Array(e);g.HEAPF32=ta=new Float32Array(e);g.HEAPF64=ua=new Float64Array(e);va=g.asm.n;xa.unshift(g.asm.l);L--;g.monitorRunDependencies&&g.monitorRunDependencies(L);0==L&&(null!==Aa&&(clearInterval(Aa),Aa=null),M&&(e=M,M=null,e()))}function b(e){a(e.instance)}function c(e){return Ea().then(function(h){return WebAssembly.instantiate(h,
d)}).then(function(h){return h}).then(e,function(h){F("failed to asynchronously prepare wasm: "+h);E(h)})}var d={a:Fb};L++;g.monitorRunDependencies&&g.monitorRunDependencies(L);if(g.instantiateWasm)try{return g.instantiateWasm(d,a)}catch(e){return F("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return G||"function"!==typeof WebAssembly.instantiateStreaming||Ba()||N.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,
d).then(b,function(h){F("wasm streaming compile failed: "+h);F("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.l).apply(null,arguments)};g._quickSort=function(){return(g._quickSort=g.asm.m).apply(null,arguments)};
var na=g.stackSave=function(){return(na=g.stackSave=g.asm.o).apply(null,arguments)},oa=g.stackRestore=function(){return(oa=g.stackRestore=g.asm.p).apply(null,arguments)},la=g.stackAlloc=function(){return(la=g.stackAlloc=g.asm.q).apply(null,arguments)};g.cwrap=function(a,b,c,d){c=c||[];var e=c.every(function(h){return"number"===h});return"string"!==b&&e&&!d?ja(a):function(){return ka(a,b,c,arguments)}};
g.getValue=function(a,b){b=b||"i8";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return I[a>>0];case "i8":return I[a>>0];case "i16":return sa[a>>1];case "i32":return K[a>>2];case "i64":return K[a>>2];case "float":return ta[a>>2];case "double":return ua[a>>3];default:E("invalid type for getValue: "+b)}return null};var Gb;M=function Hb(){Gb||Ib();Gb||(M=Hb)};
function Ib(){function a(){if(!Gb&&(Gb=!0,g.calledRun=!0,!ia)){g.noFSInit||ub||(ub=!0,tb(),g.stdin=g.stdin,g.stdout=g.stdout,g.stderr=g.stderr,g.stdin?Z("stdin",g.stdin):ob("/dev/tty","/dev/stdin"),g.stdout?Z("stdout",null,g.stdout):ob("/dev/tty","/dev/stdout"),g.stderr?Z("stderr",null,g.stderr):ob("/dev/tty1","/dev/stderr"),qb("/dev/stdin",0),qb("/dev/stdout",1),qb("/dev/stderr",1));ab=!1;Ga(xa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=
[g.postRun]);g.postRun.length;){var b=g.postRun.shift();ya.unshift(b)}Ga(ya)}}if(!(0<L)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)za();Ga(wa);0<L||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);a()},1)):a())}}g.run=Ib;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();Ib();
ya.push(()=>{var a=[11,24,36,42,4,25,9,1,0],b=g.cwrap("quickSort","number",["array","number","number"])(a,0,a.length-1),c=[];for(let d=0;d<a.length;d++)c.push(g.getValue(b+d,"i8"));console.log(c);b=performance.timing;a=b.loadEventStart-b.navigationStart;b=(new Date).getTime()-b.navigationStart;console.log("Application ET:",Math.round(performance.now()-aa),"ms");console.log("Application LT:",a,"ms");console.log("Application TT:",b,"ms")});