import loadable from "@loadable/component";
import { ErrorBoundary } from "../../components";

const Home = loadable(() => import("./home"));

const HomeBoundary: React.FC<ICommonProps> = (props) => (
  <ErrorBoundary>
    <Home {...props} />
  </ErrorBoundary>
);

export default HomeBoundary;
