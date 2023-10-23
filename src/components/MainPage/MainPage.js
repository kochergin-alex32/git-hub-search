import React from 'react'
import person from '../../assets/images/person.jpg'
import '../MainPage/MainPage.css'

function MainPage() {
  return (
    <div className='bg-dark '>
        <div className='component'>
        <div className='header' >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-danger" href="#">пользователи гитхаба</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="поиск пользователя" aria-label="Search"/>
        <button className="btn btn-outline-success bg-danger text-light border-danger" type="submit">найти</button>
      </form>
    </div>
  </div>
</nav>

        </div>
        <div className='content col-12 bg-dark'>
            <div className='card col-4 bg-dark'>
                <div className='img col-3 bg-light'>
                    <img  className='img'src={person} alt="" />
                    {/* <i className="bi bi-person"></i> */}
                    </div>
                <div className='cardBody col-8' >
                    <span > <a className='text-danger' href="">defunct</a>, 15 репозиториев</span>
                    <p>Hазвание организации</p>
                </div>
            </div>


            <div className='card col-4 bg-dark'>
                <div className='img col-3 bg-light'>
                    <img  className='img'src={person} alt="" />
                    {/* <i className="bi bi-person"></i> */}
                    </div>
                <div className='cardBody col-8' >
                    <span > <a className='text-danger' href="">defunct</a>, 15 репозиториев</span>
                    <p>Hазвание организации</p>
                </div>
            </div>
           
            <div className='card col-4 bg-dark'>
                <div className='img col-3 bg-light'>
                    <img  className='img'src={person} alt="" />
                    {/* <i className="bi bi-person"></i> */}
                    </div>
                <div className='cardBody col-8' >
                    <span > <a className='text-danger' href="">defunct</a>, 15 репозиториев</span>
                    <p>Hазвание организации</p>
                </div>
            </div>
            <div className='card col-4 bg-dark'>
                <div className='img col-3 bg-light'>
                    <img  className='img'src={person} alt="" />
                    {/* <i className="bi bi-person"></i> */}
                    </div>
                <div className='cardBody col-8' >
                    <span > <a className='text-danger' href="">defunct</a>, 15 репозиториев</span>
                    <p>Hазвание организации</p>
                </div>
            </div>
            <div className='card col-4 bg-dark'>
                <div className='img col-3 bg-light'>
                    <img  className='img'src={person} alt="" />
                    {/* <i className="bi bi-person"></i> */}
                    </div>
                <div className='cardBody col-8' >
                    <span > <a className='text-danger' href="">defunct</a>, 15 репозиториев</span>
                    <p>Hазвание организации</p>
                </div>
            </div>
            <div className='card col-4 bg-dark'>
                <div className='img col-3 bg-light'>
                    <img  className='img'src={person} alt="" />
                    {/* <i className="bi bi-person"></i> */}
                    </div>
                <div className='cardBody col-8' >
                    <span > <a className='text-danger' href="">defunct</a>, 15 репозиториев</span>
                    <p>Hазвание организации</p>
                </div>
            </div>
            <div className='card col-4 bg-dark'>
                <div className='img col-3 bg-light'>
                    <img  className='img'src={person} alt="" />
                    {/* <i className="bi bi-person"></i> */}
                    </div>
                <div className='cardBody col-8' >
                    <span > <a className='text-danger' href="">defunct</a>, 15 репозиториев</span>
                    <p>Hазвание организации</p>
                </div>
            </div>
            <div className='card col-4 bg-dark'>
                <div className='img col-3 bg-light'>
                    <img  className='img'src={person} alt="" />
                    {/* <i className="bi bi-person"></i> */}
                    </div>
                <div className='cardBody col-8' >
                    <span > <a className='text-danger' href="">defunct</a>, 15 репозиториев</span>
                    <p>Hазвание организации</p>
                </div>
            </div>
            <div className='card col-4 bg-dark'>
                <div className='img col-3 bg-light'>
                    <img  className='img'src={person} alt="" />
                    {/* <i className="bi bi-person"></i> */}
                    </div>
                <div className='cardBody col-8' >
                    <span > <a className='text-danger' href="">defunct</a>, 15 репозиториев</span>
                    <p>Hазвание организации</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MainPage