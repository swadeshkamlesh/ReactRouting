import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';

function PublicRoutes(){
    return(
        <Switch>
            <Route path={SLUGS.login} render={()=><div>Login</div>}></Route>
            <Route path={SLUGS.signup} render={()=><div>Logout</div>} ></Route>
            <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} />
            <Redirect to={SLUGS.login} />

        </Switch>
    )
}
export default PublicRoutes;