import { useEffect, useState } from 'react';
import styles from './../assets/Style.module.css'
import { Instagram, Facebook, } from '@mui/icons-material';
import icon1 from './../assets/Vector (1).png' 
import icon2 from './../assets/Vector.png' 
import icon3 from './../assets/Vector (10).png' 
import icon4 from './../assets/Vector (4).png' 
import icon5 from './../assets/Vector (5).png' 
import icon6 from './../assets/Vector (6).png' 
import icon7 from './../assets/Vector (7).png' 
import icon8 from './../assets/Vector (8).png' 
import icon9 from './../assets/Vector (9).png' 
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faHashtag,  } from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from 'react-redux'
import { updateSocial, updateSocLink, updateShape } from '../assets/action';

function Social() {
    const page = useSelector(state => state.page)
    const dispatch = useDispatch()
    const Options = [
        { label: "Oval", value: '1' },
        { label: "Rounded", value: '2' },
        { label: "Square", value: '3' },
      ];
    const [count, setCount] = useState(false)
    const [selected, setSelected] = useState(Options[0])
    const [state, setState] = useState({
        github: 'www.github.com/',
        twitter: 'www.twitter.com/',
        instagram: 'www.instagram.com/',
        facebook: 'www.facebook.com/',
        youtube: 'www.youtube.com/',
        linkedIn: 'www.linkedin.com/in/',
        behance: 'www.behance.net/',
        pinterest: 'www.pinterest.com/',
        vimeo: 'www.vimeo.com/',
        slack: 'www.slack.com/',
        snapchat: 'www.snapchat.com/',
        skype: '',
    })
    const [display, setDisplay] = useState({
        github: false,
        twitter: false,
        instagram: false,
        facebook: false,
        youtube: false,
        linkedIn: false,
        behance: false,
        pinterest: false,
        vimeo: false,
        slack: false,
        snapchat: false,
        skype: false,
    })
    const handleChange = (obj) => {
        setSelected(obj)
        dispatch(updateShape(obj.label))
    }
    function updater() {
        dispatch(updateSocial(display))
    }
    function linkUpdater() {
        dispatch(updateSocLink(state))
    }
    useEffect(() => {
        updater()
        linkUpdater()
    })
    useEffect(() => {
        let disArray = [display.github, display.twitter, display.instagram, display.facebook, display.youtube, display.linkedIn, display.behance, display.pinterest, display.vimeo, display.slack, display.snapchat, display.skype]
        let match =  disArray.filter(el => el === true)
            if(match.length >= 5) {
                setCount(true)
            }
            if(match.length < 5) {
                setCount(false)
            }
        
    }, [display])
    return(
        <div className={(page === 'Socials') ? styles.social : styles.display }>
                <div className={styles.socialIcons}>
                    <nav className={count ? styles.disabled : ''}>
                        <img src={icon1} alt="" id={display.github ? styles.click : styles.unclick} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, github: !display.github}))
                        updater()
                    }}/>
                        <img src={icon2} alt="" id={display.behance ? styles.click : styles.unclick} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, behance: !display.behance}))
                        updater()
                    }}/>
                        <img src={icon3} alt="" id={display.snapchat ? styles.click : styles.unclick} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, snapchat: !display.snapchat}))
                        updater()
                    }}/>
                        <img src={icon4} alt="" id={display.pinterest ? styles.click : styles.unclick} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, pinterest: !display.pinterest}))
                        updater()
                    }}/>
                        <img src={icon5} alt="" id={display.skype ? styles.click : styles.unclick} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, skype: !display.skype}))
                        updater()
                    }}/>
                        <img src={icon6} alt="" id={display.linkedIn ? styles.click : styles.unclick} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, linkedIn: !display.linkedIn}))
                        updater()
                    }}/>
                        <img src={icon7} alt="" id={display.youtube ? styles.click : styles.unclick} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, youtube: !display.youtube}))
                        updater()
                    }}/>
                        <img src={icon8} alt="" id={display.vimeo ? styles.click : styles.unclick} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, vimeo: !display.vimeo}))
                        updater()
                    }}/>
                        <img src={icon9} alt="" id={display.twitter ? styles.click : styles.unclick} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, twitter: !display.twitter}))
                        updater()
                    }}/>
                        <Facebook id={display.facebook ? styles.click : styles.unclick} sx={{ fontSize: 65, color: '#03132C', }} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, facebook: !display.facebook}), )
                        updater()
                    }}/>
                        <Instagram id={display.instagram ? styles.click : styles.unclick} sx={{ fontSize: 65, color: '#03132C', }} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, instagram: !display.instagram}))
                        updater()
                    }}/>
                        <FontAwesomeIcon id={display.slack ? styles.click : styles.unclick} icon={ faHashtag } className={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, slack: !display.slack}))
                        updater()
                    }}/>
                    </nav>
                    <Select className={styles.shape}
                        value={selected}
                        options={Options} 
                        onChange={handleChange}
                    />
                </div>
                <div className={display.github ? styles.socDiv : styles.none}>
                    <img src={icon1} alt="" />
                    <input type="text" value={state.github}  onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, github: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, github: !display.github}))
                    }}/>
                </div>
                <div className={display.behance ? styles.socDiv : styles.none}>
                    <img src={icon2} alt="" />
                    <input type="text" value={state.behance} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, behance: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, behance: !display.behance}))
                    }}/>
                </div>
                <div className={display.snapchat ? styles.socDiv : styles.none}>
                    <img src={icon3} alt="" />
                    <input type="text" value={state.snapchat} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, snapchat: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, snapchat: !display.snapchat}))
                    }}/>
                </div>
                <div className={display.pinterest ? styles.socDiv : styles.none}>
                    <img src={icon4} alt="" />
                    <input type="text" value={state.pinterest} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, pinterest: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, pinterest: !display.pinterest}))
                    }}/>
                </div>
                <div className={display.skype ? styles.socDiv : styles.none}>
                    <img src={icon5} alt="" />
                    <input type="text" placeholder='Your Skype ID' onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, skype: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, skype: !display.skype}))
                    }}/>
                </div>
                <div className={display.linkedIn ? styles.socDiv : styles.none}>
                    <img src={icon6} alt="" />
                    <input type="text" value={state.linkedIn} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, linkedIn: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, linkedIn: !display.linkedIn}))
                    }}/>
                </div>
                <div className={display.youtube ? styles.socDiv : styles.none}>
                    <img src={icon7} alt="" />
                    <input type="text" value={state.youtube} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, youtube: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, youtube: !display.youtube}))
                    }}/>
                </div>
                <div className={display.vimeo ? styles.socDiv : styles.none}>
                    <img src={icon8} alt="" />
                    <input type="text" value={state.vimeo} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, vimeo: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, vimeo: !display.vimeo}))
                    }}/>
                </div>
                <div className={display.twitter ? styles.socDiv : styles.none}>
                    <img src={icon9} alt="" />
                    <input type="text" value={state.twitter} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, twitter: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, twitter: !display.twitter}))
                    }}/>
                </div>
                <div className={display.facebook ? styles.socDiv : styles.none}>
                    <Facebook sx={{marginLeft: 0.5, fontSize: 45, color: '#03132C', }}/>
                    <input type="text" value={state.facebook} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, facebook: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, facebook: !display.facebook}))
                    }}/>
                </div>
                <div className={display.instagram ? styles.socDiv : styles.none}>
                    <Instagram sx={{marginLeft: 0.5, fontSize: 45, color: '#03132C', }}/>
                    <input type="text" value={state.instagram} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, instagram: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, instagram: !display.instagram}))
                    }}/>
                </div>
                <div className={display.slack ? styles.socDiv : styles.none}>
                    <FontAwesomeIcon icon={ faHashtag } id={styles.icon}/>
                    <input type="text" value={state.slack} onFocus={linkUpdater()}
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, slack: e.target.value}))
                    }}/>
                    <FontAwesomeIcon icon={ faTrash } id={styles.icons} onClick={(e) =>  {
                        setDisplay((prevState) => ({...prevState, slack: !display.slack}))
                    }}/>
                </div>
        </div>
        
    )
}
export default Social