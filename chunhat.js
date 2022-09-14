class  Rectangle{
    width;
    height;
    x;
    y;
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

    }
    setWidth(width){
        this.width=width
    }getWidth(){
        return this.width
    }setHeight(height){
        this.height=height
    }getHeight(){
        return this.height
    }setX(x){
        this.x=x
    }getX(){
        return this.x
    }setY(y){
        this.y=y
    }getY(){
        return this.y
    }getChuVi(){
        return (this.height+this.width)*2
    }
    getDienTich(){
        return (this.width*this.height)
    }

    DrawRectangle (ctx){
        ctx.beginPath();
        ctx.strokeStyle='green'
        ctx.strokeRect(this.x,this.y,this.width,this.height);
        ctx.closePath();

    }
}






