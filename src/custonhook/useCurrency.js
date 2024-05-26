import {useEffect, useState} from "react"

function useCurrency(currency){

    const [Data, setData] = useState({});
    //Empty array is for the initial state and also when the data is not fetched yet so the system doesnt break down
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        
    .then((res) => res.json())//turn the string format of the data into json format
    .then((res)=> {setData(res[currency])})
    //just to get the data of the currency we are looking for and not the whole data by using res[currency] you can also use res.data[currency]
    }, [currency]);
    return Data;
}

export default useCurrency;