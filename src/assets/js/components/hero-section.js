import BasePage from "../base-page";

class HeroSection extends BasePage {
  onReady() {
    // تأكد أن Salla API جاهز
    this.fetchAllComponents();
  }

  async fetchAllComponents() {
    try {
      console.log("Fetching all Salla components...");
      // 1. جلب قائمة الكومبوننتات
      const listResponse = await salla.api.component.list();
      const components = listResponse?.data || [];
      console.log("All Components:", components);

      // 2. جلب تفاصيل كل كومبوننت
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

// تأكد من استدعاء الصفحة فقط عند نوع page معين
HeroSection.initiateWhenReady(["home.index", "home.hero-section"]);
