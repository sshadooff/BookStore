<template>
    <header class="header-class">
        <div class="header-left-section">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="logo">
            </router-link>
        </div>

        <div class="header-center-section">
            <div class="header-center-section-location">
                <a href="#" class="header-location">
                    <svg class="header-location-icon" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="Location_On" data-name="Location On">
                            <g>
                            <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"/>
                            <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"/>
                            </g>
                        </g>
                    </svg>
                    <span>Белгород</span>
                </a>
            </div>
            <div class="header-center-section-search">
                <router-link to="/bookcatalog">
                    <svg class="fill-class header-bookcatalog-class" fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                        <path d="M237.47852,194.54l-8.28223-30.91016h0L196.06787,39.99023a20.02074,20.02074,0,0,0-24.49463-14.14062l-29.5459,7.91663A19.92737,19.92737,0,0,0,128,28H96a19.86774,19.86774,0,0,0-8,1.68152A19.86774,19.86774,0,0,0,80,28H48A20.02229,20.02229,0,0,0,28,48V208a20.02229,20.02229,0,0,0,20,20H80a19.86774,19.86774,0,0,0,8-1.68152A19.86774,19.86774,0,0,0,96,228h32a20.02229,20.02229,0,0,0,20-20V138.78638l19.93213,74.38842a19.99048,19.99048,0,0,0,24.49463,14.14161l30.91015-8.28223h0A20.02181,20.02181,0,0,0,237.47852,194.54ZM161.09131,94.91479l23.18262-6.21142,18.63476,69.54712-23.18213,6.21191ZM173.9209,50.06641l4.1416,15.45532-23.18262,6.21142-4.14111-15.45483ZM124,164H100V52h24ZM76,52V68H52V52ZM52,92H76V204H52Zm48,112V188h24v16Zm90.0791-.90039L185.938,187.64417l23.18213-6.21192,4.14111,15.45545Z"/>
                    </svg>
                </router-link>
                <input class="header-search" type="text" placeholder="Поиск">
                <button type="submit" class="search-button">
                    <svg class="magnifying-glass-icon" width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="var(--ci-primary-color, #000000)" d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" class="ci-primary"/>
                    </svg>
                </button>
            </div>
        </div>

        <div class="header-right-section">
            <router-link to="/favorites">
                <svg class="stroke-class" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3C4.23858 3 2 5.21619 2 7.95C2 10.157 2.87466 15.3947 11.4875 20.6903C11.7994 20.8821 12.2006 20.8821 12.5125 20.6903C21.1253 15.3947 22 10.157 22 7.95C22 5.21619 19.7614 3 17 3C14.2386 3 12 6 12 6C12 6 9.76142 3 7 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <router-link to="/login">
                <svg class="stroke-class" width="800px" height="800px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc/>
                    <g>
                    <circle cx="16" cy="16" fill="none" r="15" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <path d="M26,27L26,27   c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <circle cx="16" cy="11" fill="none" r="6" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    </g>
                </svg>
            </router-link>
            <router-link to="/basket">
                <svg class="stroke-class" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.31063 11.2425C2.15285 10.6114 2.63021 10 3.28078 10H20.7192C21.3698 10 21.8472 10.6114 21.6894 11.2425L19.8787 18.4851C19.6561 19.3754 18.8562 20 17.9384 20H6.06155C5.14382 20 4.34385 19.3754 4.12127 18.4851L2.31063 11.2425Z" stroke="#000000" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M9 14V16" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    <path d="M15 14V16" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    <path d="M6 10L10 4" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    <path d="M18 10L14 4" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header-class {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-size: 17px;
    box-sizing: border-box;
    background-color: #f8f8f8;
    border-bottom: 1px solid #eee;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.header-left-section img {
    height: 70px;
}

.header-center-section {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
}

.header-center-section-location {
    display: flex;
    margin-bottom: 5px;
}

.header-center-section-location svg {
    height: 20px;
    width: 20px;
    transition: fill 0.3s ease;
}

.header-location {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 17px;
    cursor: pointer;
    gap: 5px;
    transition: color 0.3s ease;
}

.header-location:hover {
    color: #B7CEB2;
}

.header-location:hover .header-location-icon {
    fill: #B7CEB2;
}

.header-center-section-search {
    display: flex;
    align-items: stretch;
    width: 80%;
}

.header-search {
    flex-grow: 1;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: none;
    font-size: 16px;
    margin-left: 20px;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    outline: none;
}

.header-search:focus {
    border-color: #B7CEB2;
    box-shadow: 0 0 8px rgba(183, 206, 178, 0.5);
}

.search-button {
    padding: 0 15px;
    background-color: #B7CEB2;
    border: 1px solid #ccc;
    border-left: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s ease;
    flex-shrink: 0;
}

.search-button:hover {
    background-color: #a4c09d;
}

.magnifying-glass-icon {
    width: 25px;
    height: 25px;
}

.header-right-section {
    display: flex;
    gap: 20px;
}

.stroke-class,
.fill-class {
    width: 40px;
    height: 45px;
    transition: transform 0.3s ease;
}

.stroke-class path,
.stroke-class circle,
.fill-class path {
    transition: stroke, fill 0.3s ease;
}

.stroke-class:hover circle,
.stroke-class:hover path {
    stroke: #B7CEB2;
}

.fill-class:hover circle,
.fill-class:hover path {
    fill: #B7CEB2;
}

.stroke-class:hover,
.fill-class:hover {
    transform: scale(1.2);
}
</style>