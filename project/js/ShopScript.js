
const products = [
    {
        ProductID: 1, 
        Name: "Data Dynamo", 
        AnyUseData: "16GB", 
        Calls: "Unlimited Local Calls", 
        YouTubeData: "Unlimited", 
        SocialMediaData: "Unlimited", 
        SpotifyData: "Unlimited", 
        TikTokData: "10GB", 
        Price: "USD $20" 
    },


    { 
        ProductID: 2, 
        Name: "Byte Boost", 
        AnyUseData: "50GB", 
        Calls: "2500 Voice Minutes", 
        Price: "USD $15" 
    }, 

    { 
        ProductID: 3, 
        Name: "Alcatel Linkzone 2 Wi-Fi 4g LTE Hotspot", 
        Model: "Alcatel Linkzone 2 (also known as Alcatel L100US)", 
        _4gSpeed: "Up to 150Mbps", 
        Battery: "4500 mAh", 
        Dimensions: '4.13" x 2.60" x 0.75"', 
        Weight: "5.15 oz (146g)", 
        Color: "Black", 
        Coverage: "Up to 3,000 square meters",
        InternetConnectionSharing:  "You can connect up to 16 Wi-Fi devices simultaneously", 
        SimCardMode: "Plug in a Micro SIM card", 
        Price: "USD $39.99"
    },

    { 
        ProductID: 4, Name: "KuWFi 4G LTE Unlocked Wi-Fi Hotspot", 
        Model: "KuWFi L100US", 
        _4gSpeed: "Up to 150Mbps", 
        Battery: "2400mAh lithium battery (working time: 5-8 hours)",
        Dimensions: '2.48" L x 0.57" W x 3.86" H', 
        Weight: "50 grams", 
        Color: "White", 
        Coverage: "Powerful coverage of up to 3,000 square meters", 
        InternetConnectionSharing:  "Supports up to 32 WiFi users", 
        SimCardMode: "Plug in a Micro SIM card", 
        Price: "USD $49.98" 
    }
];

// console.log("This is the name of the first object inside the array of products: ", products[0].Name);
// console.log("This is the name of the second object inside the array of products: ", products[1].Name);
// console.log("This is the name of the third object inside the array of products: ", products[2].Name);
// console.log("This is the name of the fourth object inside the array of products: ", products[3].Name);


var currentCart; 
// let x = 0; let text; 
let text2 = "";
// console.log("Array After Initialized: ", currentCart); //Displays the array contents
// let stCurrentCart = JSON.stringify(currentCart);
// localStorage.setItem("products", stCurrentCart); //Converts array to string before adding to local storage
// console.log("Array After Stringify: ", stCurrentCart); //Displays the array contents

function addToCart(productID) {
   currentCart = localStorage.getItem("products") || "[]";
   let newCurrentCart = JSON.parse(currentCart);
   console.log("Shopping Cart At Program Start: ", newCurrentCart);
   newCurrentCart.push(productID);
   console.log("Product ID Stored In Cart: ", productID);
//    let i = x+1;
//    text = "Shopping Cart After Pass: " + i + " ";
//   console.log(text);
//   console.log("Array After Input: ", newCurrentCart); //Displays the array contents
   localStorage.setItem("products", JSON.stringify(newCurrentCart)); //Stores the cart array
//    x++;
}
function showPlans ()
//This method accesses the user input Array and and passes each
// user input to a function that displays the matching products’ details

{ let stArray = localStorage.getItem("products") || "[]";
console.log("Array After Removing From Local Storage: ", stArray);

let parsedArray = JSON.parse(stArray); // Convert the user input array string to a JavaScript object
console.log("Array After Conversion To A JavaScript Object: ", parsedArray);

parsedArray.forEach(displayplan); //passes each user selected productID to a function for display
text2 = "";
}

function displayplan(productID) {
//Here, we define a function which uses the user input (productID’s) 
//passed to it to find the correct product for displaying the product details. 

const productDisplay = document.getElementById("product-container"); //find an element placeholder and assign to variable 
console.log("Output Element: ", productDisplay); //Shows the placeholder element "product-container"
let i = 1;

for (const product of products){  
let text = "This is the name of the object inside the for loop: ";

text += product.Name + " during pass: " + i;
console.log(text);  
i++;             
if (productID == product.ProductID)                                                                                                                                                                                                                                                                                                                                     
{
// console.log("Currently building text2 string for the hotspot units... ");
// console.log("Current HTML Found In text2 before building text2: ",text2);
// text2 += "<p>" + "<h3>" + product.Name + "</h3>" + "<ul>" +
// "<li>" + "Price: " + product.Price + "</li>" + "<li>" + "Model: " + product.Model + "</li>" +
// "<li>" + "4G Speed: " + product._4gSpeed + "</li>" + "<li>" + "Battery: " + product.Battery + "</li>" +
// "<li>" + "Dimensions: " + product.Dimensions + "</li>" + "<li>" + "Weight: " + product.Weight + "</li>" +
// "<li>" + "Color: " + product.Color + "</li>" + "<li>" + "Coverage: " + product.Coverage + "</li>" +
// "<li>" + "Internet Connection Sharing: " + product.InternetConnectionSharing + "</li>" + "<li>" + 
// "Sim Card Mode: " + product.SimCardMode + "</li>" 
// + "</ul>" + "</p>";
text2 += 
    '<div class="card">' +
        `<h3>${product.Name}</h3>`+
        '<ul>'+
            (product.AnyUseData? `<li><strong>Any-Use Data:</strong> ${product.AnyUseData}</li>` : "")+
            (product.Calls? `<li><strong>Calls:</strong> ${product.Calls}</li>` : "")+
            (product.Model? `<li><strong>Model:</strong> ${product.Model}</li>` : "")+
            (product._4gSpeed? `<li><strong>Speed:</strong> ${product._4gSpeed}</li>` : "")+
            (product.YouTubeData? `<li><strong>YouTube Data:</strong> ${product.YouTubeData}</li>` : "")+
            (product.Battery? `<li><strong>Battery:</strong> ${product.Battery}</li>` : "")+
            (product.Dimensions? `<li><strong>Dimensions:</strong> ${product.Dimensions}</li>` : "")+
            (product.Weight? `<li><strong>Weight:</strong> ${product.Weight}</li>` : "")+
            (product.Color? `<li><strong>Color:</strong> ${product.Color}</li>` : "")+
            (product.InternetConnectionSharing? `<li><strong>Internet Connection Sharing:</strong> ${product.InternetConnectionSharing}</li>` : "")+
            (product.SimCardMode? `<li><strong>Sim Card Mode:</strong> ${product.SimCardMode}</li>` : "")+
            (product.SocialMediaData? `<li><strong>Social Media Data:</strong> ${product.SocialMediaData}</li>` : "")+
            (product.SpotifyData? `<li><strong>Spotify Data:</strong> ${product.SpotifyData}</li>` : "")+
            (product.TikTokData? `<li><strong>TikTok Data:</strong> ${product.TikTokData}</li>` : "")+
            (product.Price? `<li><strong>Price:</strong> <h3>${product.Price}</h3></li>` : "")+
            

        '</ul>'+
    '</div>';
// console.log("Current HTML Found In text2 after text2 is built: ",text2);

}
// else
// { 
// if (productID == product.ProductID && productID == 2){
// console.log("Currently building text2 string for the 2nd data plan... ");
// console.log("Current HTML Found In text2 before building text2: ",text2);
// text2 += "<p>" + "<h3>" + product.Name + "</h3>" + "<ul>" +
// "<li>" + "Price: " + product.Price + "</li>" + "<li>" + "Any-Use Data: " + product.AnyUseData + "</li>" +
// "<li>" + "Calls: " + product.Calls + "</li>" + "</ul>" + "</p>";


// console.log("Current HTML Found In text2 after text2 is built: ",text2);
// }

// else
// { 
// if (productID == product.ProductID && productID == 1){
// console.log("Currently building text2 string for the 1st data plan... ");
// console.log("Current HTML Found In text2 before building text2: ",text2);

// text2 += `
//     <div class="card">
//         <h3>${product.Name}</h3>
//         <ul>           
//             <li><strong>Any-Use Data:</strong> ${product.AnyUseData}</li>
//             <li><strong>Calls:</strong> ${product.Calls}</li>
//             <li><strong>YouTube Data:</strong> ${product.YouTubeData}</li>
//             <li><strong>Social Media Data:</strong> ${product.SocialMediaData}</li>
//             <li><strong>Spotify Data:</strong> ${product.SpotifyData}</li>
//             <li><strong>TikTok Data:</strong> ${product.TikTokData}</li>
//             <li><strong>Price:</strong> <h3>${product.Price}</h3></li>
//         </ul>
//     </div>
// `;



// console.log("Current HTML Found In text2 after text2 is built: ",text2);
// }
// }

// }


}
productDisplay.innerHTML = text2;

}



