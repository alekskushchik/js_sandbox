export default class Color {
    constructor(r, g, b) {

        this.r = minMax(r);
        this.g = minMax(g);
        this.b = minMax(b);

        function minMax(color) {
            switch (Math.abs(color) > 255) {
                case true:
                    return color = 255;
                default:
                    return Math.round(Math.abs(color));
            }
        }
        this.average = (this.r + this.g + this.b) / 3
    }

    toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    toBlack() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.average = 0;
        return this;
    }

    toWhite() {
        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.average = 255;
        return this;
    }

    getLightness() {
        return this.average;
    }

    toGrayscale() {
        this.r = Math.round(this.average);
        this.g = Math.round(this.average);
        this.b = Math.round(this.average);
        this.average = Math.round(this.average);
        return this;
    }

    invert() {
        this.r = 255 - this.r;
        this.g = 255 - this.g;
        this.b = 255 - this.b;
        this.average = (this.r + this.g + this.b) / 3;
        return this;
    }

    random() {
        this.r = Math.round(Math.random() * 255);
        this.g = Math.round(Math.random() * 255);
        this.b = Math.round(Math.random() * 255);
        this.average = (this.r + this.g + this.b) / 3;
        return this;
    }

    static fromString(str = "rgb(0, 0, 0)") {
        if(!(str.toString().indexOf('rgb(') == 0 && str.toString().indexOf(')') == str.length-1)) str = "rgb(0, 0, 0)";

        const substring = str.toString().substring(4, str.length - 1).split(',').map(el=> +el);
        
        if(substring.map(e=>typeof e =="number").indexOf(false) != -1) str = "rgb(0, 0, 0)";

        return new Color(substring[0],substring[1],substring[2]);
    }
}