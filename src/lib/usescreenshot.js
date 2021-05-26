import download from "downloadjs";
import { toPng } from "html-to-image";
import React from "react";

/**
 * Hook to generate screenshot
 * https://github.com/bubkoo/html-to-image/issues/122#issuecomment-831912884
 */
function useScreenshot() {
  const captureRef = React.useRef();

  const [status, setStatus] = React.useState("idle");

  async function generateImage(e) {
    e.preventDefault();
    if (!captureRef?.current) {
      return;
    }
    try {
      setStatus("loading");
      // add company name on the right bottom corner
      const footerElement = captureRef.current?.children[0]?.children[1];
      const companyElement = document.createElement("div");
      companyElement.setAttribute("class", "company");
      companyElement.innerText = "@lipsum.com";
      footerElement.insertBefore(companyElement, footerElement.firstChild);
      const imgBase64 = await toPng(captureRef.current, {
        quality: 1,
        pixelRatio: 1,
      });
      footerElement.removeChild(footerElement.childNodes[0]);
      setStatus("success");
      download(imgBase64, "quote-lipsum.png");
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  }

  return {
    generateImage,
    captureRef,
    status,
  };
}

export default useScreenshot;
