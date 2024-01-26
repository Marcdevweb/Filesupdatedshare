export function cart() {
    return {
      init() {
        alpine.data('leases', () => {
            leases:[
                { id: 'L001', price: 995.00 },
                { id: 'L002', price: 995.00 }
            ]
        });

        alpine.data('products', () => {
            products:[]
        });
      }
    }
}