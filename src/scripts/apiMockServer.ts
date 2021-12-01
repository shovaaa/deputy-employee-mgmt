import { createServer, Response } from 'miragejs';
import { profilePicture } from "../components/data/userDetails.mock";

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
  },
  {
    url: 'api/employee/save',
    data: {
      payload: {
        employeeDetails: [
          {
            "gender": "female",
            "name": "Suzie Roman",
            "location": "Sicily",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "South Pole",
            "employeeId": "9877621476",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
          },
          {
            "gender": "male",
            "name": "Rick Deen",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "North Pole",
            "employeeId": "9877621449",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
          },
          {
            "gender": "male",
            "name": "Sam Costanzo",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "North Pole",
            "employeeId": "9877621023",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
          },
          {
            "gender": "female",
            "name": "Patricia Buttini",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "North Pole",
            "employeeId": "9877621112",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
          },
          {
            "gender": "male",
            "name": "Cosmo Kramer",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "North Pole",
            "employeeId": "9877621398",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
          }
        ]
      }
    }
  },
  {
    url: 'api/employee/page',
    data: {
      payload: {
        employeeDetails: [
          {
            "gender": "female",
            "name": "Suzie Roman",
            "location": "Sicily",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "South Pole",
            "employeeId": "9877621476",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
          },
          {
            "gender": "male",
            "name": "Rick Deen",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "North Pole",
            "employeeId": "9877621449",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
          },
          {
            "gender": "male",
            "name": "Sam Costanzo",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "North Pole",
            "employeeId": "9877621023",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
          },
          {
            "gender": "female",
            "name": "Patricia Buttini",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "North Pole",
            "employeeId": "9877621112",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
          },
          {
            "gender": "male",
            "name": "Cosmo Kramer",
            "location": "Downtown",
            "email": "brad.gibson@example.com",
            "status": "Employed",
            "dateOfBirth": "26-08-1997",
            "address": "North Pole",
            "employeeId": "9877621398",
            "viewMoreButton": {
              "variant": "outline-grey",
              "size": "sm",
              "buttonText": "View",
              
              "buttonAlt": "view-more",
              "buttonClass": ""
            },
            profilePicture: {...profilePicture}
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