import { createBrowserRouter } from "react-router-dom";
import APP from '../App'
import Library from '../component/Library'
import ShadowWords from "../component/library/shadowWords";
import MusicPlayer from "../component/library/musicPlayer"
const router = createBrowserRouter([
    {
        path:'/',
        element:<APP></APP>
    },
    {
        path:'library',
        element:<Library></Library>,
    },
    {
        path:'library/shadowWords',
        element:<ShadowWords/>,
    },
    {
        path:'library/musicplayer',
        element:<MusicPlayer/>
    }
])
export default router