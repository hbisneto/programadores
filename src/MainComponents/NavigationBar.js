import React from 'react'

export default function NavigationBar() {
  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Programadores</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Grupo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Materiais</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Contribuidores</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}
