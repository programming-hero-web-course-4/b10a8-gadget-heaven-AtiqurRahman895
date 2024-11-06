// import PropTypes from 'prop-types';

import { useContext } from "react";
import { TransferLists } from "../../Contexts/TransferLists";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const [cartList,setCartList,wishList,setWishList,totalCost,setTotalCost,] = useContext(TransferLists);

    return (
        <section className="py-10">
            <div className="container space-y-5">
                <h5>Wishlist</h5>
                {wishList.map((eachWishListItem,index)=>(
                    <WishlistCard key={index} specificGadget={eachWishListItem}/>
                ))}
            </div>
        </section>
    );
};

// Wishlist.propTypes = {
    
// };

export default Wishlist;