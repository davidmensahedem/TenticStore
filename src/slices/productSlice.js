import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const allProducts = [
    {
        "id": "1",
        "productTitle": "Dreaming",
        "description": "This is a masterpiece of an indigenous visual culture.",
        "imageUrl": "images/dreaming.webp",
        "category": "Arts",
        "price": "100",
        "oldprice": "150",
        "quantity": "30",
        "isTopSelling": true,
        "isTrending": true
    },
    {
        "id": "2",
        "productTitle": "Marketplace",
        "description": "An art about market places",
        "imageUrl": "images/marketplace.webp",
        "category": "Arts",
        "price": "170",
        "oldprice": "190",
        "quantity": "30",
        "isTopSelling": false,
        "isTrending": true
    },
    {
        "id": "3",
        "productTitle": "Studio",
        "description": "Bringing together all artworks indigenous cultures and ideas. Creating an ecosystem of sustainable and impactful projects.",
        "imageUrl": "images/studio.webp",
        "category": "Musics",
        "price": "200",
        "oldprice": "220",
        "quantity": "30",
        "isTopSelling": false,
        "isTrending": true
    },
    {
        "id": "4",
        "productTitle": "Prom",
        "description": "The People's Republic of Movies (PROM) is a virtual and decentralised ecosystem helping creatives to finance and launch their movie projects.",
        "imageUrl": "images/prom.webp",
        "category": "Movies",
        "price": "350",
        "oldprice": "370",
        "quantity": "30",
        "isTopSelling": true,
        "isTrending": false
    },
    {
        "id": "5",
        "productTitle": "IndigeNFT",
        "description": "A collaboration uniting indigenous communities through culture, art, technology and innovation, launching on international Day of the World's indigenous Peoples, 9th August 2022.",
        "imageUrl": "images/indigi_art.webp",
        "category": "Arts",
        "price": "311",
        "oldprice": "333",
        "quantity": "30",
        "isTopSelling": true,
        "isTrending": false
    },
    {
        "id": "6",
        "productTitle": "Number#1",
        "description": "A curate NFT marketplace on the Bitcoin blockchain featuring Chemical X, Cara Delevingne, Fatboy Slim, Dave Stewart and Orbital.",
        "imageUrl": "images/num1.webp",
        "category": "Movies",
        "price": "311",
        "oldprice": "333",
        "quantity": "30",
        "isTopSelling": true,
        "isTrending": false
    }
];

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
    fetch("../Data/collections.json")
        .then(res => res.json()).then(res => res);
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: allProducts,
        trending:[],
        topSelling:[],
        Cart:[],
        error: ""
    },
    extraReducers: (builder) => {
        builder.addCase("fetchProducts.fulfilled", (state, action) => [
            console.log("Fulfilled", action.payload)
        ]);
    },
    reducers: {
        getProducts: (state) => state.products,
        setMainProducts: (state) => {
            state.trending = state.products.filter(product => product.isTrending);
            state.topSelling = state.products.filter(product => product.isTopSelling)
        }       
    }
});

export const { getProducts,setMainProducts } = productSlice.actions;

export default productSlice.reducer;