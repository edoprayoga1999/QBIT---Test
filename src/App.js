import React from "react";
import axios from "axios";

import { 
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
	Nav,
	Collapse,
	Input
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

export default function App() {
	const [data, setData] = React.useState({
		isLoading: true,
		isError: false,
		errorMessage: "",
		productList: []
	});
	const [navbarTogglerIsOpen, setNavbarTogglerIsOpen] = React.useState(false);
	const navbarTogglerHandler = () => {
		setNavbarTogglerIsOpen(!navbarTogglerIsOpen);
	};
	const handleClick = (action) => {
		if (action === "home") {
			return window.scrollTo(0,0);
		} else {
			return document.getElementById(action).scrollIntoView();
		}
	};
	React.useEffect(() => {
		document.title = "MamaKue.id - Online Cake Catering";
		axios.get(`${process.env.REACT_APP_API_URL}/product`)
			.then((result) => {
				console.log(result.data);
				setData({
					...data, isLoading: false, isError: false, productList: result.data.data
				});
			})
			.catch((err) => {
				setData({
					...data, isLoading: false, isError: true, errorMessage: err.response.data
				});
			});
	}, []);
	return (
		<div className="container-fluid p-0">
			<Navbar
				light
				fixed="top"
				expand="md"
				style={{ backgroundColor: "#FFFFFF", boxShadow: "rgba(173, 173, 173, 0.25) 0px 6px 40px" }}
			>
				<NavbarBrand style={{ cursor: "pointer" }} onClick={() => { handleClick("home"); }} >
					<img src="/mamakue.png" alt='logo' />
				</NavbarBrand>
				<NavbarToggler onClick={navbarTogglerHandler} />
				<Collapse isOpen={navbarTogglerIsOpen} navbar>
					<Nav
						className="me-auto w-100"
						navbar
					>
						<NavItem className="my-auto navbar-menu ml-auto" style={{ marginLeft: "auto" }} onClick={() => { handleClick("about"); }} >
							<NavLink>
            Tentang Kami
							</NavLink>
						</NavItem>
						<NavItem className="my-auto navbar-menu" onClick={() => { handleClick("product"); }}>
							<NavLink>
            List Produk
							</NavLink>
						</NavItem>
						<NavItem className="contact-btn" onClick={() => { handleClick("contact"); }}>
							<NavLink>
								<button style={{ padding: "5px 10px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none" }}>
                  Hubungi Kami
								</button>
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<section className="d-flex align-items-center int-section w-100">
				<div className="d-flex flex-column w-50 landing-text" style={{ paddingLeft: "50px" }}>
					<span style={{ fontSize: "48px", fontWeight: "600" }}>
            Selamat datang di,
					</span>
					<span style={{ fontSize: "64px", fontWeight: "600" }}>
            MamaKue.id
					</span>
				</div>
				<div className="d-flex flex-column w-50 align-items-center cake-div">
					<img className="cake-img" src="https://cdn.bukuwarung.com/wp-content/uploads/2021/11/kue-kering-1.jpg" alt="gambar kue" />
				</div>
			</section>
			<section className="d-flex w-100" id="about" style={{ paddingLeft: "50px", background: "#ffcc00" }}>
				<img id="comp-logo" src="/logo.png" alt="logo" />
				<div className="d-flex flex-column justify-content-center w-100" id="about-div">
					<span style={{ fontSize: "36px", fontWeight: "600", marginBottom: "20px" }}>
            Tentang kami
					</span>
					<h4 style={{ borderLeft: "1px solid black", width: "75%", paddingLeft: "10px", fontWeight: "400" }}>
            MamaKue.id adalah toko roti yang telah berdiri sejak 1987. MamaKue.id hingga kini sudah mempunyai cabang sebanyak 100 outlet yang tersebar di seluruh Indonesia.
					</h4>
				</div>
			</section>
			<section className="d-flex w-100" id="reason-div" style={{ paddingLeft: "50px", paddingRight: "50px", background: "#ffcc00" }}>
				<div className="d-flex flex-column w-100 justify-content-center" style={{ marginLeft: "50px" }}>
					<span style={{ fontSize: "36px", fontWeight: "600" }}>
            Mengapa memesan di kami ?
					</span>
					<div className="d-flex align-items-center mt-3">
						<img src="/tick.svg" alt="tick" />
						<p style={{ color: "#525754", margin: "auto 0px auto 20px" }}>
              Harga yang terjangkau
						</p>
					</div>
					<div className="d-flex align-items-center mt-3">
						<img src="/tick.svg" alt="tick" />
						<p style={{ color: "#525754", margin: "auto 0px auto 20px" }}>
              Bahan bahan berkualitas
						</p>
					</div>
					<div className="d-flex align-items-center mt-3">
						<img src="/tick.svg" alt="tick" />
						<p style={{ color: "#525754", margin: "auto 0px auto 20px" }}>
              Kemasan menarik
						</p>
					</div>
					<div className="d-flex align-items-center mt-3">
						<img src="/tick.svg" alt="tick" />
						<p style={{ color: "#525754", margin: "auto 0px auto 20px" }}>
              Tersedia layanan pengantaran ke alamat
						</p>
					</div>
				</div>
				<img id="chef-model" src="/chef.png" style={{ width: "500px" }} alt="chef" />
			</section>
			<section className="d-flex flex-column w-100 align-items-center" id="product" style={{ padding: "50px", background: "#ffcc00" }}>
				<h1>List Produk</h1>
				<div className="mt-5 row w-100">
					{data.isLoading ? (<div>Loading...</div>) : 
						data.isError ? (<div>{data.errorMessage}</div>) : 
							data.productList.length > 0 ? data.productList.map((element, index) => (
								<div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
									<div className="d-flex flex-column justify-content-end" style={{ width: "95%", height: "400px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url('${process.env.REACT_APP_API_URL}/${element.image}')`, borderRadius: "10px" }}>
										<h3 style={{ padding: "15px" }}>{element.name}</h3>
									</div>
								</div>
							)) : 
								(<div>Unexpected error</div>)
					}
				</div>
			</section>
			<section className="d-flex flex-column w-100 align-items-center" id="contact" style={{ padding: "50px", background: "#ffcc00" }}>
				<h1>Hubungi Kami</h1>
				<form className="w-50 mt-4" id="contact-form">
					<Input placeholder="Your Email" type="email" style={{ marginBottom: "10px"}} required/>
					<Input placeholder="Subject" type="text" style={{ marginBottom: "10px"}} required />
					<Input placeholder="Your Message Description" type="textarea" style={{ marginBottom: "10px", height: "100px" }} required />
					<button className="btn btn-dark" type="submit">Submit</button>
				</form>
			</section>
			<footer className="d-flex w-100 align-items-center justify-content-center" style={{ padding: "10px" }}>
				<h6 className="m-0"> Copyright, Edo Prayoga</h6>
			</footer>
		</div>
	);
}
