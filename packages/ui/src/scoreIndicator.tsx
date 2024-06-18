export function ScoreIndicator({ value, maxValue } : { value: number, maxValue: number}) {
    const val = (value / maxValue) * 100;
    const deg = (180 / 100) * val;
    return (
      <div className="indicator">
        <span className="bar" style={{ transform: `rotate(${deg}deg)` }} />
        <span className="result">
          <span>{value}</span>/<span>{maxValue}</span>
        </span>
      </div>
    );
  }