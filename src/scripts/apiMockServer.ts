import { createServer, Response } from 'miragejs';

const apiList = [
  {
    url: 'api/employee/search',
    data: {
      payload: {
        employeeDetails: [
          {
            "gender": "male",
            "name": "Pasta Ham",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              "buttonLink": "#",
              "buttonAlt": "view-more"
            }
          },
          {
            "gender": "male",
            "name": "Pasta Ham",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              "buttonLink": "#",
              "buttonAlt": "view-more"
            }
          }
        ]
      }
    }
  },
  {
    url: '/api/employee/filter',
    data: {
      payload: {
        employeeDetails: [
          {
            "gender": "male",
            "name": "Pizza Ham",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              "buttonLink": "#",
              "buttonAlt": "view-more"
            }
          },
          {
            "gender": "male",
            "name": "Pasta Luke",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              "buttonLink": "#",
              "buttonAlt": "view-more"
            }
          }
        ]
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
      { timing: 500 });

  const setPost = (apiSpec: any) =>
    mockServer.post(
      apiSpec.url,
      () => new Response(200, {}, apiSpec.data),
      { timing: 500 });

  apiList.forEach(setGet);
  apiList.forEach(setPost);

  mockServer.passthrough((request) => request.url.match(/mocky.io/g));
}