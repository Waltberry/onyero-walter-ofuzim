import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  withCredentials: false,
});

export async function health() {
  const { data } = await api.get("/health");
  return data;
}

export async function downloadCV() {
  const res = await api.get("/cv/download", { responseType: "blob" });
  return res.data; // Blob
}

export async function cvInfo() {
  const { data } = await api.get("/cv/info");
  return data;
}

export async function submitContactForm(payload) {
  const { data } = await api.post("/contact", payload);
  return data;
}

export async function trackAnalytics(event, props = {}) {
  try {
    await api.post("/analytics", { event, props });
  } catch (_) { /* fire-and-forget */ }
}
