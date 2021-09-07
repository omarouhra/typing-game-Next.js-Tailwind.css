import Head from "next/head";
import { useState } from "react";
import Text from "../components/Text";
import Wpm from "../components/Wpm";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [correctWords, setCorrectWords] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const text = "This is the best typing game ever";

  const inputHandler = e => {
    setUserInput(e.target.value);
    setCorrectWords(correctWordsCounter);
    setTimer();
  };
  const setTimer = () => {
    setIsStarted(true);
    setInterval(() => {
      return setSeconds(seconds + 1);
    }, 1000);
  };

  const correctWordsCounter = () => {
    const gameText = text.split(" ");
    return userInput
      .split(" ")
      .filter((word, index) => word === gameText[index]).length;
  };
  const onRestart = e => {
    e.preventDefault();
    setUserInput("");
    e.target.value = "";
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col space-y-12 items-center justify-center h-screen'>
        <Text text={text} userInput={userInput} />
        <form>
          <textarea
            type='text'
            placeholder='start'
            onChange={inputHandler}
            autoFocus={true}
          />

          <button onClick={onRestart}>restart</button>
        </form>
        <Wpm seconds={seconds} correctWords={correctWords} />
      </main>
    </div>
  );
}
