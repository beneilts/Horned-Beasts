import Modal from 'react-bootstrap/Modal'

const SelectedBeast = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Header closeButton>
                <h3 className='text-center'>
                    {props.modalData.title}
                </h3>
            </Modal.Header>
            <Modal.Body>
                <img src={props.modalData.image_url} className="card-img-top img-fluid" alt="..."></img>    
            </Modal.Body>
            
            <p className='text-center'>{props.modalData.description}</p>
        </Modal>
    )
}

export default SelectedBeast