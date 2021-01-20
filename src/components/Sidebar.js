import "../App.css";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuData } from "./MenuData";

export default function Sidebar() {
	return (
		<Router>
			<Navbar />
			<Switch>
				{MenuData.map((item) => {
					return (
						<Route
							key={item.name}
							path={item.path}
							exact={item.exact}
							component={item.component}
						/>
					);
				})}
			</Switch>
		</Router>
	);
}
