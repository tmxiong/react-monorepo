import {ReactPropTypes} from "react";

export const Button = (props:any) => {
    return(
        <button style={{width:'100px',height:'40px'}} {...props}>按钮</button>
    )
}
