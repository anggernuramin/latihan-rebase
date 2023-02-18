const btnSearch = document.getElementById('search-product');

function getUrl(keyword){
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProduct(keyword){
  const url = getUrl(keyword);
  return fetch(url,{
    method: 'GET'
  }).then(response => {
    if( !response.ok){ // artinya jika responsenya tidak ok (fetch aka gagal jika,jaringannya error)
      error(response.status)
    }else{
      return response.json();
    }
  })
    .then(data => {
      displayProduct(data)})
      
}

function error(err){
  const list = document.getElementById('box-list-product')
  list.textContent = 'Pengambilan data Gagal , dengan Status eror ' + err;
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