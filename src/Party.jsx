import './CSS/Party.css'

function Party()
{
    return(
        <div className="container" id='party-container'>
             <button className="party-button" onClick={() => window.open('https://cultofthepartyparrot.com/', '_blank')}>Lets Party !</button>
        </div>
    );
}

export default Party