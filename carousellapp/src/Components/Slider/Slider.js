import React, { useState } from "react";
import sliderComponent from "./SliderData";
import SliderBtn from "./SliderBtn";

export default function Slider() {
  const [skillIndex, setSkillIndex] = useState(1);

  const prevSlide = () => {
    if (skillIndex !== 1) {
      setSkillIndex(skillIndex - 1);
    } else if (skillIndex === 1) {
      setSkillIndex(sliderComponent.length);
    }
  };

  const nextSlide = () => {
    if (skillIndex !== sliderComponent.length) {
      setSkillIndex(skillIndex + 1);
    } else if (skillIndex === sliderComponent.length) {
      setSkillIndex(1);
    }
  };

  return (
    <div className="col-2">
      <div className="slider_container">
        {sliderComponent.map((item, index) => {
          return (
            <div>
              <div
                className={
                  skillIndex === index + 1 ? "skill active-skill" : "skill"
                }
                key={item.id}
              >
                <div className="skilldescr">
                  <p>{item.skillname}</p>
                  <strong>{item.rating}</strong>
                </div>
                <img
                  src={
                    process.env.PUBLIC_URL + `/slider/illustr${index + 1}.png`
                  }
                  alt={item.skill_img_descr}
                />
              </div>
            </div>
          );
        })}
        <div className="slider_arrows">
          <SliderBtn changeSlide={prevSlide} direction="prev" />
          <SliderBtn changeSlide={nextSlide} direction="next" />
        </div>
      </div>
    </div>
  );
}
