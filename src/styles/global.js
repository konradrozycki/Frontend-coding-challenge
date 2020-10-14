import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Alegreya&display=swap');

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  padding: 0px;
  height: 70px;
  background-color: #3a3a36;
  width: 100%;
}

.header h1 {
  margin: 0px;
  color: #ffffff;
  margin-left: 30px;
}

.header img {
  width: 50px;
  height: 50px;
  margin-left: 30px;
}

#root {
  padding: 2em;
}

body {
  background-color: #edf5f0;
  margin: 0px;
}

.name__input {
  padding: 5px;
  margin: 0.1em 0.485em;
  background: none;
  outline: 0;
  border: 1px solid #3a3a36;
  font-family: "Alegreya",serif;
  font-size: 2em;
  color: #3a3a36;
  margin-top:10px;
}

.name__input:focus {
  box-shadow:  0 0 0 1px #3a3a36;
}

.btn {
  background: none;
  border: 1px solid #111;    
  box-shadow: none;
  color: #111;    
  cursor: pointer;
  font-family: 'Alegreya', serif;
  font-size: 2em;
  margin-top:0.5em;
  opacity: 0.8;
  outline: none;
  padding: 0 1em;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
}

.jcPjMc:hover,.btn:hover {
    color: #edf5f0;
}
.jcPjMc::before,.btn::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #111;
    z-index: -1;
    transition: 0.8s;
}
.jcPjMc::before,.btn::before {
    bottom: 0;
}
.jcPjMc:hover::before,.btn:hover::before {
    height: 180%;
}

  .result__container {
    border: 1px solid black;
    padding:20px;
  }

  .font {
    color: #111;
    font-family: 'Alegreya',serif;
  }

  .result__heading, .result__name {
    color: #3a3a36;
    font-family: 'Alegreya',serif;
    font-size: 4em;
    margin-top: 0px;
}
  }

  .result__name{
    font-size: 2.5em;
  }
`;
