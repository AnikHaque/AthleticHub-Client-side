import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} `; // Replace "SubHub" with your site name
  }, [title]);
};

export default useTitle;
