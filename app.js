let Searchinfo = [
    {
        'title': 'Binary Search',
        'description': 'Binary Search Algorithm is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). '
    },
    {
        'title': 'Linear Search',
        'description': 'In Linear Search, we iterate over all the elements of the array and check if it the current element is equal to the target element. If we find any element to be equal to the target element, then return the index of the current element. Otherwise, if no element is equal to the target element, then return -1 as the element is not found. Linear search is also known as sequential search.'
    }
];
let Sortinfo = [
    {
        'title': 'Bubble Sort',
        'description': 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.'
    },
    {
        'title': 'Selection Sort',
        'description': 'Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.'
    },
    {
        'title': 'Insertion Sort',
        'description': 'Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.'
    }
];
let links=['binarysearch.html','linear_Search.html']
let links2=['bubblesort.html','selectionsort.html','insertionsort.html']

const output = document.querySelector('.outputportion');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const btn = document.getElementById('btn');


t1.onclick = function() {
    let html = '<h3>Searching Techniques</h3><ul>';
    Searchinfo.forEach((item, idx) => {
        html += `<li class="border search-item margin" data-index="${idx}">${item.title}</li>`;
    });
    html += '</ul>';
    output.innerHTML = html;
    addSearchItemListeners();
};


t2.onclick = function() {
    let html = '<h3>Sorting Techniques</h3><ul>';
    Sortinfo.forEach((item, idx) => {
        html += `<li class="border sort-item margin" data-index="${idx}">${item.title}</li>`;
    });
    html += '</ul>';
    output.innerHTML = html;
    addSortItemListeners();
};


function addSearchItemListeners() {
    document.querySelectorAll('.search-item').forEach(item => {
        item.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            const info = Searchinfo[idx];
            const li=links[idx];
            output.innerHTML = `<h3>${info.title}</h3>
            <p>${info.description}</p>
             <button class="output-btn"><a href="${li}">Vizualization</a></button> `;
            //document.querySelector('.output-btn').onclick = function() {
            //alert('You clicked the button for ' + info.title);
            //};          
        });
    });
}

function addSortItemListeners() {
    document.querySelectorAll('.sort-item').forEach(item => {
        item.addEventListener('click', function() {
            let idx = this.getAttribute('data-index');
            const info = Sortinfo[idx];
            const li=links2[idx]
            output.innerHTML = `<h3>${info.title}</h3>
            <p>${info.description}</p> 
            <a href="${li}"><button class="output-btn">Visualization</button></a> `;
        // document.querySelector('.output-btn').onclick = function() {
        // alert('You clicked the button for ' + info.title);
        //};      
            
        });
    });
}