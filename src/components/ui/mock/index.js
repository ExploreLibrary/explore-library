import { hppt, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

const baseMockDomain = 'http://api.explorelibrary.mock.org';


const worker = setupWorker(
    handleUserRegisterRegister,
    handelLogin
);
export default worker;
