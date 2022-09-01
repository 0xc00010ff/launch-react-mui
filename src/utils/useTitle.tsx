import { useEffect } from "react";
/** Hook for changing title */
export default function useTitle(title: string) {
  useEffect(() => {
    const oldTitle = document.title;
    if (title) {
      document.title = title;
    }
    // reset title when component unmounts
    return () => {
      document.title = oldTitle;
    };
  }, [title]);
}
