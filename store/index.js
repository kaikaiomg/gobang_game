import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {

		userInfo: {
			nickName: "",
			avatarUrl: "",
			hasLogin: false,
			loginProvider: "weixin",
			openid: null,
			userid: 0,
			userid_name:"",
			phonenum: null,
			realname: "",
			vip_flag:false,
			vip_last_time:null,
			tips_last:999,
			tips_last_time:null,
		},

		luyouData: [],

	},
	mutations: {
		login(state, userInfo) {

			state.userInfo.loginProvider = "weixin";
			state.userInfo.hasLogin = true;
			state.userInfo.nickName = userInfo.nickName;
			state.userInfo.avatarUrl = userInfo.avatarUrl;
		},
		logout(state) {
		
			state.userInfo = {
				nickName: "",
				avatarUrl: "",
				hasLogin: false,
				loginProvider: "",
				openid: null,
				userid: 0,
				userid_name:"",
				phonenum: null,
				realname: "",
				jifen_month: 0,
				jifen_total: 0,
				ticket: 0,
			};

		},



		setphonenum(state, phonenum) {
			// state.phonenum = phonenum;
			state.userInfo.phonenum = phonenum; 
		},
		setopenid(state, openid) {
			// state.openid = openid;
			state.userInfo.openid = openid; 
		},
		setuserid(state, userid) {
			state.userInfo.userid = Number(userid);
			state.userInfo.userid_name ='U'+(Number(userid));
		},
		setjifen_total(state, jifen_total) {
		    state.userInfo.jifen_total = Number(jifen_total);
		},
	     setdbuserifo(state,dbuserifo) {
			// state.userid = Number(userid);
		//	state.userInfo.jifen_month = Number(jifen_month);
			state.userInfo.userid = Number(dbuserifo.user_id);
		    state.userInfo.userid_name ='U'+(Number(dbuserifo.user_id));
			state.userInfo.jifen_total = Number(dbuserifo.jifen_total);
			state.userInfo.jifen_month = Number(dbuserifo.jifen_month);
		    state.userInfo.ticket = Number(dbuserifo.ticket);
			// state.userInfo.vip_flag = false;
			// state.userInfo.tips_last = 9999;
		},
		
		
		
		cuttipslast(state) {
			state.userInfo.tips_last=state.userInfo.tips_last-1;
		},
		settipslast(state,tipsstr) {
			var data =tipsstr.split(","); //字符分割
			var lastdate = data[1];
			var nowdate = new Date().getDate();
			var oneDay = 24 * 60 * 60 * 1000;
			console.log('lastdate:',lastdate,'nowdate',nowdate)
			console.log('data[0]:',data[0],'data[1]',data[1])
            if( nowdate==lastdate){
				state.userInfo.tips_last=data[0];
			    state.userInfo.tips_last_time=nowdate;
			}
		
		},
		
		setluyouData(state, luyouData) {
			state.luyouData = luyouData;
			
		},


        

	},
	actions: {

	}

})

export default store
