import { useState } from 'react';
import QRCode from 'react-qr-code'; 
import QRCodeLink from 'qrcode';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

import './App.css';

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function (err, url){
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">
      <h1 className="title">QR maker</h1>

      <QRCode
        value={link}
      />

      <input
        className="input"
        placeholder="Digite seu link..."
        value={link}
        onChange={ (e) => handleQrcode(e)}
      />

      <a className="download-btn" href={qrcodeLink} download={`qrcode.png`} >Baixar QrCode</a>

      <div className="footer">
        <footer>
          <p>Gabriel Leme dos Santos - 2023</p>
        </footer>
      </div> 

      <div className="button-footer">  
        <button className="buttonSearchFooter">
        <a href="https://www.linkedin.com/in/gabriel-leme-dos-santos-7b220b197/"><BsLinkedin size={25} color="rgb(206, 47, 179)"/></a>
        </button>

        <button className="buttonSearchFooter">
        <a href="https://github.com/Gabriel-L-Santos"><BsGithub size={25} color="rgb(206, 47, 179)"/></a>
        </button>
      </div> 

    </div>
  );
}

export default App;
