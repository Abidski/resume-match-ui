interface ScoreCircleProps {
  score: number;
}
function ScoreCircle({ score }: ScoreCircleProps) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const dashed = circumference * (score / 100);

  return (
    <div className="m-7 flex items-center justify-center ">
      <svg width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="#F2EFFF"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="#4F46E5"
          strokeDasharray={`${dashed} ${circumference - dashed}`}
          strokeWidth="8"
          strokeLinecap="round"
          style={{
            transform: "rotate(-85deg)",
            transformOrigin: "center", // Critical: ensures it rotates around its own center
          }}
        />
      </svg>
      <div className="justify-center items-center flex flex-col absolute">
        <span className="justify-center items-center flex font-headline font-black text-2xl">
          {score}%
        </span>
        <span className="justify-center items-center flex font-manrope font-black text-sm">
          Match
        </span>
      </div>
    </div>
  );
}

export default ScoreCircle;
