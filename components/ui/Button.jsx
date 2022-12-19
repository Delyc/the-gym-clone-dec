export default function Button({styles, text}){
    return(
        <button className={`${styles}` }>{text}</button>
    )
}