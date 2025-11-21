document.addEventListener("DOMContentLoaded", async function () {
  const heroWrap =
    typeof app !== "undefined" && typeof app.element === "function"
      ? app.element("#hero-section")
      : document.querySelector("#hero-section");

  if (!heroWrap) return;

  try {
    let block;

    // جلب بيانات الكومبوننت
    if (
      typeof salla !== "undefined" &&
      salla.api &&
      typeof salla.api.request === "function"
    ) {
      const res = await salla.api.request("component/list", {
        params: { paths: ["home.hero-section"] },
      });

      block = res.data?.[0]?.component || null;

      console.log("API BLOCK DATA:", block); // <-- مهم لفحص القيم
    }

    // fallback إذا لم يوجد block
    if (!block) {
      block = {
        title: "مرحبًا بك في متجرنا",
        desc: "أفضل المنتجات مع أفضل العروض",
        btn: "تسوق الآن",
        btn_link: "#!",
      };
    }

    const heroHTML = `
      <section class="hero-section container" style="
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          color: #fff;
          padding: 100px 0;
          text-align: center;
          border-radius: 20px;
          overflow: hidden;
      ">
        <div class="hero-item">
          <h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 20px;">
            ${block.title}
          </h1>

          <p style="font-size: 1.5rem; margin-bottom: 30px;">
            ${block.desc}
          </p>

          <a href="${block.btn_link || "#!"}" style="
              display: inline-block;
              padding: 15px 40px;
              background-color: #fff;
              color: #ff7e5f;
              font-weight: bold;
              text-decoration: none;
              border-radius: 50px;
              transition: 0.3s;
          ">
            ${block.btn}
          </a>
        </div>
      </section>
    `;

    heroWrap.innerHTML = heroHTML;
  } catch (err) {
    console.error("Hero Section load error:", err);
    heroWrap.innerHTML = `
      <section class="hero-section container" style="
          background: #333;
          color: #fff;
          padding: 100px 0;
          text-align: center;
          border-radius: 20px;
      ">
        <p>خطأ في تحميل Hero Section، سيتم عرض بيانات تجريبية</p>
      </section>
    `;
  }
});
