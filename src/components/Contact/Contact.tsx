import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:bhukanbhavdip3@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:bhukanbhavdip3@gmail.com">bhukanbhavdip3@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919427255729"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919427255729">(+91) 9427255729</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
