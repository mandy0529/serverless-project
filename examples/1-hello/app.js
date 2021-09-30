const API_START_POINT = 'http://localhost:8888/.netlify/functions/1-hello';

const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const {data} = await axios(API_START_POINT);
    result.textContent = data;
  } catch (error) {
    throw new Error(error);
  }
};

const init = () => {
  fetchData();
};
init();
