export default function Avatar({ size = 320, src = "/perfil.jpg" }: { size?: number; src?: string }) {
  const imageSrc = src || `https://api.dicebear.com/9.x/initials/svg?seed=LA&backgroundColor=262626&fontFamily=monospace&fontSize=38&textColor=9CA3AF&size=${size}`;

  return (
    <div
      className="rounded-full overflow-hidden flex-shrink-0 shadow-lg"
      style={{
        width: size,
        height: size,
        border: "1px solid rgba(255,255,255,0.18)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        boxShadow: "0 18px 35px rgba(0,0,0,0.10)",
      }}
    >
      <img
        src={imageSrc}
        alt="Avatar de Leonel Agustín Arce"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        style={{ transform: "scale(1.13) translateY(16px) translateX(2px)", objectPosition: "center 30%" }}
      />
    </div>
  );
}
