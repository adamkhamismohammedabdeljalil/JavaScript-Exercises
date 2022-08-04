
function createStore() {
  let storeItems=[]
  return function(item){
    storeItems.push(item)
    for(let i=0; i<storeItems.length;i++){
      console.log(storeItems[i])

    }
  }
}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat)

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
