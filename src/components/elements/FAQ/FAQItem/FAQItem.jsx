import React, { Component } from 'react'
import { Accordion, Card } from 'react-bootstrap'

import './FAQItem.scss'

export default class FAQItem extends Component {

  render() {
    let { faqTitle, faqText, eventKey } = this.props

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={`${eventKey}`}>
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