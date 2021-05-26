import "./quote.css";

function Quote() {
  return (
    <div className="quote-box">
      <div className="quote">
        <span className="doubleQuotes">&ldquo;</span>
        There is no one who loves pain itself, who seeks after it and wants to
        have it, simply because it is pain...
        <span className="doubleQuotes">&rdquo;</span>
      </div>
      <div className="footer">
        <div className="author">- by Lorem Ipsum</div>
      </div>
    </div>
  );
}

export default Quote;
