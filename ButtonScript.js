import { DATA } from "/ButtonData.js";

const Button_Window = document.querySelector(".BUTTON_WINDOW");

DATA.forEach(element => {
  if (element.Image) { 
    const Image = document.createElement("img");
    Image.src = element.Image;
    Image.classList.add("Icon_Button");

    Image.addEventListener("click", () => {
      if (element.Name === 'Email') {
        const subject = encodeURIComponent("DDZ - ");
        const body = encodeURIComponent("Hi Dylann, I saw a video recently, and wanted to let you know..");
        

        window.location.href = `mailto:${element.URL}?subject=${subject}&body=${body}`;
        
      } else {
        const targetLink = element.URL; 
        
        if (targetLink) {
          const cleanURL = targetLink.startsWith('http') ? targetLink : `https://${targetLink}`;
          window.open(cleanURL, "_blank");
        }
      }
    });

    Button_Window.appendChild(Image);
  }
});
