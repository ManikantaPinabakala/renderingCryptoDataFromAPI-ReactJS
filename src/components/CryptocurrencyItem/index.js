import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails

  return (
    <li className="crypto-item">
      <div className="table-item-container">
        <div className="currency-container">
          <img
            src={currencyLogo}
            alt={currencyName}
            className="currency-logo"
          />
          <p className="currency-name">{currencyName}</p>
        </div>
        <div className="rem-label-container">
          <p className="value cur">{usdValue}</p>
          <p className="value cur">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
