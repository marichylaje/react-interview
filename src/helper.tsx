export const snakeCaseText = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

export const titleCaseFromHashParams = () => {
    const hash = window.location.hash; // Obtiene el valor de la parte de hash de la URL, incluyendo el "#"
    const paramFromHTTP = hash.substring(1);
    const words = paramFromHTTP.split("-"); // Divide el string en palabras separadas por "-"

    // Capitaliza la primera letra de cada palabra y une las palabras con un espacio
    const result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    return result;
}

export const formatTextWithBold = (text: string): string | string[] | Element => {
    const delimiter = "**";
    const parts = text.split(delimiter);
  
    if (parts.length < 3) {
      // No se encontraron juegos de "**" en el texto
      return text;
    }
  
    const formattedParts: (string[] | Element) = parts.map((part, index) => {
      if (index % 2 === 1) {
        // Parte encerrada en juego de "**", aplicar estilo "negrita"
        return (<span style={{ fontWeight: 'bold' }}>{part}</span>);
      }
      return part;
    });
  
    return formattedParts; 
}