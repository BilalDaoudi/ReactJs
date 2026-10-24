import {Link} from 'react-router-dom';

export default function Menu(){
    return (
      <p>
        <Link to='/' >Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/Personnes' >Personnes</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/Ajouter' >Ajouter Pesronne</Link>
      </p>
    );
  }
  
  