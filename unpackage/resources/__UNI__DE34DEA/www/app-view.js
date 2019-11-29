var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'flex-flow:column nowrap;width:750rpx;position:relative;'])
Z([3,'bac_image'])
Z([3,'../../static/wzqbeijing.png'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'windowHeight']]],[1,'px']])
Z([3,'position:absolute;right:210rpx;top:530rpx;justify-content:center;align-items:center;width:300rpx;'])
Z([3,'__e'])
Z([3,'button_style'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appgetUserInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'获取用户信息'])
Z([3,'icontext'])
Z([[2,'!'],[1,false]])
Z([3,'share'])
Z([3,'position:absolute;right:0rpx;border:0rpx solid #EFEFEF;background-color:#EFEFEF;font-size:33rpx;'])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bc'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'windowHeight']]],[1,'px']])
Z(z[0])
Z([3,'../../static/bcimage.jpg'])
Z(z[1])
Z([[2,'!='],[[7],[3,'mulu_flag']],[1,'zml']])
Z([3,'__e'])
Z([3,'icontext'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'zml']]]]]]]]]]])
Z([3,'position:absolute;z-index:100;top:10rpx;left:80rpx;color:#FFA042;font-size:60rpx;'])
Z([3,''])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gototiwen']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'position:absolute;top:10rpx;right:82rpx;z-index:100;color:#FFA042;font-size:55rpx;font-weight:bold;'])
Z([3,''])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'zml']])
Z(z[6])
Z([3,'pic_item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'dplx']]]]]]]]]]])
Z([3,'/static/index2/dplx.png'])
Z([3,'top:250rpx;animation:mymove 0.4s ease-in-out;'])
Z(z[16])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'dpcs']]]]]]]]]]])
Z([3,'/static/index2/dpcs.png'])
Z([3,'top:450rpx;animation:mymove 0.45s ease-in-out;'])
Z(z[16])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'ljms']]]]]]]]]]])
Z([3,'/static/index2/ljms.png'])
Z([3,'top:650rpx;animation:mymove 0.5s ease-in-out;'])
Z(z[16])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'bdms']]]]]]]]]]])
Z([3,'/static/index2/bdms.png'])
Z([3,'top:850rpx;animation:mymove 0.55s ease-in-out;'])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'dplx']])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'dplx_hykj']]]]]]]]]]])
Z([3,'/static/index2/hykj.png'])
Z([3,'top:300rpx;animation:mymove 0.4s linear;'])
Z(z[40])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'dplx_pykj']]]]]]]]]]])
Z([3,'/static/index2/pykj.png'])
Z([3,'top:500rpx;animation:mymove 0.42s linear;'])
Z(z[40])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'dplx_kjwb']]]]]]]]]]])
Z([3,'/static/index2/kjwb.png'])
Z([3,'top:700rpx;animation:mymove 0.45s linear;'])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'dpcs']])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'dpcs_hykj']]]]]]]]]]])
Z(z[44])
Z([3,'top:250rpx;animation:mymove 0.4s linear;'])
Z(z[58])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'dpcs_pykj']]]]]]]]]]])
Z(z[50])
Z([3,'top:450rpx;animation:mymove 0.42s linear;'])
Z(z[58])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'dpcs_kjwb']]]]]]]]]]])
Z(z[56])
Z([3,'top:650rpx;animation:mymove 0.45s linear;'])
Z(z[58])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'dpcs_wdct']]]]]]]]]]])
Z([3,'/static/index2/wdct.png'])
Z([3,'top:850rpx;animation:mymove 0.5s linear;'])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'ljms']])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'ljms_hyyz']]]]]]]]]]])
Z([3,'/static/index2/hyyz.png'])
Z(z[45])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'bdms']])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'bdms_srdy']]]]]]]]]]])
Z([3,'/static/index2/srdy.png'])
Z(z[45])
Z(z[88])
Z(z[6])
Z(z[18])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changemulu']],[[4],[[5],[1,'bdms_rjmspt']]]]]]]]]]])
Z([3,'/static/index2/rjmspt.png'])
Z(z[51])
Z(z[7])
Z([[2,'!'],[1,false]])
Z([3,'share'])
Z([3,'position:absolute;right:0rpx;border:0rpx solid #EFEFEF;background-color:#EFEFEF;font-size:33rpx;'])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'reset']],[[4],[[5],[[4],[[5],[[5],[1,'formReset']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'white_bac'])
Z([3,'linestyle'])
Z([3,'linestyle_left'])
Z([3,'类   型:'])
Z([3,'linestyle_right'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'radioChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'radio'])
Z([3,'font-size:24rpx;color:EFEFEF;'])
Z([3,'true'])
Z([3,'new_question'])
Z([3,'提问'])
Z(z[11])
Z(z[12])
Z([3,'new_suggestion'])
Z([3,'建议'])
Z(z[11])
Z([3,'new_conclusion'])
Z([3,'总结'])
Z([3,'index1'])
Z([3,'item1'])
Z([[7],[3,'new_question_list']])
Z(z[22])
Z([3,'flex-flow:column;'])
Z(z[4])
Z(z[5])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[7],[3,'question_or_conclusion_zhongwen']]],[1,' ']],[[6],[[7],[3,'item1']],[3,'ziduan_id']]],[1,':']]])
Z(z[7])
Z(z[0])
Z([3,'jianhao icontext'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'shanchu_ziduan']],[[4],[[5],[[7],[3,'index1']]]]]]]]]]]])
Z([3,''])
Z(z[0])
Z([3,'text_view_bigtext '])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'bigtext_input']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index1']])
Z([3,'500'])
Z([[6],[[7],[3,'item1']],[3,'ziduan_id']])
Z([[7],[3,'placeholder_world']])
Z(z[0])
Z([3,'jiahao icontext'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'add_ziduan']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,''])
Z([3,'flex-flow:column;position:fixed;bottom:50rpx;'])
Z([3,'biaoqing_view1 '])
Z(z[0])
Z([3,'image_view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tap_bqImage']],[[4],[[5],[1,'1']]]]]]]]]]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'image_select']],[1,'1']],[1,'../../static/biaoqing/z1.png'],[1,'../../static/biaoqing/1.png']])
Z(z[0])
Z(z[49])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tap_bqImage']],[[4],[[5],[1,'2']]]]]]]]]]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'image_select']],[1,'2']],[1,'../../static/biaoqing/z2.png'],[1,'../../static/biaoqing/2.png']])
Z(z[0])
Z(z[49])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tap_bqImage']],[[4],[[5],[1,'3']]]]]]]]]]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'image_select']],[1,'3']],[1,'../../static/biaoqing/z3.png'],[1,'../../static/biaoqing/3.png']])
Z(z[0])
Z(z[49])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tap_bqImage']],[[4],[[5],[1,'14']]]]]]]]]]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'image_select']],[1,'14']],[1,'../../static/biaoqing/z14.png'],[1,'../../static/biaoqing/14.png']])
Z(z[0])
Z(z[49])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tap_bqImage']],[[4],[[5],[1,'15']]]]]]]]]]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'image_select']],[1,'15']],[1,'../../static/biaoqing/z15.png'],[1,'../../static/biaoqing/15.png']])
Z(z[0])
Z(z[49])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tap_bqImage']],[[4],[[5],[1,'16']]]]]]]]]]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'image_select']],[1,'16']],[1,'../../static/biaoqing/z16.png'],[1,'../../static/biaoqing/16.png']])
Z([3,'tijiao_button_style'])
Z([3,'submit'])
Z([3,'提交并保存'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'width:750rpx;height:100%;background-color:#EFEFEF;margin:25rpx;border-radius:29rpx;box-shadow:6px 6px 6px rgba(0, 0, 0, .2);'])
Z([3,'bac_view'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'height']]],[1,'px']])
Z([3,'width:100%;font-size:40rpx;justify-content:center;padding:5rpx 10rpx;color:#1482D1;margin:10rpx;'])
Z([3,'关于五子棋'])
Z([3,'text_item'])
Z([3,'现代竞技五子棋一共有26个开局，以蒲月花月为首。本打谱软件旨在帮助大家以最快的速度背熟其中一种,大杀四方。'])
Z([3,'aspectFit'])
Z([3,'../../static/jieshao/kj1.jpg'])
Z(z[7])
Z([3,'../../static/jieshao/kj2.jpg'])
Z([3,'width:100%;font-size:33rpx;justify-content:center;padding:5rpx 10rpx;color:black;margin:10rpx;'])
Z([3,'提示说明'])
Z([3,'../../static/jieshao/tips1.png'])
Z([3,'width:300rpx;height:300rpx;margin-left:40rpx;'])
Z(z[5])
Z([3,'蓝色标注是指棋谱中存在的可下白子范围，大一点的蓝色标注表示后续棋谱比较多，如果执白子应优先下大蓝点（可以撑的更久）\n				小一点的蓝色标注表示后续棋谱比较少，可以优先背熟。'])
Z([3,'../../static/jieshao/tips2.png'])
Z(z[14])
Z(z[5])
Z([3,'黑色标注是指棋谱中存在的可下黑子范围，大一点的红色色标注表示后续棋谱比较多，击杀和背诵难度较大。\n				小一点的红色标注表示后续棋谱比较少，如果执黑子应优先小红点，可以更快获胜。'])
Z([3,'../../static/jieshao/tips4.png'])
Z(z[14])
Z(z[5])
Z([3,'淡蓝色标志是粘连点，同一个棋盘布局会有不同的走棋顺序，棋谱只会保留其中一种走琪顺序，粘连点就是不同走棋顺序汇聚的关键点，\n				点击粘连点会改变之前的走起顺序，悔棋也会随之改变。粘连点本身也是白子的一种落子范围。'])
Z([3,'../../static/jieshao/tips3.png'])
Z(z[14])
Z(z[5])
Z([3,'淡黄渐变色标注是在打谱练习模式下才有的点，点击求助按键会自动计算10层深度 5000步以内，黑棋的vcf 和vct赢法。\n				如果存在必胜走法就会用淡黄渐变色标注。每次求助都会从头算起并不能拓展广度和深度，如果可能性较多会比较耗时。\n				（VCT是连续活三，最后胜，VCF是连续冲四，最后胜）'])
Z([3,'../../static/jieshao/tips5.png'])
Z(z[14])
Z(z[5])
Z([3,'在联机模式下，为防止对战时的误触，点击一次会出现黑色圆圈提示，再点击一次才会确认。'])
Z([3,'width:100%;font-size:33rpx;justify-content:center;padding:5rpx 0rpx;color:#0000FF;margin:10rpx;'])
Z([3,'打谱测试模式说明'])
Z(z[5])
Z([3,'打谱测试模式中，轮到白棋会有蓝色提示，轮到黑棋下则不会有红色提示，如果下棋点非棋谱点就会提示出错并记入我的错题。\n				 在我的错题中回答正确则会剔除记录。'])
Z(z[5])
Z([3,'更多功能敬请期待!'])
Z(z[5])
Z([3,'目前在做功能有，错题记录功能，随机匹配功能和五子棋机器人无敌版。'])
Z(z[5])
Z([3,'更多需求欢迎在留言板上提出建议'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'width:750rpx;align-content:center;align-items:center;padding-top:160rpx;flex-flow:column nowrap;'])
Z([3,'../../static/index2bc.png'])
Z([3,'position:absolute;width:750rpx;height:250rpx;z-index:-1;bottom:0rpx;right:0rpx;'])
Z([[2,'!='],[[6],[[7],[3,'winLoc']],[3,'whowin']],[1,0]])
Z([3,'position:absolute;top:30rpx;width:120rpx;left:360rpx;font-size:53rpx;font-weight:bold;color:red;'])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'winLoc']],[3,'whowin_title']]]])
Z([[6],[[7],[3,'tips_group']],[3,'show_tips_last_flag']])
Z([3,'position:absolute;top:50rpx;width:320rpx;left:60rpx;font-size:23rpx;color:black;'])
Z([a,[[2,'+'],[1,'剩余提示数:'],[[6],[[7],[3,'userInfo']],[3,'tips_last']]]])
Z(z[7])
Z([3,'__e'])
Z([3,'icontext'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'buy_vip']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'position:absolute;top:100rpx;width:130rpx;border-radius:10rpx;border:solid 2rpx orange;left:60rpx;font-size:25rpx;color:orange;font-weight:bold;justify-content:center;'])
Z([3,' 购买vip'])
Z([[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']])
Z([3,'position:absolute;top:50rpx;left:40rpx;width:160rpx;justify-content:space-between;align-items:center;border:#000000 dashed 1rpx;padding:20rpx;'])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,1]])
Z([3,'logo-img2'])
Z([3,'../../static/robot.jpg'])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,2]])
Z(z[19])
Z([3,'../../static/zjz.jpg'])
Z([3,'now-stone2 bak_black'])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tap_jieshao']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/gzsm2.png'])
Z([3,'position:absolute;top:50rpx;right:30rpx;width:170rpx;height:40rpx;'])
Z([[6],[[7],[3,'tips_group']],[3,'show_wrong_choice_flag']])
Z(z[12])
Z([3,'z-index:100;position:absolute;top:210rpx;left:80rpx;font-size:55rpx;color:red;font-weight:900;'])
Z([3,''])
Z([[6],[[7],[3,'tips_group']],[3,'show_right_choice_flag']])
Z(z[12])
Z([3,'z-index:100;position:absolute;top:210rpx;left:80rpx;font-size:55rpx;color:LawnGreen;font-weight:900;'])
Z([3,''])
Z(z[11])
Z(z[11])
Z(z[11])
Z([3,'chess-board'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'ontouchstart']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'ontouchmove']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[40])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[6],[[7],[3,'fiveStone']],[3,'chessboardSizePX']]],[1,'px;height:']],[[6],[[7],[3,'fiveStone']],[3,'chessboardSizePX']]],[1,'px;background-color:#FFE153;position:relative;left:']],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']]],[1,'px;']])
Z([3,'itemy'])
Z([3,'row'])
Z([1,15])
Z(z[44])
Z(z[45])
Z([3,'itemx'])
Z([3,'cell'])
Z(z[46])
Z(z[49])
Z(z[50])
Z([3,'position:relative;'])
Z([[2,'&&'],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'itemy']],[1,3]],[[2,'=='],[[7],[3,'itemy']],[1,7]]],[[2,'=='],[[7],[3,'itemy']],[1,11]]],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'itemx']],[1,3]],[[2,'=='],[[7],[3,'itemx']],[1,7]]],[[2,'=='],[[7],[3,'itemx']],[1,11]]]])
Z([1,'background-color: black; width: 6px;height: 6px;border-radius:6px; position:absolute; left:-3px;top:-3px;'])
Z([[2,'>'],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoard']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,0]])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoard']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,1]],[1,'bak_black'],[1,'bak_white']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[6],[[7],[3,'fiveStone']],[3,'cellSizePX']]],[1,'px;height:']],[[6],[[7],[3,'fiveStone']],[3,'cellSizePX']]],[1,'px; border:1px solid #000000;position:absolute;border-radius:']],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']]],[1,'px;  left:-']],[[2,'+'],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']],[1,1]]],[1,'px;top:-']],[[2,'+'],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']],[1,1]]],[1,'px;transform:scale(0.80);']])
Z([[2,'&&'],[[2,'>'],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoardtips']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,0]],[[6],[[7],[3,'tips_group']],[3,'show_tips_flag']]])
Z([[4],[[5],[[5],[[5],[[5],[[2,'?:'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoardtips']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,3]],[1,'bak_cyan'],[1,'']]],[[2,'?:'],[[2,'&&'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoardtips']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,1]],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoardtips']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'num']],[1,1234]]],[1,'colorful'],[1,'']]],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoardtips']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,1]],[[6],[[7],[3,'tips_group']],[3,'show_black_tips_flag']]],[[2,'!='],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoardtips']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'num']],[1,1234]]],[1,'bak_red'],[1,'']]],[[2,'?:'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoardtips']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,2]],[1,'bak_blue'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,' width:'],[[6],[[7],[3,'fiveStone']],[3,'cellSizePX']]],[1,'px;height:']],[[6],[[7],[3,'fiveStone']],[3,'cellSizePX']]],[1,'px; position:absolute;border-radius:']],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']]],[1,'px; left:-']],[[2,'+'],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']],[1,1]]],[1,'px;top:-']],[[2,'+'],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']],[1,1]]],[1,'px;transform:scale(']],[[2,'?:'],[[2,'>'],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoardtips']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'num']],[1,300]],[1,'0.40'],[1,'0.27']]],[1,');']])
Z([3,'flex-flow:row nowrap;width:750rpx;display:flex;'])
Z([3,'width:190rpx;justify-content:space-between;align-items:center;border:#000000 dashed 1rpx;margin:0 10rpx 0 40rpx;padding:10rpx 18rpx;'])
Z([3,'flex-flow:column nowrap;width:120rpx;align-items:center;'])
Z([3,'logo-img'])
Z([[2,'?:'],[[6],[[7],[3,'userInfo']],[3,'hasLogin']],[[6],[[7],[3,'userInfo']],[3,'avatarUrl']],[[7],[3,'loacal_avatarUrl_loc']]])
Z(z[16])
Z([3,'now-stone bak_white'])
Z([[2,'!'],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']]])
Z([[4],[[5],[[5],[1,'now-stone']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'fiveStone']],[3,'stone']],[1,1]],[1,'bak_black'],[1,'bak_white']]]])
Z([3,'width:400rpx;height:100rpx;margin:20rpx;flex-flow:row nowrap;display:flex;align-items:center;align-content:center;justify-content:space-between;'])
Z([[6],[[7],[3,'tips_group']],[3,'show_restart_flag']])
Z(z[11])
Z([3,'minbutton_style'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'restart']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/chongwan.png'])
Z([[6],[[7],[3,'tips_group']],[3,'show_qiuzhu_flag']])
Z(z[11])
Z(z[75])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'qiuzhu']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/qiuzhu.png'])
Z([[6],[[7],[3,'tips_group']],[3,'show_undo_flag']])
Z(z[11])
Z(z[75])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'undo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/huiqi.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'width:750rpx;align-content:center;align-items:center;padding-top:160rpx;flex-flow:column nowrap;'])
Z([3,'../../static/index2bc.png'])
Z([3,'position:absolute;width:750rpx;height:250rpx;z-index:-1;bottom:0rpx;right:0rpx;'])
Z([[2,'!='],[[6],[[7],[3,'winLoc']],[3,'whowin']],[1,0]])
Z([3,'position:absolute;top:30rpx;width:120rpx;left:360rpx;font-size:53rpx;font-weight:bold;color:red;'])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'winLoc']],[3,'whowin_title']]]])
Z([[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']])
Z([3,'position:absolute;top:50rpx;left:40rpx;width:160rpx;justify-content:space-between;align-items:center;padding:20rpx;'])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,1]])
Z([3,'logo-img2'])
Z([3,'../../static/robot.jpg'])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,2]])
Z(z[10])
Z([3,'../../static/zjz.jpg'])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,3]])
Z(z[10])
Z([[6],[[6],[[7],[3,'play_group']],[[2,'-'],[1,3],[[7],[3,'whichplayer']]]],[3,'player_avatarUrl']])
Z([[4],[[5],[[5],[1,'now-stone']],[[2,'?:'],[[2,'=='],[[7],[3,'whichplayer']],[1,2]],[1,'bak_black'],[1,'bak_white']]]])
Z([3,'__e'])
Z([3,'icontext'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'gotozml']]]]]]]]])
Z([3,'position:absolute;top:80rpx;width:80rpx;right:40rpx;font-size:40rpx;color:orange;font-weight:bold;justify-content:center;'])
Z([3,''])
Z(z[19])
Z(z[19])
Z(z[19])
Z([3,'chess-board'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'ontouchstart']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'ontouchmove']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[27])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[6],[[7],[3,'fiveStone']],[3,'chessboardSizePX']]],[1,'px;height:']],[[6],[[7],[3,'fiveStone']],[3,'chessboardSizePX']]],[1,'px;background-color:#FFE153;position:relative;left:']],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']]],[1,'px;']])
Z([3,'itemy'])
Z([3,'row'])
Z([1,15])
Z(z[31])
Z(z[32])
Z([3,'itemx'])
Z([3,'cell'])
Z(z[33])
Z(z[36])
Z(z[37])
Z([3,'position:relative;'])
Z([[2,'&&'],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'itemy']],[1,3]],[[2,'=='],[[7],[3,'itemy']],[1,7]]],[[2,'=='],[[7],[3,'itemy']],[1,11]]],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'itemx']],[1,3]],[[2,'=='],[[7],[3,'itemx']],[1,7]]],[[2,'=='],[[7],[3,'itemx']],[1,11]]]])
Z([1,'background-color: black; width: 6px;height: 6px;border-radius:6px; position:absolute; left:-3px;top:-3px;'])
Z([[2,'>'],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoard']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,0]])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoard']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,1]],[1,'bak_black'],[1,'bak_white']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[6],[[7],[3,'fiveStone']],[3,'cellSizePX']]],[1,'px;height:']],[[6],[[7],[3,'fiveStone']],[3,'cellSizePX']]],[1,'px; border:1px solid #000000;position:absolute;border-radius:']],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']]],[1,'px;  left:-']],[[2,'+'],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']],[1,1]]],[1,'px;top:-']],[[2,'+'],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']],[1,1]]],[1,'px;transform:scale(0.80);']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'loc1']],[3,'x']],[[7],[3,'itemx']]],[[2,'=='],[[6],[[7],[3,'loc1']],[3,'y']],[[7],[3,'itemy']]]])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'fiveStone']],[3,'stone']],[1,1]],[1,'board_bak_black'],[1,'board_bak_white']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,' width:'],[[6],[[7],[3,'fiveStone']],[3,'cellSizePX']]],[1,'px;height:']],[[6],[[7],[3,'fiveStone']],[3,'cellSizePX']]],[1,'px;  position:absolute; border-radius:']],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']]],[1,'px; left:-']],[[2,'+'],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']],[1,5]]],[1,'px;top:-']],[[2,'+'],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']],[1,5]]],[1,'px;transform:scale(0.58);']])
Z([3,'flex-flow:row nowrap;width:750rpx;display:flex;'])
Z([3,'width:190rpx;justify-content:space-between;align-items:center;border:#000000 dashed 1rpx;margin:0 10rpx 0 40rpx;padding:10rpx 18rpx;'])
Z([3,'flex-flow:column nowrap;width:120rpx;align-items:center;'])
Z([3,'logo-img'])
Z([[2,'?:'],[[6],[[7],[3,'userInfo']],[3,'hasLogin']],[[6],[[7],[3,'userInfo']],[3,'avatarUrl']],[[7],[3,'loacal_avatarUrl_loc']]])
Z([[4],[[5],[[5],[1,'now-stone']],[[2,'?:'],[[2,'=='],[[7],[3,'whichplayer']],[1,1]],[1,'bak_black'],[1,'bak_white']]]])
Z([3,'width:400rpx;height:100rpx;margin:20rpx;flex-flow:row nowrap;display:flex;align-items:center;align-content:center;justify-content:space-between;'])
Z(z[19])
Z([3,'minbutton_style'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'restart']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/chongwan.png'])
Z(z[19])
Z(z[58])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'undo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/huiqi.png'])
Z([[6],[[7],[3,'tips_group']],[3,'show_qiuzhu_flag']])
Z(z[19])
Z(z[58])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'qiuzhu']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/qiuzhu.png'])
Z([[6],[[7],[3,'tips_group']],[3,'show_menu_flag']])
Z([3,'menu_view'])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[19])
Z([3,'menu_item_view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'getuserinfo']],[[4],[[5],[[4],[[5],[[5],[1,'wxGetUserInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'getUserInfo'])
Z([3,'开始游戏'])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'has_yaoqing_flag']],[1,'false']])
Z(z[78])
Z([3,'share'])
Z([3,'邀请好友'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/index/index.wxml','./pages/index2/index2.wxml','./pages/item_question/item_question.wxml','./pages/jieshao/jieshao.wxml','./pages/play/play.wxml','./pages/play_online/play_online.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'style',0,e,s,gg)
var xC=_mz(z,'image',['class',1,'src',1,'style',2],[],e,s,gg)
_(oB,xC)
var oD=_n('view')
_rz(z,oD,'style',4,e,s,gg)
var fE=_mz(z,'button',['bindtap',5,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var cF=_oz(z,9,e,s,gg)
_(fE,cF)
_(oD,fE)
_(oB,oD)
var hG=_mz(z,'button',['class',10,'hidden',1,'openType',2,'style',3],[],e,s,gg)
var oH=_oz(z,14,e,s,gg)
_(hG,oH)
_(oB,hG)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oJ=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var aZ=_mz(z,'image',['mode',-1,'class',2,'src',1,'style',2],[],e,s,gg)
_(oJ,aZ)
var lK=_v()
_(oJ,lK)
if(_oz(z,5,e,s,gg)){lK.wxVkey=1
var t1=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var e2=_oz(z,10,e,s,gg)
_(t1,e2)
_(lK,t1)
}
var b3=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var o4=_oz(z,15,e,s,gg)
_(b3,o4)
_(oJ,b3)
var aL=_v()
_(oJ,aL)
if(_oz(z,16,e,s,gg)){aL.wxVkey=1
var x5=_mz(z,'image',['bindtap',17,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(aL,x5)
}
var tM=_v()
_(oJ,tM)
if(_oz(z,22,e,s,gg)){tM.wxVkey=1
var o6=_mz(z,'image',['bindtap',23,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(tM,o6)
}
var eN=_v()
_(oJ,eN)
if(_oz(z,28,e,s,gg)){eN.wxVkey=1
var f7=_mz(z,'image',['bindtap',29,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(eN,f7)
}
var bO=_v()
_(oJ,bO)
if(_oz(z,34,e,s,gg)){bO.wxVkey=1
var c8=_mz(z,'image',['bindtap',35,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(bO,c8)
}
var oP=_v()
_(oJ,oP)
if(_oz(z,40,e,s,gg)){oP.wxVkey=1
var h9=_mz(z,'image',['bindtap',41,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(oP,h9)
}
var xQ=_v()
_(oJ,xQ)
if(_oz(z,46,e,s,gg)){xQ.wxVkey=1
var o0=_mz(z,'image',['bindtap',47,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(xQ,o0)
}
var oR=_v()
_(oJ,oR)
if(_oz(z,52,e,s,gg)){oR.wxVkey=1
var cAB=_mz(z,'image',['bindtap',53,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(oR,cAB)
}
var fS=_v()
_(oJ,fS)
if(_oz(z,58,e,s,gg)){fS.wxVkey=1
var oBB=_mz(z,'image',['bindtap',59,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(fS,oBB)
}
var cT=_v()
_(oJ,cT)
if(_oz(z,64,e,s,gg)){cT.wxVkey=1
var lCB=_mz(z,'image',['bindtap',65,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(cT,lCB)
}
var hU=_v()
_(oJ,hU)
if(_oz(z,70,e,s,gg)){hU.wxVkey=1
var aDB=_mz(z,'image',['bindtap',71,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(hU,aDB)
}
var oV=_v()
_(oJ,oV)
if(_oz(z,76,e,s,gg)){oV.wxVkey=1
var tEB=_mz(z,'image',['bindtap',77,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(oV,tEB)
}
var cW=_v()
_(oJ,cW)
if(_oz(z,82,e,s,gg)){cW.wxVkey=1
var eFB=_mz(z,'image',['bindtap',83,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(cW,eFB)
}
var oX=_v()
_(oJ,oX)
if(_oz(z,88,e,s,gg)){oX.wxVkey=1
var bGB=_mz(z,'image',['bindtap',89,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(oX,bGB)
}
var lY=_v()
_(oJ,lY)
if(_oz(z,94,e,s,gg)){lY.wxVkey=1
var oHB=_mz(z,'image',['bindtap',95,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(lY,oHB)
}
var xIB=_mz(z,'button',['class',100,'hidden',1,'openType',2,'style',3],[],e,s,gg)
var oJB=_oz(z,104,e,s,gg)
_(xIB,oJB)
_(oJ,xIB)
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
oX.wxXCkey=1
lY.wxXCkey=1
_(r,oJ)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cLB=_mz(z,'form',['bindreset',0,'bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var hMB=_n('view')
_rz(z,hMB,'class',3,e,s,gg)
var oNB=_n('view')
_rz(z,oNB,'class',4,e,s,gg)
var cOB=_n('view')
_rz(z,cOB,'class',5,e,s,gg)
var oPB=_oz(z,6,e,s,gg)
_(cOB,oPB)
_(oNB,cOB)
var lQB=_n('view')
_rz(z,lQB,'class',7,e,s,gg)
var aRB=_mz(z,'radio-group',['bindchange',8,'data-event-opts',1,'name',2],[],e,s,gg)
var tSB=_n('label')
_rz(z,tSB,'style',11,e,s,gg)
var eTB=_mz(z,'radio',['checked',12,'value',1],[],e,s,gg)
_(tSB,eTB)
var bUB=_oz(z,14,e,s,gg)
_(tSB,bUB)
_(aRB,tSB)
var oVB=_n('label')
_rz(z,oVB,'style',15,e,s,gg)
var xWB=_mz(z,'radio',['checked',16,'value',1],[],e,s,gg)
_(oVB,xWB)
var oXB=_oz(z,18,e,s,gg)
_(oVB,oXB)
_(aRB,oVB)
var fYB=_n('label')
_rz(z,fYB,'style',19,e,s,gg)
var cZB=_n('radio')
_rz(z,cZB,'value',20,e,s,gg)
_(fYB,cZB)
var h1B=_oz(z,21,e,s,gg)
_(fYB,h1B)
_(aRB,fYB)
_(lQB,aRB)
_(oNB,lQB)
_(hMB,oNB)
var o2B=_v()
_(hMB,o2B)
var c3B=function(l5B,o4B,a6B,gg){
var e8B=_n('view')
_rz(z,e8B,'style',26,l5B,o4B,gg)
var b9B=_n('view')
_rz(z,b9B,'class',27,l5B,o4B,gg)
var o0B=_n('view')
_rz(z,o0B,'class',28,l5B,o4B,gg)
var xAC=_oz(z,29,l5B,o4B,gg)
_(o0B,xAC)
_(b9B,o0B)
var oBC=_n('view')
_rz(z,oBC,'class',30,l5B,o4B,gg)
var fCC=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],l5B,o4B,gg)
var cDC=_oz(z,34,l5B,o4B,gg)
_(fCC,cDC)
_(oBC,fCC)
_(b9B,oBC)
_(e8B,b9B)
var hEC=_mz(z,'textarea',['bindinput',35,'class',1,'data-event-opts',2,'id',3,'maxlength',4,'name',5,'placeholder',6],[],l5B,o4B,gg)
_(e8B,hEC)
_(a6B,e8B)
return a6B
}
o2B.wxXCkey=2
_2z(z,24,c3B,e,s,gg,o2B,'item1','index1','index1')
_(cLB,hMB)
var oFC=_mz(z,'view',['bindtap',42,'class',1,'data-event-opts',2],[],e,s,gg)
var cGC=_oz(z,45,e,s,gg)
_(oFC,cGC)
_(cLB,oFC)
var oHC=_n('view')
_rz(z,oHC,'style',46,e,s,gg)
var lIC=_n('view')
_rz(z,lIC,'class',47,e,s,gg)
var aJC=_mz(z,'image',['bindtap',48,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(lIC,aJC)
var tKC=_mz(z,'image',['bindtap',52,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(lIC,tKC)
var eLC=_mz(z,'image',['bindtap',56,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(lIC,eLC)
var bMC=_mz(z,'image',['bindtap',60,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(lIC,bMC)
var oNC=_mz(z,'image',['bindtap',64,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(lIC,oNC)
var xOC=_mz(z,'image',['bindtap',68,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(lIC,xOC)
_(oHC,lIC)
var oPC=_mz(z,'button',['class',72,'formType',1],[],e,s,gg)
var fQC=_oz(z,74,e,s,gg)
_(oPC,fQC)
_(oHC,oPC)
_(cLB,oHC)
_(r,cLB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hSC=_n('view')
_rz(z,hSC,'style',0,e,s,gg)
var oTC=_mz(z,'scroll-view',['scrollY',-1,'class',1,'style',1],[],e,s,gg)
var cUC=_n('view')
_rz(z,cUC,'style',3,e,s,gg)
var oVC=_oz(z,4,e,s,gg)
_(cUC,oVC)
_(oTC,cUC)
var lWC=_n('view')
_rz(z,lWC,'class',5,e,s,gg)
var aXC=_oz(z,6,e,s,gg)
_(lWC,aXC)
_(oTC,lWC)
var tYC=_mz(z,'image',['mode',7,'src',1],[],e,s,gg)
_(oTC,tYC)
var eZC=_mz(z,'image',['mode',9,'src',1],[],e,s,gg)
_(oTC,eZC)
var b1C=_n('view')
_rz(z,b1C,'style',11,e,s,gg)
var o2C=_oz(z,12,e,s,gg)
_(b1C,o2C)
_(oTC,b1C)
var x3C=_mz(z,'image',['src',13,'style',1],[],e,s,gg)
_(oTC,x3C)
var o4C=_n('view')
_rz(z,o4C,'class',15,e,s,gg)
var f5C=_oz(z,16,e,s,gg)
_(o4C,f5C)
_(oTC,o4C)
var c6C=_mz(z,'image',['src',17,'style',1],[],e,s,gg)
_(oTC,c6C)
var h7C=_n('view')
_rz(z,h7C,'class',19,e,s,gg)
var o8C=_oz(z,20,e,s,gg)
_(h7C,o8C)
_(oTC,h7C)
var c9C=_mz(z,'image',['src',21,'style',1],[],e,s,gg)
_(oTC,c9C)
var o0C=_n('view')
_rz(z,o0C,'class',23,e,s,gg)
var lAD=_oz(z,24,e,s,gg)
_(o0C,lAD)
_(oTC,o0C)
var aBD=_mz(z,'image',['src',25,'style',1],[],e,s,gg)
_(oTC,aBD)
var tCD=_n('view')
_rz(z,tCD,'class',27,e,s,gg)
var eDD=_oz(z,28,e,s,gg)
_(tCD,eDD)
_(oTC,tCD)
var bED=_mz(z,'image',['src',29,'style',1],[],e,s,gg)
_(oTC,bED)
var oFD=_n('view')
_rz(z,oFD,'class',31,e,s,gg)
var xGD=_oz(z,32,e,s,gg)
_(oFD,xGD)
_(oTC,oFD)
var oHD=_n('view')
_rz(z,oHD,'style',33,e,s,gg)
var fID=_oz(z,34,e,s,gg)
_(oHD,fID)
_(oTC,oHD)
var cJD=_n('view')
_rz(z,cJD,'class',35,e,s,gg)
var hKD=_oz(z,36,e,s,gg)
_(cJD,hKD)
_(oTC,cJD)
var oLD=_n('view')
_rz(z,oLD,'class',37,e,s,gg)
var cMD=_oz(z,38,e,s,gg)
_(oLD,cMD)
_(oTC,oLD)
var oND=_n('view')
_rz(z,oND,'class',39,e,s,gg)
var lOD=_oz(z,40,e,s,gg)
_(oND,lOD)
_(oTC,oND)
var aPD=_n('view')
_rz(z,aPD,'class',41,e,s,gg)
var tQD=_oz(z,42,e,s,gg)
_(aPD,tQD)
_(oTC,aPD)
_(hSC,oTC)
_(r,hSC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var bSD=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oZD=_mz(z,'image',['mode',-1,'src',2,'style',1],[],e,s,gg)
_(bSD,oZD)
var oTD=_v()
_(bSD,oTD)
if(_oz(z,4,e,s,gg)){oTD.wxVkey=1
var c1D=_n('view')
_rz(z,c1D,'style',5,e,s,gg)
var o2D=_oz(z,6,e,s,gg)
_(c1D,o2D)
_(oTD,c1D)
}
var xUD=_v()
_(bSD,xUD)
if(_oz(z,7,e,s,gg)){xUD.wxVkey=1
var l3D=_n('view')
_rz(z,l3D,'style',8,e,s,gg)
var a4D=_oz(z,9,e,s,gg)
_(l3D,a4D)
_(xUD,l3D)
}
var oVD=_v()
_(bSD,oVD)
if(_oz(z,10,e,s,gg)){oVD.wxVkey=1
var t5D=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var e6D=_oz(z,15,e,s,gg)
_(t5D,e6D)
_(oVD,t5D)
}
var fWD=_v()
_(bSD,fWD)
if(_oz(z,16,e,s,gg)){fWD.wxVkey=1
var b7D=_n('view')
_rz(z,b7D,'style',17,e,s,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,18,e,s,gg)){o8D.wxVkey=1
var o0D=_mz(z,'image',['class',19,'src',1],[],e,s,gg)
_(o8D,o0D)
}
var x9D=_v()
_(b7D,x9D)
if(_oz(z,21,e,s,gg)){x9D.wxVkey=1
var fAE=_mz(z,'image',['class',22,'src',1],[],e,s,gg)
_(x9D,fAE)
}
var cBE=_n('view')
_rz(z,cBE,'class',24,e,s,gg)
_(b7D,cBE)
o8D.wxXCkey=1
x9D.wxXCkey=1
_(fWD,b7D)
}
var hCE=_mz(z,'image',['bindtap',25,'data-event-opts',1,'src',2,'style',3],[],e,s,gg)
_(bSD,hCE)
var cXD=_v()
_(bSD,cXD)
if(_oz(z,29,e,s,gg)){cXD.wxVkey=1
var oDE=_mz(z,'view',['class',30,'style',1],[],e,s,gg)
var cEE=_oz(z,32,e,s,gg)
_(oDE,cEE)
_(cXD,oDE)
}
var hYD=_v()
_(bSD,hYD)
if(_oz(z,33,e,s,gg)){hYD.wxVkey=1
var oFE=_mz(z,'view',['class',34,'style',1],[],e,s,gg)
var lGE=_oz(z,36,e,s,gg)
_(oFE,lGE)
_(hYD,oFE)
}
var aHE=_mz(z,'view',['bindontouchmove',37,'bindontouchstart',1,'bindtap',2,'class',3,'data-event-opts',4,'id',5,'style',6],[],e,s,gg)
var tIE=_v()
_(aHE,tIE)
var eJE=function(oLE,bKE,xME,gg){
var fOE=_n('view')
_rz(z,fOE,'class',48,oLE,bKE,gg)
var cPE=_v()
_(fOE,cPE)
var hQE=function(cSE,oRE,oTE,gg){
var aVE=_mz(z,'view',['class',53,'style',1],[],cSE,oRE,gg)
var tWE=_v()
_(aVE,tWE)
if(_oz(z,55,cSE,oRE,gg)){tWE.wxVkey=1
var oZE=_n('view')
_rz(z,oZE,'style',56,cSE,oRE,gg)
_(tWE,oZE)
}
var eXE=_v()
_(aVE,eXE)
if(_oz(z,57,cSE,oRE,gg)){eXE.wxVkey=1
var x1E=_mz(z,'view',['class',58,'style',1],[],cSE,oRE,gg)
_(eXE,x1E)
}
var bYE=_v()
_(aVE,bYE)
if(_oz(z,60,cSE,oRE,gg)){bYE.wxVkey=1
var o2E=_mz(z,'view',['class',61,'style',1],[],cSE,oRE,gg)
_(bYE,o2E)
}
tWE.wxXCkey=1
eXE.wxXCkey=1
bYE.wxXCkey=1
_(oTE,aVE)
return oTE
}
cPE.wxXCkey=2
_2z(z,51,hQE,oLE,bKE,gg,cPE,'cell','itemx','itemx')
_(xME,fOE)
return xME
}
tIE.wxXCkey=2
_2z(z,46,eJE,e,s,gg,tIE,'row','itemy','itemy')
_(bSD,aHE)
var f3E=_n('view')
_rz(z,f3E,'style',63,e,s,gg)
var c4E=_n('view')
_rz(z,c4E,'style',64,e,s,gg)
var c7E=_n('view')
_rz(z,c7E,'style',65,e,s,gg)
var o8E=_mz(z,'image',['class',66,'src',1],[],e,s,gg)
_(c7E,o8E)
_(c4E,c7E)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,68,e,s,gg)){h5E.wxVkey=1
var l9E=_n('view')
_rz(z,l9E,'class',69,e,s,gg)
_(h5E,l9E)
}
var o6E=_v()
_(c4E,o6E)
if(_oz(z,70,e,s,gg)){o6E.wxVkey=1
var a0E=_n('view')
_rz(z,a0E,'class',71,e,s,gg)
_(o6E,a0E)
}
h5E.wxXCkey=1
o6E.wxXCkey=1
_(f3E,c4E)
var tAF=_n('view')
_rz(z,tAF,'style',72,e,s,gg)
var eBF=_v()
_(tAF,eBF)
if(_oz(z,73,e,s,gg)){eBF.wxVkey=1
var xEF=_mz(z,'image',['bindtap',74,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(eBF,xEF)
}
var bCF=_v()
_(tAF,bCF)
if(_oz(z,78,e,s,gg)){bCF.wxVkey=1
var oFF=_mz(z,'image',['bindtap',79,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(bCF,oFF)
}
var oDF=_v()
_(tAF,oDF)
if(_oz(z,83,e,s,gg)){oDF.wxVkey=1
var fGF=_mz(z,'image',['bindtap',84,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(oDF,fGF)
}
eBF.wxXCkey=1
bCF.wxXCkey=1
oDF.wxXCkey=1
_(f3E,tAF)
_(bSD,f3E)
oTD.wxXCkey=1
xUD.wxXCkey=1
oVD.wxXCkey=1
fWD.wxXCkey=1
cXD.wxXCkey=1
hYD.wxXCkey=1
_(r,bSD)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var hIF=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var lMF=_mz(z,'image',['mode',-1,'src',2,'style',1],[],e,s,gg)
_(hIF,lMF)
var oJF=_v()
_(hIF,oJF)
if(_oz(z,4,e,s,gg)){oJF.wxVkey=1
var aNF=_n('view')
_rz(z,aNF,'style',5,e,s,gg)
var tOF=_oz(z,6,e,s,gg)
_(aNF,tOF)
_(oJF,aNF)
}
var cKF=_v()
_(hIF,cKF)
if(_oz(z,7,e,s,gg)){cKF.wxVkey=1
var ePF=_n('view')
_rz(z,ePF,'style',8,e,s,gg)
var bQF=_v()
_(ePF,bQF)
if(_oz(z,9,e,s,gg)){bQF.wxVkey=1
var oTF=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
_(bQF,oTF)
}
var oRF=_v()
_(ePF,oRF)
if(_oz(z,12,e,s,gg)){oRF.wxVkey=1
var fUF=_mz(z,'image',['class',13,'src',1],[],e,s,gg)
_(oRF,fUF)
}
var xSF=_v()
_(ePF,xSF)
if(_oz(z,15,e,s,gg)){xSF.wxVkey=1
var cVF=_mz(z,'image',['class',16,'src',1],[],e,s,gg)
_(xSF,cVF)
}
var hWF=_n('view')
_rz(z,hWF,'class',18,e,s,gg)
_(ePF,hWF)
bQF.wxXCkey=1
oRF.wxXCkey=1
xSF.wxXCkey=1
_(cKF,ePF)
}
var oXF=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cYF=_oz(z,23,e,s,gg)
_(oXF,cYF)
_(hIF,oXF)
var oZF=_mz(z,'view',['bindontouchmove',24,'bindontouchstart',1,'bindtap',2,'class',3,'data-event-opts',4,'id',5,'style',6],[],e,s,gg)
var l1F=_v()
_(oZF,l1F)
var a2F=function(e4F,t3F,b5F,gg){
var x7F=_n('view')
_rz(z,x7F,'class',35,e4F,t3F,gg)
var o8F=_v()
_(x7F,o8F)
var f9F=function(hAG,c0F,oBG,gg){
var oDG=_mz(z,'view',['class',40,'style',1],[],hAG,c0F,gg)
var lEG=_v()
_(oDG,lEG)
if(_oz(z,42,hAG,c0F,gg)){lEG.wxVkey=1
var eHG=_n('view')
_rz(z,eHG,'style',43,hAG,c0F,gg)
_(lEG,eHG)
}
var aFG=_v()
_(oDG,aFG)
if(_oz(z,44,hAG,c0F,gg)){aFG.wxVkey=1
var bIG=_mz(z,'view',['class',45,'style',1],[],hAG,c0F,gg)
_(aFG,bIG)
}
var tGG=_v()
_(oDG,tGG)
if(_oz(z,47,hAG,c0F,gg)){tGG.wxVkey=1
var oJG=_mz(z,'view',['class',48,'style',1],[],hAG,c0F,gg)
_(tGG,oJG)
}
lEG.wxXCkey=1
aFG.wxXCkey=1
tGG.wxXCkey=1
_(oBG,oDG)
return oBG
}
o8F.wxXCkey=2
_2z(z,38,f9F,e4F,t3F,gg,o8F,'cell','itemx','itemx')
_(b5F,x7F)
return b5F
}
l1F.wxXCkey=2
_2z(z,33,a2F,e,s,gg,l1F,'row','itemy','itemy')
_(hIF,oZF)
var xKG=_n('view')
_rz(z,xKG,'style',50,e,s,gg)
var oLG=_n('view')
_rz(z,oLG,'style',51,e,s,gg)
var fMG=_n('view')
_rz(z,fMG,'style',52,e,s,gg)
var cNG=_mz(z,'image',['class',53,'src',1],[],e,s,gg)
_(fMG,cNG)
_(oLG,fMG)
var hOG=_n('view')
_rz(z,hOG,'class',55,e,s,gg)
_(oLG,hOG)
_(xKG,oLG)
var oPG=_n('view')
_rz(z,oPG,'style',56,e,s,gg)
var oRG=_mz(z,'image',['bindtap',57,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(oPG,oRG)
var lSG=_mz(z,'image',['bindtap',61,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(oPG,lSG)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,65,e,s,gg)){cQG.wxVkey=1
var aTG=_mz(z,'image',['bindtap',66,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(cQG,aTG)
}
cQG.wxXCkey=1
_(xKG,oPG)
_(hIF,xKG)
var oLF=_v()
_(hIF,oLF)
if(_oz(z,70,e,s,gg)){oLF.wxVkey=1
var tUG=_n('view')
_rz(z,tUG,'class',71,e,s,gg)
var bWG=_mz(z,'view',['bindtap',72,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var oXG=_oz(z,76,e,s,gg)
_(bWG,oXG)
_(tUG,bWG)
var xYG=_mz(z,'button',['bindgetuserinfo',77,'class',1,'data-event-opts',2,'openType',3],[],e,s,gg)
var oZG=_oz(z,81,e,s,gg)
_(xYG,oZG)
_(tUG,xYG)
var eVG=_v()
_(tUG,eVG)
if(_oz(z,82,e,s,gg)){eVG.wxVkey=1
var f1G=_mz(z,'button',['class',83,'openType',1],[],e,s,gg)
var c2G=_oz(z,85,e,s,gg)
_(f1G,c2G)
_(eVG,f1G)
}
eVG.wxXCkey=1
_(oLF,tUG)
}
oJF.wxXCkey=1
cKF.wxXCkey=1
oLF.wxXCkey=1
_(r,hIF)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: texticons; font-weight: normal; font-style: normal; src: url(\x27//at.alicdn.com/t/font_880030_i7japde43cb.ttf\x27) format(\x27truetype\x27); }\n.",[1],"icontext { font-family: texticons; }\n.",[1],"icon-renwubao:before { content: \x22\\E635\x22; }\n.",[1],"border-style { border-color: #000000; border-style: solid; border-width: 1px; }\n.",[1],"border_bottom { border-bottom-style: solid; border-bottom-width: ",[0,1],"; border-bottom-color: #007AFF; }\n.",[1],"row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"column { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"red { color: red; }\n.",[1],"Gold { color: Gold; }\n.",[1],"orange { color: orange; }\n.",[1],"purple { color: purple; }\n.",[1],"yellow{ color: yellow; }\n.",[1],"green { color: green; }\n.",[1],"grey { color: grey; }\n.",[1],"black { color: black; }\n.",[1],"white { color: white; }\n.",[1],"bac_white { background-color: white; }\n.",[1],"bac_red { background-color: red; }\n.",[1],"bac_blue { background-color: blue; }\n.",[1],"bac_blue_q { background-color: 		LightSkyBlue; }\n.",[1],"bac_purple { background-color: purple; }\n.",[1],"bac_purple_q { background-color: Plum; }\n.",[1],"bac_SeaGreen { background-color: SeaGreen; }\n.",[1],"bac_yellow { background-color: yellow; }\n.",[1],"bac_grey { background-color: grey; }\n.",[1],"bac_orange { background-color: orange; }\n.",[1],"bac_pink { background-color: pink; }\n.",[1],"bac_green { background-color: SpringGreen; }\n.",[1],"bac_brown { background-color: Sienna; }\n.",[1],"bac_danlan { background-color: #00FFFF; }\n.",[1],"bac_white1{ background-color: #F8F8F8; }\n.",[1],"white_bac { width: ",[0,710],"; margin: ",[0,20]," ",[0,16]," ",[0,20]," ",[0,20],"; padding-bottom: ",[0,20],"; border-radius: ",[0,15],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column nowrap; -ms-flex-flow: column nowrap; flex-flow: column nowrap; background-color: white; }\n.",[1],"linestyle { width: ",[0,650],"; min-height: ",[0,80],"; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,30],"; overflow: hidden; border-bottom: ",[0,1]," solid #EFEFEF; margin: ",[0,0]," ",[0,30]," ",[0,0]," ",[0,30],"; }\n.",[1],"linestyle_left { font-weight: bold; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; width: 40%; }\n.",[1],"linestyle_right { font-weight: bold; color: gray; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; width: 60%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; overflow: hidden; }\n.",[1],"linestyle_right_right { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; width: 90%; display: inline; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"linestyle_right_left { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; width: 90%; display: inline; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"text_view_icon { padding-left: ",[0,20],"; width: 10%; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"text_view_bigtext { color: #555555; font-size: ",[0,22],"; font-weight: bold; min-height: ",[0,150],"; overflow: hidden; margin: ",[0,10]," ",[0,30],"; }\n.",[1],"tijiao_button_style { font-size: ",[0,34],"; color: #F7F7F7; background-color: #007AFF; border-radius: ",[0,10],"; width: ",[0,670],"; margin: ",[0,10]," ",[0,40],"; height: ",[0,70],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; line-height: ",[0,70],"; }\n.",[1],"xinjian_button_style { font-size: ",[0,34],"; color: black; background-color: yellow; border-radius: ",[0,10],"; width: ",[0,670],"; margin: ",[0,10]," ",[0,40],"; height: ",[0,70],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; line-height: ",[0,70],"; }\n.",[1],"jianhao { color: red; width: ",[0,33],"; font-size: ",[0,35],"; }\n.",[1],"jiahao { margin: ",[0,10]," auto; width: 100%; color: black; border-radius: ",[0,40],"; width: ",[0,33],"; height: ",[0,33],"; font-size: ",[0,35],"; line-height: ",[0,33],"; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nbody{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; min-height: 100%; background-color: #EFEFEF; }\nwx-view{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"bac_image { width: ",[0,750],"; z-index: -10; }\n.",[1],"logo_image { width: 250px; height: 250px; }\n.",[1],"progress_style { z-index: 20; height: ",[0,50],"; width: ",[0,400],"; padding-left: ",[0,33],"; }\n.",[1],"button_style { border-radius: ",[0,12],"; background-color: #71C671; width: ",[0,220],"; height: ",[0,60],"; line-height: ",[0,60],"; font-weight: bold; font-size: ",[0,30],"; text-align: center; background: -webkit-gradient(linear, left top, left bottom, from(#66B5E6), to(#2e88c0)); background: -o-linear-gradient(top, #66B5E6, #2e88c0); background: linear-gradient(top, #66B5E6, #2e88c0); background: -ms-linear-gradient(top, #66B5E6, #2e88c0); border: 1px solid #2576A8; -webkit-box-shadow: 0 1px 2px #B8DCF1 inset, 0 -1px 0 #316F96 inset; box-shadow: 0 1px 2px #B8DCF1 inset, 0 -1px 0 #316F96 inset; color: #fff; }\n.",[1],"button_style:hover { background: -webkit-gradient(linear, left top, left bottom, from(#8DC9EF), to(#4E9FD1)); background: -o-linear-gradient(top, #8DC9EF, #4E9FD1); background: linear-gradient(top, #8DC9EF, #4E9FD1); background: -ms-linear-gradient(top, #8DC9EF, #4E9FD1); }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index2/index2.wxss']=setCssToHead([".",[1],"pic_item { width: ",[0,440],"; height: ",[0,130],"; z-index: 110; position: absolute; right: ",[0,150],"; -webkit-animation-delay: 0.25s; animation-delay: 0.25s; }\n.",[1],"pic_item :active { width: ",[0,440],"; height: ",[0,130],"; z-index: 110; position: absolute; opacity: 0.8; -webkit-transform: scale(1.05); -ms-transform: scale(1.05); transform: scale(1.05); }\n.",[1],"bc { -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,750],"; z-index: 1; }\n@-webkit-keyframes mymove { from { -webkit-transform: translateX(",[0,420],"); transform: translateX(",[0,420],") }\nto { -webkit-transform: translateX(",[0,0],"); transform: translateX(",[0,0],") }\n}@keyframes mymove { from { -webkit-transform: translateX(",[0,420],"); transform: translateX(",[0,420],") }\nto { -webkit-transform: translateX(",[0,0],"); transform: translateX(",[0,0],") }\n}",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index2/index2.wxss:11:11)",{path:"./pages/index2/index2.wxss"});    
__wxAppCode__['pages/index2/index2.wxml']=$gwx('./pages/index2/index2.wxml');

__wxAppCode__['pages/item_question/item_question.wxss']=setCssToHead([".",[1],"biaoqing_view1 { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; width: 80%; height: ",[0,100],"; margin: 0 auto; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"image_view { height: ",[0,74],"; width: ",[0,74],"; }\n.",[1],"white_bac { width: ",[0,710],"; margin: ",[0,20]," ",[0,16]," ",[0,20]," ",[0,20],"; padding-bottom: ",[0,20],"; border-radius: ",[0,15],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column nowrap; -ms-flex-flow: column nowrap; flex-flow: column nowrap; background-color: white; }\n.",[1],"linestyle { width: ",[0,650],"; min-height: ",[0,80],"; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,30],"; overflow: hidden; border-bottom: ",[0,1]," solid #EFEFEF; margin: ",[0,0]," ",[0,30]," ",[0,0]," ",[0,30],"; }\n.",[1],"linestyle_left { font-weight: bold; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; width: 40%; }\n.",[1],"linestyle_right { font-weight: bold; color: gray; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; width: 60%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; overflow: hidden; }\n.",[1],"linestyle_right_right { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row; -ms-flex-flow: row; flex-flow: row; width: 90%; display: inline; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"text_view_bigtext { color: #555555; font-size: ",[0,22],"; font-weight: bold; min-height: ",[0,150],"; overflow: hidden; margin: ",[0,10]," ",[0,30],"; }\n.",[1],"jianhao { color: red; width: ",[0,33],"; font-size: ",[0,35],"; }\n.",[1],"jiahao { margin: ",[0,10]," auto; width: 100%; color: black; border-radius: ",[0,40],"; width: ",[0,33],"; height: ",[0,33],"; font-size: ",[0,35],"; line-height: ",[0,33],"; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"tijiao_button_style { font-size: ",[0,34],"; color: #F7F7F7; background-color: #007AFF; border-radius: ",[0,10],"; width: ",[0,670],"; margin: ",[0,10]," ",[0,40],"; height: ",[0,70],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; line-height: ",[0,70],"; }\n",],undefined,{path:"./pages/item_question/item_question.wxss"});    
__wxAppCode__['pages/item_question/item_question.wxml']=$gwx('./pages/item_question/item_question.wxml');

__wxAppCode__['pages/jieshao/jieshao.wxss']=setCssToHead([".",[1],"text_item { width: ",[0,600],"; font-size: ",[0,25],"; padding: ",[0,20]," ",[0,20],"; color: #222222; }\n.",[1],"bac_view { width: 100%; height: ",[0,900],"; padding: ",[0,5]," ",[0,0]," ",[0,10]," ",[0,30],"; background: white; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; }\n",],undefined,{path:"./pages/jieshao/jieshao.wxss"});    
__wxAppCode__['pages/jieshao/jieshao.wxml']=$gwx('./pages/jieshao/jieshao.wxml');

__wxAppCode__['pages/play_online/play_online.wxss']=setCssToHead(["wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"userinfo { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"chess-board { margin: ",[0,20]," auto; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"chess-board .",[1],"row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: 100%; }\n.",[1],"chess-board .",[1],"cell { border-bottom: 1px solid #000000; border-right: 1px solid #000000; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"chess-board .",[1],"row .",[1],"cell:first-child { border-left: 1px solid #000000; }\n.",[1],"chess-board .",[1],"row:first-child .",[1],"cell { border-top: 1px solid #000000; }\n.",[1],"chess-board .",[1],"row .",[1],"cell:last-child { border: 0px solid #000000; background-color: #f3f3f3; }\n.",[1],"chess-board .",[1],"row:last-child .",[1],"cell { border: 0px solid #000000; background-color: #f3f3f3; }\n.",[1],"step-tip { border: 1px solid #ff0000; position: absolute; }\n.",[1],"chess-board-status-bar { margin-top: 15px; margin-left: 10px; margin-right: 10px; height: 90px; border: 1px dashed #000000; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row nowrap; -ms-flex-flow: row nowrap; flex-flow: row nowrap; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"now-stone-bar { height: ",[0,200],"; width: 90px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"now-stone { width: ",[0,50],"; height: ",[0,50],"; border: 1px solid #000000; border-radius: ",[0,25],"; }\n.",[1],"logo-img { width: 50px; height: 50px; border-radius: 50px; }\n.",[1],"now-stone2 { width: ",[0,40],"; height: ",[0,40],"; border: 1px solid #000000; border-radius: ",[0,25],"; }\n.",[1],"logo-img2 { width: 40px; height: 40px; border-radius: 40px; }\n.",[1],"five-stone-control-bar { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; height: 100%; border-left: 1px dashed #000000; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"win_tip { background-color: #ff0000; height: 4px; position: absolute; -webkit-transform-origin: \x270% 50%\x27; -ms-transform-origin: \x270% 50%\x27; transform-origin: \x270% 50%\x27 }\n.",[1],"bak_black { background-color: black; }\n.",[1],"bak_white { background-color: white; }\n.",[1],"bak_black { background-color: black; }\n.",[1],"bak_red { background-color: red; }\n.",[1],"bak_blue { background-color: blue; }\n.",[1],"bak_cyan { background-color: Cyan; }\n.",[1],"black { color: #000000; }\n.",[1],"white { color: #FFFFFF; }\n.",[1],"menu_view { position: fixed; top: ",[0,0],"; width: ",[0,750],"; height: 100%; background: rgba(200, 200, 200, .5); -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; z-index: 100; }\n.",[1],"menu_item_view { background: rgba(30, 144, 255, .9); margin: ",[0,60]," ",[0,0],"; border-radius: ",[0,20],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; border: ",[0,1]," solid black; font-size: ",[0,35],"; color: white; font-weight: bold; height: ",[0,90],"; width: ",[0,200],"; }\n.",[1],"uer-name { font-size: ",[0,30],"; }\n.",[1],"board_bak_black { border: 5px solid black; }\n.",[1],"board_bak_white { border: 5px solid white; }\n.",[1],"minbutton_style { width: ",[0,180],"; height: ",[0,80],"; z-index: 10; }\n.",[1],"minbutton_style:active { width: ",[0,180],"; height: ",[0,80],"; opacity: 0.5; z-index: 10; }\nbody { background-color: #f3f3f3; }\n",],undefined,{path:"./pages/play_online/play_online.wxss"});    
__wxAppCode__['pages/play_online/play_online.wxml']=$gwx('./pages/play_online/play_online.wxml');

__wxAppCode__['pages/play/play.wxss']=setCssToHead(["wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"userinfo { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"chess-board { margin: ",[0,20]," auto; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"chess-board .",[1],"row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: 100%; }\n.",[1],"chess-board .",[1],"cell { border-bottom: 1px solid #000000; border-right: 1px solid #000000; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"chess-board .",[1],"row .",[1],"cell:first-child { border-left: 1px solid #000000; }\n.",[1],"chess-board .",[1],"row:first-child .",[1],"cell { border-top: 1px solid #000000; }\n.",[1],"chess-board .",[1],"row .",[1],"cell:last-child { border: 0px solid #000000; background-color: #f3f3f3; }\n.",[1],"chess-board .",[1],"row:last-child .",[1],"cell { border: 0px solid #000000; background-color: #f3f3f3; }\n.",[1],"step-tip { border: 1px solid #ff0000; position: absolute; }\n.",[1],"chess-board-status-bar { margin-top: 15px; margin-left: 10px; margin-right: 10px; height: 90px; border: 1px dashed #000000; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row nowrap; -ms-flex-flow: row nowrap; flex-flow: row nowrap; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"now-stone-bar { height: ",[0,200],"; width: 90px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"now-stone { width: ",[0,50],"; height: ",[0,50],"; border: 1px solid #000000; border-radius: ",[0,25],"; }\n.",[1],"logo-img { width: 50px; height: 50px; border-radius: 50px; }\n.",[1],"now-stone2 { width: ",[0,40],"; height: ",[0,40],"; border: 1px solid #000000; border-radius: ",[0,25],"; }\n.",[1],"logo-img2 { width: 40px; height: 40px; border-radius: 40px; }\n.",[1],"five-stone-control-bar { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; height: 100%; border-left: 1px dashed #000000; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"win_tip { background-color: #ff0000; height: 4px; position: absolute; -webkit-transform-origin: \x270% 50%\x27; -ms-transform-origin: \x270% 50%\x27; transform-origin: \x270% 50%\x27 }\n.",[1],"bak_black { background-color: black; }\n.",[1],"bak_white { background-color: white; }\n.",[1],"bak_black { background-color: black; }\n.",[1],"bak_red { background-color: red; }\n.",[1],"bak_blue { background-color: blue; }\n.",[1],"bak_cyan { background-color: Cyan; }\n.",[1],"black { color: #000000; }\n.",[1],"white { color: #FFFFFF; }\n.",[1],"menu_view { position: fixed; top: ",[0,0],"; width: ",[0,750],"; height: 100%; background: rgba(200, 200, 200, .5); -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; z-index: 100; }\n.",[1],"menu_item_view { background: rgba(30, 144, 255, .8); margin: ",[0,60]," ",[0,0],"; border-radius: ",[0,30],"; padding: ",[0,30]," ",[0,90],"; border: ",[0,1]," solid black; font-size: ",[0,35],"; color: white; }\n.",[1],"uer-name { font-size: ",[0,30],"; }\n.",[1],"colorful { background: -o-radial-gradient(#EA0000, #FFD306); background: radial-gradient(#EA0000, #FFD306); }\n.",[1],"minbutton_style { width: ",[0,180],"; height: ",[0,80],"; z-index: 10; }\n.",[1],"minbutton_style:active { width: ",[0,180],"; height: ",[0,80],"; z-index: 10; opacity: 0.5; }\nbody { background-color: #f3f3f3; }\n",],undefined,{path:"./pages/play/play.wxss"});    
__wxAppCode__['pages/play/play.wxml']=$gwx('./pages/play/play.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
