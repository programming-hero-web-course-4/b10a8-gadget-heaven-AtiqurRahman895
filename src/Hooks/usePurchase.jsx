import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const usePurchase = ({cartList,setOpenModal}) => {
    const confirmPurchase=()=>{
        if(cartList.length===0){
            toast.error("Your cart is empty. Add gadgets in the cart to purchase")
        }else{
            setOpenModal(true)

        }
    }
    return confirmPurchase
};

usePurchase.propTypes = {
    cartList: PropTypes.array.isRequired,
    setOpenModal: PropTypes.func.isRequired
};

export default usePurchase;