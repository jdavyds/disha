import styles from './../assets/Style.module.css'
import { useSelector } from 'react-redux'
import { Instagram, Facebook } from '@mui/icons-material';
import icon2 from './../assets/Vector.png' 
import icon1 from './../assets/Vector (1).png' 
import icon6 from './../assets/Vector (6).png' //linkedIn
import icon7 from './../assets/Vector (7).png' //youtube
import icon3 from './../assets/Vector (10).png' 
import icon4 from './../assets/Vector (4).png' 
import icon5 from './../assets/Vector (5).png' 
import icon8 from './../assets/Vector (8).png' 
import icon9 from './../assets/Vector (9).png';
import facebook from './../assets/facebook.png'
import slack from './../assets/slack.png'
import insta from './../assets/insta.png'
import dp from './../assets/dp.png'
import { useState, useEffect } from 'react';

function Preview() {
    const contact = useSelector(state => state.contact.contact)
    const social = useSelector(state => state.social.social)
    const link = useSelector(state => state.socLink.socLink)
    const shape = useSelector(state => state.shape)
    const colors = useSelector(state => state.style.style.color)
    const fonts = useSelector(state => state.style.style.font)
    const stylez = useSelector(state => state.style.style.style)
    const sizes = useSelector(state => state.style.style.size)
    const positions = useSelector(state => state.style.style.position)
    const spaces = useSelector(state => state.style.style.space)
    const avatars = useSelector(state => state.style.style.avatar)
    const banners = useSelector(state => state.addon.banner)
    const texts = useSelector(state => state.addon.text)
    const disclaimers = useSelector(state => state.addon.disclaimer)
    const bannerValue = useSelector(state => state.values.banner)
    const textValue = useSelector(state => state.values.text)
    const disclaimerValue = useSelector(state => state.values.disclaimer)
    const blinkValue = useSelector(state => state.values.blink)
    const [display, setDisplay] = useState(false)
    const [banner, setBanner] = useState(false)
    const [text, setText] = useState(false)
    const [disclaimer, setDisclaimer] = useState(false)
    const [shapes, setShapes] = useState(50)
    const [color, setColor] = useState('#03132c99')
    const [font, setFont] = useState('Roboto Condensed')
    const [size, setSize]  = useState(18)
    const [style, setStyle] = useState('Square')
    const [avatar, setAvatar] = useState(130)
    const [position, setPosition] = useState({
        top: 'auto',
        right: '10px',
        bottom: 'auto',
        left: 0
    })
    const [src, setSrc] = useState('')
    
    useEffect(() => {
        setDisplay(true)
    }, [social])
    useEffect(() => {
        if(banners === true) {
            setBanner(true)
        } else if(banners === false) {
            setBanner(false)
        }
    }, [banners])
    useEffect(() => {
        if(texts === true) {
            setText(true)
        } else if(texts === false) {
            setText(false)
        }
    }, [texts])
    useEffect(() => {
        if(disclaimers === true) {
            setDisclaimer(true)
        } else if(disclaimers === false) {
            setDisclaimer(false)
        }
    }, [disclaimers])
    useEffect(() => {
        if(shape === 'Oval') {
            setShapes(50)
        }
        if(shape === 'Rounded') {
            setShapes(20)
        }
        if(shape === 'Square') {
            setShapes(0)
        }
    }, [shape])
    useEffect(() => {
        if(colors === 'red') {
            setColor('red')
        }
        if(colors === 'blue') {
            setColor('#03132c99')
        }
        if(colors === 'green') {
            setColor('green')
        }
    }, [colors])
    useEffect(() => {
        if(fonts === 'Cinzel') {
            setFont('Cinzel')
        }
        if(fonts === 'Roboto Condensed') {
            setFont('Roboto Condensed')
        }
        if(fonts === 'Courgette') {
            setFont('Courgette')
        }
    }, [fonts])
    useEffect(() => {
        if(sizes === 'Small') {
            setSize(16)
        }
        if(sizes === 'Medium') {
            setSize(18)
        }
        if(sizes === 'Large') {
            setSize(20)
        }
    }, [sizes])
    useEffect(() => {
        if(stylez === 'Oval') {
            setStyle(50)
        }
        if(stylez === 'Rounded') {
            setStyle(20)
        }
        if(stylez === 'Square') {
            setStyle(0)
        }
    }, [stylez])
    useEffect(() => {
        if(positions === 'Middle') {
            setPosition({top: 'auto', right: '10px', bottom: 'auto', left: 0})
        }
        if(positions === 'Top') {
            setPosition({top: 0, right: '10px', bottom: 'auto', left: 0})
        }
        if(positions === 'Bottom') {
            setPosition({top: 'auto', right: '10px', bottom: 0, left: 0})
        }
    }, [positions])
    useEffect(() => {
        if(spaces === 10) {
            setPosition((prevState) => ({...prevState, right: '10px'}))
        }
        if(spaces === 20) {
            setPosition((prevState) => ({...prevState, right: '20px'}))
        }
        if(spaces === 30) {
            setPosition((prevState) => ({...prevState, right: '30px'}))
        }
        if(spaces === 0) {
            setPosition((prevState) => ({...prevState, right: 0}))
        }
    }, [spaces])
    useEffect(() => {
        if(avatars === 1) {
            setAvatar(90)
        }
        if(avatars === 2) {
            setAvatar(110)
        }
        if(avatars === 3) {
            setAvatar(130)
        }
    }, [avatars])
    return(
        <div className={styles.preview} id='preview'>
            <div className={styles.mainPrev}>
            <nav className={styles.dp} style={{margin: `${position.top} ${position.right} ${position.bottom} ${position.left}`, width: `${avatar}px`}} >
                <img src={contact.imageAdd} alt="" style={{borderRadius: `${style}%`}} />
            </nav>
            <section>
                <h2 style={{color: `${color}`,}}>{contact.firstName}  {contact.lastName}</h2>
                <h4><span> {contact.jobTitle} </span> - <span>{contact.companyName}</span></h4>
                <p>Email: <b style={{color: `${color}`, fontFamily: `${font}`, fontSize: `${size}px`}}>{contact.email}</b></p>
                <p>Phone: <b style={{color: `${color}`, fontFamily: `${font}`, fontSize: `${size}px`}}>{contact.phone}</b></p>
                <p>Website: <b style={{color: `${color}`, fontFamily: `${font}`, fontSize: `${size}px`}}>{contact.website}</b></p>
                <p>Address: <b style={{color: `${color}`, fontFamily: `${font}`, fontSize: `${size}px`}}>{contact.address}</b></p>
                    {
                        display && ( 
                            <nav className={styles.prevIcons}>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.github}`} id={social.github ? '' : styles.none}><img src={icon1} alt="" /> </a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.behance}`} id={social.behance ? '' : styles.none}><img src={icon2} alt="" /></a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.snapchat}`} id={social.snapchat ? '' : styles.none}><img src={icon3} alt="" /></a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.pinterest}`} id={social.pinterest ? '' : styles.none}><img src={icon4} alt="" /></a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.skype}`} id={social.skype ? '' : styles.none}><img src={icon5} alt="" /></a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.linkedIn}`} id={social.linkedIn ? '' : styles.none}><img src={icon6} alt="" /></a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.youtube}`} id={social.youtube ? '' : styles.none}><img src={icon7} alt="" /></a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.vimeo}`} id={social.vimeo ? '' : styles.none}>
                                <img src={icon8} alt="" />
                                </a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.twitter}`} id={social.twitter ? '' : styles.none}><img src={icon9} alt="" /></a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.facebook}`} id={social.facebook ? '' : styles.none}>
                                <img src={facebook} alt="" />
                                </a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.instagram}`} id={social.instagram ? '' : styles.none}>
                                <img src={insta} alt="" />
                                </a>
                                <a style={{borderRadius: `${shapes}%`, background: `${color}`}} href={`https://${link.slack}`} id={social.slack ? '' : styles.none}>
                                <img src={slack} alt="" />
                                </a>
                            </nav>
                        )
                    }
            </section>
        </div>
        {
                        banner && (
                            <a href={`https://${blinkValue}`} className={styles.prevBanner}>
                                <img src={bannerValue} alt=""  />
                            </a>
                        )
                    }
                    {
                        text && (
                            <p className={styles.textPar}>
                                {textValue}
                            </p>
                        )
                    }
                    {
                        disclaimer && (
                            <p className={styles.disc}>
                                {disclaimerValue}
                            </p>
                        )
                    }
        </div>
    )
}
export default Preview;