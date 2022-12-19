export default function Button({styles, text}){
    return(
        <button className={`${styles} hover:bg-[#14519A]` }>{text}</button>
    )
}