import React from "react";
import saveAs from 'file-saver'

const downloadProgram = (name: string) => {
  saveAs('./docs/'+name,name)
}

export default class 
ProgramasRecolocacion1 extends React.PureComponent<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return <>
  {/* Descarga de programas de recolocación */}
  <div id="programas1" className="pro2  _desk w100">
    <h2 className="mB03 ls1">PROGRAMAS DE RECOLOCACIÓN LABORAL / OUTPLACEMENT</h2>
    <span className="mB03">El programa de transición de Carrera Profesional tiene como obejtivo facilitar la recolocación o reinserción laboral del asociado a traveś de la implementación de actividades en 4 componentes.</span>
    <span className="mB03">Contamos con los siguientes programas. <span className="text7">Puede hacer click para descargar el folleto.</span></span>
    <div className="programas1">
      <div className="bn4 inline-h" 
        onClick={()=> downloadProgram('programa_silver.pdf')}
        >
        <div className="name">
          <span>PROGRAMA</span>
          <span>SILVER</span>
        </div>
        <i className="icon-download"></i>
      </div>
      <div className="bn4 inline-h" 
        onClick={()=> downloadProgram('programa_gold.pdf')}
        >
        <div className="name">
          <span>PROGRAMA</span>
          <span>GOLD</span>
        </div>
        <i className="icon-download"></i>
      </div>
      <div className="bn4 inline-h" 
        onClick={()=> downloadProgram('programa_platinum.pdf')}
      >
        <div className="name">
          <span>PROGRAMA</span>
          <span>PLATINUM</span>
        </div>
        <i className="icon-download"></i>
      </div>
    </div>
  </div>

  {/* Programas de transición de carrera version escritorio */}
  <div id="programas-1" className="programas inline-v _desk w100">
    <div style={{ height: 'auto' }} className="sec inline w100">
      <div className="inline-v">
        <div className="inline-h title7">
          <span>PROGRAMA</span>
          <div className="h2">SILVER</div>
        </div>
        <div style={{ width: '96%' }} className="bar1 mB01">
          <h3 style={{ marginLeft: '2vw' }}>1) DIAGNÓSTICO</h3>
        </div>
        <div className="componentes flex mB03">
          <div><span>Diagnóstico <br/> Profesional</span></div>
          <div>Entrevista <br/> Pre-Empleo</div>
          <div>Evaluación de <br/> Potencial de <br/> Competencias</div>
          <div>Sesión de conocimiento de uno mismo</div>
        </div>
        <div style={{ width: '90%', paddingTop: '0.7vw' }}
          className="gal-ctn">
          <div className="line-over">
            <div></div>
            <h4>RECURSOS</h4>
            <div></div>
          </div> 
          <div className="recursos flex jc-center w100">
            <div>Mapeo de red <br/> de contactos primarios (MCP) Metodología de Árbol de Red</div>
            <div style={{maxWidth: '7vw' }}>
              Elaboración de Plan de Márketing (PM)
            </div>
            <div style={{maxWidth: '9vw'}}>
              Cruce de Plan de Márketing con contactos primarios (PM/CP)
            </div>
            <div style={{ maxWidth: '6vw' }}>
              Fotografía Profesional
            </div>
            <div style={{ maxWidth: '6vw' }} className="hide">
              Tarjeta Laboral para networking
            </div>
          </div>    
        </div>
      </div>
      <div className="inline-v">
        <div className="inline-h title7 gold">
          <span>PROGRAMA</span>
          <div className="h2">GOLD</div>
        </div>
        <div style={{ width: '90%' }} className="bar1 mB01">
          <h3 style={{ marginLeft: '2vw' }}>1) DIAGNÓSTICO</h3>
        </div>
      </div>
      <div className="inline-v">
        <div className="inline-h title7 platinum">
          <div className="h2">PLATINUM  </div>
        </div>
        <div style={{ width: '90%' }} className="bar1 mB01">
          <h3 style={{ marginLeft: '2vw' }}>1) DIAGNÓSTICO</h3>
        </div>
        <div className="componentes flex mB03">
          <div>Informe Bezinger (estilos de pensamiento)</div>
        </div>
      </div>
    </div>
    <div style={{ height: 'auto' }} className="sec inline w100">
      <div className="inline-v">
        <div style={{ width: '90%' }} className="bar1 mB01 mT02">
          <h3 style={{ marginLeft: '2vw' }}>2) ENTRENAMIENTO</h3>
        </div>
        <div>14 HORAS DE TALLERES</div>
        <div className="componentes cir flex">
          <div><span><div>1</div>CV de Alto <br/> Impacto</span></div>
          <div><span><div>2</div>Fundamentos <br/> de transición <br/> de carrera</span></div>
          <div><span><div>3</div>Entrevista por <br/> Competencias</span></div>
          <div><span><div>4</div>Comunicación<br/>Efectiva</span></div>
          <div><span><div>5</div>Exámenes<br/>Proyectivos</span></div>
          <div><span><div>6</div>Networking <br/> (Basado en Líder <br/> Mundial)</span></div>          
        </div>
        <div className="componentes flex mB01">
          <div className="inline-v" style={{ maxWidth: '17vw' }}> 
            <span><div className="circle5">7</div> Perfil de Linkeding</span><span className="h6">(Más de 2300 contactos nuevos de<br/> RRHH y HeadHounters)</span>
          </div>
        </div>
      </div>
      <div className="inline-v">
        <div className="bar1 mB01 mT02 w90 mL20">
          <h3 className="mL20">2) ENTRENAMIENTO</h3>
        </div>
        <div>16 HORAS DE TALLERES</div>
        <div className="componentes cir flex">
            <div className="x"><span><div>8</div>Inteligencia<br/>Emocional</span></div>         
        </div>
      </div>
      <div className="inline-v">
        <div className="bar1 mB01 mT02 w90">
          <h3 className="mL20">2) ENTRENAMIENTO</h3>
        </div>
        <div>22 HORAS DE TALLERES</div>
        <div className="componentes cir flex">
          <div className="x"><span><div>9</div>Capacidades<br/>de Empleabilidad</span></div>
          <div className="x"><span><div>10</div>Gestión<br/>del Cambio</span></div>
          <div className="x"><span><div>11</div>Propuesta<br/>de Valor</span></div>
        </div>
      </div>
    </div>
    <div className="sec inline w100 h-auto">
      <div className="inline-v">
        <div className="bar1 mB01 w96">
          <h3 className="mL20">3) EJECUCIÓN</h3>
        </div>
        <div className="componentes flex mB03">
          <div className="networking" style={{ maxWidth: '24vw'}}>
            NETWORKING DEL ASOCIADO <br/> Entrenamiento personalizado (4 horas)
          </div>
          <div className="inline-v duracion" style={{ maxWidth: '15vw'}}>
              Duración de los servicios : <br/> 
            <h3>3 MESES</h3>
          </div>       
        </div>
        <div style={{ paddingTop: '0.7vw' }} className="gal-ctn w90">
          <div className="line-over">
            <div></div>
            <h4>HERRAMIENTAS</h4>
            <div></div>
          </div>
          <div className="recursos flex jc-center w100">
            <div className="max-w25">Club de Networking Laboral. Sinergia de Contactos Primarios (One To One)</div>
            <div className="max-w25">Bolsa de Empleo. Macro Buscador Propio y Único en el Mercado (Identifica miles de ofertas de empleo)</div>
            <div className="max-w25">Convenios con empresas y uso de plataforma digital Rank & Match para postulación exclusiva.</div>
          </div>    
        </div>
      </div>
      <div className="inline-v">
        <div className="bar1 w90 mB01">
          <h3 className="mL20">3) EJECUCIÓN</h3>
        </div>
        <div className="componentes flex mB03">
          <div className="inline-v duracion" style={{ maxWidth: '15vw' }}>Duración de los servicios : <br/> 
            <h3>6 MESES</h3>
          </div>       
        </div>
      </div>
      <div className="inline-v">
        <div className="bar1 w90 mB01">
          <h3 className="mL20">3) EJECUCIÓN</h3>
        </div>
        <div className="componentes flex mB03">
          <div className="inline-v duracion" style={{ maxWidth: '15vw' }}>Duración de los servicios : <br/> 
            <h3>9 MESES</h3>
          </div>       
        </div>
      </div>
    </div>  
    <div className="sec h-auto inline w100">
      <div className="inline-v">
        <div className="bar1 mB01 mT02 w96">
          <h3 className="mL20">4) ACOMPAÑAMIENTO</h3>
        </div>
        <div className="inline-v jc">
          <h4>SESIONES DE TRABAJO</h4>
          <div className="bn1" style={{ marginTop: '0.5vh' }}>
            <span className="inline-h"><h3>{"6\u00A0"}</h3>{"sesiones de\u00A0"}<h3>{"50 min\u00A0"}</h3>{"cada una\u00A0"}</span>
          </div>
        </div>
      </div>
      <div className="inline-v">
        <div className="bar1 mB01 w90 mT02">
          <h3 className="mL20">4) ACOMPAÑAMIENTO</h3>
        </div>
        <div className="inline-v jc">
          <div className="bn1 inline-v" style={{ marginTop: '0.5vh' }}>
            <span className="inline-h"><h3>12{"\u00A0"}</h3>sesiones de</span>
            <span className="inline-h"><h3>50 min</h3>{"\u00A0"} cada una</span>
          </div>
        </div>
      </div>
      <div className="inline-v">
        <div className="bar1 w90 mB01 mT02">
          <h3 className="mL20">4) ACOMPAÑAMIENTO</h3>
        </div>
        <div className="inline-v jc">
          <div className="bn1 inline-v" style={{ marginTop: '0.5vh' }}>
            <span className="inline-h"><h3>18 {"\u00A0"}</h3>sesiones de</span>
            <span className="inline-h"><h3>50 min</h3>{"\u00A0"} cada una</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Programas de recolocación labotal para móvil  */}  
  <div className="pro2 _mobile">
    <h2 className="mB03 ls1">PROGRAMAS DE RECOLOCACIÓN LABORAL /OUTPLACEMENT</h2>
    <span className="mB01">El programa de transición de Carrera Profesional tiene como obejtivo facilitar la recolocación o reinserción laboral del asociado a traveś de la implementación de actividades en 4 componentes.</span>
    <span className="mB02">Puede descargar los programas aquí</span>
    <div>
      <div className="inline-v">
        <div className="bn4"
          onClick={()=> downloadProgram('programa_silver.pdf')}>SILVER <i className="icon-download"></i> </div>
        <div className="bn4" 
          onClick={()=> downloadProgram('programa_gold.pdf')}>GOLD <i className="icon-download"></i></div>
        <div className="bn4"
          onClick={()=> downloadProgram('programa_platinum.pdf')}>PLATINUM <i className="icon-download"></i></div>
      </div>
    </div>
    <span className="mB03">O puede visualizarlos aquí. Arrastre para ver la información del siguiente.</span>
  </div>
  <div className="m-programas inline-v _mobile">
    <div className="programas-car">
      <div className="inline-v"><span>PROGRAMA</span><h1>SILVER</h1></div>
    </div>
    <div className="inline-v desc w100">
      <div className="title8">1 | DIAGNÓSTICO</div>
      <div className="inline-v box1">
        <span>Diagnóstico Profesional</span>
        <span>Entrevista pre-empleo</span>        
        <span>Sesión de conocimiento de uno mismo</span>
        <span>Evaluación de Potencial <br/> de Competencias</span>
      </div>
      <div className="inline-v w100">
        <div className="inline-v cuadrado1">
          <h3 className="tt">RECURSOS</h3>
          <div>Mapeo de red de contactos primarios (CP)</div>
          <div>Elaboración de plan de marketing (PM)</div>
          <div>Cruce de plan de márketing con contactos primarios (PM/CP)</div>
          <div>Fotografía Profesional</div>
          <div className="hide">Tarjeta Laboral para Networking</div>
        </div>        
      </div>
      <div className="title8">2 | ENTRENAMIENTO</div>
      <div className="inline-h"><h2 className="mr-04">14 HORAS</h2> DE TALLERES</div>
      <div className="flex-wrap jc-center  box3 mB03 mT01 w100">
        <span>
          <span><div>1</div>CV de Alto Impacto</span>
        </span>
        <span>
          <span><div>2</div>Fundamentos de transición de carrera</span>
        </span>
        <span>
          <span><div>3</div>Entrevista por Competencias</span>
        </span>
        <span>
          <span><div>4</div>Comunicación Efectiva</span>
        </span>
        <span>
          <span><div>5</div>Exámenes Proyectivos</span>
        </span>
        <span>
          <span><div>6</div>Networking (Basado en Líder Mundial)</span>
        </span>
        <span className="s1">
          <span><div>7</div>Perfil de Linkeding <h5>(Más de 2300 contactos nuevos de RRHH y HeadHounters)</h5></span>
        </span>
      </div>
      <div className="title8">3 | EJECUCIÓN</div>
        <div className="inline-v box2 mB02">
          <span>NETWORKING DEL ASOCIADO</span>
          <span>Entrenamiento personalizado <br/> (4 horas)</span>    
        </div>
        <div className="inline-v">
          <span>Duración de los servicios:</span>
          <h2>3 MESES</h2>
        </div>
        <div className="inline-v cuadrado1">
          <h3 className="tt">HERRAMIENTAS</h3>
          <div>Club de Networking Laboral. Sinergia de Contactos Primarios (One To One)</div>
          <div>Bolsa de Empleo. Macro Buscador Propio y Único en el Mercado (Identifica miles de ofertas de empleo)</div>
          <div>Convenios con empresas y uso de plataforma digital Rank & Match para postulación exclusiva.</div>
        </div> 
      <div className="title8">4 | ACOMPAÑAMIENTO</div>
      <div>
        <h3>SESIONES DE TRABAJO</h3>
        <span>6 sesiones de 50 min cada una</span>
      </div>
    </div>   
  </div>
    </>
  }
}