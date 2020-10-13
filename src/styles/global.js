import { createGlobalStyle } from "styled-components";
import paper from "../cream-paper.png";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Alegreya&display=swap');

  body {
    background-color: #f5efc9;
    background-image: url(${paper});
    padding: 2em;
  }

  .name__input {
    padding: 5px;
    margin: 0.1em 0.18em;
    background-color: #f5efc9;
    outline: 0;
    border: 1px solid black;
    font-family: "Alegreya",serif;
    font-size: 2em;
    margin-top:10px;
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
    color: #e1ddc9;
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
    color: #111;
    font-family: 'Alegreya',serif;
    font-size: 4em;
    margin-top: 0px;
}
  }

  .result__name{
    font-size: 2.5em;
  }
`;
