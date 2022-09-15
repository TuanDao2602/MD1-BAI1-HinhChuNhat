class emperature{
    doC;

    constructor(doC) {
        this.doC = doC;

    }
    setDoC(doC){
        this.doC=doC;
    }getDoC(){
        return this.doC
    }getDoF(){
        return (this.doC * 1.8)+32;
    }getDoKeVin(){
        return (this.doC +273.15);
    }
}