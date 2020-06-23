 
 import { parseISO, format } from 'date-fns'
 function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'd LLLL, yyyy')}</time>
  }

  export default Date