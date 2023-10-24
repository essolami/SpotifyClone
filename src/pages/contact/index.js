import loadable from "@loadable/component";
import { ErrorBoundary } from "../../components";
import { Loading } from "../../components";

const Contact = loadable(() => import("./contact"), {
  fallback: <Loading />,
});

const ContactBoundaries = (props) => (
  <ErrorBoundary>
    <Contact {...props} />
  </ErrorBoundary>
);
export default ContactBoundaries;
