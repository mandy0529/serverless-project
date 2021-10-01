const result = document.querySelector('.result');
const paramsId = window.location.search.substring(4);
const API_START_POINT = `/api/3-single?id=${paramsId}`;

const fetchData = async () => {
  result.innerHTML = `<h2>loading ...</h2>`;
  try {
    const {data} = await axios(API_START_POINT);
    const {
      id,
      fields: {Name: name, desc, type, image},
    } = data;
    const img = image[0].url;
    result.innerHTML = `<h1 class="title">Single Product</h1>
        <article class="product">
          <img class="product-img"
          src=${img}
          alt=${type}
          />
          <div class="product-info">
            <h5 class="title">${name}</h5>
            <h5 class="price">${type}</h5>
            <p class="desc">${desc}</p>
          </div>
        </article>`;
    return {id, name, desc, type, img};
  } catch (error) {
    result.innerHTML = `<h2>not found any data</h2>`;
  }
};

const init = () => {
  fetchData();
};
init();
