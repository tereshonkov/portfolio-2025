import { ThreeCircles } from "react-loader-spinner";

export default function Spiner() {
  return (
    <ThreeCircles
      visible={true}
      height="400"
      width="400"
      color="#6EFDFF"
      ariaLabel="three-circles-loading"
    />
  );
}
