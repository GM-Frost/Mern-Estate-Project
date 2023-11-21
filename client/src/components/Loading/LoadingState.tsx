import { LogoDark } from "../../assets";
import { useState, CSSProperties } from "react";
import { MoonLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LoadingState = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <MoonLoader
        color="#7166f0"
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      Loading ...
    </div>
  );
};

export default LoadingState;
