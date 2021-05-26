import CardTemplate from '../components/CardComponent';
export default function Login(){
    return(
    <CardTemplate
        header="Login"
        buttonTxt="Login"
        userExist={{txt: "Don't have an accont yet?", linkTxt: "Register"}}
    />)
}