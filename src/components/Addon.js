import styles from './../assets/Style.module.css'
import { useState, useEffect } from 'react'
import img from './../assets/banner.png'
import { Switch } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { updateAddon, updateValues } from '../assets/action';

function Addon() {
    const dispatch = useDispatch()
    const page = useSelector(state => state.page)
    const [banner, setBanner] = useState(false)
    const [text, setText] = useState(false)
    const [disclaimer, setDisclaimer] = useState(false)
    const [state, setState] = useState({
        disclaimer: '',
        text: '',
        banner: ''
    })
    const [values, setValues] = useState({
        banner: '',
        disclaimer: 'This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you are not the named addressee you should not disseminate, distribute or copy this e-mail. Please notify the sender immediately by e-mail if you have received this e-mail by mistake and delete this e-mail from your system.',
        text: '',
        blink: ''
    })
    function handleBannerChange(e) {
        setBanner(!banner)
        setState((prevState) => ({...prevState, banner: e.target.checked}))
    }
    function handleTextChange(e) {
        setText(!text)
        setState((prevState) => ({...prevState, text: e.target.checked}))
    }
    function handleDisclaimerChange(e) {
        setDisclaimer(!disclaimer)
        setState((prevState) => ({...prevState, disclaimer: e.target.checked}))
    }
    function updater() {
        dispatch(updateAddon(state))
    }
    function valuesUpdater() {
        dispatch(updateValues(values))
    }
    useEffect(() => {
        updater()
        valuesUpdater()
    })
    return(
        <div className={ (page === 'Addon') ?  styles.addon : styles.display}>
            <div className={styles.switches}>
                <nav>
                    <div className={styles.switch}>
                        <label htmlFor="">Add Banner</label>
                        <Switch 
                        id={styles.switch}
                        onChange={handleBannerChange}  />
                    </div>
                    <section className={ banner ? styles.banner : styles.none}>
                        <div>
                            <figure>
                            <img src={values.banner} alt="" />
                            </figure>
                            <div>
                            <p>
                            Upload banner image in jpg, png or gif format. <br /> Image must be 728 x 90px. <br />Maximum file size is 500KB.
                            </p>
                            <p className={styles.btnPar}>
                                <button>CHANGE IMAGE
                                <input type="file" accept='image/*'
                                    onChange={ (e) =>  {
                                        setValues((prevState) => ({...prevState, banner: URL.createObjectURL(e.target.files[0])}))
                                    }}
                                    onFocus={valuesUpdater()} />
                                </button>
                                <button 
                                onClick={(e) => {
                                    setValues((prevState) => ({...prevState, banner: ''}))
                                }}
                                >DELETE</button>
                            </p>
                            </div>
                        </div>
                        <div className={styles.blink}>
                            <img src={img} alt="" />
                            <input type="text"placeholder='Enter Banner Link' 
                            onChange={ (e) =>  {
                                setValues((prevState) => ({...prevState, blink: e.target.value}))
                            }}
                            onFocus={valuesUpdater()}/>
                        </div>
                    </section>
                </nav>
                <nav>
                    <div className={styles.switch}>
                        <label htmlFor="">Add Text</label>
                        <Switch 
                        id={styles.switch}
                        onChange={handleTextChange} />
                    </div>
                    <section className={text ? styles.addText : styles.none}>
                        <textarea 
                        onChange={(e) =>  {
                            setValues((prevState) => ({...prevState, text: e.target.value}))
                        }}></textarea>
                    </section>
                </nav>
                <nav>
                    <div className={styles.switch}>
                        <label htmlFor="">Add Disclaimer</label>
                        <Switch 
                        id={styles.switch}
                        onChange={handleDisclaimerChange}
                        onFocus={valuesUpdater()} />
                    </div>
                    <section className={disclaimer ? styles.disclaimer : styles.none}>
                        <textarea 
                        value={values.disclaimer}
                        onChange={(e) =>  {
                            setValues((prevState) => ({...prevState, disclaimer: e.target.value}))
                        }}
                        onFocus={valuesUpdater()}> </textarea>
                    </section>
                </nav>
            </div>
        </div>
    )
}
export default Addon