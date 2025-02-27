import React, { useState, useEffect} from 'react';
import "./Footer.css"


const AlbertoCoFooter = () => {

const [time, setTime] = useState(new Date(). toLocaleTimeString());
    const [location, setLocation] = useState('Getting location...')

    //update the time per second
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        return ()=>clearInterval(timer);
    }, [])

    //to get location with html5 geolocation
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            async (position)=>{
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const apiKey = 'b9b067d26709401e46f6ff08ccfd9a22'
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
                
                try{
                    const response = await fetch(url);
                    const data = await response.json()
                    const city = data.name; //to get the city name from the api
                    setLocation(city || 'unknown city')
                }
                catch(err){
                    setLocation("can't find city");
                    console.error("can't get city");
                }

                
            }
        )
    })

    const scrollText = `Date: ${new Date().toLocaleDateString()} | Time: ${time} | City: ${location} `

  return (
    <footer className="alberto-co-footer">
      <div className="footer-content">
        <div className="about-shop">
          <h3>ABOUT THE COMPANY</h3>
          <p>Alberto Watch </p>
          <p>Phone: (787)265-6370</p>
          <p>Email: <a href="mailto:sales@shopalbertopr.com">sales@albertowatch.com</a></p>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">O</a>
            <a href="#" className="social-icon">d</a>
          </div>
        </div>
        <div className="policies">
          <h3>POLICIES</h3>
          <ul>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>NEWSLETTER</h3>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className='time-scroll'>
        {scrollText}
       </div>
    </footer>
  );
};

export default AlbertoCoFooter;