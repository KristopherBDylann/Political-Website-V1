import { DATA as MEMBERSHIP_DATA } from "/MembershipData.js";
import { DATA as PRODUCT_DATA } from "/ProductData.js";
import { DATA as BLOG_DATA } from "/BlogData.js";


const grabbing_right_window = document.querySelector(".RIGHT_WINDOW");



const grabbing_navigation_window = document.querySelector(".NAVIGATION_WINDOW");

const Memberships = document.createElement("div");
const Shop = document.createElement("div");
const Blogs = document.createElement("div");

Blogs.classList.add("TEXT_LARGE");
Memberships.classList.add("TEXT_LARGE");
Shop.classList.add("TEXT_LARGE");

Memberships.innerText = 'MEMBERSHIPS';
Blogs.innerText = 'BLOGS'
Shop.innerText = 'SHOP';

grabbing_navigation_window.append( Shop, Blogs );












function Adding_Membership_text_to_right_window (Blog_Title, Blog_Text, Blog_Price, Blog_Image, Button_URL) {
  
  grabbing_right_window.classList.remove('RIGHT_BLOG_WINDOW');

  grabbing_right_window.classList.add('RIGHT_SHOP_WINDOW');


  
  const Card = document.createElement("div");
  Card.classList.add("SHOP_CARD", "fade-in");


  const Title = document.createElement("div");    
  Title.classList.add("TEXT_LARGE");
  Title.innerText = Blog_Title;


  const Image = document.createElement("img");
  Image.classList.add("SHOP_IMAGE");
  Image.src = Blog_Image;


  const Price = document.createElement("div");
  Price.classList.add("TEXT_PRICE");
  Price.innerText = `$ ${Blog_Price}`;



  const Text = document.createElement("div");
  Text.classList.add("TEXT_MEDIUM");
  Text.innerText = Array.isArray(Blog_Text) ? Blog_Text.join(' ') : Blog_Text;

  const Button = document.createElement("button");
  Button.classList.add("Play_Button");
  Button.innerText = "BUY";
  

  Button.addEventListener("click", () => {
    const cleanURL = Button_URL.startsWith('http') ? Button_URL : `https://${Button_URL}`;
    window.open(cleanURL, "_blank");
  });

  Card.append(Title, Image, Price, Button, Text, );
  grabbing_right_window.appendChild(Card);
}


Shop.addEventListener("click", () => {

    grabbing_right_window.innerHTML = "";

    grabbing_right_window.classList.remove('RIGHT_BLOG_WINDOW');
    grabbing_right_window.classList.add('RIGHT_SHOP_WINDOW');


    // PRODUCTS SECTION

    const Product_Heading = document.createElement("div");
    Product_Heading.classList.add("TEXT_MEDIUM");
    Product_Heading.innerText = "PRODUCTS:";

    grabbing_right_window.appendChild(Product_Heading);





// PRODUCTS
PRODUCT_DATA.forEach(project => {
    if (project.Title && project.Text) {
        Adding_Membership_text_to_right_window(
            project.Title,
            project.Text,
            project.Price,
            project.Image,
            project.URL
        );
    }
});










    // MEMBERSHIPS SECTION

    const Membership_Heading = document.createElement("div");
    Membership_Heading.classList.add("TEXT_MEDIUM");
    Membership_Heading.innerText = "MEMBERSHIPS:";

    grabbing_right_window.appendChild(Membership_Heading);


// MEMBERSHIPS
MEMBERSHIP_DATA.forEach(project => {
    if (project.Title && project.Text) {
        Adding_Membership_text_to_right_window(
            project.Title,
            project.Text,
            project.Price,
            project.Image,
            project.URL
        );
    }
});



});





function Adding_Blog_text_to_right_window (Blog_Title, Blog_Text, Blog_Image, Button_URL) {

  grabbing_right_window.classList.remove('RIGHT_SHOP_WINDOW');

  grabbing_right_window.classList.add('RIGHT_BLOG_WINDOW');

  const Card = document.createElement("div");
  Card.classList.add("TEXT_CARD", "fade-in");


  const Title = document.createElement("div");    
  Title.classList.add("TEXT_LARGE");
  Title.innerText = Blog_Title;


  const Image = document.createElement("img");
  Image.classList.add("BLOG_IMAGE");
  Image.src = Blog_Image;

  const Text = document.createElement("div");
  Text.classList.add("TEXT_MEDIUM");
  Text.innerText = Array.isArray(Blog_Text) ? Blog_Text.join(' ') : Blog_Text;

  const Button = document.createElement("button");
  Button.classList.add("Play_Button");
  Button.innerText = "VIEW";
  

  Button.addEventListener("click", () => {
    const cleanURL = Button_URL.startsWith('http') ? Button_URL : `https://${Button_URL}`;
    window.open(cleanURL, "_blank");
  });

  Card.append(Title, Image, Text, Button);
  grabbing_right_window.appendChild(Card);
}




Blogs.addEventListener("click", () => {

Blogs.classList.add("fade-in");


grabbing_right_window.innerHTML = "";



BLOG_DATA.forEach(project => {
  if (project.Title && project.Text) {
    Adding_Blog_text_to_right_window(
      project.Title, 
      project.Text, 
      project.Image,
      project.URL
    );
  }})

})



window.addEventListener("DOMContentLoaded", () => {
  BLOG_DATA.forEach(project => {
  if (project.Title && project.Text) {
    Adding_Blog_text_to_right_window(
      project.Title, 
      project.Text, 
      project.Image,
      project.URL
    );
  }})
})