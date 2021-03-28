const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const booklist = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

if (title.value == '' && author.value == '' && year.value == '') {
	alert('please fill out the filed!')
} else{
	const newrow = document.createElement('tr')

	const newtitle = document.createElement('td')
	newtitle.innerHTML = title.value
    newrow.appendChild(newtitle)

	const newauthor = document.createElement('td')
	newauthor.innerHTML = author.value
	newrow.appendChild(newauthor)

	const newyear = document.createElement('td')
	newyear.innerHTML = year.value
	newrow.appendChild(newyear)

    booklist.appendChild(newrow)
     title.value = "";
     author.value = "";
     year.value = "";

}
});