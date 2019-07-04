import React from "react";
import ReactDOM from "react-dom";

function User({ firstName, lastName, age, children }) {
  const addition = children ? (
    <div style={{ border: "1px dashed red" }}>{children}</div>
  ) : null;

  return (
    <div style={{
        border: `${Math.random() * 5}px solid black`,
        marginTop: "15px",
        padding: "5px"
      }}>
      <span>{firstName}</span>
      <span>{lastName}</span>
      <div>He(she) is {age} years old</div>
      {addition}
    </div>
  );
}

function Circle({ children }) {
  const addition = children ? (
    <div style={{
        display: "block",
        width: "200px",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        top: "50%"
      }}>
      {children}
    </div>
  ) : null;

  return (
    <div style={{
        border: "1px solid black",
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        color: "black",
        backgroundColor: `rgb(${Math.random() * 265}, ${Math.random() *
          265}, ${Math.random() * 265}`,
        position: "relative"
      }}>
      {addition}
    </div>
  );
}
function Rect({ children }) {
  const addition = children ? (
    <div style={{
        display: "block",
        width: "200px",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        top: "50%"
      }}>
      {children}
    </div>
  ) : null;

  return (
    <div style={{
        position: "relative",
        border: "2px solid black",
        width: "260px",
        height: "150px",
        backgroundColor: `rgb(${Math.random() * 265}, ${Math.random() *
          265}, ${Math.random() * 265}`
      }}>
      {addition}
    </div>
  );
}

function Address({ country, city, street, location }) {
  return (
    <address>
      <div>{country}</div>
      <div>{city}</div>
      <div>{street}</div>
      <a href={`https://www.google.com/maps/@${location.lat},${location.lng},18z`}>
        Location
      </a>
    </address>
  );
};

function Header() {
  return (
    <header>
      <h1>My HEADER</h1>
    </header>
  );
};

function Content() {
  return (
    <div id="mainContent">
      <Circle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          esse.
      </Circle>
      <Rect>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          esse.
      </Rect>
    </div>
  );
}

function Footer() {
  return (
    <Footer>
      <Address 
        country="UA"
        city="Poltava"
        street="Hozhulivs'ka"
        location={{ lat: 49.6033, lng: 34.48548 }}>
      </Address>
    </Footer>
  );
};

window.render = function render() {
  ReactDOM.render(
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>,
    document.getElementById("root")
  );
};