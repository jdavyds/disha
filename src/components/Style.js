import styles from './../assets/Style.module.css'
import { useEffect, useState } from 'react';
import Select from 'react-select';
import dp from './../assets/dp.png'
import cam from './../assets/pix.png'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useSelector, useDispatch } from 'react-redux'
import { updateStyle } from '../assets/action';
function Social() {
    const dispatch = useDispatch()
    const page = useSelector(state => state.page)
    const colors = [
        { label: "blue", value: 'blue' },
        { label: "red", value: 'red' },
        { label: "green", value: 'green' },
      ];
    const fonts = [
        { label: 'Cursive', value: 'Cursive'},
        { label: 'Ubuntu', value: 'Ubuntu'},
        { label: 'Sans-Serif', value: 'Sans-Serif'},
    ]
    const sizes = [
        { label: 'Medium', value: 'Medium'},
        { label: 'Small', value: 'Small'},
        { label: 'Large', value: 'Large'}
    ]
    const stylez = [
        { label: "Square", value: 'Square' },
        { label: "Oval", value: 'Oval' },
        { label: "Rounded", value: 'Rounded' },
    ]
    const positions = [
        { label: 'Middle', value: 'Middle'},
        { label: 'Top', value: 'Top'},
        { label: 'Bottom', value: 'Bottom'}
    ]
    const [color, setColor] = useState(colors[0])
    const [font, setFont] = useState(fonts[0])
    const [size, setSize] = useState(sizes[0])
    const [style, setStyle] = useState(stylez[0])
    const [position, setPosition] = useState(positions[0])
    
    const [ state, setState] = useState({
        color: '',
        font: '',
        size: '',
        style: '',
        position: '',
        avatar: '',
        space: ''
    })
    function handleColorChange(obj) {
        setColor(obj)
        setState((prevState) => ({...prevState, color: obj.label}))
        updater()
    }
    function handleFontChange(obj) {
        setFont(obj)
        setState((prevState) => ({...prevState, font: obj.label}))
        updater()
    }
    function handleSizeChange(obj) {
        setSize(obj)
        setState((prevState) => ({...prevState, size: obj.label}))
        updater()
    }
    function handleStyleChange(obj) {
        setStyle(obj)
        setState((prevState) => ({...prevState, style: obj.label}))
        updater()
    }
    function handlePositionChange(obj) {
        setPosition(obj)
        setState((prevState) => ({...prevState, position: obj.label}))
        updater()
    }
    function handleSpaceChange(e) {
        e.preventDefault()
        setState((prevState) => ({...prevState, space: e.target.value}))
        updater()
    }
    function handleAvatarChange(e) {
        e.preventDefault()
        setState((prevState) => ({...prevState, avatar: e.target.value}))
        updater()
    }
    function updater() {
        dispatch(updateStyle(state))
    }
    useEffect(() => {
        updater()
    })
    return(
            <div className={(page === 'Style') ? styles.style : styles.display}>
                <div className='format'>
                    <nav className={styles.fontFormat}>
                        <label htmlFor="">
                            <span>link color</span>
                            <Select
                                id={styles.select}
                                value={color}
                                options={colors}
                                onChange={handleColorChange} />
                        </label>
                        <label htmlFor="">
                            <span>font family</span>
                            <Select
                                id={styles.select}
                                value={font}
                                options={fonts} 
                                onChange={handleFontChange}/>
                        </label>
                        <label htmlFor="">
                            <span>font size</span>
                            <Select
                                id={styles.select}
                                value={size}
                                options={sizes}
                                onChange={handleSizeChange} />
                        </label>
                    </nav>
                    <div className={styles.formatDiv}>
                        <section className={styles.imageSection}>
                            <div>
                                <img src={dp} alt="" />
                                <img src={cam} alt="" className={styles.imgIcon}/>
                            </div>
                            <nav className={styles.imageFormat}>
                                <label htmlFor="">
                                    <span>image style</span>
                                    <Select
                                        value={style}
                                        options={stylez}
                                        onChange={handleStyleChange} />
                                </label>
                                <label htmlFor="">
                                    <span>image position</span>
                                    <Select
                                        value={position}
                                        options={positions}
                                        onChange={handlePositionChange} />
                                </label>
                            </nav>
                        </section>
                        <section className={styles.slider}>
                            <Box width={250}>
                                Avatar Size
                                <Slider 
                                defaultValue={3} 
                                id={styles.slide}
                                aria-label="Default"
                                step={1}
                                onChange={handleAvatarChange}
                                min={1}
                                marks
                                max={3}
                                valueLabelDisplay="auto" />
                            </Box>
                            <Box width={250}>
                                Spacing
                                <Slider 
                                defaultValue={10} 
                                id={styles.slide}
                                aria-label="Default"
                                step={10}
                                onChange={handleSpaceChange}
                                min={0}
                                marks
                                max={30}
                                valueLabelDisplay="auto" />
                            </Box>
                        </section>
                    </div>
                </div>
            </div>
    )
}
export default Social