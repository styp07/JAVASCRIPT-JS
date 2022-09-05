class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div')
        element.innerHTML = `
            <div class="list__content">
                <div class="list__body">
                    <strong class="list__strong">Product Name</strong>: ${product.name}
                    <strong class="list__strong">Product Price</strong>: ${product.price}
                    <strong class="list__strong">Product Year</strong>: ${product.year}
                    <a href="#" class="list__delete" name="delete">Delete</a>
                <div>
                </div>
        `
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        document.getElementById('product-form').reset()
    }

    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.remove();
            this.showMessage('Product Delete Successfully', 'red')
        }
    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `message message__${cssClass}`;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.container');
        document.querySelector('#app')
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.message').remove();
        }, 2000);
    }
}

document.getElementById('product-form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();

    if(name === '' || price === '' || year === '' ){
        return ui.showMessage('Complete Fields, Please', 'blue')
    }

    ui.addProduct(product)
    ui.showMessage('Product Added Successfully', 'green')

    e.preventDefault();
})

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})