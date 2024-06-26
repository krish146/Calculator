import App from "./App.css"

const Footer = () => {
    const today=new Date();
    return ( 

        <footer  className="container-fluid rounded" >
            <p>
                Copyright &copy; { today.getFullYear() } CCC
            </p>
        </footer>
     );
}
 
export default Footer;