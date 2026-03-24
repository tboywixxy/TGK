import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    let nextCursor: string | undefined = undefined;
    const allFolders: { name: string; path: string }[] = [];

    do {
      const response: any = await cloudinary.api.sub_folders("", {
        max_results: 500,
        next_cursor: nextCursor,
      });

      const folders = response.folders || [];

      allFolders.push(
        ...folders.map((folder: any) => ({
          name: folder.name,
          path: folder.path,
        }))
      );

      nextCursor = response.next_cursor || undefined;
    } while (nextCursor);

    return NextResponse.json({
      ok: true,
      count: allFolders.length,
      folders: allFolders,
    });
  } catch (error: any) {
    console.error("Cloudinary folders error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to fetch Cloudinary folders",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}