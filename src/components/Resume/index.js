import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";


const Resume = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const renderResume = () => {
    return (
      <iframe src="https://onedrive.live.com/embed?resid=DEB0002FC4BFD90D%2143212&authkey=!APw-Lk3jB-f-YwM&em=" width="90%" height="90%" frameborder="0" scrolling="no"></iframe>
    );
  }

  return (
    <div className="resume-container">
      {loading ? (
        <Loader type="ball-scale-multiple" active={loading} />
      ) : (
        renderResume()
      )}
    </div>
  );

};

export default Resume;


