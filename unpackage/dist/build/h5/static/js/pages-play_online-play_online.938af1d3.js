(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-play_online-play_online"],{"0d04":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container",staticStyle:{width:"750upx","align-content":"center","align-items":"center","padding-top":"160upx","flex-flow":"column nowrap"}},[a("v-uni-image",{staticStyle:{position:"absolute",width:"750upx",height:"250upx","z-index":"-1",bottom:"0upx",right:"0upx"},attrs:{src:"../../static/index2bc.png",mode:""}}),0!=e.winLoc.whowin?a("v-uni-view",{staticStyle:{position:"absolute",top:"30upx",width:"120upx",left:"360upx","font-size":"53upx","font-weight":"bold",color:"red"}},[e._v(e._s(e.winLoc.whowin_title))]):e._e(),e.tips_group.show_dftx_flag?a("v-uni-view",{staticStyle:{position:"absolute",top:"50upx",left:"40upx",width:"160upx","justify-content":"space-between","align-items":"center",padding:"20upx"}},[1==e.tips_group.show_dftx_flag?a("v-uni-image",{staticClass:"logo-img2",attrs:{src:"../../static/robot.jpg"}}):e._e(),2==e.tips_group.show_dftx_flag?a("v-uni-image",{staticClass:"logo-img2",attrs:{src:"../../static/zjz.jpg"}}):e._e(),3==e.tips_group.show_dftx_flag?a("v-uni-image",{staticClass:"logo-img2",attrs:{src:e.play_group[3-e.whichplayer].player_avatarUrl}}):e._e(),a("v-uni-view",{class:["now-stone",2==e.whichplayer?"bak_black":"bak_white"]})],1):e._e(),a("v-uni-view",{staticClass:"icontext",staticStyle:{position:"absolute",top:"80upx",width:"80upx",right:"40upx","font-size":"40upx",color:"orange","font-weight":"bold","justify-content":"center"},on:{click:function(t){t=e.$handleEvent(t),e.gotozml()}}},[e._v("")]),a("v-uni-view",{staticClass:"chess-board",style:"width:"+e.fiveStone.chessboardSizePX+"px;height:"+e.fiveStone.chessboardSizePX+"px;background-color:#FFE153;position:relative;left:"+e.fiveStone.halfCellSizePX+"px;",attrs:{id:"chess-board"},on:{ontouchstart:function(t){t=e.$handleEvent(t),e.onChessBoardTouchStart(t)},ontouchmove:function(t){t=e.$handleEvent(t),e.onChessBoardTouchMove(t)},click:function(t){t=e.$handleEvent(t),e.onChessBoardTouchEnd(t)}}},e._l(15,function(t,i){return a("v-uni-view",{key:i,staticClass:"row"},e._l(15,function(t,n){return a("v-uni-view",{key:n,staticClass:"cell",staticStyle:{position:"relative"}},[3!=i&&7!=i&&11!=i||3!=n&&7!=n&&11!=n?e._e():a("v-uni-view",{style:"background-color: black; width: 6px;height: 6px;border-radius:6px; position:absolute; left:-3px;top:-3px;"}),e.fiveStone.chessBoard[n][i].stoneType>0?a("v-uni-view",{class:[1==e.fiveStone.chessBoard[n][i].stoneType?"bak_black":"bak_white"],style:"width:"+e.fiveStone.cellSizePX+"px;height:"+e.fiveStone.cellSizePX+"px; border:1px solid #000000;position:absolute;border-radius:"+e.fiveStone.halfCellSizePX+"px;  left:-"+(e.fiveStone.halfCellSizePX+1)+"px;top:-"+(e.fiveStone.halfCellSizePX+1)+"px;transform:scale(0.80);"}):e._e(),e.loc1.x==n&&e.loc1.y==i?a("v-uni-view",{class:[1==e.fiveStone.stone?"board_bak_black":"board_bak_white"],style:" width:"+e.fiveStone.cellSizePX+"px;height:"+e.fiveStone.cellSizePX+"px;  position:absolute; border-radius:"+e.fiveStone.halfCellSizePX+"px; left:-"+(e.fiveStone.halfCellSizePX+5)+"px;top:-"+(e.fiveStone.halfCellSizePX+5)+"px;transform:scale(0.58);"}):e._e()],1)}),1)}),1),a("v-uni-view",{staticStyle:{"flex-flow":"row nowrap",width:"750upx",display:"flex"}},[a("v-uni-view",{staticStyle:{width:"190upx","justify-content":"space-between","align-items":"center",border:"#000000 dashed 1upx",margin:"0 10upx 0 40upx",padding:"10upx 18upx"}},[a("v-uni-view",{staticStyle:{"flex-flow":"column nowrap",width:"120upx","align-items":"center"}},[a("v-uni-image",{staticClass:"logo-img",attrs:{src:e.userInfo.hasLogin?e.userInfo.avatarUrl:e.loacal_avatarUrl_loc}})],1),a("v-uni-view",{class:["now-stone",1==e.whichplayer?"bak_black":"bak_white"]})],1),a("v-uni-view",{staticStyle:{width:"400upx",height:"100upx",margin:"20upx","flex-flow":"row nowrap",display:"flex","align-items":"center","align-content":"center","justify-content":"space-between"}},[a("v-uni-image",{staticClass:"minbutton_style",attrs:{src:"../../static/chongwan.png"},on:{click:function(t){t=e.$handleEvent(t),e.restart(t)}}}),a("v-uni-image",{staticClass:"minbutton_style",attrs:{src:"../../static/huiqi.png"},on:{click:function(t){t=e.$handleEvent(t),e.undo(t)}}}),e.tips_group.show_qiuzhu_flag?a("v-uni-image",{staticClass:"minbutton_style",attrs:{src:"../../static/qiuzhu.png"},on:{click:function(t){t=e.$handleEvent(t),e.qiuzhu(t)}}}):e._e()],1)],1),e.tips_group.show_menu_flag?a("v-uni-view",{staticClass:"menu_view"},[a("v-uni-view",{staticClass:"icontext",staticStyle:{position:"absolute",top:"80upx",width:"80upx",right:"40upx","font-size":"40upx",color:"orange","font-weight":"bold","justify-content":"center"},on:{click:function(t){t=e.$handleEvent(t),e.gotozml()}}},[e._v("")]),a("v-uni-button",{staticClass:"menu_item_view",attrs:{"open-type":"getUserInfo"},on:{getuserinfo:function(t){t=e.$handleEvent(t),e.wxGetUserInfo(t)}}},[e._v("开始游戏")]),"false"==e.tips_group.has_yaoqing_flag?a("v-uni-button",{staticClass:"menu_item_view",attrs:{"open-type":"share"}},[e._v("邀请好友")]):e._e()],1):e._e()],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"1f64":function(e,t,a){"use strict";var i=a("f8fa"),n=a.n(i);n.a},"33d8":function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("f499"));a("96cf");var o=i(a("3b8d")),l=i(a("cebc")),r=a("2f62"),s=i(a("b39a")),c=(a("2144"),{data:function(){return{loacal_avatarUrl_loc:"../../static/nobody.png",fiveStone:null,winLoc:{whowin:0,whowin_title:"",start:null,end:null,width:null,angle:null},setTime:null,loc1:null,loc:null,data_flag:null,whichplayer:0,shuijishu:null,agree_next_play:!1,next_tablenbr:null,play_group:[{},{player:1,state:"none",player_nickname:null,player_avatarUrl:null},{player:1,state:"none",player_nickname:null,player_avatarUrl:null}],tips_group:{cantouch_flag:!0,mulu_flag:null,show_tips_flag:!0,show_black_tips_flag:!0,get_tips_flag:!0,steps_limit:60,table_name:"",show_wrong_choice_flag:!1,show_tips_last_flag:!1,show_dftx_flag:!1,double_undo_flag:!1,show_qiuzhu_flag:!1,show_find_duishou_flag:!1,show_menu_flag:!1,has_yaoqing_flag:"false",agreeundo_flag:!1},sever_play_data:null}},computed:(0,l.default)({},(0,r.mapState)(["userInfo"])),onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:"朋友，来一局五子棋",path:"/pages/play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu="+this.shuijishu}},onLoad:function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this,console.log("初始化棋盘"),a.fiveStone=new s.default(15,.98),a.fiveStone.setWinCallback(a.winCallback),a.loc=null,a.tips_group.mulu_flag=t.mulu_flag,a.tips_group.has_yaoqing_flag=t.has_yaoqing_flag,a.whichplayer=t.player,a.shuijishu=t.shuijishu,console.log(a.tips_group.mulu_flag),e.t0=t.mulu_flag,e.next="ljms_hyyz"===e.t0?13:"ljms_sjpd"===e.t0?20:27;break;case 13:return a.tips_group.show_dftx_flag=3,a.tips_group.get_tips_flag=!1,a.tips_group.show_tips_flag=!1,a.tips_group.show_find_duishou_flag=!0,a.tips_group.show_menu_flag=!0,uni.setNavigationBarTitle({title:"巅峰对决"}),e.abrupt("break",28);case 20:return a.tips_group.show_dftx_flag=3,a.tips_group.get_tips_flag=!1,a.tips_group.show_tips_flag=!1,a.tips_group.show_find_duishou_flag=!0,a.tips_group.show_menu_flag=!0,uni.setNavigationBarTitle({title:"随机配对"}),e.abrupt("break",28);case 27:return e.abrupt("break",28);case 28:a.$forceUpdate(),a.play_group[a.whichplayer].state="ready",a.update_play_date(),a.setTime=setInterval(function(){a.play_circle()},2e3);case 32:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),methods:(0,l.default)({},(0,r.mapMutations)(["settipslast","cuttipslast","login","logout","setopenid","settipslast","setphonenum","setdbuserifo"]),{handleTip:function(e){this.fiveStone.canStep()&&(this.fiveStone.getStepPosition(e),this.loc=this.fiveStone.getStepLocation(e))},winCallback:function(e){var t=this;t.winLoc.whowin=3-t.fiveStone.stone,1==t.winLoc.whowin&&(t.winLoc.whowin_title="黑胜"),2==t.winLoc.whowin&&(t.winLoc.whowin_title="白胜"),t.whichplayer==t.winLoc.whowin&&(t.play_group[t.whichplayer].state="win",t.update_play_date()),t.whichplayer!=t.winLoc.whowin&&(t.play_group[t.whichplayer].state="loss",t.update_play_date()),t.$forceUpdate(),t.fiveStone.preventStep(),setTimeout(function(){t.restartnewgame()},3e3)},onChessBoardTouchStart:function(e){handleTip(e)},onChessBoardTouchMove:function(e){handleTip(e)},onChessBoardTouchEnd:function(e){if(this.tips_group.cantouch_flag){var t=this;if(t.handleTip(e),null!=t.loc&&null!=t.loc1&&(console.log("loc",t.loc.x,t.loc.y),console.log("loc1",t.loc1.x,t.loc1.y),t.loc1.x==t.loc.x&&t.loc1.y==t.loc.y))return t.fiveStone.step(t.loc.x,t.loc.y),t.update_play_date(),t.loc1.x=100,t.loc1.y=100,t.tips_group.cantouch_flag=!1,void t.$forceUpdate();t.loc1==t.loc&&null!=t.loc1||0!=t.fiveStone.chessBoard[t.loc.x][t.loc.y].stoneType||(t.loc1=JSON.parse((0,n.default)(t.loc)))}},restart:function(){var e=this;uni.showModal({title:"警告",content:"是否确定重新开始，重新开始后本局判输",success:function(t){t.confirm?(e.play_group[e.whichplayer].state="renshu",e.update_play_date(),e.winLoc.whowin=e.fiveStone.stone,e.winLoc.whowin_title="认输",e.winLoc.start=null,e.winLoc.end=null,e.fiveStone.preventStep(),e.$forceUpdate(),setTimeout(function(){e.restartnewgame()},3e3)):t.cancel}})},undo:function(){this.play_group[this.whichplayer].state="huiqi",this.update_play_date(),uni.showLoading({mask:!0,title:"等待对方回复"})},tap_jieshao:function(){uni.navigateTo({url:"../jieshao/jieshao"})},gotozml:function(){var e=this;uni.showModal({title:"警告",content:"是否确定要离开本局游戏，离开后无法继续",success:function(t){t.confirm?(e.play_group[e.whichplayer].state="renshu",clearInterval(e.setTime),e.update_play_date(),uni.reLaunch({url:"../index2/index2"})):t.cancel}})},start_play:function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,"false"!=this.tips_group.has_yaoqing_flag){e.next=6;break}return uni.showToast({title:"等待对手中。。。",icon:"none"}),e.abrupt("return");case 6:t.tips_group.show_menu_flag=!1,t.tips_group.cantouch_flag=!1,t.$forceUpdate();case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),play_circle:function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this,a={form:"get_wzq_dz_data",shuijishu:t.shuijishu},e.next=4,t.download_from_server(a,"sever_play_data");case 4:1==t.whichplayer&&1==t.agree_next_play&&t.sever_play_data[0]["next_tablenbr"].length>5&&(clearInterval(t.setTime),uni.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=2&shuijishu="+t.sever_play_data[0]["next_tablenbr"]})),t.play_group[1].player_nickname=t.sever_play_data[0].nickName1,t.play_group[1].player_avatarUrl=t.sever_play_data[0].avatarUrl1,t.play_group[2].player_nickname=t.sever_play_data[0].nickName2,t.play_group[2].player_avatarUrl=t.sever_play_data[0].avatarUrl2,1==t.whichplayer&&(t.play_group[2].state=t.sever_play_data[0].state2),2==t.whichplayer&&(t.play_group[1].state=t.sever_play_data[0].state1),t.$forceUpdate(),console.log(t.play_group),(t.fiveStone.chessboard_total_line.length<t.sever_play_data[0].chessboard.length||"agreehuiqi"==t.play_group[3-t.whichplayer].state)&&(console.log("change_history",t.fiveStone.chessboard_total_line),t.fiveStone.changehistory(t.sever_play_data[0].chessboard)),"none"!=t.play_group[3-t.whichplayer].state&&(t.tips_group.has_yaoqing_flag=!0,"renshu"==t.play_group[3-t.whichplayer].state?(t.play_group[t.whichplayer].state,t.update_play_date(),t.winLoc.whowin=t.whichplayer,t.winLoc.whowin_title="对方认输",t.tips_group.cantouch_flag=!1,t.$forceUpdate(),setTimeout(function(){t.restartnewgame()},3e3)):"ok"==t.play_group[3-t.whichplayer].state?(t.play_group[t.whichplayer].state="ok",t.update_play_date(),t.fiveStone.stone==t.whichplayer&&(t.tips_group.cantouch_flag=!0)):"huiqi"==t.play_group[3-t.whichplayer].state&&"agreehuiqi"!=t.play_group[t.whichplayer].state&&"notagreehuiqi"!=t.play_group[t.whichplayer].state?uni.showModal({content:"对方请求悔棋是否同意？",success:function(e){e.confirm?(t.fiveStone.undo(),t.fiveStone.stone==t.whichplayer&&t.fiveStone.undo(),t.winLoc.whowin=0,t.winLoc.whowin_title="",t.winLoc.start=null,t.winLoc.end=null,t.$forceUpdate(),t.play_group[t.whichplayer].state="agreehuiqi",t.update_play_date()):e.cancel&&(t.play_group[t.whichplayer].state="notagreehuiqi",t.update_play_date())}}):"notagreehuiqi"==t.play_group[3-t.whichplayer].state&&"ok"!=t.play_group[t.whichplayer].state?(uni.hideLoading(),uni.showToast({title:"对方不同意"}),t.play_group[t.whichplayer].state="ok",t.update_play_date()):"agreehuiqi"==t.play_group[3-t.whichplayer].state&&"ok"!=t.play_group[t.whichplayer].state?(uni.hideLoading(),uni.showToast({title:"对方同意"}),t.play_group[t.whichplayer].state="ok",t.update_play_date()):t.fiveStone.stone==t.whichplayer&&(t.tips_group.cantouch_flag=!0));case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),update_play_date:function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this,"",a="new_wzq_dz_play"+this.whichplayer+"_update",t.upload_to_server({form:a,nickName:t.userInfo.nickName,avatarUrl:t.userInfo.avatarUrl,openid:t.userInfo.openid,shuijishu:t.shuijishu,state:t.play_group[t.whichplayer].state,chessboard:t.fiveStone.chessboard_total_line,next_tablenbr:t.next_tablenbr});case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),restartnewgame:function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this,uni.showModal({content:"是否再来一局？",success:function(e){if(e.confirm){if(a.agree_next_play=!0,1==a.whichplayer)a.sever_play_data[0]["next_tablenbr"].length>5&&uni.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=2&shuijishu="+a.sever_play_data[0]["next_tablenbr"]});else if(2==a.whichplayer){var t=Math.floor(9e4*Math.random())+1e5,i=(new Date).valueOf()+String(t);a.next_tablenbr=i,a.update_play_date(),a.upload_to_server({form:"new_wzq_dz_start",userid:a.userInfo.userid,nickName:a.userInfo.nickName,phonenum:a.userInfo.phonenum,avatarUrl:a.userInfo.avatarUrl,openid:a.userInfo.openid,card_id:a.card_id,shuijishu:i}),clearInterval(a.setTime),uni.reLaunch({url:"../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=1&shuijishu="+i})}}else e.cancel&&clearInterval(a.setTime)}});case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),wxGetUserInfo:function(e){var t=this;t.userInfo.hasLogin?t.start_play():(console.log(e.detail.userInfo),e.detail.userInfo?uni.login({provider:"weixin",success:function(a){console.log("code:",a.code),t.login(e.detail.userInfo,a.code),t.upload_oauthData(e.detail.userInfo,a.code),t.start_play()}}):(console.log(333,"执行到这里，说明拒绝了授权"),uni.showToast({title:"为了您更好的体验,请先同意授权",icon:"none",duration:2e3})))},upload_oauthData:function(e,t){var a=this;uni.request({url:"https://kaikaiomg.applinzi.com/uni_app_upload.php",method:"POST",data:{form:"oauthData",userid:e.userid,nickName:e.nickName,avatarUrl:e.avatarUrl,city:e.city,country:e.country,gender:e.gender,language:e.language,province:e.province,code:t},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){200!==e.statusCode?console.log("请求失败:",e):(console.log("success_uodate_oauthData:",e.data[0]),a.setopenid(e.data[0].openid),a.setdbuserifo(e.data[0]))}})}})});t.default=c},"62a6":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'uni-view[data-v-357aa7e6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.userinfo[data-v-357aa7e6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}\n\n\t/** 棋盘 */.chess-board[data-v-357aa7e6]{margin:%?20?% auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column\n\t\t/* \twidth: 100%;\n        padding:40upx 40upx; */}\n\n\t/** 棋盘的每一行 */.chess-board .row[data-v-357aa7e6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%}\n\n\t/** 棋盘的每一个格 */.chess-board .cell[data-v-357aa7e6]{border-bottom:1px solid #000;border-right:1px solid #000;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}\n\n\t/** 每一行的第一个格子 */.chess-board .row .cell[data-v-357aa7e6]:first-child{border-left:1px solid #000}\n\n\t/** 第一行的每一个格子 */.chess-board .row:first-child .cell[data-v-357aa7e6]{border-top:1px solid #000}.chess-board .row .cell[data-v-357aa7e6]:last-child{border:0 solid #000;background-color:#f3f3f3}\n\n\t/** 第一行的每一个格子 */.chess-board .row:last-child .cell[data-v-357aa7e6]{border:0 solid #000;background-color:#f3f3f3}\n\n\t/** 下子的提示区域 */.step-tip[data-v-357aa7e6]{border:1px solid red;position:absolute}\n\n\t/** 棋盘的状态栏 */.chess-board-status-bar[data-v-357aa7e6]{margin-top:15px;margin-left:10px;margin-right:10px;height:90px;border:1px dashed #000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}\n\n\t/** 当前下的棋子类型 */.now-stone-bar[data-v-357aa7e6]{height:%?200?%;width:90px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}\n\n\t/** 当前子的类型 */.now-stone[data-v-357aa7e6]{width:%?50?%;height:%?50?%;border:1px solid #000;border-radius:%?25?%}.logo-img[data-v-357aa7e6]{width:50px;height:50px;border-radius:50px}.now-stone2[data-v-357aa7e6]{width:%?40?%;height:%?40?%;border:1px solid #000;border-radius:%?25?%}.logo-img2[data-v-357aa7e6]{width:40px;height:40px;border-radius:40px}\n\n\t/** 控制按钮栏 */.five-stone-control-bar[data-v-357aa7e6]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:100%;border-left:1px dashed #000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}\n\n\t/** 控制按钮 */\n\n\t/* button {\n\t\tflex: 1;\n\t\tmargin: 0 5px 0 5px;\n\t} */\n\n\t/** 胜利之后提示五连子的位置 */.win_tip[data-v-357aa7e6]{background-color:red;height:4px;position:absolute;-webkit-transform-origin:"0% 50%";-ms-transform-origin:"0% 50%";transform-origin:"0% 50%"}.bak_black[data-v-357aa7e6]{background-color:#000}.bak_white[data-v-357aa7e6]{background-color:#fff}.bak_black[data-v-357aa7e6]{background-color:#000}.bak_red[data-v-357aa7e6]{background-color:red}.bak_blue[data-v-357aa7e6]{background-color:#00f}.bak_cyan[data-v-357aa7e6]{background-color:#0ff}.black[data-v-357aa7e6]{color:#000}.white[data-v-357aa7e6]{color:#fff}.menu_view[data-v-357aa7e6]{position:fixed;top:%?0?%;width:%?750?%;height:100%;background:hsla(0,0%,78.4%,.5);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:100}.menu_item_view[data-v-357aa7e6]{background:rgba(30,144,255,.9);margin:%?60?% %?0?%;border-radius:%?20?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;border:%?1?% solid #000;font-size:%?35?%;color:#fff;font-weight:700;height:%?90?%;width:%?200?%}.uer-name[data-v-357aa7e6]{font-size:%?30?%}.board_bak_black[data-v-357aa7e6]{border:5px solid #000}.board_bak_white[data-v-357aa7e6]{border:5px solid #fff}.minbutton_style[data-v-357aa7e6]{width:%?180?%;height:%?80?%;z-index:10}.minbutton_style[data-v-357aa7e6]:active{width:%?180?%;height:%?80?%;opacity:.5;z-index:10}uni-page-body[data-v-357aa7e6]{background-color:#f3f3f3}body.?%PAGE?%[data-v-357aa7e6]{background-color:#f3f3f3}',""])},"7d50":function(e,t,a){"use strict";a.r(t);var i=a("33d8"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},e2da:function(e,t,a){"use strict";a.r(t);var i=a("0d04"),n=a("7d50");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("1f64");var l=a("2877"),r=Object(l["a"])(n["default"],i["a"],i["b"],!1,null,"357aa7e6",null);t["default"]=r.exports},f8fa:function(e,t,a){var i=a("62a6");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("36ec32f7",i,!0,{sourceMap:!1,shadowMode:!1})}}]);