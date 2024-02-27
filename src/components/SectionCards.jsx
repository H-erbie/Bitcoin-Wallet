import React, { useState } from "react";

const SectionCards = ({
  sectionTopLeft,
  sectionBase,
  sectionTopRight,
  sectionMidTop,
  sectionMidBottomLeft,
  sectionMidBottomRight,
  sectionBottomShow,
  sectionBottomHide,
}) => {
  const [showToggledArea, setShowToggledArea] = useState(false);

  return (
    <section className="section-card-container">
      <article className="section-top">
        <div className="section-top-left sell">{sectionTopLeft}</div>
        <div className="section-top-right">{sectionTopRight}</div>
      </article>
      <article className="section-mid">
        <div className="section-mid-top">{sectionMidTop}</div>
        <div className="section-mid-bottom">
          <div className="section-mid-bottom-left">{sectionMidBottomLeft}</div>
          <div className="section-mid-bottom-right">
            {sectionMidBottomRight}
          </div>
        </div>
      </article>
      <article
        className={showToggledArea ? "section-base show-base" : "section-base "}
      >
        {sectionBase}
      </article>
      <article className="section-bottom">
       {!showToggledArea && <button className="section-btn-show btn" onClick={() => setShowToggledArea(true)}>
          {" "}
          {sectionBottomShow}
        </button>}
       {showToggledArea && <button className="section-btn-hide btn" onClick={() => setShowToggledArea(false)}>
          {" "}
          {sectionBottomHide}
        </button>}
      </article>
    </section>
  );
};

export default SectionCards;
