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

      if (!components.length) {
        console.info("ℹ️ No components found for this page or user.");
        return;
      }

      console.log("All Components:", components);

      // Fetch component details in parallel, safely
      const fetchComponentWithRetry = async (comp, retries = 3) => {
        try {
          const detail = await salla.api.request(`component/get/${comp.key}`);
          console.log(`Detail for component ${comp.key}:`, detail);
          return detail;
        } catch (err) {
          if (retries > 0) {
            console.warn(
              `Retrying component ${comp.key}... (${retries} retries left)`
            );
            return fetchComponentWithRetry(comp, retries - 1);
          } else {
            console.error(
              `Failed to fetch component ${comp.key} after retries`,
              err
            );
            return null;
          }
        }
      };

      const allDetails = await Promise.allSettled(
        components.map((comp) => fetchComponentWithRetry(comp))
      );

      console.log("All Component Details (settled):", allDetails);
    } catch (err) {
      console.error("Error fetching components list:", err);
    }
  }
}

// Initialize for all pages
HeroSection.initiateWhenReady(null);
