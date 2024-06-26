
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    let navigate = useNavigate();
	return (
		

		<nav className="navbar navbar-expand-lg navbar-light bg-light">

			<div className="container-fluid">

				<a className="navbar-brand"
                onClick={()=>navigate("/")} href="#">
					<img src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" width="100" height="50" alt="" />
				</a>
                

				<div className="dropdown">

					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>

					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>

				</div>

			</div>

		</nav>
        

	);


}