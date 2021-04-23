const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value);

    if(e.key === 'Enter'){
        e.target.value = '';

        randomSelect();
    }
})


function createTags(input){
    // primero separa los inputs por coma, los filtra tales que no toma los vacios (porque puede haber vacíos separados por coma) y lueog los mapea eliminando el white space
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    
    //limpiar el tags container cada vez que se usa, así no se acumulan los tags
    tagsEl.innerHTML = '';

    //loopeamos cada tag de arriba y se se agregan al html

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag');
        tagEl.innerHTML  = tag;

        tagsEl.appendChild(tagEl);
    })


}

function randomSelect(){

    const times = 30;
    
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);


    setTimeout(() => {

        clearInterval(interval)


        setTimeout(() => {

            const randomTag = pickRandomTag();
            highlightTag(randomTag)
            
        }, 100);
        
    }, times * 100);

}


function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unhighlightTag(tag) {
	tag.classList.remove('highlight');
}


