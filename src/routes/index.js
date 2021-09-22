import React, { useEffect } from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
function Routes() {

    const isUserLoggedIn = true;
    return isUserLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
}

export default Routes;