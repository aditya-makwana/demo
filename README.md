# Demo Notes
## Create theme
- Created theme using following files
`app/design/frontend/Custom/theme/registration.php`
`app/design/frontend/Custom/theme/theme.xml`
- Refine page ui with containers and common xml updates
`app/design/frontend/Custom/theme/Magento_Theme/layout/default.xml`
- Apply some text changes using translation/i18n
`app/design/frontend/Custom/theme/i18n/en_US.csv`
- Add common styles using following files
`app/design/frontend/Custom/theme/web/css/source/_extend.less`
`app/design/frontend/Custom/theme/Magento_Theme/web/css/source/_extend.less`
- Added icons used on the website
`app/design/frontend/Custom/theme/web/images/icons/account.svg`
`app/design/frontend/Custom/theme/web/images/icons/search.svg`
`app/design/frontend/Custom/theme/web/images/icons/bag.svg`
`app/design/frontend/Custom/theme/web/images/icons/heart.svg`
- Override phtml file for showing accound dropdown when user is guest/customer
`app/design/frontend/Custom/theme/Magento_Theme/templates/header/account/customer.phtml`
## Product page UI
- Update product page layout using following file
`app/design/frontend/Custom/theme/Magento_Catalog/layout/catalog_product_view.xml`
- Added Product swatch image dimention in this file
`app/design/frontend/Custom/theme/etc/view.xml`
- Customize gallery for desktop and mobile differently changed in following files
`app/design/frontend/Custom/theme/Magento_Catalog/templates/product/view/gallery-custom.phtml`
`app/design/frontend/Custom/theme/Magento_Catalog/web/template/product/view/gallery/item.html`
`app/design/frontend/Custom/theme/Magento_Catalog/web/js/custom-gallery.js`
`app/design/frontend/Custom/theme/Magento_Catalog/requirejs-config.js`
- Update UI style on PDP used following files
`app/design/frontend/Custom/theme/Magento_Swatches/web/css/source/_extend.less`
`app/design/frontend/Custom/theme/Magento_Catalog/web/css/source/_extend.less`

## Admin changes
1. Created **Configurable Product** with size and color attribute configiration.
2. For left side details with tabs is created in 
*product description > page builder > create tabs element*
3. Images uploaded from Images and Video Section from product page in admin

### Tools used:
- Magento UI
- VSC editor
- HTML/phtml
- CSS/LESS 
- JS/KnockoutJS
- Lazy Loading Images
- Animations/Transition on buttons