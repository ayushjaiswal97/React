const h1 =  React.createElement('h1', null, "This is h1 tag");
const h2 =  React.createElement('h2', null, "This is h2 tag");

const div = React.createElement('div', {id: "parent"}, [h1,h2]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(div)