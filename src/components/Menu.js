import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';


const Menu = () => {

    const handleOrder = (recipe) => {
        console.log(recipe.id, "id is clicked");
        console.log(recipe.title, "is clicked");

        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
          title: `Do you want to confirm order,
          ${recipe.title}?`,
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, order it!',
          cancelButtonText: 'No, Cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: 'Ordered!',
              icon: 'success',
              text: 'Your order has been confirmed.',
              timer: 3000
            })
          }
        })

  }
    return (
      <div className="menu-container">
        <div className="menu-header">
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="cards">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="menu-items">
              <img src={recipe.image} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h5>{recipe.title}</h5>
                  <p>${recipe.price}</p>
                </div>
                <p>{recipe.description}</p>
                <button className="orderbtn" onClick={() => handleOrder(recipe)}>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Menu;