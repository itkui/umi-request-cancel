import { extend } from '../lib/index';
// import { extend } from '../src/index';

let dom = `
  <ul>
    <li>
      <a id="req1" href="javascript: void(0)">发起请求1</a>
      <a id="req2" href="javascript: void(0)">发起请求2</a>
      <a id="req3" href="javascript: void(0)">发起请求3</a>
    </li>
  </ul>
`

document.body.innerHTML = dom

const req = extend({
  timeout: 3000,
})

document.getElementById('req1')?.addEventListener('click', () => {
  req.get('http://localhost:8000/test1', {
    cancelKey: 'cancelKey1',
  }).then(console.log)
})
document.getElementById('req2')?.addEventListener('click', () => {
  req.get('http://localhost:8000/test2', {
    cancelKey: 'cancelKey2',
  }).then(console.log)
})
document.getElementById('req3')?.addEventListener('click', () => {
  req.get('http://localhost:8000/test3', {
    cancelKey: 'cancelKey3',
  }).then(console.log)
})
