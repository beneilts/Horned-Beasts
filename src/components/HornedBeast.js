
const HornedBeast = ({beast, modalClicked}) => {
    const hornStyle = {'fontSize': '2rem'}
    const heartStyle = {'fontSize': '2rem', cursor:'pointer'}

    function toggleHeart(e){
        let heart = e.target
        if (heart.classList.contains('bi-heart')) {
            heart.classList.remove('bi-heart')
            heart.classList.add('bi-heart-fill')
        } else
        {
            heart.classList.remove('bi-heart-fill')
            heart.classList.add('bi-heart')
        }
    }

    return (
        <div className="card border text-center col-6 col-lg-4 mt-5">
            <h2 className="card-title">{beast.title}</h2>
            <div className="">
                <img src={beast.image_url} className="card-img-top" alt="..." onClick={() => {modalClicked(beast)}}></img>
            </div>
            <div className="card-body fs-4">
                <p className="card-text">{beast.description}</p>
            </div>
            <div className="fluid-container pb-2">
                <div className="row">
                    <i className="col-3 bi bi-moon-fill" style={hornStyle}>X {beast.horns}</i>
                    <i id="heartIcon" className= "bi bi-heart col-2 position-absolute end-0" style={heartStyle} onClick={toggleHeart}></i>
                </div>
            </div>
        </div>
    )
}

export default HornedBeast