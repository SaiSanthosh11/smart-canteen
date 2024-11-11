import React from 'react';
import { useState } from 'react';


function Fooditems(){



    let [itemValue,setItemValue]=useState(0);

    function Value(){
        setItemValue(itemValue+1)
    }
    
    let Items={
        "canteen_menu": [
          {
            "id": 1,
            "name": "Veg Sandwich",
            "category": "Snacks",
            "description": "A healthy vegetarian sandwich with fresh vegetables and cheese.",
            "price": 50,
            "ingredients": ["bread", "lettuce", "tomato", "cheese", "cucumber", "mayonnaise"],
            "is_vegan": true,
            "is_vegetarian": true,
            "is_gluten_free": false,
            "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/sandwich-recipe-1-500x500.jpg"
          },
          {
            "id": 2,
            "name": "Cheese Pizza",
            "category": "Main Course",
            "description": "Classic cheese pizza with mozzarella and tomato sauce.",
            "price": 150,
            "ingredients": ["pizza dough", "mozzarella cheese", "tomato sauce", "oregano"],
            "is_vegan": false,
            "is_vegetarian": true,
            "is_gluten_free": false,
            "image": "https://www.recipetineats.com/tachyon/2023/05/Garlic-cheese-pizza_9.jpg"
          },
          {
            "id": 3,
            "name": "Chicken Burger",
            "category": "Snacks",
            "description": "Juicy grilled chicken patty with lettuce, cheese, and mayo in a soft bun.",
            "price": 120,
            "ingredients": ["chicken patty", "burger bun", "lettuce", "cheese", "mayo", "tomato"],
            "is_vegan": false,
            "is_vegetarian": false,
            "is_gluten_free": false,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueFoNQMeFlH-fe8rkJ9jjuyaUTdHrTwulIA&s"
          },
          {
            "id": 4,
            "name": "Fruit Salad",
            "category": "Snacks",
            "description": "A fresh mix of seasonal fruits served with a light dressing.",
            "price": 80,
            "ingredients": ["apple", "banana", "orange", "grapes", "pineapple", "honey"],
            "is_vegan": true,
            "is_vegetarian": true,
            "is_gluten_free": true,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PAphfqEK4TzamB_FFcm0CfS4y-HvVV_fHg&s"
          },
          {
            "id": 5,
            "name": "Paneer Tikka",
            "category": "Main Course",
            "description": "Grilled chunks of paneer marinated in yogurt and spices, served with mint chutney.",
            "price": 180,
            "ingredients": ["paneer", "yogurt", "spices", "mint chutney"],
            "is_vegan": false,
            "is_vegetarian": true,
            "is_gluten_free": true,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKvqnEq2iBJXQcsNlV1z85shATqEmM69l-w&s"
          },
          {
            "id": 6,
            "name": "Pasta Alfredo",
            "category": "Main Course",
            "description": "Creamy pasta with Alfredo sauce, topped with Parmesan cheese.",
            "price": 140,
            "ingredients": ["pasta", "cream", "Parmesan cheese", "garlic", "butter"],
            "is_vegan": false,
            "is_vegetarian": true,
            "is_gluten_free": false,
            "image": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-06-chicken-alfredo-pasta-reshoot%2Fchicken-alfredo-pasta-2-vertical"
          },
          {
            "id": 7,
            "name": "Lemon Iced Tea",
            "category": "Beverage",
            "description": "Chilled lemon-flavored iced tea to refresh you during hot days.",
            "price": 40,
            "ingredients": ["water", "lemon", "sugar", "tea leaves", "ice"],
            "is_vegan": true,
            "is_vegetarian": true,
            "is_gluten_free": true,
            "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2017/05/lemon-iced-tea-recipe-1.jpg"
          },
          {
            "id": 8,
            "name": "Chocolate Milkshake",
            "category": "Beverage",
            "description": "Rich and creamy chocolate milkshake topped with whipped cream.",
            "price": 90,
            "ingredients": ["milk", "chocolate syrup", "sugar", "whipped cream"],
            "is_vegan": false,
            "is_vegetarian": true,
            "is_gluten_free": false,
            "image": "https://www.sharmispassions.com/wp-content/uploads/2012/07/chocolate-milkshake1.jpg"
          }
        ]
      }
      
   return (
    <div className="text-light">
    <div className="bg-danger header display-1 text-center">
        Food Items
    </div>
    <div className='row'>
     {
        Items.canteen_menu.map((item)=>(
            <div className='card col-3' key={item.id}>
              <div className="card-body">
              <img src={item.image} className='card-img' width='100px' height='250px'  alt={item.name}/>
                <div className="card-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p><strong>Price:</strong> ₹{item.price}</p>
                    <p><strong>Category:</strong> {item.category}</p>
                    <button className='btn-sm' onClick={Value}>Add to Cart </button>
                </div>
              </div>  
            </div>
        )
    )
    }
    </div>
    {itemValue > 0 ? (
  <div className="card">
    <h1>{itemValue}</h1>
  </div>
) : (
  <div>No Items in Cart</div>
)}
</div>
   )
}

export default Fooditems; 