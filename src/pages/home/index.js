import loadable from "@loadable/component";
import { ErrorBoundary } from "../../components";
const Home = loadable(() => import("./home"), {
  fallback: null,
});

const HomeBoundary = (props) => (
  <ErrorBoundary>
    <Home {...props} />
  </ErrorBoundary>
);

export default HomeBoundary;
