console.log("hi");

/******************************/
/*        MENU button         */
/******************************/

const menuOpenButton = document.querySelector("header > button");
const menuSluitButton = document.querySelector ("nav button");
const deNav = document.querySelector("header nav");

menuOpenButton.onclick = openMenu;
menuSluitButton.onclick = sluitMenu;

function openMenu() {
  deNav.classList.add("toonMenu");
}

function sluitMenu() {
  deNav.classList.remove("toonMenu");
}





/******************************/
/*           CURSOR           */
/******************************/


document.addEventListener('mousemove', (event) => {
  // Create a new image element for the trail
  const trail = document.createElement('img');
  trail.src = 'images/icons/bubble.png'; // Add the path to your PNG file here
  trail.classList.add('cursor-trail');

  // Set the trail's position to the cursor's position
  trail.style.left = `${event.pageX - 15}px`; // Adjust for image center
  trail.style.top = `${event.pageY - 15}px`;  // Adjust for image center

  // Append the trail to the body
  document.body.appendChild(trail);

  // Remove the trail after a short delay
  setTimeout(() => {
    trail.classList.add('fade-out');
    setTimeout(() => {
      trail.remove();
    }, 500); // Match this to the CSS transition duration
  }, 100); // Adjust the delay for how fast the trail should disappear
});