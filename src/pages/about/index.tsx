import loadable from "@loadable/component";
import { ErrorBoundary } from "../../components";
import { Props } from "./about";

const About = loadable(() => import("./about"));

const AboutBoundary: React.FC<Props> = (props) => (
  <ErrorBoundary>
    <About {...props} />
  </ErrorBoundary>
);
export default AboutBoundary;
