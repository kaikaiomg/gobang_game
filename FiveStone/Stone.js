/** 棋子的类型 */
module.exports = {
    none:0,     //没有棋子
    black:1,    //黑子
    white:2,    //白子
	whitetips:3,    //白子提示
	blacktips:3, //黑子提示
    toString: function (i) {
        switch (i) {
            default:
                return 'none';
            case this.black:
                return 'black';
            case this.white:
                return 'white';
		    case this.whitetips:
			    return 'whitetips';	
			case this.blacktips:
				return 'blacktips';		
        }
    }
};