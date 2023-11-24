import { useState } from "react";
import Slider from "react-slider";

const MIN = 10;
const MAX = 2500;

interface AreaRangeProps {
  onAreaChange?: (newValues: [number, number]) => void;
}

const SquareFeet: React.FC<AreaRangeProps> = ({ onAreaChange }) => {
  const [values, setValues] = useState<[number, number]>([MIN, MAX]);

  const handleValueChange = (newValues: [number, number]) => {
    setValues(newValues);
    if (onAreaChange) {
      onAreaChange(newValues);
    }
  };

  return (
    <div className="border border-gray-200 p-5 rounded-sm">
      <Slider
        className="slider"
        onChange={handleValueChange}
        pearling
        value={values}
        min={MIN}
        max={MAX}
      />
      <div className="mt-8 text-baseLight text-sm">
        <span className="flex justify-center gap-5">
          <span>{values[0]} sq.ft </span> - <span>{values[1]} sq.ft +</span>
        </span>
      </div>
    </div>
  );
};

export default SquareFeet;
