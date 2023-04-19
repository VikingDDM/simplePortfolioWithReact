import './Work.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const Work = () => {
    return (
        <div className='workBody'>
          <div className="workContent">
            <div className='row workRow'>
              <div className='workMainContent col-md-12'>
                <span className='workTitle'>My specialty</span>
                <h2>My skills</h2>
                <p>
                  <span><a>Graphic Design</a></span>
                  <span><a>Web Design</a></span>
                  <span><a>Software</a></span>
                  <span><a>Apps</a></span>
                </p>
              </div>
              <div className='workBar col-md-6'>
                <div className='workBarDetail firstBar'>
                  <div className='workBarDesc'>
                    <h3>
                      <a>Work 01</a>
                    </h3>
                    <span className='workBarDescName'>Website</span>
                    <p>
                      <span>
                        <a>
                          <ShareOutlinedIcon fontSize='small' />
                        </a>
                      </span>
                      <span>
                        <a>
                          <RemoveRedEyeIcon fontSize='small' />
                          100
                        </a>
                      </span>
                      <span>
                        <a>
                          <FavoriteIcon fontSize='small' />
                          49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='workBar col-md-6'>
                <div className='workBarDetail secondBar'>
                  <div className='workBarDesc'>
                    <h3>
                      <a>Work 01</a>
                    </h3>
                    <span className='workBarDescName'>Website</span>
                    <p>
                      <span>
                        <a>
                          <ShareOutlinedIcon fontSize='small' />
                        </a>
                      </span>
                      <span>
                        <a>
                          <RemoveRedEyeIcon fontSize='small' />
                          100
                        </a>
                      </span>
                      <span>
                        <a>
                          <FavoriteIcon fontSize='small' />
                          49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>   
              <div className='workBar col-md-6'>
                <div className='workBarDetail thirdBar'>
                  <div className='workBarDesc'>
                    <h3>
                      <a>Work 01</a>
                    </h3>
                    <span className='workBarDescName'>Website</span>
                    <p>
                      <span>
                        <a>
                          <ShareOutlinedIcon fontSize='small' />
                        </a>
                      </span>
                      <span>
                        <a>
                          <RemoveRedEyeIcon fontSize='small' />
                          100
                        </a>
                      </span>
                      <span>
                        <a>
                          <FavoriteIcon fontSize='small' />
                          49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='workBar col-md-6'>
                <div className='workBarDetail fourthBar'>
                  <div className='workBarDesc'>
                    <h3>
                      <a>Work 01</a>
                    </h3>
                    <span className='workBarDescName'>Website</span>
                    <p>
                      <span>
                        <a>
                          <ShareOutlinedIcon fontSize='small' />
                        </a>
                      </span>
                      <span>
                        <a>
                          <RemoveRedEyeIcon fontSize='small' />
                          100
                        </a>
                      </span>
                      <span>
                        <a>
                          <FavoriteIcon fontSize='small' />
                          49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div> 
              <div className='workBar col-md-6'>
                <div className='workBarDetail fifthBar'>
                  <div className='workBarDesc'>
                    <h3>
                      <a>Work 01</a>
                    </h3>
                    <span className='workBarDescName'>Website</span>
                    <p>
                      <span>
                        <a>
                          <ShareOutlinedIcon fontSize='small' />
                        </a>
                      </span>
                      <span>
                        <a>
                          <RemoveRedEyeIcon fontSize='small' />
                          100
                        </a>
                      </span>
                      <span>
                        <a>
                          <FavoriteIcon fontSize='small' />
                          49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='workBar col-md-6'>
                <div className='workBarDetail sixthBar'>
                  <div className='workBarDesc'>
                    <h3>
                      <a>Work 01</a>
                    </h3>
                    <span className='workBarDescName'>Website</span>
                    <p>
                      <span>
                        <a>
                          <ShareOutlinedIcon fontSize='small' />
                        </a>
                      </span>
                      <span>
                        <a>
                          <RemoveRedEyeIcon fontSize='small' />
                          100
                        </a>
                      </span>
                      <span>
                        <a>
                          <FavoriteIcon fontSize='small' />
                          49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div> 
              <div className='loadMore col-md-12'>
                <p>
                  <a>Load more <ReplayOutlinedIcon /></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }

export default Work;