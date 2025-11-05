import { ThreeCircles } from "react-loader-spinner";

export default function Spiner() {
  return (
    <ThreeCircles
      visible={true}
      height="200"
      width="200"
      color="#6EFDFF"
      ariaLabel="three-circles-loading"
    />
  );
}
