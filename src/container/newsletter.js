import React from "react";
import NewsLetter from "../component/newsletter";

export default function NewsletterContainer() {
  return (
    <>
      <NewsLetter>
        <NewsLetter.Div>
          <NewsLetter.Text>Newsletter</NewsLetter.Text>
          <NewsLetter.Title>Subscribe Newsletter</NewsLetter.Title>
          <NewsLetter.Text>
            Subscribe our newsletter for more update and information given by
            school
          </NewsLetter.Text>
        </NewsLetter.Div>

        <NewsLetter.Frame>
          <NewsLetter.Email>
            <form>
              <input type="text" placeholder="Your Email" />
            </form>
            <NewsLetter.ButtonLink>Subscribe</NewsLetter.ButtonLink>
          </NewsLetter.Email>
        </NewsLetter.Frame>
      </NewsLetter>
    </>
  );
}
