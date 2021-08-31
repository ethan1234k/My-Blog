import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ListingItem from "../../components/ListingItem/ListingItem";

const MarketplaceScreen = () => {
  console.log("Reloaded")
  const state = useSelector((state) => state);
  const [marketplaceArray, setMarketplaceArray] = useState(state.listingsArray);

  useEffect(() => {
    setMarketplaceArray(state.listingsArray);
  }, [state.listingsArray]);

  return (
    <div>
        <ul>
            {
                marketplaceArray.map((item) => (
                    <ListingItem 
                        title={item.title}
                        description={item.description}
                        date={item.date}
                    />
                ))
            }
        </ul>
    </div>
  )
  
};

export default MarketplaceScreen;
