import React, { useEffect } from "react";
import { loadReCaptcha } from "react-recaptcha-v3";

import ReCaptchaTest from "./ReCaptchaTest";
import "./App.css";

function App() {
  const mySitekey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    // The useEffect hook equals "componentDidMount"
    loadReCaptcha(mySitekey);
  });

  return (
    <div className="App">
      <ReCaptchaTest recaptchaKey={mySitekey} />
    </div>
  );
}

export default App;
