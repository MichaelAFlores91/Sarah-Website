import "./Galaxy.css";

export default function GalaxyStars() {
  const stars = Array.from({ length: 150 });

  return (
    <>
      {stars.map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: Math.random() * 100 + "vh",
            left: Math.random() * 100 + "vw",
            animationDelay: Math.random() * 5 + "s",
          }}
        />
      ))}
    </>
  );
}
