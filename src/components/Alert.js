import React from 'react'


const Alert = ({children, style }) => (
  <div className={`alert alert-${style}`} role="alert">
    { children }
  </div>
)


Alert.Error = ({object, style="danger" }) => {
  const transformMessage = () => {
    const { message } = object
    if (typeof message === 'string'){
      return (<p key={0} className="m-0 p-0"><strong key={0}>Oops! </strong>{message.message}</p>)
    }

    if (typeof message === 'object' && Object.entries(message).length){
      return Object.entries(message).map(([key, value], i) =>
        (<p key={key} className="m-0 p-0"><strong key={key}>{key.toUpperCase()}: </strong>{Array.isArray(value) ? value.join(', ') : value}</p>)
      )
    }

    return (<p key={0} className="m-0 p-0"><strong key={0}>Oops! </strong>Bad things happend</p>)
  }

  return (
    <Alert style={style}>
      {transformMessage()}
    </Alert>
  )
}


Alert.Success = ({ object, style="success" }) => {
  
  const transformMessage = () => {
    if (typeof object === 'object' && Object.entries(object).length){
      return Object.entries(object).map(([key, value], i) =>
        (<p key={key} className="m-0 p-0"><strong key={key}>{key.toUpperCase()}: </strong>{Array.isArray(value) ? value.join(', ') : value}</p>)
      )
    }
    
    return (<p className="m-0 p-0"><strong>Well done! </strong>{object}</p>)
  }

  return (
    <Alert style={style}>
      {transformMessage()}
    </Alert>
  )
}


export default Alert
