export default function TrustMarquee() {
  const words = [
    "COMPASSIONATE CARE", "•",
    "PROFESSIONAL NURSING", "•",
    "DODOMA REGION", "•",
    "24/7 SUPPORT", "•",
    "ELDERLY CARE", "•",
    "POST-SURGERY RECOVERY", "•",
    "CLINICAL EXCELLENCE", "•",
    "FAMILY TRUST", "•"
  ];
  
  // Duplicate for seamless loop
  const duplicatedWords = [...words, ...words, ...words];

  return (
    <div className="bg-roray-green text-white py-4 overflow-hidden flex whitespace-nowrap">
      <div className="marquee flex items-center gap-8 text-[13px] font-bold tracking-[0.1em]">
        {duplicatedWords.map((word, i) => (
          <span key={i} className={word === "•" ? "text-white/50" : ""}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
