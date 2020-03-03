import React from 'react'
import Logohead  from '../img/nijatonyhead.png'
import styled, { css } from 'styled-components'


const Headerbar = () => {
    return (
        <div>
            <Cabecera primary="true">

            <div className="Row">
                <img src={Logohead} width="80px" alt="thelogo" ></img>
            </div>

            </Cabecera>
        </div>
    )
}

export default Headerbar

const Cabecera = styled.div`
  background: ${(props) => (props.primary = true ? 'steelblue' : 'red')};
  padding: 15px;
  border-bottom: 1px solid white;
`