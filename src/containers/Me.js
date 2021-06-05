import '../styles/Me.css';
import Header from './Header';

const aboutMeMock = {

"name": "Marlena Wytrych",
    "sex": "K",
    "about": "Urodziłam się po to, aby grać. Mówisz wiesz że będziesz cierpiała i przeklinała cały świat - urodziłam się po to aby grać.",
    "mp3": "src/FG654DE08GF48FG.mp3",
    "inspirations": [
        "Starchursky",
        "Elvis",
        "Sedaka",
        "Speedy Gonzales",
        "albo Diana"
    ],
    "image1": "https://cdn.stocksnap.io/img-thumbs/280h/V2TT0P34KE.jpg",
    "image2": "https://cdn.stocksnap.io/img-thumbs/280h/QON4ARVTSC.jpg",
    "instrument": "wokal"
  };


const Me = () => {
    return (
      <div className="Me">
        <Header className="MeHeader" />
        <header className="Me-header">
          Mój profil
        </header>
        <div className ="myPictures">
          <img src={aboutMeMock.image1} className="myPicture" />
          <img src={aboutMeMock.image2} className="myPicture" />
        </div>
        <p>{aboutMeMock.name}</p>
          <div>
           {aboutMeMock.about}
          </div>
          <p>Inspiracje: </p>
          <ul>
            {aboutMeMock.inspirations.map(el => <li>{el}</li>)}
          </ul>
          <p>Instrument: {aboutMeMock.instrument}</p>
      </div>
    );
  }
  
  export default Me;
  