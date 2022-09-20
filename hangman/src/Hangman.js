import React, { useState } from "react";
import "./style.css";
const Hangman = () => {
  const questions = ["JAIPUR", "KANPUR"];
  const [ques, setQues] = React.useState("");
  const [result, setResults] = React.useState([]);
  const [play, setPlay] = React.useState(0);
  const [over, setOver] = React.useState(0);
  const [win, setWin] = React.useState("");
  const [ans, setAns] = React.useState("");
  const [count, setCount] = useState(0);
  const [imgno, setImgno] = React.useState(1);
  const [letters, setLetters] = React.useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);

  const playbtn = () => {
    setOver(0);
    setPlay(1);
    setWin("");
    const questions = [
      "Agra",
      "Allahabad",
      "Aligarh",
      "Auraiya",
      "Azamgarh",
      "Barabanki",
      "Budaun",
      "Bagpat",
      "Bahraich",
      "Bijnor",
      "Ballia",
      "Banda",
      "Balrampur",
      "Bareilly",
      "Basti",
      "Bulandsahar",
      "Chandauli",
      "Chitrakoot",
      "Deoria",
      "Etawah",
      "Firozabad",
      "Farrukhabad",
      "Fatehpur",
      "Faizabad",
      "Gonda",
      "Ghazipur",
      "Gorakhpur",
      "Ghaziabad",
      "Hamirpur",
      "Hardoi",
      "Jhansi",
      "Jalaun",
      "Kannauj",
      "Kanpur",
      "Kaushambi",
      "Kushinagar",
      "Lalitpur",
      "Lucknow",
      "Mau",
      "Meerut",
      "Maharajganj",
      "Mahoba",
      "Mirzapur",
      "Moradabad",
      "Mainpuri",
      "Mathura",
      "Muzaffarnagar",
      "Pilibhit",
      "Shamli",
      "Pratapgarh",
      "Rampur",
      "Raebareli",
      "Saharanpur",
      "Sitapur",
      "Shahjahanpur",
      "Siddharthnagar",
      "Sonbhadra",
      "Sultanpur",
      "Shravasti",
      "Unnao",
      "Varanasi",
    ];
    const rndInt = Math.floor(Math.random() * (questions.length - 1) + 1);
    setQues(questions[rndInt].toUpperCase());
  };
  const answer = (e) => {
    console.log(ques);
    let res = [...result];

    if (ques.split("").includes(e)) {
      let ltrs = letters;
      ltrs.splice(letters.indexOf(e), 1);
      setLetters([...ltrs]);
      ques.split("").map((i, index) => {
        if (i == e) {
          setCount((prev) => prev + 1);

          res[index] = e;
        }
      });
      console.log(count + 1);
      setResults(res);
      if (count + 1 == ques.split("").length) {
        setWin("Winner");
        setImgno("over");
        setPlay(0);
        setOver(1);
        res.splice(0, res.length);
      }
    } else {
      if (imgno == 6) {
        setImgno("over");
        setPlay(0);
        setOver(1);
        setWin("Loose");
      }
      if (imgno < 6) {
        setImgno(imgno + 1);
      }
    }
  };
  const restart = () => {
    setCount(0);
    playbtn();
    setOver(0);
    setWin("");
    setImgno(1);
    setResults([]);
    setLetters([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ]);
  };
  const resetme = () => {
    window.location.reload();
  };
  return (
    <div className="wholegame">
      <h1>Hangman Game</h1>

      {over == 1 ? (
        <>
          {/* <img src="https://img.freepik.com/premium-vector/game-retro-pixel-art-design-glitch-noise-style-isolated-white-background-concept-level-final-virtual-gaming-classic-user-interface-online-videogames-vector-illustration_342166-224.jpg?w=2000" /> */}
        </>
      ) : (
        <img src={`images/${imgno}.png`} />
      )}

      {win == "Winner" ? (
        <>
          <img src="https://previews.123rf.com/images/lkeskinen/lkeskinen1808/lkeskinen180806452/111799532-winner-black-stamp-on-white-background-sign-label-sticker.jpg" />
          <h1 className="winner">You win !</h1>
        </>
      ) : (
        <></>
      )}
      {win == "Loose" ? (
        <>
          <img src="images/over.png" />
          <h1 className="winner">You lose !</h1>
        </>
      ) : (
        <></>
      )}

      {play == 0 ? (
        <>
          {over == 1 ? (
            <>
              <button className="play" onClick={restart}>
                Restart
              </button>
            </>
          ) : (
            <button className="play" onClick={playbtn}>
              Play
            </button>
          )}
        </>
      ) : (
        <>
          <button className="play" onClick={resetme}>
            Reset
          </button>
          <h2>
            Guess city of Uttar Pradesh [Hint:{" "}
            {ques.split("")[0] + ques.split("")[1]}.....]
          </h2>
          <div className="boxes">
            {ques.split("").map((item, i) => (
              <div className="ansletter">
                {result[i] == undefined ? (
                  <div className="downspace" />
                ) : (
                  result[i]
                )}
              </div>
            ))}
          </div>
          <h2>Guess city of Uttar Pradesh by typing below letters</h2>
          <div className="letterbtn">
            {letters.map((i) => {
              return (
                <button
                  className="ltrbtn"
                  onClick={() => {
                    answer(i);
                  }}
                >
                  {i}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Hangman;
