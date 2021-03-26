import { useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";

function ScrollToTop() {
  // History hook to obtain location props.
  const history = useHistory();

  useEffect(() => {
    // Effect to handle scrollToTop.
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

// Wrapper.
export default withRouter(ScrollToTop);
