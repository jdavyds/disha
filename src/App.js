import './App.css';
import styles from './assets/Style.module.css'
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/Nav';
import Preview from './components/preview';
import { useDispatch, useSelector } from 'react-redux'
import Contact from './components/Contact';
import Social from './components/Social';
import Style from './components/Style';
import Addon from './components/Addon';
import { useEffect } from 'react';
import { updatePage } from './assets/action';

const target = document.getElementById('preview')
function App() {
  const page = useSelector(state => state.page)
  const dispatch = useDispatch()
  function handleNext() {
    if(page === 'Contact') {
      dispatch(updatePage('Socials'))
    }
    if(page === 'Socials') {
      dispatch(updatePage('Style'))
    }
    if(page === 'Style') {
      dispatch(updatePage('Addon'))
    }
  }
  function handlePrev() {
    if(page === 'Socials') {
      dispatch(updatePage('Contact'))
    }
    if(page === 'Style') {
      dispatch((updatePage('Socials')))
    }
    if(page === 'Addon') {
      dispatch(updatePage('Style'))
    }
  }
  useEffect(() => {
    
  })
  function handleCopy(e) {
    // const target = document.createRange()
    // target.selectNode(document.getElementById('preview'))
    // window.getSelection().removeAllRanges()
    // window.getSelection().addRange(target)
    // document.execCommand('copy')
    // window.getSelection().removeAllRanges()
    // const target = document.getElementById('preview')
    // navigator.clipboard.read(target)
    // console.log('copied');
    let doc = document
    let text = doc.getElementById('preview')
    let range, selection;
    
    if (doc.body.createTextRange)
    {
        range = doc.body.createRange();
        range.moveToElementText(text);
        range.select();
    } 
    
    else if (window.getSelection)
    {
        selection = window.getSelection();        
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    e.target.textContent = "Copied";
  }
  
  return (
    <div className="App">
      <Header />
      <main>
        <div className={styles.main}>
                <Nav />
            <div className={styles.all}>
                <Contact />
                <Social />
                <Style />
                <Addon />
                <div className={styles.previewWrapper}>
                     Preview
                    <Preview />
                    <button className={styles.copy}
                    onClick={handleCopy}>Copy to ClipBoard</button>
                </div>
            </div>
        </div>
        <div className={styles.pagination}>
              <button
              onClick={handlePrev} 
              className={styles.prev}>PREVIOUS</button>
              <button 
              onClick={handleNext}
              className={styles.next}>NEXT</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;

