const control = Array.from(document.querySelectorAll('.product__quantity-control'));
const addBtn = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');
const mainCart = document.querySelector('.cart');


const save = () => {
    const product = Array.from(document.querySelectorAll('.cart__product'));

    let saveArr = product.map((el) => {
        return {
            id: el.dataset.id,
            count: el.querySelector('.cart__product-count').textContent,
            img: el.querySelector('.cart__product-image').src
        }
    });

    localStorage.setItem('cart', JSON.stringify(saveArr));
}

const load = () => {
    const data = JSON.parse(localStorage.getItem('cart'));

    if (!data) return;

    data.forEach((item) => {
        cart.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${item.id}">
                <img class="cart__product-image" src="${item.img}">
                <div class="cart__product-count">${item.count}</div>
                <a href="#" class="btn__delete">&times;</a>
            </div>`);
    })
}



const isCart = () => {
    if (cart.querySelector('.cart__product')) {
        mainCart.classList.remove('hidden');
    } else {
        mainCart.classList.add('hidden');
    }
}

load();
isCart();


control.forEach((el) => {
    el.addEventListener('click', (e) => {
        const value = e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        if (e.target.classList.contains('product__quantity-control_dec') && +value.textContent > 1) {
            value.textContent = +value.textContent - 1;
        } else if (e.target.classList.contains('product__quantity-control_inc')) {
            value.textContent = +value.textContent + 1;
        }
    })
});

addBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
        const element = e.target.closest('.product');
        const id = element.dataset.id;
        const img = element.querySelector('.product__image');
        const value = +element.querySelector('.product__quantity-value').textContent;
        const hasProduct = cart.querySelector(`.cart__product[data-id="${id}"]`);
        let targetProduct;

        if (hasProduct) {
            const count = hasProduct.querySelector('.cart__product-count');
            count.textContent = +count.textContent + value;
            targetProduct = hasProduct;
        } else {
            cart.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img.src}">
                <div class="cart__product-count">${value}</div>
                <a href="#" class="btn__delete">&times;</a>
            </div>`);
            targetProduct = cart.querySelector(`.cart__product[data-id="${id}"]`);
        }
        save();
        isCart();


        const imgClone = img.cloneNode(true);
        document.body.append(imgClone);
        imgClone.style.position = 'fixed';
        const rectImg = img.getBoundingClientRect();
        imgClone.style.left = rectImg.left + 'px';
        imgClone.style.top = rectImg.top + 'px';
        const rectCart = targetProduct.getBoundingClientRect();
        imgClone.style.transition = 'all 0.2s linear';
        requestAnimationFrame(() => {
            imgClone.style.left = rectCart.left + 'px';
            imgClone.style.top = rectCart.top + 'px';
        });
        setTimeout(() => {
            imgClone.remove();
        }, 200);
    })
});

cart.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn__delete');

    if (btn) {
        btn.closest('.cart__product').remove();
    }
    save();
    isCart();
});