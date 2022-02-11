import { h } from 'preact';
import { useState, useCallback, useEffect } from 'preact/hooks';

const offScreenStyle = "oj-live-region-offScreenStyle-o1xwg2xa";
/**
 * A helper component that renders an aria-live region
 *
 * TODO: Create a more centralized component that can handle aria-live region for
 * the whole application and use context api to communicate
 */

function LiveRegion({
  atomic = 'false',
  text = '',
  timeout = 100,
  type = 'polite'
}) {
  const ariaLiveText = useLiveText(text, timeout);
  return h("span", {
    "aria-live": type,
    "aria-atomic": atomic,
    class: offScreenStyle
  }, ariaLiveText);
}
/**
 * A custom hook for handling the aria-live region
 *
 * @param text The aria-live text to use
 * @param timeout The timeout for setting the aria-live text async
 * @returns The aria-live text
 */


function useLiveText(text, timeout) {
  const [liveText, setLiveText] = useState();
  const updateText = useCallback(() => setLiveText(text), [text]);
  const updateTextAsync = useCallback(() => setTimeout(updateText, timeout), [updateText, timeout]);
  useEffect(() => {
    const timeoutId = updateTextAsync();
    return () => clearTimeout(timeoutId);
  }, [updateTextAsync]);
  return liveText;
}

export { LiveRegion };
