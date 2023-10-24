import loadable from "@loadable/component";
import { ErrorBoundary } from "../../components";
import { Loading } from "../../components";

const About = loadable(() => import("./about"), {
  fallback: <Loading />,
});

const AboutBoundary = (props) => (
  <ErrorBoundary>
    <About {...props} />
  </ErrorBoundary>
);
export default AboutBoundary;
