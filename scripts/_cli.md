ng new angular-blocks --routing -s -S
ng g m about routing true
ng g c about/about-container
ng g c about/about-container/about-info
ng g c about/about-container/about-links
ng g m home routing true
ng g c home/home-container
ng g c home/home-container/home-dashboard
ng g m core
ng g c core/shell-container --export
ng g c core/shell-container/shell-header
ng g c core/shell-container/shell-footer
ng g c core/shell-container/shell-main
ng g s core/items-api
ng g m shared
npm install mini.css --save
ng g m base/items routing true
ng g c base/items/items-container
ng g c base/items/items-container/items-new
ng g c base/items/items-container/items-list
ng g m base/items/item routing true
ng g c base/items/item/item-container
ng g c base/items/item/item-container/item-view
