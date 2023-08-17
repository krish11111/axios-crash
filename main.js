function getTodos() {
  axious({
    method:'get',
 url:'https://jsonplaceholder.typicode.com/todos'
  }).then(res => showOutput(res))
    .catch(err=> console.error();)
}

// POST REQUEST
function addTodo() {
  axios({
    method:'post',
    url:'https://jsonplaceholder.typicode.com/posts',
 completed:false
  }).then(res => showOutput(res))
    .catch(err=> console.error();)
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios({
    method:'patch',
    url:'https://jsonplaceholder.typicode.com/posts',
 completed:false
  }).then(res => showOutput(res))
    .catch(err=> console.error();)
}
}

// DELETE REQUEST
function removeTodo() {
   axios({
    method:'patch',
    url:'https://jsonplaceholder.typicode.com/posts',
 completed:false
  }).then(res => showOutput(res))
    .catch(err=> console.error();)
}
}

// SIMULTANEOUS DATA
function getData() {
   axios({
    method:'patch',
    url:'https://jsonplaceholder.typicode.com/posts',
 completed:false
  }).then(res => showOutput(res))
    .catch(err=> console.error();)
}
}

// CUSTOM HEADERS
function customHeaders() {
  const config={
    const header:{
      'content-type':'application.json'.
      Authorization:'some jwt'
    }
  }
  axios({
    method:'post',
    url:'https://jsonplaceholder.typicode.com/posts',
 completed:false
  },config).then(res => showOutput(res))
    .catch(err=> 
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
 const option={
   mothod:'post',
   url:'https://jsonplaceholder.typicode.com/posts',
   data:{
     title:'Hello world'
   },
   transformResponse:axios.default.transformResponse.concat(data=>(
   data.title=data.title.toUpperCase))
 }
 axios(options).then(res=>showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
 axious({
    method:'get',
 url:'https://jsonplaceholder.typicode.com/todos'
  }).then(res => showOutput(res))
    .catch(err=> {
   if(error.response){
     console.log(err.response.data);
   }
 }
}
}

// CANCEL TOKEN
function cancelToken() {
  const token=axious.cencelToken.source();
  
   axious({
    method:'get',
 url:'https://jsonplaceholder.typicode.com/todos'
  },{
     cencelToken:token.token
   }).then(res => showOutput(res))
 
}


// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
