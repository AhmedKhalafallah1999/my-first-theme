import BasePage from "../base-page";

class CustomHeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.component = JSON.parse(this.getAttribute("component")) || {};
    this.render();
  }

  render() {
    this.innerHTML = ` <section class="hero-section container" style="
       background: linear-gradient(135deg, #ff7e5f, #feb47b);
       color: #fff;
       padding: 100px 0;
       text-align: center;
       border-radius: 20px;
       overflow: hidden;
   "> <div class="hero-item"> <h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 20px;">
${this.component.title || "مرحبًا بك في متجرنا"} </h1>


          <p style="font-size: 1.5rem; margin-bottom: 30px;">
              ${this.component.desc || "أفضل المنتجات مع أفضل العروض"}
          </p>

          <a href="${this.component.btn_link || "#!"}" style="
              display: inline-block;
              padding: 15px 40px;
              background-color: #fff;
              color: #ff7e5f;
              font-weight: bold;
              text-decoration: none;
              border-radius: 50px;
              transition: 0.3s;
          ">
              ${this.component.btn || "تسوق الآن"}
          </a>
      </div>
  </section>
`;
  }
}

customElements.define("custom-hero-section", CustomHeroSection);

class HeroSection extends BasePage {
  onReady() {
    console.log("HeroSection onReady called");

    const waitForApi = (retries = 50) => {
      if (window.salla?.api?.component) {
        console.log("✅ Salla API is ready:", window.salla.api.component);
        this.fetchAllComponents();
      } else if (retries > 0) {
        console.log("⏳ Salla API not ready yet, retrying...");
        setTimeout(() => waitForApi(retries - 1), 100);
      } else {
        console.warn("⚠️ Salla API not ready after multiple retries.");
      }
    };

    waitForApi();
  }

  async fetchAllComponents() {
    try {
      if (!window.salla?.api?.component) {
        console.warn("⚠️ Cannot fetch components: API not available.");
        return;
      }

      const listResponse = await salla.api.component.list();
      const components = listResponse?.data || [];

      if (!components.length) {
        this.displayHeroComponents([
          { key: "no-components", title: "لا توجد مكونات حالياً" },
        ]);
        return;
      }

      const fetchComponentWithRetry = async (comp, retries = 3) => {
        try {
          return await salla.api.request(`component/get/${comp.key}`);
        } catch (err) {
          if (retries > 0) return fetchComponentWithRetry(comp, retries - 1);
          return { key: comp.key, title: "Error fetching component" };
        }
      };

      const allDetails = await Promise.all(
        components.map((comp) => fetchComponentWithRetry(comp))
      );

      this.displayHeroComponents(allDetails);
    } catch (err) {
      console.error("Error fetching components list:", err);
    }
  }

  displayHeroComponents(components) {
    let container = document.getElementById("hero-components");
    if (!container) {
      container = document.createElement("div");
      container.id = "hero-components";
      document.body.prepend(container);
    }

    container.innerHTML = "";
    components.forEach((comp) => {
      const hero = document.createElement("custom-hero-section");
      hero.setAttribute("component", JSON.stringify(comp));
      container.appendChild(hero);
    });
  }
}

HeroSection.initiateWhenReady(null);
