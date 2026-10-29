import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

export const alt = "Mohammed Barzinje, Senior Product Manager in Sarpsborg, Norway. Built to ship.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const subline = "Senior Product Manager in Norway. Open to PM, Product Lead and AI roles.";
const domain = "mohammedbarzinje.com";
const glyphs = `Available now${profile.location}${profile.name}.Built to ship.${subline}${domain}`;

// Geist, subset to the glyphs on the card. If Google Fonts is unreachable at build time,
// the card still renders with the font bundled in next/og.
async function loadGeist(weight: 400 | 600) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}&text=${encodeURIComponent(glyphs)}`
    ).then((response) => response.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    const response = await fetch(url);
    return response.ok ? await response.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [portrait, regular, semibold] = await Promise.all([
    readFile(join(process.cwd(), "public", "meg2.png")),
    loadGeist(400),
    loadGeist(600),
  ]);

  const fonts = [
    regular && { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    semibold && { name: "Geist", data: semibold, weight: 600 as const, style: "normal" as const },
  ].filter((font) => !!font);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: "#08080a",
          color: "#f4f3ef",
          fontFamily: fonts.length ? "Geist" : undefined,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 520,
            top: -220,
            width: 1000,
            height: 1000,
            backgroundImage:
              "radial-gradient(circle, rgba(128,32,48,0.6) 0%, rgba(128,32,48,0.16) 42%, rgba(8,8,10,0) 70%)",
          }}
        />

        <div
          style={{
            height: 472,
            width: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 12,
              padding: "8px 18px 8px 14px",
              borderRadius: 999,
              border: "1px solid rgba(244,243,239,0.12)",
              background: "rgba(244,243,239,0.04)",
              fontSize: 20,
              color: "#c4c1bb",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#cafb42",
                boxShadow: "0 0 14px #cafb42",
              }}
            />
            <span style={{ color: "#f4f3ef", fontWeight: 600 }}>Available now</span>
            <div style={{ width: 1, height: 16, background: "rgba(244,243,239,0.16)" }} />
            <span>{profile.location}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 66,
                fontWeight: 600,
                letterSpacing: "-0.05em",
                lineHeight: 1,
              }}
            >
              <span>{profile.name}.</span>
              <div style={{ display: "flex", marginTop: 6 }}>
                <span>Built to</span>
                <span style={{ color: "#cafb42", marginLeft: "0.25em" }}>ship.</span>
              </div>
            </div>
            <div style={{ marginTop: 28, fontSize: 26, lineHeight: 1.4, color: "#c4c1bb" }}>{subline}</div>
          </div>

          <div style={{ fontSize: 22, color: "#8f8c87" }}>{domain}</div>
        </div>

        <div
          style={{
            display: "flex",
            padding: 10,
            borderRadius: 36,
            border: "1px solid rgba(244,243,239,0.12)",
            backgroundImage: "linear-gradient(180deg, rgba(244,243,239,0.16), rgba(244,243,239,0.03))",
            boxShadow: "0 40px 120px -24px rgba(128,32,48,0.85)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
          <img
            src={`data:image/png;base64,${portrait.toString("base64")}`}
            alt=""
            width={360}
            height={450}
            style={{ borderRadius: 26, objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
