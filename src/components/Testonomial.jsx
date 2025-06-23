import React, { useEffect } from 'react';

const Testinomial = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      className="elfsight-app-58722eb1-6c41-4cda-8e64-d289b7410521  container px-10 mx-auto"
      data-elfsight-app-lazy
    ></div>
  );
};

export default Testinomial;
