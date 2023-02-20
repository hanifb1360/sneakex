
import { Container } from 'react-bootstrap';
import backgroundImage from '../assets/img/bg.jpg';

export const Home = () => {
  return (
    
    <div className="bg-image-home" style={{backgroundImage: `url(${backgroundImage})`}}>
    
     <h1 className='title'>SNEAKEX</h1>
    </div>
   
  );
}
