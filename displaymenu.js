// Function to generate the menu HTML
function generateMenu() 
{
    let menuHTML = `
        <nav>
            <img src="menu-icon.svg" height="32" width="32" alt="" class="burger-menu">

            <!-- Menu Home Screen - Home -->
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>

                <!-- Menu Password Tools -->
                <li class="dropdown">
                    <a href="#">Tools</a>
                    <ul class="dropdown-menu">
                        <li><a href="mpg.html">Memorable Password Generator</a></li>
                        <li><a href="rpg.html">Random Password Generator</a></li>
                        <li><a href="pwdtester.html">Password Tester</a></li>
                        <li><a href="pg.html">PIN Generator</a></li>
                        <li><a href="https://neal.fun/password-game/" target="_blank" rel="noopener noreferrer"">Password Game</a></li>
                    </ul>
                </li>

                <!-- Menu Help -->
                <li class="dropdown2">
                    <a href="#">Help</a>
                    <ul class="dropdown-menu2">
                        <li><a href="info.html">About</a></li>
                        <li><a href="secinfo.html">Infromation</a></li>
                        <li><a href="pininfo.html">PIN Chart</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="logo">
            <div class="logo1"><img src="web-rated.png" height="32" width="32"></div>
            <div class="logo2">
                <h3 class="logo2_1">Web-Rated Password Tools</h3>
            </div>
        </div>`;
    return menuHTML;
}
  
// Function to render the menu in the specified container
function renderMenu(containerId) 
{
    const menuHTML = generateMenu();
    document.getElementById(containerId).innerHTML = menuHTML;
}