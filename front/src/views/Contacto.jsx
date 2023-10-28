
function Contacto() {
    return (
        <>
           
            <section className="page contacto">
            <form >
                <div >
                    <label  >Nombre:</label>
                    <input  type="text" id="name" placeholder="Escribe tu nombre" required></input>
                </div>
                <div >
                    <label  > Correo Electronico:</label>
                    <input  type="email" id="email" placeholder="Escribe tu email" required></input>
                </div>
                <div >
                    <label  >Mensaje:</label>
                    <textarea  id="message" placeholder="Escribeme un mensaje" required></textarea>
    
                </div>
                <div >
                    <button    type="button" id="save" onclick="saveContact()">Enviar datos contacto
                        <i >send</i>
                    </button>
                </div>

                <div >
                    <button    type="button" id="save" onclick="getContacts()">Consultar Contacto
                        <i >send</i>
                    </button>
            </div>

            </form>
             
            </section>
            <script src="script.js"></script>
        </>
    )
}

export default Contacto;