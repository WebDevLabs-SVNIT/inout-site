var $window = $(window);

var $navBar = $('nav'),
		$linksContainer = $('.navigation'),
		$mainSection = $('.section__main'),
		$aboutSection = $('.section__about'),
		$faqSection = $('.section__faq'),
		$scheduleSection = $('.section__schedule'),
		$sponsorsSection = $('.section__sponsors');

var mainSectionTop = $mainSection.position().top - 86,
	  aboutSectionTop = $aboutSection.position().top - 86,
	  faqSectionTop = $faqSection.position().top - 86,
	  scheduleSectionTop = $scheduleSection.position().top - 86,
	  sponsorsSectionTop = $sponsorsSection.position().top - 86;

// Colors of different sections of the page
var mainSectionColor = '#223241',
	  aboutSectionColor = '#1A252F',
	  faqSectionColor = '#40626D',
	  scheduleSectionColor = '#224252',
	  sponsorsSectionColor = '#FFFFFF';

var sections = {
	"main" : {
		"domEl" : $mainSection,
		"top" : mainSectionTop,
		"bg_color" : mainSectionColor
	}, 
	"about" : {
		"domEl" : $aboutSection,
		"top" : aboutSectionTop,
		"bg_color" : aboutSectionColor
	}, 
	"faq" : {
		"domEl" : $faqSection,
		"top" : faqSectionTop,
		"bg_color" : faqSectionColor
	}, 
	"schedule" : {
		"domEl" : $scheduleSection,
		"top" : scheduleSectionTop,
		"bg_color" : scheduleSectionColor
	},
	"sponsors" : {
		"domEl" : $sponsorsSection,
		"top" : sponsorsSectionTop,
		"bg_color" : sponsorsSectionColor
	}
};

// Attaching event listener to the window for listening to scrolling and adjustin the nav bar 
// The funcion is debounced
var timeout;
$window.on('scroll', function(event) {
	clearTimeout(timeout);
	timeout = setTimeout(function() {
		changeNavBarColorBasedOnScrollLocation($window.scrollTop());
	}, 50);
});

// Attaching event listener to the navigation links
$linksContainer.children().each(function() {
	$(this).on('click', function() {
		var currentTargetAttr = $(this).attr('data-target');
		setNavBarColor(sections[currentTargetAttr]["bg_color"]);
		var scrollTopPos = sections[currentTargetAttr]["top"];
		$('html, body').animate({
	    scrollTop: scrollTopPos
	  }, 300, 'easeInOutQuint');
	});
});

// Utitlity functions
function changeNavBarColorBasedOnScrollLocation(pageScrollPosition) {
	console.log("done");
	if( pageScrollPosition >= mainSectionTop && pageScrollPosition < aboutSectionTop ) {
		setNavBarColor(mainSectionColor);
		selectNavLink("main");
	} else if ( pageScrollPosition >= aboutSectionTop && pageScrollPosition < faqSectionTop ) {
		setNavBarColor(aboutSectionColor);
		selectNavLink("about");
	} else if ( pageScrollPosition >= faqSectionTop && pageScrollPosition < scheduleSectionTop ) {
		setNavBarColor(faqSectionColor);
		selectNavLink("faq");
	} else if ( pageScrollPosition >= scheduleSectionTop && pageScrollPosition < sponsorsSectionTop ) {
		setNavBarColor(scheduleSectionColor);
		selectNavLink("schedule");
	}
}

function setNavBarColor(color) {
	if ( $navBar.css('background-color') !== color ) {
		$navBar.css('background-color', color);
	}
}

function selectNavLink(linkDataAttr) {
	$linksContainer.children().each(function() {
		var currentTargetAttr = $(this).attr('data-target');
		if( currentTargetAttr === linkDataAttr ) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});
}



