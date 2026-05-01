import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function IconLarge() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fdfbf7",
          fontSize: 332,
          fontWeight: 600,
          letterSpacing: "-0.06em",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        M<span style={{ color: "#cafb42", marginLeft: -16 }}>.</span>
      </div>
    ),
    { ...size }
  );
}
