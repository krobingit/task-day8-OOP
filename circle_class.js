class Circle {


    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius.toString()},color=${this.color.toString()}]`;
    }

    getArea() {
        return (Math.pow(this.radius, 2) * Math.PI.toFixed(3))
    }

    getCircumference() {
        return (2 * Math.PI.toFixed(3) * this.radius)
    }
}

const circle = new Circle(1.0, "red")
console.log(circle.getArea())                   //3.142
console.log(circle.getCircumference())          //6.284
circle.setColor("green")
circle.setRadius(5)
console.log(circle.toString())            //output- "Circle[radius=5,color=green]" ->>typeof-string            
