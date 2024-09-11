// Utility function to truncate text at complete words
export function truncateText(text:string, maxLength: number) :string {
    if (text.length <= maxLength) {
      return text;
    }
  
    const truncated = text.substring(0, maxLength).trim();
    const lastSpaceIndex = truncated.lastIndexOf(' ');
  
    if (lastSpaceIndex === -1) {
      return `${truncated}...`;
    }
  
    return `${truncated.substring(0, lastSpaceIndex)}...`;
  };