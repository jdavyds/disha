const contactReducer = (state = {}, action ) => {
    switch(action.type) {
        case 'UPDATE':
            return state =  {contact: action.data}
        default:
            return state
    }
}
const socialReducer = (state = {}, action) =>  {
    switch(action.type) {
        case 'SOCIAL':
            return state = {social: action.data}
        default:
            return state
    }
}
const socLinkReducer = (state = {}, action) =>  {
    switch(action.type) {
        case 'SOCLINK':
            return state = {socLink: action.data}
        default:
            return state
    }
}
const shapeReducer = (state = 'Oval', action) =>  {
    switch(action.type) {
        case 'SHAPE':
            return state = action.data
        default:
            return state
    }
}
const styleReducer = (state = {color: '',
font: '',
size: '',
style: '',
position: '',
avatar: '',
space: ''}, action) =>  {
    switch(action.type) {
        case 'STYLE':
            return state = {style: action.data}
        default:
            return state
    }
}
const addonReducer = (state = {}, action) =>  {
    switch(action.type) {
        case 'ADDON':
            return state = action.data
        default:
            return state
    }
}
const valuesReducer = (state = {}, action) =>  {
    switch(action.type) {
        case 'VALUES':
            return state = action.data
        default:
            return state
    }
}
const pageReducer = (state = 'Contact', action) =>  {
    switch(action.type) {
        case 'PAGE':
            return state = action.data
        default:
            return state
    }
}
export  {contactReducer, socialReducer, socLinkReducer, shapeReducer, styleReducer, addonReducer, valuesReducer, pageReducer}; 