import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="footer-title">Sobre Nosotros</h2>
                    <p>
                        Somos una empresa dedicada a la venta de productos de repostería artesanal. 
                        Nuestro objetivo es endulzar tus momentos especiales con nuestros deliciosos productos.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2 className="footer-title">Enlaces Rápidos</h2>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/category/budines">Budines</a></li>
                        <li><a href="/category/tortas">Tortas</a></li>
                        <li><a href="/category/cupcakes">Cupcakes</a></li>
                        <li><a href="/contact">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2 className="footer-title">Contacto</h2>
                    <p>Email: info@cofitos.com</p>
                    <p>Teléfono: +123 456 7890</p>
                    <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Cofito's. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;