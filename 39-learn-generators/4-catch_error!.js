function* upper(items) {
    // your code goes here
    for(let i = 0; i < items.length; i++)
    {
        let upperItem;
        try{ upperItem = items[i].toUpperCase(); } 
        catch (error) { upperItem = null; }
        yield upperItem;
    }
}

const bad_items = ['a', 'B', 1, 'c'];

for (let item of upper(bad_items)) 
    console.log(item);
