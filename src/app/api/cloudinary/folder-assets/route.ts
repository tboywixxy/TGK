import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get("folder");
    const next_cursor = searchParams.get("next_cursor") || undefined;

    if (!folder) {
      return NextResponse.json(
        { ok: false, message: "Missing folder parameter" },
        { status: 400 }
      );
    }

    const result: any = await cloudinary.search
      .expression(`asset_folder="${folder}"`)
      .max_results(100)
      .next_cursor(next_cursor)
      .execute();

    const assets = (result.resources || []).map((item: any) => ({
      public_id: item.public_id,
      asset_folder: item.asset_folder || null,
      format: item.format,
      resource_type: item.resource_type,
      secure_url: item.secure_url,
      url: item.url,
      width: item.width,
      height: item.height,
      created_at: item.created_at,
      bytes: item.bytes,
      display_name: item.display_name,
    }));

    return NextResponse.json({
      ok: true,
      folder,
      total_count: result.total_count ?? assets.length,
      count: assets.length,
      assets,
      next_cursor: result.next_cursor || null,
    });
  } catch (error: any) {
    console.error("Cloudinary folder assets error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: error?.message || "Failed to fetch Cloudinary assets",
      },
      { status: 500 }
    );
  }
}