import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyList extends Component {
  state = {cryptoCurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptoData = await response.json()
    const updatedCryptoData = cryptoData.map(eachCrypto => ({
      id: eachCrypto.id,
      currencyLogo: eachCrypto.currency_logo,
      currencyName: eachCrypto.currency_name,
      usdValue: eachCrypto.usd_value,
      euroValue: eachCrypto.euro_value,
    }))

    this.setState({cryptoCurrencyData: updatedCryptoData, isLoading: false})
  }

  render() {
    const {cryptoCurrencyData, isLoading} = this.state

    return (
      <div className="crypto-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-image"
            />
            <div className="crypto-table">
              <div className="table-labels-container">
                <h1 className="label-1 coin">Coin Type</h1>
                <div className="rem-label-container">
                  <h1 className="label-2 cur">USD</h1>
                  <h1 className="label-2 cur">EURO</h1>
                </div>
              </div>
              <ul className="crypto-list">
                {cryptoCurrencyData.map(eachCrypto => (
                  <CryptocurrencyItem
                    key={eachCrypto.id}
                    cryptoDetails={eachCrypto}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
