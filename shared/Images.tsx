import React from "react";
import svgToMiniDataURI  from 'mini-svg-data-uri'

export default class ImageSVG extends React.PureComponent<any, any> {

  constructor(props){
      super(props)
      this.state = {  base64uri: "" }
  }

  componentDidMount(){
    const props = this.props
    console.log('componente montado::',1)
    if(typeof window !== 'undefined'){
        const optimizedSVGDataURI = svgToMiniDataURI(props.svgRaw);
        // const base64 = window.btoa(props.svgRaw)
        // const base64uri = `data:image/svg+xml;base64,${base64}`
        // const base64uri = `data:image/svg+xml;utf8,${props.svgRaw}`
        this.setState({ base64uri: optimizedSVGDataURI })
    }
  }

  render() {
    const props = this.props
    const state = this.state
    let base64uri = ''
    /*
    if(typeof window !== 'undefined'){
        const base64 = window.btoa(props.svgRaw)
        base64uri = `data:image/svg+xml;base64,${base64}`
    }
    */
    console.log('Renderizando imagen::',typeof window,base64uri.length)
    return <img className={props.className} style={props.style} 
        src={state.base64uri} alt={props.alt}
    />
  }
}