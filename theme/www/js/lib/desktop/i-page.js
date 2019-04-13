Util = u = {};
u.e = u;
u.e.addDOMReadyEvent = function() {}
Util.Objects = {};
Util.Objects["page"] = new function() {
	this.init = function(page) {

		// header reference
		page.hN = u.qs("#header");

		// content reference
		page.cN = u.qs("#content", page);

		// navigation reference
		page.nN = u.qs("#navigation", page);
		// page.nN = u.ie(page.hN, page.nN);

		// footer reference
		page.fN = u.qs("#footer");
		page.fN.service = u.qs("ul.servicenavigation", page.fN);


		// global resize handler 
		page.resized = function() {
			// u.bug("page.resized:", this);

			this.browser_w = u.browserW();
			this.browser_h = u.browserH();

			// forward scroll event to current scene
			if(this.cN && this.cN.scene && typeof(this.cN.scene.resized) == "function") {
				this.cN.scene.resized();
			}
		}

		// global scroll handler 
		page.scrolled = function() {
			// u.bug("page.scrolled:", this);

			this.scroll_y = u.scrollY();

			// forward scroll event to current scene
			if(this.cN && this.cN.scene && typeof(this.cN.scene.scrolled) == "function") {
				this.cN.scene.scrolled();
			}
		}

		// Page is ready
		page.ready = function() {
			// u.bug("page.ready:", this);

			// page is ready to be shown - only initalize if not already shown
			if(!this.is_ready) {

				// page is ready
				this.is_ready = true;

				// set resize handler
				u.e.addWindowEvent(this, "resize", this.resized);
				// set scroll handler
				u.e.addWindowEvent(this, "scroll", this.scrolled);

				if(typeof(u.smartphoneSwitch) == "object") {
					u.smartphoneSwitch.init(this);
				}

				this.initHeader();

				this.resized();
			}

		}

		// initialize header
		page.initHeader = function() {

			this.hN.logo = u.ae(this.hN, "a", {class:"logo", href:"/"});
			this.hN.logo.loaded = function() {
				u.a.transition(this, "all 1s ease-in-out");
				u.ass(this, {
					opacity: 1
				});
			}
			u.preloader(this.hN.logo, ["/img/logo-large.svg"]);


			// use header servicenavigation as icon placeholder and menu open/close control
			this.hN.service = u.qs("ul.servicenavigation", this.hN);
			if(this.hN.service) {

				this.hN.bn_menu = u.qs("li.navigation a", this.hN.service);

				u.ae(u.ae(this.hN.bn_menu, "div", {class:"box"}), "div", {class:"inner"});
				

				// Make nav icon clickable
				u.ce(this.hN.bn_menu);
				this.hN.bn_menu.clicked = function(event) {

					// Hide navigation
					if(page.nN.is_open) {
						u.rc(this, "open");

						page.nN.is_open = false;

						u.rc(document.body, "fullscreen");


						// Remove underlay when done
						page.nN.underlay.transitioned = function() {
							this.parentNode.removeChild(this);
						}
						u.a.transition(page.nN.underlay, "all 0.2s ease");
						u.ass(page.nN.underlay, {
							opacity: 0,
						});


						// Display none when transitioned
						page.nN.transitioned = function() {
							u.ass(this, {
								display: "none",
							});
						}

						// fade out and move up
						u.a.transition(page.nN, "all 0.7s ease");
						u.ass(page.nN, {
							transform: "translate3d(0, -"+page.nN.offsetHeight+"px, 0)",
						});

					}
					// Show navigation
					else {
						page.nN.underlay = u.ae(document.body, "div", {id:"underlay", class:"menu"});

						u.ac(this, "open");
						delete page.nN.transitioned;
						delete page.nN.underlay.transitioned;

						
						page.nN.is_open = true;
						u.ac(document.body, "fullscreen");

						// Set pre-conditions - faded out and moved up
						u.ass(page.nN, {
							opacity: 0,
							display: "block",
						});

						// Now we have the height of the nav node
						u.ass(page.nN, {
							transform: "translate3d(0, -"+page.nN.offsetHeight+"px, 0)",
							opacity: 1,
						});

						u.a.transition(page.nN.underlay, "all 0.2s ease");
						u.ass(page.nN.underlay, {
							opacity: 1,
						});


						// Move in place and fade up
						u.a.transition(page.nN, "all 0.7s ease 0.2s");
						u.ass(page.nN, {
							transform: "translate3d(0, 0, 0)"
						});

					}
				}

				u.a.transition(this.hN.service, "all 1s ease-in-out");
				u.ass(this.hN.service, {
					opacity: 1
				});

			}

			// var navigation_footer = u.ae(this.nN, "div", {"class":"footer"});
			var company_info = u.qs("div.company", this.fN);
			u.ae(this.nN, company_info.cloneNode(true));
		}

		// ready to start page builing process
		page.ready();
	}
}

u.e.addDOMReadyEvent(u.init);
