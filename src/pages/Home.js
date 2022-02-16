import React from "react";
import { Background, Parallax } from "react-parallax";
import InfiniteScroll from "../components/InfiniteScroll";
import List from "../components/List";
import "./Home.scss";
import backgroundImage from "../images/sven-wilhelm-background.jpg";
import NavBar from "../components/NavBar";
// import backgroundImage from "../images/tim-mossholder-background.jpg";

const Home = () => {
  const styles = {
    fontFamily: "Satisfy",
    textAlign: "center",
  };
  const insideStyles = {
    background: "rgba(255, 255, 255, .5)",
    fontFamily: "Montserrat",
    fontSize: "8rem",
  };

  const headerClass = {
    backgroundColor: "rgb(59, 125, 118)",
    height: "100vh",
  };
  const header2Class = {
    backgroundColor: "rgb(0, 109, 119)",
    height: "100vh",
  };
  const header3Class = {
    backgroundColor: "rgb(224, 240, 245)",
    height: "100vh",
  };
  const header5Class = {
    backgroundColor: "rgb(255, 240, 235)",
    height: "100vh",
  };
  const header4Class = {
    backgroundColor: "rgb(245, 245, 245)",
    height: "100vh",
  };
  const headerContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const insideHeaderClass = {
    color: "rgba(255, 255, 255)",
    fontFamily: "Satisfy",
    fontSize: "15vw",
  };

  const insideSubHeaderClass = {
    color: "rgba(255, 255, 255)",
    fontFamily: "Montserrat",
    fontSize: "4vw",
  };

  const whereWhenContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const whereWhenBody = {
    background: "rgba(255, 255, 255, .5)",
    fontFamily: "Montserrat",
    fontSize: "5vh",
    margin: "100px",
  };

  const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  const image2 =
    "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  return (
    // <Parallax
    //   bgImage={backgroundImage}
    //   renderLayer={(percentage) => (
    //     <div>
    //       <div
    //         style={{
    //           position: "absolute",
    //           background: `rgba(255, 255, 255, .5)`,
    //           left: "50%",
    //           top: "50%",
    //           width: percentage * 500,
    //           height: percentage * 500,
    //         }}
    //       >
    //         More Liz and Seb
    //       </div>
    //       <div
    //         style={{
    //           position: "absolute",
    //           background: `rgba(255, 255, 255, .5)`,
    //           left: "1%",
    //           top: "30%",
    //           width: percentage * 500,
    //           height: percentage * 500,
    //         }}
    //       >
    //         More Liz and Seb
    //       </div>
    //     </div>
    //   )}
    // >
    <div>
      <NavBar />
      <Parallax strength={500} style={headerClass}>
        <div style={headerContainer}>
          <div style={insideHeaderClass}>Liz & Seb</div>
          <div style={insideSubHeaderClass}>Are Getting Married</div>
        </div>
      </Parallax>
      <Parallax bgImage={header4Class} blur={{ min: -1, max: 3 }}>
        <div style={whereWhenContainer}>
          <div style={whereWhenBody}>
            <div>When</div>
            <div>October 29, 2022</div>
          </div>
          <div style={whereWhenBody}>
            <div>Where</div>
            <div>Cana Vineyards and Winery of Middleburg</div>
            <div>38600 John Mosby Hwy, Middleburg, VA 20117</div>
          </div>
        </div>
      </Parallax>
      <Parallax strength={500} style={header2Class}>
        <div style={headerContainer}>
          <div style={insideHeaderClass}>Liz & Seb</div>
          <div style={insideSubHeaderClass}>Are Getting Married</div>
        </div>
      </Parallax>
      <Parallax bgImage={backgroundImage} strength={-100}>
        <div style={{ height: "100vh" }}>
          <div style={insideStyles}>Reverse direction</div>
        </div>
      </Parallax>
      <Parallax strength={500} style={header3Class}>
        <div style={headerContainer}>
          <div style={insideHeaderClass}>Liz & Seb</div>
          <div style={insideSubHeaderClass}>Are Getting Married</div>
        </div>
      </Parallax>
      <Parallax strength={500} style={header4Class}>
        <div style={headerContainer}>
          <div style={insideHeaderClass}>Liz & Seb</div>
          <div style={insideSubHeaderClass}>Are Getting Married</div>
        </div>
      </Parallax>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
