import { useState } from "react";
import Slider from "react-slider";

const MIN = 50;
const MAX = 50000;

interface PriceRangeProps {
  onPriceChange?: (newValues: [number, number]) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({ onPriceChange }) => {
  const [values, setValues] = useState<[number, number]>([MIN, MAX]);

  const handleValueChange = (newValues: [number, number]) => {
    setValues(newValues);
    if (onPriceChange) {
      onPriceChange(newValues);
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
          <span>Range:</span>
          <span>
            ${values[0]} - ${values[1]}+
          </span>
        </span>
      </div>
    </div>
  );
};

export default PriceRange;
