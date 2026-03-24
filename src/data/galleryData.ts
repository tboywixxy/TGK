export type MediaItem = {
  type: "image" | "video";
  url: string;
  thumbnail: string;
  caption: string;
};

export type Album = {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  media: MediaItem[];
};

const videoThumbnail = (url: string) =>
  url
    .replace("/video/upload/", "/video/upload/so_0,w_800,h_600,c_fill/")
    .replace(".mp4", ".jpg");

const outreachPhotos: MediaItem[] = [
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353044/IMG-20251126-WA0054_1_atxu6w.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353044/IMG-20251126-WA0054_1_atxu6w.jpg",
    caption: "Outreach photo 1",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353040/IMG-20251128-WA0003_lgfvrx.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353040/IMG-20251128-WA0003_lgfvrx.jpg",
    caption: "Outreach photo 2",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353039/IMG-20251128-WA0002_cjeysp.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353039/IMG-20251128-WA0002_cjeysp.jpg",
    caption: "Outreach photo 3",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353039/IMG-20251128-WA0001_w2zt6d.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353039/IMG-20251128-WA0001_w2zt6d.jpg",
    caption: "Outreach photo 4",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353035/IMG-20251126-WA0050_u3c7yr.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353035/IMG-20251126-WA0050_u3c7yr.jpg",
    caption: "Outreach photo 5",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353035/IMG-20251126-WA0055_pyu1jg.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353035/IMG-20251126-WA0055_pyu1jg.jpg",
    caption: "Outreach photo 6",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353033/IMG-20251126-WA0054_nlnoim.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353033/IMG-20251126-WA0054_nlnoim.jpg",
    caption: "Outreach photo 7",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353031/IMG-20251126-WA0052_js85uj.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353031/IMG-20251126-WA0052_js85uj.jpg",
    caption: "Outreach photo 8",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353029/IMG-20251126-WA0048_id4r7q.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353029/IMG-20251126-WA0048_id4r7q.jpg",
    caption: "Outreach photo 9",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353025/IMG-20251126-WA0046_dqxm5c.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353025/IMG-20251126-WA0046_dqxm5c.jpg",
    caption: "Outreach photo 10",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353024/IMG-20251126-WA0045_rw4np1.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353024/IMG-20251126-WA0045_rw4np1.jpg",
    caption: "Outreach photo 11",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353023/IMG-20251126-WA0044_p7eska.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353023/IMG-20251126-WA0044_p7eska.jpg",
    caption: "Outreach photo 12",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353022/IMG-20251126-WA0043_bzwlak.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353022/IMG-20251126-WA0043_bzwlak.jpg",
    caption: "Outreach photo 13",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353021/IMG-20251126-WA0042_z6hi1t.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353021/IMG-20251126-WA0042_z6hi1t.jpg",
    caption: "Outreach photo 14",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353017/IMG-20251126-WA0041_bd7h8u.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353017/IMG-20251126-WA0041_bd7h8u.jpg",
    caption: "Outreach photo 15",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353015/IMG-20251126-WA0040_jjggxq.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353015/IMG-20251126-WA0040_jjggxq.jpg",
    caption: "Outreach photo 16",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353013/IMG-20251126-WA0033_xfihbh.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353013/IMG-20251126-WA0033_xfihbh.jpg",
    caption: "Outreach photo 17",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353013/IMG-20251126-WA0032_lg7hfc.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353013/IMG-20251126-WA0032_lg7hfc.jpg",
    caption: "Outreach photo 18",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353009/IMG-20251126-WA0031_bsgjxe.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353009/IMG-20251126-WA0031_bsgjxe.jpg",
    caption: "Outreach photo 19",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353009/IMG-20251126-WA0027_kga9wf.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353009/IMG-20251126-WA0027_kga9wf.jpg",
    caption: "Outreach photo 20",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353008/IMG-20251126-WA0026_pg9j8o.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353008/IMG-20251126-WA0026_pg9j8o.jpg",
    caption: "Outreach photo 21",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353005/IMG-20251126-WA0007_f3jw3l.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353005/IMG-20251126-WA0007_f3jw3l.jpg",
    caption: "Outreach photo 22",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353004/IMG-20251126-WA0006_amc2sq.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353004/IMG-20251126-WA0006_amc2sq.jpg",
    caption: "Outreach photo 23",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353002/IMG-20251126-WA0005_ht7m7d.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353002/IMG-20251126-WA0005_ht7m7d.jpg",
    caption: "Outreach photo 24",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353002/IMG-20251126-WA0004_latal2.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353002/IMG-20251126-WA0004_latal2.jpg",
    caption: "Outreach photo 25",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352999/IMG-20251126-WA0003_hpil2e.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352999/IMG-20251126-WA0003_hpil2e.jpg",
    caption: "Outreach photo 26",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352999/IMG-20251126-WA0001_q8rgft.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352999/IMG-20251126-WA0001_q8rgft.jpg",
    caption: "Outreach photo 27",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352998/WhatsApp_Image_2025-11-26_at_20.15.08_af3ydu.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352998/WhatsApp_Image_2025-11-26_at_20.15.08_af3ydu.jpg",
    caption: "Outreach photo 28",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352998/IMG-20251126-WA0002_hxjy9g.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352998/IMG-20251126-WA0002_hxjy9g.jpg",
    caption: "Outreach photo 29",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352998/WhatsApp_Image_2025-11-26_at_20.15.08_1_rrikko.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352998/WhatsApp_Image_2025-11-26_at_20.15.08_1_rrikko.jpg",
    caption: "Outreach photo 30",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352997/IMG-20251126-WA0000_nkt4jj.jpg",
    thumbnail: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352997/IMG-20251126-WA0000_nkt4jj.jpg",
    caption: "Outreach photo 31",
  },
];

const outreachVideosRaw = [
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350704/VID-20251128-WA0010_adoxru.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350704/VID-20251128-WA0004_mkus2d.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350704/VID-20251128-WA0006_euraby.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350703/VID-20251128-WA0009_occgze.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350703/VID-20251128-WA0013_bc5nqy.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350701/VID-20251128-WA0011_qip0ci.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350700/VID-20251125-WA0008_ilnqiz.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350696/VID-20251125-WA0009_afzslt.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350695/VID-20251128-WA0012_exvmuq.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350695/VID-20251122-WA0007_qq5nwv.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350695/VID-20251128-WA0007_uzyise.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350695/VID-20251128-WA0008_cskfls.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350694/VID-20251128-WA0005_r4d5da.mp4",
  "https://res.cloudinary.com/df2e1ug1q/video/upload/v1774350694/VID-20251127-WA0001_hdz348.mp4",
];

const outreachVideos: MediaItem[] = outreachVideosRaw.map((url, index) => ({
  type: "video",
  url,
  thumbnail: videoThumbnail(url),
  caption: `Outreach video ${index + 1}`,
}));

export const albums: Album[] = [
  {
    id: "outreach-photos",
    title: "Outreach Photos",
    date: "November 2025",
    description: "Photos from The Guardian's Keeper first outreach across Lagos divisions.",
    coverImage: outreachPhotos[0].url,
    media: outreachPhotos,
  },
  {
    id: "outreach-videos",
    title: "Outreach Videos",
    date: "November 2025",
    description: "Video highlights from The Guardian's Keeper first outreach.",
    coverImage: outreachVideos[0].thumbnail,
    media: outreachVideos,
  },
];