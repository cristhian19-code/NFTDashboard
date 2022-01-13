import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { AuthScreen } from '../components/auth/AuthScreen'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { useEffect, useState } from 'react';
import { LoadingMotion } from '../components/ui/LodingMotion';
export const AppRoute = () => { 

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 10000);
    }, [])
    
    return (
        !loading 
        ? <LoadingMotion />
        : (
            <Router>
                <Switch>
                    <Route exact path="/" component={AuthScreen} />
                    <Route path="/dashboard" component={DashboardScreen}/>
                </Switch>
            </Router>
        )
    )
}