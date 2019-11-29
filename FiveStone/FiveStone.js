var Stone = require('./Stone.js');
var judger = require('./FiveStoneJudger.js');
// 
// import * as Stone from '/FiveStone/Stone.js';
// import * as judger from '/FiveStone/FiveStoneJudger.js';
/**
 * 五子棋的主控制类
 */
export default class FiveStone {

	/**
	 * 初始化棋盘
	 * @param   page                    当前页面页面
	 * @param   chessBoardSize          当前棋盘每行和列最多能下多少个子子
	 * @param   chessboardSizePercent   棋盘的宽度相当于屏幕宽度的百分比(0<x<1)
	 */
	constructor(chessBoardSize, chessboardSizePercent) {
		var self = this;
		var chessBoard = [];
		//占位
		var chessBoardtips = [];
		this.chessBoardSize = chessBoardSize;
		//占位
		var wins = [];
		var blackWin = [];
		var whiteWin = [];
		var count = 0;
		
		
		for (var r = 0; r < chessBoardSize; r++) {
			var row = [];
			var row1 = [];
			var cellRow = [];
			wins[r] = [];
			for (var c = 0; c < chessBoardSize; c++) {
				wins[r][c] = [];
				row.push({
					stoneType: Stone.none,
					//位置使用到的时候才计算
					pos: null
				});
				row1.push({
					stoneType: Stone.none,
					//位置使用到的时候才计算
					num: null
				});

			}
			chessBoard.push(row);
			chessBoardtips.push(row1);
		}
		this.wins=wins;
		this.chessBoard = chessBoard;
		this.chessBoardtips = chessBoardtips;
		//获取系统信息
		
		
		//横线
		for(var i = 0; i < 15; i++){
			for(var j= 0; j < 11; j++){
				for(var k = 0; k < 5; k++){
					wins[i][j+k][count] = true; 
				}
				count++;
			}
		}
		//竖线
		for(var i = 0; i < 15; i++){
			for(var j= 0; j < 11; j++){
				for(var k = 0; k < 5; k++){
					wins[j+k][i][count] = true;
				}
				count++;
			}
		}
		//斜线
		for(var i = 0; i < 11; i++){
			for(var j= 0; j < 11; j++){
				for(var k = 0; k < 5; k++){
					wins[i+k][j+k][count] = true;
				}
				count++;
			}
		}
		//反斜线
		for(var i = 0; i < 11; i++){
			for(var j= 14; j > 3; j--){
				for(var k = 0; k < 5; k++){
					wins[i+k][j-k][count] = true;
				}
				count++;
			}
		}
		this.count=count;
		for(var i = 0; i < count; i++){
			blackWin[i] = 0;
			whiteWin[i] = 0;
		}
		this.blackWin=blackWin;
		this.whiteWin=whiteWin;
		
		
		wx.getSystemInfo({
			success: function(res) {
				self.chessboardSizePX = res.windowWidth * chessboardSizePercent;
				console.log('%c棋盘大小:%c' +
					self.chessboardSizePX +
					'%cpx',
					'color:red;',
					'color:blue;',
					'color:black;'
				);
				self.cellSizePX = self.chessboardSizePX / (chessBoardSize);
				console.log('%c单元格大小:%c' +
					self.cellSizePX +
					'%cpx',
					'color:red;',
					'color:blue;',
					'color:black;'
				);
				self.halfCellSizePX = self.cellSizePX * 0.5;
			}
		});
		//当前下子的类型
		this.stone = Stone.black;
		//下子监听的回调集合
		this.onStepStoneCallbacks = [];
		//是否能够下子的开关
		this._canStep = true;
		//历史
		this.history = [];
		//设置裁判
		// this.deepthinksteps=0;
		this.deepthinksteps_total=0;
		this.deepthinksteps_deep_total=0;
		this.deepthinksteps_answer=[];
		this.chessboard_total_line='';
		// this.setJudger(judger);
	}


	changehistory(change_line) {
		var step = 0;
		var step_char=new Array(70);
		this.chessboard_total_line=change_line;
		console.log(change_line);
		for (var r = 0; r < change_line.length; r++) {

			if (   change_line[r] == "A" 
			    || change_line[r] == "B"
				|| change_line[r] == "C"
				|| change_line[r] == "D"
				|| change_line[r] == "E"
				|| change_line[r] == "F"
				|| change_line[r] == "G"
				|| change_line[r] == "H"
				|| change_line[r] == "I"
				|| change_line[r] == "J"
				|| change_line[r] == "K"
				|| change_line[r] == "L"
				|| change_line[r] == "M"
				|| change_line[r] == "N"
				|| change_line[r] == "O"
			) {
				step = step + 1;
				step_char[step-1] ="";
			}
			//console.log(change_line[r]);
			step_char[step-1] +=change_line.substring(r, r+1) ;
			
			
		}
		//console.log(step_char);
		this.history = [];
		this.resetchessBoard();
		for(var i = 0; i < this.count; i++){
			this.blackWin[i] = 0;
			this.whiteWin[i] = 0;
		}
		this.stone= Stone.black  ;
		for (var z = 0; z < step; z++) {
			var xxx = this.downchangetoabc(step_char[z].substring(0, 1));
			var yyy = 15-parseInt(step_char[z].substring(1)) ;
			var stoneTypeee= (z%2)==0? Stone.black :  Stone.white  ;
			this.chessBoard[xxx][yyy].stoneType =stoneTypeee;
			this.stone= (z%2)==0? Stone.white :  Stone.black  ;
			// console.log(stoneTypeee);
			for(var k = 0; k < this.count; k++){
				if(this.wins[xxx][yyy][k] && (this.stone == Stone.black)){
					this.whiteWin[k]++;
					this.blackWin[k]+=6;
					if(this.whiteWin[k] == 5){console.log("白胜");this._winCallback.call();}
				}
				if(this.wins[xxx][yyy][k] && (this.stone == Stone.white)){
					this.blackWin[k]++;
					this.whiteWin[k]+=6;
					if(this.blackWin[k] == 5){console.log("黑胜");this._winCallback.call();}
				}
			}
			this.history.push({
				'x': xxx,
				'y': yyy,
				'stoneType': stoneTypeee
			});
			
		}
       //  console.log(this.history);
	}
	resetchessBoard() {
		var chessBoard = [];
		for (var r = 0; r < this.chessBoardSize; r++) {
			var row = [];
			for (var c = 0; c < this.chessBoardSize; c++) {
				row.push({
					stoneType: Stone.none,
					pos: null
				});
			}
			chessBoard.push(row);
		}
		this.chessBoard = chessBoard;
	}
	
	resetchessBoardtips() {
		var chessBoardtips = [];
		for (var r = 0; r < this.chessBoardSize; r++) {
			var row1 = [];
			for (var c = 0; c < this.chessBoardSize; c++) {
				row1.push({
					stoneType: Stone.none,
					num: null
				});
			}
			chessBoardtips.push(row1);
		}
		this.chessBoardtips = chessBoardtips;
	}
	/**
	 * 通过事件获取下子在棋盘的位置
	 */
	getStepLocation(e) {
		var curTarget = e.currentTarget;
		var offset = {
			x: curTarget.offsetLeft,
			y: curTarget.offsetTop
		};
		var touch = e.touches[0];
		//相对棋盘的位置
		var clientPos = {
			x: touch.pageX - offset.x,
			y: touch.pageY - offset.y
		};
		var stepPos = {
			x: Math.ceil((clientPos.x - this.halfCellSizePX) / this.cellSizePX),
			y: Math.ceil((clientPos.y - this.halfCellSizePX) / this.cellSizePX)
		};

		if (stepPos.x < 0 || stepPos.x >= this.chessBoardSize ||
			stepPos.y < 0 || stepPos.y >= this.chessBoardSize) {
			return null;
		}

		return stepPos;
	}

	/**
	 * 通过事件获取下子在棋盘的绝对位置
	 */
	getStepPosition(e) {
		var curTarget = e.currentTarget;
		var stepPos = this.getStepLocation(e);
		if (stepPos == null) {
			return null;
		}
		console.log(stepPos.x, stepPos.y);
		var absPos = {
			x: 0,
			y: 0
		};
		//后面的那个1像素怎么出来的我也不知道，反正减了之后位置看起来正很多
		absPos.x = stepPos.x * this.cellSizePX + curTarget.offsetLeft - this.halfCellSizePX - 1;
		absPos.y = stepPos.y * this.cellSizePX + curTarget.offsetTop - this.halfCellSizePX - 1;
		this.chessBoard[stepPos.x][stepPos.y].pos = absPos;
		//console.log(absPos.x, absPos.y);
		return absPos;
	}

	/**
	 * 下棋，设置的是基于棋盘的坐标
	 * @return  返回true就是下子成功，否则为失败
	 */
	step(x, y) {
		// console.log(this.canStepAt(x, y),x,y);
		if (this.canStepAt(x, y)) {
			// console.log()
			this.chessBoard[x][y].stoneType = this.nowStone();
			const nowStone = this.nowStone();
			this.stone = nowStone == Stone.black ? Stone.white : Stone.black;
			this.onStepStone(nowStone, x, y);

			if (!(this.history instanceof Array)) {
				this.history = [];
			}
			//插入到历史
			this.history.push({
				'x': x,
				'y': y,
				'stoneType': nowStone
			});
			// this.judge(nowStone, x, y);
			//console.log("Stone",this.stone);
			for(var k = 0; k < this.count; k++){
				if(this.wins[x][y][k] && (this.stone == Stone.black)){
					this.whiteWin[k]++;
					this.blackWin[k]+=6;
					if(this.whiteWin[k] == 5){console.log("白胜");this._winCallback.call();}
				}
				if(this.wins[x][y][k] && (this.stone == Stone.white)){
					this.blackWin[k]++;
					this.whiteWin[k]+=6;
					if(this.blackWin[k] == 5){console.log("黑胜");this._winCallback.call();}
				}
			}
		    var total_line="";
			if (this.history.length > 0) {
				for (var i = 0; i < this.history.length; i++) {
					total_line += this.upchangetoabc(this.history[i].x);
					total_line += (15 - this.history[i].y).toString();
				}
			}
			this.chessboard_total_line=total_line
			
			console.log("chessboard_total_line",this.chessboard_total_line);
			//console.log("whiteWin",this.whiteWin);
			//console.log("blackWin",this.blackWin);
			return true;
		}
		return false;
	}

	/**
	 * 悔棋
	 */
	undo() {
		
		if (!(this.history instanceof Array) || this.history.length <= 0) {
			return;
		}
	   const lastStoneIndex = this.history.length - 1;
	   const lastStone = this.history[lastStoneIndex];
		for(var k = 0; k < this.count; k++){
			if(this.wins[lastStone.x][lastStone.y][k] && (this.stone == Stone.black)){
				this.whiteWin[k]--;
				this.blackWin[k]-=6;
			}
			if(this.wins[lastStone.x][lastStone.y][k] && (this.stone == Stone.white)){
				this.blackWin[k]--;
				this.whiteWin[k]-=6;
			}
		}
		// console.log("whiteWin",this.whiteWin);
		// console.log("blackWin",this.blackWin);
		this.stone = lastStone.stoneType;
		this.history.splice(lastStoneIndex, 1);
		this.chessBoard[lastStone.x][lastStone.y].stoneType = Stone.none;
		
		var total_line="";
		if (this.history.length > 0) {
			for (var i = 0; i < this.history.length; i++) {
				total_line += this.upchangetoabc(this.history[i].x);
				total_line += (15 - this.history[i].y).toString();
			}
		}
		this.chessboard_total_line=total_line
		
		this.allowStep();
		
	}

	/**
	 * 判断该棋子是否能够下
	 */
	canStepAt(x, y) {
		if (x < 0 || x >= this.chessBoardSize ||
			y < 0 || y >= this.chessBoardSize ||
			this.chessBoard[x][y].stoneType != Stone.none) {
			return false;
		}
		return this._canStep;
	}

	/**
	 * 当触发了下子的事件的时候
	 */
	onStepStone(nowStone, x, y) {
		if (this.onStepStoneCallbacks instanceof Array) {
			for (var i in this.onStepStoneCallbacks) {
				const cb = this.onStepStoneCallbacks[i];
				if (typeof(cb) === 'function') {
					cb.call(this, nowStone, x, y);
				}
			}
		}
	}

	/**
	 * 添加下子的监听器
	 * @return 如果返回0则代表插入失败，成功返回索引
	 */
	addOnStepStoneCallback(func) {
		if (!(this.onStepStoneCallbacks instanceof Array)) {
			this.onStepStoneCallbacks = [];
		}
		if (typeof(func) == 'function') {
			//push以后会返回数组的长度，所以减一之后就会是对应的索引
			return this.onStepStoneCallbacks.push(func) - 1;
		}
		return 0;
	}

	/**
	 * 通过索引删除下子的监听器
	 */
	removeOnStepStoneCallback(index) {
		if (this.onStepStoneCallbacks instanceof Array) {
			if (this.onStepStoneCallbacks.length > index) {
				this.onStepStoneCallbacks.splice(index, 1);
			}
		}
	}

	/**
	 * 重新开局
	 */
	restart() {
		this.stone = Stone.black;
		for (var r in this.chessBoard) {
			for (var c in this.chessBoard[r]) {
				this.chessBoard[r][c].stoneType = Stone.none;
			}
		}
		//清空历史
	    for(var i = 0; i < this.count; i++){
			this.blackWin[i] = 0;
			this.whiteWin[i] = 0;
		}
		this.chessboard_total_line=''
		this.history = [];
		this.allowStep();
	}

	/**
	 * 阻止下子
	 */
	preventStep() {
		this._canStep = false;
	}

	/**
	 * 允许下子
	 */
	allowStep() {
		this._canStep = true;
	}

	/**
	 * 获取当前是下的黑子还是白子
	 */
	nowStone() {
		return this.stone;
	}

	/**
	 * 返回当前是否允许下子
	 */
	canStep() {
		return this._canStep;
	}

	/**
	 * 进行裁判(下子成功之后触发)
	 * @param stepStone 当前下子的类型
	 * @param x         下子基于棋盘的x坐标
	 * @param y         下子基于棋盘的y坐标
	 */
// 	judge(stepStone, x, y) {
// 		if (typeof(this._judger) == 'function') {
// 			this._judger.call(this, stepStone, x, y, this._winCallback);
// 		}
// 	}
// 
// 	/**
// 	 * 设置裁判回调
// 	 */
// 	setJudger(func) {
// 		if (typeof(func) == 'function') {
// 			this._judger = func;
// 		}
// 	}

	/**
	 * 设置胜利之后的回调
	 */
	setWinCallback(func) {
		if (typeof(func) == 'function') {
			this._winCallback = func;
		}
	}
	upchangetoabc(nbrabc) {
		var strbnrabc = nbrabc.toString();
		switch (strbnrabc) {
			case "0":return "A";break;
			case "1":return "B";break;
			case "2":return "C";break;
			case "3":return "D";break;
			case "4":return "E";break;
			case "5":return "F";break;
			case "6":return "G";break;
			case "7":return "H";break;
			case "8":return "I";break;
			case "9":return "J";break;
			case "10":return "K";break;
			case "11":return "L";break;
			case "12":return "M";break;
			case "13":return "N";break;
			case "14":return "O";break;
			case "A":return "0";break;
			case "B":return "1";break;
			case "D":return "2";break;
			case "C":return "3";break;
			case "E":return "4";break;
			case "F":return "5";break;
			case "G":return "6";break;
			case "H":return "7";break;
			case "I":return "8";break;
			case "J":return "9";break;
			case "K":return "10";break;
			case "L":	return "11";break;
			case "M":return "12";break;
			case "N":return "13";break;
			case "O":return "14";break;
			default:break;
		}
	};
	downchangetoabc(nbrabc) {
		var strbnrabc = nbrabc.toString();
		switch (strbnrabc) {
			case "A":return "0";break;
			case "B":return "1";break;
			case "C":return "2";break;
			case "D":return "3";break;
			case "E":return "4";break;
			case "F":return "5";break;
			case "G":return "6";break;
			case "H":return "7";break;
			case "I":return "8";break;
			case "J":return "9";break;
			case "K":return "10";break;
			case "L":return "11";break;
			case "M":return "12";break;
			case "N":return "13";break;
			case "O":return "14";break;
			case "0":return "A";break;
			case "1":return "B";break;
			case "2":return "D";break;
			case "3":return "C";break;
			case "4":return "E";break;
			case "5":return "F";break;
			case "6":return "G";break;
			case "7":return "H";break;
			case "8":return "I";break;
			case "9":return "J";break;
			case "10":return "K";break;
			case "11":return "L";break;
			case "12":return "M";break;
			case "13":return "N";break;
			case "14":return "O";break;
			default:
				break;
		}
	};
	
	
	computerAI(stoneType){
		var whiteScore = [];
		var blackScore = [];
		var max = 0;
		var u = 0, v = 0;
		for(var i = 0; i < 15; i++){
			whiteScore[i] = [];
			blackScore[i] = [];
			for(var j = 0; j < 15; j++){
				whiteScore[i][j] = 0;
				blackScore[i][j] = 0;
			}
		}
		var scoretable=[];
		if(stoneType==Stone.black){scoretable=[200,400,2000,100000,220,420,2100,200000];}
		if(stoneType==Stone.white){scoretable=[220,420,2100,200000,200,400,2000,100000];}
		for(var i = 0; i < 15; i++){
			for(var j = 0; j < 15; j++){
				if(this.chessBoard[i][j].stoneType == Stone.none){
					for(var k = 0; k < this.count; k++){
						if(this.wins[i][j][k]){
							if(this.whiteWin[k] == 1){
								whiteScore[i][j] += scoretable[0];
							}
							else if(this.whiteWin[k] == 2){
								whiteScore[i][j] +=  scoretable[1];
							}
							else if(this.whiteWin[k] == 3){
								whiteScore[i][j] +=  scoretable[2];
							}
							else if(this.whiteWin[k] == 4){
								whiteScore[i][j] +=  scoretable[3];
							}
	
							if(this.blackWin[k] == 1){
								blackScore[i][j] +=  scoretable[4];
							}
							else if(this.blackWin[k] == 2){
								blackScore[i][j] +=  scoretable[5];
							}
							else if(this.blackWin[k] == 3){
								blackScore[i][j] +=  scoretable[6];
							}
							else if(this.blackWin[k] == 4){
								blackScore[i][j] +=  scoretable[7];
							}
						}
					}
					if(whiteScore[i][j] > max){
						max = whiteScore[i][j];
						u = i;
						v = j;					
					}
					else if(whiteScore[i][j] == max){
						if(blackScore[i][j] > blackScore[u][v]){
							u = i;
							v = j;						
						}
					}
	
					if(blackScore[i][j] > max){
						max = blackScore[i][j];
						u = i;
						v = j;					
					}
					else if(blackScore[i][j] == max){
						if(whiteScore[i][j] > whiteScore[u][v]){
							u = i;
							v = j;						
						}
					}
				}
			}
		}
		var info={"x":u,"y":v};
		return info;
	}
	
	
	
	computerAItreesearch(stoneType1,blackWin,whiteWin,chessBoard){
        var treearray=[]; 
		var whiteScore = [];
		var blackScore = [];
		var max = 0;
		var u = 0, v = 0;
		for(var i = 0; i < 15; i++){
			whiteScore[i] = [];
			blackScore[i] = [];
			for(var j = 0; j < 15; j++){
				whiteScore[i][j] = 0;
				blackScore[i][j] = 0;
			}
		}
		var scoretable=[];
		if(stoneType1==Stone.black){scoretable=[20,400,2000,100000,21,402,2005,200000];}
		if(stoneType1==Stone.white){scoretable=[21,402,2005,200000,20,400,2000,100000];}
		for(var i = 0; i < 15; i++){
			for(var j = 0; j < 15; j++){
				if(chessBoard[i][j] == Stone.none){
					for(var k = 0; k < this.count; k++){
						if( this.wins[i][j][k] ){ 
							if(this.whiteWin[k] == 4){
								whiteScore[i][j] += scoretable[3];
							}
							else if(this.whiteWin[k] == 3){
								whiteScore[i][j] +=  scoretable[2];
							}
							else if(this.whiteWin[k] == 2){
								whiteScore[i][j] +=  scoretable[1];
							}
							else if(this.whiteWin[k] == 1){
								whiteScore[i][j] +=  scoretable[0];
							}
								
							if(this.blackWin[k] == 4){
								blackScore[i][j] +=  scoretable[7];
							}
							else if(this.blackWin[k] == 3){
								blackScore[i][j] +=  scoretable[6];
							}
							else if(this.blackWin[k] == 2){
								blackScore[i][j] +=  scoretable[5];
							}
							else if(this.blackWin[k] == 1){
								blackScore[i][j] +=  scoretable[4];
							}
							
							if(stoneType1==Stone.black && ((blackWin[k] >1 && blackWin[k] <6)|| (whiteWin[k] >3 && whiteWin[k] <6))){
								if(blackWin[k] ==4 || blackWin[k] ==5){
									treearray=[];
									var info =this.moniStepForWins(stoneType1,blackWin,whiteWin,i,j,chessBoard)
									treearray.push({stonetype:stoneType1,x:i,y:j,blackScore:blackScore[i][j],winflag:1,whiteWin:info['whiteWin'],blackWin:info['blackWin'],chessBoard:info['chessBoardcopy']});
									return treearray;
								}
								else if(whiteWin[k] ==4){
									treearray=[];
									var info =this.moniStepForWins(stoneType1,blackWin,whiteWin,i,j,chessBoard) 
									treearray.push({stonetype:stoneType1,x:i,y:j,blackScore:blackScore[i][j],winflag:0,whiteWin:info['whiteWin'],blackWin:info['blackWin'],chessBoard:info['chessBoardcopy']}); 	
									return treearray;
								}
								else if((blackWin[k]>1 && blackWin[k]<6 && blackWin[k-1]>1 && blackWin[k-1]<6   && k<331)
							       	|| (blackWin[k]>1 && blackWin[k]<6 && blackWin[k-12]>1 && blackWin[k-12]<6   && k>330)|| blackWin[k]>2){
									var info =this.moniStepForWins(stoneType1,blackWin,whiteWin,i,j,chessBoard)
									if (treearray.length<1){
										treearray.push({stonetype:stoneType1,x:i,y:j,blackScore:blackScore[i][j],winflag:0,whiteWin:info['whiteWin'],blackWin:info['blackWin'],chessBoard:info['chessBoardcopy']});
									}
									else if(treearray[treearray.length-1]['x']!=i || treearray[treearray.length-1]['y']!=j){
										treearray.push({stonetype:stoneType1,x:i,y:j,blackScore:blackScore[i][j],winflag:0,whiteWin:info['whiteWin'],blackWin:info['blackWin'],chessBoard:info['chessBoardcopy']});
									}
									else if(treearray[treearray.length-1]['blackScore']!=blackScore[i][j]){
										treearray[treearray.length-1]['blackScore']=blackScore[i][j]
									}
									
									
								}
								//console.log('black',i,'-',j);
							}
							if(stoneType1==Stone.white && ((blackWin[k] >2 && blackWin[k] <6)|| (whiteWin[k] >3 && whiteWin[k] <6))){
						    	if(whiteWin[k] ==4 ){
						    		treearray=[];
									
									var info =this.moniStepForWins(stoneType1,blackWin,whiteWin,i,j,chessBoard)
									treearray.push({stonetype:stoneType1,x:i,y:j,blackScore:blackScore[i][j],winflag:2,whiteWin:info['whiteWin'],blackWin:info['blackWin'],chessBoard:info['chessBoardcopy']});
									return treearray;
						    	}
						    	else if(blackWin[k] ==4 || blackWin[k] ==5){
						    		treearray=[];
						    		var info =this.moniStepForWins(stoneType1,blackWin,whiteWin,i,j,chessBoard)
						    		treearray.push({stonetype:stoneType1,x:i,y:j,blackScore:blackScore[i][j],winflag:0,whiteWin:info['whiteWin'],blackWin:info['blackWin'],chessBoard:info['chessBoardcopy']});
									return treearray;
						    	}
						    	else if (
								   (blackWin[k] >2 && blackWin[k-1] >2  &&  blackWin[k-2] !=3 &&   blackWin[k] <6 && blackWin[k-1] <6 && k<331)
								|| (blackWin[k] >2 && blackWin[k+1] >2  &&  blackWin[k+2] !=3 &&  blackWin[k] <6 &&   blackWin[k+1] <6 && k<331)
								|| (blackWin[k] >2 && blackWin[k+12] >2 &&  blackWin[k+24] !=3 &&  blackWin[k] <6 &&   blackWin[k+12] <6 && k>330)
								|| (blackWin[k] >2 && blackWin[k-12] >2 &&  blackWin[k-24] !=3 &&  blackWin[k] <6 &&   blackWin[k-12] <6 && k>330)
								||  blackWin[k] >3 ){
						    		var info =this.moniStepForWins(stoneType1,blackWin,whiteWin,i,j,chessBoard)
									if (treearray.length<1){
										treearray.push({stonetype:stoneType1,x:i,y:j,blackScore:blackScore[i][j],winflag:0,whiteWin:info['whiteWin'],blackWin:info['blackWin'],chessBoard:info['chessBoardcopy']});
									}
									else if(treearray[treearray.length-1]['x']!=i || treearray[treearray.length-1]['y']!=j){
										treearray.push({stonetype:stoneType1,x:i,y:j,blackScore:blackScore[i][j],winflag:0,whiteWin:info['whiteWin'],blackWin:info['blackWin'],chessBoard:info['chessBoardcopy']});
									}
									else if(treearray[treearray.length-1]['blackScore']!=blackScore[i][j]){
										treearray[treearray.length-1]['blackScore']=blackScore[i][j]
									}
									
						    	}
								
								//console.log('white',i,'-',j);
						   }
						}
					}
				}
			}
		}
	     treearray.sort(function(a,b){ return b.blackScore-a.blackScore});
		 return treearray;
	}
	moniStepForWins(stoneType1,blackWin,whiteWin,x,y,chessBoard){
		var whiteWincopy=JSON.parse(JSON.stringify(whiteWin));
		var blackWincopy=JSON.parse(JSON.stringify(blackWin));
	    var chessBoardcopy=JSON.parse(JSON.stringify(chessBoard));
	    chessBoardcopy[x][y] =stoneType1;
		for(var k = 0; k < this.count; k++){
			if(this.wins[x][y][k] && (stoneType1 == Stone.white)){
				whiteWincopy[k]= whiteWincopy[k]+1;
				blackWincopy[k]= blackWincopy[k]+6;
			}
			if(this.wins[x][y][k] && (stoneType1 == Stone.black)){
				whiteWincopy[k]= whiteWincopy[k]+6;
				blackWincopy[k]= blackWincopy[k]+1;
			}
			
			
		}
		var info={"blackWin":blackWincopy,"whiteWin":whiteWincopy,"chessBoardcopy":chessBoardcopy};
		
		return info;
	}
	
	shuansha(stoneType1,blackWin,whiteWin,longline,chessBoard,deeplevel){

			this.deepthinksteps_total--;
			this.deepthinksteps_deep_total--;
			var deeplevel1=deeplevel-1;
			if(deeplevel1==12  ){this.deepthinksteps_deep_total=600;}
			if(deeplevel1==11 ){this.deepthinksteps_deep_total=200;}
			if(deeplevel1==10 ){this.deepthinksteps_deep_total=200;}
			if(deeplevel1==9 ){this.deepthinksteps_deep_total=100;}
			if(this.deepthinksteps_total<0 || deeplevel1<0 ||this.deepthinksteps_deep_total<0){return;}
			// console.log('deepthinksteps_total',this.deepthinksteps_total);
			var treearray  =this.computerAItreesearch(stoneType1,blackWin,whiteWin,chessBoard);
			
			if(stoneType1==Stone.white && deeplevel1==10 ){
			    
				for (var i = 0; i < treearray.length; i++) {
					var longline_white=null	
					var node=treearray[i]
				    longline_white=longline_white+'|'+String(node.x)+','+String(node.y)+'-'+stoneType1;
					this.deepthinksteps_answer.push(longline_white)
				}
				
				return ;
			}
			
			console.log(treearray)
			if (treearray.length==0 && stoneType1 == Stone.black){
				console.log('黑棋没有划三了',longline)
				return 10;
			}
		    else if (treearray.length==0 && stoneType1 == Stone.white){
				console.log('白棋没有要堵了',longline)
				return 20;
			}
			else{
				var wincount=0;
				var notingdocount=0;
				for (var i = 0; i < treearray.length; i++) {
					var node=treearray[i]
				    var longline1=longline+'|'+String(node.x)+','+String(node.y)+'-'+stoneType1;
					
					
					if(treearray[i].winflag==1){
						console.log('黑胜--deepthinksteps_total',this.deepthinksteps_total,deeplevel,this.deepthinksteps_deep_total,'级',longline1);
						this.deepthinksteps_deep_total+=120;
						this.deepthinksteps_total+=60;
						this.deepthinksteps_answer.push(longline1)
						return 1;
					}
					else if(treearray[i].winflag==2){
						console.log('白胜--deepthinksteps_total',this.deepthinksteps_total,deeplevel,this.deepthinksteps_deep_total,'级',longline1); 
						return 2;
					}
					else{
						    console.log('继续--deepthinksteps_total',this.deepthinksteps_total,deeplevel,this.deepthinksteps_deep_total,'级',longline1)
						    var stoneType2=  stoneType1==Stone.black? Stone.white :  Stone.black;
							//console.log('deepthinksteps_total',this.deepthinksteps_total,'stoneType',stoneType2,node.blackWin,node.whiteWin,longline1,node.chessBoard)
							var answer  =this.shuansha(stoneType2,node.blackWin,node.whiteWin,longline1,node.chessBoard,deeplevel1);
							if (answer==2){   return ;}
							else if (answer==20 ){  continue ; }
							else if (answer==1 && stoneType1 == Stone.white ){  wincount++;  continue ;}
							else if (answer==1 && stoneType1 == Stone.black ){  return 1 ;}
							else if (answer==10 ){ return ; }
							else{ 
							}
					}
				    
			    }
			    //console.log('wincount',wincount,"-", treearray.length,'--',deeplevel,'级')
				if( treearray.length== wincount &&  wincount>0 ){ return 1 ;}
				if( treearray.length!= wincount &&  wincount>0 ){ this.deepthinksteps_answer=[]}
				
			}
			
	}
	
	deepthinkshuansha(stoneType1,blackWin,whiteWin,chessBoard){
		this.deepthinksteps_answer=[];
		console.log('begin')
		this.deepthinksteps_total=6000;
		this.deepthinksteps_deep_total=600;
     	this.shuansha(stoneType1,blackWin,whiteWin,"",chessBoard,11);
		console.log(this.deepthinksteps_answer)
		console.log('over')
		return this.deepthinksteps_answer;
	}
}
