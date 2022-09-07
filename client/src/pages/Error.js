import {Link} from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
    return ( 
    <Wrapper className='full-page'>
        <div>
            <img src={img} alt="page not found" />
            <h3>Oh! We Seem to not find the page!!</h3>
            <Link to='/'> Back Home </Link>

        </div>

    </Wrapper>
        );
}
 
export default Error;