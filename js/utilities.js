function addEvent (el, event, callback) {
  if ('addEventListener' in el) {
    el.addEventListener(event, callback, false); 
  } else {

  }
}
