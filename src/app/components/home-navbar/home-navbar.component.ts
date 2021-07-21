import { Component, OnInit, ElementRef } from "@angular/core";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from "@angular/router";

window.onscroll = function () {
  scrollEvent();
};
function scrollEvent() {
  var y = window.scrollY;
  if (y > 0) {
    var element = document.getElementById("try-nav");
    if (element) element.classList.add("scrolled");
  } else {
    var element = document.getElementById("try-nav");
    if (element) element.classList.remove("scrolled");
  }
}

@Component({
  selector: "app-home-navbar",
  templateUrl: "./home-navbar.component.html",
  styleUrls: ["./home-navbar.component.scss"],
})
export class HomeNavbarComponent implements OnInit {
  sidenavOpen: boolean = true;

  focus;
  listTitles: any[];
  location: Location;
  
  //image
  imgLogo = "assets/img/logo/logo_kpt_white.svg";

  constructor(private router: Router) {}

  ngOnInit() {
    scrollEvent();
  }

  openPage(path: string) {
    this.router.navigate([path]);
  }

  navigatePage(path: String) {
    if (path == "notifications") {
      return this.router.navigate(["/global/notifications"]);
    } else if (path == "login") {
      return this.router.navigate(["/auth/login"]);
    } else if (path == "register") {
      return this.router.navigate(["/auth/register"]);
    } else if (path == "home") {
      return this.router.navigate(["/auth/login"]);
    }
  }

  goPageMain() {
    this.router.navigate(["/pages"]);
  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }

  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  }
}
