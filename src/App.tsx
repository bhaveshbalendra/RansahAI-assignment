import React from "react";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="box box-top-left"></div>
      <div className="box box-top-right"></div>
      <div className="box box-bottom-left"></div>
      <div className="box box-bottom-right"></div>
      <div className="sub-container sub-container-left">
        <div className="box box-top-left"></div>
        <div className="box box-top-right"></div>
        <div className="box box-bottom-left"></div>
        <div className="box box-bottom-right"></div>
      </div>
      <div className="sub-container sub-container-right">
        <div className="box box-top-left"></div>
        <div className="box box-top-right"></div>
        <div className="box box-bottom-left"></div>
        <div className="box box-bottom-right"></div>
      </div>
    </div>
  );
};

export default App;
