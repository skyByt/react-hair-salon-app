import React, {useState, useRef } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './book.css'

const Book = ({setHide, setShow}) => {
    const [date, setDate] = useState(new Date());
    //to be further implemented
    const onChange = date => {
        setDate(date)
    };


    const [btnColor1, setBtnColor1] = useState("white");
    
    const [backgroundColor1, setBackgroundColor1] = useState("black");
    const onClick1 = () => {
      btnColor1 === "white" ? setBtnColor1("black") : setBtnColor1("white");
      backgroundColor1 === "black" ? setBackgroundColor1("rgba(254,235,130,255)") : setBackgroundColor1("black");
    }

    const [btnColor2, setBtnColor2] = useState("white");
    
    const [backgroundColor2, setBackgroundColor2] = useState("black");
    const onClick2 = () => {
      btnColor2 === "white" ? setBtnColor2("black") : setBtnColor2("white");
      backgroundColor2 === "black" ? setBackgroundColor2("rgba(254,235,130,255)") : setBackgroundColor2("black");
    }

    const [btnColor3, setBtnColor3] = useState("white");
    
    const [backgroundColor3, setBackgroundColor3] = useState("black");
    const onClick3 = () => {
      btnColor3 === "white" ? setBtnColor3("black") : setBtnColor3("white");
      backgroundColor3 === "black" ? setBackgroundColor3("rgba(254,235,130,255)") : setBackgroundColor3("black");
    }

    const [btnColor4, setBtnColor4] = useState("white");
    
    const [backgroundColor4, setBackgroundColor4] = useState("black");
    const onClick4 = () => {
      btnColor4 === "white" ? setBtnColor4("black") : setBtnColor4("white");
      backgroundColor4 === "black" ? setBackgroundColor4("rgba(254,235,130,255)") : setBackgroundColor4("black");
    }

    const [btnColor5, setBtnColor5] = useState("white");
    
    const [backgroundColor5, setBackgroundColor5] = useState("black");
    const onClick5 = () => {
      btnColor5 === "white" ? setBtnColor5("black") : setBtnColor5("white");
      backgroundColor5 === "black" ? setBackgroundColor5("rgba(254,235,130,255)") : setBackgroundColor5("black");
    }

    const [btnColor6, setBtnColor6] = useState("white");
    
    const [backgroundColor6, setBackgroundColor6] = useState("black");
    const onClick6 = () => {
      btnColor6 === "white" ? setBtnColor6("black") : setBtnColor6("white");
      backgroundColor6 === "black" ? setBackgroundColor6("rgba(254,235,130,255)") : setBackgroundColor6("black");
    }

    const [btnColor7, setBtnColor7] = useState("white");
    
    const [backgroundColor7, setBackgroundColor7] = useState("black");
    const onClick7 = () => {
      btnColor7 === "white" ? setBtnColor7("black") : setBtnColor7("white");
      backgroundColor7 === "black" ? setBackgroundColor7("rgba(254,235,130,255)") : setBackgroundColor7("black");
    }

    const [btnColor8, setBtnColor8] = useState("white");
    
    const [backgroundColor8, setBackgroundColor8] = useState("black");
    const onClick8 = () => {
      btnColor8 === "white" ? setBtnColor8("black") : setBtnColor8("white");
      backgroundColor8 === "black" ? setBackgroundColor8("rgba(254,235,130,255)") : setBackgroundColor8("black");
    }

    const [btnColor9, setBtnColor9] = useState("white");
    
    const [backgroundColor9, setBackgroundColor9] = useState("black");
    const onClick9 = () => {
      btnColor9 === "white" ? setBtnColor9("black") : setBtnColor9("white");
      backgroundColor9 === "black" ? setBackgroundColor9("rgba(254,235,130,255)") : setBackgroundColor9("black");
    }

    const [btnColor10, setBtnColor10] = useState("white");
    
    const [backgroundColor10, setBackgroundColor10] = useState("black");
    const onClick10 = () => {
      btnColor10 === "white" ? setBtnColor10("black") : setBtnColor10("white");
      backgroundColor10 === "black" ? setBackgroundColor10("rgba(254,235,130,255)") : setBackgroundColor10("black");
    }

    const [btnColor11, setBtnColor11] = useState("white");
    
    const [backgroundColor11, setBackgroundColor11] = useState("black");
    const onClick11 = () => {
      btnColor11 === "white" ? setBtnColor11("black") : setBtnColor11("white");
      backgroundColor11 === "black" ? setBackgroundColor11("rgba(254,235,130,255)") : setBackgroundColor11("black");
    }

    const [btnColor12, setBtnColor12] = useState("white");
    
    const [backgroundColor12, setBackgroundColor12] = useState("black");
    const onClick12 = () => {
      btnColor12 === "white" ? setBtnColor12("black") : setBtnColor12("white");
      backgroundColor12 === "black" ? setBackgroundColor12("rgba(254,235,130,255)") : setBackgroundColor12("black");
    }

    const [btnColor14, setBtnColor14] = useState("white");
    
    const [backgroundColor14, setBackgroundColor14] = useState("black");
    const onClick14 = () => {
      btnColor14 === "white" ? setBtnColor14("black") : setBtnColor14("white");
      backgroundColor14 === "black" ? setBackgroundColor14("rgba(254,235,130,255)") : setBackgroundColor14("black");
    }

    const [btnColor15, setBtnColor15] = useState("white");
    
    const [backgroundColor15, setBackgroundColor15] = useState("black");
    const onClick15 = () => {
      btnColor15 === "white" ? setBtnColor15("black") : setBtnColor15("white");
      backgroundColor15 === "black" ? setBackgroundColor15("rgba(254,235,130,255)") : setBackgroundColor15("black");
    }

    const [btnColor16, setBtnColor16] = useState("white");
    
    const [backgroundColor16, setBackgroundColor16] = useState("black");
    const onClick16 = () => {
      btnColor16 === "white" ? setBtnColor16("black") : setBtnColor16("white");
      backgroundColor16 === "black" ? setBackgroundColor16("rgba(254,235,130,255)") : setBackgroundColor16("black");
    }

    const [btnColor17, setBtnColor17] = useState("white");
    
    const [backgroundColor17, setBackgroundColor17] = useState("black");
    const onClick17 = () => {
      btnColor17 === "white" ? setBtnColor17("black") : setBtnColor17("white");
      backgroundColor17 === "black" ? setBackgroundColor17("rgba(254,235,130,255)") : setBackgroundColor17("black");
    }

    const [btnColor18, setBtnColor18] = useState("white");
    
    const [backgroundColor18, setBackgroundColor18] = useState("black");
    const onClick18 = () => {
      btnColor18 === "white" ? setBtnColor18("black") : setBtnColor18("white");
      backgroundColor18 === "black" ? setBackgroundColor18("rgba(254,235,130,255)") : setBackgroundColor18("black");
    }

    const [btnColor19, setBtnColor19] = useState("white");
    
    const [backgroundColor19, setBackgroundColor19] = useState("black");
    const onClick19 = () => {
      btnColor19 === "white" ? setBtnColor19("black") : setBtnColor19("white");
      backgroundColor19 === "black" ? setBackgroundColor19("rgba(254,235,130,255)") : setBackgroundColor19("black");
    }

    const [btnColor20, setBtnColor20] = useState("white");
    
    const [backgroundColor20, setBackgroundColor20] = useState("black");
    const onClick20 = () => {
      btnColor20 === "white" ? setBtnColor20("black") : setBtnColor20("white");
      backgroundColor20 === "black" ? setBackgroundColor20("rgba(254,235,130,255)") : setBackgroundColor20("black");
    }

    const [btnColor21, setBtnColor21] = useState("white");
    
    const [backgroundColor21, setBackgroundColor21] = useState("black");
    const onClick21 = () => {
      btnColor21 === "white" ? setBtnColor21("black") : setBtnColor21("white");
      backgroundColor21 === "black" ? setBackgroundColor21("rgba(254,235,130,255)") : setBackgroundColor21("black");
    }

    const [btnColor22, setBtnColor22] = useState("white");
    
    const [backgroundColor22, setBackgroundColor22] = useState("black");
    const onClick22 = () => {
      btnColor22 === "white" ? setBtnColor22("black") : setBtnColor22("white");
      backgroundColor22 === "black" ? setBackgroundColor22("rgba(254,235,130,255)") : setBackgroundColor22("black");
    }

    const [btnColor23, setBtnColor23] = useState("white");
    
    const [backgroundColor23, setBackgroundColor23] = useState("black");
    const onClick23 = () => {
      btnColor23 === "white" ? setBtnColor23("black") : setBtnColor23("white");
      backgroundColor23 === "black" ? setBackgroundColor23("rgba(254,235,130,255)") : setBackgroundColor23("black");
    }

    const [btnColor24, setBtnColor24] = useState("white");
    
    const [backgroundColor24, setBackgroundColor24] = useState("black");
    const onClick24 = () => {
      btnColor24 === "white" ? setBtnColor24("black") : setBtnColor24("white");
      backgroundColor24 === "black" ? setBackgroundColor24("rgba(254,235,130,255)") : setBackgroundColor24("black");
    }

    const [btnColor25, setBtnColor25] = useState("white");
    
    const [backgroundColor25, setBackgroundColor25] = useState("black");
    const onClick25 = () => {
      btnColor25 === "white" ? setBtnColor25("black") : setBtnColor25("white");
      backgroundColor25 === "black" ? setBackgroundColor25("rgba(254,235,130,255)") : setBackgroundColor25("black");
    }

    const [btnColor26, setBtnColor26] = useState("white");
    
    const [backgroundColor26, setBackgroundColor26] = useState("black");
    const onClick26 = () => {
      btnColor26 === "white" ? setBtnColor26("black") : setBtnColor26("white");
      backgroundColor26 === "black" ? setBackgroundColor26("rgba(254,235,130,255)") : setBackgroundColor26("black");
    }



  return (
    <div id='book' className='container-fluid'>
      <div className='row book-wrapper'>
      <h2>Book Appointment</h2>
        <div className='date col-xs-12 col-sm-12 col-md-12 col-lg-6'>
          <h3>Date and Time</h3>
          <Calendar className='calendar' onChange={onChange} value={date}/>
          <div className='date-time'>
            <ul className='services-book'>
                        <li><button onClick={onClick1} style={{ backgroundColor: backgroundColor1, color: btnColor1 }} className='clickable-time'>10:00AM</button></li>
                        <li><button onClick={onClick2} style={{ backgroundColor: backgroundColor2, color: btnColor2 }} className='clickable-time'>10:30AM</button></li>
                        <li><button onClick={onClick3} style={{ backgroundColor: backgroundColor3, color: btnColor3 }} className='clickable-time'>11:00AM</button></li>
                        <li><button onClick={onClick4} style={{ backgroundColor: backgroundColor4, color: btnColor4 }} className='clickable-time'>11:30AM</button></li>             
                    </ul>
            <ul className='services-book'>
                        <li><button onClick={onClick5} style={{ backgroundColor: backgroundColor5, color: btnColor5 }} className='clickable-time'>12:00PM</button></li>
                        <li><button onClick={onClick6} style={{ backgroundColor: backgroundColor6, color: btnColor6 }} className='clickable-time'>12:30PM</button></li>
                        <li><button onClick={onClick7} style={{ backgroundColor: backgroundColor7, color: btnColor7 }} className='clickable-time'>1:00PM</button></li>
                        <li><button onClick={onClick8} style={{ backgroundColor: backgroundColor8, color: btnColor8 }} className='clickable-time'>1:30PM</button></li>             
            </ul>
            <ul className='services-book'>
                        <li><button onClick={onClick9} style={{ backgroundColor: backgroundColor9, color: btnColor9 }} className='clickable-time'>2:00PM</button></li>
                        <li><button onClick={onClick10} style={{ backgroundColor: backgroundColor10, color: btnColor10 }} className='clickable-time'>2:30PM</button></li>
                        <li><button onClick={onClick11} style={{ backgroundColor: backgroundColor11, color: btnColor11 }} className='clickable-time'>3:00PM</button></li>
                        <li><button onClick={onClick12} style={{ backgroundColor: backgroundColor12, color: btnColor12 }} className='clickable-time'>3:30PM</button></li>            
            </ul>
          </div>
        </div>
        <div className='service col-xs-12 col-sm-12 col-md-12 col-lg-6'>
                <h3>Haircuts</h3>
                <div>
                    <ul className='services-book'>
                        <li><button onClick={onClick14} style={{ backgroundColor: backgroundColor14, color: btnColor14 }} className='clickable'>Men Haircut</button></li>
                        <li><button onClick={onClick15} style={{ backgroundColor: backgroundColor15, color: btnColor15 }} className='clickable'>Senior Haircut</button></li>
                        <li><button onClick={onClick16} style={{ backgroundColor: backgroundColor16, color: btnColor16 }} className='clickable'>Kid Haircut</button></li>             
                    </ul>
                    <ul className='services-book'>
                        <li><button onClick={onClick17} style={{ backgroundColor: backgroundColor17, color: btnColor17 }} className='clickable'>Cut and Shampoo</button></li>
                        <li><button onClick={onClick18} style={{ backgroundColor: backgroundColor18, color: btnColor18 }} className='clickable'>Hair Color</button></li>           
                    </ul>
                </div>
                <h3>Shaves</h3>
                <div>
                <ul className='services-book'>
                        <li><button onClick={onClick19} style={{ backgroundColor: backgroundColor19, color: btnColor19 }} className='clickable'>Classic Shave</button></li>
                        <li><button onClick={onClick20} style={{ backgroundColor: backgroundColor20, color: btnColor20 }} className='clickable'>Steam Shave</button></li>
                        <li><button onClick={onClick21} style={{ backgroundColor: backgroundColor21, color: btnColor21 }} className='clickable'>Head Shave</button></li>             
                    </ul>
                    <ul className='services-book'>
                        <li><button onClick={onClick22} style={{ backgroundColor: backgroundColor22, color: btnColor22 }} className='clickable'>Hot Towel Shave</button></li>
                        <li><button onClick={onClick23} style={{ backgroundColor: backgroundColor23, color: btnColor23 }} className='clickable'>Beard Trimming</button></li>           
                    </ul>
                </div>
                <h3>Your Expert</h3>
                    <ul className='services-book'>
                        <li><button onClick={onClick24} style={{ backgroundColor: backgroundColor24, color: btnColor24 }} className='clickable'>Brad</button></li>
                        <li><button onClick={onClick25} style={{ backgroundColor: backgroundColor25, color: btnColor25 }} className='clickable'>Maxim</button></li>
                        <li><button onClick={onClick26} style={{ backgroundColor: backgroundColor26, color: btnColor26 }} className='clickable'>Vittorio</button></li>             
                    </ul>
        </div>
        <div className='credentials'>
          <input placeholder='Name' STYLE='color=#FFFF00'></input>
          <input placeholder='Email'></input>
          <button className='appointment' onClick={() => {setHide(false); setShow(true);}}>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Book
