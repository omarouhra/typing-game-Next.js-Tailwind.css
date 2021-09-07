function Text({ text, userInput }) {
  const preview = text.split(" ");
  const input = userInput.split(" ");
  return (
    <div className='flex'>
      {preview.map((word, index) => (
        <p
          className={
            word === input[index]
              ? "text-3xl mr-3 -translate-y-10 opacity-0 transition duration-delay-200 "
              : "text-gray-500 text-3xl mr-3"
          }
          key={index}>
          {word}{" "}
        </p>
      ))}
    </div>
  );
}

export default Text;
