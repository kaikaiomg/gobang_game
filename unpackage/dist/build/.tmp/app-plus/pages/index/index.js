(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1439:function(e,n,t){},"46ee":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return u})},5659:function(e,n,t){"use strict";(function(e,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(t("a34a")),o=t("2f62");function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){s(e,n,t[n])})}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n,t,i,u,o,a){try{var r=e[o](a),s=r.value}catch(l){return void t(l)}r.done?n(s):Promise.resolve(s).then(i,u)}function c(e){return function(){var n=this,t=arguments;return new Promise(function(i,u){var o=e.apply(n,t);function a(e){l(o,i,u,a,r,"next",e)}function r(e){l(o,i,u,a,r,"throw",e)}a(void 0)})}}var d={data:function(){return{fileSrc:"",savedFilePath:"",ifallowgotohot:!1,windowHeight:null,finish_task:0,first_flag:!1,mulu_flag:null,shuijishu:"0"}},onLoad:function(){var n=c(u.default.mark(function n(t){var o;return u.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return this.mulu_flag=t.mulu_flag,this.shuijishu=t.shuijishu,console.log(e("shuijishu",this.shuijishu," at pages\\index\\index.vue:52")),o=this,o.windowHeight=i.getSystemInfoSync().windowHeight,n.next=7,i.getStorage({key:"tips_last_time",success:function(n){console.log(e("find_tips",n.data," at pages\\index\\index.vue:58")),o.settipslast(n.data)},fail:function(){console.log(e("havent_find_tips"," at pages\\index\\index.vue:62"))}});case 7:case"end":return n.stop()}},n,this)}));function t(e){return n.apply(this,arguments)}return t}(),onShareAppMessage:function(n){return"button"===n.from&&console.log(e(n.target," at pages\\index\\index.vue:73")),{title:"五子棋打谱",path:"/pages/index/index"}},computed:r({},(0,o.mapState)(["userInfo"])),methods:r({},(0,o.mapMutations)(["login","logout","setopenid","settipslast","setphonenum","setdbuserifo"]),{wxGetUserInfo:function(n){var t=this;console.log(e(n.detail.userInfo," at pages\\index\\index.vue:91")),n.detail.userInfo?i.login({provider:"weixin",success:function(u){console.log(e("code:",u.code," at pages\\index\\index.vue:97")),t.login(n.detail.userInfo,u.code),t.upload_oauthData(n.detail.userInfo,u.code),null!=t.shuijishu?setTimeout(function(){i.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu="+t.shuijishu})},100):setTimeout(function(){i.reLaunch({url:"../index2/index2"})},100)}}):(console.log(e(333,"执行到这里，说明拒绝了授权"," at pages\\index\\index.vue:119")),i.showToast({title:"为了您更好的体验,请先同意授权",icon:"none",duration:2e3}))},gotoindex2:function(){var e=this;null!=e.shuijishu?setTimeout(function(){i.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu="+e.shuijishu})},100):setTimeout(function(){i.reLaunch({url:"../index2/index2"})},100)},upload_oauthData:function(n,t){var u=this;i.request({url:"https://kaikaiomg.applinzi.com/uni_app_upload.php",method:"POST",data:{form:"oauthData",userid:n.userid,nickName:n.nickName,avatarUrl:n.avatarUrl,city:n.city,country:n.country,gender:n.gender,language:n.language,province:n.province,code:t},header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){200!==n.statusCode?console.log(e("请求失败:",n," at pages\\index\\index.vue:170")):(console.log(e("success_uodate_oauthData:",n.data[0]," at pages\\index\\index.vue:172")),u.setopenid(n.data[0].openid),u.setdbuserifo(n.data[0]))}})}})};n.default=d}).call(this,t("0de9")["default"],t("6e42")["default"])},"5d9a":function(e,n,t){"use strict";var i=t("1439"),u=t.n(i);u.a},c3c8:function(e,n,t){"use strict";t.r(n);var i=t("46ee"),u=t("db75");for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);t("5d9a");var a=t("2877"),r=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},c7d8:function(e,n,t){"use strict";(function(e){t("c577"),t("921b");i(t("66fd"));var n=i(t("c3c8"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},db75:function(e,n,t){"use strict";t.r(n);var i=t("5659"),u=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);n["default"]=u.a}},[["c7d8","common/runtime","common/vendor"]]]);