document.querySelector(".hero-image__img").style.filter = `invert(${
	localStorage.getItem("theme") === "light" ? 0 : 1
})`;
const posts = [
	{
		title: "Data Scientist",
		content:
			"You will extract, analyse and interpret large amounts of data from a range of sources, using algorithmic, data mining, artificial intelligence, machine learning and statistical tools, in order to make it accessible to businesses.",
		views: "5.6K",
		courses: "13",
		cost: "free",
		color: "purple",
	},
	{
		title: "Data Scientist",
		content:
			"You will extract, analyse and interpret large amounts of data from a range of sources, using algorithmic, data mining, artificial intelligence, machine learning and statistical tools, in order to make it accessible to businesses.",
		views: "5.6K",
		courses: "13",
		cost: "free",
		color: "green",
	},
	{
		title: "Data Scientist",
		content:
			"You will extract, analyse and interpret large amounts of data from a range of sources, using algorithmic, data mining, artificial intelligence, machine learning and statistical tools, in order to make it accessible to businesses.",
		views: "5.6K",
		courses: "13",
		cost: "free",
		color: "indigo",
	},
	{
		title: "Data Scientist",
		content:
			"You will extract, analyse and interpret large amounts of data from a range of sources, using algorithmic, data mining, artificial intelligence, machine learning and statistical tools, in order to make it accessible to businesses.",
		views: "5.6K",
		courses: "13",
		cost: "free",
		color: "red",
	},
	{
		title: "Data Scientist",
		content:
			"You will extract, analyse and interpret large amounts of data from a range of sources, using algorithmic, data mining, artificial intelligence, machine learning and statistical tools, in order to make it accessible to businesses.",
		views: "5.6K",
		courses: "13",
		cost: "free",
		color: "blue",
	},
	{
		title: "Data Scientist",
		content:
			"You will extract, analyse and interpret large amounts of data from a range of sources, using algorithmic, data mining, artificial intelligence, machine learning and statistical tools, in order to make it accessible to businesses.",
		views: "5.6K",
		courses: "13",
		cost: "free",
		color: "deep-orange",
	},
];
const cards = document.querySelector("main .cards .row");
posts.forEach((post) => {
	const Post = document.createElement("div");
	Post.className = "col-lg-33 col-md-50 col-sm-100";

	const card = document.createElement("div");
	card.className = "card";
	card.setAttribute("data-price", post.cost);

	const cardHead = document.createElement("div");
	cardHead.className = "card-head";

	const cardHeadTitle = document.createElement("div");
	cardHeadTitle.className = "card-head__title";
	cardHeadTitle.innerHTML = post.title;

	const cardHeadDetails = document.createElement("div");
	cardHeadDetails.className = "card-head-details";

	const cardHeadDetailsViews = document.createElement("div");
	cardHeadDetailsViews.className = "card-head-details__views";
	const cardHeadDetailsViewsIcon = document.createElement("span");
	cardHeadDetailsViewsIcon.className = "material-icons";
	cardHeadDetailsViewsIcon.innerHTML = "visibility";
	const cardHeadDetailsViewsSpan = document.createElement("span");
	cardHeadDetailsViewsSpan.innerHTML = `${post.views} views`;
	cardHeadDetailsViews.appendChild(cardHeadDetailsViewsIcon);
	cardHeadDetailsViews.appendChild(cardHeadDetailsViewsSpan);

	const cardHeadDetailsIncluded = document.createElement("div");
	cardHeadDetailsIncluded.className = "card-head-details__included";
	const cardHeadDetailsIncludedIcon = document.createElement("span");
	cardHeadDetailsIncludedIcon.className = "material-icons";
	cardHeadDetailsIncludedIcon.innerHTML = "sticky_note_2";
	const cardHeadDetailsIncludedSpan = document.createElement("span");
	cardHeadDetailsIncludedSpan.innerHTML = `Blog Included`;
	cardHeadDetailsIncluded.appendChild(cardHeadDetailsIncludedIcon);
	cardHeadDetailsIncluded.appendChild(cardHeadDetailsIncludedSpan);

	const cardHeadDetailsCourses = document.createElement("div");
	cardHeadDetailsCourses.className = "card-head-details__courses";
	const cardHeadDetailsCoursesIcon = document.createElement("span");
	cardHeadDetailsCoursesIcon.className = "material-icons";
	cardHeadDetailsCoursesIcon.innerHTML = "cast_for_education";
	const cardHeadDetailsCoursesSpan = document.createElement("span");
	cardHeadDetailsCoursesSpan.innerHTML = `${post.courses} Courses`;
	cardHeadDetailsCourses.appendChild(cardHeadDetailsCoursesIcon);
	cardHeadDetailsCourses.appendChild(cardHeadDetailsCoursesSpan);

	cardHeadDetails.appendChild(cardHeadDetailsViews);
	cardHeadDetails.appendChild(cardHeadDetailsIncluded);
	cardHeadDetails.appendChild(cardHeadDetailsCourses);
	cardHead.appendChild(cardHeadTitle);
	cardHead.appendChild(cardHeadDetails);
	cardHead.style.backgroundColor = `var(--${post.color}-${
		localStorage.getItem("theme") === "light" ? "100" : "700"
	})`;
	document.getElementById("light").addEventListener("click", (e) => {
		e.preventDefault();
		cardHead.style.backgroundColor = `var(--${post.color}-100)`;
		document.querySelector(".hero-image__img").style.filter = "invert(0)";
	});
	document.getElementById("dark").addEventListener("click", (e) => {
		e.preventDefault();
		cardHead.style.backgroundColor = `var(--${post.color}-700)`;
		document.querySelector(".hero-image__img").style.filter = "invert(1)";
	});

	const cardBody = document.createElement("div");
	cardBody.className = "card-body";
	cardBody.innerHTML = post.content;

	const cardFoot = document.createElement("div");
	cardFoot.className = "card-foot";
	const cardFootLink = document.createElement("a");
	cardFootLink.className = "card-foot__link";
	cardFootLink.setAttribute("href", `/post/${_.kebabCase(post.title)}`);
	const cardFootButton = document.createElement("button");
	cardFootButton.className = "btn btn-primary";
	cardFootButton.innerHTML = "View Roadmap";
	cardFootLink.appendChild(cardFootButton);
	cardFoot.appendChild(cardFootLink);

	card.appendChild(cardHead);
	card.appendChild(cardBody);
	card.appendChild(cardFoot);

	Post.appendChild(card);
	cards.appendChild(Post);
});

const footerLinks = document.querySelectorAll(".footer-body-right-group__link");
footerLinks.forEach((item) => {
	item.setAttribute("href", `/${_.kebabCase(item.innerHTML)}`);
});

const fab = document.querySelector(".scroll-to-top");
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
	fab.style.display = window.scrollY > window.innerHeight ? "flex" : "none";
	header.style.position =
		window.scrollY > window.innerHeight ? "fixed" : "relative";
	header.style.boxShadow =
		window.scrollY > window.innerHeight ? "var(--shadow-3d)" : "none";
});
fab.addEventListener("click", () => {
	window.scrollTo(0, 0);
});
