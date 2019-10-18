
const APP_STARTED = 1;
const APP_STOPPED = 2;

class App extends Domer {

  _state = APP_STOPPED;
  _name = "";
  _age = "";
  _status = "<p>Waiting for person data</p>";
  _persons = [];
  _images = [
    "/images/example-image.jpg", 
    "/images/example-image2.jpg",
    "/images/example-image3.jpg"
  ];
  _clickCounter = 0;

  constructor() {
    super(); //Anropa alltid super-klassens konstruktor först!
  }

  onStoreClick() {
    if (this._name == "" || this._age == "") {
      this._status = `<p style="color:red;">Missing information in one of the fields.</p>`
    }
    else {
      this._persons.push(new Person(this._name, this._age));
      this._status = `<p style="color:green;">Person stored!</p>`
    }
  }

  onImageClick(){
    console.log("klick på bilden!");
    this._clickCounter++;
    if (this._clickCounter == this._images.length){
      this._clickCounter=0;
    }
  }

  isDisabled(){
    if (this._name == "" || this._age == ""){
      return "disabled";
    }
    else{
      return "";
    }
  }

  onStartClick(){
    this._state = APP_STARTED;
  }

  onStopClick(){
    this._state = APP_STOPPED;
  }
  
  isStopped(){
    if (this._state == APP_STOPPED){
      return "disabled";
    }
    else{
      return "";
    }
  }

  //Notera: man måste ha ett s.k root-element i render-metoden, t ex en div-tag som omsluter allt!
  render(html, route) {
    /*
     * Nedanstående innehåller den HTML-kod som ska renderas för den här komponenten.
     */
    return html`
      <div>
        <h1>Övningar Lektion 9.5</h1>
        <input style="color:black;" type="text" bind="_name" placeholder="Name">
        <input type="text" bind="_age" placeholder="Age">
        <button click="onStoreClick" ${this.isDisabled()} type="button">Store Person</button> 
        ${this._status}
        <hr>
        ${this._persons}
        <hr>
        <img src="${this._images[this._clickCounter]}" click="onImageClick" alt="Smiley face" height="200" width="200"> 
        <hr>
        <button click="onStartClick" ${this._state == APP_STARTED ? "disabled" : ""} type="button">Start</button> 
        <button click="onStopClick" ${this.isStopped()} type="button">Stop</button> 
        </div>
        `
  }

}

new App();