let cart = [];

const product = [
  {
    id: 1,
    category:`Men's clothing`,
    title: `Men's loose fit harem pants`,
    image:
      "https://i.etsystatic.com/45486296/r/il/0d17a1/5695012610/il_794xN.5695012610_mt7v.jpg",
    price: 45.05,
    discription: `Discover the perfect blend of style and comfort with our Cotton Linen Harem Pants for men. These Elastic Waist Streetwear Joggers are a must-have addition to your 2024 fashion collection. Crafted with care, these New Baggy Drop-crotch Pants are designed to provide the utmost comfort while keeping you in vogue.
    
        Our Casual Trousers for Men are the epitome of trendy urban fashion. Their loose fit and cotton linen blend fabric offer both style and breathability. These pants are ideal whether strolling through the city or lounging at home.
        
        Buyers, please check the item description before purchasing if you need clarification or have questions about an item's sizing options. You can contact me, But the best way is to measure the size of the clothes you usually wear and compare them with the size chart.
        
        💧 FABRİC:%70 LİNEN %30 COTTON 💧
        
        💧 CARE INSTRUCTIONS 💧
        
        .: Machine wash: warm (max 30C or 105F); Non-chlorine: bleach as needed; Tumble dry: Do not dryclean.Do not dry in the machine`,
    price: 54.6,
  },
  {
    id: 2,
    title: `Universal Lazy Bracket Mobile Phone Holder Gooseneck Stand`,
    category: "Electronics",
    image:
      "https://i.etsystatic.com/50939902/r/il/1826d4/5840851640/il_794xN.5840851640_12y1.jpg",
    discription: `Introducing the ultimate companion for your device: the Phone Holder! 📱✨

        Imagine a sleek, stylish accessory that effortlessly cradles your precious phone, keeping it safe, secure, and oh-so accessible. 🤩
        
        Crafted with precision and innovation, this marvel of modern design is more than just a holder; it's a statement piece! 💫
        
        Picture the convenience of hands-free browsing, video calls, or watching your favorite shows without the hassle of constantly gripping your device. 🎬📞
        
        With its adjustable angles and sturdy grip, this holder ensures the perfect viewing position every time, whether you're lounging on the couch, working at your desk, or even cooking up a storm in the kitchen! 🛋️💼👩‍🍳
        
        Gone are the days of fumbling for your phone or propping it up precariously with random objects. With the Phone Holder by your side, convenience and elegance go hand in hand. 🙌💖
        
        Embrace the future of device management and elevate your tech experience with the Phone Holder today! 🚀🌟`,
    price: 10.37,
    // rating: ratedex,
    // ratingId: ratingStar
  },
  {
    id: 3,
    category: "Electronics",
    title: `Vintage Retro GREEN Rotary Dial TELEPH ONE`,
    image:
      "https://i.etsystatic.com/13256166/r/il/e00bcf/5821893246/il_794xN.5821893246_cl48.jpg",
    price: 54.6,
    discription: `Vintage Australian AWA TELECOM rotary dial phone
        Dates from the 1970s
        In Working order when last used
        Excellent condition, clean and shiny exterior with no flaws.`,
    // rating: ratedex,
    // ratingId: ratingStar
  },

  {
    id: 4,
    title: `Audio Guestbook (Reusable)`,
    image:
      "https://i.etsystatic.com/38341300/r/il/fcacf2/5305677330/il_794xN.5305677330_jyum.jpg",
    discription: `Wedding Audio Guestbooks - Brand New Canadian Seller / Fully made using Canadian products.

        This is not an overseas model, this is entirely handmade. If you have any questions or concerns please let me know, I would be happy to help!`,
    price: 244.87,
    category: "Electronics",
  },
  {
    id: 5,
    title: `Antique Danish telephone`,
    image:
      "https://i.etsystatic.com/40634112/r/il/7105eb/5792603195/il_794xN.5792603195_lv2y.jpg",
    discription: `Fantastic antique hand crank telephone from Denmark, dating from the early 1900s to perhaps the 1920s. This is the Jydsk Telefon Aktieselskab, which is marked on both sides with a blue, red and gold coat of arms in an ornate gold frame. The base of the phone is metal with black and gold enamel and on top it has a metal handset with a Bakelite earpiece, black ribbed wooden handle and Bakelite mouthpiece. The phone comes with an additional silver-colored metal mouthpiece.

        The phone comes with two long fabric-covered cords that connect the headset to the base and plug, but the original plug doesn't work in the US and hasn't been tested. When the laptop is undocked, turning the crank (a necessary step to raise it) causes the two bells at the base to ring loudly.
        
        This phone is in very good condition for its age
        
        Dimensions: With the headset on, the phone is 10 inches wide x 5 inches deep x 12.75 inches high (25.4 x 12.7 x 32.4 cm)`,
    price: 311.18,
    category: "Electronics",
  },
  {
    id: 6,
    title: `Spider sony XM4 XM5`,
    image:
      "https://i.etsystatic.com/39890432/r/il/df19b0/5855074141/il_794xN.5855074141_4yc4.jpg",
    discription: `Introducing Spider Metal Headphone Attachments: Elevate Your Audio Experience!
        Are you tired of flimsy headphone accessories that break easily? Say goodbye to cheap plastic and hello to Spider Metal Headphone Attachments – the ultimate solution for durability and style in one sleek package.`,
    price: 36.01,
    category: "Electronics",
  },
  {
    id: 7,
    title: `4K Pro Foldable RC Drone`,
    image:
      "https://i.etsystatic.com/49645094/r/il/d80cf8/5703712402/il_794xN.5703712402_5gp8.jpg",
    discription:
      "Explore the skies and capture breathtaking moments with the 4K Pro Foldable RC Drone. This cutting-edge drone is designed for both enthusiasts and professionals, offering advanced features that elevate your aerial photography experience.",
    price: 159.03,
    category: "Electronics",
  },
  {
    id: 8,
    title: `Sandisk Extreme SSD holder`,
    image:
      '"https://i.etsystatic.com/41370775/r/il/d84ae3/5818179632/il_794xN.5818179632_rgwk.jpg"',
    discription: `Our universal SSD mount provides a practical and cost-effective solution for expanding laptop storage. With a robust design made in Germany, it allows your SanDisk SSD to be firmly and securely attached directly to your laptop. The innovative suction cup technology ensures a stable connection without slipping or wobbling, while at the same time relieving strain on your device's USB port. Available in three stylish colors - black, white and gray - this mount fits perfectly with any laptop and any style. Please note that the SSD must be purchased separately.`,
    price: 13.67,
    category: "Electronics",
  },
  {
    id: 9,
    title: `Custom buttonbox on demand USB, for space / racing simulation`,
    image:
      "https://i.etsystatic.com/50729869/r/il/df5faf/5867708461/il_794xN.5867708461_35se.jpg",
    discription: `Custom-make a button box to meet your needs for additional controls and immersion for your space or aviation simulation PC games!
        Plug and play, this buttonbox connects via USB and will be directly recognized as a controller, ready to meet all your gaming needs.
        Please feel free to contact me for more information/suggestions/custom requests.
        Choose between three different boxes:
        - Small: Dimensions: 15.7cm x 9cm x 6cm, 12 buttons MAX
        - Large: Dimensions: 20cm x 11.9cm x 5.8cm, 16 buttons MAX
        - Large with fixings: Dimensions: 20cm x 11.9cm x 5.8cm, 16 buttons MAX
        Once the box has been chosen, you can choose the buttons from the following selection, and make a custom layout of the buttons on the box, up to a maximum of 16 buttons.
        Each option allows you to choose between several types and quantity of buttons to choose from.
        -Metal button diameter 19mm
        -Metal button with relief diameter 19mm
        -Metal button with 19mm LED lighting (available colors: Blue, Green)
        -Metal button with 12mm red LED lighting
        -Metal lever with one or two positions (the two positions can be two different controls)
        -ABS button diameter 12mm
        -ABS button diameter 9mm
        The box will be covered in a carbon-style finish.
        You can also choose where the 1.6 meter long USB cable will come out.
        Various additional options are also offered:
        - A missile type cover on a lever
        - A switch to turn off the LEDS on the buttons (only turns off the LEDS, the buttons can still be used)`,
    price: 101.45,
    category: "Electronics",
  },
  {
    id: 10,
    title: `Cell Phone Holder Amplifier`,
    image:
      "https://i.etsystatic.com/49852531/r/il/ef5a49/5833420362/il_794xN.5833420362_7jk5.jpg",
    discription: `See Promotional Offerings Below.
        Introducing our smart phone stand with an acoustic amplifier. No need to charge or have wires running around, this stand is designed to be a portable speaker substitute. There's no need to fret about batteries, cords or connectivity with this sound amplifying phone holder. Simply place your phone as you would on any holder, it's that simple.
        
        This makes for a great gift for camping trips, pool sides, side tables or parties where you need a sound boost with limited electrical options. Might also make an exceptionally unique gift for birthdays, Christmas, groomsmen, adventurers or for any music lover.
        
        Your stand, your choices. Select any color we offer and if we don't offer it just ask us and we will be more than happy to accommodate. This design is made to fit nearly all phones with small cases, however we can tweak the design dimensions if you need so that your device fits. Simply write us your dimensions (depth or phone thickness) in the comments.
        
        Built and biodegradable plastics (PLA+) which sports a great combination of strength and sturdiness, all while being super light weight and easy portability.
        
        
        Dimensions:
        Length: 88 mm / 3.4 inches
        Width: 80 mm / 3.1 inches
        Height: 99.5 mm / 3.9 inches
        
        PROMOTIONAL Offerings:
        Free shipping on orders over $50
        Buy 2 and get 10% OFF: 2GET10OFF
        Buy 4 and get 20% OFF: 4GET20OFF
        Buy 6 and get 30% OFF: 6GET30OFF`,
    price: 19.35,
    category: "Electronics",
  },
  {
    id: 11,
    title: `Functional Wood Armrest Table`,
    image:
      "https://i.etsystatic.com/19738945/r/il/548c89/4725906973/il_794xN.4725906973_400e.jpg",
    discription: `Handcrafted Wood Armrest Table - Simple and Functional Couch Tray, Sofa Arm Tray Table, Couch Sofa Arm Rest Table, Over The Couch Table, Custom Wood Sofa Arm Table, Chair Caddy, Arm Table, Couch Table, Sofa Arm Table


        If you have a custom width measurement request, it is enough for us to choose the closest size option and please write it in the personalization section`,
    price: 69,
    category: "Furniture",
  },
  {
    id: 12,
    title: `Liquor Drinks Cabinet`,
    image:
      "https://i.etsystatic.com/33551902/r/il/aff589/5855451736/il_794xN.5855451736_e6ig.jpg",
    discription: `Indulge in bespoke craftsmanship with our custom-built oak display cabinet, perfect for showcasing your prized possessions and doubling as a Liquor Cabinet. Tailored to your unique preferences, this exquisite piece is designed to elevate any space, whether it's a library, living room, office, exhibition area, or retail store.

        Crafted from premium solid oak, this cabinet boasts glass doors and shelves, ideal for displaying books, trophies, and other treasures, as well as your favorite liquors and spirits. The back panel is constructed from oak veneer, ensuring both durability and aesthetic appeal.
        
        Key Features:
        
        Custom-built to your specifications
        Made from high-quality solid oak
        Sliding glass doors and glass shelves (1cm thickness for shelves, 6mm thickness for doors)
        Back panel made from oak veneer
        Dimensions: Height 260cm, Width 2x3m (dimensions of the product shown in the images)
        Bottom cabinet depth: 25cm, Top cabinet depth: 35cm
        LED lighting installation available upon request
        Various colors of oil-wax available for this furniture piece. Check out our color palette in the photo section.
        
        Please note that the listed price is for the sample product shown in the images and serves as an approximate guide. Each project is individually quoted based on your specific requirements. Whether you prefer a rustic design or a sleek contemporary look, we can tailor the cabinet to your liking.
        
        Assembly of the product at the destination is the responsibility of the customer. However, rest assured that we provide remote assistance and guidance in case of any issues or questions.
        
        Elevate your space with this exquisite display cabinet, designed to showcase your prized possessions and spirits in style. For personalized quotes or inquiries, please don't hesitate to contact us. Thank you for considering our craftsmanship!`,
    price: 1923.65,
    category: "Furniture",
  },
  {
    id: 13,
    title: `Velvet Club Bath Tub Armchair`,
    image:
      "https://i.etsystatic.com/22387508/r/il/5a28fc/5323618320/il_794xN.5323618320_j9de.jpg",
    discription: `Velvet Club Bath Tub Armchair Cover | Thick Elastic Chair Cover | for Living Room High Quality Case

        Please read carefully:
        The product is only a sofa cover, Not including a pillowcase.
        
        Our cover is Great for saving your Chair or sofa from accidental damage that your lovely pets can cause. or Dust
        We are sure your pets will appreciate the softness of the Sofa Cover textile, and you will appreciate that it is very easy to take care of. It is designed to provide full coverage and protect the sofa It can be also used once you feel that you want to change your couch looks.
        there are many colors, so it is easy to choose the one that works best for your design.
        
        *note that due to the many variations in monitors and browsers, actual colors may vary.
        
        Size: as Photo
        Colors: as Photo
        Materials: Polyester spandex
        
        
        How To Wash:
        
        EASY CARE: Machine washable, wash at a temperature around 30 degrees Celsius, mild laundry detergents are advised, please do not bleach.
        
        package includes:
        Only Club Chair Slipcover * 1 Pc and Seat Cushion Cover * 1 Pc`,
    price: 246.05,
    category: "Furniture",
  },
  {
    id: 14,
    title: `Gorgeous coffee table`,
    image:
      "https://i.etsystatic.com/50706623/r/il/0d85c6/5860749856/il_794xN.5860749856_f275.jpg",
    discription: `Gorgeous coffee table handcrafted from solid Poplar slab top with live edge.
        With its rustic design and organic shape, this coffee table will bring the warmth of nature inside your home.
        The wood is smoothly polished and finished with thick layers of clear coat, which brings out the fascinating colours of this piece and provides strong protection.
        
        The table measures:
        
        Width - 125 cm / 49.2 inches
        Depth - 80 cm / 31.4 inches
        Height - 45 cm / 17.7 inches`,
    price: 247.92,
    category: "Furniture",
  },
  {
    id: 15,
    title: `Walnut Coffee Tamper Station for Barista`,
    image:
      "https://i.etsystatic.com/26948694/r/il/60362c/5698609050/il_794xN.5698609050_5wem.jpg",
    discription: `Enhance your coffee brewing experience with our Walnut Wood Coffee Tamper Station for Barista. This premium stand is expertly designed to accommodate all your barista essentials, including: Filters, Tampers, Portafilters, Dosing Ring and a Distributor, etc... Crafted from high-quality natural walnut wood, it combines both functionality and elegance, making it the perfect addition to elevate your coffee-making journey. Organize and optimize your coffee preparation with this top-tier coffee station.

        Enhanced Coffee Experience: Elevate your coffee brewing journey with a thoughtfully designed station that promotes efficiency, allowing you to focus on creating the perfect cup every time.
        
        Barista-Approved: Designed with baristas in mind, our Coffee Tamper Station is a top-tier addition to any coffee station, offering both functionality and style.
        
        Premium Walnut Wood: Crafted from high-quality natural walnut wood, this station not only adds a touch of elegance to your setup but also ensures durability and longevity.
        
        Versatile Storage: Our Coffee Tamper Station is designed to neatly store a range of barista essentials, including Filters, Tampers, Portafilters, Dosing Rings, Distributors, and more, providing an organized and efficient workspace.
        
        Adjustable Screw Cap: Customize the station to your exact needs by easily adjusting the height to accommodate different portafiller sizes.
        
        Additional Information!
        Material: Walnut Wood
        Diameter size: Suitable for 51/54/58mm Coffee Distributor/Tamper/Portafilter
        Length x width x height (Filter screen): 268mm x 180mm x 86mm
        Length x width x height (No filter screen): 220mm x 140mm x 75mm`,
    price: 96.9,
    category: "Furniture",
  },
  {
    id: 16,
    title: `Mcm Large Turntable Stand`,
    image:
      "https://i.etsystatic.com/41451074/c/1176/935/432/593/il/3e82b1/5120443183/il_340x270.5120443183_5le9.jpg",
    discription: `Mcm Style Large Turntable Stand and Mid Century Modern Vinyl Record Storage it is made of solid pine wood and is 100% handmade. Mcm Style Large Turntable Stand perfect for any bedroom furniture, dining room furniture, living room furniture. Solid Wood Record Player Stand it is strong but lightweight, the installation of the products is easy and intuitive..`,
    price: 246.05,
    category: "Furniture",
  },
  {
    id: 17,
    title: `HÄRLANDA 5 Seats Corner`,
    image:
      "https://i.etsystatic.com/19992001/r/il/8ba17f/5904535169/il_794xN.5904535169_fk0t.jpg",
    discription: `HÄRLANDA 5 Seats Corner sofa with Chaise sofa cover , Ikea Harlanda Sofa Cover, Harlanda Replacement Cover, Harlanda Sofa Cove`,
    price: 599,
    category: "Furniture",
  },
  {
    id: 18,
    title: `Parametric Lounge Chair A-1`,
    image:
      "https://i.etsystatic.com/45107702/r/il/2d5474/5724891562/il_794xN.5724891562_980i.jpg",
    discription: `Parametric Lounge Chair A-1 / Cnc Files for Cutting / Pool Chairs / Laser Cut dxf svg plan / Patterns & How To`,
    price: 866.45,
    category: "Furniture",
  },
  {
    id: 19,
    title: `Wood Coffee Table`,
    image:
      "https://i.etsystatic.com/23818550/r/il/588455/2585057112/il_794xN.2585057112_hov3.jpg",
    discription: `Wood Coffee Table, Natural Walnut Coffee Table, Custom Designed, Modern Coffee Table, Wood Art, Coffee Table, Handmade, Solid Coffee Table`,
    price: 866.45,
    category: "Furniture",
  },
  {
    id: 20,
    title: `Modern Sofa Side Table`,
    image:
      "https://i.etsystatic.com/44884484/r/il/d37826/5140752115/il_794xN.5140752115_16bq.jpg",
    discription: `C Shaped Side/End Table, Modern Sofa Side Table, Coffee Table For Living Room, Round Wood End/Side Table, Laptop Stand, Walnut Couch Table`,
    price: 99.9,
    category: "Furniture",
  },
  {
    id: 21,
    title: `Ottoman Pouffe Moroccan leather`,
    image:
      "https://i.etsystatic.com/31472240/r/il/15eaa1/3899938708/il_794xN.3899938708_fee1.jpg",
    discription: `Amazing square Ottoman Pouffe Moroccan leather, ottoman square pouf, light tan handmade footstool square pouffe Moroccan`,
    price: 22.08,
    category: "Furniture",
  },
  {
    id: 22,
    title: `Engraved Mechanical Wooden Watch`,
    image:
      "https://i.etsystatic.com/19990202/r/il/0b86ad/3366159529/il_794xN.3366159529_e1qs.jpg",
    discription: `Engraved Mechanical Wooden Watch| Engraving Men's Watch| bronze anniversary gift for men Personalized Watch with custom engraved handwriting`,
    price: 204.02,
    category: "Jewelry",
  },
  {
    id: 23,
    title: `Vintage SEIKO Gold Quartz Watch`,
    image:
      "https://i.etsystatic.com/7643820/r/il/17b75b/5900830975/il_794xN.5900830975_kpse.jpg",
    discription: `Vintage SEIKO Gold Quartz Watch with New Battery. Best fits 7” wrist or smaller.`,
    price: 125,
    category: "Jewelry",
  },
  {
    id: 24,
    title: `Leather Double Loop Apple Watch`,
    image:
      "https://i.etsystatic.com/36830783/r/il/40db1b/5893314059/il_340x270.5893314059_hdwf.jpg",
    discription: `Leather Double Loop Apple Watch Band 49mm 45mm 44mm 42mm 41mm 40mm 38mm iWatch Strap women mens ladies Bracelet Wedding Mother’s Day gift`,
    price: 25.46,
    category: "Electronics",
  },
  {
    id: 25,
    title: `Casio F-91W`,
    image:
      "https://i.etsystatic.com/7797562/r/il/64cf28/4159034033/il_794xN.4159034033_gna7.jpg",
    discription: `Casio F-91W Holographic Screen Foil`,
    price: 7.96,
    category: "Jewelry",
  },
  {
    id: 26,
    title: `Genuine Cartier Watch`,
    image:
      "https://i.etsystatic.com/50649156/r/il/0a7917/5906844153/il_794xN.5906844153_38z1.jpg",
    discription: `Genuine Cartier Watch. Must de Cartier Colisee Round Argent Vermeil Sterling Silver. Must de Cartier 925 Ladies 59002 Watch`,
    price: 1009,
    category: "Jewelery",
  },
  {
    id: 27,
    title: `Heart Apple Watch band charm`,
    image:
      "https://i.etsystatic.com/20710703/r/il/14676f/5483740496/il_794xN.5483740496_ahb4.jpg",
    discription: `Heart Apple Watch band charm, Gold Watch band accessories, Gift For Mom, Apple Watch accessories, Watch band jewelry, Fitbit, Diamond watch`,
    price: 11.2,
    category: "Jewelery",
  },
  {
    id: 28,
    title: `Faux Leather Watch Band For Apple iWatch`,
    image:
      "https://i.etsystatic.com/47187775/r/il/e5592a/5855780448/il_794xN.5855780448_nvhe.jpg",
    discription: `Personalised Name Abstract Ditsy Flowers Seamless Faux Leather Watch Band For Apple iWatch Series 9 8 7-1 SE 38mm 40mm 41mm 42mm 45mm`,
    price: 26.9,
    category: "Jewelery",
  },
  {
    id: 29,
    title: `Seiko 5 Red dial`,
    image:
      "https://i.etsystatic.com/41736540/r/il/6eaade/5849118066/il_340x270.5849118066_tfcu.jpg",
    discription: "",
    price: 105.08,
    category: "Jewelery",
  },
  {
    id: 30,
    title: `Gold Apple Watch`,
    image:
      "https://i.etsystatic.com/33605959/c/1888/1499/8/194/il/823b50/5905283299/il_340x270.5905283299_21uu.jpg",
    discription: `Gold Apple Watch Band 38mm 40mm 41mm 42mm 44mm 45mm 49mm, Chain Bracelet Band for iWatch Series 9 8 7 6, Apple Watch Jewelry, Gift for her`,
    price: 38.08,
    category: "Jewelery",
  },
  {
    id: 31,
    title: `Panerai Luminor Marina`,
    image:
      "https://i.etsystatic.com/23018164/r/il/4614b8/5903990069/il_794xN.5903990069_450x.jpg",
    discription: `Panerai Luminor Marina Chronograph New 2024 Blu Notte 44mm Automatic Rose Gold Pam1111`,
    price: 995,
    category: "Jewelery",
  },
  {
    id: 32,
    title: `Mens Summer Polo Shirt`,
    image:
      "https://i.etsystatic.com/50953406/r/il/5778be/5902616165/il_794xN.5902616165_65lt.jpg",
    discription: `Ralph Lauren Mens Summer Polo Shirt - Short Sleeve T-Shirt Classic Design`,
    price: 26.3,
    category: `Men's clothing`,
  },
  {
    id: 33,
    title: `John Summit Shirt`,
    image:
      "https://i.etsystatic.com/18618076/r/il/482dff/5860481952/il_1140xN.5860481952_5l8f.jpg",
    discription: `John Summit Shirt, Miami how tf we feeling, b2b Dom Dolla tee, house music tshirt, rave gifts, tik tok, viral shirt, house music tshirt, edm`,
    price: 20.89,
    category: `Men's clothing`,
  },
  {
    id: 34,
    title: `John Summit Shirt`,
    image:
      "https://i.etsystatic.com/18618076/r/il/78b901/5860549048/il_794xN.5860549048_rtb6.jpg",
    discription: `John Summit Shirt, Miami how tf we feeling, b2b Dom Dolla tee, house music tshirt, rave gifts, tik tok, viral shirt, house music tshirt, edm`,
    price: 20.89,
    category: `Men's clothing`,
  },
  {
    id: 35,
    title: `Checkered Disney Shirt`,
    image:
      "https://i.etsystatic.com/49453355/r/il/878cdd/5908559515/il_794xN.5908559515_rq2e.jpg",
    discription: `Vintage Minnie Shirt, Disney Shirt, Minnie 1928 Shirt, Checkered Minnie Shirt, Checkered Disney Shirt, Retro Disney Shirt`,
    price: 14.99,
    category: `Women's clothing`,
  },
  {
    id: 36,
    title: `EETFUK Hoodie`,
    image:
      "https://i.etsystatic.com/51055089/r/il/8b7301/5901925943/il_794xN.5901925943_217d.jpg",
    discription: `Metallica Style Unisex Heavy Blend™ Hooded Sweatshirt, EETFUK Hoodie`,
    price: 32.97,
    category: `Men's clothing`,
  },
  {
    id: 37,
    title: `Michigan State Basketball Sweater`,
    image:
      "https://i.etsystatic.com/47936444/r/il/c43d74/5908434979/il_794xN.5908434979_7rht.jpg",
    discription:
      "`Michigan State Basketball Vintage Style Comfort Colors Sweatshirt,Michigan State Basketball Sweater, Spartan Basketball Fan Gift`",
    price: 39.13,
    category: `Men's clothing`,
  },
  {
    id: 38,
    title: `Bear Head T-shirt`,
    image:
      "https://i.etsystatic.com/51007322/r/il/864ef1/5855849208/il_794xN.5855849208_nwsv.jpg",
    discription: `Unisex Softstyle T-Shirt, Fitness Kulübü T-shirt, turn pain into strength T-shirt, Bear Head T-shirt`,
    price: 14.58,
    category: `Men's clothing`,
  },
  {
    id: 39,
    title: `Men's Casual Pants Korean Style`,
    image:
      "https://i.etsystatic.com/49266334/r/il/4c76f5/5847348487/il_794xN.5847348487_feqx.jpg",
    discription: `Step into contemporary style with our Korean Style Men's Casual Pants – a perfect fusion of comfort and sophistication. The slim fit and elastic waist ensure a tailored yet comfortable silhouette, while pleated detailing adds a touch of refinement. Designed with the latest trends in mind, these trousers effortlessly bridge the gap between business casual and old money fashion. Elevate your wardrobe with a versatile piece that embodies modern elegance, making a statement wherever your day takes you.`,
    price: 32.71,
    category: `Men's clothing`,
  },
  {
    id: 40,
    category: `Men's clothing`,
    title: `Timid Sumo`,
    image:
      "https://i.etsystatic.com/36054330/r/il/728077/5877306447/il_794xN.5877306447_ptu9.jpg",
    price: 27.81,
    discription: "Timid Sumo - Shorts",
  },
  {
    id: 41,
    category: `Men's clothing`,
    title: `Unisex Y2K Pants`,
    image:
      "https://i.etsystatic.com/47040188/r/il/b9b488/5605685597/il_794xN.5605685597_4l4e.jpg",
    price: 49.48,
    discription: `Elevate your style with our Ebony Streetwear Red Slash Pants, tailored for the modern trendsetter. These pants offer a perfect blend of urban sophistication and relaxed comfort, all in a rich ebony shade. From casual hangouts to city adventures, they're your go-to choice.

        ✅ Adaptable Style: Fits all occasions, casual to upscale.
        ✅ Comfortable: Premium materials for day-long comfort.
        ✅ Lasting Quality: Durable design for lasting style.
        ✅ Distinctive Texture: Stand out with unique design details..`,
  },
  {
    id: 42,
    category: `Men's clothing`,
    title: `Unisex Y2K Pants`,
    image:
      "https://i.etsystatic.com/47040188/r/il/f8865c/5752936237/il_794xN.5752936237_fuvh.jpg",
    price: 49.48,
    discription: `Elevate your style with our Elastic Ebony Streetwear Pants, tailored for the modern trendsetter. These pants offer a perfect blend of urban sophistication and relaxed comfort, all in a rich ebony shade. From casual hangouts to city adventures, they're your go-to choice.

        ✅ Adaptable Style: Fits all occasions, casual to upscale.
        ✅ Comfortable: Elastic fit for day-long comfort.
        ✅ Lasting Quality: Durable design for lasting style.
        ✅ Distinctive Texture: Stand out with unique design details.`,
  },
  {
    id: 43,
    category: `Men's clothing`,
    title: `High Quality Baggy Sweatpants`,
    image:
      "https://i.etsystatic.com/49151383/r/il/9502dc/5898055935/il_794xN.5898055935_5um7.jpg",
    price: 46.92,
    discription:
      "High Quality Eclipse Gray 380GSM Unisex Heavyweight Baggy Sweatpants",
  },
  {
    id: 44,
    category: `Men's clothing`,
    title: `cargo pant for men trousers`,
    image:
      "https://i.etsystatic.com/49316655/r/il/266649/5848314900/il_794xN.5848314900_6mm2.jpg",
    price: 30,
    discription: `Explore timeless style with our custom vintage pants, featuring a high waist for a trendy streetwear look. These baggy and casual men's parachute cargo pants not only exude comfort but also boast unique customization options. Elevate your fashion with personalized details and ample pockets, making them the perfect blend of style and functionality. Embrace individuality with these long trousers that effortlessly combine vintage charm and modern street style. Order your customized pair today for a one-of-a-kind fashion statement.`,
  },
  {
    id: 45,
    category: `Women's clothing`,
    title: `Emerald green silk dress`,
    image:
      "https://i.etsystatic.com/25925166/r/il/ed3522/5883561229/il_1140xN.5883561229_dti2.jpg",
    price: 84.6,
    discription:
      "Emerald green silk dress, silk dress, wrap dress, bridesmaid dress, wedding guest dress, women dress, evening dress, long dress",
  },
  {
    id: 46,
    category: `Women's clothing`,
    title: `Emerald green silk dress`,
    image:
      "https://i.etsystatic.com/25925166/r/il/45dde6/5883561239/il_794xN.5883561239_4kba.jpg",
    price: 84.6,
    discription:
      "Emerald green silk dress, silk dress, wrap dress, bridesmaid dress, wedding guest dress, women dress, evening dress, long dress",
  },
  {
    id: 47,
    category: `Women's clothing`,
    title: `Wedding Dress`,
    image:
      "https://i.etsystatic.com/28278936/r/il/fcbd6c/5907633011/il_794xN.5907633011_lo3b.jpg",
    price: 143.08,
    discription:
      "Bohemian Dress, Wedding Dress, Long Summer Dress, Greek Goddess Dress, Helen Dress, Organic Cotton",
  },
  {
    id: 48,
    category: `Women's clothing`,
    title: `Elegant Blue Abaya`,
    image:
      "https://i.etsystatic.com/50755509/r/il/b4bc3e/5809051876/il_794xN.5809051876_nlgh.jpg",
    price: 49.24,
    discription: "Kaftan Elegant Blue Abaya: Unique Blend of Comfort and Style",
  },
  {
    id: 49,
    category: `Women's clothing`,
    title: `Anysize cuatom`,
    image:
      "https://i.etsystatic.com/9514795/r/il/785093/5827991718/il_794xN.5827991718_t6f6.jpg",
    price: 43.28,
    discription:
      "Anysize cuatom 3/4 sleeves 100% linen maxi classic V-neck retro dress with pockets spring summer plus size dress plus size clothing F445L",
  },
  {
    id: 50,
    category: `Women's clothing`,
    title: `Women's Cotton Linen Pocket Dress`,
    image:
      "https://i.etsystatic.com/50623948/r/il/990c54/5874587323/il_794xN.5874587323_d85d.jpg",
    price: 31.97,
    discription: "",
  },
  {
    id: 51,
    category: `Women's clothing`,
    title: "Off-Shoulder Ladies Fashion",
    image:
      "https://i.etsystatic.com/16049496/r/il/0ed364/5905253149/il_1140xN.5905253149_az2f.jpg",
    price: 63,
    discription: "",
  },
  {
    id: 52,
    category: `Women's clothing`,
    title: `Knitted Mini Dress`,
    image:
      "https://i.etsystatic.com/50793050/r/il/d4b36f/5853327256/il_1140xN.5853327256_kuto.jpg",
    price: 39,
    discription: "",
  },
  {
    id: 53,
    category: `Women's clothing`,
    title: "Off-Shoulder Ladies Fashion",
    image:
      "https://i.etsystatic.com/50793050/r/il/a4ae48/5853327242/il_1140xN.5853327242_k3ay.jpg",
    price: 29,
    discription:
      "Ruffle Strapless Cloth | Off-Shoulder Ladies Fashion | Knitted Mini Dress",
  },
  {
    id: 54,
    category: `Women's clothing`,
    title: "KT165/ Tie dyed",
    image:
      "https://i.etsystatic.com/11820931/r/il/c74d1d/5902056461/il_794xN.5902056461_bey3.jpg",
    price: 39,
    discription:
      "KT165/ Tie dyed ,Long Kaftan simple Dress, stylish, Elegant, Miami,lbiza,Holiday Dress,Evening dress,loose fit,Sharon",
  },
  {
    id: 55,
    category: `Men's clothing`,
    title: "Airforce AF3",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 15.4,
    discription:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  },
  {
    id: 56,
    category: "Men's clothing",
    title: `Mens Casual Premium Slim Fit T-Shirts`,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 30.2,
    discription:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  },
  {
    id: 57,
    category: "Men's clothing",
    title: "Mens Cotton Jacket",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 55.99,
    discription: `From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.`,
  },
  {
    id: 58,
    category: `Jewelery`,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    price: 10.99,
    discription:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  },
  {
    id: 59,
    category: "Electronics",
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    price: 599,
    discription:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
  },
  {
    id: 60,
    category: `Women's clothing`,
    title: `BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats`,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    price: 56.99,
    discription:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
  },
  {
    id: 61,
    category: "Electronics",
    title: "Sleek All-Terrain Go-Kart",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FEx5x3IU.jpg&w=640&q=75",
    price: 37,
    discription:
      "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
  },
  {
    id: 62,
    category: `Women's clothing`,
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FAzAY4Ed.jpeg&w=640&q=75",
    price: 53,
    discription:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
  },
  {
    id: 63,
    category: `Women's clothing`,
    title: "Futuristic Chic High-Heel Boots",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FHqYqLnW.jpeg&w=640&q=75",
    price: 36,
    discription:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
  },
  {
    id: 64,
    category: `Women's clothing`,
    title: "Futuristic Silver and Gold High-Top Sneaker",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FnpLfCGq.jpeg&w=640&q=75",
    price: 68,
    discription:
      "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
  },
  {
    id: 65,
    category: `Women's clothing`,
    title: "Vibrant Pink Classic Sneakers",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FmcW42Gi.jpeg&w=640&q=75",
    price: 84,
    discription:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
  },
  {
    id: 66,
    category: `Women's clothing`,
    title: `Vibrant Runners: Bold Orange & Blue Sneakers`,
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FhKcMNJs.jpeg&w=640&q=75",
    price: 27,
    discription: `Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.`,
  },
  {
    id: 67,
    category: `Women's clothing`,
    title: "Chic Summer Denim Espadrille Sandals",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2F9qrmE1b.jpeg&w=640&q=75",
    price: 33,
    discription:
      "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
  },
  {
    id: 68,
    category: `Women's clothing`,
    title: "Rainbow Glitter High Heels",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2F62gGzeF.jpeg&w=640&q=75",
    price: 39,
    discription:
      "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
  },
  {
    id: 69,
    category: `Men's clothing`,
    title: "Futuristic Holographic Soccer Cleats",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FqNOjJje.jpeg&w=640&q=75",
    price: 39,
    discription: `Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.`,
  },
  {
    id: 70,
    category: "Furniture",
    title: "Modern Ergonomic Office Chair",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2F3dU0m72.jpeg&w=640&q=75",
    price: 71,
    discription: "",
  },
  {
    id: 71,
    category: "Furniture",
    title: "Modern Minimalist Workstation Setup",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2F3oXNBst.jpeg&w=640&q=75",
    price: 49,
    discription:
      "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
  },
  {
    id: 72,
    category: "Furniture",
    title: "Elegant Solid Wood Dining Table",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2F4lTaHfF.jpeg&w=640&q=75",
    price: 67,
    discription:
      "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
  },
  {
    id: 73,
    category: "Furniutre",
    title: "Modern Elegance Teal Armchair",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2F6wkyyIN.jpeg&w=640&q=75",
    price: 25,
    discription:
      "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
  },
  {
    id: 74,
    category: "Furniture",
    title: "Elegant Golden-Base Stone Top Dining Table",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FNWIJKUj.jpeg&w=640&q=75",
    price: 66,
    discription:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern decoration.",
  },
  {
    id: 75,
    category: "Furniture",
    title: "Mid-Century Modern Wooden Dining Table",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FDMQHGA0.jpeg&w=640&q=75",
    price: 130,
    discription:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
  },
  {
    id: 76,
    category: "Furniture",
    title: "Sleek Modern Leather Sofa",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FQphac99.jpeg&w=640&q=75",
    price: 53,
    discription:
      "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
  },
  {
    id: 77,
    category: "Electronics",
    title: "Sleek Smartwatch with Vibrant Display",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FLGk9Jn2.jpeg&w=640&q=75",
    price: 16,
    discription:
      "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
  },
  {
    id: 78,
    category: "Electronics",
    title: "Sleek Mirror Finish Phone Case",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2Fyb9UQKL.jpeg&w=640&q=75",
    price: 27,
    discription: `Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.`,
  },
  {
    id: 79,
    category: "Electronics",
    title: "Stylish Red & Silver Over-Ear Headphones",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FYaSqa06.jpeg&w=640&q=75",
    price: 60,
    discription:
      "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
  },
  {
    id: 80,
    category: "Electronics",
    title: "Sleek Modern Laptop for Professionals",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FItHcq7o.jpeg&w=640&q=75",
    price: 97,
    discription:
      "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
  },
  {
    id: 81,
    category: "Electronics",
    title: "Sleek Modern Laptop with Ambient Lighting",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FOKn1KFI.jpeg&w=640&q=75",
    price: 43,
    discription:
      "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
  },
  {
    id: 82,
    category: "Electronics",
    title: "Sleek Wireless Computer Mouse",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2Fw3Y8NwQ.jpeg&w=640&q=75",
    price: 80,
    discription:
      "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
  },
  {
    id: 83,
    category: "Electronics",
    title: "Efficient 2-Slice Toaster",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FkeVCVIa.jpeg&w=640&q=75",
    price: 48,
    discription:
      "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
  },
  {
    id: 84,
    category: "Electronics",
    title: "Sleek Comfort-Fit Over-Ear Headphones",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FSolkFEB.jpeg&w=640&q=75",
    price: 78,
    discription: `Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.`,
  },
  {
    id: 85,
    category: "Electronics",
    title: "Sleek Wireless Headphone & Inked Earbud Set",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FyVeIeDa.jpeg&w=640&q=75",
    price: 44,
    discription:
      "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs",
  },
  {
    id: 86,
    category: "Electronics",
    title: "Sleek White & Orange Wireless Gaming Controller",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FZANVnHE.jpeg&w=640&q=75",
    price: 69,
    discription:
      "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
  },
  {
    id: 87,
    category: `Men's clothing`,
    title: "Classic Olive Chino Shorts",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FUsFIvYs.jpeg&w=640&q=75",
    price: 84,
    discription:
      "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
  },
  {
    id: 88,
    category: "",
    title: "Classic Black Baseball Cap",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FKeqG6r4.jpeg&w=640&q=75",
    price: 58,
    discription:
      "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
  },
  {
    id: 89,
    category: "",
    title: "Classic Red Baseball Cap",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FcBuLvBi.jpeg&w=640&q=75",
    price: 35,
    discription:
      "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
  },
  {
    id: 90,
    category: "",
    title: "Classic Blue Baseball Cap",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FwXuQ7bm.jpeg&w=640&q=75",
    price: 86,
    discription:
      "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear",
  },
  {
    id: 91,
    category: `Women's clothing`,
    title: "Classic High-Waisted Athletic Shorts",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FeGOUveI.jpeg&w=640&q=75",
    price: 43,
    discription:
      "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
  },
  {
    id: 92,
    category: "Electronics",
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    price: 109,
    discription:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
  },
  {
    id: 93,
    category: "Electronics",
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    price: 114,
    discription: `Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty`,
  },
  {
    id: 94,
    category: "Electronics",
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    price: 109,
    discription:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
  },
  {
    id: 95,
    category: `Men's clothing`,
    title: `Mens Casual Slim Fit`,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: 15.99,
    discription:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  },
  {
    id: 96,
    category: "Jewelery",
    title: `John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet`,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    price: 695,
    discription: `From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.`,
  },
  {
    id: 97,
    category: "Jewelery",
    title: "Solid Gold Petite Micropave",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    price: 168,
    discription:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  },
  {
    id: 98,
    category: "Jewelery",
    title: "White Gold Plated Princess",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 9.99,
    discription: `Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...`,
  },
  {
    id: 99,
    category: "Jewelery",
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    price: 10.99,
    discription:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  },
  {
    id: 100,
    category: "Electronics",
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    price: 64,
    discription: `USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system`,
  },
  {
    id: 101,
    category: `Women's clothing`,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    price: 12.99,
    discription:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  },
  {
    id: 102,
    category: `Women's clothing`,
    title: `Opna Women's Short Sleeve Moisture`,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    price: 7.97,
    discription:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
  },
  {
    id: 103,
    category: `Women's clothing`,
    title: `MBJ Women's Solid Short Sleeve Boat Neck V `,
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    price: 9.85,
    discription:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
  },
  {
    id: 104,
    category: `Women's clothing`,
    title: `Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket`,
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    price: 29.95,
    discription:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
  },
  {
    id: 105,
    category: `Women's clothing`,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    price: 14,
    discription: `Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.`,
  },
  {
    id: 106,
    category: "Eletronics",
    title: "Sleek Futuristic Electric Bicycle",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FBG8J0Fj.jpg&w=640&q=75",
    price: 78,
    discription: `This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease`,
  },
  {
    id: 107,
    category: `Men's clothing`,
    title: "Classic Blue Suede Casual Shoes",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FsC0ztOB.jpeg&w=640&q=75",
    price: 62,
    discription: `Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.`,
  },
  {
    id: 108,
    category: `Men's clothing`,
    title: `Elegant Purple Leather Loafers`,
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FAu8J9sX.jpeg&w=640&q=75",
    price: 27,
    discription: `Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.`,
  },
  {
    id: 109,
    category: ``,
    title: `Elegant Glass Tumbler Set`,
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FTF0pXdL.jpg&w=640&q=75",
    price: 35,
    discription: `Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.`,
  },
  {
    id: 110,
    category: ``,
    title: `Sleek Olive Green Hardshell Carry-On Luggage`,
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FjVfoZnP.jpg&w=640&q=75",
    price: 67,
    discription: `Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.`,
  },
  {
    id: 111,
    category: ``,
    title: `Radiant Citrus Eau de Parfum`,
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FxPDwUb3.jpg&w=640&q=75",
    price: 78,
    discription: `Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.`,
  },
  // {
  //     id:'',
  //     category:``,
  //     title:``,
  //     image:'',
  //     price:,
  //     discription:``,
  // },
];

function displayProducts() {
  const showProduct = document.querySelector(".products");
  product.forEach((products, i) => {
    showProduct.innerHTML += `
        <div class="card p-2 text-center wrap" >
        <img src="${products.image}" class="card-img-top img-fluid
        productsImage" alt="..." onclick ='discription(${products.id})'>
        <div class="card-body">
          <h6 class="card-title">${products.title.slice(0, 40)}...</h6>
        </div>
        <ul class='price text-center '><li>USD ${products.price}</li></ul>
       
        <div class="card-body text-center">
            <button type="button" class="btn btn-dark mb-5 addTocart"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
            onclick="addtoCart(${products.id})">
      Add to Cart
    </button>
        </div>
    </div>
        `;
  });
}
displayProducts();

const searchedProduct = document.querySelector(".searchform");
searchedProduct.addEventListener("submit", (e) => {
    const searchInput = document.querySelector('.searchInput').value
    const productSearched = product.filter((productSearch)=>productSearch.title.includes(searchInput))
    const showProduct = document.querySelector(".products");
    showProduct.innerHTML = ''
    productSearched.forEach((seacrched)=>{
        showProduct.innerHTML += `
        <div class="card p-2 wrap">
        <img src="${seacrched.image}" class="card-img-top img-fluid
        productsImage" alt="..." 
        onclick ='discription(${seacrched.id})'>
        <div class="card-body">
          <h6 class="card-title">${seacrched.title.slice(0, 40)}...</h6>
        </div>
        <ul class='price text-center '><li>USD ${seacrched.price}</li></ul>
        <div class="card-body text-center" style="height:50px;">
            <button type="button" class="btn btn-dark addTocart mb-5"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" onclick="addtoCart(${seacrched.id})" 
            >
      Add to Cart
    </button>
        </div>
    </div>
        `
    })
    if (productSearched == false) {
        showProduct.innerHTML = '';
        showProduct.innerHTML += `
        <div class = 'card-body text-center  text-body-tertiary border-none itemNotFound'>
         <h1>"Ooopps....item not found"</h1> 
        </div>
        `;
      }
  e.preventDefault();
});


discription = (id) =>{
  product.forEach((clickedEl)=>{
    if (clickedEl.id == id) {
      const discriptionBody = document.querySelector('.discriptionBody')
      discriptionBody.innerHTML = `
      <div class = 'discribeWrapper d-flex justify-content-center' style = "width:85vw;">
      <div class="card mb-3 " style = "max-width: 800px;">
      <div class="row g-0  p-3">
      <p><i class="bi bi-arrow-left" style="font-size: 2rem; color:dark;"></i></p>
        <div class="col-md-4">
          <img src="${clickedEl.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body pb-5">
            <h5 class="card-title">${clickedEl.title}</h5>
            <ul class='price text-start '><li>USD ${clickedEl.price}</li></ul>
            <p class="card-text">${clickedEl.discription}</p>
            <p class="card-text"><small class="text-center d-grid justify-content-center"><button type="button" class="btn btn-dark"
            onclick="addtoCart(${clickedEl.id})"
            >Add To Cart</button></small></p>
          </div>
        </div>
      </div>
    </div>
      </div>
      `
    }
  })
  const closeDiscription = document.querySelector('.bi-arrow-left')
  closeDiscription.addEventListener('click',()=>{
    const bodyDiscription = document.querySelector('.discriptionBody')
   bodyDiscription.innerHTML = ''

  })
}

calculateTotalPrice = () => {
  const totalPrice = cart.reduce((total, item)=> total + item.price, 0)
  return totalPrice.toFixed(2)
}
calculateTotalPrice()


addtoCart = (id) =>{
 product.forEach((elem)=>{
  if (elem.id == id){
    if(cart.some((cartItem)=> cartItem.id === elem.id)){
    }else if (!cart.some((cartItem)=> cartItem === elem.id)) {
      cart.push(elem)
      const cartLength = document.querySelector('.cartLength')
      cartLength.innerHTML = cart.length
    }
  }
 })
 displayCartProduct()
}
const total = document.querySelector('.total')


displayCartProduct = () =>{
  const cartBody = document.querySelector('.cartProductDisplay')
  const cartLength = document.querySelector('.cartLength')
  if (cartLength.innerHTML == false) {
    cartBody.innerHTML = ''
    cartBody.innerHTML = `
    <div class = "text-center card-body">
        <span>
        <i class="bi bi-bag-fill"></i>
        </span>
        <p class ="h5">
        Your Cart is Empty
        </p>
    </div>
    `
  }else{
    cartBody.innerHTML = ''
    cart.forEach((ele,index)=>{
      cartBody.innerHTML +=`
      <div class="mb-2 p-2 d-flex justify-content-center align-items-center gap-1">
      <img src="${ele.image}" class = "img-fluid" alt=""  style="width:7rem;">
      <p>${ele.title.slice(0, 25)}...</p>
      <p>$${ele.price}</p>
      <span>
    <button type="button" class="btn btn-outline-danger mb-3" id="cartDel" onclick="deleteCart(${index})">Delete</button>
   </span>
      </div>
      `
      total.innerHTML = `$${calculateTotalPrice()}`
      
    })
  }
}
displayCartProduct()

deleteCart = (index) => {
  cart.splice(index, 1)
  const cartLength = document.querySelector('.cartLength')
  cartLength.innerHTML = cart.length
  total.innerHTML = `$${calculateTotalPrice()}`
  displayCartProduct()
}

const emptyCart = document.querySelector('.emptyCart')
emptyCart.addEventListener('click',()=>{
  cart = []
  const cartLength = document.querySelector('.cartLength')
  cartLength.innerHTML = cart.length
  total.innerHTML = `$${calculateTotalPrice()}`
  displayCartProduct()

})

const checkOut = document.querySelector('.checkOut')
checkOut.addEventListener('click',()=>{
  const emptyCartAlert = document.querySelector('.emptycartalert')  
  if (cart.length !== 0) {
    localStorage.removeItem('totalPrice')
    localStorage.setItem('totalPrice', calculateTotalPrice())
    window.location.href = "../HTML/luxuryshipping.html";
  }else{
    emptyCartAlert.innerHTML = ''
    emptyCartAlert.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
    <strong>Hello! Your cart is empty</strong> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    `
    setTimeout(()=>{
      emptyCartAlert.innerHTML = ''
    },3000)
  }
})

function cate(ev) {
  const showProduct = document.querySelector(".products");
  showProduct.innerHTML = ''
  const filtered = product.filter((filteredProduct)=> filteredProduct.category === ev.target.innerHTML)

  filtered.forEach((elem)=>{
    showProduct.innerHTML += `
    <div class="card p-2 wrap">
    <img src="${elem.image}" class="card-img-top img-fluid
    productsImage" alt="..." onclick ='discription(${elem.id})'>
    <div class="card-body">
      <h6 class="card-title">${elem.title.slice(0, 40)}...</h6>
    </div>
    <ul class='price text-center '><li>USD ${elem.price}</li></ul>
    <div class="card-body text-center" style="height:50px;">
        <button type="button" class="btn btn-dark mb-5 addTocart"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
        onclick="addtoCart(${elem.id})">
  Add to Cart
</button>
    </div>
</div>
    `;
  })
}