import React from "react";

export default class Footer1 extends React.PureComponent<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return <>
      <div className="footer inline-v w100">
        <span>Copyright © 2019 - RECOLOCATE - Job & Career Coaching - Derechos Reservados</span>
        <span className="mT01 dir">Calle Aldabas 559 of. 1003 Urb, LIMA, Santiago de Surco 15023</span>
      </div>
    </>
  }
}