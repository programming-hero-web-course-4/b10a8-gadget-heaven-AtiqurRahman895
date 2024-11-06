// import PropTypes from 'prop-types';
import { useRouteError } from 'react-router-dom';
import errorImage from '../../assets/errorNotFoundImage.png'

const ErrorPage = () => {
    const {error,status,statusText}= useRouteError();
    
    return (
        <div className='h-lvh place-items-center grid content-center bg-white'>
            {status==404?
                <img src={errorImage} alt={`${status}, ${statusText}`} />:
                <>
                    <h1 className='font-extrabold text-9xl text-custom-purple'>!</h1>
                    <h1 className='text-custom-purple'>{error.message||`${status}, ${statusText}`}</h1>
                </>

            }
        </div>
    );
};

// ErrorPage.propTypes = {
    
// };

export default ErrorPage;