import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

// 🍔 Swiggy menu route
app.get("/api/menu", async (req, res) => {
  try {
    const { lat, lng, resId } = req.query;

    if (!resId) {
      return res.status(400).json({ error: "resId missing" });
    }

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
        Referer: "https://www.swiggy.com/",
        Cookie: "swiggy_user_session=guest; _device_id=menu123",
      },
    });

    const text = await response.text();

    // If Swiggy returned blank / HTML / error page
    if (!text || text.trim().length === 0 || !text.trim().startsWith("{")) {
      return res.status(500).json({
        error: "Invalid response from Swiggy API",
        resId,
        snippet: text.slice(0, 200),
      });
    }

    let json;
    try {
      json = JSON.parse(text);
    } catch (parseErr) {
      return res.status(500).json({
        error: "Parsing menu JSON failed",
        message: parseErr.message,
        raw: text.slice(0, 300),
      });
    }

    // If the API returned something valid
    return res.json(json);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Server fetch error", message: err.message });
  }
});

app.get("/api/swiggy", async (req, res) => {
  try {
    const lat = req.query.lat || 12.9716;
    const lng = req.query.lng || 77.5946;

    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Accept: "application/json",
        Cookie:
          "experiments=control; _device_id=123abc; swiggy_user_session=guest",
      },
    });

    const text = await response.text();

    try {
      const json = JSON.parse(text);
      return res.json(json);
    } catch {
      return res.status(500).json({ raw: text });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server on 5000"));
