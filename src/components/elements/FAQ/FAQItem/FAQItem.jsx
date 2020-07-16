import React, { Component } from 'react'
import { Accordion, Card } from 'react-bootstrap'

import './FAQItem.scss'

export default class FAQItem extends Component {

  state = {
    class: false
  }

  changeCardClass = () => {
    if(this.state.class === true) {
      this.setState({
        class: false
      })
    } else {
      this.setState({
        class: true
      })
    }
  }

  render() {
    let { faqTitle, faqText, eventKey } = this.props

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={`${eventKey}`} onClick={this.changeCardClass} className={this.state.class === true ? 'card-header--noBorder' : 'card-header--border'}>
              {faqTitle}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${eventKey}`}>
              <Card.Body>
                {faqText}
              </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
  }
}