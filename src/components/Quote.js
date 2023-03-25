import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({
    quote: '',
    author: '',
    category: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    const result = async () => {
      try {
        const getQuote = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': '8Mf07BcfVhJr93elGCb1FA==VeSw7iVph46oXoru',
          },
        });
        setQuote(...getQuote);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    result();
  }, [setQuote]);

  const Show = () => {
    if (error) {
      return (
        <p className="">Error Loading the quote, please reload the page</p>
      );
    }
    if (loading) {
      return (
        <p className="">loading...</p>
      );
    }
    return (
      <p className="">
        {quote.quote}
        {' '}
        -
        {' '}
        {quote.author}
      </p>
    );
  };

  return (
    <div className="quote-div">
      <h2 className="title-quote">Quote:</h2>
      <Show />
    </div>
  );
};

export default Quote;
