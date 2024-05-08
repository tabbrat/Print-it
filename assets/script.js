const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// selectioner des elements de notre site
const fleche_gauche = document.querySelector('.arrow_left')
const fleche_droit = document.querySelector('.arrow_right')


const image_banner = document.querySelector('.banner-img')
const banner_legend = document.querySelector('.banner-legend')

const dotsContainer = document.querySelector('.dots')


// console.log(slides[0]);

// variable globale
let slideIndex = 0

// rajout "events listeners" -> 'click'
fleche_gauche.addEventListener('click', ()=>{
	if(slideIndex === 0){
		slideIndex = slides.length-1
	}else{

		slideIndex--
	}
	updateImage()
	checkSelected()
})

// rajout "events listeners" -> 'click'
fleche_droit.addEventListener('click', ()=>{
	if(slides.length > (slideIndex+1)){
		slideIndex++
	}else{
		slideIndex = 0

	}
	updateImage()
	checkSelected()
	 // console.log(slides.length, slideIndex);
})

// function pour metre a jour le site
function updateImage(){
	image_banner.src = './assets/images/slideshow/' +  slides[slideIndex].image
	banner_legend.innerHTML = slides[slideIndex].tagLine
	checkSelected()
}

// dot_selected

function checkSelected(){
	dotsContainer.innerHTML = ''
	slides.forEach((slide, i)=>{
		const span = document.createElement('span')
		span.addEventListener('click', ()=>{
			slideIndex = i
			updateImage()
		})
		span.className = "dot" 
		if(slideIndex === i){
			span.classList.add('dot_selected')
		}
		dotsContainer.append(span)
	})
}

checkSelected()


/*  extra accesibilité */
window.addEventListener('keydown', (e)=>{
	if(e.key=== "ArrowRight"){
		if(slides.length > (slideIndex+1)){
			slideIndex++
		}else{
			slideIndex = 0
	
		}
		updateImage()
		checkSelected()
	}
	if(e.key=== "ArrowLeft"){
		if(slideIndex === 0){
			slideIndex = slides.length-1
		}else{
	
			slideIndex--
		}
		updateImage()
		checkSelected()
	}
})


