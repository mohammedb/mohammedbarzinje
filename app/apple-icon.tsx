import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 116,
          fontWeight: 600,
          letterSpacing: "-0.06em",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        M<span style={{ color: "#cafb42", marginLeft: -6 }}>.</span>
      </div>
    ),
    { ...size }
  );
}
