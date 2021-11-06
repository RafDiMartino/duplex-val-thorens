import React from 'react'
import "../styles/contacts.scss"
import Header from '../components/header/Header'
import { useTranslation} from 'react-i18next'

function Contacts() {

    const { t } = useTranslation()

    return (
        <div>
            <div className="img-container-contacts"></div>
            <Header 
                h1={t("headers.page_title_contacts")}
                h2={t("headers.title_contacts")}
            />
            <div className="container">
                <h1>FormSubmit Demo</h1>
                <form target="_blank" action="https://formsubmit.co/xoomegaredox@gmail.com" method="POST">
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
                            </div>
                            <div className="col">
                                <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" className="form-control" name="message" rows="20" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
                </form>
                </div>
        </div>
    )
}

export default Contacts


// <div className="container">
// <h1>FormSubmit Demo</h1>
// <form target="_blank" action="https://formsubmit.co/xoomegaredox@gmail.com" method="POST">
//     <div className="form-group">
//         <div className="form-row">
//             <div className="col">
//                 <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
//             </div>
//             <div className="col">
//                 <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
//             </div>
//         </div>
//     </div>
//     <div className="form-group">
//         <textarea placeholder="Your Message" className="form-control" name="message" rows="20" required></textarea>
//     </div>
//     <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
// </form>
// </div>