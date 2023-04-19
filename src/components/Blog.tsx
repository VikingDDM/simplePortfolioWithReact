import './Blog.css'
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

const Blog = () => {
    return (
        <div className='blogBody'>
          <div className="blogContent">
            <div className='row blogRow'>
              <div className='blogMainContent col-md-12'>
                <span className='blogTitle'>Read</span>
                <h2>Recent Blog</h2>
              </div>
              <div className='blogBox col-md-4'>
                <div className='blogBoxDetail'>
                    <a>
                      <img className='blogBoxDetailImg' src='/blog-1.jpg' alt="HTML5 Bootstrap Template by colorlib.com" />
                    </a>
                    <div className='blogBoxDetailDesc'>
                        <span><small> April 14, 2018 </small> | <small> Web Design  </small> | <small> <MapsUgcOutlinedIcon fontSize='small'/> 4 </small></span>
                        <h3>
                            <a>Renovating National Gallery</a>
                        </h3>
                        <p>
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                            a large language ocean.
                        </p>
                    </div>
                </div>
              </div>
              <div className='blogBox col-md-4'>
                <div className='blogBoxDetail'>
                    <a>
                      <img className='blogBoxDetailImg' src='https://preview.colorlib.com/theme/jackson/images/blog-2.jpg.webp' alt="HTML5 Bootstrap Template by colorlib.com" />
                    </a>
                    <div className='blogBoxDetailDesc'>
                        <span><small> April 14, 2018 </small> | <small> Web Design  </small> | <small> <MapsUgcOutlinedIcon fontSize='small'/> 4 </small></span>
                        <h3>
                            <a>Wordpress for a Beginner</a>
                        </h3>
                        <p>
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                            a large language ocean.
                        </p>
                    </div>
                </div>
              </div>   
              <div className='blogBox col-md-4'>
                <div className='blogBoxDetail'>
                    <a>
                      <img className='blogBoxDetailImg' src='https://preview.colorlib.com/theme/jackson/images/blog-3.jpg.webp' alt="HTML5 Bootstrap Template by colorlib.com" />
                    </a>
                    <div className='blogBoxDetailDesc'>
                        <span><small> April 14, 2018 </small> | <small> Inspiration  </small> | <small> <MapsUgcOutlinedIcon fontSize='small'/> 4 </small></span>
                        <h3>
                            <a>Make website from scratch</a>
                        </h3>
                        <p>
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                            a large language ocean.
                        </p>
                    </div>
                </div>
              </div>
              
              
              <div className='blogLoadMore col-md-12'>
                <p>
                  <a>Load more <ReplayOutlinedIcon /></a>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Blog;