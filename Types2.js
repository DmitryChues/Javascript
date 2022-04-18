function Duck(sound) {
    this.sound = sound;
    this.quack = function() {
        console.log(this.sound);
    }
}
    var toy = new Duck("quack quack");
    toy.quack();
    console.log( toy);
    console.log(toy instanceof Duck);
   