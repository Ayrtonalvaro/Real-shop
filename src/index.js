import {getProducts} from "./api.js";
import {createCards} from "./app/cards.js";
import {createBanner} from "./app/banner.js";
import { createNavbar } from "./app/navbar.js";
import { footerComponent } from "./app/footer.js";

createCards();
createBanner();
createNavbar();
footerComponent();