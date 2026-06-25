import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

const baseMockDomain = 'https://api.openlibrary.mock.org';


const LS_USERS_KEY = 'users';
const users = self.localStorage.getItem(LS_USERS_KEY) ? 
  JSON.parse(self.localStorage.getItem(LS_USERS_KEY)) : 
  [];

const handleUserRegister = http.post(`${baseMockDomain}/users`, async (data) => {
  const user = await data.request.json();


  const isAlreadyRegistered = users.some((registeredUser) => registeredUser.email === user.email);
  if (isAlreadyRegistered) {
    return HttpResponse.json(
      {
        message: 'Invalid user register',
        errors: {
          email: 'Email already registered'
        }
      },
      { status: 400 }
    )
  } else {
    user.id = self.crypto.randomUUID();
    users.push(user);
    self.localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));
    return HttpResponse.json(user, { status: 201 });
  }
});

const handleLogin = http.post(`${baseMockDomain}/sessions`, async (data) => {
  const { email, password } = await data.request.json();

  const user = users.find((registeredUser) => 
    registeredUser.email === email && registeredUser.password === password
  );

  if (!user) {
    return HttpResponse.json(
      {
        message: 'Unauthorized',
        errors: {
          password: 'Invalid email or password'
        }
      },
      { status: 401 }
    )
  } else {
    const sessionUser = { ...user };
    delete sessionUser.password;
    return HttpResponse.json(sessionUser, { status: 201 });
  }
})

const worker = setupWorker(
  handleUserRegister,
  handleLogin
);

export default worker;