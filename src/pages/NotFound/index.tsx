import { memo } from "react";
import { Helmet } from "react-helmet";

import "./styles.scss";

type StaticContext = {
  statusCode: number;
};

type Props = {
  staticContext?: StaticContext;
};

const NoteFound: React.FC<Props> = ({ staticContext }) => {
  // We have to check if staticContext exists
  // because it will be undefined if rendered through a BrowserRoute
  /* istanbul ignore next */
  if (staticContext) staticContext.statusCode = 404;

  return (
    <div className='NotFound'>
      <Helmet title="Oops" />
      <p>Oops, Page was not found!</p>
    </div>
  );
};

export default memo(NoteFound);
