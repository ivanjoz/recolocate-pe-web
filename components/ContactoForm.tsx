import React from "react";
import ImageSVG from "shared/Images";
import telegram_svg from '@svg/telegram.svg'
import mensajeEnviado_svg from '@svg/mensaje_enviado.svg'

export default class ContactoForm extends React.PureComponent<any,any> {
  constructor(props) {
    super(props)
  }

  render() {
    return  <div id="contacto1" className="contactanos bgc-botton-center inline-h w100"
      style={{ backgroundImage: 'url(images/contacto6.jpg)' }}
    >
    <div className="bg-1">  
    </div>
    <div style={{zIndex: 5 }} className="inline-v con1">
      <h2 className="mB02 title13">CONTÁCTANOS</h2>
      <span>¿Tienes alguna consulta? Déjanos un mensaje y te responderemos a la brevedad</span>
      <ImageSVG svgRaw={telegram_svg} alt=""/>
    </div>
    <div style={{zIndex: 5 }} className="inline-v contact-form-ctn">
      <div className="form-contacto inline-v">
        <div className="inline-h mB014">
          <span>
            <div className="black">NOMBRES</div>
          </span>
          <input name="Nombre" className="in1" type="text" required/>
        </div>
        <div className="inline-h mB014">
          <span><div className="black">EMAIL</div></span>
          <input  name="Correo Electrónico" className="in1" type="email" required/>
        </div>
        <div className="inline-h mB014">
          <span><div className="black">CURRÍCULUM</div></span>
          <div className="archivo1 inline">
            <div id="sel-archivo-foto-ctn" className="bn-upload up2 grupo1">
              <button>Seleccionar Archivo<i className="icon-folder"></i></button>
              <input type="file" id="sel-archivo-cv"/>
            </div>
            <div className="mL01 grupo1">(Opcional. Máx. 1.5MB)</div>
            <div className="nombre-archivo grupo2 hide">---</div>
            <button id="close-cv-upload" className="close2 grupo2 hide">X</button>
          </div>        
        </div>
        <div className="inline-h">
          <span><div className="black">MENSAJE</div></span>
          <textarea name="Contenido del mensaje" className="in1" rows={9} required></textarea>
        </div>
        <div>
          <button id="enviar-mensaje" className="b1 mT02">ENVIAR</button>
        </div>
      </div>
      <div id="enviando1" className="enviando-mensaje">
        <div className="loader">Enviado...</div>
        <span>Enviado mensaje...</span>
      </div>
      <div id="enviado1" className="mensaje-enviado">
        <span>Hemos recibido su mensaje</span>
        <ImageSVG svgRaw={mensajeEnviado_svg} alt="mensaje enviado"/>
        <span>Nos pondremos en contacto con usted en breve de ser el caso.</span>
        <span>Muchas gracias por su interés <br/> en Recolocate.</span>
      </div>
    </div>
  </div>
  }
}