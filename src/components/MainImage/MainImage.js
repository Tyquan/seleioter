import './MainImage.css';

const MainImage = () => (
    <div id="mainImage">
        <div className='container'>
            
            <div id="centerize">
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center' id='title'>Seleioter's Goal Is To Reduce The Electronic Waste Being Produced In New York City and New Jersey</h1>
                        <br />
                        <h2 className='text-center'>We will come to your location and recycle your electronics for you.</h2>
                        <br />
                        <h1 id="capitalize" className='text-center'>Dont Let Your Electronics End Up In The Land Fill!</h1>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-4'>
                        <div id="contactInfo">
                            <h3>Contact Us</h3>
                            <h4>1-973-963-9017</h4>
                            <h4>seleio@gmail.com</h4>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default MainImage;