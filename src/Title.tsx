import * as React from 'react'

// export interface TitleProps {
//     message: string
// }

// const Title = (props:TitleProps) => (
//     <div>{props.message}</div>
// )

const Title = ({message}: {message:string}) => (
    <div>{message}</div>
)

export default Title