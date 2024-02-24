const allProducts = [
   {
    id : 1,
    name : "Dotfloor Vinyl Tiles 12 Inches",
    color : "Wheat",
    price : "1,000.00",
    priceRange : "above",
    brand : "Z",
    feature : "W",
    category : "Flooring",
    img : "/Flooring(1).png"
  },
  {
    id : 2,
    name : "	LINKCOO 100% Blackout Roller Window Shades",
    color : "Navy",
    price : "300.00",
    priceRange : "above",
    brand : "X",
    feature : "Q",
    category : "Door and Window",
    img : "/Window(1).png"
  },
  {
    id : 3,
    name : "5/20pcs Blue Vinyl Floor Tiles",
    color : "White",
    price : "800.00",
    priceRange : "above",
    brand : "Z",
    feature : "E",
    category : "Tile Products",
    img : "/Tiles(1).png"
  },
  {
    id : 4,
    name : "AVATTO WiFi Smart IR Central Control Panel",
    color : "Wheat",
    price : "500.00",
    priceRange : "below",
    brand : "Y",
    feature : "Q",
    category : "Smart Devices",
    img : "/SmartDevice(1).png"
  },
  {
    id : 5,
    name : "Lunarx Globe Post Lamp Lighting",
    color : "White",
    price : "1,000.00",
    priceRange : "above",
    brand : "X",
    feature : "W",
    category : "Outdoor Lighting",
    img : "/OutdoorLighting(1).png"
  },
  {
    id : 6,
    name : "Shengshiyu Self Retracting Lifeline With Rebar Hook",
    color : "Yellow",
    price : "1,000.00",
    priceRange : "above",
    brand : "Z",
    feature : "E",
    category : "Safety Products",
    img : "/SafetyProduct(1).png"
  },
  {
    id : 7,
    name : "OSK YC275 Pipe Flaring Tool & Swagging Tool Kit",
    color : "Stone",
    price : "500.00",
    brand : "X",
    feature : "Q",
    category : "Pipeline",
    img : "/Pipeline(1).png"
  },
  {
    id : 8,
    name : "Boe 55-Inch Lcd Splicing Screen",
    color : "Black",
    price : "300.00",
    priceRange : "below",
    brand : "Y",
    feature : "W",
    category : "LED Screen",
    img : "/LEDScreen(1).png"
  },
  {
    id : 9,
    name : "Stainless Steel Bathroom Hardware WJY1201A",
    color : "Khaki",
    price : "500.00",
    priceRange : "below",
    brand : "Z",
    feature : "E",
    category : "Others",
    img : "/Hardware01.jpg"
  },
  {
    id : 10,
    name : "MULGREAT Peel and Stick Floor Tile",
    color : "White",
    price : "1,000.00",
    priceRange : "below",
    brand : "Y",
    feature : "W",
    category : "Flooring",
    img : "/Flooring(2).png"
  },
  {
    id : 11,
    name : "Lite Kit with Glass 24inx24in Drk Bronze",
    color : "Black",
    price : "300.00",
    priceRange : "above",
    brand : "Z",
    feature : "E",
    category : "Door and Window",
    img : "/Window(2).png"
  },
  {
    id : 12,
    name : "Tile Dosso Peel And Stick Beehive Mosaic",
    color : "Khaki",
    price : "800.00",
    priceRange : "above",
    brand : "Z",
    feature : "E",
    category : "Tile Products",
    img : "/Tiles(2).png"
  },
  {
    id : 13,
    name : "Lanbon Smart Light Switch,  For Light Or Curtain",
    color : "Wheat",
    price : "500.00",
    priceRange : "below",
    brand : "Y",
    feature : "Q",
    category : "Smart Devices",
    img : "/SmartDevice(2).png"
  },
  {
    id : 14,
    name : "Fimilo Up Down Wall Lights Outdoor",
    color : "White",
    price : "1,000.00",
    priceRange : "above",
    brand : "X",
    feature : "W",
    category : "Outdoor Lighting",
    img : "/OutdoorLighting(2).png"
  },
  {
    id : 15,
    name : "Coated Gloves ANSI/ISEA Abrasion",
    color : "Yellow",
    price : "1,000.00",
    priceRange : "above",
    brand : "Z",
    feature : "E",
    category : "Safety Products",
    img : "/SafetyProduct(2).png"
  },
  {
    id : 16,
    name : "PVC Pipe Blue & Orange Waterline and Electrical",
    color : "Stone",
    price : "500.00",
    brand : "X",
    feature : "Q",
    category : "Pipeline",
    img : "/Pipeline(2).png"
  },
  {
    id : 17,
    name : "Small pixel pitch series Pixel pitch",
    color : "Black",
    price : "300.00",
    priceRange : "below",
    brand : "Y",
    feature : "W",
    category : "LED Screen",
    img : "/LEDScreen(2).png"
  },
  {
    id : 18,
    name : "Exposed Door Closer Series B4C01/B4C02",
    color : "Khaki",
    price : "500.00",
    priceRange : "below",
    brand : "Z",
    feature : "E",
    category : "Others",
    img : "/Hardware02.jpg"
  },
  {
    id : 19,
    name : "Dotfloor Vinyl Tiles 12 Inches",
    color : "Black",
    price : "1,000.00",
    priceRange : "above",
    brand : "X",
    feature : "E",
    category : "Flooring",
    img : "/Flooring(1).png"
  },
  {
    id : 20,
    name : "LINKCOO 100% Blackout Roller Window Shades",
    color : "Wheat",
    price : "300.00",
    priceRange : "above",
    brand : "Z",
    feature : "Q",
    category : "Door and Window",
    img : "/Window(1).png"
  },
  {
    id  : 21,
    name : "5/20pcs Blue Vinyl Floor Tiles",
    color: "Khaki",
    price: "800.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Tile Products",
    img: "/Tiles(1).png"
  },
  {
    id  : 22,
    name : "AVATTO WiFi Smart IR Central Control Panel",
    color: "Wheat",
    price: "500.00",
    priceRange: "above",
    brand: "Y",
    feature: "W",
    category: "Smart Devices",
    img : "/SmartDevice(1).png"
  },
  {
    id  : 23,
    name : "Lunarx Globe Post Lamp Lighting",
    color: "Yellow",
    price: "1,000.00",
    priceRange: "below",
    brand: "Y",
    feature: "E",
    category: "Outdoor Lighting",
    img : "/OutdoorLighting(1).png"
  },
  {
    id  : 24,
    name : "Shengshiyu Self Retracting Lifeline With Rebar Hook",
    color: "Navy",
    price: "1,000.00",
    priceRange: "below",
    brand: "Y",
    feature: "Q",
    category: "Safety Products",
    img : "/SafetyProduct(1).png"
  },
  {
    id  : 25,
    name : "OSK YC275 Pipe Flaring Tool & Swagging Tool Kit",
    color: "Yellow",
    price: "500.00",
    brand: "Z",
    feature: "W",
    category: "Pipeline",
    img : "/Pipeline(1).png"
  },
  {
    id  : 26,
    name : "Boe 55-Inch Lcd Splicing Screen",
    color: "White",
    price: "300.00",
    priceRange: "above",
    brand: "Z",
    feature: "Q",
    category: "LED Screen",
    img : "/LEDScreen(1).png"
  },
  {
    id  : 27,
    name : "Intelligent Door Lock N6700",
    color: "Yellow",
    price: "500.00",
    priceRange: "above",
    brand: "Y",
    feature: "W",
    category: "Others",
    img : "/Hardware03.jpg"
  },
  {
    id  : 28,
    name : "MULGREAT Peel and Stick Floor Tile",
    color: "Black",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "Flooring",
    img : "/Flooring(2).png"
  },
  {
    id  : 29,
    name : "LINKCOO 100% Blackout Roller Window Shades",
    color: "Khaki",
    price: "300.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "Door and Window",
    img : "/Window(1).png"
  },
  {
    id  : 30,
    name : "Tile Dosso Peel And Stick Beehive Mosaic",
    color: "Khaki",
    price: "800.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Tile Products",
    img : "/Tiles(2).png"
  },
  {
    id  : 31,
    name : "Lanbon Smart Light Switch,  For Light Or Curtain",
    color: "Wheat",
    price: "500.00",
    priceRange: "below",
    brand: "Y",
    feature: "Q",
    category: "Smart Devices",
    img : "/SmartDevice(2).png"
  },
  {
    id  : 32,
    name : "Fimilo Up Down Wall Lights Outdoor",
    color: "Black",
    price: "1,000.00",
    priceRange: "below",
    brand: "Y",
    feature: "E",
    category: "Outdoor Lighting",
    img : "/OutdoorLighting(2).png"
  },
  {
    id  : 33,
    name : "Coated Gloves ANSI/ISEA Abrasion",
    color: "Yellow",
    price: "1,000.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Safety Products",
    img : "/SafetyProduct(2).png"
  },
  {
    id  : 34,
    name : "PVC Pipe Blue & Orange Waterline and Electrical",
    color: "White",
    price: "500.00",
    brand: "Y",
    feature: "W",
    category: "Pipeline",
    img : "/Pipeline(2).png"
  },
  {
    id  : 35,
    name : "Small pixel pitch series Pixel pitch",
    color: "White",
    price: "300.00",
    priceRange: "above",
    brand: "Z",
    feature: "Q",
    category: "LED Screen",
    img : "/LEDScreen(2).png"
  },
  {
    id  : 36,
    name : "Stainless Steel Bathroom Hardware WWG17220",
    color: "Yellow",
    price: "500.00",
    priceRange: "above",
    brand: "Y",
    feature: "W",
    category: "Others",
    img : "/Hardware04.jpg"
  },
  {
    id  : 37,
    name : "Dotfloor Vinyl Tiles 12 Inches",
    color: "Stone",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "Q",
    category: "Flooring",
    img : "/Flooring(1).png"
  },
  {
    id  : 38,
    name : "LINKCOO 100% Blackout Roller Window Shades",
    color: "White",
    price: "300.00",
    priceRange: "below",
    brand: "Z",
    feature: "W",
    category: "Door and Window",
    img : "/Window(2).png"
  },
  {
    id  : 39,
    name : "5/20pcs Blue Vinyl Floor Tiles",
    color: "Stone",
    price: "800.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Tile Products",
    img : "/Tiles(1).png"
  },
  {
    id  : 40,
    name : "AVATTO WiFi Smart IR Central Control Panel",
    color: "Wheat",
    price: "500.00",
    priceRange: "below",
    brand: "Y",
    feature: "Q",
    category: "Smart Devices",
    img : "/SmartDevice(1).png"
  },
  {
    id  : 41,
    name : "Lunarx Globe Post Lamp Lighting",
    color: "White",
    price: "1,000.00",
    priceRange: "above",
    brand: "Y",
    feature: "W",
    category: "Outdoor Lighting",
    img : "/OutdoorLighting(1).png"
  },
  {
    id  : 42,
    name : "Shengshiyu Self Retracting Lifeline With Rebar Hook",
    color: "White",
    price: "1,000.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Safety Products",
    img : "/SafetyProduct(1).png"
  },
  {
    id  : 43,
    name : "OSK YC275 Pipe Flaring Tool & Swagging Tool Kit",
    color: "White",
    price: "500.00",
    brand: "Y",
    feature: "W",
    category: "Pipeline",
    img : "/Pipeline(1).png"
  },
  {
    id  : 44,
    name : "Boe 55-Inch Lcd Splicing Screen",
    color: "Khaki",
    price: "300.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "LED Screen",
    img : "/LEDScreen(1).png"
  },
  {
    id  : 45,
    name : "Stainless Steel Bathroom Hardware WJY1201A",
    color: "Khaki",
    price: "500.00",
    priceRange: "below",
    brand: "Z",
    feature: "E",
    category: "Others",
    img : "/Hardware01.jpg"
  },
  {
    id  : 46,
    name : "MULGREAT Peel and Stick Floor Tile",
    color: "Black",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "Q",
    category: "Flooring",
    img : "/Flooring(2).png"
  },
  {
    id  : 47,
    name : "	Lite Kit with Glass 24inx24in Drk Bronze",
    color: "Stone",
    price: "300.00",
    priceRange: "below",
    brand: "Z",
    feature: "E",
    category: "Door and Window",
    img : "/Window(1).png"
  },
  {
    id  : 48,
    name : "Tile Dosso Peel And Stick Beehive Mosaic",
    color: "Khaki",
    price: "800.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Tile Products",
    img : "/Tiles(2).png"
  },
  {
    id  : 49,
    name : "Lanbon Smart Light Switch,  For Light Or Curtain",
    color: "Wheat",
    price: "500.00",
    priceRange: "below",
    brand: "Y",
    feature: "Q",
    category: "Smart Devices",
    img : "/SmartDevice(2).png"
  },
  {
    id  : 50,
    name : "Fimilo Up Down Wall Lights Outdoor",
    color: "White",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "W",
    category: "Outdoor Lighting",
    img : "/OutdoorLighting(2).png"
  },
  {
    id  : 51,
    name : "Coated Gloves ANSI/ISEA Abrasion",
    color: "White",
    price: "1,000.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Safety Products",
    img : "/SafetyProduct(2).png"
  },
  {
    id  : 52,
    name : "PVC Pipe Blue & Orange Waterline and Electrical",
    color: "Yellow",
    price: "500.00",
    brand: "X",
    feature: "E",
    category: "Pipeline",
    img : "/Pipeline(2).png"
  },
  {
    id  : 53,
    name : "Small pixel pitch series Pixel pitch",
    color: "Khaki",
    price: "300.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "LED Screen",
    img : "/LEDScreen(2).png"
  },
  {
    id  : 54,
    name : "Stainless Steel Bathroom Hardware WWG17220",
    color: "Khaki",
    price: "500.00",
    priceRange: "below",
    brand: "Z",
    feature: "E",
    category: "Others",
    img : "/Hardware04.jpg"
  },
  {
    id  : 55,
    name : "Dotfloor Vinyl Tiles 12 Inches",
    color: "Black",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "Q",
    category: "Flooring",
    img : "/Flooring(1).png"
  },
  {
    id  : 56,
    name : "	Lite Kit with Glass 24inx24in Drk Bronze",
    color: "Orange",
    price: "300.00",
    priceRange: "above",
    brand: "X",
    feature: "W",
    category: "Door and Window",
    img : "/Window(2).png"
  },
  {
    id  : 57,
    name : "5/20pcs Blue Vinyl Floor Tiles",
    color: "Yellow",
    price: "800.00",
    priceRange: "above",
    brand: "X",
    feature: "Q",
    category: "Tile Products",
    img : "/Tiles(1).png"
  },
  {
    id  : 58,
    name : "AVATTO WiFi Smart IR Central Control Panel",
    color: "Wheat",
    price: "500.00",
    priceRange: "below",
    brand: "Y",
    feature: "Q",
    category: "Smart Devices",
    img : "/SmartDevice(1).png"
  },
  {
    id  : 59,
    name : "Lunarx Globe Post Lamp Lighting",
    color: "Stone",
    price: "1,000.00",
    priceRange: "below",
    brand: "Z",
    feature: "E",
    category: "Outdoor Lighting",
    img : "/OutdoorLighting(1).png"
  },
  {
    id  : 60,
    name : "Shengshiyu Self Retracting Lifeline With Rebar Hook",
    color: "Black",
    price: "1,000.00",
    priceRange: "below",
    brand: "X",
    feature: "W",
    category: "Safety Products",
    img : "/SafetyProduct(1).png"
  },
  {
    id  : 61,
    name : "OSK YC275 Pipe Flaring Tool & Swagging Tool Kit",
    color: "Yellow",
    price: "500.00",
    brand: "X",
    feature: "E",
    category: "Pipeline",
    img : "/Pipeline(1).png"
  },
  {
    id  : 62,
    name : "Boe 55-Inch Lcd Splicing Screen",
    color: "Yellow",
    price: "300.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "LED Screen",
    img : "/LEDScreen(1).png"
  },
  {
    id  : 63,
    name : "Exposed Door Closer Series B4C01/B4C02",
    color: "Khaki",
    price: "500.00",
    priceRange: "below",
    brand: "Z",
    feature: "E",
    category: "Others",
    img : "/Hardware02.jpg"
  },
  {
    id  : 64,
    name : "MULGREAT Peel and Stick Floor Tile",
    color: "Black",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "Q",
    category: "Flooring",
    img : "/Flooring(2).png"
  },
  {
    id  : 65,
    name : "	LINKCOO 100% Blackout Roller Window Shades",
    color: "White",
    price: "300.00",
    priceRange: "below",
    brand: "X",
    feature: "Q",
    category: "Door and Window",
    img : "/Window(1).png"
  },
  {
    id  : 66,
    name : "Tile Dosso Peel And Stick Beehive Mosaic",
    color: "Khaki",
    price: "800.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Tile Products",
    img : "/Tiles(2).png"
  },
  {
    id  : 67,
    name : "Lanbon Smart Light Switch,  For Light Or Curtain",
    color: "Wheat",
    price: "500.00",
    priceRange: "below",
    brand: "Y",
    feature: "Q",
    category: "Smart Devices",
    img : "/SmartDevice(2).png"
  },
  {
    id  : 68,
    name : "Fimilo Up Down Wall Lights Outdoor",
    color: "Stone",
    price: "1,000.00",
    priceRange: "below",
    brand: "Z",
    feature: "E",
    category: "Outdoor Lighting",
    img : "/OutdoorLighting(2).png"
  },
  {
    id  : 69,
    name : "Coated Gloves ANSI/ISEA Abrasion",
    color: "Black",
    price: "1,000.00",
    priceRange: "below",
    brand: "X",
    feature: "W",
    category: "Safety Products",
    img : "/SafetyProduct(2).png"
  },
  {
    id  : 70,
    name : "PVC Pipe Blue & Orange Waterline and Electrical",
    color: "Yellow",
    price: "500.00",
    brand: "Y",
    feature: "W",
    category: "Pipeline",
    img : "/Pipeline(2).png"
  },
  {
    id  : 71,
    name : "Small pixel pitch series Pixel pitch",
    color: "Yellow",
    price: "300.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "LED Screen",
    img : "/LEDScreen(2).png"
  },
  {
    id  : 72,
    name : "Intelligent Door Lock N6700",
    color: "Black",
    price: "500.00",
    priceRange: "above",
    brand: "X",
    feature: "Q",
    category: "Others",
    img : "/Hardware03.jpg"
  },
  {
    id  : 73,
    name : "Dotfloor Vinyl Tiles 12 Inches",
    color: "Yellow",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "Flooring",
    img : "/Flooring(1).png"
  },
  {
    id  : 74,
    name : "	LINKCOO 100% Blackout Roller Window Shades",
    color: "Wheat",
    price: "300.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Door and Window",
    img : "/Window(2).png"
  },
  {
    id  : 75,
    name : "5/20pcs Blue Vinyl Floor Tiles",
    color: "Khaki",
    price: "800.00",
    priceRange: "above",
    brand: "Y",
    feature: "W",
    category: "Tile Products",
    img : "/Tiles(1).png"
  },
  {
    id  : 76,
    name : "AVATTO WiFi Smart IR Central Control Panel",
    color: "Wheat",
    price: "500.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "Smart Devices",
    img : "/SmartDevice(1).png"
  },
  {
    id  : 77,
    name : "Lunarx Globe Post Lamp Lighting",
    color: "Khaki",
    price: "1,000.00",
    priceRange: "below",
    brand: "Z",
    feature: "E",
    category: "Outdoor Lighting",
    img : "/OutdoorLighting(1).png"
  },
  {
    id  : 78,
    name : "Shengshiyu Self Retracting Lifeline With Rebar Hook",
    color: "Black",
    price: "1,000.00",
    priceRange: "below",
    brand: "Y",
    feature: "Q",
    category: "Safety Products",
    img : "/SafetyProduct(1).png"
  },
  {
    id  : 79,
    name : "OSK YC275 Pipe Flaring Tool & Swagging Tool Kit",
    color: "Yellow",
    price: "500.00",
    brand: "Y",
    feature: "W",
    category: "Pipeline",
    img : "/Pipeline(1).png"
  },
  {
    id  : 80,
    name : "Boe 55-Inch Lcd Splicing Screen",
    color: "Black",
    price: "300.00",
    priceRange: "below",
    brand: "Y",
    feature: "W",
    category: "LED Screen",
    img : "/LEDScreen(1).png"
  },
  {
    id  : 81,
    name : "Stainless Steel Bathroom Hardware WWG17220",
    color: "Black",
    price: "500.00",
    priceRange: "above",
    brand: "X",
    feature: "Q",
    category: "Others",
    img : "/Hardware04.jpg"
  },
  {
    id  : 82,
    name : "MULGREAT Peel and Stick Floor Tile",
    color: "Black",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "Flooring",
    img : "/Flooring(2).png"
  },
  {
    id  : 83,
    name : "	LINKCOO 100% Blackout Roller Window Shades",
    color: "Navy",
    price: "300.00",
    priceRange: "below",
    brand: "Y",
    feature: "W",
    category: "Door and Window",
    img : "/Window(2).png"
  },
  {
    id  : 84,
    name : "Tile Dosso Peel And Stick Beehive Mosaic",
    color: "Khaki",
    price: "800.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Tile Products",
    img : "/Tiles(2).png"
  },
  {
    id  : 85,
    name : "Lanbon Smart Light Switch,  For Light Or Curtain",
    color: "Wheat",
    price: "500.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "Smart Devices",
    img : "/SmartDevice(2).png"
  },
  {
    id  : 86,
    name : "Fimilo Up Down Wall Lights Outdoor",
    color: "Khaki",
    price: "1,000.00",
    priceRange: "below",
    brand: "Z",
    feature: "E",
    category: "Outdoor Lighting",
    img : "/OutdoorLighting(2).png"
  },
  {
    id  : 87,
    name : "Coated Gloves ANSI/ISEA Abrasion",
    color: "Black",
    price: "1,000.00",
    priceRange: "below",
    brand: "Y",
    feature: "Q",
    category: "Safety Products",
    img : "/SafetyProduct(2).png"
  },
  {
    id  : 88,
    name : "PVC Pipe Blue & Orange Waterline and Electrical",
    color: "Yellow",
    price: "500.00",
    brand: "Z",
    feature: "W",
    category: "Pipeline",
    img : "/Pipeline(2).png"
  },
  {
    id  : 89,
    name : "Small pixel pitch series Pixel pitch",
    color: "Black",
    price: "300.00",
    priceRange: "below",
    brand: "Y",
    feature: "W",
    category: "LED Screen",
    img : "/LEDScreen(2).png"
  },
  {
    id  : 90,
    name : "Stainless Steel Bathroom Hardware WJY1201A",
    color: "Black",
    price: "500.00",
    priceRange: "above",
    brand: "X",
    feature: "Q",
    category: "Others",
    img : "/Hardware01.jpg"
  },
  {
    id  : 91,
    name : "MULGREAT Peel and Stick Floor Tile",
    color: "Black",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "Flooring",
    img : "/Flooring(2).png"
  },
  {
    id  : 92,
    name : "	LINKCOO 100% Blackout Roller Window Shades",
    color: "Navy",
    price: "300.00",
    priceRange: "below",
    brand: "Y",
    feature: "W",
    category: "Door and Window",
    img : "/Window(2).png"
  },
  {
    id  : 93,
    name : "5/20pcs Blue Vinyl Floor Tiles",
    color: "Khaki",
    price: "800.00",
    priceRange: "above",
    brand: "Y",
    feature: "W",
    category: "Tile Products",
    img : "/Tiles(1).png"
  },
  {
    id  : 94,
    name : "AVATTO WiFi Smart IR Central Control Panel",
    color: "Wheat",
    price: "500.00",
    priceRange: "above",
    brand: "Y",
    feature: "W",
    category: "Smart Devices",
    img : "/SmartDevice(1).png"
  },
  {
    id  : 95,
    name : "Lunarx Globe Post Lamp Lighting",
    color: "Yellow",
    price: "1,000.00",
    priceRange: "below",
    brand: "Z",
    feature: "E",
    category: "Outdoor Lighting",
    img : "/OutdoorLighting(1).png"
  },
  {
    id  : 96,
    name : "Shengshiyu Self Retracting Lifeline With Rebar Hook",
    color: "Yellow",
    price: "1,000.00",
    priceRange: "above",
    brand: "Z",
    feature: "E",
    category: "Safety Products",
    img : "/SafetyProduct(1).png"
  },
  {
    id  : 97,
    name : "OSK YC275 Pipe Flaring Tool & Swagging Tool Kit",
    color: "Yellow",
    price: "500.00",
    brand: "Z",
    feature: "W",
    category: "Pipeline",
    img : "/Pipeline(1).png"
  },
  {
    id  : 98,
    name : "Boe 55-Inch Lcd Splicing Screen",
    color: "Black",
    price: "300.00",
    priceRange: "below",
    brand: "Y",
    feature: "W",
    category: "LED Screen",
    img : "/LEDScreen(1).png"
  },
  {
    id  : 99,
    name : "Exposed Door Closer Series B4C01/B4C02",
    color: "Yellow",
    price: "500.00",
    priceRange: "above",
    brand: "Y",
    feature: "W",
    category: "Others",
    img : "/Hardware02.jpg"
  },
  {
    id  : 100,
    name : "Dotfloor Vinyl Tiles 12 Inches",
    color: "Yellow",
    price: "1,000.00",
    priceRange: "above",
    brand: "X",
    feature: "E",
    category: "Flooring",
    img : "/Flooring(1).png"
  },
  ];

export default allProducts;