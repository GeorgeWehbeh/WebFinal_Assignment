// var food = [
//     {  
//     Name: "Salmon Based Diet",
//     description: "High protien, low calorie, and absolutely delicious! These meals are to die for and are well worth the price. They also come with salad sides in order to stock up on that absolutely valuble nutrition!",
//     price: "$199.99 /mo",
//     itemNo: 1,
//     image: "./images/mealPack0",
//     topPackage: false
// },
//     {
//     Name: "Steak Diet",
//     description: "Highest protein and calorie portions to support massive muscle gain, and unstopable momentum on your grind to become absolutely ripped! You'll definately enjoy this one alot.",
//     price: "$299.99 /mo",
//     itemNo: 2,
//     image: "./images/mealPack1",
//     topPackage: false
// },
// {
//     Name: "Thanksgiving Diet",
//     description: "High fat, high carb meals with immense protein to achieve and sustain the ultimate gains that one can only hope of achieving on thanksgiving... or on this thanksgiving diet!",
//     price: "from $149.99 /mo",
//     itemNo: 3,
//     image: "./images/mealPack2",
//     topPackage: false
// },

// {
//     Name: "Taco Tuesday Diet",
//     description: "High carb, rich in nutrients with fat-burning profiles to support massive fat loss and keep you on track to crushing those new years resolutions and proving everyone else wrong!",
//     price: "$129.99 /mo",
//     itemNo: 4,
//     image: "./images/mealPack3",
//     topPackage: false
// },

// {
//     Name: "Mama Mia Pasta Diet",
//     description: "By far the hottest mixtape... I mean package... ever dropped! Lots of carbs, sauce, cheese, love. What more could you ever want to eat! Like seriously take a moment to think about it, theres a reason it's our top diet.",
//     price: "$189.99 /mo",
//     itemNo: 5,
//     image: "./images/mealPack4",
//     topPackage: true
// },

// {
//     Name: "College Student Noodle Diet",
//     description: "A super nutrient packed meal, and a wonderful choice for those on a budget who are not open to cheating on their diet just because school is cheating on their wallet! Give it a try, your pocket wont even notice but your stomach will! ",
//     price: "$99.99 /mo",
//     itemNo: 6,
//     image: "./images/mealPack5",
//     topPackage: false
// }];

// window.onload = function() {

//     for (var i = 0; i < food.length; i++){
//     var element1 = document.createElement("div");
//     element1.setAttribute("id", "menuItemDiv" + i);
//     document.querySelector("#menuitems").appendChild(element1);

//     var Mimage = document.createElement("img");
//     var src = food[i].image + '.jpg';
//     Mimage.setAttribute("id", "pic");
//     Mimage.setAttribute('src', src);
//     Mimage.setAttribute('alt', src);
//     document.querySelector("#menuItemDiv" + i).appendChild(Mimage);

//     var MName = document.createElement("p");
//     MName.setAttribute("id", "element");
//     MName.textContent = food[i].Name;
//     document.querySelector("#menuItemDiv"  + i).appendChild(MName);

//     var MDescription = document.createElement("p");
//     MDescription.setAttribute("id", "element");
//     MDescription.textContent = "Description: " + food[i].description;
//     document.querySelector("#menuItemDiv"  + i).appendChild(MDescription);

//     var MPrice = document.createElement("p");
//     MPrice.setAttribute("id", "element");
//     MPrice.textContent = "Price: " + food[i].price;
//     document.querySelector("#menuItemDiv"  + i).appendChild(MPrice);
// if(food[i].topPackage == true){
//     var Mtop = document.createElement("p");
//     Mtop.setAttribute("id", "elementTop");
//     Mtop.textContent = "Top Package: ";
//     document.querySelector("#menuItemDiv"  + i).appendChild(Mtop);


//     var Mtopimg = document.createElement("img");
//     var Topsrc = './images/topMenu.jpg';
//     Mtopimg.setAttribute("id", "topimg");
//     Mtopimg.setAttribute('src', Topsrc);
//     Mtopimg.setAttribute('alt', Topsrc);
//     document.querySelector("#menuItemDiv"  + i).appendChild(Mtopimg);
// }
//     }
// }