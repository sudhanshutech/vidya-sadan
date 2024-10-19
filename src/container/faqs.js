import React from "react";
import faqsData from "../fixtures/faqs";
import Accordion from "../component/accordian";

export default function FaqsContainer() {
  return (
    <Accordion>
        <Accordion.Div>
        <Accordion.Text>Practice Advice</Accordion.Text>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Text>
        Education is the most powerful weapon you can use to change the world:
        B.B. King
      </Accordion.Text>
      </Accordion.Div>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}
                <Accordion.Img src='images/icons/Vector.svg'/>
            </Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
    </Accordion>
  );
}
