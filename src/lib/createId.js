let id= parseInt(window.localStorage.getItem('_idMax') || '3') || 3;

function createId() {
  id++;
  window.localStorage.setItem('_idMax',id.toString())
  return id;
}

export default createId;