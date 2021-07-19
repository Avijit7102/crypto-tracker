import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useState } from 'react';
import CryptoDetails from '../CryptoDetails/CryptoDetails';
import './Home.css'
const Home = () => {

    const [cryptoList, setCryptoList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => {
                setCryptoList(data);
            });

    }, [])

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const filterCoins = cryptoList.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <h1 className="text-primary text-center title">CryptoCurrency Tracker...</h1>


            <div className="coin-search text-center mt-5">
                <h4 className="text-center mt-2 text-primary">Search your Coin</h4>
                <form className="search">
                    <input onChange={handleChange} className="coin-input" type="text" placeholder="Search" />
                    <button className="search-btn" type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <Table bordered className="text-center mt-5 table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Rank</th>
                        <th>Total Volume</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        filterCoins.map(crypto => <CryptoDetails crypto={crypto}></CryptoDetails>)
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default Home;