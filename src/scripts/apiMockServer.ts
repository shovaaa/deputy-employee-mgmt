import { createServer, Response } from 'miragejs';

const apiList = [
  {
    url: '/api/employee/listing',
    data: {
      payload: {

      }
    }
  }

];

export const initApiMockServer = () => {
  const mockServer = createServer({});

  const setGet = (apiSpec: any) =>
    mockServer.get(
      apiSpec.url,
      () => new Response(200, {}, apiSpec.data),
      {timing: 500});

  apiList.forEach(setGet);

  mockServer.passthrough((request) => request.url.match(/mocky.io/g));
}