function Text({ text, userInput }) {
  const preview = text.split(" ");
  const input = userInput.split(" ");
  return (
    <div>
      {preview.map((word, index) => (
        <span
          className={
            word === input[index]
              ? "bg-green-100  text-3xl mr-3"
              : "text-gray-500 text-3xl mr-3"
          }
          key={index}>
          {word}{" "}
        </span>
      ))}
    </div>
  );
}

export default Text;
