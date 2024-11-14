/**
 * Converte texto markdown em texto simples e recarrega a página
 * @param markdown Texto em formato markdown
 * @returns Texto convertido sem formatação markdown
 */
export function markdownToPlainText(markdown: string): string {
  if (!markdown) return '';

  const plainText = markdown
    // Remove links mantendo apenas o texto
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    
    // Remove formatação bold/italic
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    
    // Remove código inline
    .replace(/`([^`]+)`/g, '$1')
    
    // Remove blocos de código
    .replace(/```[\s\S]*?```/g, '')
    
    // Remove headers
    .replace(/#{1,6}\s+([^\n]+)/g, '$1')
    
    // Remove listas
    .replace(/^[\s-]*[-+*]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    
    // Remove blockquotes
    .replace(/^\s*>\s+/gm, '')
    
    // Remove linhas horizontais
    .replace(/^\s*[-*_]{3,}\s*$/gm, '')
    
    // Remove espaços extras e linhas em branco múltiplas
    .replace(/\n\s*\n/g, '\n')
    .trim();

  return plainText;
}

export function markdownToPlainTextAndReload(markdown: string): string {
  const result = markdownToPlainText(markdown);
  
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }
  
  return result;
}
