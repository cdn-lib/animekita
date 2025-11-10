(function() {

  const css8bit = `
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    :root {
      --pixel-font: 'Press Start 2P', cursive;
      --pixel-border: 3px solid #000;
      --pixel-shadow: 3px 3px 0px #000;
      --pixel-bg: #ffffff;
      --pixel-text: #000;
    }
    html {
      background-color: #ffffff !important;
      background-image:
        linear-gradient(rgba(50,50,50,0.333) 0.5px, transparent 0.5px),
        linear-gradient(90deg, rgba(50,50,50,0.333) 0.5px, transparent 0.5px);
      background-size: 48px 48px;
      background-position: center top;
    }
    body {
      background: transparent !important;
      color: var(--pixel-text) !important;
      font-family: var(--pixel-font) !important;
      font-size: 0.7rem;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
    }
    * {
      border-radius: 0 !important;
      box-shadow: none !important;
      border-image: none !important;
    }
    h1, h2, h3, h4, h5, h6, .navbar-brand, .btn, .card-title, .modal-title, .alert-heading {
      font-family: var(--pixel-font) !important;
      font-size: 1em;
      font-weight: normal;
    }
    .btn, .form-control, .form-select, .nav-link, 
    .alert, .badge, .dropdown-item, .page-link, .list-group-item,
    .accordion-button {
       font-family: var(--pixel-font) !important;
       font-size: 0.9em;
    }
    .card, .modal-content, .alert, .toast, .form-control, .form-select,
    .dropdown-menu, .accordion-item, .list-group-item, .table, .offcanvas, .pagination {
      border: var(--pixel-border) !important;
      background: var(--pixel-bg) !important;
      color: var(--pixel-text) !important;
      box-shadow: var(--pixel-shadow) !important;
      position: relative;
    }
    .btn {
      border: var(--pixel-border) !important;
      background: var(--pixel-bg) !important;
      color: var(--pixel-text) !important;
      box-shadow: var(--pixel-shadow) !important;
    }
    .btn:active, .btn.active {
      box-shadow: none !important;
      transform: translate(3px, 3px) !important;
    }
    .btn:hover {
       background: #eee !important;
    }
    .form-control:focus,
    .form-select:focus {
      box-shadow: var(--pixel-shadow) !important;
      outline: none !important;
    }
    .navbar {
      background: var(--pixel-bg) !important;
      border-bottom: var(--pixel-border) !important;
    }
    .card-header, .modal-header {
      border-bottom: var(--pixel-border) !important;
    }
    .card-footer, .modal-footer {
      border-top: var(--pixel-border) !important;
    }
    .input-group-text {
      border: var(--pixel-border) !important;
      background: var(--pixel-bg) !important;
    }
    .table th, .table td {
      border: var(--pixel-border) !important;
    }
    .progress {
      border: var(--pixel-border) !important;
      height: 24px;
      box-shadow: var(--pixel-shadow) !important;
      padding: 0;
    }
    .progress-bar {
      background: var(--pixel-text) !important;
    }
    .page-link {
      border: var(--pixel-border) !important;
      color: var(--pixel-text) !important;
      margin: -2px;
    }
    .page-link:hover {
      background: #eee !important;
    }
    .page-item.active .page-link {
        background-color: #ddd !important;
        border-color: var(--pixel-text) !important;
    }
    .form-check-input {
      border: var(--pixel-border) !important;
      background: var(--pixel-bg) !important;
      height: 1.5em;
      width: 1.5em;
    }
    .form-check-input:checked {
      background: var(--pixel-text) !important;
      border-color: var(--pixel-text) !important;
    }
    .nav-link { color: var(--pixel-text) !important; }
    .nav-link:hover { background: #eee !important; }
    .nav-tabs .nav-link { border: var(--pixel-border) !important; }
    .nav-tabs .nav-link.active { background: #ddd !important; }
    
    .swal2-popup {
      font-family: var(--pixel-font) !important;
      background: var(--pixel-bg) !important;
      color: var(--pixel-text) !important;
      border: var(--pixel-border) !important;
      box-shadow: var(--pixel-shadow) !important;
    }
    .swal2-title { color: var(--pixel-text) !important; }
    .swal2-html-container { color: var(--pixel-text) !important; }
    .swal2-header { border-bottom: var(--pixel-border) !important; }
    .swal2-actions { border-top: var(--pixel-border) !important; }
    .swal2-confirm, .swal2-cancel, .swal2-deny {
      font-family: var(--pixel-font) !important;
      border: var(--pixel-border) !important;
      background: var(--pixel-bg) !important;
      color: var(--pixel-text) !important;
      box-shadow: var(--pixel-shadow) !important;
    }
    .swal2-confirm:active, .swal2-cancel:active, .swal2-deny:active {
        box-shadow: none !important;
        transform: translate(3px, 3px) !important;
    }
    .swal2-input, .swal2-file, .swal2-textarea {
      font-family: var(--pixel-font) !important;
      border: var(--pixel-border) !important;
      background: var(--pixel-bg) !importnt;
      color: var(--pixel-text) !important;
      box-shadow: var(--pixel-shadow) !important;
    }
    .swal2-input:focus, .swal2-file:focus, .swal2-textarea:focus {
      box-shadow: var(--pixel-shadow) !important;
      outline: none !important;
    }
  `;

  const cssLineart=` 
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');

:root {
	--la-bg: #fefefe;
	--la-line: #222;
	--la-radius: 8px;
	--la-thick: 2px;
	--la-transition: all 0.2s ease-in-out;
	--la-pixel: 'Press Start 2P', cursive;
	--la-font: 'Kalam', cursive;
	--pixel-font: 'Press Start 2P', cursive;
      --pixel-border: 3px solid #000;
      --pixel-shadow: 3px 3px 0px #000;
      --pixel-bg: #ffffff;
      --pixel-text: #000;
}

body {
	background: var(--la-bg) !important;
	color: var(--la-line) !important;
	box-shadow: none !important;
	font-family: var(--la-font);

	
}

* {
	box-shadow: none !important;
}

hr {
	border-top: var(--la-thick) solid var(--la-line) !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
.navbar-brand,
.btn {
	
}

.btn,
.form-control,
.form-select,
.navbar-brand,
.nav-link,
.card-title,
.modal-title,
.alert,
.badge,
.dropdown-item,
.accordion-button,
.page-link {
	font-family: var(--la-font);
}

.navbar {
	background: var(--la-bg) !important;
	border-bottom: var(--la-thick) solid var(--la-line) !important;
}
.btn {
      border: var(--pixel-border) !important;
      background: var(--pixel-bg) !important;
      color: var(--pixel-text) !important;
      box-shadow: var(--pixel-shadow) !important;
      }
.nav-link {
	color: var(--la-line) !important;
	border-radius: var(--la-radius);
	transition: var(--la-transition);
}

.nav-link:hover,
.nav-link:focus {
	background: rgba(0, 0, 0, .05);
}

.navbar-toggler {
	border: var(--la-thick) solid var(--la-line) !important;
	border-radius: var(--la-radius) 6px var(--la-radius) 8px !important;
}

.btn:active {
	transform: translateY(1px);
}

.btn:focus {
	box-shadow: 0 0 0 4px rgba(0, 0, 0, .15) !important;
}

.card-header,
.card-footer {
	border-bottom: var(--la-thick) solid var(--la-line) !important;
	background: var(--la-bg) !important;
}

.form-control:focus,
.form-select:focus {
	box-shadow: 0 0 0 4px rgba(0, 0, 0, .15) !important;
	outline: none !important;
}

.input-group-text {
	border: var(--la-thick) solid var(--la-line) !important;
	background: var(--la-bg) !important;
	border-radius: var(--la-radius) 6px var(--la-radius) 8px !important;
}

.table th,
.table td {
	border-bottom: var(--la-thick) solid var(--la-line) !important;
}

.table thead th {
	background: rgba(0, 0, 0, .05) !important;
}

.modal-header {
	border-bottom: var(--la-thick) solid var(--la-line) !important;
}

.dropdown-menu {
	border: var(--la-thick) solid var(--la-line) !important;
	background: var(--la-bg) !important;
	border-radius: var(--la-radius) 6px var(--la-radius) 8px !important;
}

.dropdown-item {
	color: var(--la-line) !important;
	border-radius: var(--la-radius) !important;
	transition: var(--la-transition);
}

.dropdown-item:hover {
	background: rgba(0, 0, 0, .05) !important;
}

.accordion-button {
	border-bottom: var(--la-thick) solid var(--la-line) !important;
	background: var(--la-bg) !important;
	color: var(--la-line) !important;
	transition: var(--la-transition);
}

.accordion-button:not(.collapsed) {
	background: rgba(0, 0, 0, .05) !important;
}

.accordion-button:focus {
	box-shadow: 0 0 0 4px rgba(0, 0, 0, .15) !important;
}

.badge {
	border: var(--la-thick) solid var(--la-line) !important;
	background: var(--la-bg) !important;
	color: var(--la-line) !important;
	border-radius: 999px !important;
}

.progress {
	border: var(--la-thick) solid var(--la-line) !important;
	border-radius: var(--la-radius) 6px var(--la-radius) 8px !important;
}

.progress-bar {
	background: var(--la-line) !important;
}

.page-link {
	border: var(--la-thick) solid var(--la-line) !important;
	color: var(--la-line) !important;
	transition: var(--la-transition);
}

.page-link:hover {
	background: rgba(0, 0, 0, .05);
}

.nav-pills .nav-link,
.nav-tabs .nav-link {
	border: var(--la-thick) solid var(--la-line) !imporant;
	background: var(--la-bg) !important;
	border-radius: var(--la-radius) 6px var(--la-radius) 8px !important;
}

.nav-pills .nav-link.active,
.nav-tabs .nav-link.active {
	background: rgba(0, 0, 0, .1) !important;
	border-width: var(--la-thick) !important;
}

.offcanvas {
	border-left: var(--la-thick) solid var(--la-line) !important;
	background: var(--la-bg) !important;
}

.form-check-input {
	border: var(--la-thick) solid var(--la-line) !important;
	background: var(--la-bg) !important;
}

.form-check-input:checked {
	background: var(--la-line) !important;
}

.card,
.modal-content,
.alert,
.toast,
.btn,
.form-control,
.form-select,
.navbar-brand,
.table,
.list-group-item,
.accordion-item {
	border: var(--la-thick) solid var(--la-line) !important;
	background: var(--la-bg) !important;
	color: var(--la-line) !important;
	position: relative;
	border-radius: var(--la-radius) 6px var(--la-radius) 8px !important;
	overflow: hidden;
}

.card::after,
.modal-content::after,
.alert::after,
.toast::after,
.btn::after,
.form-control::after,
.form-select::after,
.navbar-brand::after,
.table::after,
.list-group-item::after,
.accordion-item::after {
	content: '';
	position: absolute;
	display: block;
	width: 15px;
	height: var(--la-thick);
	background: var(--la-line);
	bottom: 5px;
	right: 5px;
	transform: rotate(-10deg);
}

.card::before,
.modal-content::before,
.alert::before,
.toast::before,
.btn::before,
.navbar-brand::before,
.table::before,
.list-group-item::before,
.accordion-item::before {
	content: '';
	position: absolute;
	display: block;
	width: 10px;
	height: 1px;
	background: var(--la-muted);
	bottom: 8px;
	right: 10px;
	transform: rotate(-10deg);
}

.swal2-popup {
	font-family: var(--la-font);
	background: var(--la-bg) !important;
	border: var(--la-thick) solid var(--la-line) !important;
	border-radius: var(--la-radius) 6px var(--la-radius) 8px !important;
	color: var(--la-line) !important;
	position: relative;
	overflow: hidden;
}

.swal2-popup::after {
	content: '';
	position: absolute;
	display: block;
	width: 25px;
	height: var(--la-thick);
	background: var(--la-line);
	bottom: 6px;
	right: 10px;
	transform: rotate(-10deg);
}

.swal2-popup::before {
	content: '';
	position: absolute;
	display: block;
	width: 15px;
	height: 1px;
	background: var(--la-muted);
	bottom: 9px;
	right: 15px;
	transform: rotate(-10deg);
}

.swal2-title {
	color: var(--la-line) !important;
	font-weight: 700;
}

.swal2-html-container {
	color: var(--la-muted) !important;
}

.swal2-header {
	border-bottom: var(--la-thick) solid var(--la-line) !important;
}

.swal2-actions {
	border-top: var(--la-thick) solid var(--la-line) !important;
}

.swal2-confirm,
.swal2-cancel,
.swal2-deny {
	font-family: var(--la-font) !important;
	font-weight: 700 !important;
	border: var(--la-thick) solid var(--la-line) !important;
	border-radius: var(--la-radius) 6px var(--la-radius) 8px !important;
	background: var(--la-bg) !important;
	color: var(--la-line) !important;
	transition: var(--la-transition);
	position: relative;
	overflow: hidden;
}

.swal2-confirm::after,
.swal2-cancel::after,
.swal2-deny::after {
	content: '';
	position: absolute;
	display: block;
	width: 15px;
	height: var(--la-thick);
	background: var(--la-line);
	bottom: 5px;
	right: 5px;
	transform: rotate(-10deg);
}

.swal2-confirm:hover,
.swal2-cancel:hover,
.swal2-deny:hover {
	background: rgba(0, 0, 0, .08) !important;
}

.swal2-input,
.swal2-file,
.swal2-textarea {
	font-family: var(--la-font) !important;
	border: var(--la-thick) solid var(--la-line) !important;
	border-radius: var(--la-radius) 6px var(--la-radius) 8px !important;
	background: var(--la-bg) !important;
	color: var(--la-line) !important;
	position: relative;
	overflow: hidden;
}

.swal2-input:focus,
.swal2-file:focus,
.swal2-textarea:focus {
	box-shadow: 0 0 0 4px rgba(0, 0, 0, .15) !important;
	outline: none !important;
}

html {
	background-color: #ffffff !important;
	background-image: linear-gradient(rgba(50, 50, 50, 0.333) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(50, 50, 50, 0.333) 0.5px, transparent 0.5px);
	background-size: 48px 48px;
	background-position: center top;
}

body {
	background: transparent !important;
}

`;
  const script = document.currentScript;
  const attrTheme = script.getAttribute("data-theme");
  let theme = (attrTheme && attrTheme.trim().toLowerCase()) || "bootstrap";

  const bsCSS = document.createElement("link");
  bsCSS.rel = "stylesheet";
  bsCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
  document.head.appendChild(bsCSS);

  const swalCSS = document.createElement("link");
  swalCSS.rel = "stylesheet";
  swalCSS.href = "https://cdn.jsdelivr.net/npm/sweetalert2@11.26.3/dist/sweetalert2.min.css";
  document.head.appendChild(swalCSS);

  const swalJS = document.createElement("script");
  swalJS.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.26.3/dist/sweetalert2.all.min.js";
  document.head.appendChild(swalJS);

  const fa = document.createElement("link");
  fa.rel = "stylesheet";
  fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
  document.head.appendChild(fa);

  const bsicon = document.createElement("link");
  bsicon.rel = "stylesheet";
  bsicon.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
  document.head.appendChild(bsicon);

  const bsJS = document.createElement("script");
  bsJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
  document.head.appendChild(bsJS);

  let customCSSString = "";
  if (theme === "8bit") {
    customCSSString = css8bit;
  } else if (theme === "lineart") {
    customCSSString = cssLineart;
  }

  if (customCSSString) {
    const style = document.createElement("style");
    style.innerHTML = customCSSString;
    document.head.appendChild(style);
  }

})();

