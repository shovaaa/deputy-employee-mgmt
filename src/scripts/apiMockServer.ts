import { createServer, Response } from 'miragejs';

const apiList = [
  {
    url: 'api/employee/search',
    data: {
      payload: {
        employeeDetails: [
          {
            "gender": "female",
            "name": "Elaine Gomez",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              "buttonAlt": "view-more",
              "buttonClass": ""
            }
          },
          {
            "gender": "male",
            "name": "Peter Johnson",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              "buttonAlt": "view-more",
              "buttonClass": ""
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
            "gender": "female",
            "name": "Rose Smith",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              "buttonAlt": "view-more",
              "buttonClass": ""
            }
          },
          {
            "gender": "male",
            "name": "Luke Pitt",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              "buttonAlt": "view-more",
              "buttonClass": ""
            }
          },
          {
            "gender": "male",
            "name": "Jerry Seinfield",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              "buttonAlt": "view-more",
              "buttonClass": ""
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