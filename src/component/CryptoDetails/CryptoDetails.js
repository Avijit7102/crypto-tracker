import React from 'react';
import './CryptoDetails.css'
const CryptoDetails = ({crypto}) => {
    const priceChange = crypto.price_change_percentage_24h;
    var a = 0;
    const count =(a) => {
        return a++;
    }
    return (
        // <div class="row mt-2 p-2 border-bottom">
        //     <div class="col"><img className="img-fluid w-25" src={crypto.image} alt="" /></div>
        //     <div class="col">{crypto.symbol}</div>
        //     <div class="col">{crypto.name}</div>
        //     <div class="col">${crypto.current_price}</div>
        //     {priceChange < 0 ? <div class="col text-danger">{priceChange.toFixed(2)}</div> :
        //     <div class="col text-success">{priceChange.toFixed(2)}</div>
        //     }
        //     <div class="col">#{crypto.market_cap_rank}</div>
        //     <div class="col">{crypto.total_volume.toLocaleString()}</div>
        // </div>
        <tr>
          <th scope="row"></th>
          <td><img className="img-fluid image" src={crypto.image} alt="" /></td>
          <td>{crypto.symbol}</td>
          <td>{crypto.name}</td>
          <td>${crypto.current_price}</td>
          {priceChange < 0 ? <td class="text-danger">{priceChange.toFixed(2)}</td> :
            <td class=" text-success">{priceChange.toFixed(2)}</td>
            }
            <td>#{crypto.market_cap_rank}</td>
            <td>{crypto.total_volume.toLocaleString()}</td>
        </tr>
    );
};

export default CryptoDetails;