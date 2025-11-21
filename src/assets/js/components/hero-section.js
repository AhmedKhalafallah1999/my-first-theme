alert("tmammm");

document.addEventListener("DOMContentLoaded", async () => {
let heroWrap = app.element("#hero-section");

if (!heroWrap) {
console.error("Hero Section wrapper (#hero-section) not found in DOM!");
return;
}

try {
const res = await salla.api.request("component/list", { params: { paths: ["home.hero-section"] } });
console.log("Hero Section API response:", res);

```
let block = res.data[0]?.component;

if (!block) {
  console.warn("Hero Section component not found or not configured in Theme Dashboard.");
  heroWrap.innerHTML = `<p style="color:red; text-align:center;">Hero Section component is missing!</p>`;
  return;
}

// Fallback values
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
```

} catch (err) {
console.error("Hero Section load error:", err);
heroWrap.innerHTML = `<p style="color:red; text-align:center;">Error loading Hero Section</p>`;
}
});
