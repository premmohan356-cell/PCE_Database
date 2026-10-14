<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css"
      integrity="sha512-QeR2VH+lsBE5LSAe1Q5EnTBbe7XTBubt8dG93Y7gidSgdMCr8nVqKcfKAMyN96SV8KDbZVTDXChatu5G2KQGzg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="../CSS/bootstrap.min.css" />
    <link rel="stylesheet" href="../CSS/style.css" />
    <script src="../JS/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="row mx-auto mt-3 d-none" id="LoginPage">
      <div class="col-md-6 p-5"></div>
      <div class="col-md-6">
        <div
          class="w-100 ms-auto text-white p-3 border border-light rounded-4 blur-back"
        >
          <h1 class="text-light fs-3">Login Form</h1>
          <hr />
          <div class="text-white mt-2">
            <label for="UserInput" class="form-label mb-2">Username</label>
            <input type="text" class="form-control w-75" id="UserInput" />
          </div>
          <div class="text-white mt-2">
            <label for="EmailInput" class="form-label mb-2">Email Id</label>
            <input type="email" class="form-control w-75" id="EmailInput" />
          </div>
          <div class="text-white mt-2 position-relative">
            <label for="PassInput" class="form-label mb-2">Activation Code</label>
            <input
              type="text"
              class="form-control w-75"
              id="ActiveInput"
              
            />
          
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
           
          </div>
          <button class="btn btn-secondary w-50 d-block mx-auto mt-3">
            Submit
          </button>
        </div>
      </div>
    </div>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="../JS/jquery.min.js"></script>
    <script src="../JS/main.js"></script>
</body>
</html>