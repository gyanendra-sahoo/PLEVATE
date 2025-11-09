import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const sitemap = new SitemapStream({ hostname: "https://plevate.in" });

// Define all your routes here (same as your React Router setup)
const routes = [
  "/",
  "/homepage",
  "/about",
  "/services",
  "/process",
  "/contact",
  "/case-study",
];

// Write each route into the sitemap
routes.forEach((url) => sitemap.write({ url }));

sitemap.end();

// Save the sitemap file inside the public folder
streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("Sitemap generated successfully!");
});
