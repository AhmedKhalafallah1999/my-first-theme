import BasePage from "../base-page";

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

      console.log("Fetching all Salla components...");
      const listResponse = await salla.api.component.list();
      const components = listResponse?.data || [];

      console.log(`Number of components found: ${components.length}`);
      console.log("All Components:", components);

      // إذا لم توجد مكونات، اعرض رسالة
      if (!components.length) {
        this.displayComponents([
          { key: "no-components", name: "لا توجد مكونات حالياً" },
        ]);
        return;
      }

      // Fetch component details in parallel
      const fetchComponentWithRetry = async (comp, retries = 3) => {
        try {
          const detail = await salla.api.request(`component/get/${comp.key}`);
          return detail;
        } catch (err) {
          if (retries > 0) return fetchComponentWithRetry(comp, retries - 1);
          console.error(`Failed to fetch component ${comp.key}`, err);
          return { key: comp.key, name: "Error fetching component" };
        }
      };

      const allDetails = await Promise.all(
        components.map((comp) => fetchComponentWithRetry(comp))
      );

      // عرض جميع المكونات على الصفحة
      this.displayComponents(allDetails);
    } catch (err) {
      console.error("Error fetching components list:", err);
    }
  }

  displayComponents(components) {
    let container = document.getElementById("hero-components");
    if (!container) {
      container = document.createElement("div");
      container.id = "hero-components";
      container.style.border = "1px solid #ccc";
      container.style.padding = "10px";
      container.style.margin = "10px 0";
      container.style.background = "#f9f9f9";
      document.body.prepend(container);
    }

    container.innerHTML = ""; // تنظيف المحتوى القديم
    components.forEach((comp) => {
      const div = document.createElement("div");
      div.style.padding = "5px 0";
      div.textContent = comp.name || comp.key || "Unnamed Component";
      container.appendChild(div);
    });
  }
}

// Initialize for all pages
HeroSection.initiateWhenReady(null);
