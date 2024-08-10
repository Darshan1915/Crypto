import React, { useEffect, useState } from 'react';

function CryptoSearch() {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => response.json())
      .then((data) => setCryptos(data));
  }, []);

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a cryptocurrency..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <ul>
        {filteredCryptos.map((crypto) => (
          <li key={crypto.id}>
            {crypto.name} ({crypto.symbol.toUpperCase()}): ${crypto.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CryptoSearch;