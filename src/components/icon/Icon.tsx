
import iconsSprite from '../../assets/images/icons-sprite.svg'



type IconsPropsType = {
    iconId: string
    width?:string
    height?:string
    viewBox?:string
}


export const Icon = (props:IconsPropsType) => {
    return (
        <svg width={props.width || "126" } height={props.height || "48" } viewBox={props.viewBox || "0 0 126 48" } fill="#FD7003FF" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
