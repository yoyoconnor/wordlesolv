function WordList({ words }) {
  return (
    <ul>
      {words.map((word) => (
        <li key={word}>{word}</li>
      ))}
    </ul>
  );
}
export default WordList;