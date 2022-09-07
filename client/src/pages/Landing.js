
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage.js';
import {Logo} from '../components';
import { Link } from 'react-router-dom';


const Landing = () => {
    return ( 
        <Wrapper>
            <nav>
                <Logo/>
            </nav>
            <div className='container-page'>
                 
                <div className="info">
                    <h1>
                        job <span>tracking</span> app 
                    </h1>
                    <p>
                        I'm baby skateboard subway tile photo  booth, fit bicycle rights 
                        bitters fixie banh mi distillery food truck flexitarian polaroid 
                        farm-to-table deep v organic. XOXO normcore coloring book ascot. 
                        Photo booth ramps meggings twee.  
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>

                <img src={main} alt="job hunt" className='img main-img' />

            </div>
        </Wrapper>
     );
}
 


export default Landing;
