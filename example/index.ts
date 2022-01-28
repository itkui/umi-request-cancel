import request from 'umi-request-cancel'

const req = request

let dom = `
  <ul>
    <li>
      <a id="req1" href="javascript: void(0)">cancelKey请求</a>
    </li>
    <li>
      <a id="req2-host" href="javascript: void(0)">urlUnique请求（host）</a>
      <a id="req2-path" href="javascript: void(0)">urlUnique请求（path）</a>
      <a id="req2-search" href="javascript: void(0)">urlUnique请求（search）</a>
      <a id="req2-regexp" href="javascript: void(0)">urlUnique请求（regexp）</a>
    </li>
    <li>
      <a id="req3" href="javascript: void(0)">urlUniqueList请求</a>
    </li>
  </ul>
`

document.body.innerHTML = dom

document.getElementById('req1')?.addEventListener('click', () => {
  req.get('http://localhost:3000/test1', {
    cancelKey: 'cancelKey',
  }).then(console.log)
})

let clickNum = 0
document.getElementById('req2-host')?.addEventListener('click', () => {
  clickNum++
  req.get('http://localhost:3000/' + (clickNum % 2 === 0 ? 'test/path?search=search#hash' : 'test2/path2?search=search#hash'), {
    urlUnique: 'host',
  }).then(console.log)
})

document.getElementById('req2-path')?.addEventListener('click', () => {
  clickNum++
  req.get('http://localhost:3000/test/path' + (clickNum % 2 === 0 ? '?search=search#hash' : '?search1=search1#hash'), {
    urlUnique: 'path'
  }).then(console.log)
})

document.getElementById('req2-search')?.addEventListener('click', () => {
  clickNum++
  req.get('http://localhost:3000/test/path?search=search', {
    urlUnique: 'search'
  }).then(console.log)
})

document.getElementById('req2-regexp')?.addEventListener('click', () => {
  clickNum++
  req.get(clickNum % 2 === 0 ? 'http://localhost:3000/test/unique?search=search' : 'http://localhost:3000/aa/aaa/test/bbb/bbb?search=arch&a', {
    urlUnique: /test\/unique/,
  }).then(console.log)
})

document.getElementById('req3')?.addEventListener('click', () => {
  clickNum++
  req.get(clickNum % 2 === 0 ? 'http://localhost:3000/test/unique?search=search' : 'http://localhost:3000/atest/unique?search=search&a', {
    urlUniqueList: ['/test/unique?search=search'],
    urlBase: 'http://localhost:3000',
    urlUnique: 'path'
  }).then(console.log)
})