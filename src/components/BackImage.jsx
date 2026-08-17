export default function ParallaxSection({ bgImage, children }) {
  return (
    <div 
      className="w-full h-[85vh] bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/40 w-full h-full flex items-start justify-start">
        {children}
      </div>
    </div>
  );
}