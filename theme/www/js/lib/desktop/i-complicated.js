//page.navigate(this.url.replace(/[\d]+$/, page.grid_count), "this");
page = {};
window.url = ""
		//page.navigate(this.url.replace(/[\d]+$/, page.grid_count), "this");
		page.navigate = function() {}
page.navigate(this.url.replace(/[\d]+$/, page.grid_count), "this");

page.navigate(this.url.replace(/[\d]+$\//, page.grid_count), "this");

page.navigate(this.url.replace("'", ""), "this"); // fucked up edge case 

page.navigate(this.url)//, this);

var cool = "//whatever"// some comment but missing ; at end of line (sloppy but valid)

// test

var page = page.navigate()// some comment but missing ; at end of line (sloppy but valid)

// See more at http://someurl

var string = "http://www.someurl.dk";
var string = "//www.someurl.dk";

/* whatever // cause of crash
and ever
and */var ever;

console.log("desktop js ok")