const Header = ({setNumberOfHorns}) => {
    const formSubmitted = (e) => {
        e.preventDefault() 
        setNumberOfHorns(e.target.hornsSelect.value)
    }

    return (
        <div className="row gy-0 border-bottom sticky-top align-items-center bg-white">
            
            <h1 className="col text-center fst-italic display-5 text-info">Horned Beasts</h1>

            <div className="col-3">
                <form className="row gy-0 g-1 align-items-center" onSubmit={formSubmitted}>
                    <label className="col text-end fw-bold" for="horns">Filter by horns:</label>
                    <div className="col">    
                        <select defaultValue={"All beasts"} name="hornsSelect" className="form-select">
                            <option >All beasts</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Filter</button>
                    </div>
                </form>
            </div>

            <div className="col"></div>
        </div>
    )
}

export default Header