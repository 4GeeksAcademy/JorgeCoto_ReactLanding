import React from "react";
import Jumbotron from "./jumbotron"; 
import BootstrapCard from "./card";
import Footer from "./footer";
import Navbar from "./navbar";

const home = () => {
  return (
    <div className="text-center container-fluid">
      <Navbar/>
      <div className="jumbotron">
        <Jumbotron  
          title="Bienvenido a React"
          description="React es la biblioteca de renderizado más popular en el mundo"
          buttonLabel="Ir al sitio web oficial"
          buttonURL="https://reactjs.org/"
        />
      </div>
      <div className="row">
        <div className="col custom-card">
          <BootstrapCard 
            title="Bob Dylan" 
            imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true" 
            description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
            buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
            buttonLabel="Go to wikipedia" 
          />
        </div>
        <div className="col custom-card">
          <BootstrapCard 
              title="Bob Dylan" 
              imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true" 
              description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
              buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
              buttonLabel="Go to wikipedia" 
            />
        </div>
        <div className="col custom-card">
          <BootstrapCard 
              title="Bob Dylan" 
              imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true" 
              description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
              buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
              buttonLabel="Go to wikipedia" 
            />
        </div>
        <div className="col custom-card">
          <BootstrapCard 
              title="Bob Dylan" 
              imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true" 
              description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
              buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
              buttonLabel="Go to wikipedia" 
            />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default home;
