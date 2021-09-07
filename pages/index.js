import Head from "next/head";
import { useEffect, useState } from "react";
import Speed from "../components/speed";
import Text from "../components/Text";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const text = "This is the best typing game ever";


  const inputHandler = e => {
    setUserInput(e.target.value);
  };
  const onRestart = e => {
    e.preventDefault();
    e.target.value = "";

    console.log(text.split(" "));
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col space-y-12 items-center justify-center h-screen'>
        <Text  text={text} userInput={userInput} />
        <form>
          <textarea
            type='text'
            placeholder='start'
            onChange={inputHandler}
            autoFocus={true}
          />
          <Speed />
          <button onClick={onRestart}>restart</button>
        </form>
      </main>
    </div>
  );
}
