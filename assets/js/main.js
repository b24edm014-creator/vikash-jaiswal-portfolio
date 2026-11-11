/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Antux - Personal Portfolio Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
	"use strict";

	$(document).ready(function() {


		/* ==================================================
		    # Tooltip Init
		===============================================*/
		$('[data-toggle="tooltip"]').tooltip();


		/* ==================================================
		    # Youtube Video Init
		 ===============================================*/
		$('.player').mb_YTPlayer();


		/* ==================================================
		    # Wow Init
		 ===============================================*/
		var wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();


		/* ==================================================
		    # imagesLoaded active
		===============================================*/
		$('#gallery-masonary,.blog-masonry').imagesLoaded(function() {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
			$('.mix-item-menu button').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#gallery-masonary').isotope({
				itemSelector: '.gallery-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.gallery-item',
				}
			});

			/* Filter active */
			$('.blog-masonry').isotope({
				itemSelector: '.blog-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.blog-item',
				}
			});

		});


		/* ==================================================
		    # Magnific popup init
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.magnific-mix-gallery').each(function() {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function() {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function() {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});


		/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.timer').countTo();
		$('.fun-fact').appear(function() {
			$('.timer').countTo();
		}, {
			accY: -100
		});


		$(".service-style-one-item").hover(function() {
			$(this).addClass('active').parent().siblings().find('.service-style-one-item').removeClass('active');
		});


		/* ==================================================
            # Testimonials Carousel
         ===============================================*/
		if ($(".testimonial-style-one-carousel").length) {
			const testimonialOneCarousel = new Swiper(".testimonial-style-one-carousel", {
				// Optional parameters
				direction: "horizontal",
				loop: true,
				autoplay: true,
				// If we need pagination
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
				},

				// Navigation arrows
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}

				// And if we need scrollbar
				/*scrollbar: {
				el: '.swiper-scrollbar',
			  },*/
			});
		}


		/* ==================================================
            # Project Details Carousel
         ===============================================*/
		if ($(".project-details-carousel").length) {
			const projectDetailsCarousel = new Swiper(".project-details-carousel", {
				// Optional parameters
				loop: true,
				freeMode: true,
				grabCursor: true,
				slidesPerView: 1,
				spaceBetween: 50,
				autoplay: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 3,
					},
				},
			});
		}


		/* ==================================================
		    Splite Text
		================================================== */

		let ofsetHeight = document.querySelector(".services-style-one-items");
		if (ofsetHeight) {
			ScrollTrigger.matchMedia({
				"(min-width: 992px)": function() {

					let pbmitpanels = gsap.utils.toArray(".services-style-one-item");
					const spacer = 0;

					let pbmitheight = pbmitpanels[0].offsetHeight + 120;
					pbmitpanels.forEach((pbmitpanel, i) => {
						//This is for padding between item
						TweenMax.set(pbmitpanel, {
							top: i * 0
						});
						const tween = gsap.to(pbmitpanel, {
							scrollTrigger: {
								trigger: pbmitpanel,
								start: () => `top bottom-=100`,
								end: () => `top top+=40`,
								scrub: true,
								invalidateOnRefresh: true
							},
							ease: "none",
							//This is for scaling outsite 
							scale: () => 1 - (pbmitpanels.length - i) * 0.035
						});
						ScrollTrigger.create({
							trigger: pbmitpanel,
							start: () => "top 140px",
							endTrigger: '.services-style-one-items',
							end: `bottom top+=${pbmitheight + (pbmitpanels.length * spacer)}`,
							pin: true,
							pinSpacing: false,
						});
					});
				},
				"(max-width:1025px)": function() {
					ScrollTrigger.getAll().forEach(pbmitpanels => pbmitpanels.kill(true));
				}
			});
		}
		
		/* ==================================================
		    GSAP Element Scroll Animation
		================================================== */

		let upDown_Scroll = document.querySelector(".upDownScrol");
		if (upDown_Scroll) {
			gsap.set(".upDownScrol", {
				yPercent: 80
			});

			gsap.to(".upDownScrol", {
				yPercent: -80,
				ease: "none",
				scrollTrigger: {
					trigger: ".upDownScrol",
					end: "bottom center",
					scrub: 1
				},
			});
		}


		/* ==================================================
		    Scroll To Top
		================================================== */
		function scrollToTop() {
			var $scrollUp = $("#scrollUp"),
			  $lastScrollTop = 0,
			  $window = $(window);
		
			$window.on("scroll", function () {
			  var st = $(this).scrollTop();
			  $lastScrollTop = st;
			});
		
			$scrollUp.on("click", function (evt) {
			  $("html, body").animate({ scrollTop: 0 }, 400);
			  evt.preventDefault();
			});
		}
		scrollToTop();


		/* ==================================================
		    Contact Form Submission (FormSubmit to b24edm014@iitj.ac.in)
		================================================== */
		$('#contact-form').on('submit', function(e) {
			e.preventDefault();
			var $form = $(this);
			var $submitBtn = $('#submit-btn');
			var $msgBox = $('#contact-message');
			var originalBtnHtml = $submitBtn.html();

			var name = $('#name').val().trim();
			var email = $('#email').val().trim();
			var subject = $('#subject').val().trim() || 'New Inquiry from Portfolio';
			var message = $('#comments').val().trim();

			if (!name || !email || !message) {
				$msgBox.html('<div class="alert alert-warning" style="border-radius: 12px; padding: 14px;"><i class="fas fa-exclamation-circle"></i> Please fill in all required fields.</div>').slideDown('fast');
				return;
			}

			// Show loading spinner
			$submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Sending message...');
			$msgBox.slideUp('fast');

			fetch("https://formsubmit.co/ajax/b24edm014@iitj.ac.in", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify({
					name: name,
					email: email,
					_subject: "Portfolio Inquiry: " + subject,
					message: message
				})
			})
			.then(function(res) {
				return res.json();
			})
			.then(function(data) {
				$msgBox.html('<div class="alert alert-success" style="border-radius: 12px; padding: 16px; background-color: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46;"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 8px;"></i> <strong>Message Sent Successfully!</strong><br>Thank you ' + $('<div>').text(name).html() + ', your message has been delivered to <strong>b24edm014@iitj.ac.in</strong>. Vikash will get back to you soon!</div>').slideDown('slow');
				$form[0].reset();
			})
			.catch(function(err) {
				// Fallback to standard form submission if AJAX fetch fails
				$msgBox.html('<div class="alert alert-info" style="border-radius: 12px; padding: 14px;"><i class="fas fa-paper-plane"></i> Submitting form...</div>').slideDown('fast');
				$form.off('submit').submit();
			})
			.finally(function() {
				$submitBtn.prop('disabled', false).html(originalBtnHtml);
			});
		});


	}); // end document ready function


	$(window).scroll(function() {
		/* ==================================================
		    Background Zoom Init
		================================================== */
		let background_Zoom = document.querySelector("#js-hero");
		if (background_Zoom) {
			var scroll = $(window).scrollTop();
			$("#js-hero").css({
				width: (100 + scroll / 18) + "%"
			})
		}
	});


	/* ==================================================
		Preloader JS
	================================================== */
	const svg = document.getElementById("preloaderSvg");
	const tl = gsap.timeline();
	const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
	const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

	tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
		delay: 1.5,
		y: -100,
		opacity: 0,
	});
	tl.to(svg, {
		duration: 0.5,
		attr: { d: curve },
		ease: "power2.easeIn",
	}).to(svg, {
		duration: 0.5,
		attr: { d: flat },
		ease: "power2.easeOut",
	});
	tl.to(".preloader", {
		y: -1500,
	});
	tl.to(".preloader", {
		zIndex: -1,
		display: "none",
	});




})(jQuery); // End jQuery

/* ── TLR Gallery Carousels ── */
var tlrState = {};

function tlrSlide(carouselId, dir) {
    var carousel = document.getElementById(carouselId);
    if (!carousel) return;
    var slides = carousel.querySelectorAll('.tlr-slide');
    var dotsContainer = document.getElementById(carouselId.replace('tlrCarousel','tlrDots'));
    var dots = dotsContainer ? dotsContainer.querySelectorAll('.tlr-dot') : [];
    if (!slides.length) return;
    if (!tlrState[carouselId]) tlrState[carouselId] = 0;
    slides[tlrState[carouselId]].classList.remove('active');
    if (dots[tlrState[carouselId]]) dots[tlrState[carouselId]].classList.remove('active');
    tlrState[carouselId] = (tlrState[carouselId] + dir + slides.length) % slides.length;
    slides[tlrState[carouselId]].classList.add('active');
    if (dots[tlrState[carouselId]]) dots[tlrState[carouselId]].classList.add('active');
}

function initTlrCarousels() {
    var carousels = document.querySelectorAll('.tlr-carousel');
    carousels.forEach(function(carousel) {
        var id = carousel.id;
        if (!id) return;
        var slides = carousel.querySelectorAll('.tlr-slide');
        if (slides.length <= 1) return;
        tlrState[id] = 0;

        /* Build dots */
        var dotsId = id.replace('tlrCarousel','tlrDots');
        var dotsEl = document.getElementById(dotsId);
        if (dotsEl) {
            slides.forEach(function(_, i) {
                var dot = document.createElement('span');
                dot.className = 'tlr-dot' + (i === 0 ? ' active' : '');
                dot.onclick = function(e) {
                    e.preventDefault(); e.stopPropagation();
                    var diff = i - (tlrState[id] || 0);
                    if (diff !== 0) tlrSlide(id, diff);
                };
                dotsEl.appendChild(dot);
            });
        }

        /* Auto-advance every 3 seconds */
        setInterval(function() { tlrSlide(id, 1); }, 3000);
    });
}

/* ── TLR Video Toggle ── */
function toggleTlrVideo(overlay) {
    var slide = overlay.closest('.tlr-video-slide');
    var video = slide ? slide.querySelector('video') : null;
    if (!video) return;
    if (video.paused) {
        video.play();
        overlay.classList.add('playing');
    } else {
        video.pause();
        overlay.classList.remove('playing');
    }
}

/* Init carousels on DOM ready */
document.addEventListener('DOMContentLoaded', function() {
    initTlrCarousels();
});

/* ── Projectile Motion Photo Gallery & Lightbox ── */
var pmImages = [
    { src: "assets/img/pm-scratch-ide.png", caption: "Scratch IDE – Projectile Motion Code Blocks" },
    { src: "assets/img/pm-scene1.jpg",      caption: "In-Project Scene – Street Backdrop" },
    { src: "assets/img/pm-scene2.jpg",      caption: "In-Project Scene – Airport Backdrop" },
    { src: "assets/img/pm-scene3.jpg",      caption: "In-Project Scene – Treasure Cave Backdrop" }
];
var pmCurrent = 0;

function setPmMain(index, thumbEl) {
    pmCurrent = index;
    var main = document.getElementById('pmMainImg');
    var cap  = document.getElementById('pmMainCaption');
    if (!main) return;
    main.style.opacity = '0';
    setTimeout(function() {
        main.src = pmImages[index].src;
        main.alt = pmImages[index].caption;
        if (cap) cap.textContent = pmImages[index].caption;
        main.style.opacity = '1';
    }, 150);
    document.querySelectorAll('.pm-thumb').forEach(function(t) { t.classList.remove('active'); });
    if (thumbEl) thumbEl.classList.add('active');
}

function openPmLightbox(index) {
    pmCurrent = index;
    var lb = document.getElementById('pmLightbox');
    var img = document.getElementById('pmLbImg');
    var cap = document.getElementById('pmLbCaption');
    if (!lb || !img) return;
    img.src = pmImages[index].src;
    img.alt = pmImages[index].caption;
    if (cap) cap.textContent = pmImages[index].caption;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePmLightbox() {
    var lb = document.getElementById('pmLightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
}

function changePmLb(dir) {
    pmCurrent = (pmCurrent + dir + pmImages.length) % pmImages.length;
    var img = document.getElementById('pmLbImg');
    var cap = document.getElementById('pmLbCaption');
    if (img) { img.src = pmImages[pmCurrent].src; img.alt = pmImages[pmCurrent].caption; }
    if (cap) cap.textContent = pmImages[pmCurrent].caption;
}

/* Close lightbox on Escape key */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closePmLightbox();
    if (e.key === 'ArrowRight') { var lb = document.getElementById('pmLightbox'); if (lb && lb.classList.contains('open')) changePmLb(1); }
    if (e.key === 'ArrowLeft')  { var lb = document.getElementById('pmLightbox'); if (lb && lb.classList.contains('open')) changePmLb(-1); }
});

/* Also add smooth fade transition on main image */
document.addEventListener('DOMContentLoaded', function() {
    var mainImg = document.getElementById('pmMainImg');
    if (mainImg) mainImg.style.transition = 'opacity 0.15s ease';
});