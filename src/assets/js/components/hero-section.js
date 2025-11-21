document.addEventListener("DOMContentLoaded", async () => {
  let heroWrap = app.element("#hero-section");

  if (heroWrap) {
    await salla.api
      .request("component/list", { params: { paths: ["home.hero-section"] } })
      .then((res) => {
        let block = res.data[0]?.component;

        if (block) {
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
                    <h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 20px;">
                        ${block.title || "مرحبًا بك في متجرنا"}
                    </h1>

                    <p style="font-size: 1.5rem; margin-bottom: 30px;">
                        ${block.desc || "أفضل المنتجات مع أفضل العروض"}
                    </p>

                    <a href="#!" style="
                        display: inline-block;
                        padding: 15px 40px;
                        background-color: #fff;
                        color: #ff7e5f;
                        font-weight: bold;
                        text-decoration: none;
                        border-radius: 50px;
                        transition: 0.3s;
                    ">
                        ${block.btn || "تسوق الآن"}
                    </a>
                </div>
            </section>
          `;
        }
      })
      .catch((err) => console.error("Hero Section load error:", err));
  }
});
