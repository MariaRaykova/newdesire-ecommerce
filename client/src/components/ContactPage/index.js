
import PageWrapper from "../PageWrapper";
import {useRef, useEffect} from "react";
import "./index.scss"
const ContactPage = () => {

  return (
    <PageWrapper>
     <h1>Contacts: </h1>
     <div>
        <div>email: nd@gmail.com</div>
        <div>tel: +359 88 888 888</div>
     </div>
     
    </PageWrapper>
  );
};
export default ContactPage;
