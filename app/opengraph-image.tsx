import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const alt = `${company.name} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#0b1319",
          color: "#f5f3ef",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            width: 330,
            height: 630,
            background: "#14232c",
            borderLeft: "1px solid #2b3a43",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 78,
            bottom: 68,
            display: "flex",
            color: "#21343f",
            fontSize: 260,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          R
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "54px 62px 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 72,
                  height: 72,
                  border: "2px solid #e8763f",
                  borderRadius: 999,
                  color: "#f5f3ef",
                  fontSize: 34,
                  fontWeight: 700,
                }}
              >
                R
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                  }}
                >
                  RELIABLE
                </span>
                <span
                  style={{
                    marginTop: 7,
                    color: "#aeb9bf",
                    fontSize: 13,
                    letterSpacing: "0.18em",
                  }}
                >
                  CONSULTING &amp; CONSTRUCTION
                </span>
              </div>
            </div>

            <span
              style={{
                marginRight: 2,
                color: "#c4cdd1",
                fontSize: 14,
                letterSpacing: "0.18em",
              }}
            >
              BHARATPUR · CHITWAN
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: 800 }}>
            <span
              style={{
                marginBottom: 22,
                color: "#e8763f",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.2em",
              }}
            >
              HOUSE ENGINEERING · ONE COORDINATED TEAM
            </span>
            <div
              style={{
                display: "flex",
                width: 56,
                height: 4,
                marginBottom: 24,
                background: "#e8763f",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 72,
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                fontWeight: 700,
              }}
            >
              <span>Your dream home.</span>
              <span>Our commitment.</span>
            </div>
            <p
              style={{
                margin: "24px 0 0",
                color: "#b7c0c5",
                fontSize: 21,
                lineHeight: 1.45,
              }}
            >
              Planning · Exterior Design · Structure · Approval · Site Guidance
            </p>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
