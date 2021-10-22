import postsReducer from '../reducers/posts'
import userReducer from '../reducers/user'
import singlePostReducer from '../reducers/singlePost'



const rootReducer = {
    posts: postsReducer,
    user: userReducer,
    singlePost: singlePostReducer
}

export default rootReducer