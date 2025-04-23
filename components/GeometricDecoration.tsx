export default function GeometricDecoration({ className }: { className?: string }) {
  return (
    <div className={`absolute z-0 pointer-events-none ${className}`}>
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M200 0L400 173.2L323.2 400H76.8L0 173.2L200 0Z"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="2"
          fill="none"
          className="text-amber-500"
        />
        <path
          d="M200 40L350 173.2L290 360H110L50 173.2L200 40Z"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="2"
          fill="none"
          className="text-amber-500"
        />
      </svg>
    </div>
  );
}