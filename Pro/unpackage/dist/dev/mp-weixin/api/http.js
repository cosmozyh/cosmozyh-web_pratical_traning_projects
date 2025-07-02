"use strict";
const common_vendor = require("../common/vendor.js");
function http(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: url + url,
      data,
      method,
      header: {
        "token": common_vendor.index.getStorageSync("token") || ""
      },
      success: (res) => {
        if (res.statusCode == 200) {
          if (res.data.code == 1) {
            resolve(res.data.data);
          } else {
            common_vendor.index.showToast({
              title: res.data.msg,
              icon: "none"
            });
            reject(res.data.msg);
          }
        }
      },
      fail: () => {
        common_vendor.index.showToast({
          title: "服务器请求失败",
          icon: "none"
        });
      }
    });
  });
}
exports.http = http;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/http.js.map
