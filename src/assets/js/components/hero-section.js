import BasePage from "../base-page";

class HeroSection extends BasePage {
  onReady() {
    console.log("HeroSection onReady called");
    if (!window.salla?.api?.component) {
      console.error("Salla API not ready yet");
      return;
    }
    this.fetchAllComponents();
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

HeroSection.initiateWhenReady(["*"]);
