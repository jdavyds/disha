import styles from './../assets/Style.module.css'
import navLinks from './NavLinks';
import { useSelector, useDispatch } from 'react-redux'
import { updatePage } from '../assets/action';
function Nav() {
    const dispatch = useDispatch()
    const page = useSelector(state => state.page)
    return(
        <div className={styles.nav}>
            {
                    navLinks.map(links => {
                        if(links.name === page) {
                            return (
                                <button className={styles.active}>
                                    <span>{links.name}</span>
                                </button>
                            )
                        } else {
                             return (
                                <button className={styles.normal} onClick={
                                        ()=> {
                                            dispatch(updatePage(links.name))
                                        } 
                                    }>
                                    <span>{links.name}</span>
                                </button>)
                        } 
                    })
            }
        </div>
    );
}
export default Nav;