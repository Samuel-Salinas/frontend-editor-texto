import { useState } from "react";

function Editor() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  return (
    <section className="editor">
      <h2>Documento</h2>

      <input
        type="text"
        placeholder="Título del documento"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <p>Titulo actual: (titulo)</p>

      <textarea
        placeholder="Escribe aquí..."
        rows="15"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
      />

      <p>Caracteres: (contenido.length)</p>

      <button>Guardar</button>
    </section>
  );
}

export default Editor;