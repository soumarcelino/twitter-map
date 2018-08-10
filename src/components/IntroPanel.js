import React, {Component} from 'react'

import ButtonAuthorize from './ButtonAuthorize'
import ButtonLocation from './ButtonLocation'


export default class IntroPanel extends Component {
    render (){
        return (
            <div>

                <h1> Todos seus Twitters em um mapa já </h1>
             
                <ButtonAuthorize/>
              
                <div style={{paddingTop: 20}}>
                    Visualize uma nova forma de interação
                </div>

                <ButtonLocation/>


            </div>
            
        )
    }
} 