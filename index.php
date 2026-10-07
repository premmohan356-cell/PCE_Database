<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js
"
    />
    <link rel="stylesheet" href="CSS/bootstrap.min.css" />
    <link rel="stylesheet" href="CSS/style.css" />
    <script src="JS/bootstrap.bundle.min.js"></script>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark text-light">
      <div class="container-fluid">
        <a
          class="navbar-brand d-flex flex-column justify-content-start align-items-center"
          href="#"
          ><img src="Images/logo.png" class="logocss" alt="" /><span
            style="font-size: 0.8rem"
            >Prabhat.com</span
          ></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="row mx-auto mt-3">
      <div class="col-md-6 p-5"></div>
      <div class="col-md-6">
        <div
          class="w-100 ms-auto text-white p-3 border border-light rounded-4 blur-back"
        >
          <h1 class="text-light fs-3">Signup Form</h1>
          <hr />
          <div class="text-white mt-2">
            <label for="UserInput" class="form-label mb-2">Username</label>
            <input type="text" class="form-control w-75" id="UserInput" />
          </div>
          <div class="text-white mt-2">
            <label for="EmailInput" class="form-label mb-2">Email Id</label>
            <input type="email" class="form-control w-75" id="EmailInput" />
          </div>
          <div class="text-white mt-2">
            <label for="PassInput" class="form-label mb-2">Password</label>
            <input type="password" class="form-control w-75" id="PassInput" />
            <input type="checkbox" id="checkpass" class="ms-2" />
            <span class="fw-lighter" style="font-size: 0.9rem"
              >check password</span
            >
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="text-danger">Click Here to improve Security</span
            ><button
              class="btn btn-success text-light border blur-back border-light"
              id="passgenbtn"
            >
              Generate
            </button>
          </div>
          <button class="btn btn-secondary w-50 d-block mx-auto mt-3">
            Submit
          </button>
        </div>
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="JS/jquery.min.js"></script>
    <script src="JS/main.js"></script>
  </body>
</html>
