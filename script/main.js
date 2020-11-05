"use strict";

(function() {

    const btnBurger = document.querySelector(".btn-burger");
    const catalog = document.querySelector(".catalog");
    const overlay = document.querySelector(".overlay");
    const btnClose = document.querySelector(".btn-close");
    // const catalogList = document.querySelector(".catalog-list");
    const subCatalog = document.querySelector(".subcatalog");
    const subCatalogHeader = document.querySelector(".subcatalog-header");
    const btnReturn = document.querySelector(".btn-return");



    function openMenu(e) {
        catalog.classList.add("open");
        overlay.classList.add("active");
    }

    function closeMenu(e) {
        catalog.classList.remove("open");
        overlay.classList.remove("active");
        closeSubmenu();
    }


    function openSubMenu(e) {
        e.preventDefault();
        const itemList = e.target.closest(".catalog-list__item");
        if(itemList) {
            subCatalogHeader.innerHTML = itemList.innerHTML;
            subCatalog.classList.add("subopen");
        }
    }


    function closeSubmenu(e) {
        subCatalog.classList.remove("subopen");
    }

    btnBurger.addEventListener("click", openMenu);
    btnClose.addEventListener("click", closeMenu);
    catalog.addEventListener("click", openSubMenu);
    btnReturn.addEventListener("click", closeSubmenu);























})();