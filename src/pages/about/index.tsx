import loadable from "@loadable/component";
import { ErrorBoundary } from "../../components";

const About = loadable(() => import("./about"));

const AboutBoundary = (props: IAnyProps) => (
  <ErrorBoundary>
    <About {...props} />
  </ErrorBoundary>
);
export default AboutBoundary;
