document.addEventListener("DOMContentLoaded", async function () {
  const heroWrap = document.querySelector("#hero-section");
  if (!heroWrap) return;

  try {
    // استبدل YOUR_COMPONENT_ID بالـ ID الفعلي للمكون
    const compId = "YOUR_COMPONENT_ID";
    const response = await salla.api.request(`component/get/${compId}`);
    console.log("Component Data:", response);

    const block = response?.data || {
      title: "مرحبًا بك في متجرنا",
      desc: "أفضل المنتجات مع أفضل العروض",
      btn: "تسوق الآن",
      btn_link: "#!",
    };

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
  } catch (err) {
    console.error("Hero Section load error:", err);
  }
});
