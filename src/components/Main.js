import HornedBeast from './HornedBeast'

const Main = ({modalClicked, beastList}) => {
    return (
        <div className='container-fluid bg-light bg-gradient pb-5'>
            <div className='row align-items-center flex-column'>
                {beastList.map((beast, key) => (
                    <HornedBeast beast={beast} key={key} modalClicked={modalClicked}/>
                ))}
            </div>
        </div>
    )
}

export default Main