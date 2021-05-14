let obj = {name: 'a'}
let state = new Proxy(obj, {
    get(obj, key){
        return obj[key]},
    set(obj, key, value){
        obj[key] = value;
        return true;
    }
})
console.log(state)
document.getElementById('test').innerText=state.name;