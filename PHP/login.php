<div class="row mx-auto mt-3 d-none" id="LoginPage">
  <div class="col-md-6 p-5"></div>
  <div class="col-md-6">
    <div
      class="w-100 ms-auto text-white p-3 border border-light rounded-4 blur-back"
    >
      <form action="" id="login-form">
        <h1 class="text-light fs-3">Login Form</h1>
        <hr />

        <div class="text-white mt-2">
          <label for="EmailInput" class="form-label mb-2">Email Id</label>
          <input
            type="email"
            class="form-control w-75"
            id="LoginEInput"
            required
          />
        </div>
        <div class="text-white mt-2 position-relative">
          <label for="LoginPInput" class="form-label mb-2">Password</label>
          <input
            type="text"
            maxlength="7"
            class="form-control w-75"
            id="LoginPInput"
            required
          />
        </div>

        <button
          class="btn btn-secondary w-50 d-block mx-auto mt-3"
          id="Login-btn"
        >
          Submit
        </button>
        <div
          class="alert alert-success w-75 mx-auto mt-5 d-none"
          id="Login-msg"
        >
          <i class="fa fa-check" aria-hidden="true"></i>
          User Login Successfully
        </div>
      </form>
    </div>
  </div>
</div>
