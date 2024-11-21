import "./NavBar.css"; //Importamos el archivo css

const NavBar = () => {



    return (
        <nav className = "navbar">
            <p>Cofitos</p>
            <ul className = "listas">
                <li>Tortas</li>
                <li>Cookies</li>
                <li>Muffins</li>
            </ul>
        </nav>

    );
}
const saludo = "Hola mundo!"


export default NavBar;

// export { NavBar, saludo }; //Se utiliza para exportar multiples elementos
//Si quisieramos llamar la variable saludo, en App.jsk deberiamos usar llaves y la variable de saludo dentro de la etiqueta H2 que creariamos.
//En codigo JSX no se usa class, se usa className porque en JS es una palabra reservada.
//