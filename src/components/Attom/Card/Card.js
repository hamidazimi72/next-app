export const Card = ({ children, boxClass = "", shadow = "2", innerShadow = false, radius = "2" }) => {
  const shadowObj = {
    0: "-none",
    1: "-sm",
    2: "",
    3: "-md",
    4: "-lg",
    5: "-xl",
    6: "-2xl",
  };

  const radiusObj = {
    0: "-none",
    1: "-sm",
    2: "",
    3: "-md",
    4: "-lg",
    5: "-xl",
    6: "-2xl",
    7: "-3xl",
    8: "-full",
  };

  return (
    <div
      className={`${innerShadow ? `shadow-inner` : ``} shadow${shadowObj[shadow]} rounded${
        radiusObj[radius]
      } ${boxClass} `}
    >
      {children}
    </div>
  );
};
