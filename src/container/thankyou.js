import React from 'react'
import ThankYou from "../component/thankyou";


export default function ThankyouContainer() {
  return (
    <>
    <ThankYou>
        <ThankYou.Div>
            <ThankYou.Heading>Thank you for your interest</ThankYou.Heading>
            <ThankYou.Text>We will get back to you soon</ThankYou.Text>
        </ThankYou.Div>
        {/* redirect to home page */}
        <ThankYou.Button to="/">Home</ThankYou.Button>
    </ThankYou>
    </>
  )
}
