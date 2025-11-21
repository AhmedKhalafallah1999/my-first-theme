document.addEventListener("DOMContentLoaded", async () => {
  console.log("Hero Section JS loaded");

  let heroWrap = app.element("#hero-section");

  if (!heroWrap) return;

  try {
    const res = await salla.api.request("component/list", {
      params: { paths: ["home.hero-section"] },
    });
    let block = res.data[0]?.component;

    if (!block) return;

    const title = block.title || "مرحبًا بك في متجرنا";
    const desc = block.desc || "أفضل المنتجات مع أفضل العروض";
    const btn = block.btn || "تسوق الآن";

    heroWrap.innerHTML = `
      <section class="hero-section container" style="
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          color: #fff;
          padding: 100px 0;
          text-align: center;
          border-radius: 20px;
          overflow: hidden;
      ">
          <div class="hero-item">
              <h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 20px;">${title}</h1>
              <p style="font-size: 1.5rem; margin-bottom: 30px;">${desc}</p>
              <a href="#!" style="
                  display: inline-block;
                  padding: 15px 40px;
                  background-color: #fff;
                  color: #ff7e5f;
                  font-weight: bold;
                  text-decoration: none;
                  border-radius: 50px;
                  transition: 0.3s;
              ">${btn}</a>
          </div>
      </section>
    `;
  } catch (err) {
    console.error("Hero Section load error:", err);
  }
});
