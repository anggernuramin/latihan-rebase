const btnSearch = document.getElementById('search-product');

function getUrl(keyword){
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProduct(keyword){
  const url = getUrl(keyword);
  return fetch(url,{
    method: 'GET'
  }).then(response => {
    
    console.log(response);
  })
    .then(data => displayProduct(data))
   
}

function displayProduct(data){
  return data.data.products.map(product => displayData(product.name))
}


function displayData(name){
  console.log(name);
  const li = document.createElement('li');
  li.textContent = name;
  console.log(li);
  const list = document.getElementById('box-list-product')
  list.appendChild(li)
}

function clearList(){
  const list = document.getElementById('box-list-product');
  list.textContent = " "
}



btnSearch.addEventListener('click',function(e){
  console.log('start');
  const namaProduct = document.getElementById('nama-product').value;
  clearList()
  getProduct(namaProduct)
  console.log('selesai');
})