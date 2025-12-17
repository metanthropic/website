export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
       {/* Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      {/* Blue Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#3B82F6] opacity-[0.15] blur-[120px] rounded-full" />
    </div>
  );
}
