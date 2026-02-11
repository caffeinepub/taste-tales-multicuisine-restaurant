export default function WatermarkBackground() {
  const watermarkImages = [
    '/assets/generated/restaurant-watermark-01.dim_2400x1600.png',
    '/assets/generated/restaurant-watermark-02.dim_2400x1600.png',
    '/assets/generated/restaurant-watermark-03.dim_2400x1600.png',
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Multiple watermark layers for visual depth */}
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.03]"
        style={{
          backgroundImage: `url(${watermarkImages[0]})`,
          backgroundSize: '800px 533px',
          backgroundPosition: '0 0',
        }}
      />
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.02]"
        style={{
          backgroundImage: `url(${watermarkImages[1]})`,
          backgroundSize: '900px 600px',
          backgroundPosition: '200px 100px',
        }}
      />
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.02]"
        style={{
          backgroundImage: `url(${watermarkImages[2]})`,
          backgroundSize: '850px 567px',
          backgroundPosition: '400px 200px',
        }}
      />
    </div>
  );
}
