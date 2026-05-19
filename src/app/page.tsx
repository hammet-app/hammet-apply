"use client";

export default function CareersPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
        background:
          "linear-gradient(135deg, #1a0533 0%, #3B0764 40%, #1e1050 70%, #0c2a4a 100%)",
      }}
    >
      {/* Background decorations */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
            opacity: 0.18,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "-100px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #5B21B6 0%, transparent 70%)",
            opacity: 0.25,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
            opacity: 0.12,
          }}
        />

        <FloatingShape
          style={{
            top: "12%",
            right: "8%",
            width: 64,
            height: 64,
            borderRadius: 14,
            background: "linear-gradient(135deg, #7C3AED, #5B21B6)",
            transform: "rotate(20deg)",
            opacity: 0.7,
          }}
        />

        <FloatingShape
          style={{
            top: "28%",
            right: "18%",
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #06B6D4, #0e7490)",
            opacity: 0.6,
          }}
        />

        <FloatingShape
          style={{
            bottom: "22%",
            right: "12%",
            width: 52,
            height: 52,
            borderRadius: 10,
            background: "linear-gradient(135deg, #6D28D9, #4C1D95)",
            transform: "rotate(-15deg)",
            opacity: 0.55,
          }}
        />

        <FloatingShape
          style={{
            top: "60%",
            left: "3%",
            width: 40,
            height: 40,
            borderRadius: 8,
            background: "linear-gradient(135deg, #06B6D4, #5B21B6)",
            transform: "rotate(30deg)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Main Card */}
      <div
        style={{
          width: "100%",
          maxWidth: 720,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 0",
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="4"
                y="9"
                width="17"
                height="17"
                rx="4"
                fill="#5B21B6"
                opacity="0.5"
              />
              <rect
                x="9"
                y="4"
                width="17"
                height="17"
                rx="4"
                fill="white"
                opacity="0.9"
              />
            </svg>

            <span
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "-0.02em",
              }}
            >
              HammetLabs
            </span>
          </div>

          <a
            href="/"
            style={{
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Home
          </a>
        </nav>

        {/* Filled Position Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 28,
            padding: "56px 40px",
            textAlign: "center",
            boxShadow: "0 20px 80px rgba(0,0,0,0.25)",
          }}
        >
          {/* Status pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(6, 182, 212, 0.12)",
              border: "1px solid rgba(6, 182, 212, 0.25)",
              borderRadius: 999,
              padding: "8px 16px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#06B6D4",
                display: "inline-block",
              }}
            />

            <span
              style={{
                color: "#67E8F9",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              APPLICATIONS CLOSED
            </span>
          </div>

          {/* Icon */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              margin: "0 auto 24px",
              background: "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
            }}
          >
            💜
          </div>

          {/* Heading */}
          <h1
            style={{
              color: "white",
              fontSize: 48,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: "0 0 20px",
            }}
          >
            Positions Have Been Filled
          </h1>

          {/* Body */}
          <p
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: 17,
              lineHeight: 1.8,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Thank you to everyone who applied for the HammetLabs NYSC roles.
            We received an overwhelming number of applications and truly
            appreciate the time, effort, and creativity each applicant put into
            their submission.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "28px auto 0",
            }}
          >
            If you applied but were not selected this time, please do not be
            discouraged. We’ll announce future opportunities when new openings
            become available.
          </p>

          {/* Footer */}
          <div
            style={{
              marginTop: 40,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.38)",
                fontSize: 13,
                margin: 0,
              }}
            >
              — The HammetLabs Team
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function FloatingShape({
  style,
}: {
  style: React.CSSProperties;
}) {
  return <div style={{ position: "absolute", ...style }} />;
}