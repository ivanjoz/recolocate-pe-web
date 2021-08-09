import React, { CSSProperties } from "react";
import svgToMiniDataURI  from 'mini-svg-data-uri'

interface IProps {
  style?: CSSProperties
  innerStyle?: CSSProperties
  imageStyle?: CSSProperties
  className?: string
  innerCss?: string
  id?: string
  name?: string
  imageSrc: string | { type: string, src: string }[]
}

export default class BgParallax extends React.PureComponent<IProps, any> {

  constructor(props){
    super(props)
    this.state = {  base64uri: "" }
    this.div1 = React.createRef()
    this.image = React.createRef()
    this.onScroll = this.onScroll.bind(this)
    this.onScreenResize = this.onScreenResize.bind(this)
  }

  div1: React.RefObject<any>
  image: React.RefObject<any>

  onLoadCompleted(){
    console.log('se cargó la imagen::')
  }

  componentDidMount(){
    if(typeof window === "undefined") return
    const div1 = this.div1.current
    console.log('se cargó el componente::',div1,this.image.current)
    if(this.image.current.complete){
      this.initParallax()
    }
    document.addEventListener('resize',this.onScreenResize)
    document.addEventListener('load',this.onScreenResize)
    document.addEventListener('scroll',this.onScroll)
  }

  componentWillUnmount(){
    document.removeEventListener('resize',this.onScreenResize)
    document.removeEventListener('load',this.onScreenResize)
    document.removeEventListener('scroll',this.onScroll)
  }

  hasScrollParallax = false
  hasScroll = false

  onScroll(){
    if(typeof window === "undefined") return
    if(!this.image.current) return
    const wy = window.scrollY // Posición del scroll
    // const wH = window.innerHeight // Altura de la ventana
	  // Si el elemento no está en el viewport no hace nada
    if(!this.hasScroll){
      this.initParallax()
      this.hasScroll = true
    }
	  if(this.elmApear > wy || wy > this.elmDisapear ) return
    if(!this.hasScrollParallax){
      this.initParallax()
      this.hasScrollParallax = true
    }
    // Determina cuanto el elemento tendrá que trasladarce
    const compense = 0
    const range = this.rangeOfVisibility
    // El total de pixeles a recorrer del scroll
    // El total de pixeles recorridos desde la aparición sobre el máximo total de pixeles visibles del elemento
    let percentChange = (wy - this.elmApear) / range
    if(percentChange > 1) percentChange = 1
    // Calcula los pixeles a trasladar
    const translateY = Math.floor(percentChange * this.offset) * -1
    console.log(`Scroll::${wy} Apear:: ${this.elmApear} Range::${range} Change:${percentChange} Translate:: ${translateY}`)
    // Realiza el traslado
    this.image.current.style.transform = `translateY(${translateY}px)`
    // console.log(this.image.current)
  }

  onScreenResize(){
    this.initParallax()
  }

  offset = 0
  elmApear = 0
  elmDisapear = 0
  rangeOfVisibility = 0

  initParallax(){
    if(typeof window === "undefined") return
    if(!this.image.current) return
    const div1 = this.div1.current
    const image = this.image.current
    const imgHeight = image.offsetHeight // Altura de la imagen
    const divHeight = div1.offsetHeight // Altura del elemento	
    // Distancia del margen superior del elemento hasta el Top
    const divOffTop = div1.offsetTop
    // Offset sobre el que realizar el paralax
    this.offset = imgHeight - divHeight
    // Altura de la pantalla
    const wH = window.innerHeight 
    console.log(`Altura imagen:: ${imgHeight}, Altura Div:: ${divHeight}, Offset: ${this.offset}`)

    let wy, range, compense
    
	  // eH = div1.offsetHeight // Altura del elemento	
	  
    // Calcula la posición relativa del div
    // Distancia donde el elemento comienza a aparecer en el viewport (no puede ser menor a cero)
	  this.elmApear = divOffTop - wH; if(this.elmApear < 0) this.elmApear = 0
    // Distancia donde el elemento desaparece del viewport
	  this.elmDisapear = divOffTop + divHeight
    // Máximo valor posible de window.scrollY
	  let maxScroll = document.body.scrollHeight - wH
    // Si [disapear] es mayor que el máximo, se iguala al máximo
	  if(this.elmDisapear > maxScroll) this.elmDisapear = maxScroll
	  // Rango de pixeles donde se ejecutará el parallax
	  this.rangeOfVisibility = this.elmDisapear - this.elmApear
  }

  render() {
    const props = this.props
    const state = this.state
    const style = { position: 'relative' } as CSSProperties
    const innerStyle = { 
      height: '100%', width: '100%'
    } as CSSProperties
    if(props.style) Object.assign(style,props.style)
    if(props.innerStyle) Object.assign(innerStyle,props.innerStyle)
    return <div id={props.id} ref={this.div1}
      style={style} className={props.className}>
      <div className="pp-picture-1">
        <picture>
          { typeof props.imageSrc === 'string' &&
            <>
              <source srcSet={props.imageSrc} type="image/jpeg"/> 
              <img style={props.imageStyle} 
                ref={this.image}
                src={props.imageSrc} alt={props.name || ''}
                onLoad={()=> this.onLoadCompleted()}   
              />
            </>
          }
          { Array.isArray(props.imageSrc) &&
            <>
              { 
              props.imageSrc.map(x => {
                return <source srcSet={x.src} type={x.type}/> 
              })
              }            
              <img style={props.imageStyle} 
                ref={this.image}
                src={props.imageSrc[props.imageSrc.length -1 ].src} 
                alt={props.name || ''}
                onLoad={()=> this.onLoadCompleted()} 
              />
            </>
          }
        </picture>
      </div>
      <div style={innerStyle} className={props.innerCss}>
        { props.children }
      </div>      
    </div>
  }
}