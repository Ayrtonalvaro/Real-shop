let navbarContainer = document.querySelector("#navbar");

export function createNavbar() {

    let logo = '../../img/RSLogo.png';

    let navBar = `<nav class="navbar navbar-expand py-3 px-3">
			<div class="container">
				<div class="row align-items-center w-100">
					<a class="navbar-brand col-auto" >
						<img src="${logo}" alt="Logo RS" width="50">
					</a>
					<form class="col" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					</form>
					<div class="col-auto">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart"
							viewBox="0 0 16 16">
							<path
								d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
						</svg>
					</div>
				</div>
			</div>
		</nav>`;
    navbarContainer.innerHTML += navBar;
    ;
};

