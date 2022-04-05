import './App.css';
import {useState} from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SelectedBeast from './components/SelectedBeast';
import beastData from './assets/data'

function App() {
    // Modal functions
    const [modalData, setModalData] = useState({
        show: false,
        title: "",
        image_url: "",
        description: ""
    })
    
    const modalClicked = (beastData) => {
        setModalData({...beastData, show:true})
    }

    const hideModal = () => {
        setModalData(previouState => {return {...previouState, show: false}})
    }

    // Horns filter functions
    const [beastList, setBeastList] = useState(beastData)

    const setNumberOfHorns = (horns) => {
        if (horns === "All beasts") {
            setBeastList(beastData)
        }
        else {
            let newList = beastData.filter((beast) => {return beast.horns.toString() === horns})
            setBeastList(newList)
        }
        document.activeElement.blur()
    }

    return (
        <div>
            <Header setNumberOfHorns={setNumberOfHorns}/>
            <Main modalClicked={modalClicked} beastList={beastList}/>
            <Footer />
            <SelectedBeast show={modalData.show} onHide={hideModal} modalData = {modalData}/>
        </div>
    );
}

export default App;
