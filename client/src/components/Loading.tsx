import { PropagateLoader } from "react-spinners";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

interface LoadingProps {
  loadingactive: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loadingactive }) => {
  return (
    <p className="text-center my-7 text-2xl">
      Please Wait.
      <PropagateLoader
        color={"#493fb8"}
        loading={loadingactive}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </p>
  );
};

export default Loading;
