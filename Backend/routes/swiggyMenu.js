import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/menu", async (req, res) => {
  try {
    const { resId, lat, lng } = req.query;

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("MENU FETCH ERROR:", error);
    res.status(500).json({ error: "Menu not available" });
  }
});

export default router;
