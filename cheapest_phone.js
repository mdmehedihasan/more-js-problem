
function cheapList(phone) {
    let cheapest = phone[0];
    for (let i = 0; i < phone.length; i++) {
        if (phone[i].price < cheapest.price) {
            cheapest = phone[i];
        }
    }
    console.log(cheapest);
}

const phone = [
    { name: 'samsung', price: 15000, camera: 10, storage: 16 },
    { name: 'nokia', price: 10000, camera: 6, storage: 8 },
    { name: 'oppo', price: 30000, camera: 20, storage: 32 },
    { name: 'xiami', price: 8000, camera: 5, storage: 4 }
];

cheapList(phone);