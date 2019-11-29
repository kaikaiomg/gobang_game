(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/play_online/play_online"],{

/***/ 64:
/*!********************************************************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/main.js?{"page":"pages%2Fplay_online%2Fplay_online"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _play_online = _interopRequireDefault(__webpack_require__(/*! ./pages/play_online/play_online.vue */ 65));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_play_online.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 65:
/*!*************************************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play_online/play_online.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _play_online_vue_vue_type_template_id_526433e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play_online.vue?vue&type=template&id=526433e4& */ 66);
/* harmony import */ var _play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play_online.vue?vue&type=script&lang=js& */ 68);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _play_online_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play_online.vue?vue&type=style&index=0&lang=css& */ 70);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _play_online_vue_vue_type_template_id_526433e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _play_online_vue_vue_type_template_id_526433e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play_online/play_online.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/*!********************************************************************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play_online/play_online.vue?vue&type=template&id=526433e4& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_template_id_526433e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play_online.vue?vue&type=template&id=526433e4& */ 67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_template_id_526433e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_template_id_526433e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 67:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play_online/play_online.vue?vue&type=template&id=526433e4& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 68:
/*!**************************************************************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play_online/play_online.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play_online.vue?vue&type=script&lang=js& */ 69);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play_online/play_online.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 23));

























































































var _vuex = __webpack_require__(/*! vuex */ 16);




var _FiveStone = _interopRequireDefault(__webpack_require__(/*! ../../FiveStone/FiveStone.js */ 42));

var _wuziqi = __webpack_require__(/*! ../../data/wuziqi.js */ 45);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =


{
  data: function data() {
    return {

      loacal_avatarUrl_loc: "../../static/nobody.png",

      fiveStone: null,
      winLoc: {
        whowin: 0,
        whowin_title: "",
        start: null,
        end: null,
        width: null,
        angle: null },

      setTime: null,
      loc1: null,
      loc: null,
      data_flag: null,
      whichplayer: 0,
      shuijishu: null,
      agree_next_play: false,
      next_tablenbr: null,
      play_group: [{},
      {
        player: 1,
        state: 'none',
        player_nickname: null,
        player_avatarUrl: null },

      {
        player: 1,
        state: 'none',
        player_nickname: null,
        player_avatarUrl: null }],



      tips_group: {
        cantouch_flag: true,
        mulu_flag: null,
        show_tips_flag: true,
        show_black_tips_flag: true,
        get_tips_flag: true,
        steps_limit: 60,
        table_name: "",
        show_wrong_choice_flag: false,
        show_tips_last_flag: false,
        show_dftx_flag: false,
        double_undo_flag: false,
        show_qiuzhu_flag: false,
        show_find_duishou_flag: false,
        show_menu_flag: false,
        has_yaoqing_flag: 'false',
        agreeundo_flag: false },

      sever_play_data: null };

  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(['userInfo'])),




  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "朋友，来一局五子棋",
      path: "/pages/play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu=" + this.shuijishu
      // path: "/pages/index/index?mulu_flag=ljms_hyyz&player=2&shuijishu=" + this.shuijishu,
    };
  },

  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(option) {var that;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:



              that = this;

              console.log('初始化棋盘');
              that.fiveStone = new _FiveStone.default(15, 0.98);
              that.fiveStone.setWinCallback(that.winCallback);
              that.loc = null;
              that.tips_group.mulu_flag = option.mulu_flag;
              that.tips_group.has_yaoqing_flag = option.has_yaoqing_flag;
              that.whichplayer = option.player;
              that.shuijishu = option.shuijishu;


              console.log(that.tips_group.mulu_flag);_context.t0 =
              option.mulu_flag;_context.next = _context.t0 ===

              "ljms_hyyz" ? 13 : _context.t0 ===









              "ljms_sjpd" ? 20 : 27;break;case 13:that.tips_group.show_dftx_flag = 3;that.tips_group.get_tips_flag = false;that.tips_group.show_tips_flag = false;that.tips_group.show_find_duishou_flag = true;that.tips_group.show_menu_flag = true;uni.setNavigationBarTitle({ title: '巅峰对决' });return _context.abrupt("break", 28);case 20:
              that.tips_group.show_dftx_flag = 3;
              that.tips_group.get_tips_flag = false;
              that.tips_group.show_tips_flag = false;
              that.tips_group.show_find_duishou_flag = true;
              that.tips_group.show_menu_flag = true;
              uni.setNavigationBarTitle({
                title: '随机配对' });return _context.abrupt("break", 28);case 27:return _context.abrupt("break", 28);case 28:







              that.$forceUpdate();
              that.play_group[that.whichplayer].state = 'ready';
              that.update_play_date();
              that.setTime = setInterval(function () {
                that.play_circle();
              }, 2000);case 32:case "end":return _context.stop();}}}, _callee, this);}));function onLoad(_x) {return _onLoad.apply(this, arguments);}return onLoad;}(),

  methods: _objectSpread({},
  (0, _vuex.mapMutations)(['settipslast', 'cuttipslast', 'login', 'logout', 'setopenid', 'settipslast', 'setphonenum',
  'setdbuserifo']), {

    handleTip: function handleTip(e) {
      //const self = getCurrentPages()[0];
      if (!this.fiveStone.canStep()) {
        return;
      }
      this.fiveStone.getStepPosition(e);
      this.loc = this.fiveStone.getStepLocation(e);

    },
    winCallback: function winCallback(winStone) {
      var that = this;
      that.winLoc.whowin = 3 - that.fiveStone.stone;
      if (that.winLoc.whowin == 1) {
        that.winLoc.whowin_title = "黑胜";
      };
      if (that.winLoc.whowin == 2) {
        that.winLoc.whowin_title = "白胜";
      };
      if (that.whichplayer == that.winLoc.whowin) {
        that.play_group[that.whichplayer].state = 'win';
        that.update_play_date();
      }
      if (that.whichplayer != that.winLoc.whowin) {
        that.play_group[that.whichplayer].state = 'loss';
        that.update_play_date();
      }
      that.$forceUpdate();
      that.fiveStone.preventStep();
      setTimeout(function () {
        that.restartnewgame();
      }, 3000);

    },
    onChessBoardTouchStart: function onChessBoardTouchStart(e) {
      handleTip(e);
    },
    onChessBoardTouchMove: function onChessBoardTouchMove(e) {
      handleTip(e);
    },
    onChessBoardTouchEnd: function onChessBoardTouchEnd(e) {
      //	console.log(e);

      if (!this.tips_group.cantouch_flag) {
        return;
      }
      var that = this;
      that.handleTip(e);
      //const loc = that.loc;


      if (that.loc != null && that.loc1 != null) {

        console.log('loc', that.loc.x, that.loc.y);
        console.log('loc1', that.loc1.x, that.loc1.y);
        if (that.loc1.x == that.loc.x && that.loc1.y == that.loc.y) {
          //var gettips_flag = that.fiveStone.canStepAt(loc.x, loc.y);
          that.fiveStone.step(that.loc.x, that.loc.y);
          that.update_play_date();
          that.loc1.x = 100;
          that.loc1.y = 100;
          that.tips_group.cantouch_flag = false;
          that.$forceUpdate();
          return;
        }
      }
      if ((that.loc1 != that.loc || that.loc1 == null) && that.fiveStone.chessBoard[that.loc.x][that.loc.y].stoneType ==
      0) {
        that.loc1 = JSON.parse(JSON.stringify(that.loc));
      }

    },
    /** * 重来*/
    restart: function restart() {
      var that = this;
      uni.showModal({
        title: "警告",
        content: "是否确定重新开始，重新开始后本局判输",
        success: function success(res) {
          if (res.confirm) {
            that.play_group[that.whichplayer].state = 'renshu';
            that.update_play_date();
            that.winLoc.whowin = that.fiveStone.stone;
            that.winLoc.whowin_title = "认输";
            that.winLoc.start = null;
            that.winLoc.end = null;
            that.fiveStone.preventStep();
            that.$forceUpdate();
            // clearInterval(that.setTime)
            setTimeout(function () {
              that.restartnewgame();
            }, 3000);
          } else if (res.cancel) {

          }
        } });


      //this.refreshFiveStoneAndClearWinTip();
    },
    /**悔棋 */
    undo: function undo() {
      this.play_group[this.whichplayer].state = 'huiqi';
      this.update_play_date();
      uni.showLoading({
        mask: true,
        title: "等待对方回复" });

      // 				this.$forceUpdate();
    },



    tap_jieshao: function tap_jieshao() {
      uni.navigateTo({
        url: "../jieshao/jieshao" });


    },
    gotozml: function gotozml() {
      var that = this;
      uni.showModal({
        title: "警告",
        content: "是否确定要离开本局游戏，离开后无法继续",
        success: function success(res) {
          if (res.confirm) {
            that.play_group[that.whichplayer].state = 'renshu';
            clearInterval(that.setTime);
            that.update_play_date();
            uni.reLaunch({
              url: "../index2/index2" });

          } else if (res.cancel) {

          }
        } });



    },

    start_play: function () {var _start_play = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                that = this;if (!(

                this.tips_group.has_yaoqing_flag == 'false')) {_context2.next = 6;break;}
                uni.showToast({
                  title: '等待对手中。。。',
                  icon: 'none' });return _context2.abrupt("return");case 6:




                that.tips_group.show_menu_flag = false;
                that.tips_group.cantouch_flag = false;
                that.$forceUpdate();case 9:case "end":return _context2.stop();}}}, _callee2, this);}));function start_play() {return _start_play.apply(this, arguments);}return start_play;}(),








    play_circle: function () {var _play_circle = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var that, post_data;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                that = this;
                post_data = {
                  'form': 'get_wzq_dz_data',
                  'shuijishu': that.shuijishu };_context3.next = 4;return (

                  that.download_from_server(post_data, 'sever_play_data'));case 4:

                if (that.whichplayer == 1 && that.agree_next_play == true) {
                  if (that.sever_play_data[0]['next_tablenbr'].length > 5) {
                    clearInterval(that.setTime);
                    uni.reLaunch({
                      url: "../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=2&shuijishu=" + that.sever_play_data[
                      0]['next_tablenbr'] });

                  }
                }

                that.play_group[1].player_nickname = that.sever_play_data[0].nickName1;
                that.play_group[1].player_avatarUrl = that.sever_play_data[0].avatarUrl1;

                that.play_group[2].player_nickname = that.sever_play_data[0].nickName2;
                that.play_group[2].player_avatarUrl = that.sever_play_data[0].avatarUrl2;

                if (that.whichplayer == 1) {
                  that.play_group[2].state = that.sever_play_data[0].state2;
                }
                if (that.whichplayer == 2) {
                  that.play_group[1].state = that.sever_play_data[0].state1;
                }
                that.$forceUpdate();
                console.log(that.play_group);


                if (that.fiveStone.chessboard_total_line.length < that.sever_play_data[0].chessboard.length || that.play_group[3 - that.whichplayer].state == 'agreehuiqi')
                {
                  console.log('change_history', that.fiveStone.chessboard_total_line);
                  that.fiveStone.changehistory(that.sever_play_data[0].chessboard);
                }

                if (that.play_group[3 - that.whichplayer].state != 'none') {
                  that.tips_group.has_yaoqing_flag = true;
                  if (that.play_group[3 - that.whichplayer].state == 'renshu') {
                    that.play_group[that.whichplayer].state == 'win';
                    // this.play_group[3-this.whichplayer].player_nickname == '';
                    // this.play_group[3-this.whichplayer].player_avatarUrl == '';
                    that.update_play_date();
                    that.winLoc.whowin = that.whichplayer;
                    that.winLoc.whowin_title = "对方认输";
                    that.tips_group.cantouch_flag = false;
                    that.$forceUpdate();
                    setTimeout(function () {
                      that.restartnewgame();
                    }, 3000);
                  } else if (that.play_group[3 - that.whichplayer].state == 'ok') {
                    that.play_group[that.whichplayer].state = 'ok';
                    that.update_play_date();
                    if (that.fiveStone.stone == that.whichplayer) {
                      that.tips_group.cantouch_flag = true;
                    }
                  } else if (that.play_group[3 - that.whichplayer].state == 'huiqi' &&
                  that.play_group[that.whichplayer].state != 'agreehuiqi' && that.play_group[that.whichplayer].state !=
                  'notagreehuiqi') {
                    uni.showModal({
                      content: "对方请求悔棋是否同意？",
                      success: function success(res) {
                        if (res.confirm) {

                          that.fiveStone.undo();
                          if (that.fiveStone.stone == that.whichplayer) {
                            that.fiveStone.undo();
                          }
                          that.winLoc.whowin = 0;
                          that.winLoc.whowin_title = "";
                          that.winLoc.start = null;
                          that.winLoc.end = null;
                          that.$forceUpdate();
                          that.play_group[that.whichplayer].state = 'agreehuiqi';
                          that.update_play_date();
                        } else if (res.cancel) {
                          that.play_group[that.whichplayer].state = 'notagreehuiqi';
                          that.update_play_date();
                        }
                      } });

                  } else if (that.play_group[3 - that.whichplayer].state == 'notagreehuiqi' && that.play_group[that.whichplayer].state != 'ok') {
                    uni.hideLoading();
                    uni.showToast({
                      title: "对方不同意" });

                    that.play_group[that.whichplayer].state = 'ok';
                    that.update_play_date();
                  } else if (that.play_group[3 - that.whichplayer].state == 'agreehuiqi' && that.play_group[that.whichplayer].state != 'ok') {
                    uni.hideLoading();
                    uni.showToast({
                      title: "对方同意" });

                    that.play_group[that.whichplayer].state = 'ok';
                    that.update_play_date();
                  } else {
                    if (that.fiveStone.stone == that.whichplayer) {
                      that.tips_group.cantouch_flag = true;
                    }
                  }


                }


                // console.log('stone',that.fiveStone.stone)
                // console.log('whichplayer',that.whichplayer)

                // that.tips_group.cantouch_flag = true;
              case 15:case "end":return _context3.stop();}}}, _callee3, this);}));function play_circle() {return _play_circle.apply(this, arguments);}return play_circle;}(),






    update_play_date: function () {var _update_play_date = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that, total_line, update_form;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                that = this;
                total_line = "";
                // var lochistory = that.fiveStone.history;
                // if (lochistory.length > 0) {
                // 	for (var i = 0; i < lochistory.length; i++) {
                // 		total_line += that.upchangetoabc(lochistory[i].x);
                // 		total_line += (15 - lochistory[i].y).toString();
                // 	}
                // }
                // console.log(total_line)
                update_form = 'new_wzq_dz_play' + this.whichplayer + '_update';
                that.upload_to_server({
                  'form': update_form,
                  'nickName': that.userInfo.nickName,
                  'avatarUrl': that.userInfo.avatarUrl,
                  'openid': that.userInfo.openid,
                  'shuijishu': that.shuijishu,
                  'state': that.play_group[that.whichplayer].state,
                  'chessboard': that.fiveStone.chessboard_total_line,
                  'next_tablenbr': that.next_tablenbr });case 4:case "end":return _context4.stop();}}}, _callee4, this);}));function update_play_date() {return _update_play_date.apply(this, arguments);}return update_play_date;}(),





    restartnewgame: function () {var _restartnewgame = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {var that;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                that = this;
                uni.showModal({
                  content: "是否再来一局？",
                  success: function success(res) {
                    if (res.confirm) {
                      that.agree_next_play = true;
                      if (that.whichplayer == 1) {

                        if (that.sever_play_data[0]['next_tablenbr'].length > 5) {
                          uni.reLaunch({
                            url: "../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=2&shuijishu=" + that.sever_play_data[
                            0]['next_tablenbr'] });

                        }
                      } else if (that.whichplayer == 2) {
                        var randnum = Math.floor(Math.random() * 90000) + 100000;
                        var randnstr = new Date().valueOf() + String(randnum);
                        that.next_tablenbr = randnstr;
                        that.update_play_date();
                        that.upload_to_server({
                          'form': 'new_wzq_dz_start',
                          'userid': that.userInfo.userid,
                          'nickName': that.userInfo.nickName,
                          'phonenum': that.userInfo.phonenum,
                          'avatarUrl': that.userInfo.avatarUrl,
                          'openid': that.userInfo.openid,
                          'card_id': that.card_id,
                          'shuijishu': randnstr });

                        clearInterval(that.setTime);
                        uni.reLaunch({
                          url: "../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=1&shuijishu=" +
                          randnstr });

                      }

                    } else if (res.cancel) {
                      clearInterval(that.setTime);
                    }
                  } });case 2:case "end":return _context5.stop();}}}, _callee5, this);}));function restartnewgame(_x2) {return _restartnewgame.apply(this, arguments);}return restartnewgame;}(),




    wxGetUserInfo: function wxGetUserInfo(e) {
      var that = this;
      if (that.userInfo.hasLogin) {
        that.start_play();
      } else {
        console.log(e.detail.userInfo);
        if (e.detail.userInfo) {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          uni.login({
            provider: 'weixin',
            success: function success(loginRes) {
              console.log("code:", loginRes.code);
              that.login(e.detail.userInfo, loginRes.code);
              that.upload_oauthData(e.detail.userInfo, loginRes.code);
              that.start_play();
            } });


        } else {
          console.log(333, '执行到这里，说明拒绝了授权');
          uni.showToast({
            title: "为了您更好的体验,请先同意授权",
            icon: 'none',
            duration: 2000 });


        }

      }



    },
    upload_oauthData: function upload_oauthData(userInfo, code) {
      var that = this;
      uni.request({
        url: 'https://kaikaiomg.applinzi.com/uni_app_upload.php',
        method: "POST",
        data: {
          'form': 'oauthData',
          'userid': userInfo.userid,
          'nickName': userInfo.nickName,
          'avatarUrl': userInfo.avatarUrl,
          'city': userInfo.city,
          'country': userInfo.country,
          'gender': userInfo.gender,
          'language': userInfo.language,
          'province': userInfo.province,
          'code': code },

        header: {
          'content-type': 'application/x-www-form-urlencoded' },

        success: function success(ret) {
          if (ret.statusCode !== 200) {
            console.log("请求失败:", ret);
          } else {
            console.log("success_uodate_oauthData:", ret.data[0]);
            // console.log("success_uodate_oauthData:", ret.data.openid)
            that.setopenid(ret.data[0].openid);
            that.setdbuserifo(ret.data[0]);

          }
        } });

    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 70:
/*!**********************************************************************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play_online/play_online.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play_online.vue?vue&type=style&index=0&lang=css& */ 71);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_online_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play_online/play_online.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[64,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/play_online/play_online.js.map