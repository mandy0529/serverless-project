const result = document.querySelector('.result');

const API_START_POINST = '/api/3-airtable';
const fetchData = async () => {
  try {
    const {data} = await axios(API_START_POINST);
    const products = data
      .map((item) => {
        const {id, name, type, url} = item;
        console.log(id, name, type, url);
        return `<a href="product.html?id=${id}" class="product">
       <img src="${url}" alt="${type}"/>
       <div class="info">
            <h4>${name}</h4>
            <h5>${type}</h5>
       </div>
       </a>`;
      })
      .join('');
    console.log(products, 'products ㅂㅏㄲ에서');
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h3>'no any datas. please fetch again'</h3>`;
  }
};

const init = () => {
  fetchData();
};
init();
