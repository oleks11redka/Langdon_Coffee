import React, { Component } from 'react'

import './OurGlobalTeam.scss'

export default class OurGlobalTeam extends Component {
    render() {
      return (
        <div className='ourGlobalTeam'>
          <div className='ourGlobalTeam__info'>
            <h2 className='ourGlobalTeam__title'>Our global team</h2>
            <p className='ourGlobalTeam__text'>The team behind Langdon Coffee Merchants brings with them over XXX years of combined experience in the coffee industry. With backgrounds in coffee trading, specialty roasting, Q-grading, café management and competitive brewing respectively, our passionate teams in London, Auckland, Melbourne and Adelaide take their coffee seriously, very seriously! The team travel to origin on a regular basis, and have also developed exclusive partnerships with producers and collective- managers who assist us at origin, working directly with growers to improve their planning, production techniques and access to finance</p>
          </div>
          <div className='ourGlobalTeam__picturesBlock'>
            <div className='ourGlobalTeam__country-pictures'>
              <img className='ourGlobalTeam__picture' src={require('./OurGlobalTeamPictures/UnitedKingdom.png')} alt="Happy-people"></img>
              <h3 className='ourGlobalTeam__country'>United Kingdom</h3>
            </div>
            <div className='ourGlobalTeam__country-pictures'>
              <img className='ourGlobalTeam__picture' src={require('./OurGlobalTeamPictures/NewZealand.png')} alt="Happy-people"></img>
              <h3 className='ourGlobalTeam__country'>New Zealand</h3>
            </div>
            <div className='ourGlobalTeam__country-pictures'>
              <img className='ourGlobalTeam__picture' src={require('./OurGlobalTeamPictures/Australia.png')} alt="Happy-people"></img>
              <h3 className='ourGlobalTeam__country'>Australia</h3>
            </div>
          </div>
        </div>
      )
    }
}