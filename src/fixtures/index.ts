export const formatUnixTimestampToISO = (timestamp: number) => {
    const date = new Date(timestamp * 1000) // Convert seconds to milliseconds
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const dateObject = new Date(`${year}-${month}-${day}T${hours}:${minutes}`)
    return dateObject.toISOString()
  }