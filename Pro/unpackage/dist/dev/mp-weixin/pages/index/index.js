"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  const _easycom_up_notice_bar2 = common_vendor.resolveComponent("up-notice-bar");
  const _easycom_up_lazy_load2 = common_vendor.resolveComponent("up-lazy-load");
  const _easycom_up_waterfall2 = common_vendor.resolveComponent("up-waterfall");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_search2 + _easycom_up_swiper2 + _easycom_up_notice_bar2 + _easycom_up_lazy_load2 + _easycom_up_waterfall2 + _easycom_up_icon2)();
}
const _easycom_up_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_up_notice_bar = () => "../../uni_modules/uview-plus/components/u-notice-bar/u-notice-bar.js";
const _easycom_up_lazy_load = () => "../../uni_modules/uview-plus/components/u-lazy-load/u-lazy-load.js";
const _easycom_up_waterfall = () => "../../uni_modules/uview-plus/components/u-waterfall/u-waterfall.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_swiper + _easycom_up_notice_bar + _easycom_up_lazy_load + _easycom_up_waterfall + _easycom_up_icon)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const bannerList = common_vendor.ref([]);
    const flowList = common_vendor.ref([]);
    const showTopBtn = common_vendor.ref(0);
    common_vendor.onLoad(() => {
      api_api.getBanner().then((res) => {
        bannerList.value = res.bannerList;
      });
      api_api.getHomeList().then((res) => {
        flowList.value = Array.isArray(res) ? res : [];
      });
    });
    common_vendor.onReachBottom(() => {
      setTimeout(() => {
        addRadomData();
      }, 1e3);
    });
    const addRadomData = () => {
      for (let i = 0; i < 10; i++) {
        if (flowList.value.length === 0)
          return;
        let index = common_vendor.index.$u.random(0, flowList.value.length - 1);
        let item = flowList.value[index];
        item.id = common_vendor.index.$u.guid();
        flowList.value.push(item);
      }
    };
    common_vendor.onPageScroll((e) => {
      if (e.scrollTop > 600) {
        showTopBtn.value = 1;
      } else {
        showTopBtn.value = 0;
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => keyword.value = $event),
        b: common_vendor.p({
          placeholder: "搜索",
          ["bg-color"]: "#e3e3e3",
          modelValue: keyword.value
        }),
        c: common_vendor.p({
          list: bannerList.value,
          keyName: "image",
          showTitle: true,
          radius: "8",
          autoplay: true,
          height: "160"
        }),
        d: common_vendor.p({
          text: "这是一个公告.",
          mode: "closable"
        }),
        e: common_vendor.w(({
          leftList
        }, s0, i0) => {
          return {
            a: common_vendor.f(leftList, (item, index, i1) => {
              return common_vendor.e({
                a: "40168042-4-" + i0 + "-" + i1 + ",40168042-3",
                b: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.img,
                  index
                }),
                c: common_vendor.t(item.title),
                d: common_vendor.t(item.times),
                e: common_vendor.t(item.tag[0]),
                f: common_vendor.t(item.tag[1]),
                g: item.isDot
              }, item.isDot ? {
                h: common_vendor.t(item.isDot)
              } : {}, {
                i: index
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "left",
          path: "e",
          vueId: "40168042-3"
        }),
        f: common_vendor.w(({
          rightList
        }, s0, i0) => {
          return {
            a: common_vendor.f(rightList, (item, index, i1) => {
              return common_vendor.e({
                a: "40168042-5-" + i0 + "-" + i1 + ",40168042-3",
                b: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.img,
                  index
                }),
                c: common_vendor.t(item.title),
                d: common_vendor.t(item.times),
                e: common_vendor.t(item.tag[0]),
                f: common_vendor.t(item.tag[1]),
                g: item.isDot
              }, item.isDot ? {
                h: common_vendor.t(item.isDot)
              } : {}, {
                i: index
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "right",
          path: "f",
          vueId: "40168042-3"
        }),
        g: common_vendor.o(($event) => flowList.value = $event),
        h: common_vendor.p({
          modelValue: flowList.value
        }),
        i: showTopBtn.value
      }, showTopBtn.value ? {
        j: common_vendor.p({
          name: "arrow-upward",
          color: "#ffff",
          size: "28"
        }),
        k: common_vendor.o((...args) => _ctx.Totop && _ctx.Totop(...args))
      } : {});
    };
  }
};
_sfc_main.__runtimeHooks = 1;
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
