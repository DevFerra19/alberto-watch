import React, { useEffect, useState } from "react";
import "./log.css";

const Log = () => {
  const [visitorsCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const countVisit = localStorage.getItem("visitorsCount");

    const newCount = countVisit ? parseInt(countVisit, 10) + 1 : 1;

    setVisitorCount(newCount);
    localStorage.setItem("visitorsCount", newCount);
  }, []);

  return <div className="log-container">{visitorsCount}</div>;
};

export default Log;