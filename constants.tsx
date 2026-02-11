
import { MenuItem, AtmosphereImage, Store } from './types';

export const STORES: Store[] = [
  {
    id: 'sarita-vihar',
    name: 'Cafe Crew Brew - Sarita Vihar',
    address: 'Shop No. 9&4, DDA, H BLOCK MARKET, Pocket H, Sarita Vihar, New Delhi 110076',
    lat: 28.5326,
    lng: 77.2878,
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Cafe+Crew+Brew+Pocket+H+Sarita+Vihar+New+Delhi+110076',
    orderUrl: 'https://www.swiggy.com/restaurants/cafe-crewbrew-sarita-vihar-koramangala-delhi-1008202'
  },
  {
    id: 'gk2',
    name: 'Cafe Crew Brew - GK 2',
    address: 'M Block Market, Greater Kailash II, New Delhi, Delhi 110048',
    lat: 28.5333,
    lng: 77.2435,
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Cafe+Crew+Brew+Greater+Kailash+2+New+Delhi',
    orderUrl: 'https://www.swiggy.com/city/delhi/cafe-crew-brew-greater-kailash-2-rest1086251'
  },
  {
    id: 'gtb-nagar',
    name: 'Cafe Crew Brew - GTB Nagar',
    address: 'First Floor, Hudson Lane, GTB Nagar, New Delhi, Delhi 110009',
    lat: 28.6977,
    lng: 77.2036,
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Hudson+Lane+GTB+Nagar+New+Delhi',
    orderUrl: 'https://www.swiggy.com/city/delhi/cafe-crew-brew-kamla-nagar-gtb-nagar-rest295718'
  }
];

export const MENU_DATA: MenuItem[] = [
  // EXPERIMENTS WITH BLACK SHOT
  { id: 'ebs1', name: 'Espresso', description: 'A Rich Black Coffee Shot', calories: '5.81kcal', category: 'Experiments with Black Shot', isVeg: true },
  { id: 'ebs2', name: 'Affogato', description: 'Espresso With Scoop of Vanilla Ice Cream', calories: '200.18kcal', category: 'Experiments with Black Shot', isVeg: true },
  { id: 'ebs3', name: 'Cafe americano', description: 'Classic Black Coffee with Hot Water', calories: '11.62kcal', category: 'Experiments with Black Shot', isVeg: true },
  { id: 'ebs4', name: 'Iced Cappuccino', description: 'A Classic Iced on the Rock Cappuccino', calories: '153.2kcal', category: 'Experiments with Black Shot', isVeg: true },
  { id: 'ebs5', name: 'Iced Latte', description: 'Creamy Latte on the Rock', calories: '158.48kcal', category: 'Experiments with Black Shot', isVeg: true },
  { id: 'ebs6', name: 'Iced Mocha', description: 'A Cold Chocolate Coffee with Ice on the Rock', calories: '178.6kcal', category: 'Experiments with Black Shot', isVeg: true },
  { id: 'ebs7', name: 'Iced Americano', description: 'Black Coffee with Ice on the Rock', calories: '5.8kcal', category: 'Experiments with Black Shot', isVeg: true },

  // BLENDED FRAPPE
  { id: 'bf1', name: 'Cafe Frappe', description: 'Classic Creamy Blended Cold Coffee', calories: '335.48kcal', category: 'Blended Frappe', isVeg: true, isPopular: true },
  { id: 'bf2', name: 'Choco Frappe', description: 'Blended Choco and Coffee Makes Choco Frappe', calories: '344.16kcal', category: 'Blended Frappe', isVeg: true },
  { id: 'bf3', name: 'Hazelnut Frappe', description: 'When Coffee Meets with Nuts', calories: '345.13kcal', category: 'Blended Frappe', isVeg: true, isPopular: true },
  { id: 'bf4', name: 'Soul\'s own Frappe', description: 'Our Signature Dark and Rich Indulgent top of Cream Cold Coffee', calories: '382.66kcal', category: 'Blended Frappe', isVeg: true },
  { id: 'bf5', name: 'Irish Frappe', description: 'A Cold Coffee Accompanied by Notes of Irish Whiskey Flavour', calories: '345.13kcal', category: 'Blended Frappe', isVeg: true },

  // HOT CHAAI CHAAI
  { id: 'hcc1', name: 'Masala Tea', description: 'Delicious Masala Blend Omelets Straight from your Kitchen', calories: '18.5kcal', category: 'Hot Chaai Chaai', isVeg: true },
  { id: 'hcc2', name: 'Chamomile Honey Herbal Tea', description: 'Floral and Aromatic Blend of Soothing Chamomile and Healing Honey', calories: '6.9kcal', category: 'Hot Chaai Chaai', isVeg: true },
  { id: 'hcc3', name: 'Jasmine Green Tea', description: 'Delicate white Jasmine Buds From the Verdant Hills of Darjeeling to your Cup', calories: '6.9kcal', category: 'Hot Chaai Chaai', isVeg: true },
  { id: 'hcc4', name: 'Herbal Amla Tea', description: 'A Healthy and Imunative Detox Tea', calories: '29.8kcal', category: 'Hot Chaai Chaai', isVeg: true },
  { id: 'hcc5', name: 'Mango & Passion Fruit Green Tea', description: 'A Tea Tango of Passion Fruit and Royal Mango', calories: '6.9kcal', category: 'Hot Chaai Chaai', isVeg: true },

  // COFFEE WITH FLAVOUR
  { id: 'cf1', name: 'Hazelnut Cappuccino', category: 'Coffee with Flavour', isVeg: true },
  { id: 'cf2', name: 'Vanila Cappuccino', category: 'Coffee with Flavour', isVeg: true },
  { id: 'cf3', name: 'Irish Cappuccino', category: 'Coffee with Flavour', isVeg: true },
  { id: 'cf4', name: 'Toffee Caramel Latte', category: 'Coffee with Flavour', isVeg: true },
  { id: 'cf5', name: 'Hazelnut Latte', category: 'Coffee with Flavour', isVeg: true },
  { id: 'cf6', name: 'Vanila Latte', category: 'Coffee with Flavour', isVeg: true },
  { id: 'cf7', name: 'Irish Latte', category: 'Coffee with Flavour', isVeg: true },

  // HOT COFFEE WITH MILK
  { id: 'hcm1', name: 'Cappuccino', description: 'A Dark Espresso in Thick Milk Foam', calories: '128.90kcal', category: 'Hot Coffee with Milk', isVeg: true, isPopular: true },
  { id: 'hcm2', name: 'Cafe Latte', description: 'Shot of Espresso with Creamy Foam and Steam Milk', calories: '131.90kcal', category: 'Hot Coffee with Milk', isVeg: true },
  { id: 'hcm3', name: 'Flat White', description: 'A Blend of Micro Foam Poured Over with Doubleshot of Espresso', calories: '125.08kcal', category: 'Hot Coffee with Milk', isVeg: true },
  { id: 'hcm4', name: 'Filter Coffee', description: 'Classic Sout Indian Style Coffee on your Table', calories: '133.24kcal', category: 'Hot Coffee with Milk', isVeg: true },
  { id: 'hcm5', name: 'Cafe Mocha', description: 'Warm Cup of Espresso Layered with Hot Chocolate', calories: '129.05kcal', category: 'Hot Coffee with Milk', isVeg: true },
  { id: 'hcm6', name: 'Belgiun Hot Chocolate', description: 'Sweet Belgiun Chocolate as for you', calories: '173.97kcal', category: 'Hot Coffee with Milk', isVeg: true },

  // NON COFFEE FRAPPE
  { id: 'ncf1', name: 'Choco Vanila Cookie Frappe', description: 'Blended with Cookie Crunch and Rich Chocolate', calories: '541.59kcal', category: 'Non Coffee Frappe', isVeg: true },
  { id: 'ncf2', name: 'Blue Berry Frappe', description: 'Blueberries Blended with Splash of Milk and Top of Cream', calories: '427.56kcal', category: 'Non Coffee Frappe', isVeg: true },
  { id: 'ncf3', name: 'Mango Frappe', description: 'Prepared by Blending Delicious Alphonso Mango and Rich Cream', calories: '427.56kcal', category: 'Non Coffee Frappe', isVeg: true },
  { id: 'ncf4', name: 'Strawberry Frappe', description: 'Craving Something Sweet and Creamy', calories: '427.56kcal', category: 'Non Coffee Frappe', isVeg: true },

  // CHILLER STORY
  { id: 'cs1', name: 'Classic Lemonade', description: 'Glass of Fizzy Lemon and Ginger', calories: '145.78kcal', category: 'Chiller Story', isVeg: true },
  { id: 'cs2', name: 'Blue Lagoon', description: 'Refreshing Sweet and Tangy Blue Curraco Slush', calories: '256.33kcal', category: 'Chiller Story', isVeg: true },
  { id: 'cs3', name: 'Passion Fruit Ice Tea', description: 'Chill the Mood with Passion Fruit', calories: '190.4kcal', category: 'Chiller Story', isVeg: true },
  { id: 'cs4', name: 'Lemon Ice Tea', description: 'Tangy and Refreshing Ice Tea with Lemon', calories: '182kcal', category: 'Chiller Story', isVeg: true },
  { id: 'cs5', name: 'Peach Fruit Ice Tea', description: 'Glass of Peaches with Brewed Tea', calories: '166.95kcal', category: 'Chiller Story', isVeg: true },

  // HUNGER FULLER
  { id: 'hf1', name: 'The Ultimate Veg Grilled Cheese Sandwich', category: 'Hunger Fuller', isVeg: true, isPopular: true },
  { id: 'hf2', name: 'Bombay Style Chatpata Grilled Sandwich', category: 'Hunger Fuller', isVeg: true },
  { id: 'hf3', name: 'Smoked Chiken Crossaint', category: 'Hunger Fuller', isVeg: false, isPopular: true },
  { id: 'hf4', name: 'Spinach and Mushroom Cheese Crossaint', category: 'Hunger Fuller', isVeg: true },
  { id: 'hf5', name: 'Aangara Paneer Multigrain Panini Sub', category: 'Hunger Fuller', isVeg: true },
  { id: 'hf6', name: 'Green Falafel Multigrain Sub', category: 'Hunger Fuller', isVeg: true },
  { id: 'hf7', name: 'Tandoori Chiken Sub', category: 'Hunger Fuller', isVeg: false },

  // LIGHT BITES
  { id: 'lb1', name: 'Crispy Veg Burger', category: 'Light Bites', isVeg: true },
  { id: 'lb2', name: 'Chilli Cheese Toast', category: 'Light Bites', isVeg: true },
  { id: 'lb3', name: 'Double Cheese Jalapeno Toast', category: 'Light Bites', isVeg: true },
  { id: 'lb4', name: 'Loaded Egg Bun', category: 'Light Bites', isVeg: false },
  { id: 'lb5', name: 'Peri Peri Wedges', category: 'Light Bites', isVeg: true },
  { id: 'lb6', name: 'Crispy Chiken Burger', category: 'Light Bites', isVeg: false },
  { id: 'lb7', name: 'Veggie Olive Multigrain Wrap', category: 'Light Bites', isVeg: true },
  { id: 'lb8', name: 'Spicy Chiken Multigrain Wrap', category: 'Light Bites', isVeg: false },

  // PIZZA
  { id: 'pz1', name: 'Pesto Garlic Sourdough Pizza', category: 'Pizza', isVeg: true, isPopular: true },
  { id: 'pz2', name: 'Veggie Four Cheese Pizza', category: 'Pizza', isVeg: true },
  { id: 'pz3', name: 'Masala Paneer Quattro Formaggie', category: 'Pizza', isVeg: true },
  { id: 'pz4', name: 'Smoked Chiken Quattro Formaggie Pizza', category: 'Pizza', isVeg: false },

  // OPEN FRENCH TOAST
  { id: 'oft1', name: 'Greek Style Avocado Sourdough French Toast', description: 'Herby avocado on sourdough with chilli and toasted seeds', category: 'Open French Toast', isVeg: true, isPopular: true },
  { id: 'oft2', name: 'Creamy Mushroom Smashed Avocado Toast', description: 'Delicious Mushroom Topped on Smashed Avocado Sourdough Bread', category: 'Open French Toast', isVeg: true },
  { id: 'oft3', name: 'Loaded Scrambled Egg Toast', description: 'Crispy Sourdough Filled with Silky Eggs, Cheese, Spring Onion & Sauce', category: 'Open French Toast', isVeg: false },
  { id: 'oft4', name: 'Herby Sourdough Baked Chiken', description: 'Spicy and Tangy Chiken Shreds on a Crispy Sourdough Bread', category: 'Open French Toast', isVeg: false },

  // DESSERT
  { id: 'ds1', name: 'American Style Oatmeal Cookie', category: 'Dessert', isVeg: true },
  { id: 'ds2', name: 'Chocochip Cookie', category: 'Dessert', isVeg: true },
  { id: 'ds3', name: 'Nutty Fudge Brownie', category: 'Dessert', isVeg: true },
  { id: 'ds4', name: 'Choco Chip Brownie', category: 'Dessert', isVeg: true },
  { id: 'ds5', name: 'Dark Chocolate Truffle Pestry', category: 'Dessert', isVeg: true },
  { id: 'ds6', name: 'Biscoff Brownie', category: 'Dessert', isVeg: true },
  { id: 'ds7', name: 'Newyork Cheesecake', category: 'Dessert', isVeg: true, isPopular: true },
  { id: 'ds8', name: 'Sizzle Dazzle Brownie', category: 'Dessert', isVeg: true },
  { id: 'ds9', name: 'Choco Hola', category: 'Dessert', isVeg: true },

  // FRESH BOWL
  { id: 'fb1', name: 'Acai Smoothie Bowl With Dry Fruits', description: 'Fruity Accai & Berries Smoothie With Toasted Seeds And Dry Fruit', category: 'Fresh Bowl', isVeg: true, isPopular: true },
  { id: 'fb2', name: 'Garden Fresh Veg Salad Bowl', category: 'Fresh Bowl', isVeg: true },
  { id: 'fb3', name: 'Tandoori Chiken Tikka Burrito Salad Bowl', category: 'Fresh Bowl', isVeg: false },

  // ADDONS
  { id: 'ad1', name: 'Chocolate Topping', calories: '28.79kcal', category: 'Addons', isVeg: true },
  { id: 'ad2', name: 'Whipped Cream', calories: '245.00kcal', category: 'Addons', isVeg: true },
  { id: 'ad3', name: 'Espresso Shot', calories: '5.81kcal', category: 'Addons', isVeg: true },
  { id: 'ad4', name: 'Vanila Icecream', calories: '100.09kcal', category: 'Addons', isVeg: true },
  { id: 'ad5', name: 'Add ons Flavour', calories: '40.99kcal', category: 'Addons', isVeg: true },
];

export const GALLERY_IMAGES: AtmosphereImage[] = [
  { 
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000', 
    title: 'Signature Crispy Burger', 
    alt: 'Delicious burger with fries' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000', 
    title: 'Protein-Rich Salad Bowl', 
    alt: 'Fresh green salad with grilled chicken' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1528733918455-5a59687cedf0?auto=format&fit=crop&q=80&w=1000', 
    title: 'Gourmet Smoked Sub', 
    alt: 'Smoked chicken multigrain panini sub' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=1000', 
    title: 'Artisan Latte Art', 
    alt: 'Two cups of coffee with intricate latte art' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000', 
    title: 'Classic Morning Brew', 
    alt: 'Pouring fresh coffee into a cup' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000', 
    title: 'Rich Dark Espresso', 
    alt: 'Close up of roasted coffee beans and espresso' 
  },
];
