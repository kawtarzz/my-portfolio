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

      // eslint-disable-next-line jsx-a11y/iframe-has-title, react/style-prop-object
      <iframe style="border: 1px solid #777;" src="https://indd.adobe.com/embed/7117dedb-320f-44ff-93f2-fe519e08a6f4?startpage=1&allowFullscreen=true" width="525px" height="371px" frameborder="0" allowfullscreen=""></iframe>
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


