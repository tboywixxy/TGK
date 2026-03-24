import { v2 as cloudinary } from "cloudinary";
import { writeFileSync, readFileSync } from "fs";

// Load env vars from .env.local
const envContent = readFileSync(".env.local", "utf-8");
const envVars = {};
envContent.split("\n").forEach(line => {
  const [key, value] = line.split("=");
  if (key && value) {
    envVars[key.trim()] = value.trim();
  }
});

cloudinary.config({
  cloud_name: envVars.CLOUDINARY_CLOUD_NAME,
  api_key: envVars.CLOUDINARY_API_KEY,
  api_secret: envVars.CLOUDINARY_API_SECRET,
});

async function listAssets(folder) {
  let cursor;
  const assets = [];

  do {
    const res = await cloudinary.api.resources({
      type: "upload",
      prefix: `${folder}/`,
      max_results: 500,
      next_cursor: cursor,
    });

    assets.push(...res.resources);
    cursor = res.next_cursor;
  } while (cursor);

  return assets;
}

async function main() {
  try {
    const folder = "Pictures from outreach";
    console.log(`Fetching assets from folder: ${folder}`);

    const assets = await listAssets(folder);

    console.log(`Found ${assets.length} assets`);

    const output = assets.map(asset => ({
      public_id: asset.public_id,
      format: asset.format,
      resource_type: asset.resource_type,
      secure_url: asset.secure_url,
      url: asset.url,
    }));

    writeFileSync("cloudinary-assets.json", JSON.stringify(output, null, 2));
    console.log("Saved to cloudinary-assets.json");

    // Also save just URLs
    const urls = assets.map(a => a.secure_url);
    writeFileSync("cloudinary-urls.txt", urls.join("\n"));
    console.log("Saved URLs to cloudinary-urls.txt");

  } catch (error) {
    console.error("Error:", error);
  }
}

main();