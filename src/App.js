import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';

function App() {
    return (
        <Switch>
            <div className="bg-contract w-full">
            <Route exact path="/" component={Landing} />
            <Redirect from="*" to="/" />
            </div>
        </Switch>
    );
}

export default App;
