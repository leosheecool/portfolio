const stringToFormatedJSXOutput = (string: string) => {
  return string.split('\n').map((substring, index) => (
    <span key={index}>
      {substring}
      <br />
    </span>
  ));
};

export default stringToFormatedJSXOutput;
