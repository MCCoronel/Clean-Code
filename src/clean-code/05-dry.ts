type size = 'S' | 'M' | 'L' | 'XL';

class Product{
    constructor(
        public name: string = '',
        public price: number = 0,
        public size : size ,
    ){}

    isProductReady(): boolean {
        for(const key in this){
            switch(typeof this[key]){
                case 'string':
                    if((<string><unknown>this[key]).length<=0) throw new Error(`${key} is empty`);

                break;
                case 'number':
                    if((<number><unknown>this[key])<=0) throw new Error(`${key} is empty`);

                break;
                default:
                    throw new Error(`${key} is not valid`);
            }
        }
        return true;
    }


    tuString(){
        // if(this.name.length<=0 ) throw new Error('name is empty');
        // if(this.price<=0 ) throw new Error('price is empty');
        // if(this.size.length<=0 ) throw new Error('size is empty');
        // return `${this.name} (${this.price}) ,${this.size}`
        if(!this.isProductReady()) return;
        return `${this.name} (${this.price}) ,${this.size}`
    
    }
}

(() => {
    
    const bluePants = new Product('Blue Pants', 10, 'S');
    console.log(bluePants.toString());
    
})()
