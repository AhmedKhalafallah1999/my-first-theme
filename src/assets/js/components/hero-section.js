document.addEventListener("DOMContentLoaded", function () {
  // تحقق من وجود salla.api و request
  console.log("salla.api:", salla.api);
  console.log("salla.api.request:", salla.api.request);

  if (salla?.api?.request) {
    // هنا يمكنك استخدام salla.api.request بأمان
    salla.api
      .request("component/list")
      .then((list) => {
        console.log("Components list:", list);
      })
      .catch((err) => {
        console.error("Error fetching components:", err);
      });
  } else {
    console.warn("salla.api.request غير موجود");
  }
});
