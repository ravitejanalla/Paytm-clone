import ButtonComponent from "./button-component";
const ButtonContainer  = () =>{
    const clickEventHandler =() =>{
        console.log("Button clicked");
    }
    return<ButtonComponent clickEventHandler={clickEventHandler}/>
}
export default ButtonContainer;