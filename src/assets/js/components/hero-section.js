alert("tmammm");

document.addEventListener("DOMContentLoaded", function () {
  var heroWrap = app.element("#hero-section");

  ```
if (!heroWrap) {
    console.error("Hero Section wrapper (#hero-section) not found in DOM!");
    return;
}

salla.api.request("component/list", { params: { paths: ["home.hero-section"] } })
.then(function(res) {
    console.log("Hero Section API response:", res);

    var block = (res.data && res.data[0] && res.data[0].component) ? res.data[0].component : null;

    if (!block) {
        console.warn("Hero Section component is not configured in Theme Dashboard.");
        heroWrap.innerHTML = '<p style="color:red; text-align:center;">Hero Section component is missing!</p>';
        return;
    }

    var title = block.title ? block.title : "مرحبًا بك في متجرنا";
    var desc  = block.desc  ? block.desc  : "أفضل المنتجات مع أفضل العروض";
    var btn   = block.btn   ? block.btn   : "تسوق الآن";

    heroWrap.innerHTML = 
        '<section class="hero-section container" style="' +
            'background: linear-gradient(135deg, #ff7e5f, #feb47b);' +
            'color: #fff;' +
            'padding: 100px 0;' +
            'text-align: center;' +
            'border-radius: 20px;' +
            'overflow: hidden;' +
        '">' +
            '<div class="hero-item">' +
                '<h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 20px;">' + title + '</h1>' +
                '<p style="font-size: 1.5rem; margin-bottom: 30px;">' + desc + '</p>' +
                '<a href="#!" style="display: inline-block; padding: 15px 40px; background-color: #fff; color: #ff7e5f; font-weight: bold; text-decoration: none; border-radius: 50px; transition: 0.3s;">' + btn + '</a>' +
            '</div>' +
        '</section>';
})
.catch(function(err) {
    console.error("Hero Section load error:", err);
    heroWrap.innerHTML = '<p style="color:red; text-align:center;">Error loading Hero Section</p>';
});
```;
});
