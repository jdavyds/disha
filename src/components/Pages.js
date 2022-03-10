import Contact from './Contact';
import Social from './Social';
import Style from './Style';
import Addon from './Addon';

const Pages = [
    {
        path: '/',
        component: Contact
    },
    {
        path: '/socials',
        component: Social
    },
    {
        path: '/style',
        component: Style
    },
    {
        path: '/addon',
        component: Addon
    },
]

export default Pages
