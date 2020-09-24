let merch = [
    {
      id: 1,
      name: "3 piece suit",
      size: "L",
      color: "Grey",
      price: 8000,
      image:
        "https://i.pinimg.com/originals/87/99/80/879980ae2b7449fff818a168da4ccd0e.jpg",
      description: "Smooth Grey Suit",
    },
    {
      id: 2,
      name: "Black tuxedo",
      size: "M",
      color: "Black",
      price: 6000,
      image: "https://64.media.tumblr.com/a6063f0240618d8914094db94c4bf07f/tumblr_pthrd4bjNd1uh8wvk_640.jpg",
      description: "Black tuxedo from crossover",
    },
  
    {
      id: 3,
      name: "3 Piece Tux",
      size: "M",
      color: "Ash",
      price: 8000,
      image: "https://i.pinimg.com/originals/c2/c8/dc/c2c8dc5f80dc74c60526cdb6845f9d82.jpg",
      description: "Classic 3 piece tuxedo",
  
      
    },
  
    {
      id: 4,
      name: "Double Breast Suit",
      size: "M",
      color: "Grey",
      price: 11000,
      image: "https://images.burton.co.uk/i/Burton/BR02S32PGRY_M_1.jpg?$w700$&qlt=80",
      description: "double breasted Men's Suit",
    },
  
    {
      id: 5,
      name: "Shoes",
      size: "8",
      color: "Brown",
      price: 4000,
      image:
        "https://wministry.com/wp-content/uploads/2019/04/alden.00.jpg",
      description: "Alden Shoes for Mens",
    },
  
    {
      id: 6,
      name: "Blue Suit",
      size: "M",
      color: "Royal Blue",
      price: 8500,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61EojKQxgQL._AC_UL320_SR314,320_.jpg",
      description: "Royal Blue Coloured Suit with blue tie",
    },
    {
      id: 7,
      name: "Shoes",
      size: "8",
      color: "black",
      price: 4000,
      image:
        "https://i.pinimg.com/originals/d1/22/8b/d1228b93011824879fc64fd6210d4277.jpg",
      description: "Black Suede Shoes",
    },
    {
      id: 8,
      name: "Specs",
      size: "SNormal",
      color: "White",
      price: 3000,
      image:
        "https://i.pinimg.com/originals/84/91/6b/84916b6b5706302082ad59096e8d8dfc.jpg",
      description: "Lindberg rimless specs",
    },
    {
      id: 9,
      name: "Sunglases",
      size: "Normal",
      color: "Black-Silver",
      price: 1200,
      image: "https://static-01.daraz.com.bd/p/2e5a42b9d0bebe1ef6a34aa9e2a2506b.jpg",
      description: "Square rim shaped Sunglasses",
    },
    {
      id: 10,
      name: "Wrist Watch",
      size: "-",
      color: "Black",
      price: 1100,
      image: "https://buywatches.ng/wp-content/uploads/2019/02/worst-fashion-trends-vincero-italian-marble-black-verde.jpg",
      description: "Black Wrist watch with black band and roman dials",
    },
    {
      id: 11,
      name: "Wrist Watch",
      size: "-",
      color: "Silver",
      price: 1500,
      image:
        "https://www.suitsexpert.com/wp-content/uploads/top-watches-to-wear-with-suit-1080x675.jpg",
      description: "Silver plated with blue coloured dial watch",
    },
    {
      id: 12,
      name: "Doublee brested suite",
      size: "M",
      color: "Henna",
      price: 12000,
      image:
        "https://i.pinimg.com/474x/8a/a7/a4/8aa7a4c4aaa6d9b38cfa54db7ac0f951.jpg",
      description: "double brested suit with long coat",
    },
  ];
   let cart=[];
   let count=0;
  function displaymerch(merchd, type="main", place="card") {
      console.log(merchd);
      let strmerch = "";
      let arrmerch="";
      merchd.forEach(function (ele, index) {
          if(type=="main"){
              strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
          </p>
        </div>
        </div>`;
        arrmerch+=strmerch;
          }
          
      if(type=="cartd"){
                  strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="/images/${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
          </p>
        </div>
        </div>`;
              
          arrmerch += strmerch;    
  
          }
      });
      
  document.getElementById(place).innerHTML = arrmerch;
      
  }
  
  
  function getProductByID(mercha, id) {
    return mercha.find(function (ele) {
      return ele.id == id;
    });
  }
  let flag=false;
  function addToCart(id) {
  flag=false;
    let item = getProductByID(merch, id);
  
    cart.forEach(function(element){
        if(element.id==item.id){
            flag=true;
            
        }
        
  
    })
    if (flag) {
        alert("Manners Maketh Man!\ndont add the same product twice");
      return 0;
    }
    cart.push(item);
    count+=1;
    document.getElementById("numb").innerText=count;
    let type="cartd";
    let place="cartcard";
    displaymerch(cart, type, place);
  
  }
  
  
  function search(){
      console.log("calling");
  }
  function deletemerch(id){
    let item = getProductByID(merch, id);
    let index = cart.findIndex(function (item1) {
      return item1.id == id;
    });
    cart.splice(index, 1);
    count-=1;
     document.getElementById("numb").innerText = count;
     let type = "cartd";
     let place = "cartcard";
     displaymerch(cart, type, place);
  }
  
  function filter(){
      let minv=document.getElementById("minp").value;
      let maxv = document.getElementById("maxp").value;
      let items= merch.filter(function(itemsl){
          return itemsl.price>=minv && itemsl.price<=maxv;
      })
       displaymerch(items);
      document.getElementById("minp").value="";
        document.getElementById("maxp").value="";
  }
  
  function search(){
      let str= document.getElementById("serstr").value;
      console.log(str);
      let items = merch.filter(function(ele) {
        return ele.name.indexOf(str)!=-1;
      });
      displaymerch(items);
  
  
  }
  displaymerch(merch);