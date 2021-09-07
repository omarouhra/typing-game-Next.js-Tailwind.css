function Wpm({ seconds, correctWords }) {
  return (
    <div>
      <p>{Math.round(correctWords / (seconds / 60))}</p>

    </div>
  );
}

export default Wpm;
