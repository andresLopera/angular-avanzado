ng new angular-blocks --routing -s -S
ng g m home routing true
ng g c home/home-container
ng g c home/home-container/home-dashboard
ng g m items routing true
ng g c items/items-container
ng g c items/items-container/items-new
ng g c items/items-container/items-list
ng g m item routing true
ng g c item/item-container
ng g c item/item-container/item-view
ng g m core
ng g c core/shell-container --export
ng g c core/shell-container/shell-header
ng g c core/shell-container/shell-footer
ng g c core/shell-container/shell-main
ng g m shared
npm install mini.css --save
