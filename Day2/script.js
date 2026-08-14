function h1(){
   return React.createElement('h1', null, 'This is h1 from React using function');  
 
}

var root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(h1());