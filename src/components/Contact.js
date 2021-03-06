import { useCallback, useEffect, useState } from 'react';
import styles from './../assets/Style.module.css'
import { Upload } from '@mui/icons-material';
import { useDispatch, useSelector} from 'react-redux'
import { updateContact } from '../assets/action';
function Contact() {
    const dispatch = useDispatch()
    const page = useSelector(state => state.page)
    const [ state, setState] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        companyName: '',
        email: '',
        phone: '',
        website: '',
        address: '',
        imageAdd: '',
    })
    const [imageUrl, setImageUrl] = useState()
    const [imageFile, setImageFile] = useState()

    const onDrop = useCallback(
        acceptedFiles => {
            const file = acceptedFiles[0]
            setImageFile(file)

            const reader = new FileReader()
            reader.addEventListener('load', () => setImageUrl(String(reader.result)), false)
            reader.readAsDataURL(file)
        }, [setImageFile, setImageUrl]
    )
    function updater() {
        dispatch(updateContact(state))
    }
    useEffect(() => {
        updater()
    })
    return(
        <div className={  (page === 'Contact') ? styles.contact : styles.display}>
            <form className={styles.conForm}>
                <label htmlFor="">
                    <input type="text"
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, firstName: e.target.value}))
                    }}
                    onFocus={updater()} required
                     />
                    <span>first name</span>
                </label>
                <label htmlFor="">
                    <input type="text" required
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, lastName: e.target.value}))
                    }}
                    onFocus={updater()}/>
                    <span>last name</span>
                </label>
                <label htmlFor="">
                    <input type="text" required
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, jobTitle: e.target.value}))
                    }}
                    onFocus={updater()}/>
                    <span>job title</span>
                </label>
                <label htmlFor="">
                    <input type="text" required
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, companyName: e.target.value}))
                    }}
                    onFocus={updater()}/>
                    <span>company name</span>
                </label>
                <label htmlFor="">
                    <input type="email" required
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, email: e.target.value}))
                    }}
                    onFocus={updater()}/> 
                    <span>email</span>
                </label>
                <label htmlFor="">
                    <input type="tel" required
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, phone: e.target.value}))
                    }}
                    onFocus={updater()}/>
                    <span>phone</span>
                </label>
                <label htmlFor="">
                    <input type="text" 
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, website: e.target.value}))
                    }}
                    onFocus={updater()}/>
                    <span>website</span>
                </label>
                <label htmlFor="">
                    <input type="text" required
                    onChange={(e) =>  {
                        setState((prevState) => ({...prevState, address: e.target.value}))
                    }}
                    onFocus={updater()}/>
                    <span>address</span>
                </label>
                <button><Upload /> upload image
                    <input type="file" accept='image/*' required
                    onChange={ (e) =>  {
                        // setState((prevState) => ({...prevState, imageAdd: e.target.files[0]}))
                        onDrop()
                        console.log(e.target.files[0]);
                    }}
                    id='testImg'
                    onFocus={updater()}
                    />
                </button>
                {
                    imageUrl && (
                        <div>
                            <img src={imageUrl} alt=''/>
                        </div>
                    )
                }
            </form>
        </div>
    );
}
export default Contact;