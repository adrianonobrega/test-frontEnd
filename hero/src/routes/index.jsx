import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import {UserPage} from "../pages/UserPage"

export const RouterAll = () => {


    return(
        <Router>
            <Routes>
                <Route index element={<UserPage/>}/>
            </Routes>
        </Router>
    )

}