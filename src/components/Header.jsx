import React from 'react';

const Header = () =>{
    return(

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img width='20%' class="navbar-brand" src={'../logoAbarrotes.png'} alt="" />
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">

            </li>
            <li class="nav-item active">
              <a class="navbar-brand" href="">Abarrotes Mary</a>

            </li>
            <li class="nav-item">
            <a class="navbar-brand" href="">Jugueteria</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Buscar Productos" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    )
}

export default Header;