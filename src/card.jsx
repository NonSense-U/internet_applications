import './CSS/Card.css'

function Card(props)
{
        return (
            <div className="card-container">
                
                <div className="description">
                <h3 className="title">Hey I'm <span>{props.Name}</span>! 👋</h3>
                <p className="details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos quasi amet pariatur eius veritatis fugiat, nostrum 
                </p>
                <button class="btn"><a href={props.href} target='_blank'>Learn More!</a></button>
                </div>
                
            </div>
        )
    }

    export default Card
