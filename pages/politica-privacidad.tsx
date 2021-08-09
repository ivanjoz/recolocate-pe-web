import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Header1 from '../components/Header'
import Footer1 from '@components/Footer1'

const politica = [
  { title: "INTRODUCCIÓN",
    parrafos: [
      `La presente Política de Privacidad para la Protección de Datos Personales en el ámbito del Portal Web y de Aplicaciones Móviles, describe el tratamiento que nuestra institución (en adelante “RECOLOCATE”) brinda a los datos personales que recopila de los usuarios de nuestro portal web y aplicaciones móviles. Dicha política se ajusta a las disposiciones contenidas en la Ley de Protección de Datos Personales, Ley N° 29733, su Reglamento y la Directiva de Seguridad de la Información emitida por la autoridad competente`,
    ]
  },
  { title: "RECOPILACIÓN DE LA INFORMACIÓN",
    parrafos: [
      `Para efectos de visitar nuestro portal web y nuestras aplicaciones móviles usted no tiene la obligación de proporcionar datos personales.
      Sin embargo, para los casos en que presente solicitudes, acceda a servicios que  RECOLOCATE brinda por dichos medios, o participe en eventos promovidos por  RECOLOCATE, entre otros, es posible que este requiera información personal específica y necesaria para dicho fin. Tal información puede comprender el nombre, número de documento de identidad, dirección de correo electrónico y número de teléfono. Asimismo, cuando la naturaleza de lo solicitado así lo requiera, y en tanto sea estrictamente necesario, RECOLOCATE podrá requerir otros datos personales.`
    ]
  },
  { title: "CONSENTIMIENTO DEL USUARIO",
    parrafos: [
      `El llenado de los formularios que nuestro portal web o aplicaciones móviles requieran para efectos de presentación de solicitudes, acceso a servicios o participación en eventos promovidos por RECOLOCATE, representa el consentimiento expreso del titular para la recopilación de sus datos personales y para su tratamiento para los fines específicos que motivaron su recopilación.`
    ]
  },
  { title: "RESPONSABILIDAD POR LA INFORMACIÓN PROPORCIONADA",
    parrafos: [
      `Los datos personales que el usuario proporcione deben ser, bajo su responsabilidad, verdaderos, completos, exactos, vigentes y, corresponder a su verdadera identidad.`,
      `Cualquier tipo de daño o perjuicio, directo indirecto, que se derive para RECOLOCATE o para terceros como consecuencia del incumplimiento parcial o total de la obligación referida en el punto anterior, será responsabilidad única y exclusiva del usuario que proporcionó la información.`
    ]
  },
  { title: "TRATAMIENTO DE LA INFORMACIÓN",
    parrafos: [
      `Los datos personales proporcionados serán objeto de tratamiento únicamente para la finalidad específica para la que fueron suministrados.
      RECOLOCATE no empleará los datos personales del usuario para ninguna finalidad distinta de la expresamente prevista en la presente Política de Privacidad, a no ser que se trate de una finalidad expresamente permitida o exigida por la normativa vigente aplicable o que RECOLOCATE haya recabado previamente el debido consentimiento del usuario.`,
      `RECOLOCATE no compartirá ni cederá a terceros algún dato personal del usuario sin el consentimiento previo y expreso de este último, salvo cuando dicha comunicación sea exigida por la legislación vigente, por orden judicial o por una autoridad competente.`,
      `El portal web de RECOLOCATE y sus aplicaciones móviles pueden ofrecer vínculos (links) para acceder a otras páginas web que no son parte de aquellos. Es responsabilidad del usuario revisar las políticas de privacidad en dichas páginas web para verificar el nivel de protección de sus datos personales en ese ambiente, lo que es ajeno a la responsabilidad de RECOLOCATE`
    ]
  },
  { title: "EJERCICIO DE DERECHOS ARCO",
    parrafos: [
      `El usuario podrá ejercitar sus derechos de Información, Acceso, Rectificación, Cancelación, Revocación, Oposición, etc. (ARCO) al uso de sus datos personales, de conformidad con la Ley de Protección de Datos Personales, Ley N° 29733. En ese sentido, el usuario tiene derecho, entre otros, a acceder a su información personal, a solicitar la rectificación de datos inexactos y a revocar su consentimiento para el tratamiento de la misma; asimismo, podrá solicitar la supresión de sus datos u oponerse al tratamiento de los mismos, incluso cuando estos ya no resulten necesarios para los fines que motivaron su recopilación.`,
      `El ejercicio de estos derechos es gratuito. Para ello, puede dirigirse por correo electrónico a recolocate@recolocate.pe adjuntando la “Solicitud de Atención de Derechos ARCO - Ley N° 29733, Ley de Protección de Datos Personales” y copia del documento de identidad (DNI/CE/Pasaporte) que acredite su titularidad sobre los datos personales respecto de los cuales ejercerá su derecho.`,
      `La atención de la solicitud será efectuada de acuerdo a los plazos previstos en la normatividad de protección de datos personales.`
    ]
  },
  { title: "CAMBIOS A LA POLÍTICA DE PRIVACIDAD PARA LA PROTECCIÓN DE DATOS PERSONALES",
    parrafos: [
      `RECOLOCATE se reserva el derecho de modificar su Política de Privacidad para la Protección de Datos Personales en el Ámbito del Portal Web y de Aplicaciones Móviles así como el aviso a través del cual la divulga, con el objeto de adaptarla a los cambios que pueda requerir el marco normativo vigente. Es responsabilidad del usuario mantenerse informado de dicha política, a efectos de lo cual, en cada oportunidad en que haga uso de nuestro portal web o aplicaciones móviles, deberá consultar nuestro Aviso de Política de Privacidad para la Protección de Datos Personales en el Ámbito del Portal Web y de Aplicaciones Móviles.`
    ]
  }
]

export default function Home() {
  let counterpp = 0
  return <>
    <Head>
      <title>Recolocate - Política de Privacidad</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header1 />
    <div className="politica-dp title-77">
      POLÍTICA DE PRIVACIDAD PARA LA PROTECCIÓN DE DATOS PERSONALES EN EL ÁMBITO DEL PORTAL WEB Y DE APLICACIONES MÓVILES
    </div>
    <div className="w100 flex-column ai-center">
    {
    politica.map(seccion => {
      return <div style={{marginBottom: '1.6rem'}} className="politica-dp w100">
        <div className="title-78 mb-08 bold">{seccion.title}</div>
        { 
        seccion.parrafos.map(x => {
          const lineas = x.split('\n')
          counterpp++
          return <div className="flex">
            <div style={{ width: '2.6rem', lineHeight: '1' }} 
              className="flex f-shrink-0">
              <div className="circle-41">{counterpp}</div>
            </div>
            <div className="">
            { lineas.map(x => <div className="mb-12 t-justify">{x}</div> )}
            </div>
          </div>
        })
        }
      </div>
    })
    }
    </div>
    <Footer1 />
  </>
}
