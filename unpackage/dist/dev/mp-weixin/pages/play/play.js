(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/play/play"],{

/***/ 36:
/*!******************************************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/main.js?{"page":"pages%2Fplay%2Fplay"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _play = _interopRequireDefault(__webpack_require__(/*! ./pages/play/play.vue */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_play.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 37:
/*!***********************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play/play.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _play_vue_vue_type_template_id_b5c74934___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.vue?vue&type=template&id=b5c74934& */ 38);
/* harmony import */ var _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.vue?vue&type=script&lang=js& */ 40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.vue?vue&type=style&index=0&lang=css& */ 46);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _play_vue_vue_type_template_id_b5c74934___WEBPACK_IMPORTED_MODULE_0__["render"],
  _play_vue_vue_type_template_id_b5c74934___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play/play.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/*!******************************************************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play/play.vue?vue&type=template&id=b5c74934& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_b5c74934___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play.vue?vue&type=template&id=b5c74934& */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_b5c74934___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_b5c74934___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 39:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play/play.vue?vue&type=template&id=b5c74934& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 40:
/*!************************************************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play/play.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play.vue?vue&type=script&lang=js& */ 41);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play/play.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      wuziqitips: [],
      mistakes_collection_list: [],
      mistakes_collection_newlist: [],
      fiveStone: null,
      winLoc: {
        whowin: 0,
        whowin_title: "",
        start: null,
        end: null,
        width: null,
        angle: null },

      loc: null,
      data_flag: null,

      tips_group: {
        cuoti_num: 0,
        cuoti_total_num: 0,
        mulu_flag: null,
        show_tips_flag: true,
        show_black_tips_flag: true,
        get_tips_flag: true,
        steps_limit: 600,
        table_name: "",
        show_wrong_choice_flag: false,
        show_right_choice_flag: false,
        show_tips_last_flag: false,
        show_dftx_flag: false,
        double_undo_flag: false,
        show_qiuzhu_flag: false,
        show_restart_flag: true,
        show_undo_flag: true,
        show_find_duishou_flag: false } };


  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(['userInfo'])),

  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(option) {var that;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

              that = this;

              console.log('初始化棋盘');
              that.fiveStone = new _FiveStone.default(15, 0.98);
              that.fiveStone.setWinCallback(that.winCallback);
              that.loc = null;
              that.tips_group.mulu_flag = option.mulu_flag;
              console.log(that.tips_group.mulu_flag);_context.next = 9;return (
                this.get_storage_data("mistakes_collection", "mistakes_collection_list"));case 9:
              that.mistakes_collection_newlist = that.mistakes_collection_list.concat();
              console.log('mistakes_collection_list_new', that.mistakes_collection_list_new);_context.t0 =
              option.mulu_flag;_context.next = _context.t0 ===
              "dplx_hykj" ? 14 : _context.t0 ===








              "dplx_pykj" ? 20 : _context.t0 ===








              "dplx_kjwb" ? 26 : _context.t0 ===







              "dpcs_hykj" ? 31 : _context.t0 ===








              "dpcs_pykj" ? 37 : _context.t0 ===








              "dpcs_kjwb" ? 43 : _context.t0 ===








              "dpcs_wdct" ? 49 : _context.t0 ===
















              "bdms_srdy" ? 61 : _context.t0 ===






              "bdms_rjmspt" ? 65 : _context.t0 ===









              "bdms_rjmsdy" ? 72 : _context.t0 ===









              "ljms_hyyz" ? 79 : 85;break;case 14:that.tips_group.show_tips_last_flag = true;that.tips_group.show_qiuzhu_flag = true;that.tips_group.table_name = "wzq_hy_data";that.fiveStone.changehistory("H8H9I9");uni.setNavigationBarTitle({ title: '打谱练习-花月' });return _context.abrupt("break", 86);case 20:that.tips_group.show_tips_last_flag = true;that.tips_group.show_qiuzhu_flag = true;that.tips_group.table_name = "wzq_py_data";that.fiveStone.changehistory("H8I9I7");uni.setNavigationBarTitle({ title: '打谱练习-蒲月' });return _context.abrupt("break", 86);case 26:that.tips_group.show_tips_last_flag = true;that.tips_group.table_name = "wzq_kjwb_data";that.tips_group.steps_limit = 11;uni.setNavigationBarTitle({ title: '打谱练习-开局五步' });return _context.abrupt("break", 86);case 31:that.tips_group.show_tips_last_flag = true;that.tips_group.show_black_tips_flag = false;that.tips_group.table_name = "wzq_hy_data";that.fiveStone.changehistory("H8H9I9");uni.setNavigationBarTitle({ title: '打谱测试-花月' });return _context.abrupt("break", 86);case 37:that.tips_group.show_tips_last_flag = true;that.tips_group.show_black_tips_flag = false;that.tips_group.table_name = "wzq_py_data";that.fiveStone.changehistory("H8I9I7");uni.setNavigationBarTitle({ title: '打谱测试-蒲月' });return _context.abrupt("break", 86);case 43:that.tips_group.show_tips_last_flag = true;that.tips_group.show_black_tips_flag = false;that.tips_group.table_name = "wzq_kjwb_data";that.tips_group.steps_limit = 11;uni.setNavigationBarTitle({ title: '打谱测试-开局五步' });return _context.abrupt("break", 86);case 49:that.tips_group.show_tips_last_flag = true;that.tips_group.show_black_tips_flag = true;that.tips_group.get_tips_flag = false;that.tips_group.cuoti_total_num = that.mistakes_collection_list.length;that.winLoc.whowin = 1;that.tips_group.cuoti_num = 0;that.tips_group.show_restart_flag = false;that.tips_group.show_undo_flag = false;that.winLoc.whowin_title = that.tips_group.cuoti_num + 1 + "/" + that.tips_group.cuoti_total_num;that.fiveStone.changehistory(that.mistakes_collection_list[0].total_line); // that.fiveStone.chessBoardtips=that.mistakes_collection_list[0].tips;
              uni.setNavigationBarTitle({ title: '打谱测试-我的错题' });return _context.abrupt("break", 86);case 61:that.tips_group.get_tips_flag = false;that.tips_group.show_tips_flag = false;uni.setNavigationBarTitle({ title: '双人本地对弈' });return _context.abrupt("break", 86);case 65:that.tips_group.show_dftx_flag = 1;that.tips_group.double_undo_flag = true;that.tips_group.get_tips_flag = false;that.tips_group.show_tips_flag = false;that.fiveStone.changehistory("H8");uni.setNavigationBarTitle({ title: '人机模式-普通' });return _context.abrupt("break", 86);case 72:that.tips_group.show_dftx_flag = 2;that.tips_group.double_undo_flag = true;that.tips_group.get_tips_flag = false;that.tips_group.show_tips_flag = false;that.fiveStone.changehistory("H8");uni.setNavigationBarTitle({ title: '人机模式-地狱' });return _context.abrupt("break", 86);case 79:that.tips_group.show_dftx_flag = 3;
              that.tips_group.get_tips_flag = false;
              that.tips_group.show_tips_flag = false;
              that.tips_group.show_find_duishou_flag = true;
              uni.setNavigationBarTitle({
                title: '巅峰对决' });return _context.abrupt("break", 86);case 85:return _context.abrupt("break", 86);case 86:







              if (that.tips_group.get_tips_flag) {
                that.get_tips();
              }
              that.$forceUpdate();case 88:case "end":return _context.stop();}}}, _callee, this);}));function onLoad(_x) {return _onLoad.apply(this, arguments);}return onLoad;}(),


  methods: _objectSpread({},
  (0, _vuex.mapMutations)(['settipslast', 'cuttipslast']), {
    handleTip: function handleTip(e) {
      //const self = getCurrentPages()[0];
      if (!this.fiveStone.canStep()) {
        return;
      }

      this.fiveStone.getStepPosition(e);
      this.loc = this.fiveStone.getStepLocation(e);

    },

    /**
        * 胜利之后的回调
        */
    winCallback: function winCallback(winStone) {
      // console.log(startLoc,endLoc);
      // const startLocation = this.fiveStone.chessBoard[startLoc.x][startLoc.y].pos;
      // const endLocation = this.fiveStone.chessBoard[endLoc.x][endLoc.y].pos;
      // const long = Math.sqrt(Math.pow(startLocation.x - endLocation.x, 2) +
      // 	Math.pow(startLocation.y - endLocation.y, 2));
      // const tipAngle = Math.acos((endLocation.x - startLocation.x) / long);
      // console.log(tipAngle);
      // this.winLoc.start = startLocation;
      // this.winLoc.end = endLocation;
      // this.winLoc.width = long;
      // this.winLoc.angle = tipAngle;
      //              console.log(this.winLoc);
      //已经成功以后禁止再下子
      this.winLoc.whowin = 3 - this.fiveStone.stone;
      if (this.winLoc.whowin == 1) {
        this.winLoc.whowin_title = "黑胜";
      };
      if (this.winLoc.whowin == 2) {
        this.winLoc.whowin_title = "白胜";
      };
      this.$forceUpdate();
      this.fiveStone.preventStep();

    },
    buy_vip: function buy_vip(e) {
      uni.showModal({
        title: "内测期间无需购买",
        showCancel: false });

    },
    onChessBoardTouchStart: function onChessBoardTouchStart(e) {
      handleTip(e);
    },
    onChessBoardTouchMove: function onChessBoardTouchMove(e) {
      handleTip(e);
    },
    onChessBoardTouchEnd: function () {var _onChessBoardTouchEnd = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {var that, loc, gettips_flag, total_line, lochistory, i, has_tips_falg, m, n, info;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                //	console.log(e);
                that = this;
                that.handleTip(e);
                loc = that.loc;
                // console.log(this.loc);

                if (that.fiveStone.history.length > that.tips_group.steps_limit) {
                  that.fiveStone.preventStep();
                  uni.showModal({
                    title: '',
                    content: '五步训练最多只能走11步',
                    showCancel: false });

                }if (!(


                loc != null)) {_context2.next = 13;break;}
                gettips_flag = that.fiveStone.canStepAt(loc.x, loc.y);

                //打谱测试模式
                if (that.fiveStone.chessBoardtips[loc.x][loc.y].stoneType != 1 && that.tips_group.show_black_tips_flag == false &&
                that.fiveStone.stone == 1) {


                  total_line = "";
                  lochistory = that.fiveStone.history;
                  if (lochistory.length > 0) {
                    for (i = 0; i < lochistory.length; i++) {
                      total_line += that.upchangetoabc(lochistory[i].x);
                      total_line += (15 - lochistory[i].y).toString();
                    }
                  }
                  console.log(total_line);


                  has_tips_falg = false;
                  for (m = 0; m < 15; m++) {
                    for (n = 0; n < 15; n++) {
                      if (that.fiveStone.chessBoardtips[m][n].stoneType != 0) {
                        has_tips_falg = true;
                      }
                    }
                  }
                  if (that.mistakes_collection_list[that.mistakes_collection_list.length - 1] != total_line && has_tips_falg) {
                    that.mistakes_collection_list.push({
                      total_line: total_line,
                      tips: that.fiveStone.chessBoardtips });

                    uni.setStorage({
                      key: 'mistakes_collection',
                      data: that.mistakes_collection_list });

                    console.log(that.mistakes_collection_list);
                  }



                  that.tips_group.show_wrong_choice_flag = true;
                  setTimeout(function () {
                    that.tips_group.show_wrong_choice_flag = false;
                  }, 1000);
                }
                //我的错题
                if (!(that.tips_group.mulu_flag == 'dpcs_wdct')) {_context2.next = 10;break;}

                if (that.mistakes_collection_list[that.tips_group.cuoti_num].tips[loc.x][loc.y].stoneType != 1) {

                  that.tips_group.show_wrong_choice_flag = true;
                  that.fiveStone.chessBoardtips = that.mistakes_collection_list[that.tips_group.cuoti_num].tips;
                  setTimeout(function () {

                    if (that.tips_group.cuoti_num + 1 < that.tips_group.cuoti_total_num) {
                      that.tips_group.cuoti_num++;
                    } else {
                      that.tips_group.cuoti_num = 0;
                      that.mistakes_collection_list = that.mistakes_collection_newlist.concat();
                      that.tips_group.cuoti_total_num = that.mistakes_collection_list.length;
                    }
                    that.tips_group.show_wrong_choice_flag = false;
                    that.winLoc.whowin_title = that.tips_group.cuoti_num + 1 + "/" + that.tips_group.cuoti_total_num;
                    that.fiveStone.changehistory(that.mistakes_collection_list[that.tips_group.cuoti_num].total_line);
                    that.fiveStone.resetchessBoardtips();
                  }, 4000);

                } else {
                  that.tips_group.show_right_choice_flag = true;
                  console.log('delete_tips', that.tips_group.cuoti_num);
                  that.mistakes_collection_newlist.splice(that.tips_group.cuoti_num, 1);
                  setTimeout(function () {
                    that.tips_group.show_right_choice_flag = false;
                    if (that.tips_group.cuoti_num + 1 < that.tips_group.cuoti_total_num) {
                      that.tips_group.cuoti_num++;
                    } else {
                      that.tips_group.cuoti_num = 0;
                      that.mistakes_collection_list = that.mistakes_collection_newlist.concat();
                      that.tips_group.cuoti_total_num = that.mistakes_collection_list.length;
                      if (that.tips_group.cuoti_total_num == 0) {
                        that.winLoc.whowin_title == "0/0";
                        that.fiveStone.changehistory("H8");
                        that.fiveStone.resetchessBoardtips();
                        return;
                      }
                    }
                    that.winLoc.whowin_title = that.tips_group.cuoti_num + 1 + "/" + that.tips_group.cuoti_total_num;
                    that.fiveStone.changehistory(that.mistakes_collection_list[that.tips_group.cuoti_num].total_line);
                    uni.setStorage({
                      key: 'mistakes_collection',
                      data: that.mistakes_collection_newlist });

                    that.fiveStone.resetchessBoardtips();
                  }, 1000);
                }return _context2.abrupt("return");case 10:


                that.fiveStone.step(loc.x, loc.y);
                // console.log(this.fiveStone.chessBoard);
                // var treearray =this.fiveStone.computerAItreesearch(this.fiveStone.stone,this.fiveStone.blackWin,this.fiveStone.whiteWin,this.fiveStone.chessBoard);
                // console.log(treearray);



                if (this.tips_group.get_tips_flag && gettips_flag) {
                  that.get_tips();
                  that.$forceUpdate();
                }

                //人机模式
                //console.log(this.fiveStone.stone)
                if (this.tips_group.mulu_flag == "bdms_rjmspt" && this.fiveStone.stone == 1) {
                  //this.fiveStone.preventStep();
                  info = this.fiveStone.computerAI(1);
                  that.fiveStone.step(parseInt(info['x']), parseInt(info['y']));
                  //this.fiveStone.allowStep();
                  //console.log("computerai",this.fiveStone.chessBoard[info['x']][info['y']].stoneType );

                }

                //this.get_tips();
                //this.$forceUpdate();
              case 13:case "end":return _context2.stop();}}}, _callee2, this);}));function onChessBoardTouchEnd(_x2) {return _onChessBoardTouchEnd.apply(this, arguments);}return onChessBoardTouchEnd;}(),

    /** * 重来*/
    restart: function restart() {
      this.fiveStone.restart();
      //this.refreshFiveStoneAndClearWinTip();
      this.winLoc.whowin = 0;
      this.winLoc.whowin_title = "";
      this.winLoc.start = null;
      this.winLoc.end = null;
      if (this.tips_group.double_undo_flag) {
        this.fiveStone.changehistory("H8");
      }
      if (this.tips_group.mulu_flag == 'dplx_hykj') {
        this.fiveStone.changehistory("H8H9I9");
      }
      if (this.tips_group.mulu_flag == 'dplx_pykj') {
        this.fiveStone.changehistory("H8I9I7");
      }


      if (this.tips_group.get_tips_flag) {
        this.get_tips();
      }
      this.$forceUpdate();
    },
    /**悔棋 */
    undo: function undo() {
      this.fiveStone.undo();
      if (this.tips_group.double_undo_flag) {
        this.fiveStone.undo();
      }

      this.winLoc.whowin = 0;
      this.winLoc.whowin_title = "";
      this.winLoc.start = null;
      this.winLoc.end = null;
      if (this.tips_group.get_tips_flag) {
        this.get_tips();
      }
      this.$forceUpdate();
    },


    get_tips: function () {var _get_tips = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var _this = this;var that, nowdate, tips_last_time_str, total_line, total_line_char, lochistory, step, i, post_data, tipsdiclist, xloc, yloc;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                that = this;if (!(
                that.userInfo.vip_flag == false)) {_context3.next = 10;break;}
                that.fiveStone.resetchessBoardtips();
                if (that.userInfo.tips_last == 1) {

                  uni.showModal({
                    title: '说明',
                    content: '今日提示步数已经用完,请前往购买vip获得全部功能',
                    showCancel: false });

                }if (!(
                that.userInfo.tips_last < 1)) {_context3.next = 6;break;}return _context3.abrupt("return");case 6:


                // that.tips_group.tips_last -= 1;
                that.cuttipslast();
                nowdate = new Date().getDate();
                tips_last_time_str = that.userInfo.tips_last + "," + nowdate;
                uni.setStorage({
                  key: 'tips_last_time',
                  data: tips_last_time_str,
                  success: function success() {
                    console.log('setdata_tips_last_time_success', tips_last_time_str);
                  } });case 10:if (!(


                that.tips_group.get_tips_flag == false || that.fiveStone.history.length > that.tips_group.steps_limit)) {_context3.next = 14;break;}
                console.log("超过五步限制或者不能获得提示");
                that.fiveStone.resetchessBoardtips();return _context3.abrupt("return");case 14:



                total_line = "";
                total_line_char = "";
                lochistory = that.fiveStone.history;
                step = 0;
                //console.log("history", lochistory);
                if (lochistory.length == 0) {
                  total_line = "none";
                } else {
                  for (i = 0; i < lochistory.length; i++) {
                    total_line += that.upchangetoabc(lochistory[i].x);
                    total_line += (15 - lochistory[i].y).toString();
                    total_line_char += that.upchangetoabc(lochistory[i].x) + "-";
                    total_line_char += (15 - lochistory[i].y).toString() + "-";
                    step += 1;
                  }
                }
                console.log(total_line);
                that.fiveStone.resetchessBoardtips();if (!(
                _wuziqi.tipsdic[total_line] == null)) {_context3.next = 28;break;}
                post_data = {
                  'form': 'get_wzq_data',
                  'table_name': that.tips_group.table_name,
                  'total_line': total_line,
                  'total_line_char': total_line_char,
                  'step': step + 1 };_context3.next = 25;return (

                  that.download_from_server(post_data, 'wuziqitips', 'data_flag'));case 25:
                setTimeout(function () {return _this.deal_with_data();}, 600);_context3.next = 30;break;case 28:



                tipsdiclist = _wuziqi.tipsdic[total_line][0];
                //console.log("tipsdiclist", tipsdiclist);
                for (i = 0; i < tipsdiclist.length; i++) {
                  xloc = that.downchangetoabc(tipsdiclist[i].substring(0, 1));
                  yloc = 15 - parseInt(tipsdiclist[i].substring(1));
                  //console.log(xloc, yloc);
                  if (that.fiveStone.stone == 1) {
                    that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 1;
                    that.fiveStone.chessBoardtips[xloc][yloc].num = _wuziqi.tipsdic[total_line][1][i];
                  }
                  if (that.fiveStone.stone == 2) {
                    that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 2;
                    that.fiveStone.chessBoardtips[xloc][yloc].num = _wuziqi.tipsdic[total_line][1][i];
                  }
                }case 30:return _context3.abrupt("return",


                200);case 31:case "end":return _context3.stop();}}}, _callee3, this);}));function get_tips() {return _get_tips.apply(this, arguments);}return get_tips;}(),

    tap_jieshao: function tap_jieshao() {
      uni.navigateTo({
        url: "../jieshao/jieshao" });


    },
    gotozml: function gotozml() {
      uni.reLaunch({
        url: "../index2/index2" });


    },
    deal_with_data: function deal_with_data() {
      var that = this;
      var total_line = "";
      var insertarray1 = [];
      var insertarray2 = [];
      var lochistory = this.fiveStone.history;
      if (lochistory.length > 0) {
        for (var i = 0; i < lochistory.length; i++) {
          total_line += this.upchangetoabc(lochistory[i].x);
          total_line += (15 - lochistory[i].y).toString();
        }
      }
      if (that.wuziqitips != null && that.data_flag == 200) {


        //tipsdic[total_line]=new Array();
        for (var k = 0; k < that.wuziqitips.length; k++) {
          //tipsdic[total_line][0][k]=that.wuziqitips[k]['step'];
          //tipsdic[total_line][1][k]=that.wuziqitips[k]['num'];
          if (that.wuziqitips[k]['step'].length > 1 && that.wuziqitips[k]['num'] > 0) {
            insertarray1.push(that.wuziqitips[k]['step']);
            insertarray2.push(that.wuziqitips[k]['num']);
          }



          var xloc = that.downchangetoabc(that.wuziqitips[k]['step'].substring(0, 1));
          var yloc = 15 - parseInt(that.wuziqitips[k]['step'].substring(1));

          if (that.fiveStone.stone == 1 && xloc && yloc) {
            that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 1;
            that.fiveStone.chessBoardtips[xloc][yloc].num = that.wuziqitips[k]['num'];
            if (that.wuziqitips[k]['change_line'].length > 4) {
              that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 3;
            }
          }
          if (that.fiveStone.stone == 2 && xloc && yloc) {
            that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 2;
            that.fiveStone.chessBoardtips[xloc][yloc].num = that.wuziqitips[k]['num'];
            if (that.wuziqitips[k]['change_line'].length > 4) {
              that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 3;
            }
          }
        }
        // tipsdic[total_line] = [insertarray1, insertarray2];



      } else if (that.data_flag == 300) {
        that.fiveStone.changehistory(that.wuziqitips[0]['change_line']);
        setTimeout(function () {
          that.get_tips();
          console.log('更改历史，重新获取');
        }, 400);
      }
      if (insertarray1[0] != null) {
        console.log('insertarray1', insertarray1);
        _wuziqi.tipsdic[total_line] = [insertarray1, insertarray2];
      }


    },
    qiuzhu: function () {var _qiuzhu = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var chessBoardcopy, i, j, deepthinksteps_answer, total_line, insertarray1, insertarray2, lochistory, str1, str2, str3, x, y, word;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:

                //var info=this.fiveStone.computerAI(this.fiveStone.stone);
                //this.fiveStone.step(parseInt(info['x']), parseInt(info['y']));

                //算n步
                chessBoardcopy = [];
                for (i = 0; i < 15; i++) {
                  chessBoardcopy[i] = [];
                  for (j = 0; j < 15; j++) {
                    chessBoardcopy[i][j] = 0;
                    if (this.fiveStone.chessBoard[i][j].stoneType == 1) {
                      chessBoardcopy[i][j] = 1;
                    }
                    if (this.fiveStone.chessBoard[i][j].stoneType == 2) {
                      chessBoardcopy[i][j] = 2;
                    }
                  }
                }
                uni.showLoading({
                  title: '计算中',
                  mask: 'true' });

                deepthinksteps_answer = this.fiveStone.deepthinkshuansha(this.fiveStone.stone, this.fiveStone.blackWin, this.fiveStone.
                whiteWin, chessBoardcopy);
                uni.hideLoading();

                if (deepthinksteps_answer.length > 0) {
                  total_line = "";
                  insertarray1 = [];
                  insertarray2 = [];
                  lochistory = this.fiveStone.history;
                  if (lochistory.length > 0) {
                    for (i = 0; i < lochistory.length; i++) {
                      total_line += this.upchangetoabc(lochistory[i].x);
                      total_line += (15 - lochistory[i].y).toString();
                    }
                  }
                  console.log(total_line);
                  for (i = 0; i < deepthinksteps_answer.length; i++) {
                    str1 = deepthinksteps_answer[i].split("|");
                    str2 = str1[1].split("-");
                    str3 = str2[0].split(",");
                    x = this.upchangetoabc(str3[0]);
                    y = 15 - parseInt(str3[1]);
                    word = "" + x + y;
                    insertarray1.push(word);
                    insertarray2.push(1234);
                    // 'H8I9I7L12':[['G9',],[1,]],
                    console.log(word);


                  }
                  _wuziqi.tipsdic[total_line] = [insertarray1, insertarray2];
                  this.get_tips();
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: '未求出解' });


                }











                // console.log(chessBoardcopy);
                //console.log(treearray);
                // console.log(this.fiveStone.blackWin);
                // console.log(this.fiveStone.whiteWin);



                //算1步	 
                //var treearray =this.fiveStone.computerAItreesearch(this.fiveStone.stone,this.fiveStone.blackWin,this.fiveStone.whiteWin,chessBoardcopy);
                //console.log(treearray);
                // console.log(treearray.length);
              case 6:case "end":return _context4.stop();}}}, _callee4, this);}));function qiuzhu() {return _qiuzhu.apply(this, arguments);}return qiuzhu;}() }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 46:
/*!********************************************************************************************************!*\
  !*** E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play/play.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play.vue?vue&type=style&index=0&lang=css& */ 47);
/* harmony import */ var _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_hbuilderx_HBuilderX_0_1_50_20180918_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 47:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/interesting/sina_cloud/代码包/4/gobang_game/pages/play/play.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[36,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/play/play.js.map