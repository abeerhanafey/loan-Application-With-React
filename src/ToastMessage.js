import './App.css'
export default function ToastMessage(props) {
    return (
        <div className='toastGround' style={ props.style }>
            <div className='toast' >
            <h2>{props.message}</h2>
            <i className="fa-solid fa-circle-xmark"></i>
        </div>
        </div>
        
    )
}