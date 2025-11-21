import BasePage from "../base-page";

class HeroSection extends BasePage {
  onReady() {
    console.log("HeroSection onReady called");

    const waitForApi = () => {
      if (window.salla?.api?.component) {
        this.fetchAllComponents();
      } else {
        console.log("Salla API not ready yet, retrying...");
        setTimeout(waitForApi, 100); // تحقق كل 100ms
      }
    };

    waitForApi();
  }

  async fetchAllComponents() {
    try {
      console.log("Fetching all Salla components...");
      const listResponse = await salla.api.component.list();
      const components = listResponse?.data || [];
      console.log("All Components:", components);

      for (const comp of components) {
        try {
          const detail = await salla.api.request(`component/get/${comp.key}`);
          console.log(`Detail for component ${comp.key}:`, detail);
        } catch (err) {
          console.error(`Error fetching component ${comp.key}:`, err);
        }
      }
    } catch (err) {
      console.error("Error fetching components list:", err);
    }
  }
}

// HeroSection.js
HeroSection.initiateWhenReady(null); // null يعني السماح لكل الصفحات
