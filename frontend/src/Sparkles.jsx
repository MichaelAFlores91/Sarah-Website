import "./Background.css";

export default function Sparkles() {
  const sparkles = Array.from({ length: 80 });

  return (
    <>
      {sparkles.map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: Math.random() * 100 + "vw",
            animationDelay: Math.random() * 6 + "s",
            animationDuration: 3 + Math.random() * 6 + "s",
          }}
        />
      ))}
    </>
  );
}
