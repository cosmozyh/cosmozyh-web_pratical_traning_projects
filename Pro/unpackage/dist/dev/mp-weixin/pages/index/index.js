"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  const _easycom_up_notice_bar2 = common_vendor.resolveComponent("up-notice-bar");
  (_easycom_up_search2 + _easycom_up_swiper2 + _easycom_up_notice_bar2)();
}
const _easycom_up_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_up_notice_bar = () => "../../uni_modules/uview-plus/components/u-notice-bar/u-notice-bar.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_swiper + _easycom_up_notice_bar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const bannerList = common_vendor.ref([]);
    common_vendor.ref("这是一个公告");
    common_vendor.onLoad(async () => {
      try {
        const res = await api_api.getBanner();
        common_vendor.index.__f__("log", "at pages/index/index.vue:30", "res结果:", res);
        if (res && res.code === 1 && res.data && Array.isArray(res.data.bannerList)) {
          bannerList.value = res.data.bannerList;
          common_vendor.index.__f__("log", "at pages/index/index.vue:34", "设置到组件的 bannerList:", bannerList.value);
        } else {
          common_vendor.index.__f__("warn", "at pages/index/index.vue:36", "接口返回数据格式不正确或 bannerList 为空");
        }
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/index/index.vue:39", "获取 Banner 出错:", err);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => keyword.value = $event),
        b: common_vendor.p({
          placeholder: "搜索",
          ["bg-color"]: "#e3e3e3",
          modelValue: keyword.value
        }),
        c: common_vendor.p({
          list: bannerList.value,
          keyName: "image",
          ["show-title"]: true,
          radius: 8,
          autoplay: true,
          height: 160
        }),
        d: common_vendor.p({
          text: "这是公告文字",
          mode: "closable"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
