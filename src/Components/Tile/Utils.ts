export function renderClasses(isBlack:boolean,isWhite:boolean,isHovered:boolean,isFocused:boolean):string{
    let classes = 'tile is-flex is-align-items-center is-justify-content-center'

    if(isBlack){
        classes+=' tile-is-black'
    }else if(isWhite){
        classes+=' tile-is-white'
    }

    if(isFocused){
        classes += ' tile-is-focused'
    }else if(isHovered){
        classes+=' tile-is-hovered'
    }

    return classes
}