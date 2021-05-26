import "./App.css";
import Quote from "./quote/quote";
import useScreenshot from "./lib/usescreenshot";

function App() {
  const { generateImage, captureRef, status } = useScreenshot();
  return (
    <>
      <div className="heading">
        A example of adding company name on the right bottom corner before
        downloading the html as image
      </div>
      <div className="container" ref={captureRef}>
        <Quote />
      </div>
      <button disabled={status === "loading"} onClick={generateImage}>
        Generate image
      </button>
    </>
  );
}

export default App;
