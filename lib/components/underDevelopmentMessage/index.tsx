import { Repair } from "@/icons"

export const UnderDevelopmentMessage = () => (
  <>
    <div style={{ textAlign: "center" }}>
      <Repair width={80} height={80} />
    </div>
    <h3
      style={{
        textAlign: "center",
        color: "var(--orange-yellow-crayola)",
        opacity: 0.8,
        marginBottom: "3rem",
      }}
    >
      این قسمت در حال راه اندازی است
    </h3>
  </>
)
