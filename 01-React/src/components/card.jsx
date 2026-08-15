

const Card = (props) => {
    return(
        
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user}, {props.age}</h1>
            <p>consec ipsum, dolorem molestias ut culpa debitis sint id molestiae. </p>
            <button>submit</button>
        </div>
       
    )
}

export default Card;