var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bc'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'windowHeight']]],[1,'px']])
Z([[2,'!='],[[7],[3,'mulu_flag']],[1,'zml']])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'zml']])
Z(z[3])
Z(z[3])
Z(z[3])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'dplx']])
Z(z[7])
Z(z[7])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'dpcs']])
Z(z[10])
Z(z[10])
Z(z[10])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'ljms']])
Z([[2,'=='],[[7],[3,'mulu_flag']],[1,'bdms']])
Z(z[15])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'width:750rpx;align-content:center;align-items:center;padding-top:160rpx;flex-flow:column nowrap;'])
Z([[2,'!='],[[6],[[7],[3,'winLoc']],[3,'whowin']],[1,0]])
Z([[6],[[7],[3,'tips_group']],[3,'show_tips_last_flag']])
Z(z[3])
Z([[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']])
Z([3,'position:absolute;top:50rpx;left:40rpx;width:160rpx;justify-content:space-between;align-items:center;border:#000000 dashed 1rpx;padding:20rpx;'])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,2]])
Z([[6],[[7],[3,'tips_group']],[3,'show_wrong_choice_flag']])
Z([[6],[[7],[3,'tips_group']],[3,'show_right_choice_flag']])
Z([3,'__e'])
Z(z[11])
Z(z[11])
Z([3,'chess-board'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'ontouchstart']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'ontouchmove']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[14])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[6],[[7],[3,'fiveStone']],[3,'chessboardSizePX']]],[1,'px;height:']],[[6],[[7],[3,'fiveStone']],[3,'chessboardSizePX']]],[1,'px;background-color:#FFE153;position:relative;left:']],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']]],[1,'px;']])
Z([3,'itemy'])
Z([3,'row'])
Z([1,15])
Z(z[18])
Z([3,'itemx'])
Z([3,'cell'])
Z(z[20])
Z(z[22])
Z(z[23])
Z([3,'position:relative;'])
Z([[2,'&&'],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'itemy']],[1,3]],[[2,'=='],[[7],[3,'itemy']],[1,7]]],[[2,'=='],[[7],[3,'itemy']],[1,11]]],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'itemx']],[1,3]],[[2,'=='],[[7],[3,'itemx']],[1,7]]],[[2,'=='],[[7],[3,'itemx']],[1,11]]]])
Z([[2,'>'],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoard']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,0]])
Z([[2,'&&'],[[2,'>'],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoardtips']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,0]],[[6],[[7],[3,'tips_group']],[3,'show_tips_flag']]])
Z([3,'flex-flow:row nowrap;width:750rpx;display:flex;'])
Z([3,'width:190rpx;justify-content:space-between;align-items:center;border:#000000 dashed 1rpx;margin:0 10rpx 0 40rpx;padding:10rpx 18rpx;'])
Z(z[5])
Z([[2,'!'],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']]])
Z([3,'width:400rpx;height:100rpx;margin:20rpx;flex-flow:row nowrap;display:flex;align-items:center;align-content:center;justify-content:space-between;'])
Z([[6],[[7],[3,'tips_group']],[3,'show_restart_flag']])
Z([[6],[[7],[3,'tips_group']],[3,'show_qiuzhu_flag']])
Z([[6],[[7],[3,'tips_group']],[3,'show_undo_flag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'width:750rpx;align-content:center;align-items:center;padding-top:160rpx;flex-flow:column nowrap;'])
Z([[2,'!='],[[6],[[7],[3,'winLoc']],[3,'whowin']],[1,0]])
Z([[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']])
Z([3,'position:absolute;top:50rpx;left:40rpx;width:160rpx;justify-content:space-between;align-items:center;padding:20rpx;'])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'show_dftx_flag']],[1,3]])
Z([3,'__e'])
Z(z[8])
Z(z[8])
Z([3,'chess-board'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'ontouchstart']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'ontouchmove']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onChessBoardTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[11])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[6],[[7],[3,'fiveStone']],[3,'chessboardSizePX']]],[1,'px;height:']],[[6],[[7],[3,'fiveStone']],[3,'chessboardSizePX']]],[1,'px;background-color:#FFE153;position:relative;left:']],[[6],[[7],[3,'fiveStone']],[3,'halfCellSizePX']]],[1,'px;']])
Z([3,'itemy'])
Z([3,'row'])
Z([1,15])
Z(z[15])
Z([3,'itemx'])
Z([3,'cell'])
Z(z[17])
Z(z[19])
Z(z[20])
Z([3,'position:relative;'])
Z([[2,'&&'],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'itemy']],[1,3]],[[2,'=='],[[7],[3,'itemy']],[1,7]]],[[2,'=='],[[7],[3,'itemy']],[1,11]]],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'itemx']],[1,3]],[[2,'=='],[[7],[3,'itemx']],[1,7]]],[[2,'=='],[[7],[3,'itemx']],[1,11]]]])
Z([[2,'>'],[[6],[[6],[[6],[[6],[[7],[3,'fiveStone']],[3,'chessBoard']],[[7],[3,'itemx']]],[[7],[3,'itemy']]],[3,'stoneType']],[1,0]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'loc1']],[3,'x']],[[7],[3,'itemx']]],[[2,'=='],[[6],[[7],[3,'loc1']],[3,'y']],[[7],[3,'itemy']]]])
Z([[6],[[7],[3,'tips_group']],[3,'show_qiuzhu_flag']])
Z([[6],[[7],[3,'tips_group']],[3,'show_menu_flag']])
Z([[2,'=='],[[6],[[7],[3,'tips_group']],[3,'has_yaoqing_flag']],[1,'false']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/index/index.wxml','./pages/index2/index2.wxml','./pages/item_question/item_question.wxml','./pages/jieshao/jieshao.wxml','./pages/play/play.wxml','./pages/play_online/play_online.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(xC,cF)
if(_oz(z,4,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(xC,hG)
if(_oz(z,5,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(xC,oH)
if(_oz(z,6,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(xC,cI)
if(_oz(z,7,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(xC,oJ)
if(_oz(z,8,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(xC,lK)
if(_oz(z,9,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(xC,aL)
if(_oz(z,10,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(xC,tM)
if(_oz(z,11,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(xC,eN)
if(_oz(z,12,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(xC,bO)
if(_oz(z,13,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(xC,oP)
if(_oz(z,14,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(xC,xQ)
if(_oz(z,15,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(xC,oR)
if(_oz(z,16,e,s,gg)){oR.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oV=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,2,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(oV,oX)
if(_oz(z,3,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(oV,lY)
if(_oz(z,4,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oV,aZ)
if(_oz(z,5,e,s,gg)){aZ.wxVkey=1
var b3=_n('view')
_rz(z,b3,'style',6,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,7,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,8,e,s,gg)){x5.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
_(aZ,b3)
}
var t1=_v()
_(oV,t1)
if(_oz(z,9,e,s,gg)){t1.wxVkey=1
}
var e2=_v()
_(oV,e2)
if(_oz(z,10,e,s,gg)){e2.wxVkey=1
}
var o6=_mz(z,'view',['bindontouchmove',11,'bindontouchstart',1,'bindtap',2,'class',3,'data-event-opts',4,'id',5,'style',6],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_mz(z,'view',['class',26,'style',1],[],eFB,tEB,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,28,eFB,tEB,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,29,eFB,tEB,gg)){fKB.wxVkey=1
}
var cLB=_v()
_(xIB,cLB)
if(_oz(z,30,eFB,tEB,gg)){cLB.wxVkey=1
}
oJB.wxXCkey=1
fKB.wxXCkey=1
cLB.wxXCkey=1
_(bGB,xIB)
return bGB
}
lCB.wxXCkey=2
_2z(z,24,aDB,o0,h9,gg,lCB,'cell','itemx','itemx')
return cAB
}
f7.wxXCkey=2
_2z(z,20,c8,e,s,gg,f7,'row','itemy','itemy')
_(oV,o6)
var hMB=_n('view')
_rz(z,hMB,'style',31,e,s,gg)
var oNB=_n('view')
_rz(z,oNB,'style',32,e,s,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,33,e,s,gg)){cOB.wxVkey=1
}
var oPB=_v()
_(oNB,oPB)
if(_oz(z,34,e,s,gg)){oPB.wxVkey=1
}
cOB.wxXCkey=1
oPB.wxXCkey=1
_(hMB,oNB)
var lQB=_n('view')
_rz(z,lQB,'style',35,e,s,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,36,e,s,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(lQB,tSB)
if(_oz(z,37,e,s,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(lQB,eTB)
if(_oz(z,38,e,s,gg)){eTB.wxVkey=1
}
aRB.wxXCkey=1
tSB.wxXCkey=1
eTB.wxXCkey=1
_(hMB,lQB)
_(oV,hMB)
cW.wxXCkey=1
oX.wxXCkey=1
lY.wxXCkey=1
aZ.wxXCkey=1
t1.wxXCkey=1
e2.wxXCkey=1
_(r,oV)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oVB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,2,e,s,gg)){xWB.wxVkey=1
}
var oXB=_v()
_(oVB,oXB)
if(_oz(z,3,e,s,gg)){oXB.wxVkey=1
var h1B=_n('view')
_rz(z,h1B,'style',4,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,5,e,s,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,6,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(h1B,o4B)
if(_oz(z,7,e,s,gg)){o4B.wxVkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
o4B.wxXCkey=1
_(oXB,h1B)
}
var l5B=_mz(z,'view',['bindontouchmove',8,'bindontouchstart',1,'bindtap',2,'class',3,'data-event-opts',4,'id',5,'style',6],[],e,s,gg)
var a6B=_v()
_(l5B,a6B)
var t7B=function(b9B,e8B,o0B,gg){
var oBC=_v()
_(o0B,oBC)
var fCC=function(hEC,cDC,oFC,gg){
var oHC=_mz(z,'view',['class',23,'style',1],[],hEC,cDC,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,25,hEC,cDC,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(oHC,aJC)
if(_oz(z,26,hEC,cDC,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(oHC,tKC)
if(_oz(z,27,hEC,cDC,gg)){tKC.wxVkey=1
}
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
_(oFC,oHC)
return oFC
}
oBC.wxXCkey=2
_2z(z,21,fCC,b9B,e8B,gg,oBC,'cell','itemx','itemx')
return o0B
}
a6B.wxXCkey=2
_2z(z,17,t7B,e,s,gg,a6B,'row','itemy','itemy')
_(oVB,l5B)
var fYB=_v()
_(oVB,fYB)
if(_oz(z,28,e,s,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(oVB,cZB)
if(_oz(z,29,e,s,gg)){cZB.wxVkey=1
var eLC=_v()
_(cZB,eLC)
if(_oz(z,30,e,s,gg)){eLC.wxVkey=1
}
eLC.wxXCkey=1
}
xWB.wxXCkey=1
oXB.wxXCkey=1
fYB.wxXCkey=1
cZB.wxXCkey=1
_(r,oVB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/index2/index2","pages/play/play","pages/jieshao/jieshao","pages/item_question/item_question","pages/play_online/play_online"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"五子棋","navigationBarBackgroundColor":"#f3f3f3","backgroundColor":"#f3f3f3"},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"gobang_game","compilerVersion":"2.3.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"","enablePullDownRefresh":false,"disableScroll":true,"navigationBarBackgroundColor":"#f3f3f3","backgroundColorTop":"#f3f3f3","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index2/index2.json']={"navigationBarTitleText":" ","enablePullDownRefresh":false,"disableScroll":true,"navigationBarBackgroundColor":"#fdfdfd","backgroundColorTop":"#fdfdfd","backgroundColorBottom":"#fdfdfd","usingComponents":{}};
__wxAppCode__['pages/index2/index2.wxml']=$gwx('./pages/index2/index2.wxml');

__wxAppCode__['pages/item_question/item_question.json']={"usingComponents":{}};
__wxAppCode__['pages/item_question/item_question.wxml']=$gwx('./pages/item_question/item_question.wxml');

__wxAppCode__['pages/jieshao/jieshao.json']={"usingComponents":{}};
__wxAppCode__['pages/jieshao/jieshao.wxml']=$gwx('./pages/jieshao/jieshao.wxml');

__wxAppCode__['pages/play_online/play_online.json']={"navigationBarTitleText":" ","enablePullDownRefresh":false,"disableScroll":true,"navigationBarBackgroundColor":"#f3f3f3","backgroundColorTop":"#f3f3f3","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/play_online/play_online.wxml']=$gwx('./pages/play_online/play_online.wxml');

__wxAppCode__['pages/play/play.json']={"navigationBarTitleText":" ","enablePullDownRefresh":false,"disableScroll":true,"navigationBarBackgroundColor":"#f3f3f3","backgroundColorTop":"#f3f3f3","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/play/play.wxml']=$gwx('./pages/play/play.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"80c8":function(e,t,n){"use strict";var a=n("f45f"),r=n.n(a);r.a},8417:function(e,t,n){"use strict";n.r(t);var a=n("c4de"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=r.a},b4bb:function(e,t,n){"use strict";n.r(t);var a=n("8417");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("80c8");var o,u,c=n("2877"),s=Object(c["a"])(a["default"],o,u,!1,null,null,null);t["default"]=s.exports},c4de:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};t.default=n}).call(this,n("0de9")["default"])},e7a0:function(e,t,n){"use strict";(function(e,t,a){n("c577"),n("921b");var r=c(n("66fd")),o=c(n("b4bb")),u=c(n("e441"));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.default.prototype.$store=u.default,r.default.config.productionTip=!1,r.default.prototype.wxshare=function(){wx.showShareMenu({withShareTicket:!0})},r.default.prototype.get_storage_data=function(t,n){var a=this;return new Promise(function(r){e.getStorage({key:t,success:function(e){a[n]=e.data,r("ss")},fail:function(){r("ff")}})})},r.default.prototype.upload_to_server=function(n){e.request({url:"https://kaikaiomg.applinzi.com/uni_app_upload.php",method:"POST",data:n,header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){200!==e.statusCode?console.log(t("请求失败:",e," at main.js:39")):(console.log(t("上传成功-上传:",n," at main.js:41")),console.log(t("上传成功-回复:",e.data," at main.js:42")))}})},r.default.prototype.download_from_server=function(n,a,r){var o=this;return new Promise(function(u){e.request({url:"https://kaikaiomg.applinzi.com/uni_app_download.php",method:"POST",data:n,header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){200!==e.statusCode?(console.log(t("请求失败:",e," at main.js:58")),u("ff")):(console.log(t("取数成功—上传:",n," at main.js:61")),console.log(t("取数成功-数据:",e.data," at main.js:62")),o[a]=e.data.data,o[r]=e.data.statusCode,u("ss"))}})})},r.default.prototype.download_setStorage_json_get=function(n,a){e.request({url:n,method:"GET",success:function(n){200!==n.statusCode?console.log(t("请求失败:",n," at main.js:78")):(console.log(t("取数成功—上传:",a," at main.js:81")),console.log(t("取数成功-数据:",n.data," at main.js:82")),e.setStorage({key:a,data:n.data,success:function(){console.log(t("保存本地成功-数据:",a," at main.js:87"))}}))}})},r.default.prototype.download_setStorage_json_post=function(n){return new Promise(function(a){e.request({url:"https://kaikaiomg.applinzi.com/uni_app_download.php",method:"POST",data:{form:n},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){200!==a.statusCode?console.log(t("请求失败:",a," at main.js:107")):(console.log(t("取数成功—上传:",n," at main.js:109")),console.log(t("取数成功-数据:",a.data," at main.js:110")),e.setStorage({key:n,data:a.data,success:function(){console.log(t("保存本地成功-数据:",n," at main.js:115"))}}))}}),a("ss")})},r.default.prototype.upchangetoabc=function(e){var t=e.toString();switch(t){case"0":return"A";case"1":return"B";case"2":return"C";case"3":return"D";case"4":return"E";case"5":return"F";case"6":return"G";case"7":return"H";case"8":return"I";case"9":return"J";case"10":return"K";case"11":return"L";case"12":return"M";case"13":return"N";case"14":return"O";case"A":return"0";case"B":return"1";case"D":return"2";case"C":return"3";case"E":return"4";case"F":return"5";case"G":return"6";case"H":return"7";case"I":return"8";case"J":return"9";case"K":return"10";case"L":return"11";case"M":return"12";case"N":return"13";case"O":return"14";default:break}},r.default.prototype.downchangetoabc=function(e){var t=e.toString();switch(t){case"A":return"0";case"B":return"1";case"C":return"2";case"D":return"3";case"E":return"4";case"F":return"5";case"G":return"6";case"H":return"7";case"I":return"8";case"J":return"9";case"K":return"10";case"L":return"11";case"M":return"12";case"N":return"13";case"O":return"14";case"0":return"A";case"1":return"B";case"2":return"D";case"3":return"C";case"4":return"E";case"5":return"F";case"6":return"G";case"7":return"H";case"8":return"I";case"9":return"J";case"10":return"K";case"11":return"L";case"12":return"M";case"13":return"N";case"14":return"O";default:break}},o.default.mpType="app";var l=new r.default(s({store:u.default},o.default));a(l).$mount()}).call(this,n("6e42")["default"],n("0de9")["default"],n("6e42")["createApp"])},f45f:function(e,t,n){}},[["e7a0","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(i.length>1){var a=i.pop();o=i.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=i[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2144:function(t,e,n){"use strict";var r;function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.tipsdic=void 0;var o=(r={none:[["H8"],[1e3]],H8:[["H9","I9"],[1e3,1e3]],H8H9:[["I9"],[1e3]],H8I9:[["I7"],[1e3]],H8H9I9:[["I8","G7","J10","J7","G8","J8","I7","I11","I10","H7","J9","F8","I6","K8","H10","G9","K7","F7","K11","F11","F6","H6","G11","J11","F10","G10","H11","K10","G6","F9","K9","J6"],[191760,155912,101065,26402,21249,18294,15140,10427,10326,8915,7982,6613,6592,6524,4923,4858,4598,4220,3872,3760,3305,2891,2837,2777,2559,2219,1802,1639,1360,996,954,504]],H8I9I7:[["G9","J6","G7","H9","G6","G8","J8","J9","J7","K6","H7","F12","I12","E9","H5","H6","E7","E6","G5","F8","J12","H4","J4","K9","G11","I11","G10","H11","E5","K5","I4","E12","F11","I5","E11","K7","F10","E4","F5","J10","I10","F4","J5","L9","L5","E10","I6","L8","I8","F7","F6","J11","F9","L6","H10","L7","K11","L12","H12","L4","L10","K8","G12","L11","E8","K12","G4","K4","K10"],[225460,,140900,,26856,,18378,,16535,,15366,,11873,,11379,,7848,,6900,,6639,,6524,,6412,,6293,,6221,,5978,,5419,,5070,,5035,,4811,,4597,,4423,,4272,,4265,,4250,,4034,,3927,,3904,,3773,,3730,,3720,,3657,,3646,,3406,,3350,,3286,,3194,,3146,,3067,,2986,,2856,,2813,,2788,,2624,,2525,,2425,,2408,,2378,,2316,,2285,,2235,,2117,,1979,,1971,,1824,,1798,,1744,,1727,,1715,,1714,,1603,,1563,,1444,,1391,,1356,,1331,,1319,,1309,,1202]],H8H9I9F10:[["J10","I8"],[1907,652]],H8H9I9F11:[["J10","I8"],[3001,759]],H8H9I9F6:[["J10","I8"],[1685,1620]],H8H9I9F7:[["I8","J10"],[3881,339]],H8H9I9F8:[["I7","J8"],[4378,2235]],H8H9I9F9:[["J10","I8"],[564,432]],H8H9I9G10:[["J10","I8"],[1120,1099]],H8H9I9G11:[["G7","I8"],[2236,601]],H8H9I9G6:[["I8","J10"],[1055,305]],H8H9I9G7:[["J10","I10"],[142862,13050]],H8H9I9G8:[["J10","I10"],[11556,9693]],H8H9I9G9:[["G7","I8"],[2800,2058]],H8H9I9H10:[["J10","I8"],[3741,1182]],H8H9I9H11:[["G7","I8"],[1412,390]],H8H9I9H6:[["J10","I8"],[2600,291]],H8H9I9H7:[["J10","G7"],[8580,335]],H8H9I9I10:[["G8","G7"],[7768,2558]],H8H9I9I11:[["J10","I7"],[8032,2395]],H8H9I9I6:[["I8","J10"],[6377,215]],H8H9I9I7:[["J10","G7"],[14279,861]],H8H9I9I8:[["G7","J7"],[123505,68255]],H8H9I9J10:[["G7","G8"],[87957,13108]],H8H9I9J11:[["J10","G7"],[1913,864]],H8H9I9J6:[["I8","J10"],[314,190]],H8H9I9J7:[["J10","I8"],[23925,2477]],H8H9I9J8:[["G7","J10"],[14681,3613]],H8H9I9J9:[["G7","J10"],[7266,716]],H8H9I9K10:[["I8","G7"],[1237,402]],H8H9I9K11:[["G7","I8"],[3427,445]],H8H9I9K7:[["J10","I8"],[4332,266]],H8H9I9K8:[["G7","J10"],[4563,1961]],H8H9I9K9:[["I7","I8"],[687,267]],H8I9I7G9:[["J8"],[119802]],H8I9I7J6:[["G9"],[112238]]},i(r,"H8I9I7G9",[["J7"],[105658]]),i(r,"H8I9I7J6",[["G8"],[28662]]),i(r,"H8I9I7G7",[["H9"],[26855]]),i(r,"H8I9I7H9",[["J8"],[18377]]),i(r,"H8I9I7G6",[["H7"],[16534]]),i(r,"H8I9I7G8",[["J8"],[15365]]),i(r,"H8I9I7J8",[["H10"],[11872]]),i(r,"H8I9I7J9",[["H9"],[11378]]),i(r,"H8I9I7J7",[["J6"],[7847]]),i(r,"H8I9I7K6",[["H7"],[6899]]),i(r,"H8I9I7F12",[["H7"],[6523]]),i(r,"H8I9I7I12",[["H7"],[6411]]),i(r,"H8I9I7E9",[["H7"],[6292]]),i(r,"H8I9I7H5",[["G8"],[6220]]),i(r,"H8I9I7H6",[["G8"],[5977]]),i(r,"H8I9I7E7",[["H7"],[5418]]),i(r,"H8I9I7E6",[["H7"],[5069]]),i(r,"H8I9I7G5",[["H7"],[5034]]),i(r,"H8I9I7F8",[["J8"],[4810]]),i(r,"H8I9I7J12",[["H7"],[4596]]),i(r,"H8I9I7H4",[["H7"],[4422]]),i(r,"H8I9I7J4",[["H7"],[4271]]),i(r,"H8I9I7K9",[["H7"],[4264]]),i(r,"H8I9I7G11",[["H7"],[4249]]),i(r,"H8I9I7I11",[["H7"],[4033]]),i(r,"H8I9I7G10",[["J8"],[3926]]),i(r,"H8I9I7H11",[["H7"],[3903]]),i(r,"H8I9I7E5",[["H7"],[3772]]),i(r,"H8I9I7K5",[["H7"],[3729]]),i(r,"H8I9I7I4",[["H7"],[3719]]),i(r,"H8I9I7E12",[["H7"],[3656]]),i(r,"H8I9I7F11",[["H7"],[3645]]),i(r,"H8I9I7H7",[["G9"],[3487]]),i(r,"H8I9I7I5",[["H7"],[3405]]),i(r,"H8I9I7K7",[["H7"],[3285]]),i(r,"H8I9I7H7",[["J6"],[3152]]),i(r,"H8I9I7F5",[["H7"],[3066]]),i(r,"H8I9I7J10",[["H7"],[2985]]),i(r,"H8I9I7I10",[["J8"],[2855]]),i(r,"H8I9I7F4",[["H7"],[2812]]),i(r,"H8I9I7J5",[["H7"],[2787]]),i(r,"H8I9I7E11",[["H7"],[2725]]),i(r,"H8I9I7L9",[["H7"],[2623]]),i(r,"H8I9I7L5",[["H7"],[2524]]),i(r,"H8I9I7F10",[["H6"],[2471]]),i(r,"H8I9I7E10",[["H7"],[2424]]),i(r,"H8I9I7I6",[["J6"],[2407]]),i(r,"H8I9I7L8",[["H7"],[2377]]),i(r,"H8I9I7I8",[["H7"],[2315]]),i(r,"H8I9I7F7",[["H7"],[2284]]),i(r,"H8I9I7F6",[["H7"],[2234]]),i(r,"H8I9I7J11",[["H7"],[2116]]),i(r,"H8I9I7E4",[["H7"],[2043]]),i(r,"H8I9I7F9",[["H7"],[1978]]),i(r,"H8I9I7L6",[["H7"],[1970]]),i(r,"H8I9I7H10",[["J8"],[1823]]),i(r,"H8I9I7L7",[["H7"],[1797]]),i(r,"H8I9I7K11",[["H7"],[1743]]),i(r,"H8I9I7L12",[["H7"],[1726]]),i(r,"H8I9I7H12",[["H7"],[1714]]),i(r,"H8I9I7L4",[["H7"],[1713]]),i(r,"H8I9I7L10",[["H7"],[1602]]),i(r,"H8I9I7K8",[["H7"],[1562]]),i(r,"H8I9I7G12",[["H7"],[1443]]),i(r,"H8I9I7L11",[["H7"],[1390]]),i(r,"H8I9I7E8",[["H7"],[1355]]),i(r,"H8I9I7K12",[["H7"],[1330]]),i(r,"H8I9I7G4",[["H7"],[1318]]),i(r,"H8I9I7K4",[["H7"],[1308]]),i(r,"H8I9I7K10",[["H7"],[1201]]),i(r,"H8I9I7E4",[["G9"],[1103]]),i(r,"H8I9I7F10",[["H7"],[723]]),i(r,"H8I9I7E11",[["G9"],[625]]),i(r,"H8I9I7E8",[["G9"],[1]]),i(r,"H8I9I7F12",[["G9"],[1]]),i(r,"H8I9I7G11",[["G9"],[1]]),i(r,"H8I9I7G6",[["G9"],[1]]),i(r,"H8I9I7J11",[["G9"],[1]]),i(r,"H8I9I7K9",[["G9"],[1]]),i(r,"H8I9I7L4",[["G9"],[1]]),i(r,"H8I9I7E10",[["G9"],[1]]),i(r,"H8I9I7E5",[["G9"],[1]]),i(r,"H8I9I7E9",[["G9"],[1]]),i(r,"H8I9I7F4",[["G9"],[1]]),i(r,"H8I9I7G12",[["G9"],[1]]),i(r,"H8I9I7G7",[["G9"],[1]]),i(r,"H8I9I7H11",[["G9"],[1]]),i(r,"H8I9I7I6",[["G9"],[1]]),i(r,"H8I9I7J12",[["G9"],[1]]),i(r,"H8I9I7J7",[["G9"],[1]]),i(r,"H8I9I7K11",[["G9"],[1]]),i(r,"H8I9I7L9",[["G9"],[1]]),i(r,"H8I9I7H6",[["G9"],[1]]),i(r,"H8I9I7E6",[["G9"],[1]]),i(r,"H8I9I7G4",[["G9"],[1]]),i(r,"H8I9I7H12",[["G9"],[1]]),i(r,"H8I9I7J4",[["G9"],[1]]),i(r,"H8I9I7J8",[["G9"],[1]]),i(r,"H8I9I7K12",[["G9"],[1]]),i(r,"H8I9I7E12",[["G9"],[1]]),i(r,"H8I9I7E7",[["G9"],[1]]),i(r,"H8I9I7F11",[["G9"],[1]]),i(r,"H8I9I7F6",[["G9"],[1]]),i(r,"H8I9I7H4",[["G9"],[1]]),i(r,"H8I9I7H9",[["G9"],[1]]),i(r,"H8I9I7I4",[["G9"],[1]]),i(r,"H8I9I7J10",[["G9"],[1]]),i(r,"H8I9I7J9",[["G9"],[1]]),i(r,"H8I9I7K4",[["G9"],[1]]),i(r,"H8I9I7L12",[["G9"],[1]]),r);e.tipsdic=o},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return x}),n.d(e,"mapState",function(){return A}),n.d(e,"mapMutations",function(){return j}),n.d(e,"mapGetters",function(){return E}),n.d(e,"mapActions",function(){return P}),n.d(e,"createNamespacedHelpers",function(){return C});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},i="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},l={namespaced:{configurable:!0}};l.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,l);var f=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;p(t.concat(r),e.getChild(r),n.modules[r])}}f.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},f.prototype.update=function(t){p([],this.root,t)},f.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new u(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&a(e.modules,function(e,i){r.register(t.concat(i),e,n)})},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var h;var d=function(t){var e=this;void 0===t&&(t={}),!h&&"undefined"!==typeof window&&window.Vue&&x(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"===typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=r,m(this,i,[],this._modules.root),g(this,i),n.forEach(function(t){return t(e)}),h.config.devtools&&o(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),g(t,n,e)}function g(t,e,n){var r=t._vm;t.getters={};var i=t._wrappedGetters,o={};a(i,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=h.config.silent;h.config.silent=!0,t._vm=new h({data:{$$state:e},computed:o}),h.config.silent=s,t.strict&&$(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),h.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,i){var o=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!o&&!i){var s=H(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){h.set(s,c,r.state)})}var u=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;I(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,i=e.handler||e;k(t,r,i,u)}),r.forEachGetter(function(e,n){var r=a+n;S(t,r,e,u)}),r.forEachChild(function(r,o){m(t,e,n.concat(o),r,i)})}function b(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=O(n,r,i),a=o.payload,s=o.options,c=o.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,i){var o=O(n,r,i),a=o.payload,s=o.options,c=o.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return w(t,e)}},state:{get:function(){return H(t.state,n)}}}),i}function w(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function I(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(e){n.call(t,r.state,e)})}function k(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var o=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return c(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function S(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function $(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function H(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function O(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function x(t){h&&t===h||(h=t,r(h))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,i=O(t,e,n),o=i.type,a=i.payload,s=(i.options,{type:o,payload:a}),c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=O(t,e),i=r.type,o=r.payload,a={type:i,payload:o},s=this._actions[i];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},d.prototype.subscribe=function(t){return y(t,this._subscribers)},d.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),g(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=H(e.state,t.slice(0,-1));h.delete(n,t[t.length-1])}),_(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var A=T(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=F(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0}),n}),j=T(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=F(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),E=T(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||F(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0}),n}),P=T(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=F(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),C=function(t){return{mapState:A.bind(null,t),mapGetters:E.bind(null,t),mapMutations:j.bind(null,t),mapActions:P.bind(null,t)}};function D(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function T(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function F(t,e,n){var r=t._modulesNamespaceMap[n];return r}var N={Store:d,install:x,version:"3.0.1",mapState:A,mapMutations:j,mapGetters:E,mapActions:P,createNamespacedHelpers:C};e["default"]=N},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function f(t){return"[object RegExp]"===u.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var I=/-(\w)/g,k=w(function(t){return t.replace(I,function(t,e){return e?e.toUpperCase():""})}),S=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),$=/\B([A-Z])/g,H=w(function(t){return t.replace($,"-$1").toLowerCase()});function O(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var A=Function.prototype.bind?x:O;function j(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function E(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&E(e,t[n]);return e}function C(t,e,n){}var D=function(t,e,n){return!1},T=function(t){return t};function F(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return F(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return F(t[n],e[n])})}catch(u){return!1}}function N(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var G=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],R={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:C,parsePlatformTagName:T,mustUseProp:D,async:!0,_lifecycleHooks:L},J=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function M(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var U=new RegExp("[^"+J.source+".$_\\d]");function V(t){if(!U.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var q,z="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===q&&(q=!K&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),q},ot=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=C,lt=0,ft=function(){this.id=lt++,this.subs=[]};function pt(t){ft.SharedObject.targetStack.push(t),ft.SharedObject.target=t}function ht(){ft.SharedObject.targetStack.pop(),ft.SharedObject.target=ft.SharedObject.targetStack[ft.SharedObject.targetStack.length-1]}ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){g(this.subs,t)},ft.prototype.depend=function(){ft.SharedObject.target&&ft.SharedObject.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ft.SharedObject.target=null,ft.SharedObject.targetStack=[];var dt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var yt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function _t(t){return new dt(void 0,void 0,void 0,String(t))}function gt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];W(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var It=Object.getOwnPropertyNames(bt),kt=!0;function St(t){kt=t}var $t=function(t){this.value=t,this.dep=new ft,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(z?t.push!==t.__proto__.push?Ot(t,bt,It):Ht(t,bt):Ot(t,bt,It),this.observeArray(t)):this.walk(t)};function Ht(t,e){t.__proto__=e}function Ot(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(t,o,e[o])}}function xt(t,e){var n;if(c(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof $t?n=t.__ob__:kt&&!it()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new $t(t)),e&&n&&n.vmCount++,n}function At(t,e,n,r,i){var o=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var u=!i&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.SharedObject.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Pt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,u=!i&&xt(e),o.notify())}})}}function jt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(At(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Et(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Pt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pt(e)}$t.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)At(t,e[n])},$t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var Ct=R.optionMergeStrategies;function Dt(t,e){if(!e)return t;for(var n,r,i,o=ct?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&l(r)&&l(i)&&Dt(r,i):jt(t,n,i));return t}function Tt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Dt(r,i):i}:e?t?function(){return Dt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Ft(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Nt(n):n}function Nt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var i=Object.create(t||null);return e?E(i,e):i}Ct.data=function(t,e,n){return n?Tt(t,e,n):e&&"function"!==typeof e?t:Tt(t,e)},L.forEach(function(t){Ct[t]=Ft}),G.forEach(function(t){Ct[t+"s"]=Bt}),Ct.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in E(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Ct.props=Ct.methods=Ct.inject=Ct.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return E(i,t),e&&E(i,e),i},Ct.provide=Tt;var Gt=function(t,e){return void 0===e?t:e};function Lt(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=k(i),a[o]={type:null})}else if(l(n))for(var s in n)i=n[s],o=k(s),a[o]=l(i)?i:{type:i};else 0;t.props=a}}function Rt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?E({from:o},a):{from:a}}else 0}}function Jt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Mt(t,e,n){if("function"===typeof e&&(e=e.options),Lt(e,n),Rt(e,n),Jt(e),!e._base&&(e.extends&&(t=Mt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Mt(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)b(t,o)||s(o);function s(r){var i=Ct[r]||Gt;a[r]=i(t[r],e[r],n,r)}return a}function Wt(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=k(n);if(b(i,o))return i[o];var a=S(o);if(b(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Ut(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t],s=Kt(Boolean,i.type);if(s>-1)if(o&&!b(i,"default"))a=!1;else if(""===a||a===H(t)){var c=Kt(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Vt(r,i,t);var u=kt;St(!0),xt(a),St(u)}return a}function Vt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==qt(e.type)?r.call(t):r}}function qt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function zt(t,e){return qt(t)===qt(e)}function Kt(t,e){if(!Array.isArray(e))return zt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(zt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ei){Zt(ei,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Yt(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&h(o)&&!o._handled&&(o.catch(function(t){return Xt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ei){Xt(ei,r,i)}return o}function Zt(t,e,n){if(R.errorHandler)try{return R.errorHandler.call(null,t,e,n)}catch(ei){ei!==t&&Qt(ei,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!K&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(C)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var oe=1,ae=new MutationObserver(re),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ei){Xt(ei,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new st;function le(t){fe(t,ue),ue.clear()}function fe(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)fe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)fe(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Yt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Yt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,i,a,s){var c,u,l,f;for(c in t)u=t[c],l=e[c],f=pe(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=he(u,s)),o(f.once)&&(u=t[c]=a(f.name,u,f.capture)),n(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(f=pe(c),i(f.name,e[c],f.capture))}function ve(t,e,n){var o=e.options.props;if(!r(o)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in o){var l=H(u);ye(a,c,u,l,!0)||ye(a,s,u,l,!1)}return a}}function ye(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function _e(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return s(t)?[_t(t)]:Array.isArray(t)?be(t):void 0}function me(t){return i(t)&&i(t.text)&&a(t.isComment)}function be(t,e){var n,a,c,u,l=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(c=l.length-1,u=l[c],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(u)&&(l[c]=_t(u.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?me(u)?l[c]=_t(u.text+a):""!==a&&l.push(_t(a)):me(a)&&me(u)?l[c]=_t(u.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),l.push(a)));return l}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ie(t){var e=ke(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){At(t,n,e[n])}),St(!0))}function ke(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Se(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every($e)&&delete n[u];return n}function $e(t){return t.isComment&&!t.asyncFactory||" "===t.text}function He(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Oe(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=xe(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),W(i,"$stable",a),W(i,"$key",s),W(i,"$hasNormal",o),i}function Oe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xe(t,e){return function(){return t[e]}}function Ae(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function je(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=E(E({},r),n)),i=o(n)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Ee(t){return Wt(this.$options,"filters",t,!0)||T}function Pe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ce(t,e,n,r,i){var o=R.keyCodes[e]||n;return i&&r&&!R.keyCodes[e]?Pe(i,r):o?Pe(o,t):r?H(r)!==e:void 0}function De(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||_(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||R.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=k(a),u=H(a);if(!(c in o)&&!(u in o)&&(o[a]=n[a],i)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Te(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ne(r,"__static__"+t,!1),r)}function Fe(t,e,n){return Ne(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ne(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Be(t[r],e+"_"+r,n);else Be(t,e,n)}function Be(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ge(t,e){if(e)if(l(e)){var n=t.on=t.on?E({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Le(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Le(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Re(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Me(t){t._o=Fe,t._n=v,t._s=d,t._l=Ae,t._t=je,t._q=F,t._i=N,t._m=Te,t._f=Ee,t._k=Ce,t._b=De,t._v=_t,t._e=yt,t._u=Le,t._g=Ge,t._d=Re,t._p=Je}function We(t,e,r,i,a){var s,c=this,u=a.options;b(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var l=o(u._compiled),f=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=ke(u.inject,i),this.slots=function(){return c.$slots||He(t.scopedSlots,c.$slots=Se(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return He(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=He(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=rn(s,t,e,n,r,f);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,f)}}function Ue(t,e,r,o,a){var s=t.options,c={},u=s.props;if(i(u))for(var l in u)c[l]=Ut(l,u,e||n);else i(r.attrs)&&qe(c,r.attrs),i(r.props)&&qe(c,r.props);var f=new We(r,c,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof dt)return Ve(p,r,f.parent,s,f);if(Array.isArray(p)){for(var h=ge(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Ve(h[v],r,f.parent,s,f);return d}}function Ve(t,e,n,r,i){var o=gt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function qe(t,e){for(var n in e)t[k(n)]=e[n]}Me(We.prototype);var ze={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;ze.prepatch(n,n)}else{var r=t.componentInstance=Ye(t,kn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;On(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,En(n,"mounted")),t.data.keepAlive&&(e._isMounted?Mn(n):An(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?jn(e,!0):e.$destroy())}},Ke=Object.keys(ze);function Xe(t,e,n,a,s){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=dn(l,u),void 0===t))return hn(l,e,n,a,s);e=e||{},pr(t),i(e.model)&&tn(t.options,e);var f=ve(e,t,s);if(o(t.options.functional))return Ue(t,f,e,n,a);var p=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:p,tag:s,children:a},l);return v}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],i=e[r],o=ze[r];i===o||i&&i._merged||(e[r]=i?Qe(o,i):o)}}function Qe(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var en=1,nn=2;function rn(t,e,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=nn),on(t,e,n,r,i)}function on(t,e,n,r,o){if(i(n)&&i(n.__ob__))return yt();if(i(n)&&i(n.is)&&(e=n.is),!e)return yt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===nn?r=ge(r):o===en&&(r=_e(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||R.getTagNamespace(e),a=R.isReservedTag(e)?new dt(R.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Wt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Xe(c,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&an(a,s),i(n)&&sn(n),a):yt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&an(c,e,n)}}function sn(t){c(t.style)&&le(t.style),c(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Se(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return rn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return rn(t,e,n,r,i,!0)};var o=r&&r.data;At(t,"$attrs",o&&o.attrs||n,null,!0),At(t,"$listeners",e._parentListeners||n,null,!0)}var un,ln=null;function fn(t){Me(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=He(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(ei){Xt(ei,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=yt()),t.parent=i,t}}function pn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function hn(t,e,n,r,i){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function dn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=ln;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,u=null,l=null;n.$on("hook:destroyed",function(){return g(a,n)});var f=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},p=B(function(n){t.resolved=pn(n,e),s?a.length=0:f(!0)}),d=B(function(e){i(t.errorComp)&&(t.error=!0,f(!0))}),v=t(p,d);return c(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),i(v.error)&&(t.errorComp=pn(v.error,e)),i(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,f(!1))},v.delay||200)),i(v.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||vn(n)))return n}}function _n(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function gn(t,e){un.$on(t,e)}function mn(t,e){un.$off(t,e)}function bn(t,e){var n=un;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function wn(t,e,n){un=t,de(e,n||{},gn,mn,bn,t),un=void 0}function In(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?j(n):n;for(var r=j(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Yt(n[o],e,r,e,i)}return e}}var kn=null;function Sn(t){var e=kn;return kn=t,function(){kn=e}}function $n(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Hn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Sn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){En(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),En(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){St(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var h=f[p],d=t.$options.props;l[h]=Ut(h,d,e,t)}St(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,v),u&&(t.$slots=Se(o,i.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function An(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)An(t.$children[n]);En(t,"activated")}}function jn(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);En(t,"deactivated")}}function En(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Yt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Pn=[],Cn=[],Dn={},Tn=!1,Fn=!1,Nn=0;function Bn(){Nn=Pn.length=Cn.length=0,Dn={},Tn=Fn=!1}var Gn=Date.now;if(K&&!Q){var Ln=window.performance;Ln&&"function"===typeof Ln.now&&Gn()>document.createEvent("Event").timeStamp&&(Gn=function(){return Ln.now()})}function Rn(){var t,e;for(Gn(),Fn=!0,Pn.sort(function(t,e){return t.id-e.id}),Nn=0;Nn<Pn.length;Nn++)t=Pn[Nn],t.before&&t.before(),e=t.id,Dn[e]=null,t.run();var n=Cn.slice(),r=Pn.slice();Bn(),Wn(n),Jn(r),ot&&R.devtools&&ot.emit("flush")}function Jn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&En(r,"updated")}}function Mn(t){t._inactive=!1,Cn.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,An(t[e],!0)}function Un(t){var e=t.id;if(null==Dn[e]){if(Dn[e]=!0,Fn){var n=Pn.length-1;while(n>Nn&&Pn[n].id>t.id)n--;Pn.splice(n+1,0,t)}else Pn.push(t);Tn||(Tn=!0,ce(Rn))}}var Vn=0,qn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Vn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=V(e),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};qn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ei){if(!this.user)throw ei;Xt(ei,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),ht(),this.cleanupDeps()}return t},qn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},qn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},qn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Un(this)},qn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ei){Xt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},qn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},qn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},qn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var zn={enumerable:!0,configurable:!0,get:C,set:C};function Kn(t,e,n){zn.get=function(){return this[e][n]},zn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,zn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&or(t,e.methods),e.data?Zn(t):xt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||St(!1);var a=function(o){i.push(o);var a=Ut(o,e,n,t);At(r,o,a),o in t||Kn(t,"_props",o)};for(var s in e)a(s);St(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||M(o)||Kn(t,"_data",o)}xt(e,!0)}function Qn(t,e){pt();try{return t.call(e,e)}catch(ei){return Xt(ei,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new qn(t,a||C,C,tr)),i in t||nr(t,i,o)}}function nr(t,e,n){var r=!it();"function"===typeof n?(zn.get=r?rr(e):ir(n),zn.set=C):(zn.get=n.get?r&&!1!==n.cache?rr(e):ir(n.get):C,zn.set=n.set||C),Object.defineProperty(t,e,zn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function or(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?C:A(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=jt,t.prototype.$delete=Et,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new qn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(o){Xt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var ur=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=ur++,e._isVue=!0,t&&t._isComponent?fr(e,t):e.$options=Mt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,$n(e),_n(e),cn(e),En(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Ie(e),Xn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&En(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=hr(t);i&&E(t.extendOptions,i),e=t.options=Mt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=j(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Mt(this.options,t),this}}function _r(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Mt(n.options,t),a["super"]=n,a.options.props&&gr(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,G.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=E({},a.options),i[r]=a,a}}function gr(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){G.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function Ir(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function kr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=wr(a.componentOptions);s&&!e(s)&&Sr(n,o,r,i)}}}function Sr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,g(n,e)}lr(dr),cr(dr),In(dr),Hn(dr),fn(dr);var $r=[String,RegExp,Array],Hr={name:"keep-alive",abstract:!0,props:{include:$r,exclude:$r,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Sr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){kr(t,function(t){return Ir(e,t)})}),this.$watch("exclude",function(e){kr(t,function(t){return!Ir(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=wr(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!Ir(o,r))||a&&r&&Ir(a,r))return e;var s=this,c=s.cache,u=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,g(u,l),u.push(l)):(c[l]=e,u.push(l),this.max&&u.length>parseInt(this.max)&&Sr(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Or={KeepAlive:Hr};function xr(t){var e={get:function(){return R}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:E,mergeOptions:Mt,defineReactive:At},t.set=jt,t.delete=Et,t.nextTick=ce,t.observable=function(t){return xt(t),t},t.options=Object.create(null),G.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,E(t.options.components,Or),vr(t),yr(t),_r(t),br(t)}xr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:it}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:We}),dr.version="2.6.10";var Ar="[object Array]",jr="[object Object]";function Er(t,e){var n={};return Pr(t,e),Cr(t,e,"",n),n}function Pr(t,e){if(t!==e){var n=Tr(t),r=Tr(e);if(n==jr&&r==jr){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var o=t[i];void 0===o?t[i]=null:Pr(o,e[i])}}else n==Ar&&r==Ar&&t.length>=e.length&&e.forEach(function(e,n){Pr(t[n],e)})}}function Cr(t,e,n,r){if(t!==e){var i=Tr(t),o=Tr(e);if(i==jr)if(o!=jr||Object.keys(t).length<Object.keys(e).length)Dr(r,n,t);else{var a=function(i){var o=t[i],a=e[i],s=Tr(o),c=Tr(a);if(s!=Ar&&s!=jr)o!=e[i]&&Dr(r,(""==n?"":n+".")+i,o);else if(s==Ar)c!=Ar?Dr(r,(""==n?"":n+".")+i,o):o.length<a.length?Dr(r,(""==n?"":n+".")+i,o):o.forEach(function(t,e){Cr(t,a[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==jr)if(c!=jr||Object.keys(o).length<Object.keys(a).length)Dr(r,(""==n?"":n+".")+i,o);else for(var u in o)Cr(o[u],a[u],(""==n?"":n+".")+i+"."+u,r)};for(var s in t)a(s)}else i==Ar?o!=Ar?Dr(r,n,t):t.length<e.length?Dr(r,n,t):t.forEach(function(t,i){Cr(t,e[i],n+"["+i+"]",r)}):Dr(r,n,t)}}function Dr(t,e,n){t[e]=n}function Tr(t){return Object.prototype.toString.call(t)}function Fr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Nr(t){return Pn.find(function(e){return t._watcher===e})}function Br(t,e){if(!t.__next_tick_pending&&!Nr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ei){Xt(ei,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Gr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Lr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Gr(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var a=Er(i,o);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Fr(n)})):Fr(this)}};function Rr(){}function Jr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Rr),t.$options.render||(t.$options.render=Rr),"mp-toutiao"!==t.mpHost&&En(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new qn(t,r,C,{before:function(){t._isMounted&&!t._isDestroyed&&En(t,"beforeUpdate")}},!0),n=!1,t}function Mr(t,e){return i(t)||i(e)?Wr(t,Ur(e)):""}function Wr(t,e){return t?e?t+" "+e:t:e||""}function Ur(t){return Array.isArray(t)?Vr(t):c(t)?qr(t):"string"===typeof t?t:""}function Vr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=Ur(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function qr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var zr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?P(t):"string"===typeof t?zr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Yr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:j(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Br(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=Ie,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,i=n.$options[t],o=t+" hook";if(i)for(var a=0,s=i.length;a<s;a++)r=Yt(i[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return l(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yr(e||this,t)},t.prototype.__get_class=function(t,e){return Mr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?E(e,n):n;return Object.keys(r).map(function(t){return H(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,o,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(c(t)){for(o=Object.keys(t),n=Object.create(null),r=0,i=o.length;r<i;r++)a=o[r],n[a]=e(t[a],a,r);return n}return[]}}var Qr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ti(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Qr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Qr}dr.prototype.__patch__=Lr,dr.prototype.$mount=function(t,e){return Jr(this,t,e)},ti(dr),Zr(dr),e["default"]=dr}.call(this,n("c8ba"))},6831:function(t,e,n){"use strict";n("6a46");function r(t,e,n,r,i){var o=0,a=i(e,n,r),s={x:e,y:n};while(a.x<this.chessBoardSize&&a.y<this.chessBoardSize&&a.x>=0&&a.y>=0){if(this.chessBoard[a.x][a.y].stoneType!=t)break;s.x=a.x,s.y=a.y,o++,a=i(a.x,a.y,r)}return{count:o,lastLoc:s}}var i={vertical:function(t,e,n){return{x:t,y:n?e-1:e+1}},horizontal:function(t,e,n){return{x:n?t+1:t-1,y:e}},leftSkew:function(t,e,n){return{x:n?t-1:t+1,y:n?e-1:e+1}},rightSkew:function(t,e,n){return{x:n?t+1:t-1,y:n?e-1:e+1}}};t.exports=function(t,e,n,o){for(var a in i){var s=i[a],c=r.call(this,t,e,n,!0,s),u=r.call(this,t,e,n,!1,s),l=c.count+1;if(l+=u.count,l>=5)return void o.call(this,t,c.lastLoc,u.lastLoc)}}},"6a46":function(t,e,n){"use strict";t.exports={none:0,black:1,white:2,whitetips:3,blacktips:3,toString:function(t){switch(t){default:return"none";case this.black:return"black";case this.white:return"white";case this.whitetips:return"whitetips";case this.blacktips:return"blacktips"}}}},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Se,e.createPage=ke,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return h(t)||p(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function _(t){return"string"===typeof t}function g(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var I=/-(\w)/g,k=w(function(t){return t.replace(I,function(t,e){return e?e.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],$={},H={};function O(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?x(n):n}function x(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function A(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function j(t,e){Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&y(e[n])&&(t[n]=O(t[n],e[n]))})}function E(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&y(e[n])&&A(t[n],e[n])})}function P(t,e){"string"===typeof t&&g(e)?j(H[t]||(H[t]={}),e):g(t)&&j($,t)}function C(t,e){"string"===typeof t?g(e)?E(H[t],e):delete H[t]:g(t)&&E($,t)}function D(t){return function(e){return t(e)||e}}function T(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function F(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(D(i));else{var o=i(e);if(T(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){F(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function B(t,e){var n=[];Array.isArray($.returnValue)&&n.push.apply(n,l($.returnValue));var r=H[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,l(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function G(t){var e=Object.create(null);Object.keys($).forEach(function(t){"returnValue"!==t&&(e[t]=$[t].slice())});var n=H[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function L(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=G(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=F(a.invoke,n);return s.then(function(t){return e.apply(void 0,[N(a,t)].concat(i))})}return e.apply(void 0,[N(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var R={returnValue:function(t){return T(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},J=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,M=/^create|Manager$/,W=/^on/;function U(t){return M.test(t)}function V(t){return J.test(t)}function q(t){return W.test(t)}function z(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(U(t)||V(t)||q(t))}function X(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return y(n.success)||y(n.fail)||y(n.complete)?B(t,L.apply(void 0,[t,e,n].concat(i))):B(t,z(new Promise(function(r,o){L.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Q?.5:1:t<0?-n:n}var it={promiseInterceptor:R},ot=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:P,removeInterceptor:C}),at={},st=[],ct=[],ut=["success","fail","cancel","complete"];function lt(t,e,n){return function(r){return e(pt(t,r,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var o=!0===i?e:{};for(var a in y(n)&&(n=n(e,o)||{}),e)if(m(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,o)),s?_(s)?o[s]=e[a]:g(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ut.indexOf(a)?o[a]=lt(t,e[a],r):i||(o[a]=e[a]);return o}return y(e)&&(e=lt(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(at.returnValue)&&(e=at.returnValue(t,e)),ft(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var i=n;y(n)&&(i=n(e)),e=ft(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return V(t)?pt(t,a,i.returnValue,U(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(i),y(r)&&r(i)}}vt.forEach(function(t){dt[t]=yt(t)});var _t=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(_t(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(_t(),"$off",Array.prototype.slice.call(arguments))}function wt(){return gt(_t(),"$once",Array.prototype.slice.call(arguments))}function It(){return gt(_t(),"$emit",Array.prototype.slice.call(arguments))}var kt=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:It});function St(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var i=t.show,o=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function $t(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&St(e),e}function Ht(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var Ot=Object.freeze({requireNativePlugin:Ht,getSubNVueById:$t}),xt=Page,At=Component,jt=/:/g,Et=w(function(t){return k(t.replace(jt,"-"))});function Pt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[Et(n)].concat(i))}}}function Ct(t,e){var n=e[t];e[t]=n?function(){Pt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Pt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("onLoad",t),xt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("created",t),At(t)};var Dt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Tt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Ft(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Ft(t,e)}):void 0}function Nt(t,e,n){e.forEach(function(e){Ft(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Bt(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Gt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Lt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Rt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Jt=[String,Number,Boolean,Object,Array,null];function Mt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Wt(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:Vt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){g(t)&&t.props&&a.push(e({properties:Vt(t.props,!0)}))}),a}function Ut(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Vt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Mt(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var i=r["default"];y(i)&&(i=i()),r.type=Ut(e,r.type),n[e]={type:-1!==Jt.indexOf(r.type)?r.type:null,value:i,observer:Mt(e)}}else{var o=Ut(e,r);n[e]={type:-1!==Jt.indexOf(o)?o:null,observer:Mt(e)}}}),n}function qt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function zt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===i}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=zt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Xt(t)):"string"===typeof t&&m(s,t)?c.push(s[t]):c.push(t)}),c}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=qt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Qt;r=s?r.slice(1):r;var c=r.charAt(0)===Zt;r=c?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var a=i[r];if(!y(a))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(a.once)return;a.once=!0}o.push(a.apply(i,Yt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Tt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Nt(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=oe(n[i],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function le(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function fe(t){return re(t,{mocks:ie,initRefs:ue})}var pe=["onUniNViewMessage"];function he(t){var e=fe(t);return Nt(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=Bt(r.default,t),s=o(a,2),c=s[0],u=s[1],l={options:{multipleSlots:!0,addGlobalClass:!0},data:Rt(u,r.default.prototype),behaviors:Wt(u,ae),properties:Vt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Lt(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Gt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:le,__e:ee}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){l.methods[t]=function(e){return this.$vm[t](e)}}),n?l:[l,c]}function ye(t){return ve(t,{isPage:se,initRelation:ce})}function _e(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=_e(t);return Nt(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ce})}ge.push.apply(ge,Dt);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ie(t){var e=be(t);return Nt(e.methods,we),e}function ke(t){return Component(Ie(t))}function Se(t){return Component(_e(t))}st.forEach(function(t){at[t]=!1}),ct.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var $e={};Object.keys(ot).forEach(function(t){$e[t]=ot[t]}),Object.keys(kt).forEach(function(t){$e[t]=kt[t]}),Object.keys(Ot).forEach(function(t){$e[t]=X(t,Ot[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&($e[t]=X(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=$e,t.UniEmitter=kt),wx.createApp=de,wx.createPage=ke,wx.createComponent=Se;var He=$e,Oe=He;e.default=Oe}).call(this,n("c8ba"))},"7f78":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{navigationBarTitleText:"",enablePullDownRefresh:!1,disableScroll:!0,navigationBarBackgroundColor:"#f3f3f3",backgroundColorTop:"#f3f3f3",backgroundColorBottom:"#f3f3f3"},"pages/index2/index2":{navigationBarTitleText:" ",enablePullDownRefresh:!1,disableScroll:!0,navigationBarBackgroundColor:"#fdfdfd",backgroundColorTop:"#fdfdfd",backgroundColorBottom:"#fdfdfd"},"pages/play/play":{navigationBarTitleText:" ",enablePullDownRefresh:!1,disableScroll:!0,navigationBarBackgroundColor:"#f3f3f3",backgroundColorTop:"#f3f3f3",backgroundColorBottom:"#f3f3f3"},"pages/jieshao/jieshao":{},"pages/item_question/item_question":{},"pages/play_online/play_online":{navigationBarTitleText:" ",enablePullDownRefresh:!1,disableScroll:!0,navigationBarBackgroundColor:"#f3f3f3",backgroundColorTop:"#f3f3f3",backgroundColorBottom:"#f3f3f3"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"五子棋",navigationBarBackgroundColor:"#f3f3f3",backgroundColor:"#f3f3f3"}};e.default=r},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var f=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,y=10,_="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===k()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(_)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(_,e)}catch(n){t.setStorageSync(_,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var o in n)r[n[o]]=t[n[o]],i+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},I=function(){return parseInt((new Date).getTime()/1e3)},k=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},S=function(){var e="";return"wx"!==k()&&"qq"!==k()||(e=t.getAccountInfoSync().miniProgram.appId||""),e},$=function(){return"n"===k()?plus.runtime.version:""},H=function(){var t=k(),e="";return"n"===t&&(e=plus.runtime.channel),e},O=function(e){var n=k(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},x="First__Visit__Time",A="Last__Visit__Time",j=function(){var e=t.getStorageSync(x),n=0;return e?n=e:(n=I(),t.setStorageSync(x,n),t.removeStorageSync(A)),n},E=function(){var e=t.getStorageSync(A),n=0;return n=e||"",t.setStorageSync(A,I()),n},P="__page__residence__time",C=0,D=0,T=function(){return C=I(),"n"===k()&&t.setStorageSync(P,I()),C},F=function(){return D=I(),"n"===k()&&(C=t.getStorageSync(P)),D-C},N="Total__Visit__Count",B=function(){var e=t.getStorageSync(N),n=1;return e&&(n=e,n++),t.setStorageSync(N,n),n},G=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},L=0,R=0,J=function(){var t=(new Date).getTime();return L=t,R=0,t},M=function(){var t=(new Date).getTime();return R=t,t},W=function(t){var e=0;if(0!==L&&(e=R-L),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},U=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===k()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},V=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===k()?r.$mp&&r.$mp.page.is+o:r.$scope&&r.$scope.route+o||r.$mp&&r.$mp.page.route+o},q=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},z=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("7f78").default,X=n("bb6c").default||n("bb6c"),Y=t.getSystemInfoSync(),Z=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:k(),mpn:S(),ak:X.appid,usv:f,v:$(),ch:H(),cn:"",pn:"",ct:"",t:I(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return l(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){M();var t=W("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,M();var n=W();J();var r=V(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=V(this),e=U();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return J(),this.__licationShow=!1,void(this._lastPageRoute=t);M(),this._lastPageRoute=t;var n=W("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}J()}},{key:"_pageHide",value:function(){if(!this.__licationHide){M();var t=W("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=I(),this.statData.sc=O(t.scene),this.statData.fvts=j(),this.statData.lvts=E(),this.statData.tvc=B(),"n"===k()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:I(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:I(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:I(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=I(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===k()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===k()&&t.setStorageSync("__UNI__STAT__DATA",a),!(F()<y)||n){var s=this._reportingRequestData;"n"===k()&&(s=t.getStorageSync("__UNI__STAT__DATA")),T();var c=[],u=[],l=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?c.push(n):3===t?l.push(n):u.push(n)})};for(var h in s)p(h);c.push.apply(c,u.concat(l));var d={usv:f,t:i,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===k()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==k()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(G(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){z(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return c(this,n),e=r(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),l(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),l(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,T(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,q(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,q(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:I(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var _=Object.getPrototypeOf,g=_&&_(_(P([])));g&&g!==r&&i.call(g,a)&&(y=g);var m=S.prototype=I.prototype=Object.create(y);k.prototype=m.constructor=S,S.constructor=k,S[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},$(H.prototype),H.prototype[s]=function(){return this},l.AsyncIterator=H,l.async=function(t,e,n,r){var i=new H(b(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},$(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var i=e&&e.prototype instanceof I?e:I,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=O(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function I(){}function k(){}function S(){}function $(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function H(t){function e(n,r,o,a){var s=w(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function O(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return C()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=w(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=w(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},b39a:function(t,e,n){"use strict";(function(t){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("6a46"),s=(n("6831"),function(){function e(n,i){r(this,e);var o=this,s=[],c=[];this.chessBoardSize=n;for(var u=[],l=[],f=[],p=0,h=0;h<n;h++){var d=[],v=[];u[h]=[];for(var y=0;y<n;y++)u[h][y]=[],d.push({stoneType:a.none,pos:null}),v.push({stoneType:a.none,num:null});s.push(d),c.push(v)}this.wins=u,this.chessBoard=s,this.chessBoardtips=c;for(var _=0;_<15;_++)for(var g=0;g<11;g++){for(var m=0;m<5;m++)u[_][g+m][p]=!0;p++}for(_=0;_<15;_++)for(g=0;g<11;g++){for(m=0;m<5;m++)u[g+m][_][p]=!0;p++}for(_=0;_<11;_++)for(g=0;g<11;g++){for(m=0;m<5;m++)u[_+m][g+m][p]=!0;p++}for(_=0;_<11;_++)for(g=14;g>3;g--){for(m=0;m<5;m++)u[_+m][g-m][p]=!0;p++}this.count=p;for(_=0;_<p;_++)l[_]=0,f[_]=0;this.blackWin=l,this.whiteWin=f,wx.getSystemInfo({success:function(e){o.chessboardSizePX=e.windowWidth*i,console.log(t("%c棋盘大小:%c"+o.chessboardSizePX+"%cpx","color:red;","color:blue;","color:black;"," at FiveStone\\FiveStone.js:106")),o.cellSizePX=o.chessboardSizePX/n,console.log(t("%c单元格大小:%c"+o.cellSizePX+"%cpx","color:red;","color:blue;","color:black;"," at FiveStone\\FiveStone.js:114")),o.halfCellSizePX=.5*o.cellSizePX}}),this.stone=a.black,this.onStepStoneCallbacks=[],this._canStep=!0,this.history=[],this.deepthinksteps_total=0,this.deepthinksteps_deep_total=0,this.deepthinksteps_answer=[],this.chessboard_total_line=""}return o(e,[{key:"changehistory",value:function(e){var n=0,r=new Array(70);this.chessboard_total_line=e,console.log(t(e," at FiveStone\\FiveStone.js:146"));for(var i=0;i<e.length;i++)"A"!=e[i]&&"B"!=e[i]&&"C"!=e[i]&&"D"!=e[i]&&"E"!=e[i]&&"F"!=e[i]&&"G"!=e[i]&&"H"!=e[i]&&"I"!=e[i]&&"J"!=e[i]&&"K"!=e[i]&&"L"!=e[i]&&"M"!=e[i]&&"N"!=e[i]&&"O"!=e[i]||(n+=1,r[n-1]=""),r[n-1]+=e.substring(i,i+1);this.history=[],this.resetchessBoard();for(var o=0;o<this.count;o++)this.blackWin[o]=0,this.whiteWin[o]=0;this.stone=a.black;for(var s=0;s<n;s++){var c=this.downchangetoabc(r[s].substring(0,1)),u=15-parseInt(r[s].substring(1)),l=s%2==0?a.black:a.white;this.chessBoard[c][u].stoneType=l,this.stone=s%2==0?a.white:a.black;for(var f=0;f<this.count;f++)this.wins[c][u][f]&&this.stone==a.black&&(this.whiteWin[f]++,this.blackWin[f]+=6,5==this.whiteWin[f]&&(console.log(t("白胜"," at FiveStone\\FiveStone.js:192")),this._winCallback.call())),this.wins[c][u][f]&&this.stone==a.white&&(this.blackWin[f]++,this.whiteWin[f]+=6,5==this.blackWin[f]&&(console.log(t("黑胜"," at FiveStone\\FiveStone.js:197")),this._winCallback.call()));this.history.push({x:c,y:u,stoneType:l})}}},{key:"resetchessBoard",value:function(){for(var t=[],e=0;e<this.chessBoardSize;e++){for(var n=[],r=0;r<this.chessBoardSize;r++)n.push({stoneType:a.none,pos:null});t.push(n)}this.chessBoard=t}},{key:"resetchessBoardtips",value:function(){for(var t=[],e=0;e<this.chessBoardSize;e++){for(var n=[],r=0;r<this.chessBoardSize;r++)n.push({stoneType:a.none,num:null});t.push(n)}this.chessBoardtips=t}},{key:"getStepLocation",value:function(t){var e=t.currentTarget,n={x:e.offsetLeft,y:e.offsetTop},r=t.touches[0],i={x:r.pageX-n.x,y:r.pageY-n.y},o={x:Math.ceil((i.x-this.halfCellSizePX)/this.cellSizePX),y:Math.ceil((i.y-this.halfCellSizePX)/this.cellSizePX)};return o.x<0||o.x>=this.chessBoardSize||o.y<0||o.y>=this.chessBoardSize?null:o}},{key:"getStepPosition",value:function(e){var n=e.currentTarget,r=this.getStepLocation(e);if(null==r)return null;console.log(t(r.x,r.y," at FiveStone\\FiveStone.js:275"));var i={x:0,y:0};return i.x=r.x*this.cellSizePX+n.offsetLeft-this.halfCellSizePX-1,i.y=r.y*this.cellSizePX+n.offsetTop-this.halfCellSizePX-1,this.chessBoard[r.x][r.y].pos=i,i}},{key:"step",value:function(e,n){if(this.canStepAt(e,n)){this.chessBoard[e][n].stoneType=this.nowStone();var r=this.nowStone();this.stone=r==a.black?a.white:a.black,this.onStepStone(r,e,n),this.history instanceof Array||(this.history=[]),this.history.push({x:e,y:n,stoneType:r});for(var i=0;i<this.count;i++)this.wins[e][n][i]&&this.stone==a.black&&(this.whiteWin[i]++,this.blackWin[i]+=6,5==this.whiteWin[i]&&(console.log(t("白胜"," at FiveStone\\FiveStone.js:316")),this._winCallback.call())),this.wins[e][n][i]&&this.stone==a.white&&(this.blackWin[i]++,this.whiteWin[i]+=6,5==this.blackWin[i]&&(console.log(t("黑胜"," at FiveStone\\FiveStone.js:321")),this._winCallback.call()));var o="";if(this.history.length>0)for(var s=0;s<this.history.length;s++)o+=this.upchangetoabc(this.history[s].x),o+=(15-this.history[s].y).toString();return this.chessboard_total_line=o,console.log(t("chessboard_total_line",this.chessboard_total_line," at FiveStone\\FiveStone.js:333")),!0}return!1}},{key:"undo",value:function(){if(this.history instanceof Array&&!(this.history.length<=0)){for(var t=this.history.length-1,e=this.history[t],n=0;n<this.count;n++)this.wins[e.x][e.y][n]&&this.stone==a.black&&(this.whiteWin[n]--,this.blackWin[n]-=6),this.wins[e.x][e.y][n]&&this.stone==a.white&&(this.blackWin[n]--,this.whiteWin[n]-=6);this.stone=e.stoneType,this.history.splice(t,1),this.chessBoard[e.x][e.y].stoneType=a.none;var r="";if(this.history.length>0)for(var i=0;i<this.history.length;i++)r+=this.upchangetoabc(this.history[i].x),r+=(15-this.history[i].y).toString();this.chessboard_total_line=r,this.allowStep()}}},{key:"canStepAt",value:function(t,e){return!(t<0||t>=this.chessBoardSize||e<0||e>=this.chessBoardSize||this.chessBoard[t][e].stoneType!=a.none)&&this._canStep}},{key:"onStepStone",value:function(t,e,n){if(this.onStepStoneCallbacks instanceof Array)for(var r in this.onStepStoneCallbacks){var i=this.onStepStoneCallbacks[r];"function"===typeof i&&i.call(this,t,e,n)}}},{key:"addOnStepStoneCallback",value:function(t){return this.onStepStoneCallbacks instanceof Array||(this.onStepStoneCallbacks=[]),"function"==typeof t?this.onStepStoneCallbacks.push(t)-1:0}},{key:"removeOnStepStoneCallback",value:function(t){this.onStepStoneCallbacks instanceof Array&&this.onStepStoneCallbacks.length>t&&this.onStepStoneCallbacks.splice(t,1)}},{key:"restart",value:function(){for(var t in this.stone=a.black,this.chessBoard)for(var e in this.chessBoard[t])this.chessBoard[t][e].stoneType=a.none;for(var n=0;n<this.count;n++)this.blackWin[n]=0,this.whiteWin[n]=0;this.chessboard_total_line="",this.history=[],this.allowStep()}},{key:"preventStep",value:function(){this._canStep=!1}},{key:"allowStep",value:function(){this._canStep=!0}},{key:"nowStone",value:function(){return this.stone}},{key:"canStep",value:function(){return this._canStep}},{key:"setWinCallback",value:function(t){"function"==typeof t&&(this._winCallback=t)}},{key:"upchangetoabc",value:function(t){var e=t.toString();switch(e){case"0":return"A";case"1":return"B";case"2":return"C";case"3":return"D";case"4":return"E";case"5":return"F";case"6":return"G";case"7":return"H";case"8":return"I";case"9":return"J";case"10":return"K";case"11":return"L";case"12":return"M";case"13":return"N";case"14":return"O";case"A":return"0";case"B":return"1";case"D":return"2";case"C":return"3";case"E":return"4";case"F":return"5";case"G":return"6";case"H":return"7";case"I":return"8";case"J":return"9";case"K":return"10";case"L":return"11";case"M":return"12";case"N":return"13";case"O":return"14";default:break}}},{key:"downchangetoabc",value:function(t){var e=t.toString();switch(e){case"A":return"0";case"B":return"1";case"C":return"2";case"D":return"3";case"E":return"4";case"F":return"5";case"G":return"6";case"H":return"7";case"I":return"8";case"J":return"9";case"K":return"10";case"L":return"11";case"M":return"12";case"N":return"13";case"O":return"14";case"0":return"A";case"1":return"B";case"2":return"D";case"3":return"C";case"4":return"E";case"5":return"F";case"6":return"G";case"7":return"H";case"8":return"I";case"9":return"J";case"10":return"K";case"11":return"L";case"12":return"M";case"13":return"N";case"14":return"O";default:break}}},{key:"computerAI",value:function(t){for(var e=[],n=[],r=0,i=0,o=0,s=0;s<15;s++){e[s]=[],n[s]=[];for(var c=0;c<15;c++)e[s][c]=0,n[s][c]=0}var u=[];t==a.black&&(u=[200,400,2e3,1e5,220,420,2100,2e5]),t==a.white&&(u=[220,420,2100,2e5,200,400,2e3,1e5]);for(s=0;s<15;s++)for(c=0;c<15;c++)if(this.chessBoard[s][c].stoneType==a.none){for(var l=0;l<this.count;l++)this.wins[s][c][l]&&(1==this.whiteWin[l]?e[s][c]+=u[0]:2==this.whiteWin[l]?e[s][c]+=u[1]:3==this.whiteWin[l]?e[s][c]+=u[2]:4==this.whiteWin[l]&&(e[s][c]+=u[3]),1==this.blackWin[l]?n[s][c]+=u[4]:2==this.blackWin[l]?n[s][c]+=u[5]:3==this.blackWin[l]?n[s][c]+=u[6]:4==this.blackWin[l]&&(n[s][c]+=u[7]));e[s][c]>r?(r=e[s][c],i=s,o=c):e[s][c]==r&&n[s][c]>n[i][o]&&(i=s,o=c),n[s][c]>r?(r=n[s][c],i=s,o=c):n[s][c]==r&&e[s][c]>e[i][o]&&(i=s,o=c)}var f={x:i,y:o};return f}},{key:"computerAItreesearch",value:function(t,e,n,r){for(var i=[],o=[],s=[],c=0;c<15;c++){o[c]=[],s[c]=[];for(var u=0;u<15;u++)o[c][u]=0,s[c][u]=0}var l=[];t==a.black&&(l=[20,400,2e3,1e5,21,402,2005,2e5]),t==a.white&&(l=[21,402,2005,2e5,20,400,2e3,1e5]);for(c=0;c<15;c++)for(u=0;u<15;u++)if(r[c][u]==a.none)for(var f=0;f<this.count;f++)if(this.wins[c][u][f]){if(4==this.whiteWin[f]?o[c][u]+=l[3]:3==this.whiteWin[f]?o[c][u]+=l[2]:2==this.whiteWin[f]?o[c][u]+=l[1]:1==this.whiteWin[f]&&(o[c][u]+=l[0]),4==this.blackWin[f]?s[c][u]+=l[7]:3==this.blackWin[f]?s[c][u]+=l[6]:2==this.blackWin[f]?s[c][u]+=l[5]:1==this.blackWin[f]&&(s[c][u]+=l[4]),t==a.black&&(e[f]>1&&e[f]<6||n[f]>3&&n[f]<6)){if(4==e[f]||5==e[f]){i=[];var p=this.moniStepForWins(t,e,n,c,u,r);return i.push({stonetype:t,x:c,y:u,blackScore:s[c][u],winflag:1,whiteWin:p["whiteWin"],blackWin:p["blackWin"],chessBoard:p["chessBoardcopy"]}),i}if(4==n[f]){i=[];p=this.moniStepForWins(t,e,n,c,u,r);return i.push({stonetype:t,x:c,y:u,blackScore:s[c][u],winflag:0,whiteWin:p["whiteWin"],blackWin:p["blackWin"],chessBoard:p["chessBoardcopy"]}),i}if(e[f]>1&&e[f]<6&&e[f-1]>1&&e[f-1]<6&&f<331||e[f]>1&&e[f]<6&&e[f-12]>1&&e[f-12]<6&&f>330||e[f]>2){p=this.moniStepForWins(t,e,n,c,u,r);i.length<1?i.push({stonetype:t,x:c,y:u,blackScore:s[c][u],winflag:0,whiteWin:p["whiteWin"],blackWin:p["blackWin"],chessBoard:p["chessBoardcopy"]}):i[i.length-1]["x"]!=c||i[i.length-1]["y"]!=u?i.push({stonetype:t,x:c,y:u,blackScore:s[c][u],winflag:0,whiteWin:p["whiteWin"],blackWin:p["blackWin"],chessBoard:p["chessBoardcopy"]}):i[i.length-1]["blackScore"]!=s[c][u]&&(i[i.length-1]["blackScore"]=s[c][u])}}if(t==a.white&&(e[f]>2&&e[f]<6||n[f]>3&&n[f]<6)){if(4==n[f]){i=[];p=this.moniStepForWins(t,e,n,c,u,r);return i.push({stonetype:t,x:c,y:u,blackScore:s[c][u],winflag:2,whiteWin:p["whiteWin"],blackWin:p["blackWin"],chessBoard:p["chessBoardcopy"]}),i}if(4==e[f]||5==e[f]){i=[];p=this.moniStepForWins(t,e,n,c,u,r);return i.push({stonetype:t,x:c,y:u,blackScore:s[c][u],winflag:0,whiteWin:p["whiteWin"],blackWin:p["blackWin"],chessBoard:p["chessBoardcopy"]}),i}if(e[f]>2&&e[f-1]>2&&3!=e[f-2]&&e[f]<6&&e[f-1]<6&&f<331||e[f]>2&&e[f+1]>2&&3!=e[f+2]&&e[f]<6&&e[f+1]<6&&f<331||e[f]>2&&e[f+12]>2&&3!=e[f+24]&&e[f]<6&&e[f+12]<6&&f>330||e[f]>2&&e[f-12]>2&&3!=e[f-24]&&e[f]<6&&e[f-12]<6&&f>330||e[f]>3){p=this.moniStepForWins(t,e,n,c,u,r);i.length<1?i.push({stonetype:t,x:c,y:u,blackScore:s[c][u],winflag:0,whiteWin:p["whiteWin"],blackWin:p["blackWin"],chessBoard:p["chessBoardcopy"]}):i[i.length-1]["x"]!=c||i[i.length-1]["y"]!=u?i.push({stonetype:t,x:c,y:u,blackScore:s[c][u],winflag:0,whiteWin:p["whiteWin"],blackWin:p["blackWin"],chessBoard:p["chessBoardcopy"]}):i[i.length-1]["blackScore"]!=s[c][u]&&(i[i.length-1]["blackScore"]=s[c][u])}}}return i.sort(function(t,e){return e.blackScore-t.blackScore}),i}},{key:"moniStepForWins",value:function(t,e,n,r,i,o){var s=JSON.parse(JSON.stringify(n)),c=JSON.parse(JSON.stringify(e)),u=JSON.parse(JSON.stringify(o));u[r][i]=t;for(var l=0;l<this.count;l++)this.wins[r][i][l]&&t==a.white&&(s[l]=s[l]+1,c[l]=c[l]+6),this.wins[r][i][l]&&t==a.black&&(s[l]=s[l]+6,c[l]=c[l]+1);var f={blackWin:c,whiteWin:s,chessBoardcopy:u};return f}},{key:"shuansha",value:function(e,n,r,i,o,s){this.deepthinksteps_total--,this.deepthinksteps_deep_total--;var c=s-1;if(12==c&&(this.deepthinksteps_deep_total=600),11==c&&(this.deepthinksteps_deep_total=200),10==c&&(this.deepthinksteps_deep_total=200),9==c&&(this.deepthinksteps_deep_total=100),!(this.deepthinksteps_total<0||c<0||this.deepthinksteps_deep_total<0)){var u=this.computerAItreesearch(e,n,r,o);if(e!=a.white||10!=c){if(console.log(t(u," at FiveStone\\FiveStone.js:832")),0==u.length&&e==a.black)return console.log(t("黑棋没有划三了",i," at FiveStone\\FiveStone.js:834")),10;if(0==u.length&&e==a.white)return console.log(t("白棋没有要堵了",i," at FiveStone\\FiveStone.js:838")),20;var l=0;for(d=0;d<u.length;d++){y=u[d];var f=i+"|"+String(y.x)+","+String(y.y)+"-"+e;if(1==u[d].winflag)return console.log(t("黑胜--deepthinksteps_total",this.deepthinksteps_total,s,this.deepthinksteps_deep_total,"级",f," at FiveStone\\FiveStone.js:850")),this.deepthinksteps_deep_total+=120,this.deepthinksteps_total+=60,this.deepthinksteps_answer.push(f),1;if(2==u[d].winflag)return console.log(t("白胜--deepthinksteps_total",this.deepthinksteps_total,s,this.deepthinksteps_deep_total,"级",f," at FiveStone\\FiveStone.js:857")),2;console.log(t("继续--deepthinksteps_total",this.deepthinksteps_total,s,this.deepthinksteps_deep_total,"级",f," at FiveStone\\FiveStone.js:861"));var p=e==a.black?a.white:a.black,h=this.shuansha(p,y.blackWin,y.whiteWin,f,y.chessBoard,c);if(2==h)return;if(20!=h)if(1!=h||e!=a.white){if(1==h&&e==a.black)return 1;if(10==h)return}else l++}if(u.length==l&&l>0)return 1;u.length!=l&&l>0&&(this.deepthinksteps_answer=[])}else for(var d=0;d<u.length;d++){var v=null,y=u[d];v=v+"|"+String(y.x)+","+String(y.y)+"-"+e,this.deepthinksteps_answer.push(v)}}}},{key:"deepthinkshuansha",value:function(e,n,r,i){return this.deepthinksteps_answer=[],console.log(t("begin"," at FiveStone\\FiveStone.js:885")),this.deepthinksteps_total=6e3,this.deepthinksteps_deep_total=600,this.shuansha(e,n,r,"",i,11),console.log(t(this.deepthinksteps_answer," at FiveStone\\FiveStone.js:889")),console.log(t("over"," at FiveStone\\FiveStone.js:890")),this.deepthinksteps_answer}}]),e}());e.default=s}).call(this,n("0de9")["default"])},bb6c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__DE34DEA"};e.default=r},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c577:function(t,e,n){},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},e441:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("66fd")),i=o(n("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}r.default.use(i.default);var a=new i.default.Store({state:{userInfo:{nickName:"",avatarUrl:"",hasLogin:!1,loginProvider:"weixin",openid:null,userid:0,userid_name:"",phonenum:null,realname:"",vip_flag:!1,vip_last_time:null,tips_last:999,tips_last_time:null},luyouData:[]},mutations:{login:function(t,e){t.userInfo.loginProvider="weixin",t.userInfo.hasLogin=!0,t.userInfo.nickName=e.nickName,t.userInfo.avatarUrl=e.avatarUrl},logout:function(t){t.userInfo={nickName:"",avatarUrl:"",hasLogin:!1,loginProvider:"",openid:null,userid:0,userid_name:"",phonenum:null,realname:"",jifen_month:0,jifen_total:0,ticket:0}},setphonenum:function(t,e){t.userInfo.phonenum=e},setopenid:function(t,e){t.userInfo.openid=e},setuserid:function(t,e){t.userInfo.userid=Number(e),t.userInfo.userid_name="U"+Number(e)},setjifen_total:function(t,e){t.userInfo.jifen_total=Number(e)},setdbuserifo:function(t,e){t.userInfo.userid=Number(e.user_id),t.userInfo.userid_name="U"+Number(e.user_id),t.userInfo.jifen_total=Number(e.jifen_total),t.userInfo.jifen_month=Number(e.jifen_month),t.userInfo.ticket=Number(e.ticket)},cuttipslast:function(t){t.userInfo.tips_last=t.userInfo.tips_last-1},settipslast:function(e,n){var r=n.split(","),i=r[1],o=(new Date).getDate();console.log(t("lastdate:",i,"nowdate",o," at store\\index.js:94")),console.log(t("data[0]:",r[0],"data[1]",r[1]," at store\\index.js:95")),o==i&&(e.userInfo.tips_last=r[0],e.userInfo.tips_last_time=o)},setluyouData:function(t,e){t.luyouData=e}},actions:{}}),s=a;e.default=s}).call(this,n("0de9")["default"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1439:function(e,n,t){},"46ee":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return u})},5659:function(e,n,t){"use strict";(function(e,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(t("a34a")),o=t("2f62");function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){s(e,n,t[n])})}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n,t,i,u,o,a){try{var r=e[o](a),s=r.value}catch(l){return void t(l)}r.done?n(s):Promise.resolve(s).then(i,u)}function c(e){return function(){var n=this,t=arguments;return new Promise(function(i,u){var o=e.apply(n,t);function a(e){l(o,i,u,a,r,"next",e)}function r(e){l(o,i,u,a,r,"throw",e)}a(void 0)})}}var d={data:function(){return{fileSrc:"",savedFilePath:"",ifallowgotohot:!1,windowHeight:null,finish_task:0,first_flag:!1,mulu_flag:null,shuijishu:"0"}},onLoad:function(){var n=c(u.default.mark(function n(t){var o;return u.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return this.mulu_flag=t.mulu_flag,this.shuijishu=t.shuijishu,console.log(e("shuijishu",this.shuijishu," at pages\\index\\index.vue:52")),o=this,o.windowHeight=i.getSystemInfoSync().windowHeight,n.next=7,i.getStorage({key:"tips_last_time",success:function(n){console.log(e("find_tips",n.data," at pages\\index\\index.vue:58")),o.settipslast(n.data)},fail:function(){console.log(e("havent_find_tips"," at pages\\index\\index.vue:62"))}});case 7:case"end":return n.stop()}},n,this)}));function t(e){return n.apply(this,arguments)}return t}(),onShareAppMessage:function(n){return"button"===n.from&&console.log(e(n.target," at pages\\index\\index.vue:73")),{title:"五子棋打谱",path:"/pages/index/index"}},computed:r({},(0,o.mapState)(["userInfo"])),methods:r({},(0,o.mapMutations)(["login","logout","setopenid","settipslast","setphonenum","setdbuserifo"]),{wxGetUserInfo:function(n){var t=this;console.log(e(n.detail.userInfo," at pages\\index\\index.vue:91")),n.detail.userInfo?i.login({provider:"weixin",success:function(u){console.log(e("code:",u.code," at pages\\index\\index.vue:97")),t.login(n.detail.userInfo,u.code),t.upload_oauthData(n.detail.userInfo,u.code),null!=t.shuijishu?setTimeout(function(){i.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu="+t.shuijishu})},100):setTimeout(function(){i.reLaunch({url:"../index2/index2"})},100)}}):(console.log(e(333,"执行到这里，说明拒绝了授权"," at pages\\index\\index.vue:119")),i.showToast({title:"为了您更好的体验,请先同意授权",icon:"none",duration:2e3}))},gotoindex2:function(){var e=this;null!=e.shuijishu?setTimeout(function(){i.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu="+e.shuijishu})},100):setTimeout(function(){i.reLaunch({url:"../index2/index2"})},100)},upload_oauthData:function(n,t){var u=this;i.request({url:"https://kaikaiomg.applinzi.com/uni_app_upload.php",method:"POST",data:{form:"oauthData",userid:n.userid,nickName:n.nickName,avatarUrl:n.avatarUrl,city:n.city,country:n.country,gender:n.gender,language:n.language,province:n.province,code:t},header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){200!==n.statusCode?console.log(e("请求失败:",n," at pages\\index\\index.vue:170")):(console.log(e("success_uodate_oauthData:",n.data[0]," at pages\\index\\index.vue:172")),u.setopenid(n.data[0].openid),u.setdbuserifo(n.data[0]))}})}})};n.default=d}).call(this,t("0de9")["default"],t("6e42")["default"])},"5d9a":function(e,n,t){"use strict";var i=t("1439"),u=t.n(i);u.a},c3c8:function(e,n,t){"use strict";t.r(n);var i=t("46ee"),u=t("db75");for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);t("5d9a");var a=t("2877"),r=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},c7d8:function(e,n,t){"use strict";(function(e){t("c577"),t("921b");i(t("66fd"));var n=i(t("c3c8"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},db75:function(e,n,t){"use strict";t.r(n);var i=t("5659"),u=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);n["default"]=u.a}},[["c7d8","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/index2/index2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index2/index2.js';

define('pages/index2/index2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index2/index2"],{2007:function(e,n,t){},5432:function(e,n,t){"use strict";(function(e){t("c577"),t("921b");r(t("66fd"));var n=r(t("99b6"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"6e69":function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=o(t("a34a")),a=t("2f62");function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,u,a,o){try{var i=e[a](o),l=i.value}catch(c){return void t(c)}i.done?n(l):Promise.resolve(l).then(r,u)}function l(e){return function(){var n=this,t=arguments;return new Promise(function(r,u){var a=e.apply(n,t);function o(e){i(a,r,u,o,l,"next",e)}function l(e){i(a,r,u,o,l,"throw",e)}o(void 0)})}}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){f(e,n,t[n])})}return e}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s={data:function(){return{mulu_flag:"zml",windowHeight:null}},onShareAppMessage:function(n){return"button"===n.from&&console.log(e(n.target," at pages\\index2\\index2.vue:79")),{title:"五子棋打谱",path:"/pages/index2/index2"}},computed:c({},(0,a.mapState)(["userInfo"])),onLoad:function(){var n=l(u.default.mark(function n(t){return u.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:this.windowHeight=r.getSystemInfoSync().windowHeight,console.log(e("onLoad"," at pages\\index2\\index2.vue:92"));case 2:case"end":return n.stop()}},n,this)}));function t(e){return n.apply(this,arguments)}return t}(),methods:{changemulu:function(e){var n=this;if("zml"==e||"dplx"==e||"dpcs"==e||"ljms"==e||"bdms"==e)this.mulu_flag=e;else if("bdms_rjmsdy"==e||"ljms_sjpd"==e)r.showModal({title:"sorry",content:"该模式测试中。。。",showCancel:!1});else if("ljms_hyyz"==e){var t=Math.floor(9e4*Math.random())+1e5,u=(new Date).valueOf()+String(t);n.upload_to_server({form:"new_wzq_dz_start",userid:n.userInfo.userid,nickName:n.userInfo.nickName,phonenum:n.userInfo.phonenum,avatarUrl:n.userInfo.avatarUrl,openid:n.userInfo.openid,card_id:n.card_id,shuijishu:u}),r.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=false&player=1&shuijishu="+u})}else r.navigateTo({url:"../play/play?mulu_flag="+e})},gotoindex1:function(){r.reLaunch({url:"../index/index"})},gototiwen:function(){r.navigateTo({url:"../item_question/item_question"})}}};n.default=s}).call(this,t("0de9")["default"],t("6e42")["default"])},"99b6":function(e,n,t){"use strict";t.r(n);var r=t("dcb4"),u=t("a8a9");for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);t("b0ad");var o=t("2877"),i=Object(o["a"])(u["default"],r["a"],r["b"],!1,null,null,null);n["default"]=i.exports},a8a9:function(e,n,t){"use strict";t.r(n);var r=t("6e69"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);n["default"]=u.a},b0ad:function(e,n,t){"use strict";var r=t("2007"),u=t.n(r);u.a},dcb4:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return u})}},[["5432","common/runtime","common/vendor"]]]);
});
require('pages/index2/index2.js');
__wxRoute = 'pages/play/play';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/play/play.js';

define('pages/play/play.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/play/play"],{"0276":function(t,e,i){"use strict";(function(t){i("c577"),i("921b");s(i("66fd"));var e=s(i("1245"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},1245:function(t,e,i){"use strict";i.r(e);var s=i("ce4e"),o=i("8f4a");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("e322");var a=i("2877"),l=Object(a["a"])(o["default"],s["a"],s["b"],!1,null,null,null);e["default"]=l.exports},"5d2b":function(t,e,i){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(i("a34a")),n=i("2f62"),a=u(i("b39a")),l=i("2144");function u(t){return t&&t.__esModule?t:{default:t}}function r(t,e,i,s,o,n,a){try{var l=t[n](a),u=l.value}catch(r){return void i(r)}l.done?e(u):Promise.resolve(u).then(s,o)}function p(t){return function(){var e=this,i=arguments;return new Promise(function(s,o){var n=t.apply(e,i);function a(t){r(n,s,o,a,l,"next",t)}function l(t){r(n,s,o,a,l,"throw",t)}a(void 0)})}}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},s=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),s.forEach(function(e){c(t,e,i[e])})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var g={data:function(){return{loacal_avatarUrl_loc:"../../static/nobody.png",wuziqitips:[],mistakes_collection_list:[],mistakes_collection_newlist:[],fiveStone:null,winLoc:{whowin:0,whowin_title:"",start:null,end:null,width:null,angle:null},loc:null,data_flag:null,tips_group:{cuoti_num:0,cuoti_total_num:0,mulu_flag:null,show_tips_flag:!0,show_black_tips_flag:!0,get_tips_flag:!0,steps_limit:600,table_name:"",show_wrong_choice_flag:!1,show_right_choice_flag:!1,show_tips_last_flag:!1,show_dftx_flag:!1,double_undo_flag:!1,show_qiuzhu_flag:!1,show_restart_flag:!0,show_undo_flag:!0,show_find_duishou_flag:!1}}},computed:_({},(0,n.mapState)(["userInfo"])),onLoad:function(){var e=p(o.default.mark(function e(i){var n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this,console.log(t("初始化棋盘"," at pages\\play\\play.vue:161")),n.fiveStone=new a.default(15,.98),n.fiveStone.setWinCallback(n.winCallback),n.loc=null,n.tips_group.mulu_flag=i.mulu_flag,console.log(t(n.tips_group.mulu_flag," at pages\\play\\play.vue:166")),e.next=9,this.get_storage_data("mistakes_collection","mistakes_collection_list");case 9:n.mistakes_collection_newlist=n.mistakes_collection_list.concat(),console.log(t("mistakes_collection_list_new",n.mistakes_collection_list_new," at pages\\play\\play.vue:169")),e.t0=i.mulu_flag,e.next="dplx_hykj"===e.t0?14:"dplx_pykj"===e.t0?20:"dplx_kjwb"===e.t0?26:"dpcs_hykj"===e.t0?31:"dpcs_pykj"===e.t0?37:"dpcs_kjwb"===e.t0?43:"dpcs_wdct"===e.t0?49:"bdms_srdy"===e.t0?61:"bdms_rjmspt"===e.t0?65:"bdms_rjmsdy"===e.t0?72:"ljms_hyyz"===e.t0?79:85;break;case 14:return n.tips_group.show_tips_last_flag=!0,n.tips_group.show_qiuzhu_flag=!0,n.tips_group.table_name="wzq_hy_data",n.fiveStone.changehistory("H8H9I9"),s.setNavigationBarTitle({title:"打谱练习-花月"}),e.abrupt("break",86);case 20:return n.tips_group.show_tips_last_flag=!0,n.tips_group.show_qiuzhu_flag=!0,n.tips_group.table_name="wzq_py_data",n.fiveStone.changehistory("H8I9I7"),s.setNavigationBarTitle({title:"打谱练习-蒲月"}),e.abrupt("break",86);case 26:return n.tips_group.show_tips_last_flag=!0,n.tips_group.table_name="wzq_kjwb_data",n.tips_group.steps_limit=11,s.setNavigationBarTitle({title:"打谱练习-开局五步"}),e.abrupt("break",86);case 31:return n.tips_group.show_tips_last_flag=!0,n.tips_group.show_black_tips_flag=!1,n.tips_group.table_name="wzq_hy_data",n.fiveStone.changehistory("H8H9I9"),s.setNavigationBarTitle({title:"打谱测试-花月"}),e.abrupt("break",86);case 37:return n.tips_group.show_tips_last_flag=!0,n.tips_group.show_black_tips_flag=!1,n.tips_group.table_name="wzq_py_data",n.fiveStone.changehistory("H8I9I7"),s.setNavigationBarTitle({title:"打谱测试-蒲月"}),e.abrupt("break",86);case 43:return n.tips_group.show_tips_last_flag=!0,n.tips_group.show_black_tips_flag=!1,n.tips_group.table_name="wzq_kjwb_data",n.tips_group.steps_limit=11,s.setNavigationBarTitle({title:"打谱测试-开局五步"}),e.abrupt("break",86);case 49:return n.tips_group.show_tips_last_flag=!0,n.tips_group.show_black_tips_flag=!0,n.tips_group.get_tips_flag=!1,n.tips_group.cuoti_total_num=n.mistakes_collection_list.length,n.winLoc.whowin=1,n.tips_group.cuoti_num=0,n.tips_group.show_restart_flag=!1,n.tips_group.show_undo_flag=!1,n.winLoc.whowin_title=n.tips_group.cuoti_num+1+"/"+n.tips_group.cuoti_total_num,n.fiveStone.changehistory(n.mistakes_collection_list[0].total_line),s.setNavigationBarTitle({title:"打谱测试-我的错题"}),e.abrupt("break",86);case 61:return n.tips_group.get_tips_flag=!1,n.tips_group.show_tips_flag=!1,s.setNavigationBarTitle({title:"双人本地对弈"}),e.abrupt("break",86);case 65:return n.tips_group.show_dftx_flag=1,n.tips_group.double_undo_flag=!0,n.tips_group.get_tips_flag=!1,n.tips_group.show_tips_flag=!1,n.fiveStone.changehistory("H8"),s.setNavigationBarTitle({title:"人机模式-普通"}),e.abrupt("break",86);case 72:return n.tips_group.show_dftx_flag=2,n.tips_group.double_undo_flag=!0,n.tips_group.get_tips_flag=!1,n.tips_group.show_tips_flag=!1,n.fiveStone.changehistory("H8"),s.setNavigationBarTitle({title:"人机模式-地狱"}),e.abrupt("break",86);case 79:return n.tips_group.show_dftx_flag=3,n.tips_group.get_tips_flag=!1,n.tips_group.show_tips_flag=!1,n.tips_group.show_find_duishou_flag=!0,s.setNavigationBarTitle({title:"巅峰对决"}),e.abrupt("break",86);case 85:return e.abrupt("break",86);case 86:n.tips_group.get_tips_flag&&n.get_tips(),n.$forceUpdate();case 88:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),methods:_({},(0,n.mapMutations)(["settipslast","cuttipslast"]),{handleTip:function(t){this.fiveStone.canStep()&&(this.fiveStone.getStepPosition(t),this.loc=this.fiveStone.getStepLocation(t))},winCallback:function(t){this.winLoc.whowin=3-this.fiveStone.stone,1==this.winLoc.whowin&&(this.winLoc.whowin_title="黑胜"),2==this.winLoc.whowin&&(this.winLoc.whowin_title="白胜"),this.$forceUpdate(),this.fiveStone.preventStep()},buy_vip:function(t){s.showModal({title:"内测期间无需购买",showCancel:!1})},onChessBoardTouchStart:function(t){handleTip(t)},onChessBoardTouchMove:function(t){handleTip(t)},onChessBoardTouchEnd:function(){var e=p(o.default.mark(function e(i){var n,a,l,u,r,p,_,c,g,h;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this,n.handleTip(i),a=n.loc,n.fiveStone.history.length>n.tips_group.steps_limit&&(n.fiveStone.preventStep(),s.showModal({title:"",content:"五步训练最多只能走11步",showCancel:!1})),null==a){e.next=13;break}if(l=n.fiveStone.canStepAt(a.x,a.y),1!=n.fiveStone.chessBoardtips[a.x][a.y].stoneType&&0==n.tips_group.show_black_tips_flag&&1==n.fiveStone.stone){if(u="",r=n.fiveStone.history,r.length>0)for(p=0;p<r.length;p++)u+=n.upchangetoabc(r[p].x),u+=(15-r[p].y).toString();for(console.log(t(u," at pages\\play\\play.vue:374")),_=!1,c=0;c<15;c++)for(g=0;g<15;g++)0!=n.fiveStone.chessBoardtips[c][g].stoneType&&(_=!0);n.mistakes_collection_list[n.mistakes_collection_list.length-1]!=u&&_&&(n.mistakes_collection_list.push({total_line:u,tips:n.fiveStone.chessBoardtips}),s.setStorage({key:"mistakes_collection",data:n.mistakes_collection_list}),console.log(t(n.mistakes_collection_list," at pages\\play\\play.vue:394"))),n.tips_group.show_wrong_choice_flag=!0,setTimeout(function(){n.tips_group.show_wrong_choice_flag=!1},1e3)}if("dpcs_wdct"!=n.tips_group.mulu_flag){e.next=10;break}return 1!=n.mistakes_collection_list[n.tips_group.cuoti_num].tips[a.x][a.y].stoneType?(n.tips_group.show_wrong_choice_flag=!0,n.fiveStone.chessBoardtips=n.mistakes_collection_list[n.tips_group.cuoti_num].tips,setTimeout(function(){n.tips_group.cuoti_num+1<n.tips_group.cuoti_total_num?n.tips_group.cuoti_num++:(n.tips_group.cuoti_num=0,n.mistakes_collection_list=n.mistakes_collection_newlist.concat(),n.tips_group.cuoti_total_num=n.mistakes_collection_list.length),n.tips_group.show_wrong_choice_flag=!1,n.winLoc.whowin_title=n.tips_group.cuoti_num+1+"/"+n.tips_group.cuoti_total_num,n.fiveStone.changehistory(n.mistakes_collection_list[n.tips_group.cuoti_num].total_line),n.fiveStone.resetchessBoardtips()},4e3)):(n.tips_group.show_right_choice_flag=!0,console.log(t("delete_tips",n.tips_group.cuoti_num," at pages\\play\\play.vue:428")),n.mistakes_collection_newlist.splice(n.tips_group.cuoti_num,1),setTimeout(function(){if(n.tips_group.show_right_choice_flag=!1,n.tips_group.cuoti_num+1<n.tips_group.cuoti_total_num)n.tips_group.cuoti_num++;else if(n.tips_group.cuoti_num=0,n.mistakes_collection_list=n.mistakes_collection_newlist.concat(),n.tips_group.cuoti_total_num=n.mistakes_collection_list.length,0==n.tips_group.cuoti_total_num)return n.winLoc.whowin_title,n.fiveStone.changehistory("H8"),void n.fiveStone.resetchessBoardtips();n.winLoc.whowin_title=n.tips_group.cuoti_num+1+"/"+n.tips_group.cuoti_total_num,n.fiveStone.changehistory(n.mistakes_collection_list[n.tips_group.cuoti_num].total_line),s.setStorage({key:"mistakes_collection",data:n.mistakes_collection_newlist}),n.fiveStone.resetchessBoardtips()},1e3)),e.abrupt("return");case 10:n.fiveStone.step(a.x,a.y),this.tips_group.get_tips_flag&&l&&(n.get_tips(),n.$forceUpdate()),"bdms_rjmspt"==this.tips_group.mulu_flag&&1==this.fiveStone.stone&&(h=this.fiveStone.computerAI(1),n.fiveStone.step(parseInt(h["x"]),parseInt(h["y"])));case 13:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),restart:function(){this.fiveStone.restart(),this.winLoc.whowin=0,this.winLoc.whowin_title="",this.winLoc.start=null,this.winLoc.end=null,this.tips_group.double_undo_flag&&this.fiveStone.changehistory("H8"),"dplx_hykj"==this.tips_group.mulu_flag&&this.fiveStone.changehistory("H8H9I9"),"dplx_pykj"==this.tips_group.mulu_flag&&this.fiveStone.changehistory("H8I9I7"),this.tips_group.get_tips_flag&&this.get_tips(),this.$forceUpdate()},undo:function(){this.fiveStone.undo(),this.tips_group.double_undo_flag&&this.fiveStone.undo(),this.winLoc.whowin=0,this.winLoc.whowin_title="",this.winLoc.start=null,this.winLoc.end=null,this.tips_group.get_tips_flag&&this.get_tips(),this.$forceUpdate()},get_tips:function(){var e=p(o.default.mark(function e(){var i,n,a,u,r,p,_,c,g,h,f,w,d=this;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(i=this,0!=i.userInfo.vip_flag){e.next=10;break}if(i.fiveStone.resetchessBoardtips(),1==i.userInfo.tips_last&&s.showModal({title:"说明",content:"今日提示步数已经用完,请前往购买vip获得全部功能",showCancel:!1}),!(i.userInfo.tips_last<1)){e.next=6;break}return e.abrupt("return");case 6:i.cuttipslast(),n=(new Date).getDate(),a=i.userInfo.tips_last+","+n,s.setStorage({key:"tips_last_time",data:a,success:function(){console.log(t("setdata_tips_last_time_success",a," at pages\\play\\play.vue:548"))}});case 10:if(!(0==i.tips_group.get_tips_flag||i.fiveStone.history.length>i.tips_group.steps_limit)){e.next=14;break}return console.log(t("超过五步限制或者不能获得提示"," at pages\\play\\play.vue:553")),i.fiveStone.resetchessBoardtips(),e.abrupt("return");case 14:if(u="",r="",p=i.fiveStone.history,_=0,0==p.length)u="none";else for(c=0;c<p.length;c++)u+=i.upchangetoabc(p[c].x),u+=(15-p[c].y).toString(),r+=i.upchangetoabc(p[c].x)+"-",r+=(15-p[c].y).toString()+"-",_+=1;if(console.log(t(u," at pages\\play\\play.vue:574")),i.fiveStone.resetchessBoardtips(),null!=l.tipsdic[u]){e.next=28;break}return g={form:"get_wzq_data",table_name:i.tips_group.table_name,total_line:u,total_line_char:r,step:_+1},e.next=25,i.download_from_server(g,"wuziqitips","data_flag");case 25:setTimeout(function(){return d.deal_with_data()},600),e.next=30;break;case 28:for(h=l.tipsdic[u][0],c=0;c<h.length;c++)f=i.downchangetoabc(h[c].substring(0,1)),w=15-parseInt(h[c].substring(1)),1==i.fiveStone.stone&&(i.fiveStone.chessBoardtips[f][w].stoneType=1,i.fiveStone.chessBoardtips[f][w].num=l.tipsdic[u][1][c]),2==i.fiveStone.stone&&(i.fiveStone.chessBoardtips[f][w].stoneType=2,i.fiveStone.chessBoardtips[f][w].num=l.tipsdic[u][1][c]);case 30:return e.abrupt("return",200);case 31:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),tap_jieshao:function(){s.navigateTo({url:"../jieshao/jieshao"})},gotozml:function(){s.reLaunch({url:"../index2/index2"})},deal_with_data:function(){var e=this,i="",s=[],o=[],n=this.fiveStone.history;if(n.length>0)for(var a=0;a<n.length;a++)i+=this.upchangetoabc(n[a].x),i+=(15-n[a].y).toString();if(null!=e.wuziqitips&&200==e.data_flag)for(var u=0;u<e.wuziqitips.length;u++){e.wuziqitips[u]["step"].length>1&&e.wuziqitips[u]["num"]>0&&(s.push(e.wuziqitips[u]["step"]),o.push(e.wuziqitips[u]["num"]));var r=e.downchangetoabc(e.wuziqitips[u]["step"].substring(0,1)),p=15-parseInt(e.wuziqitips[u]["step"].substring(1));1==e.fiveStone.stone&&r&&p&&(e.fiveStone.chessBoardtips[r][p].stoneType=1,e.fiveStone.chessBoardtips[r][p].num=e.wuziqitips[u]["num"],e.wuziqitips[u]["change_line"].length>4&&(e.fiveStone.chessBoardtips[r][p].stoneType=3)),2==e.fiveStone.stone&&r&&p&&(e.fiveStone.chessBoardtips[r][p].stoneType=2,e.fiveStone.chessBoardtips[r][p].num=e.wuziqitips[u]["num"],e.wuziqitips[u]["change_line"].length>4&&(e.fiveStone.chessBoardtips[r][p].stoneType=3))}else 300==e.data_flag&&(e.fiveStone.changehistory(e.wuziqitips[0]["change_line"]),setTimeout(function(){e.get_tips(),console.log(t("更改历史，重新获取"," at pages\\play\\play.vue:672"))},400));null!=s[0]&&(console.log(t("insertarray1",s," at pages\\play\\play.vue:676")),l.tipsdic[i]=[s,o])},qiuzhu:function(){var e=p(o.default.mark(function e(){var i,n,a,u,r,p,_,c,g,h,f,w,d,v;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(i=[],n=0;n<15;n++)for(i[n]=[],a=0;a<15;a++)i[n][a]=0,1==this.fiveStone.chessBoard[n][a].stoneType&&(i[n][a]=1),2==this.fiveStone.chessBoard[n][a].stoneType&&(i[n][a]=2);if(s.showLoading({title:"计算中",mask:"true"}),u=this.fiveStone.deepthinkshuansha(this.fiveStone.stone,this.fiveStone.blackWin,this.fiveStone.whiteWin,i),s.hideLoading(),u.length>0){if(r="",p=[],_=[],c=this.fiveStone.history,c.length>0)for(n=0;n<c.length;n++)r+=this.upchangetoabc(c[n].x),r+=(15-c[n].y).toString();for(console.log(t(r," at pages\\play\\play.vue:720")),n=0;n<u.length;n++)g=u[n].split("|"),h=g[1].split("-"),f=h[0].split(","),w=this.upchangetoabc(f[0]),d=15-parseInt(f[1]),v=""+w+d,p.push(v),_.push(1234),console.log(t(v," at pages\\play\\play.vue:731"));l.tipsdic[r]=[p,_],this.get_tips()}else s.showToast({icon:"none",title:"未求出解"});case 6:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}()})};e.default=g}).call(this,i("0de9")["default"],i("6e42")["default"])},"8e85":function(t,e,i){},"8f4a":function(t,e,i){"use strict";i.r(e);var s=i("5d2b"),o=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=o.a},ce4e:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o})},e322:function(t,e,i){"use strict";var s=i("8e85"),o=i.n(s);o.a}},[["0276","common/runtime","common/vendor"]]]);
});
require('pages/play/play.js');
__wxRoute = 'pages/jieshao/jieshao';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/jieshao/jieshao.js';

define('pages/jieshao/jieshao.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jieshao/jieshao"],{"096e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{height:0}},onLoad:function(){this.height=t.getSystemInfoSync().windowHeight-t.getSystemInfoSync().windowWidth/750*20}};n.default=e}).call(this,e("6e42")["default"])},1671:function(t,n,e){},"350e":function(t,n,e){"use strict";(function(t){e("c577"),e("921b");u(e("66fd"));var n=u(e("ddfc"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"38c6":function(t,n,e){"use strict";e.r(n);var u=e("096e"),c=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=c.a},b761:function(t,n,e){"use strict";var u=e("1671"),c=e.n(u);c.a},ddfc:function(t,n,e){"use strict";e.r(n);var u=e("ee31"),c=e("38c6");for(var o in c)"default"!==o&&function(t){e.d(n,t,function(){return c[t]})}(o);e("b761");var i=e("2877"),a=Object(i["a"])(c["default"],u["a"],u["b"],!1,null,null,null);n["default"]=a.exports},ee31:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return c})}},[["350e","common/runtime","common/vendor"]]]);
});
require('pages/jieshao/jieshao.js');
__wxRoute = 'pages/item_question/item_question';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/item_question/item_question.js';

define('pages/item_question/item_question.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/item_question/item_question"],{"0c87":function(n,e,t){"use strict";t.r(e);var i=t("f47f"),o=t("249d");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("37a7");var a=t("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"249d":function(n,e,t){"use strict";t.r(e);var i=t("cb5e"),o=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,function(){return i[n]})}(u);e["default"]=o.a},"37a7":function(n,e,t){"use strict";var i=t("83af"),o=t.n(i);o.a},"83af":function(n,e,t){},b97b:function(n,e,t){"use strict";(function(n){t("c577"),t("921b");i(t("66fd"));var e=i(t("0c87"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},cb5e:function(n,e,t){"use strict";(function(n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("a34a")),u=t("2f62");function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,o,u,a){try{var r=n[u](a),s=r.value}catch(c){return void t(c)}r.done?e(s):Promise.resolve(s).then(i,o)}function s(n){return function(){var e=this,t=arguments;return new Promise(function(i,o){var u=n.apply(e,t);function a(n){r(u,i,o,a,s,"next",n)}function s(n){r(u,i,o,a,s,"throw",n)}a(void 0)})}}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.forEach(function(e){l(n,e,t[e])})}return n}function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var _={data:function(){return{card_id:null,luyouData_ziduan:null,new_question_list:[{ziduan_id:1,ziduan_zhongwen:""}],ziduan_num:2,new_question_num:1,question_or_conclusion_flag:"new_question",question_or_conclusion_zhongwen:"问题",placeholder_world:"请输入问题描述..",image_select:0}},computed:c({},(0,u.mapState)(["userInfo"])),onLoad:function(){var e=s(o.default.mark(function e(t){return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.card_id=999,console.log(n("item_detail：card_id:"+t.card_id," at pages\\item_question\\item_question.vue:93"));case 2:case"end":return e.stop()}},e,this)}));function t(n){return e.apply(this,arguments)}return t}(),methods:{radioChange:function(e){console.log(n("radio发生change事件，携带value值为："+e.detail.value," at pages\\item_question\\item_question.vue:103")),this.question_or_conclusion_flag=e.detail.value,"new_question"==this.question_or_conclusion_flag&&(this.question_or_conclusion_zhongwen="问题",this.placeholder_world="请输入问题描述.."),"new_conclusion"==this.question_or_conclusion_flag&&(this.question_or_conclusion_zhongwen="总结",this.placeholder_world="请输入总结的内容.."),"new_suggestion"==this.question_or_conclusion_flag&&(this.question_or_conclusion_zhongwen="建议",this.placeholder_world="请输入建议..")},tap_bqImage:function(n){this.image_select=n},bigtext_input:function(n){this.new_question_list[n.currentTarget.id]["ziduan_zhongwen"]=n.detail.value},add_ziduan:function(){this.new_question_num<2&&(this.new_question_list.push({ziduan_id:this.ziduan_num,ziduan_zhongwen:""}),this.ziduan_num++,this.new_question_num++),this.$forceUpdate()},shanchu_ziduan:function(n){this.new_question_list.splice(n,1),this.new_question_num--,this.$forceUpdate()},formSubmit:function(n){for(var e=this,t=Math.floor(9e4*Math.random())+1e5,o=(new Date).valueOf()+String(t),u=0;u<e.new_question_list.length;u++){if(""==e.new_question_list[u]["ziduan_zhongwen"])return i.showToast({title:"请输入内容后上传",icon:"none"}),0;if(u==e.new_question_list.length-1){i.showLoading({title:"上传中"}),setTimeout(function(){i.hideLoading(),i.navigateBack({})},1e3);for(var a=0;a<e.new_question_list.length;a++)e.upload_to_server({form:"modify_or_build_item",userid:e.userInfo.userid,nickName:e.userInfo.nickName,phonenum:e.userInfo.phonenum,avatarUrl:e.userInfo.avatarUrl,openid:e.userInfo.openid,card_id:e.card_id,ziduan_id:e.new_question_list[a].ziduan_id,ziduan_zhongwen:e.new_question_list[a].ziduan_zhongwen,modify_or_new_flag:e.question_or_conclusion_flag,biaoqing_num:e.image_select,shuijishu:o})}}}}};e.default=_}).call(this,t("0de9")["default"],t("6e42")["default"])},f47f:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o})}},[["b97b","common/runtime","common/vendor"]]]);
});
require('pages/item_question/item_question.js');
__wxRoute = 'pages/play_online/play_online';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/play_online/play_online.js';

define('pages/play_online/play_online.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/play_online/play_online"],{"0924":function(e,a,t){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r(t("a34a")),l=t("2f62"),i=r(t("b39a"));t("2144");function r(e){return e&&e.__esModule?e:{default:e}}function u(e,a,t,n,o,l,i){try{var r=e[l](i),u=r.value}catch(s){return void t(s)}r.done?a(u):Promise.resolve(u).then(n,o)}function s(e){return function(){var a=this,t=arguments;return new Promise(function(n,o){var l=e.apply(a,t);function i(e){u(l,n,o,i,r,"next",e)}function r(e){u(l,n,o,i,r,"throw",e)}i(void 0)})}}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(a){c(e,a,t[a])})}return e}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var _={data:function(){return{loacal_avatarUrl_loc:"../../static/nobody.png",fiveStone:null,winLoc:{whowin:0,whowin_title:"",start:null,end:null,width:null,angle:null},setTime:null,loc1:null,loc:null,data_flag:null,whichplayer:0,shuijishu:null,agree_next_play:!1,next_tablenbr:null,play_group:[{},{player:1,state:"none",player_nickname:null,player_avatarUrl:null},{player:1,state:"none",player_nickname:null,player_avatarUrl:null}],tips_group:{cantouch_flag:!0,mulu_flag:null,show_tips_flag:!0,show_black_tips_flag:!0,get_tips_flag:!0,steps_limit:60,table_name:"",show_wrong_choice_flag:!1,show_tips_last_flag:!1,show_dftx_flag:!1,double_undo_flag:!1,show_qiuzhu_flag:!1,show_find_duishou_flag:!1,show_menu_flag:!1,has_yaoqing_flag:"false",agreeundo_flag:!1},sever_play_data:null}},computed:p({},(0,l.mapState)(["userInfo"])),onShareAppMessage:function(a){return"button"===a.from&&console.log(e(a.target," at pages\\play_online\\play_online.vue:169")),{title:"朋友，来一局五子棋",path:"/pages/play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu="+this.shuijishu}},onLoad:function(){var a=s(o.default.mark(function a(t){var l;return o.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:l=this,console.log(e("初始化棋盘"," at pages\\play_online\\play_online.vue:184")),l.fiveStone=new i.default(15,.98),l.fiveStone.setWinCallback(l.winCallback),l.loc=null,l.tips_group.mulu_flag=t.mulu_flag,l.tips_group.has_yaoqing_flag=t.has_yaoqing_flag,l.whichplayer=t.player,l.shuijishu=t.shuijishu,console.log(e(l.tips_group.mulu_flag," at pages\\play_online\\play_online.vue:194")),a.t0=t.mulu_flag,a.next="ljms_hyyz"===a.t0?13:"ljms_sjpd"===a.t0?20:27;break;case 13:return l.tips_group.show_dftx_flag=3,l.tips_group.get_tips_flag=!1,l.tips_group.show_tips_flag=!1,l.tips_group.show_find_duishou_flag=!0,l.tips_group.show_menu_flag=!0,n.setNavigationBarTitle({title:"巅峰对决"}),a.abrupt("break",28);case 20:return l.tips_group.show_dftx_flag=3,l.tips_group.get_tips_flag=!1,l.tips_group.show_tips_flag=!1,l.tips_group.show_find_duishou_flag=!0,l.tips_group.show_menu_flag=!0,n.setNavigationBarTitle({title:"随机配对"}),a.abrupt("break",28);case 27:return a.abrupt("break",28);case 28:l.$forceUpdate(),l.play_group[l.whichplayer].state="ready",l.update_play_date(),l.setTime=setInterval(function(){l.play_circle()},2e3);case 32:case"end":return a.stop()}},a,this)}));function t(e){return a.apply(this,arguments)}return t}(),methods:p({},(0,l.mapMutations)(["settipslast","cuttipslast","login","logout","setopenid","settipslast","setphonenum","setdbuserifo"]),{handleTip:function(e){this.fiveStone.canStep()&&(this.fiveStone.getStepPosition(e),this.loc=this.fiveStone.getStepLocation(e))},winCallback:function(e){var a=this;a.winLoc.whowin=3-a.fiveStone.stone,1==a.winLoc.whowin&&(a.winLoc.whowin_title="黑胜"),2==a.winLoc.whowin&&(a.winLoc.whowin_title="白胜"),a.whichplayer==a.winLoc.whowin&&(a.play_group[a.whichplayer].state="win",a.update_play_date()),a.whichplayer!=a.winLoc.whowin&&(a.play_group[a.whichplayer].state="loss",a.update_play_date()),a.$forceUpdate(),a.fiveStone.preventStep(),setTimeout(function(){a.restartnewgame()},3e3)},onChessBoardTouchStart:function(e){handleTip(e)},onChessBoardTouchMove:function(e){handleTip(e)},onChessBoardTouchEnd:function(a){if(this.tips_group.cantouch_flag){var t=this;if(t.handleTip(a),null!=t.loc&&null!=t.loc1&&(console.log(e("loc",t.loc.x,t.loc.y," at pages\\play_online\\play_online.vue:285")),console.log(e("loc1",t.loc1.x,t.loc1.y," at pages\\play_online\\play_online.vue:286")),t.loc1.x==t.loc.x&&t.loc1.y==t.loc.y))return t.fiveStone.step(t.loc.x,t.loc.y),t.update_play_date(),t.loc1.x=100,t.loc1.y=100,t.tips_group.cantouch_flag=!1,void t.$forceUpdate();t.loc1==t.loc&&null!=t.loc1||0!=t.fiveStone.chessBoard[t.loc.x][t.loc.y].stoneType||(t.loc1=JSON.parse(JSON.stringify(t.loc)))}},restart:function(){var e=this;n.showModal({title:"警告",content:"是否确定重新开始，重新开始后本局判输",success:function(a){a.confirm?(e.play_group[e.whichplayer].state="renshu",e.update_play_date(),e.winLoc.whowin=e.fiveStone.stone,e.winLoc.whowin_title="认输",e.winLoc.start=null,e.winLoc.end=null,e.fiveStone.preventStep(),e.$forceUpdate(),setTimeout(function(){e.restartnewgame()},3e3)):a.cancel}})},undo:function(){this.play_group[this.whichplayer].state="huiqi",this.update_play_date(),n.showLoading({mask:!0,title:"等待对方回复"})},tap_jieshao:function(){n.navigateTo({url:"../jieshao/jieshao"})},gotozml:function(){var e=this;n.showModal({title:"警告",content:"是否确定要离开本局游戏，离开后无法继续",success:function(a){a.confirm?(e.play_group[e.whichplayer].state="renshu",clearInterval(e.setTime),e.update_play_date(),n.reLaunch({url:"../index2/index2"})):a.cancel}})},start_play:function(){var e=s(o.default.mark(function e(){var a;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=this,"false"!=this.tips_group.has_yaoqing_flag){e.next=6;break}return n.showToast({title:"等待对手中。。。",icon:"none"}),e.abrupt("return");case 6:a.tips_group.show_menu_flag=!1,a.tips_group.cantouch_flag=!1,a.$forceUpdate();case 9:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),play_circle:function(){var a=s(o.default.mark(function a(){var t,l;return o.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return t=this,l={form:"get_wzq_dz_data",shuijishu:t.shuijishu},a.next=4,t.download_from_server(l,"sever_play_data");case 4:1==t.whichplayer&&1==t.agree_next_play&&t.sever_play_data[0]["next_tablenbr"].length>5&&(clearInterval(t.setTime),n.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=2&shuijishu="+t.sever_play_data[0]["next_tablenbr"]})),t.play_group[1].player_nickname=t.sever_play_data[0].nickName1,t.play_group[1].player_avatarUrl=t.sever_play_data[0].avatarUrl1,t.play_group[2].player_nickname=t.sever_play_data[0].nickName2,t.play_group[2].player_avatarUrl=t.sever_play_data[0].avatarUrl2,1==t.whichplayer&&(t.play_group[2].state=t.sever_play_data[0].state2),2==t.whichplayer&&(t.play_group[1].state=t.sever_play_data[0].state1),t.$forceUpdate(),console.log(e(t.play_group," at pages\\play_online\\play_online.vue:426")),(t.fiveStone.chessboard_total_line.length<t.sever_play_data[0].chessboard.length||"agreehuiqi"==t.play_group[3-t.whichplayer].state)&&(console.log(e("change_history",t.fiveStone.chessboard_total_line," at pages\\play_online\\play_online.vue:431")),t.fiveStone.changehistory(t.sever_play_data[0].chessboard)),"none"!=t.play_group[3-t.whichplayer].state&&(t.tips_group.has_yaoqing_flag=!0,"renshu"==t.play_group[3-t.whichplayer].state?(t.play_group[t.whichplayer].state,t.update_play_date(),t.winLoc.whowin=t.whichplayer,t.winLoc.whowin_title="对方认输",t.tips_group.cantouch_flag=!1,t.$forceUpdate(),setTimeout(function(){t.restartnewgame()},3e3)):"ok"==t.play_group[3-t.whichplayer].state?(t.play_group[t.whichplayer].state="ok",t.update_play_date(),t.fiveStone.stone==t.whichplayer&&(t.tips_group.cantouch_flag=!0)):"huiqi"==t.play_group[3-t.whichplayer].state&&"agreehuiqi"!=t.play_group[t.whichplayer].state&&"notagreehuiqi"!=t.play_group[t.whichplayer].state?n.showModal({content:"对方请求悔棋是否同意？",success:function(e){e.confirm?(t.fiveStone.undo(),t.fiveStone.stone==t.whichplayer&&t.fiveStone.undo(),t.winLoc.whowin=0,t.winLoc.whowin_title="",t.winLoc.start=null,t.winLoc.end=null,t.$forceUpdate(),t.play_group[t.whichplayer].state="agreehuiqi",t.update_play_date()):e.cancel&&(t.play_group[t.whichplayer].state="notagreehuiqi",t.update_play_date())}}):"notagreehuiqi"==t.play_group[3-t.whichplayer].state&&"ok"!=t.play_group[t.whichplayer].state?(n.hideLoading(),n.showToast({title:"对方不同意"}),t.play_group[t.whichplayer].state="ok",t.update_play_date()):"agreehuiqi"==t.play_group[3-t.whichplayer].state&&"ok"!=t.play_group[t.whichplayer].state?(n.hideLoading(),n.showToast({title:"对方同意"}),t.play_group[t.whichplayer].state="ok",t.update_play_date()):t.fiveStone.stone==t.whichplayer&&(t.tips_group.cantouch_flag=!0));case 15:case"end":return a.stop()}},a,this)}));function t(){return a.apply(this,arguments)}return t}(),update_play_date:function(){var e=s(o.default.mark(function e(){var a,t;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this,"",t="new_wzq_dz_play"+this.whichplayer+"_update",a.upload_to_server({form:t,nickName:a.userInfo.nickName,avatarUrl:a.userInfo.avatarUrl,openid:a.userInfo.openid,shuijishu:a.shuijishu,state:a.play_group[a.whichplayer].state,chessboard:a.fiveStone.chessboard_total_line,next_tablenbr:a.next_tablenbr});case 4:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),restartnewgame:function(){var e=s(o.default.mark(function e(a){var t;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this,n.showModal({content:"是否再来一局？",success:function(e){if(e.confirm){if(t.agree_next_play=!0,1==t.whichplayer)t.sever_play_data[0]["next_tablenbr"].length>5&&n.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=2&shuijishu="+t.sever_play_data[0]["next_tablenbr"]});else if(2==t.whichplayer){var a=Math.floor(9e4*Math.random())+1e5,o=(new Date).valueOf()+String(a);t.next_tablenbr=o,t.update_play_date(),t.upload_to_server({form:"new_wzq_dz_start",userid:t.userInfo.userid,nickName:t.userInfo.nickName,phonenum:t.userInfo.phonenum,avatarUrl:t.userInfo.avatarUrl,openid:t.userInfo.openid,card_id:t.card_id,shuijishu:o}),clearInterval(t.setTime),n.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=1&shuijishu="+o})}}else e.cancel&&clearInterval(t.setTime)}});case 2:case"end":return e.stop()}},e,this)}));function a(a){return e.apply(this,arguments)}return a}(),wxGetUserInfo:function(a){var t=this;t.userInfo.hasLogin?t.start_play():(console.log(e(a.detail.userInfo," at pages\\play_online\\play_online.vue:591")),a.detail.userInfo?n.login({provider:"weixin",success:function(n){console.log(e("code:",n.code," at pages\\play_online\\play_online.vue:597")),t.login(a.detail.userInfo,n.code),t.upload_oauthData(a.detail.userInfo,n.code),t.start_play()}}):(console.log(e(333,"执行到这里，说明拒绝了授权"," at pages\\play_online\\play_online.vue:605")),n.showToast({title:"为了您更好的体验,请先同意授权",icon:"none",duration:2e3})))},upload_oauthData:function(a,t){var o=this;n.request({url:"https://kaikaiomg.applinzi.com/uni_app_upload.php",method:"POST",data:{form:"oauthData",userid:a.userid,nickName:a.nickName,avatarUrl:a.avatarUrl,city:a.city,country:a.country,gender:a.gender,language:a.language,province:a.province,code:t},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){200!==a.statusCode?console.log(e("请求失败:",a," at pages\\play_online\\play_online.vue:641")):(console.log(e("success_uodate_oauthData:",a.data[0]," at pages\\play_online\\play_online.vue:643")),o.setopenid(a.data[0].openid),o.setdbuserifo(a.data[0]))}})}})};a.default=_}).call(this,t("0de9")["default"],t("6e42")["default"])},"15f3":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c},o=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return o})},"5e7d":function(e,a,t){"use strict";(function(e){t("c577"),t("921b");n(t("66fd"));var a=n(t("e2da"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},"7d50":function(e,a,t){"use strict";t.r(a);var n=t("0924"),o=t.n(n);for(var l in n)"default"!==l&&function(e){t.d(a,e,function(){return n[e]})}(l);a["default"]=o.a},"840d":function(e,a,t){},ae5e:function(e,a,t){"use strict";var n=t("840d"),o=t.n(n);o.a},e2da:function(e,a,t){"use strict";t.r(a);var n=t("15f3"),o=t("7d50");for(var l in o)"default"!==l&&function(e){t.d(a,e,function(){return o[e]})}(l);t("ae5e");var i=t("2877"),r=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=r.exports}},[["5e7d","common/runtime","common/vendor"]]]);
});
require('pages/play_online/play_online.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

