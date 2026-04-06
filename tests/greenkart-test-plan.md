# GreenKart E-Commerce Application Test Plan

## Application Overview

GreenKart is an e-commerce application for purchasing vegetables and fruits. The application features a product catalog, shopping cart, checkout process with country selection, promotional code functionality, and a separate "Top Deals" section with filtering, sorting, and pagination capabilities. Users can browse products, adjust quantities, add items to cart, apply discounts, and complete purchases through a multi-step checkout flow.

## Test Scenarios

### 1. Product Browsing and Catalog

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify home page displays product catalog

**File:** `tests/product-browsing/home-page-display.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/seleniumPractise/#/
    - expect: Home page loads successfully
    - expect: Product catalog is displayed with at least 20 vegetables/fruits
    - expect: Each product card shows: product image, name, price, quantity controls, and ADD TO CART button
  2. Scroll through the product list
    - expect: All products are visible and properly formatted
    - expect: Product cards are displayed in a grid layout
    - expect: No broken images or missing data

#### 1.2. Verify GreenKart header and navigation

**File:** `tests/product-browsing/header-navigation.spec.ts`

**Steps:**
  1. Verify header contains logo, search box, and navigation links
    - expect: GreenKart logo is visible
    - expect: Search box with placeholder 'Search for Vegetables and Fruits' is present
    - expect: Navigation includes: Get Shortlisted link, Top Deals link, Flight Booking link
  2. Verify cart display shows correct initial values
    - expect: Items counter shows 0 initially
    - expect: Price counter shows 0 initially

#### 1.3. Search for specific vegetables

**File:** `tests/product-browsing/search-functionality.spec.ts`

**Steps:**
  1. Click on search box and type 'Brocolli'
    - expect: Search input accepts text
    - expect: Page filters to show only Brocolli product
  2. Clear search and search for 'Tomato'
    - expect: Search results filter correctly
    - expect: Only Tomato product is displayed
  3. Search for non-existent product 'XYZ'
    - expect: No results message is displayed or product list is empty
    - expect: Application handles invalid search gracefully
  4. Clear search completely
    - expect: All products are displayed again

#### 1.4. Verify product details accuracy

**File:** `tests/product-browsing/product-details.spec.ts`

**Steps:**
  1. Examine a products: Brocolli, Cauliflower, Cucumber, Tomato
    - expect: Each product displays correct name
    - expect: Each product displays price in rupees (₹)
    - expect: Prices are reasonable (between ₹15 and ₹120)
  2. Verify product naming consistency
    - expect: Product names include size information (e.g., '- 1 Kg')
    - expect: Pricing format is consistent across all products

### 2. Shopping Cart Functionality

**Seed:** `tests/seed.spec.ts`

#### 2.1. Add single item to cart

**File:** `tests/shopping-cart/add-item-to-cart.spec.ts`

**Steps:**
  1. Navigate to home page and note initial cart state (Items: 0, Price: 0)
    - expect: Cart display shows Items: 0 and Price: 0
  2. Click ADD TO CART button for Brocolli (₹120)
    - expect: Item is added to cart
    - expect: Cart counter shows Items: 1
    - expect: Price counter shows Price: 120
  3. Click Cart link to view cart contents
    - expect: Cart page displays the added Brocolli item
    - expect: Cart shows product image, name, price, quantity (1 No.), and total (₹120)
    - expect: Remove button (×) is visible for the item

#### 2.2. Add multiple items to cart

**File:** `tests/shopping-cart/add-multiple-items.spec.ts`

**Steps:**
  1. Start with empty cart and add Brocolli (₹120), Cauliflower (₹60), and Tomato (₹16)
    - expect: Items counter updates to 3 after each addition
    - expect: Price counter shows running total: 120, then 180, then 196
  2. Navigate to cart
    - expect: All three items are displayed in the cart
    - expect: Each item shows correct price and quantity
    - expect: Total amount reflects sum of all items

#### 2.3. Adjust item quantity in product page

**File:** `tests/shopping-cart/adjust-quantity.spec.ts`

**Steps:**
  1. On home page, locate Brocolli product and note the quantity spinbutton defaults to 1
    - expect: Quantity field displays '1' by default
  2. Click '+' button to increase quantity to 3
    - expect: Quantity field updates to 3
    - expect: Quantity increases by 1 with each click
  3. Click '–' button to decrease quantity back to 1
    - expect: Quantity field decreases by 1 with each click
    - expect: Quantity cannot go below 1 (verify with additional decrements)
  4. Set quantity to 3 and click ADD TO CART
    - expect: Cart counter increases by 3
    - expect: Price counter reflects 3 units of the product

#### 2.4. Remove item from cart

**File:** `tests/shopping-cart/remove-item-from-cart.spec.ts`

**Steps:**
  1. Add Brocolli (₹120) and Tomato (₹16) to cart, total ₹136
    - expect: Cart displays both items
  2. Click the remove button (×) next to Tomato
    - expect: Tomato is removed from cart
    - expect: Only Brocolli remains
    - expect: Cart subtotal updates to ₹120
  3. Remove remaining item (Brocolli)
    - expect: Cart becomes empty
    - expect: Message or empty state is shown

### 3. Checkout and Order Flow

**Seed:** `tests/seed.spec.ts`

#### 3.1. Complete checkout flow

**File:** `tests/checkout/basic-checkout.spec.ts`

**Steps:**
  1. Add Brocolli (₹120) to cart and navigate to cart
    - expect: Cart page displays the item with ADD TO CART button
  2. Click PROCEED TO CHECKOUT button
    - expect: Checkout page loads showing order summary
    - expect: Summary displays product name (Brocolli - 1 Kg), quantity (1), unit price (120), and total (120)
  3. Verify promo code section
    - expect: Promo code input field and Apply button are visible
  4. Verify order totals
    - expect: No. of Items: 1 is displayed
    - expect: Total Amount: 120 is displayed
    - expect: Discount: 0% is shown
    - expect: Total After Discount: 120 is displayed
  5. Click Place Order button
    - expect: Order is submitted
    - expect: Country selection page appears

#### 3.2. Apply promotional code

**File:** `tests/checkout/promo-code.spec.ts`

**Steps:**
  1. Add items (₹100 total) to cart and proceed to checkout
    - expect: Checkout page loads with order summary
  2. Enter an invalid promo code (e.g., 'INVALID123') in promo code field and click Apply
    - expect: Code is processed
    - expect: Either discount is not applied or error message appears
  3. Try with another promo code value
    - expect: Application handles invalid codes gracefully
    - expect: Original total remains unchanged if code is invalid

#### 3.3. Country selection during checkout

**File:** `tests/checkout/country-selection.spec.ts`

**Steps:**
  1. Complete checkout flow until country selection page appears
    - expect: Country selection page displays 'Choose Country' dropdown
    - expect: Dropdown shows 'Select' as default option
  2. Click on country dropdown to see available options
    - expect: Dropdown opens showing list of countries (Afghanistan, Albania, etc.)
    - expect: List includes India, United States, United Kingdom, and other major countries
    - expect: Dropdown is scrollable for large list
  3. Select 'India' from dropdown
    - expect: India is selected in dropdown
  4. Verify Terms & Conditions checkbox
    - expect: Checkbox is visible with text 'Agree to the Terms & Conditions'
    - expect: Link to Terms & Conditions page is clickable

#### 3.4. Order completion workflow

**File:** `tests/checkout/order-completion.spec.ts`

**Steps:**
  1. Proceed through entire checkout: Add item → Cart → Checkout → Place Order → Select Country
    - expect: Each step transitions correctly
    - expect: All required information is retained
  2. Select a country and check the Agree to Terms & Conditions checkbox
    - expect: Checkbox becomes checked
    - expect: Proceed button is enabled
  3. Click Proceed button
    - expect: Order is processed and confirmation or success message is displayed

### 4. Top Deals Section

**Seed:** `tests/seed.spec.ts`

#### 4.1. Navigate to Top Deals page

**File:** `tests/top-deals/navigate-to-deals.spec.ts`

**Steps:**
  1. Click on 'Top Deals' link in the header navigation
    - expect: Top Deals/Offers page loads successfully
    - expect: URL changes to #/offers
  2. Verify page displays offers table with products
    - expect: Table shows column headers: Veg/fruit name, Price, Discount price
    - expect: Table displays products like Wheat, Tomato, Strawberry, Rice, Potato
    - expect: Sorting indicator shows current sort order

#### 4.2. Test sorting functionality

**File:** `tests/top-deals/sorting.spec.ts`

**Steps:**
  1. Click on 'Veg/fruit name' column header
    - expect: Column is sorted (ascending order on first click)
    - expect: Products are reordered alphabetically
  2. Click 'Veg/fruit name' column header again
    - expect: Sorting reverses to descending order
    - expect: Indicator shows new sort direction
  3. Click on 'Price' column header
    - expect: Table is now sorted by price in ascending order
  4. Click on 'Discount price' column header
    - expect: Table is sorted by discount price in ascending order

#### 4.3. Test pagination functionality

**File:** `tests/top-deals/pagination.spec.ts`

**Steps:**
  1. Verify pagination controls at the top of the table
    - expect: Pagination shows: First, Previous, page numbers (1, 2, 3, 4), Next, Last buttons
    - expect: Current page (1) is highlighted
  2. Click on page 2 button
    - expect: Page 2 is loaded
    - expect: Different set of products is displayed
    - expect: Page number indicator updates to 2
  3. Click Next button to go to next page
    - expect: Next page loads (page 3)
    - expect: Products on page 3 are different from previous pages
  4. Click Last button
    - expect: Last page (page 4) loads
    - expect: Next button is disabled on last page
  5. Click Previous button
    - expect: Previous page loads
    - expect: Products change accordingly
  6. Click First button
    - expect: Returns to page 1
    - expect: Previous button is disabled on first page

#### 4.4. Test page size selection

**File:** `tests/top-deals/page-size.spec.ts`

**Steps:**
  1. Verify 'Page size' dropdown shows default selection of 5
    - expect: Dropdown displays '5' as current selection
    - expect: Dropdown shows options: 5, 10, 20
  2. Select page size 10
    - expect: Table now displays 10 items per page
    - expect: Pagination updates accordingly (fewer pages needed)
  3. Select page size 20
    - expect: Table displays 20 items per page
    - expect: Only 1-2 pages needed total
  4. Select page size 5
    - expect: Table returns to showing 5 items per page

#### 4.5. Test search on Top Deals page

**File:** `tests/top-deals/search.spec.ts`

**Steps:**
  1. Click on Search field and type 'Wheat'
    - expect: Search results filter to show only Wheat product
    - expect: Table dynamically filters the results
  2. Clear search and type 'Potato'
    - expect: Results update to show Potato
    - expect: Search is case-insensitive
  3. Search for non-existent product 'Banana'
    - expect: Search returns no results or empty table
    - expect: Application handles no results gracefully
  4. Clear search completely
    - expect: All products are displayed again

#### 4.6. Test delivery date picker

**File:** `tests/top-deals/delivery-date.spec.ts`

**Steps:**
  1. Verify Delivery Date section at bottom of page
    - expect: Date picker with format DD/MM/YYYY is visible
    - expect: Default date shows (e.g., 3/24/2026)
  2. Increment the day spinbutton
    - expect: Day value increases
    - expect: Date updates accordingly
  3. Increment the month spinbutton
    - expect: Month value increases
    - expect: Date updates and wraps correctly if month > 12
  4. Increment the year spinbutton
    - expect: Year value increases
    - expect: Date updates to reflect new year
  5. Click navigation buttons (< and > arrows) beside date picker
    - expect: Date changes when navigation buttons are clicked
    - expect: Buttons allow quick date navigation

### 5. Edge Cases and Validations

**Seed:** `tests/seed.spec.ts`

#### 5.1. Test invalid quantity inputs

**File:** `tests/edge-cases/invalid-quantities.spec.ts`

**Steps:**
  1. On product page, try to manually edit quantity spinbutton field with invalid value (e.g., 0, -1, or text)
    - expect: Application prevents invalid entries
    - expect: Quantity field reverts to valid value or shows error
  2. Try to set quantity to very large number (999+)
    - expect: Application either accepts it or shows validation error
    - expect: System behaves consistently

#### 5.2. Test cart persistence

**File:** `tests/edge-cases/cart-persistence.spec.ts`

**Steps:**
  1. Add items to cart and navigate to different pages (Home, Top Deals, etc.)
    - expect: Cart contents are retained
    - expect: Cart counter shows correct item count and price across pages
  2. Refresh the page while items are in cart
    - expect: Items are preserved in cart after refresh (if application supports session storage)

#### 5.3. Test external navigation links

**File:** `tests/edge-cases/external-links.spec.ts`

**Steps:**
  1. Click 'Get Shortlisted by Recruiters' link in header
    - expect: Link opens without errors
    - expect: External site loads correctly or error is handled
  2. Click 'Flight Booking' link
    - expect: Link navigates successfully to the dropdowns practice page
  3. Click 'Terms & Conditions' link on country selection page
    - expect: Link opens Terms & Conditions policy page

#### 5.4. Test browser back/forward navigation

**File:** `tests/edge-cases/browser-navigation.spec.ts`

**Steps:**
  1. Navigate through multiple pages: Home → Cart → Checkout → Country Selection
    - expect: Each page loads correctly
  2. Use browser back button to navigate backwards
    - expect: Previous pages load with correct content
    - expect: Cart data is preserved during navigation
  3. Use browser forward button
    - expect: Forward navigation works correctly
    - expect: Page states are maintained

#### 5.5. Test empty cart scenarios

**File:** `tests/edge-cases/empty-cart.spec.ts`

**Steps:**
  1. Navigate to cart page without adding any items
    - expect: Empty cart message is displayed or empty state is shown
    - expect: PROCEED TO CHECKOUT button is visible
  2. Click PROCEED TO CHECKOUT with empty cart
    - expect: Application either prevents action or shows error message
    - expect: Checkout flow requires at least one item
