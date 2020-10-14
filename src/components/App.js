import React, { useState } from "react";
import { splitText } from "../utils";

import GlobalStyle from "../styles/global";
import Line from "./Line";
import Button from "./Button";
import data from "../data";

const DELAY = 100; // delay between showing the next line

const App = () => {
    const [nodeIndex, setNodeIndex] = useState(1);
    const { text, options } = data.find((n) => n.id === nodeIndex);
    const lines = splitText(text);
    const [name, setName] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [questionTracker, setQuestionTracker] = useState([]);

    const capitalize = (s) => {
        if (typeof s !== "string") return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    return (
        <>
            <GlobalStyle />
            {!showResults && (
                <>
                    <section>
                        {lines.map((text, i) => (
                            <>
                                <Line
                                    key={`line:${nodeIndex}:${i}`}
                                    delay={i * DELAY}
                                    text={text}
                                />
                            </>
                        ))}
                    </section>
                    {options && (
                        <section>
                            {options.map((option, i) => (
                                <>
                                    {option.value === 5 && (
                                        <div className="wrapper">
                                            <input
                                                placeholder="Name..."
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                type="text"
                                                className="name__input"
                                            />
                                        </div>
                                    )}
                                    <Button
                                        key={`button:${nodeIndex}:${i}`}
                                        delay={(lines.length + 1) * DELAY}
                                        text={option.text}
                                        handleClick={() => {
                                            if (
                                                option.value !== 1 &&
                                                option.value !== 2 &&
                                                option.value !== 3 &&
                                                option.value !== 4
                                            ) {
                                                setQuestionTracker([
                                                    ...questionTracker,
                                                    option.value,
                                                ]);
                                            }
                                            if (
                                                option.value === 13 ||
                                                option.value === 14 ||
                                                option.value === 15 ||
                                                option.value === 16 ||
                                                option.value === 17 ||
                                                option.value === 7 ||
                                                option.value === 8 ||
                                                option.value === 9 ||
                                                option.value === 10 ||
                                                option.value === 11
                                            ) {
                                                setShowResults(true);
                                                return;
                                            }
                                            if (option.value === 5) {
                                                if (name.length === 0)
                                                    return alert(
                                                        "Please enter name..."
                                                    );
                                                localStorage.setItem(
                                                    "name",
                                                    name
                                                );
                                                setNodeIndex(option.value);
                                                window.onbeforeunload = function () {
                                                    localStorage.removeItem(
                                                        "name"
                                                    );
                                                    return "";
                                                };
                                            } else {
                                                setNodeIndex(option.value);
                                            }
                                        }}
                                    />
                                </>
                            ))}
                        </section>
                    )}
                </>
            )}
            {showResults && (
                <div className="result__container">
                    <h1 className="result__heading">Results</h1>
                    <h2 className="result__name">
                        {capitalize(localStorage.getItem("name"))}
                    </h2>
                    <h3
                        className="font"
                        style={{
                            textDecoration: "underline",
                            fontSize: "22px",
                        }}
                    >
                        Answered questions:
                    </h3>
                    {questionTracker.length &&
                        questionTracker.map((ans) => (
                            <>
                                {/* <h3>{ans}</h3> */}
                                <p
                                    className="font"
                                    style={{ fontSize: "19px" }}
                                >
                                    {" "}
                                    {data.find((n) => n.id === ans).text}
                                    {""}
                                </p>
                            </>
                        ))}
                    <button
                        className="btn"
                        onClick={() => {
                            localStorage.removeItem("name");
                            setName("");
                            setNodeIndex(1);
                            setShowResults(false);
                            setQuestionTracker([]);
                        }}
                    >
                        Retake
                    </button>
                </div>
            )}
        </>
    );
};

export default App;
