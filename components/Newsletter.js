import React, {useState} from 'react'
import background from '../styles/images/newsletterbackground.png'
import Image from 'next/image'

function Newsletter() {
    const [status, setStatus] = useState(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const FORM_URL = `https://app.convertkit.com/forms/3494611/subscriptions`

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = new FormData(event.target)

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })

      setEmail("")
      const json = await response.json()

      if (json.status === "success") {
        setStatus("SUCCESS")
        return
      }
    } catch (err) {
      setStatus("ERROR")
      console.log(err)
    }
  }

  const handleEmailChange = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  const handleNameChange = (event) => {
    const { value } = event.target
    setName(value)
  }
  return (
    <div className='newsletter-container'>
            {status === "SUCCESS" && (
                <div className="news-letter">
                    <p>
                        Welcome aboard {name ? `, ${name}` : ""}{" "}
                        <span role="img" aria-label="Ship">
                        🚢
                        </span>
                    </p>
                        <p>Please check your inbox to confirm the subscription!</p>
                </div>
            )}
        {status === "ERROR" && (
            <div className="news-letter">
                <p>Oops, something went wrong...</p>
            <p>
                Please,{" "}
                <button onClick={() => setStatus(null)}>try again.</button>
            </p>
            </div>
        )}
        {status === null && (
            <div className='news-letter-wrapper'>
                <div className="first-section">
                  <h2>Hey, Wait...</h2>
                  <h2>Suscribe to our Newsletter!</h2>
                  <p>We provide latest prizes update on GPU's, Mining Rigs, etc.</p>
                  <form onSubmit={handleSubmit} className="news-form">
                      <input
                      aria-label="Your first name"
                      name="fields[first_name]"
                      placeholder="Your first name"
                      type="text"
                      onChange={handleNameChange}
                      value={name}
                      />
                      <input
                      aria-label="Your email address"
                      name="email_address"
                      placeholder="Your email address"
                      required
                      type="email"
                      onChange={handleEmailChange}
                      value={email}
                      />
                      <button>SUBSCRIBE</button>
                  </form>
                </div>
                <div className="second-section">
                  <Image src={background} width={16} height={14} layout="responsive" />
                </div>

            </div>
        )}
    
    </div>
  )
}

export default Newsletter