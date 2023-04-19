import './Home.css'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const Home = () => {
    return (
        <div className='homebody'>
            <div className='homebodyBackground'>
                <div className='mainText col-md-6'>
                  <div className='innerMainText'>
                    <div className='mainDesc'>
                        <h1>I am<br></br>a designer</h1>
                        <h2>
                            100% html5 bootstrap templates Made by  <a href="http://colorlib.com/" target={'_blank'}>colorlib.com</a>
                        </h2>
                        <p>
                          <a className='btn btn-primary btn-learn'>
                            View Portfolio
                            <WorkOutlineOutlinedIcon sx={{fontSize:'15px',marginLeft:"5px"}}/>
                          </a>
                        </p>
                    </div>
                  </div>
                </div>
            </div>
            <div className='homebodyFooter'>
                <h3>I am Johnson. I am busy now</h3>
            </div>
        </div>
    )
}

export default Home