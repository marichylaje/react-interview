export const snakeCaseText = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

export const titleCaseFromHashParams = () => {
    const hash = window.location.hash;
    const paramFromHTTP = hash.substring(1);
    const words = paramFromHTTP.split("-");

    // Capitaliza la primera letra de cada palabra y une las palabras con un espacio
    const result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    return result;
}

export const formatTextWithBold = (text: string): string | (string | JSX.Element)[] => {
    const delimiter = "**";
    const parts = text.split(delimiter);

    if (parts.length < 3) {
      // No se encontraron juegos de "**" en el texto
      return text;
    }
  
    const formattedParts: (string | JSX.Element)[] = parts.map((part, index) => {
      if (index % 2 === 1) {
        // Parte encerrada en juego de "**", aplicar estilo "bold"
        return (<span style={{ fontWeight: 'bold' }}>{part}</span>);
      }
      return part;
    });
  
    return formattedParts; 
}