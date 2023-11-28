const notificationTrigger = document.querySelector("#newMessage"); // console.log(notificationTrigger);
const notificationDropdown = document.querySelector("#displayNotifications"); // console.log(notificationDropdown);
const profileTrigger = document.querySelector("#DropDownButton"); // console.log(profileTrigger);
const profileDropdown = document.querySelector("#displayProfile"); // console.log(profileDropdown);
const accordionTrigger = document.querySelector("#Arrow"); // console.log(accordionTrigger);
const accordionDropdown = document.querySelector("#Accordion"); // console.log(accordionDropdown);
const closeFreeTrialTab = document.getElementById("FreeTrialTab");
const ContentFrame = document.getElementById("AccordionBase"); // console.log(ContentFrame);
const ArrowUpIcon = document.getElementById("arrowUp");
const ArrowDownIcon = document.getElementById("arrowDown");
const allProfileMenuItems =
  profileDropdown.querySelectorAll("[role='menuitem']");
const AccordionContent = [
  {
    svg: "http://www.w3.org/2000/svg",
    img: "https://crushingit.tech/hackathon-assets/customise-store.png",
    alt: "customise-store.png",
    buttonText: "Customize theme",
    title: "Customize your online store",
    content:
      "Choose a theme and add your logo, colors, and images to reflect your brand.",
    link: " Learn more",
  },
  {
    svg: "http://www.w3.org/2000/svg",
    img: "https://crushingit.tech/hackathon-assets/product.png",
    buttonText: "Add product",
    button2Text: "Import product",
    alt: "product.png",
    title: "Add your first product",
    content:
      "Write a description, add photos, and set pricing for the products you plan to sell.",
    link: " Learn more",
  },
  {
    svg: "http://www.w3.org/2000/svg",
    img: "https://crushingit.tech/hackathon-assets/website.png",
    buttonText: "Add domain",
    alt: "website.png",
    title: "Add a custom domain",
    content:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    link: " Learn more",
  },
  {
    svg: "http://www.w3.org/2000/svg",
    img: "https://crushingit.tech/hackathon-assets/name-store.png",
    buttonText: "Name store",
    alt: "name-store.png",
    title: "Name your store",
    content:
      "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
    link: " Learn more",
  },
  {
    svg: "http://www.w3.org/2000/svg",
    img: "https://crushingit.tech/hackathon-assets/payment.png",
    buttonText: "Set up payment",
    alt: "payment.png",
    title: "Set up a payment provider",
    content:
      "Choose a payment provider to start accepting payments. You'll need to create an account with the payment provider and set it up with your Shopify store.",
    link: " Learn more",
  },
];

let currentOpenTab = null;
let checkBoxButton;
const CLASS_HIDDEN = "hidden";
const CLASS_MARKED_DONE = "done";

function handleNotifications() {
  profileDropdown.classList.remove("profile-active");
  notificationDropdown.classList.toggle("notification-active");
}

// function handleProfileEscapeKey(event) {
//   if (event.key === "Escape") {
//   }
// }

function handleAccountDetails() {
  const isProfileExpanded =
    profileTrigger.attributes["aria-expanded"].value === "true";

  notificationDropdown.classList.remove("notification-active");
  profileDropdown.classList.toggle("profile-active");

  if (isProfileExpanded) {
    profileTrigger.ariaExpanded = "false";
    profileTrigger.focus();
  } else {
    profileTrigger.ariaExpanded = "true";
    allProfileMenuItems.item(0).focus();
    // handleProfileEscapeKey();
  }
}

function handleFreeTrial() {
  closeFreeTrialTab.style.display = "none";
}

function handleCollapsibleAccordion() {
  ArrowUpIcon.classList.toggle("arrowUp-active");

  if (ArrowUpIcon.classList.contains("arrowUp-active")) {
    ArrowDownIcon.classList.add("arrowUp");
  } else {
    ArrowDownIcon.classList.remove("arrowUp");
  }

  accordionDropdown.classList.toggle("guideProcess-active");

}

AccordionContent.forEach((element, i) => {
  const isActive = i === 0 ? "active " : "";

  accordionTabHTML = `<div  role='menuitem'  aria-label="Accordion-Tabs" id="accordionTab${i}" class="Base tab  ${isActive} ">
    <div   class="description ">
    
        <div >
             <span id="checkboxStatus" aria-live="polite" ></span>

            <button onclick="handleButtonChecker(${i})" id="checkBoxLoader${i}" 
            class="CheckBox" aria-label="${element.title}">
            <svg
            aria-hidden="true"
            class="brokenLinesIcon"
            id="brokenLinesIcon${i}"
              xmlns="${element.svg}"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#8A8A8A"
                stroke-width="2.08333"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="5 5"
              />
            </svg>

            <svg
            aria-hidden="true"   id="loadingIcon${i}" class="loadingIcon hidden" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none">
  <path d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg     aria-hidden="true" id="completedIcon${i}" class="completedIcon hidden" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
    ></path>
  </svg>

            </button>
      </div>
        <div class="maincontent  ">
          <span  onclick="handleAccordionToggle(${i})" class="contentTitle">${
    element.title
  }</span>
          <span class="tab-content  ">
             <span>${element.content} </span> 
             <a  style="text-decoration: none; color: #005BD3" href="/index.html">${
               element.link
             }</a>
          </span>

     
          
          <div class=" tab-content">
           <span class="buttons">  
           <button class="tab-content buttonsHoverDefault" >${
             element.buttonText
           }</button>   
             
           <button class="buttonException tab-content buttonsHoverImport">  ${
             element?.button2Text ? element.button2Text : ""
           } </button>
     
           </span> 


         
      
               </div>
         
        </div>
      </div>

    <div class="customImage tab-content ">
      <img src="${element.img}" alt="${element.alt}" />
    </div>

</div>`;

  ContentFrame.innerHTML += accordionTabHTML;
});

function handleAccordionToggle(i) {
  const tab = document.querySelector(`#accordionTab${i}`);
// tab.classList.remove("active");
  tab.classList.add("active");
// console.log(tab);
  if (currentOpenTab !== null && currentOpenTab !== tab) {
  
    currentOpenTab.classList.remove("active");
  
  }

  currentOpenTab = tab.classList.contains("active") ? tab : null;
}


function ProgressCalculation() {
  const checkBoxButtons = document.querySelectorAll(".CheckBox");// console.log(checkBoxButtons);
  const SpanText = document.getElementById("CompletionCounter");
  const progressCounter = document.getElementById("progressBar");

  let completedTabs = 0;
  checkBoxButtons.forEach((button) => {
    if (button.classList.contains(CLASS_MARKED_DONE)) {
      completedTabs++;
    }
  });

  SpanText.innerHTML = `${completedTabs}/5 completed`;
  progressCounter.value= completedTabs; // console.log(completedTabs);
}

function handleCheckerDone(i) {
  const checkboxButtonStatus = document.querySelector("#checkboxStatus");// console.log(checkboxButtonStatus);
  const BrokenLinesIcon = document.querySelector(`#brokenLinesIcon${i}`);
  const LoadingIcons = document.querySelector(`#loadingIcon${i}`);
  const CompletedIcons = document.querySelector(`#completedIcon${i}`);
  const checkBoxButton = document.querySelector(`#checkBoxLoader${i}`); // console.log(    checkBoxButton,    BrokenLinesIcon,    LoadingIcons,    CompletedIcons,  });

  BrokenLinesIcon.classList.add(CLASS_HIDDEN);
  LoadingIcons.classList.remove(CLASS_HIDDEN);

  checkboxButtonStatus.ariaLabel = "Loading. Please Wait";

  setTimeout(() => {
    LoadingIcons.classList.add(CLASS_HIDDEN);
    CompletedIcons.classList.remove(CLASS_HIDDEN);
  

    checkBoxButton.ariaLabel = checkBoxButton.ariaLabel.replace(
      "as done",
      "as not done"
    );
    checkboxButtonStatus.ariaLabel = `Successfully Marked  ${AccordionContent[i].title}  as done`;
    checkBoxButton.classList.add(CLASS_MARKED_DONE);
    ProgressCalculation();

  }, 400);
}

function handleCheckerNotDone(i) {
  const checkboxButtonStatus = document.querySelector("#checkboxStatus");// console.log(checkboxButtonStatus);
  const checkBoxButton = document.querySelector(`#checkBoxLoader${i}`);
  const BrokenLinesIcon = document.querySelector(`#brokenLinesIcon${i}`);
  const LoadingIcons = document.querySelector(`#loadingIcon${i}`);
  const CompletedIcons = document.querySelector(`#completedIcon${i}`);

  CompletedIcons.classList.add(CLASS_HIDDEN);
  LoadingIcons.classList.remove(CLASS_HIDDEN);

  checkboxButtonStatus.ariaLabel = "Loading. Please Wait";

  setTimeout(() => {
    LoadingIcons.classList.add(CLASS_HIDDEN);
    BrokenLinesIcon.classList.remove(CLASS_HIDDEN);
    checkBoxButton.ariaLabel = checkBoxButton.ariaLabel.replace(
      "as not done",
      "as done"
    );
    checkboxButtonStatus.ariaLabel = `Successfully Marked ${AccordionContent[i].title} as not done`;

   
    checkBoxButton.classList.remove(CLASS_MARKED_DONE);
    ProgressCalculation();

  }, 400);
}

function handleButtonChecker(i) {
  const checkBoxButton = document.querySelector(`#checkBoxLoader${i}`);
  const markedAsDone = checkBoxButton.classList.contains(CLASS_MARKED_DONE);
  if (markedAsDone) {
    handleCheckerNotDone(i);
  } else {
    handleCheckerDone(i);
  }

  handleAccordionToggle(i);

  ProgressCalculation();
}

// window.onclick = function (event) {
//   if (
//     !event.target.matches(".Bell") &&
//     !event.target.matches(".bellSvg") &&
//     !event.target.matches(".bellPath")
//   ) {
//     notificationDropdown.classList.remove("notification-active");
//   }
//   if (
//     !event.target.matches(".Profile") &&
//     !event.target.matches(".ProfileImage") &&
//     !event.target.matches(".ProfileName")
//   ) {
//     profileDropdown.classList.remove("profile-active");
//   }
// };
