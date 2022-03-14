import dog01 from "../assets/dog01.jpg";

const Dogs = () => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        background: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Page Dogs
      <img src={dog01} alt="dog brown"></img>
    </div>
  );
};

export default Dogs();
