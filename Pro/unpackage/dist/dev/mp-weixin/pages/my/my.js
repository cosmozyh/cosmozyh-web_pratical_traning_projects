"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_uni_icons2 + _component_uni_list_item + _component_uni_list + _easycom_up_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_up_popup)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const userInfo = common_vendor.reactive({
      nickname: "",
      avatarUrl: ""
    });
    const show = ref(false);
    const close = () => {
      show.value = false;
    };
    const onChooseavatar = (e) => {
      common_vendor.index.__f__("log", "at pages/my/my.vue:122", e.avatarUrl);
      userInfo.avatarUrl = e.avatarUrl;
    };
    const changeName = (e) => {
      common_vendor.index.__f__("log", "at pages/my/my.vue:126", e);
      userInfo.nickname = e.detail.value;
    };
    const userSumbit = () => {
      common_vendor.index.setStorageSync("userInfo", JSON.stringify(userInfo));
      show.value = false;
    };
    common_vendor.onLoad(async () => {
      if (common_vendor.index.getStorageSync("token") && !common_vendor.index.getStorageSync("userInfo")) {
        const { avatarUrl, nickname } = await api_api.getUserInfo();
        common_vendor.index.__f__("log", "at pages/my/my.vue:139", await api_api.getUserInfo());
        userInfo.nickname = nickname;
        userInfo.avatarUrl = avatarUrl;
      } else if (common_vendor.index.getStorageSync("token") && !common_vendor.index.getStorageSync("userInfo")) {
        const { avatarUrl, nickname } = JSON.parse(common_vendor.index.getStorageSync("userInfo"));
        userInfo.nickname = nickname;
        userInfo.avatarUrl = avatarUrl;
      }
    });
    common_vendor.reactive({
      color: "#666666",
      size: "22",
      type: "auth"
    });
    common_vendor.reactive({
      color: "#666666",
      size: "22",
      type: "cart"
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: "calendar",
          size: "30",
          color: "#fff"
        }),
        b: common_vendor.p({
          type: "gear",
          size: "30",
          color: "#fff"
        }),
        c: common_vendor.p({
          type: "chat",
          size: "30",
          color: "#fff"
        }),
        d: !userInfo.nickname
      }, !userInfo.nickname ? {
        e: common_assets._imports_0
      } : {
        f: userInfo.avatarUrl,
        g: common_vendor.t(userInfo.nickname)
      }, {
        h: common_vendor.p({
          ["show-extra-icon"]: "true",
          ["extra-icon"]: "extraIcon1",
          showArrow: true,
          title: "个人信息",
          clickable: true
        }),
        i: common_vendor.p({
          ["show-extra-icon"]: "true",
          ["extra-icon"]: "extraIcon1",
          showArrow: true,
          title: "用户反馈",
          clickable: true
        }),
        j: common_vendor.p({
          ["show-extra-icon"]: "true",
          ["extra-icon"]: "extraIcon1",
          showArrow: true,
          title: "我的创作",
          clickable: true
        }),
        k: common_vendor.p({
          ["show-extra-icon"]: "true",
          ["extra-icon"]: "extraIcon1",
          showArrow: true,
          title: "分享有赏",
          clickable: true
        }),
        l: userInfo.avatarUrl,
        m: common_vendor.o(onChooseavatar),
        n: common_vendor.o(changeName),
        o: common_vendor.o(userSumbit),
        p: common_vendor.o(close),
        q: common_vendor.p({
          show: common_vendor.unref(show),
          closeable: true,
          round: "20"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
