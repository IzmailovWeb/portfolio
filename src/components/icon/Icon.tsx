
import iconsSprite from '../../assets/images/icons-sprite.svg'



type IconsPropsType = {
    iconId: string
    width?:string
    height?:string
    viewBox?:string
}


export const Icon = (props:IconsPropsType) => {
    return (
        <svg width={props.width  } height={props.height } viewBox={props.viewBox } fill="#FD7003FF" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
