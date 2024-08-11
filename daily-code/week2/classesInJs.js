class shape {
    constructor(width, height,color){
        this.width = width;
        this.height = height;
        this.color = color
    }

    area(){
        return this.width * this.height;
    }

    paint(){
        console.log(`shape color in ${this.color}`);
    }

}



const rect = new shape(4,2,"red");
let area = rect.area();
console.log(area);
