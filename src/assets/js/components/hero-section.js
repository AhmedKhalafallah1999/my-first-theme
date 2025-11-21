salla.event.onReady(async () => {
  try {
    console.log("Salla SDK is ready. Fetching components...");

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
});
