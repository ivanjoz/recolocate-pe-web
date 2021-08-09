import React from "react";

class MenuEntry extends React.PureComponent<any, any> {

  goToSectionPage(){    
    const props = this.props
    if(props.ctx && props.ctx.state.showMobileMenu){
      props.ctx.setState({ showMobileMenu: false })
    }
    const nextRouter = globalThis['nextRouter']
    const goToSection = () => {
      if(props.section){
        const el = document.getElementById(props.section)
        console.log('elemento en click::',el)
        if(el){
          el.scrollIntoView(true)
        }
      }
    }
    if(props.page && nextRouter.pathname !== props.page){
      console.log('Cambiando Página::',nextRouter.pathname,props.page)
      nextRouter.push(props.page)
      setTimeout(()=> { goToSection() },500)
    } else {
      goToSection()
    }
  }

  render(){
    const props = this.props
    if(props.mobile){
      return <span onClick={()=> this.goToSectionPage()} 
        className="o-menu-m">{props.name}
      </span>
    } else {
      return <span onClick={()=> this.goToSectionPage()} 
        className="o-menu">{props.name}
      </span>
    }
  }
}

export default class Header1 extends React.PureComponent<any, any> {
  constructor(props) {
    super(props)
    this.state = { showMobileMenu: false }
  }

  openCloseMenu(){
    const state = this.state
    this.setState({ showMobileMenu: !state.showMobileMenu  })
  }
  
  render() {
    const state = this.state
    return <>
      <div id="menu-bar" className="menu-bar">
        <MenuEntry name="INICIO" page="/" section="inicio-1"/>
        <MenuEntry name="NOSOTROS" page="/" section="nosotros-1"/>
        <MenuEntry name="PROGRAMAS" page="/" section="programas1"/>
        <MenuEntry name="PROCESO" page="/" section="proceso1"/>
        <MenuEntry name="TALLERES" page="/" section="talleres1"/>
        <MenuEntry name="POLITICA PRIVACIDAD" page="/politica-privacidad"/>
        <MenuEntry name="CONTACTO" page="/" section="contacto1"/>
      </div>
      {/*
          <div className="mob-layer-menu"></div>
      */}      
      <div onClick={()=> this.openCloseMenu()} className="mob-menu-icon">
        { !state.showMobileMenu &&
          <i className="icon-menu"></i>
        }
        { state.showMobileMenu &&
          <i className="icon-cancel"></i>
        }
      </div>
      { 
      state.showMobileMenu &&
      <div className="menu-mobile">
        <MenuEntry ctx={this} mobile={1} name="INICIO" page="/" section="inicio-2"/>
        <MenuEntry ctx={this} mobile={1} name="NOSOTROS" page="/" section="nosotros-2"/>
        <MenuEntry ctx={this} mobile={1} name="PROGRAMAS" page="/" section="programas1"/>
        <MenuEntry ctx={this} mobile={1} name="PROCESO" page="/" section="proceso1"/>
        <MenuEntry ctx={this} mobile={1} name="TALLERES" page="/" section="talleres1"/>
        <MenuEntry ctx={this} mobile={1} name="POLITICA PRIVACIDAD" page="/politica-privacidad"/>
        <MenuEntry ctx={this} mobile={1} name="CONTACTO" page="/" section="contacto1"/>
      </div>
      }
    </>
  }
}